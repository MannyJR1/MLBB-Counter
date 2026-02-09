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

// --- 2. Modal ---
function openModal(hero) {
    document.getElementById('modalName').innerText = hero.name;
    document.getElementById('modalRole').innerText = hero.role;
    document.getElementById('modalTips').innerText = hero.tips;
    document.getElementById('modalImg').src = `hero icon/${hero.name}.png`;
    
    const countersDiv = document.getElementById('modalCounters');
    countersDiv.innerHTML = '';
    
    hero.weakAgainst.forEach(item => {
        let name = typeof item === 'string' ? item : item.name;
        let reason = typeof item === 'string' ? 'แพ้ทาง' : item.reason;
        
        countersDiv.innerHTML += `
            <div class="flex items-center gap-3 bg-gray-800 p-2 rounded-lg border border-gray-700">
                <img src="hero icon/${name}.png" class="w-10 h-10 rounded-md bg-black">
                <div class="flex-1 min-w-0">
                    <h4 class="text-red-400 font-bold text-sm truncate">${name}</h4>
                    <p class="text-gray-400 text-xs truncate">${reason}</p>
                </div>
            </div>`;
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
}

// --- 3. Team Analysis (Responsive Icons) ---
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
        
        // ** Responsive Classes Here ** (w-12 for mobile, w-20 for desktop)
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

// --- Logic ---
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
        enemy.weakAgainst.forEach(weak => {
            let name = weak.name || weak;
            let reason = weak.reason || 'แพ้ทาง';
            if (!scores[name]) scores[name] = 0;
            if (!reasons[name]) reasons[name] = [];
            scores[name] += 10;
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

    sorted.slice(0, 10).forEach((item, index) => {
        const badge = item.pureScore >= 2 ? `<span class="bg-yellow-500 text-black text-[9px] font-bold px-1.5 rounded ml-2">KILL ${item.pureScore}</span>` : '';
        suggestionList.innerHTML += `
            <div class="flex gap-3 p-2 rounded-lg border border-gray-700 bg-gray-800 items-start">
                <div class="relative shrink-0">
                    <img src="hero icon/${item.name}.png" class="w-12 h-12 rounded-lg bg-black">
                    <div class="absolute -top-2 -left-2 bg-gray-700 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] border border-gray-500">#${index+1}</div>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-0.5">
                        <h4 class="text-white font-bold text-sm truncate">${item.name}</h4>
                        ${badge}
                    </div>
                    <span class="text-[10px] text-gray-400 bg-gray-700 px-1 rounded">${item.info.role}</span>
                    <ul class="mt-1 text-[10px] text-gray-300 list-disc list-inside leading-tight">
                        ${item.reasons.length > 0 ? item.reasons[0] + (item.reasons.length > 1 ? ` (+${item.reasons.length-1})` : '') : 'Pick จาก WinRate'}
                    </ul>
                </div>
            </div>`;
    });

    updateDreamTeam(sorted);
}

function updateDreamTeam(candidates) {
    dreamTeamContainer.innerHTML = '';
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
        if (best) {
            used.add(best.name);
            dreamTeamContainer.innerHTML += `
                <div class="flex-1 bg-gray-800 rounded p-1 border border-gray-600 flex flex-col items-center">
                    <span class="text-[8px] text-gray-400 mb-0.5">${p.l}</span>
                    <img src="hero icon/${best.name}.png" class="w-8 h-8 md:w-12 md:h-12 rounded-full border border-blue-500 mb-0.5">
                    <span class="text-[8px] md:text-[10px] text-white truncate w-full text-center">${best.name}</span>
                </div>`;
        } else {
            dreamTeamContainer.innerHTML += `
                <div class="flex-1 bg-gray-800/50 rounded p-1 border border-dashed border-gray-600 flex flex-col items-center justify-center">
                    <span class="text-[8px] text-gray-500">${p.l}</span>
                    <span class="text-[10px] text-gray-600">-</span>
                </div>`;
        }
    });
}

// Leaderboard Logic (Legacy)
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
