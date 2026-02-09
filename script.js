const heroGrid = document.getElementById('heroGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const modal = document.getElementById('heroModal');
const modalContent = document.getElementById('modalContent');

let currentFilter = 'All';
let currentSortMode = 'name';

// เริ่มต้นทำงาน
displayHeroes(heroesData);

function handleSortChange() {
    currentSortMode = document.getElementById('sortSelect').value;
    filterHeroes(currentFilter);
}

// --- 1. Main Grid ---
function displayHeroes(heroes) {
    heroGrid.innerHTML = '';
    let sortedHeroes = [...heroes];
    
    if (currentSortMode === 'winrate') {
        sortedHeroes.sort((a, b) => (b.winRate || 0) - (a.winRate || 0));
    } else {
        sortedHeroes.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortedHeroes.length === 0) {
        heroGrid.innerHTML = `<div class="col-span-full text-center text-gray-500 py-10">ไม่พบฮีโร่...</div>`;
        return;
    }

    sortedHeroes.forEach((hero, index) => {
        const wr = hero.winRate ? hero.winRate.toFixed(2) + '%' : 'N/A';
        let wrColor = hero.winRate >= 55 ? 'text-yellow-400 font-bold' : hero.winRate >= 50 ? 'text-green-400' : 'text-red-400';
        const rankBadge = currentSortMode === 'winrate' ? `<div class="absolute top-1 left-1 bg-yellow-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shadow-md">#${index + 1}</div>` : '';

        const card = document.createElement('div');
        card.className = 'hero-card bg-gray-800 rounded-lg overflow-hidden border border-gray-700 cursor-pointer relative group';
        card.onclick = () => openModal(hero);

        card.innerHTML = `
            <div class="aspect-square bg-gray-900 relative">
                <img src="hero icon/${hero.name}.png" onerror="this.src='https://via.placeholder.com/150'" class="w-full h-full object-cover">
                <div class="absolute top-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] border border-gray-600">
                    <span class="${wrColor}">${wr}</span>
                </div>
                ${rankBadge}
            </div>
            <div class="p-1.5 text-center bg-gray-800">
                <h3 class="text-[10px] md:text-sm font-semibold text-gray-200 truncate">${hero.name}</h3>
            </div>
        `;
        heroGrid.appendChild(card);
    });
}

function filterHeroes(role) {
    currentFilter = role;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText.includes(role.toUpperCase())) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    if (role === 'All') displayHeroes(heroesData);
    else displayHeroes(heroesData.filter(h => h.role.includes(role)));
}

searchInput.addEventListener('input', (e) => {
    const txt = e.target.value.toLowerCase();
    let filtered = heroesData.filter(h => h.name.toLowerCase().includes(txt));
    if (currentFilter !== 'All') filtered = filtered.filter(h => h.role.includes(currentFilter));
    displayHeroes(filtered);
});

// --- 2. Modal (รองรับ String/Object) ---
function openModal(hero) {
    document.getElementById('modalName').innerText = hero.name;
    document.getElementById('modalRole').innerText = hero.role;
    document.getElementById('modalTips').innerText = hero.tips;
    document.getElementById('modalImg').src = `hero icon/${hero.name}.png`;
    
    const countersDiv = document.getElementById('modalCounters');
    countersDiv.innerHTML = '';
    
    if (hero.weakAgainst) {
        hero.weakAgainst.forEach(item => {
            // [แก้จุดที่ 1] เช็คว่าเป็น String หรือ Object
            let name = typeof item === 'string' ? item : item.name;
            let reason = typeof item === 'string' ? 'แพ้ทาง (Counter Pick)' : item.reason;
            
            countersDiv.innerHTML += `
                <div class="flex items-center gap-3 bg-gray-800 p-2 rounded-lg border border-gray-700">
                    <img src="hero icon/${name}.png" class="w-10 h-10 rounded-md bg-black">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-red-400 font-bold text-sm truncate">${name}</h4>
                        <p class="text-gray-400 text-xs truncate">${reason}</p>
                    </div>
                </div>`;
        });
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
}

// --- 3. Team Analysis (รองรับ String/Object + Responsive) ---
const teamModal = document.getElementById('teamModal');
const pickerGrid = document.getElementById('pickerGrid');
const suggestionList = document.getElementById('suggestionList');
const dreamTeamContainer = document.getElementById('dreamTeamContainer');
let enemyTeam = [];
let pickerFilterRole = 'All';

function openTeamAnalysis() {
    teamModal.classList.remove('hidden');
    teamModal.classList.add('flex');
    pickerFilterRole = 'All';
    filterPicker('All');
    updateEnemySlots();
    analyzeTeam();
}

function closeTeamAnalysis() {
    teamModal.classList.add('hidden');
    teamModal.classList.remove('flex');
}

function renderPickerGrid(searchTerm = "") {
    pickerGrid.innerHTML = '';
    const filtered = heroesData.filter(h => {
        const nameMatch = h.name.toLowerCase().includes(searchTerm.toLowerCase());
        const roleMatch = pickerFilterRole === 'All' || h.role.includes(pickerFilterRole);
        return nameMatch && roleMatch;
    });
    
    filtered.forEach(hero => {
        const isSelected = enemyTeam.find(e => e.id === hero.id);
        const wrapper = document.createElement('div');
        wrapper.className = "flex flex-col items-center gap-1 cursor-pointer";
        
        const imgStyle = isSelected 
            ? "opacity-40 grayscale border-gray-600" 
            : "hover:scale-105 border-gray-500 group-hover:border-blue-400";

        wrapper.innerHTML = `
            <div class="relative w-12 h-12 md:w-20 md:h-20 rounded-full border-2 ${imgStyle} bg-gray-900 overflow-hidden transition-all">
                <img src="hero icon/${hero.name}.png" class="w-full h-full object-cover">
                ${isSelected ? '<div class="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold text-xs">✓</div>' : ''}
            </div>
            <span class="text-[9px] md:text-sm text-gray-400 truncate w-full text-center">${hero.name}</span>
        `;
        
        if (!isSelected) wrapper.onclick = () => addToEnemyTeam(hero);
        pickerGrid.appendChild(wrapper);
    });
}

function addToEnemyTeam(hero) {
    if (enemyTeam.length >= 5) return;
    enemyTeam.push(hero);
    updateEnemySlots();
    renderPickerGrid(document.getElementById('teamSearch').value);
    analyzeTeam();
}

function removeEnemy(index) {
    if (index < enemyTeam.length) {
        enemyTeam.splice(index, 1);
        updateEnemySlots();
        renderPickerGrid(document.getElementById('teamSearch').value);
        analyzeTeam();
    }
}

function updateEnemySlots() {
    for (let i = 0; i < 5; i++) {
        const slot = document.getElementById(`enemySlot${i+1}`);
        if (enemyTeam[i]) {
            slot.innerHTML = `<img src="hero icon/${enemyTeam[i].name}.png" class="w-full h-full rounded-full object-cover">
                              <div class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">x</div>`;
            slot.classList.add('border-red-500');
            slot.classList.remove('border-dashed', 'border-gray-500');
        } else {
            slot.innerHTML = '<span class="text-xl md:text-3xl text-gray-600">+</span>';
            slot.classList.remove('border-red-500');
            slot.classList.add('border-dashed', 'border-gray-500');
        }
    }
}

function filterPicker(role) {
    pickerFilterRole = role;
    document.querySelectorAll('.picker-filter').forEach(btn => {
        if (btn.innerText === role || (role === 'All' && btn.innerText === 'All')) {
            btn.classList.remove('bg-transparent', 'text-gray-400');
            btn.classList.add('bg-gray-700', 'text-gray-300', 'border-gray-500');
        } else {
            btn.classList.add('bg-transparent', 'text-gray-400');
            btn.classList.remove('bg-gray-700', 'text-gray-300', 'border-gray-500');
        }
    });
    renderPickerGrid(document.getElementById('teamSearch').value);
}

document.getElementById('teamSearch').addEventListener('input', (e) => {
    renderPickerGrid(e.target.value);
});

// --- Logic วิเคราะห์ทีม (รองรับ Data แบบผสม) ---
function analyzeTeam() {
    suggestionList.innerHTML = '';
    dreamTeamContainer.innerHTML = '<div class="text-gray-500 text-[10px] w-full text-center py-2 border border-dashed border-gray-600 rounded">เลือกศัตรู...</div>';

    if (enemyTeam.length === 0) {
        suggestionList.innerHTML = `<div class="text-center text-gray-500 mt-10 text-xs"><p>เลือกฮีโร่...</p></div>`;
        return;
    }

    let scores = {};
    let reasons = {};

    enemyTeam.forEach(enemy => {
        if (!enemy.weakAgainst) return; // ข้ามถ้าไม่มีข้อมูล

        enemy.weakAgainst.forEach(weak => {
            // [แก้จุดที่ 2] เช็คว่าเป็น String หรือ Object
            let name = typeof weak === 'string' ? weak : weak.name;
            let reason = typeof weak === 'string' ? 'ชนะทางโดยธรรมชาติ' : weak.reason;
            
            if (!scores[name]) scores[name] = 0;
            if (!reasons[name]) reasons[name] = [];
            
            scores[name] += 10;
            // ไฮไลท์ชื่อศัตรูที่แพ้ทาง
            reasons[name].push(`<span class="text-red-300 font-bold">${enemy.name}</span>: ${reason}`);
        });
    });

    heroesData.forEach(h => {
        if (!scores[h.name]) scores[h.name] = 0;
        scores[h.name] += (h.winRate || 50) / 10;
    });

    let sorted = Object.keys(scores).map(key => {
        const info = heroesData.find(h => h.name === key);
        if(!info || enemyTeam.some(e => e.name === info.name)) return null;
        return { name: key, score: scores[key], reasons: reasons[key] || [], info, pureScore: reasons[key] ? reasons[key].length : 0 };
    }).filter(i => i).sort((a, b) => b.score - a.score);

    sorted.slice(0, 15).forEach((item, index) => {
        const badge = item.pureScore >= 1 ? `<span class="bg-yellow-500 text-black text-[9px] font-bold px-1.5 rounded ml-2">KILL ${item.pureScore}</span>` : '';
        
        // [แก้จุดที่ 3] Responsive Reasons (Mobile ย่อ / Desktop เต็ม)
        let reasonsHtml = '';
        if (item.reasons.length > 0) {
            reasonsHtml += `<li class="mb-0.5 text-gray-300">• ${item.reasons[0]}</li>`;
            
            if (item.reasons.length > 1) {
                const remaining = item.reasons.slice(1);
                // ซ่อนในมือถือ (hidden), โชว์ในคอม (md:block)
                reasonsHtml += remaining.map(r => `<li class="mb-0.5 text-gray-400 hidden md:block">• ${r}</li>`).join('');
                // สรุปยอดในมือถือ (block md:hidden)
                reasonsHtml += `<li class="mt-1 text-yellow-500/80 text-[9px] italic block md:hidden ml-1">...และอีก ${remaining.length} ตัว</li>`;
            }
        } else {
            reasonsHtml = '<li class="text-gray-500">Pick จาก Win Rate สูง</li>';
        }

        suggestionList.innerHTML += `
            <div class="flex gap-3 p-2 rounded-lg border border-gray-700 bg-gray-800 items-start">
                <div class="relative shrink-0">
                    <img src="hero icon/${item.name}.png" class="w-12 h-12 rounded-lg bg-black border border-gray-600">
                    <div class="absolute -top-2 -left-2 bg-gray-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] border border-gray-500 font-bold shadow-md">#${index+1}</div>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-1">
                        <h4 class="text-white font-bold text-sm truncate">${item.name}</h4>
                        ${badge}
                    </div>
                    <span class="text-[9px] text-gray-400 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-700">${item.info.role}</span>
                    <ul class="mt-2 text-[10px] text-gray-300 list-inside leading-relaxed">
                        ${reasonsHtml}
                    </ul>
                </div>
            </div>`;
    });

    updateDreamTeam(sorted);
}

// --- 4. Dream Team (ไม่ยืด & สวยงาม) ---
function updateDreamTeam(candidates) {
    dreamTeamContainer.innerHTML = '';
    dreamTeamContainer.className = "flex justify-center gap-2 md:gap-4 w-full py-2 overflow-x-auto no-scrollbar";

    const used = new Set();
    const pos = [
        { l: "Roam", f: h => h.role.includes("Tank") || h.role.includes("Support") },
        { l: "Exp",  f: h => h.role.includes("Fighter") },
        { l: "Mid",  f: h => h.role.includes("Mage") },
        { l: "Gold", f: h => h.role.includes("Marksman") },
        { l: "Jungle", f: h => h.role.includes("Assassin") }
    ];

    pos.forEach(p => {
        const best = candidates.find(c => p.f(c.info) && !used.has(c.name));
        
        let content = '';
        let containerClass = '';

        if (best) {
            used.add(best.name);
            containerClass = 'border-blue-500/30 bg-gradient-to-b from-gray-800 to-[#0f172a] shadow-lg shadow-blue-900/10';
            content = `
                <div class="relative w-10 h-10 md:w-12 md:h-12 mb-1">
                    <img src="hero icon/${best.name}.png" class="w-full h-full rounded-full border-2 border-blue-400 object-cover">
                </div>
                <span class="text-[9px] md:text-[10px] text-white font-bold truncate w-full text-center">${best.name}</span>
            `;
        } else {
            containerClass = 'border-gray-700 border-dashed bg-gray-800/30 opacity-60';
            content = `
                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center mb-1 border border-gray-600">
                    <span class="text-gray-500 text-xs">?</span>
                </div>
                <span class="text-[9px] text-gray-500">-</span>
            `;
        }

        dreamTeamContainer.innerHTML += `
            <div class="flex-none w-20 md:w-24 rounded-xl p-2 border ${containerClass} flex flex-col items-center justify-center transition-all hover:-translate-y-1">
                <span class="text-[8px] text-blue-300/70 uppercase font-bold mb-1 tracking-wider">${p.l}</span>
                ${content}
            </div>`;
    });
}

// Leaderboard Logic
function closeLeaderboard() { document.getElementById('leaderboardModal').classList.add('hidden'); document.getElementById('leaderboardModal').classList.remove('flex'); }
function openLeaderboard() {
    const lb = document.getElementById('leaderboardContent');
    lb.innerHTML = '';
    [...heroesData].sort((a,b)=>(b.winRate||0)-(a.winRate||0)).forEach((h,i)=>{
        lb.innerHTML += `<div class="grid grid-cols-12 gap-1 px-4 py-2 border-b border-gray-700 text-xs items-center text-gray-300">
            <div class="col-span-2 text-center text-yellow-500 font-bold">#${i+1}</div>
            <div class="col-span-6 flex items-center gap-2"><img src="hero icon/${h.name}.png" class="w-6 h-6 rounded"> ${h.name}</div>
            <div class="col-span-4 text-right">${h.winRate}%</div>
        </div>`;
    });
    document.getElementById('leaderboardModal').classList.remove('hidden');
    document.getElementById('leaderboardModal').classList.add('flex');
}
