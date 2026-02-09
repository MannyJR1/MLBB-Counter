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

// --- 1. Main Grid (หน้าแสดงฮีโร่ทั้งหมด) ---
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
    if (currentFilter !== 'All') {
        displayHeroes(heroesData.filter(h => h.name.toLowerCase().includes(txt) && h.role.includes(currentFilter)));
    } else {
        displayHeroes(heroesData.filter(h => h.name.toLowerCase().includes(txt)));
    }
});

// --- 2. Modal (แสดงรายละเอียดฮีโร่เมื่อกด) ---
function openModal(hero) {
    document.getElementById('modalName').innerText = hero.name;
    document.getElementById('modalRole').innerText = hero.role;
    document.getElementById('modalTips').innerText = hero.tips;
    document.getElementById('modalImg').src = `hero icon/${hero.name}.png`;
    
    const countersDiv = document.getElementById('modalCounters');
    countersDiv.innerHTML = '';
    
    if (hero.weakAgainst) {
        hero.weakAgainst.forEach(item => {
            let name = typeof item === 'string' ? item : item.name;
            let reason = typeof item === 'string' ? 'แพ้ทาง (Counter Pick)' : item.reason;
            
            countersDiv.innerHTML += `
                <div class="flex items-center gap-3 bg-gray-800 p-4 rounded-2xl border border-gray-700">
                    <img src="hero icon/${name}.png" class="w-16 h-16 rounded-xl bg-black">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-red-400 font-bold text-lg truncate">${name}</h4>
                        <p class="text-gray-400 text-sm">${reason}</p>
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

// --- 3. Team Analysis Logic ---
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
        const imgStyle = isSelected ? "opacity-40 grayscale border-gray-600" : "hover:scale-105 border-gray-500 group-hover:border-blue-400";

        wrapper.innerHTML = `
            <div class="relative w-14 h-14 md:w-20 md:h-20 rounded-full border-2 ${imgStyle} bg-gray-900 overflow-hidden transition-all">
                <img src="hero icon/${hero.name}.png" class="w-full h-full object-cover">
                ${isSelected ? '<div class="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold text-xs">✓</div>' : ''}
            </div>
            <span class="text-[10px] md:text-sm text-gray-400 truncate w-full text-center">${hero.name}</span>
        `;
        if (!isSelected) wrapper.onclick = () => addToEnemyTeam(hero);
        pickerGrid.appendChild(wrapper);
    });
}

function addToEnemyTeam(hero) {
    if (enemyTeam.length >= 5) return;
    enemyTeam.push(hero);
    updateEnemySlots();
    const searchVal = document.getElementById('teamSearch') ? document.getElementById('teamSearch').value : "";
    renderPickerGrid(searchVal);
    analyzeTeam();
}

function removeEnemy(index) {
    if (index < enemyTeam.length) {
        enemyTeam.splice(index, 1);
        updateEnemySlots();
        const searchVal = document.getElementById('teamSearch') ? document.getElementById('teamSearch').value : "";
        renderPickerGrid(searchVal);
        analyzeTeam();
    }
}

function updateEnemySlots() {
    for (let i = 0; i < 5; i++) {
        const slot = document.getElementById(`enemySlot${i+1}`);
        if (enemyTeam[i]) {
            // แก้ไข: เหลือเพียงรูปฮีโร่เต็มวงกลม (ลบ div ปุ่ม x ออก)
            slot.innerHTML = `<img src="hero icon/${enemyTeam[i].name}.png" class="w-full h-full rounded-full object-cover shadow-lg">`;
            slot.classList.add('border-red-500');
            slot.classList.remove('border-dashed', 'border-gray-500');
        } else {
            // ส่วนที่ยังไม่ได้เลือกฮีโร่
            slot.innerHTML = '<span class="text-xl md:text-3xl text-gray-600">+</span>';
            slot.classList.remove('border-red-500');
            slot.classList.add('border-dashed', 'border-gray-500');
        }
    }
}

function filterPicker(role) {
    pickerFilterRole = role;
    document.querySelectorAll('.picker-filter').forEach(btn => {
        if (btn.innerText.includes(role.toUpperCase()) || (role === 'All' && btn.innerText === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    const searchVal = document.getElementById('teamSearch') ? document.getElementById('teamSearch').value : "";
    renderPickerGrid(searchVal);
}

const teamSearchInput = document.getElementById('teamSearch');
if(teamSearchInput) {
    teamSearchInput.addEventListener('input', (e) => renderPickerGrid(e.target.value));
}

// --- 4. Logic วิเคราะห์ทีม (20 อันดับ + UI ขนาดใหญ่) ---
function analyzeTeam() {
    suggestionList.innerHTML = '';
    dreamTeamContainer.innerHTML = '<div class="text-gray-400 text-sm w-full text-center py-4 border border-dashed border-gray-700 rounded-2xl">เลือกศัตรูเพื่อเริ่มการวิเคราะห์</div>';

    if (enemyTeam.length === 0) {
        suggestionList.innerHTML = `<div class="text-center text-gray-500 mt-20 opacity-60"><p class="text-7xl mb-4">🛡️</p><p class="text-xl">เลือกฮีโร่ฝั่งตรงข้ามเพื่อเริ่มวิเคราะห์</p></div>`;
        return;
    }

    let scores = {};
    let reasons = {};

    enemyTeam.forEach(enemy => {
        if (!enemy.weakAgainst) return; 
        enemy.weakAgainst.forEach(weak => {
            let name = typeof weak === 'string' ? weak : weak.name;
            let reason = typeof weak === 'string' ? 'ชนะทางโดยธรรมชาติ' : weak.reason;
            if (!scores[name]) scores[name] = 0;
            if (!reasons[name]) reasons[name] = [];
            scores[name] += 10;
            reasons[name].push(`<span class="text-red-400 font-black">${enemy.name}</span>: <span class="text-gray-200">${reason}</span>`);
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

    // ปรับเป็น 20 อันดับ
    sorted.slice(0, 20).forEach((item, index) => {
        const isGold = item.pureScore >= 2;
        // ปรับ Container ให้กว้างและใหญ่ขึ้น
        const containerClass = isGold 
            ? "border-4 border-yellow-500 bg-[#151515] shadow-[0_0_30px_rgba(234,179,8,0.3)] scale-[1.01]" 
            : "border-2 border-gray-700 bg-gray-800 hover:bg-gray-750";

        const badge = item.pureScore >= 1 
            ? `<span class="${isGold ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'} text-sm font-black px-3 py-1 rounded-lg ml-3 flex items-center gap-1 shadow-md">KILL ${item.pureScore} ${isGold ? '🔥' : ''}</span>` 
            : '';

        let reasonsHtml = '';
        if (item.reasons.length > 0) {
            reasonsHtml = item.reasons.map(r => 
                `<li class="mb-3 text-base md:text-lg leading-relaxed flex items-start gap-3">
                    <span class="mt-2 w-2.5 h-2.5 rounded-full bg-yellow-500/70 shrink-0 shadow-[0_0_8px_yellow]"></span> 
                    <span>${r}</span>
                </li>`
            ).join('');
        } else {
            reasonsHtml = '<li class="text-gray-500 text-lg">แนะนำตามค่า Win Rate พื้นฐาน</li>';
        }

        suggestionList.innerHTML += `
            <div class="p-6 rounded-[32px] ${containerClass} mb-6 relative overflow-hidden group transition-all duration-300">
                <div class="flex gap-6 mb-5 relative z-10">
                    <div class="relative shrink-0">
                        <img src="hero icon/${item.name}.png" class="w-24 h-24 rounded-[2rem] bg-black border-2 border-gray-600 object-cover shadow-2xl">
                        <div class="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white border-2 border-gray-500 text-base font-black shadow-2xl">#${index+1}</div>
                    </div>
                    <div class="flex-1 min-w-0 flex flex-col justify-center">
                        <div class="flex items-center">
                            <h4 class="text-white font-black text-2xl md:text-4xl truncate tracking-tighter uppercase">${item.name}</h4>
                            ${badge}
                        </div>
                        <div class="mt-2">
                             <span class="text-xs text-yellow-500/80 bg-black/40 px-4 py-1.5 rounded-xl border border-yellow-900/30 uppercase font-black tracking-widest inline-block shadow-inner">${item.info.role}</span>
                        </div>
                    </div>
                </div>
                <div class="h-[2px] w-full ${isGold ? 'bg-yellow-500/20' : 'bg-gray-700'} mb-5 shadow-sm"></div>
                <div class="relative z-10 pl-2">
                    <ul class="text-gray-100">
                        ${reasonsHtml}
                    </ul>
                </div>
            </div>`;
    });

    updateDreamTeam(sorted);
}

// --- 5. Dream Team (ขนาดการ์ดกว้างขึ้น) ---
function updateDreamTeam(candidates) {
    dreamTeamContainer.innerHTML = '';
    dreamTeamContainer.className = "flex justify-center gap-4 w-full py-4 overflow-x-auto no-scrollbar";

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
            containerClass = 'border-blue-500/50 bg-gradient-to-b from-[#1e293b] to-[#0f172a] shadow-2xl scale-105';
            content = `
                <div class="relative w-14 h-14 md:w-16 md:h-16 mb-2">
                    <img src="hero icon/${best.name}.png" class="w-full h-full rounded-full border-2 border-blue-400 object-cover shadow-lg">
                </div>
                <span class="text-xs md:text-sm text-white font-black truncate w-full text-center tracking-tight uppercase">${best.name}</span>
            `;
        } else {
            containerClass = 'border-gray-700 border-dashed bg-gray-800/30 opacity-60';
            content = `
                <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-800 flex items-center justify-center mb-2 border border-gray-600">
                    <span class="text-gray-600 text-xl font-bold">?</span>
                </div>
                <span class="text-xs text-gray-600 font-black">-</span>
            `;
        }

        // ขนาดกว้างขึ้นเป็น w-28 เพื่อความชัดเจน
        dreamTeamContainer.innerHTML += `
            <div class="flex-none w-28 md:w-32 rounded-[2rem] p-3 border ${containerClass} flex flex-col items-center justify-center transition-all hover:-translate-y-2">
                <span class="text-[10px] text-blue-400 uppercase font-black mb-2 tracking-widest">${p.l}</span>
                ${content}
            </div>`;
    });
}

// --- 6. Leaderboard Logic ---
function closeLeaderboard() { 
    document.getElementById('leaderboardModal').classList.add('hidden'); 
    document.getElementById('leaderboardModal').classList.remove('flex'); 
    document.body.classList.remove('modal-open');
}

// --- 6. Leaderboard Logic (เวอร์ชันพรีเมียม Size 20+) ---
function openLeaderboard() {
    const lb = document.getElementById('leaderboardContent');
    lb.innerHTML = '';
    
    // เรียงลำดับฮีโร่ตาม Win Rate
    const sortedHeroes = [...heroesData].sort((a, b) => (b.winRate || 0) - (a.winRate || 0));

    sortedHeroes.forEach((h, i) => {
        const rank = i + 1;
        const wrValue = h.winRate ? h.winRate.toFixed(2) : "0.00";
        
        // กำหนดสีและสไตล์ตามอันดับ
        let rankDisplay = `#${rank}`;
        let rowStyle = "bg-gray-800/40 border-gray-700 hover:bg-gray-700/60";
        let nameColor = "text-gray-200";
        let wrColor = "text-yellow-500";

        if (rank === 1) {
            rankDisplay = "🥇";
            rowStyle = "bg-gradient-to-r from-yellow-900/40 to-gray-800 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.15)]";
            nameColor = "text-yellow-400 font-black";
            wrColor = "text-yellow-400";
        } else if (rank === 2) {
            rankDisplay = "🥈";
            rowStyle = "bg-gradient-to-r from-slate-500/20 to-gray-800 border-slate-400/40";
            nameColor = "text-white font-bold";
        } else if (rank === 3) {
            rankDisplay = "🥉";
            rowStyle = "bg-gradient-to-r from-orange-900/30 to-gray-800 border-orange-600/40";
            nameColor = "text-white font-bold";
        }

        // คำนวณความกว้างของแถบ Progress Bar (สมมติ Max คือ 60%)
        const barWidth = Math.min(((h.winRate - 40) / 20) * 100, 100);

        lb.innerHTML += `
            <div class="grid grid-cols-12 gap-4 px-6 py-5 rounded-2xl border ${rowStyle} transition-all duration-300 items-center mb-3 group">
                <div class="col-span-2 text-center">
                    <span class="text-2xl md:text-3xl font-black">${rankDisplay}</span>
                </div>

                <div class="col-span-6 flex items-center gap-5">
                    <div class="relative shrink-0">
                        <img src="hero icon/${h.name}.png" class="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover shadow-lg border border-gray-600 group-hover:border-yellow-500 transition-colors">
                        ${rank <= 3 ? '<div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-ping opacity-20"></div>' : ''}
                    </div>
                    <div class="flex flex-col min-w-0">
                        <span class="${nameColor} text-lg md:text-2xl truncate uppercase tracking-tighter">${h.name}</span>
                        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">${h.role}</span>
                    </div>
                </div>

                <div class="col-span-4 text-right flex flex-col items-end gap-1">
                    <div class="flex items-baseline gap-1">
                        <span class="${wrColor} text-2xl md:text-3xl font-black">${wrValue}</span>
                        <span class="text-xs text-gray-500 font-bold">%</span>
                    </div>
                    <div class="w-24 md:w-32 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                        <div class="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]" style="width: ${barWidth}%"></div>
                    </div>
                </div>
            </div>`;
    });

    document.getElementById('leaderboardModal').classList.remove('hidden');
    document.getElementById('leaderboardModal').classList.add('flex');
    document.body.classList.add('modal-open');
}
