const heroGrid = document.getElementById('heroGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect'); // ตัวแปรใหม่สำหรับ Dropdown
const modal = document.getElementById('heroModal');
const modalContent = document.getElementById('modalContent');

let currentFilter = 'All';
let currentSortMode = 'name'; // ค่าเริ่มต้น: เรียงตามชื่อ (A-Z)

// เริ่มต้นทำงาน
displayHeroes(heroesData);

// --- ฟังก์ชันจัดการเมื่อเปลี่ยนโหมดเรียง (Dropdown) ---
function handleSortChange() {
    currentSortMode = document.getElementById('sortSelect').value;
    // รีเฟรชการแสดงผล (เรียก Filter เพื่อให้มันส่งข้อมูลไป Render ใหม่)
    filterHeroes(currentFilter);
}

// --- 1. ส่วนแสดงผลหน้าหลัก (Main Grid) ---
function displayHeroes(heroes) {
    heroGrid.innerHTML = ''; 

    // 1. เรียงลำดับข้อมูล (Clone เพื่อไม่ให้กระทบ Array หลัก)
    let sortedHeroes = [...heroes];
    
    if (currentSortMode === 'winrate') {
        // เรียง Win Rate: มาก -> น้อย
        sortedHeroes.sort((a, b) => (b.winRate || 0) - (a.winRate || 0));
    } else {
        // เรียงชื่อ: A -> Z
        sortedHeroes.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortedHeroes.length === 0) {
        heroGrid.innerHTML = `<div class="col-span-full text-center text-gray-500 py-10">ไม่พบฮีโร่ที่ค้นหา...</div>`;
        return;
    }

    sortedHeroes.forEach((hero, index) => {
        const wr = hero.winRate ? hero.winRate.toFixed(2) + '%' : 'N/A';
        
        let wrColor = 'text-gray-400';
        if (hero.winRate >= 55) wrColor = 'text-yellow-400 font-bold';
        else if (hero.winRate >= 50) wrColor = 'text-green-400';
        else if (hero.winRate < 50) wrColor = 'text-red-400';

        // แสดงอันดับ #1, #2 เฉพาะตอนเรียงแบบ Win Rate
        const rankBadge = currentSortMode === 'winrate' 
            ? `<div class="absolute top-2 left-2 bg-yellow-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shadow-lg border border-yellow-400">#${index + 1}</div>` 
            : '';

        const card = document.createElement('div');
        card.className = 'hero-card bg-gray-800 rounded-xl overflow-hidden border border-gray-700 cursor-pointer transition-all duration-200 relative group';
        card.onclick = () => openModal(hero);

        card.innerHTML = `
            <div class="aspect-square overflow-hidden bg-gray-900 relative">
                <img src="hero icon/${hero.name}.png" 
                     onerror="this.src='https://via.placeholder.com/150?text=${hero.name}'" 
                     alt="${hero.name}" 
                     class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
                
                <div class="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md border border-gray-600 shadow-md">
                    <span class="text-xs text-gray-300">WR:</span>
                    <span class="${wrColor} text-sm">${wr}</span>
                </div>
                
                ${rankBadge}
            </div>
            <div class="p-2 text-center bg-gray-800">
                <h3 class="text-sm font-semibold text-gray-200 truncate group-hover:text-yellow-400">${hero.name}</h3>
            </div>
        `;
        heroGrid.appendChild(card);
    });
}

// ไม่ต้องใช้ sortByWinRate แยกแล้ว เพราะรวม logic ไปใน displayHeroes แล้ว
// แต่ถ้ามีปุ่มเดิมเรียกใช้ ก็เก็บไว้ได้ หรือลบออกก็ได้
function sortByWinRate() {
    // Legacy function support (ถ้ายังมีปุ่มเก่า)
    document.getElementById('sortSelect').value = 'winrate';
    handleSortChange();
}

function filterHeroes(role) {
    currentFilter = role;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        // เช็คว่ากดปุ่มไหน (ใช้ includes เพราะใน HTML มี SVG/Span)
        if (btn.innerText.includes(role.toUpperCase())) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // กรองข้อมูลก่อน แล้วส่งไปให้ displayHeroes (ซึ่งจะไปเรียงลำดับต่อเอง)
    if (role === 'All') {
        displayHeroes(heroesData);
    } else {
        const filtered = heroesData.filter(h => h.role.includes(role));
        displayHeroes(filtered);
    }
}

searchInput.addEventListener('input', (e) => {
    const txt = e.target.value.toLowerCase();
    
    // กรองชื่อก่อน
    let filtered = heroesData.filter(h => h.name.toLowerCase().includes(txt));
    
    // กรอง Role ด้วยถ้ายูสเซอร์เลือกอยู่
    if (currentFilter !== 'All') {
        filtered = filtered.filter(h => h.role.includes(currentFilter));
    }

    displayHeroes(filtered);
});

// --- 2. ส่วน Modal ข้อมูลฮีโร่ (เหมือนเดิม) ---
function openModal(hero) {
    document.getElementById('modalName').innerText = hero.name;
    document.getElementById('modalRole').innerText = hero.role;
    document.getElementById('modalTips').innerText = hero.tips;
    document.getElementById('modalImg').src = `hero icon/${hero.name}.png`;

    const wr = hero.winRate ? hero.winRate + '%' : 'N/A';
    document.getElementById('modalRole').innerHTML = `${hero.role} <span class="ml-3 text-yellow-400 text-sm">Win Rate: ${wr}</span>`;

    const countersDiv = document.getElementById('modalCounters');
    countersDiv.innerHTML = '';
    
    hero.weakAgainst.forEach(item => {
        let counterName = typeof item === 'string' ? item : item.name;
        let counterReason = typeof item === 'string' ? 'แพ้ทางโดยธรรมชาติ' : item.reason;
        let imgPath = `hero icon/${counterName}.png`; 

        const html = `
            <div class="flex flex-row items-start gap-4 bg-gray-800 hover:bg-gray-700 p-4 rounded-2xl border border-gray-700 transition-all duration-300 shadow-lg group">
                <div class="relative shrink-0">
                    <img src="${imgPath}" onerror="this.src='https://via.placeholder.com/150?text=${counterName}'" class="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover bg-black border-2 border-gray-600 group-hover:border-red-500 shadow-md">
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-red-400 font-bold text-xl md:text-2xl mb-1 truncate">${counterName}</h4>
                    <p class="text-gray-300 text-sm md:text-base leading-snug font-light">${counterReason}</p>
                </div>
            </div>
        `;
        countersDiv.innerHTML += html;
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('modal-open');
    }, 200);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeLeaderboard();
        closeTeamAnalysis();
    }
});

// --- 3. Leaderboard Logic (เหมือนเดิม) ---
const leaderboardModal = document.getElementById('leaderboardModal');
const leaderboardContent = document.getElementById('leaderboardContent');

function openLeaderboard() {
    leaderboardContent.innerHTML = '';
    const sortedHeroes = [...heroesData].sort((a, b) => (b.winRate || 0) - (a.winRate || 0));

    sortedHeroes.forEach((hero, index) => {
        const rank = index + 1;
        const winRate = hero.winRate ? hero.winRate.toFixed(2) + '%' : 'N/A';
        
        let rowClass = "bg-gray-800/40 hover:bg-gray-700 border-gray-700";
        let rankDisplay = `<span class="text-gray-400 font-bold">#${rank}</span>`;
        let textClass = "text-gray-300";

        if (rank === 1) {
            rowClass = "bg-gradient-to-r from-yellow-900/40 to-gray-800 border-yellow-600/50 shadow-[inset_0_0_20px_rgba(234,179,8,0.1)]";
            rankDisplay = `<div class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-yellow-500/50">1</div>`;
            textClass = "text-yellow-400 font-bold";
        } else if (rank === 2) {
            rowClass = "bg-gradient-to-r from-gray-700/40 to-gray-800 border-gray-400/50";
            rankDisplay = `<div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-black text-sm shadow-lg">2</div>`;
            textClass = "text-gray-200 font-bold";
        } else if (rank === 3) {
            rowClass = "bg-gradient-to-r from-orange-900/40 to-gray-800 border-orange-600/50";
            rankDisplay = `<div class="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-black text-sm shadow-lg">3</div>`;
            textClass = "text-orange-300 font-bold";
        }

        const rowHTML = `
            <div class="grid grid-cols-12 gap-2 items-center px-4 py-3 rounded-xl border ${rowClass} transition-all duration-200 group">
                <div class="col-span-2 flex justify-center">${rankDisplay}</div>
                <div class="col-span-5 md:col-span-6 flex items-center gap-3 md:gap-4 overflow-hidden">
                    <img src="hero icon/${hero.name}.png" onerror="this.src='https://via.placeholder.com/50'" class="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover bg-black border border-gray-600">
                    <span class="${textClass} text-sm md:text-lg truncate">${hero.name}</span>
                </div>
                <div class="col-span-3 md:col-span-2 text-center">
                    <span class="bg-gray-900/50 text-gray-400 text-[10px] md:text-xs px-2 py-1 rounded border border-gray-700 truncate block mx-auto w-fit">${hero.role}</span>
                </div>
                <div class="col-span-2 text-right pr-2">
                    <span class="${rank <= 3 ? 'text-white' : 'text-gray-300'} font-bold text-sm md:text-base">${winRate}</span>
                </div>
            </div>
        `;
        leaderboardContent.innerHTML += rowHTML;
    });

    leaderboardModal.classList.remove('hidden');
    leaderboardModal.classList.add('flex');
    document.body.classList.add('modal-open');
}

function closeLeaderboard() {
    leaderboardModal.classList.add('hidden');
    leaderboardModal.classList.remove('flex');
    document.body.classList.remove('modal-open');
}

// --- 4. TEAM ANALYSIS LOGIC (เหมือนเดิม) ---

const teamModal = document.getElementById('teamModal');
const teamSearch = document.getElementById('teamSearch');
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
        wrapper.className = "flex flex-col items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform duration-200";
        
        const imgStyle = isSelected 
            ? "opacity-40 grayscale border-gray-600 cursor-not-allowed" 
            : "hover:scale-105 border-gray-500 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.6)]";

        wrapper.innerHTML = `
            <div class="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${imgStyle} transition-all duration-200 bg-gray-900 overflow-hidden shadow-lg">
                <img src="hero icon/${hero.name}.png" onerror="this.src='https://via.placeholder.com/80'" class="w-full h-full object-cover">
                ${isSelected ? '<div class="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-bold text-xl">✓</div>' : ''}
            </div>
            <span class="text-xs md:text-sm text-gray-400 group-hover:text-white truncate w-full text-center font-medium">${hero.name}</span>
        `;
        
        if (!isSelected) {
            wrapper.onclick = () => addToEnemyTeam(hero);
        }
        pickerGrid.appendChild(wrapper);
    });
}

function filterPicker(role) {
    pickerFilterRole = role;
    
    document.querySelectorAll('.picker-filter').forEach(btn => {
        const isTarget = btn.innerText === role || (role === 'All' && btn.innerText === 'All');
        
        if (isTarget) {
            btn.classList.remove('bg-transparent', 'text-gray-400', 'hover:bg-gray-700');
            btn.classList.add('bg-gray-700', 'text-gray-300', 'border-gray-500');
        } else {
            btn.classList.add('bg-transparent', 'text-gray-400', 'hover:bg-gray-700');
            btn.classList.remove('bg-gray-700', 'text-gray-300', 'border-gray-500');
        }
    });

    const currentSearch = teamSearch ? teamSearch.value : "";
    renderPickerGrid(currentSearch);
}

function addToEnemyTeam(hero) {
    if (enemyTeam.length >= 5) return;
    enemyTeam.push(hero);
    updateEnemySlots();
    renderPickerGrid(teamSearch.value);
    analyzeTeam();
}

function removeEnemy(index) {
    if (index < enemyTeam.length) {
        enemyTeam.splice(index, 1);
        updateEnemySlots();
        renderPickerGrid(teamSearch.value);
        analyzeTeam();
    }
}

function updateEnemySlots() {
    for (let i = 0; i < 5; i++) {
        const slot = document.getElementById(`enemySlot${i+1}`);
        if (enemyTeam[i]) {
            slot.innerHTML = `<img src="hero icon/${enemyTeam[i].name}.png" class="w-full h-full rounded-full object-cover">
                              <div class="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-110 transition-transform">✕</div>`;
            slot.classList.add('border-red-500', 'shadow-[0_0_10px_rgba(239,68,68,0.5)]');
            slot.classList.remove('border-dashed', 'border-gray-500');
        } else {
            slot.innerHTML = '<span class="text-3xl text-gray-600 group-hover:text-red-400 transition-colors">+</span>';
            slot.classList.remove('border-red-500', 'shadow-[0_0_10px_rgba(239,68,68,0.5)]');
            slot.classList.add('border-dashed', 'border-gray-500');
        }
    }
}

if(teamSearch) {
    teamSearch.addEventListener('input', (e) => {
        renderPickerGrid(e.target.value);
    });
}

function analyzeTeam() {
    suggestionList.innerHTML = '';
    dreamTeamContainer.innerHTML = '<div class="text-gray-500 text-sm italic w-full text-center py-4 bg-gray-800/50 rounded-xl border border-dashed border-gray-600">เลือกศัตรูให้ครบเพื่อดู Dream Team</div>';

    if (enemyTeam.length === 0) {
        suggestionList.innerHTML = `
            <div class="text-center text-gray-500 mt-20 opacity-60">
                <p class="text-6xl mb-4">🛡️⚔️</p>
                <p class="text-xl font-bold">เลือกฮีโร่ฝั่งตรงข้าม</p>
                <p class="text-base">เพื่อเริ่มการวิเคราะห์</p>
            </div>`;
        return;
    }

    let scores = {};
    let reasons = {};

    enemyTeam.forEach(enemy => {
        enemy.weakAgainst.forEach(weak => {
            let counterName = typeof weak === 'string' ? weak : weak.name;
            let reasonText = typeof weak === 'string' ? 'ชนะทางธรรมชาติ' : weak.reason;

            if (!scores[counterName]) scores[counterName] = 0;
            if (!reasons[counterName]) reasons[counterName] = [];
            
            scores[counterName] += 10;
            reasons[counterName].push(`<span class="text-red-300 font-bold">${enemy.name}</span>: ${reasonText}`);
        });
    });

    heroesData.forEach(h => {
        if (!scores[h.name]) scores[h.name] = 0;
        scores[h.name] += (h.winRate || 50) / 10;
    });

    let sortedSuggestions = Object.keys(scores).map(key => {
        const heroInfo = heroesData.find(h => h.name === key);
        if(!heroInfo) return null;
        
        const isEnemy = enemyTeam.some(e => e.name === heroInfo.name);
        if (isEnemy) return null;

        return { 
            name: key, 
            score: scores[key], 
            reasons: reasons[key] || [], 
            info: heroInfo,
            pureScore: reasons[key] ? reasons[key].length : 0
        };
    }).filter(item => item !== null)
      .sort((a, b) => b.score - a.score);

    sortedSuggestions.slice(0, 10).forEach((item, index) => {
        const imgPath = item.info ? `hero icon/${item.name}.png` : `https://via.placeholder.com/150`;
        const role = item.info ? item.info.role : 'Unknown';
        
        let borderClass = 'border-gray-700';
        let bgClass = 'bg-gray-800';
        let scoreBadge = '';

        if (item.pureScore >= 2) {
            borderClass = 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.15)]';
            bgClass = 'bg-gradient-to-r from-gray-800 to-yellow-900/30';
            scoreBadge = `<span class="bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded ml-2 shadow-sm">🔥 KILL ${item.pureScore}</span>`;
        }

        const html = `
            <div class="flex gap-5 p-4 rounded-2xl border ${borderClass} ${bgClass} items-start transition-all hover:bg-gray-750 hover:scale-[1.02]">
                <div class="relative shrink-0">
                    <img src="${imgPath}" class="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover bg-black border-2 border-gray-600 shadow-lg">
                    <div class="absolute -top-3 -left-3 bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-gray-500 shadow-md">#${index + 1}</div>
                </div>
                <div class="flex-1 min-w-0 py-1">
                    <div class="flex items-center mb-1">
                        <h4 class="text-white font-black text-xl md:text-2xl truncate tracking-wide">${item.name}</h4>
                        ${scoreBadge}
                    </div>
                    <span class="text-xs font-bold text-gray-300 uppercase tracking-wider bg-gray-700/50 px-2 py-0.5 rounded border border-gray-600">${role}</span>
                    <ul class="mt-3 text-sm text-gray-300 space-y-1.5 list-disc list-inside">
                        ${item.reasons.length > 0 ? item.reasons.map(r => `<li class="leading-snug opacity-90 text-sm">${r}</li>`).join('') : '<li class="text-gray-500">Pick ที่ดีจาก Win Rate</li>'}
                    </ul>
                </div>
            </div>
        `;
        suggestionList.innerHTML += html;
    });

    updateDreamTeam(sortedSuggestions);
}

function updateDreamTeam(allCandidates) {
    dreamTeamContainer.innerHTML = '';
    const usedHeroes = new Set();

    const positions = [
        { label: "Roam", filter: (h) => h.role.includes("Tank") || h.role.includes("Support") },
        { label: "Exp",  filter: (h) => h.role.includes("Fighter") || h.role.includes("Tank") },
        { label: "Mid",  filter: (h) => h.role.includes("Mage") },
        { label: "Gold", filter: (h) => h.role.includes("Marksman") },
        { label: "Jungle", filter: (h) => h.role.includes("Assassin") || h.role.includes("Fighter") }
    ];

    positions.forEach(pos => {
        const bestHero = allCandidates.find(c => 
            pos.filter(c.info) && !usedHeroes.has(c.name)
        );

        if (bestHero) {
            usedHeroes.add(bestHero.name);
            const counterCount = bestHero.pureScore > 0 ? `<span class="text-green-400 text-[10px] font-bold">แก้ ${bestHero.pureScore}</span>` : '';
            
            const html = `
                <div class="flex-1 bg-gray-800 rounded-xl p-2 border border-gray-600 flex flex-col items-center shadow-lg relative group overflow-hidden hover:border-yellow-500 transition-colors">
                    <span class="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">${pos.label}</span>
                    <img src="hero icon/${bestHero.name}.png" class="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-blue-500/50 mb-1 group-hover:scale-110 transition-transform shadow-md">
                    <span class="text-[10px] md:text-xs font-bold text-white truncate w-full text-center">${bestHero.name}</span>
                    ${counterCount}
                    ${bestHero.reasons.length > 0 ? `
                    <div class="absolute inset-0 bg-black/90 flex flex-col justify-center items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center cursor-help">
                        <p class="text-[10px] text-red-300 leading-tight font-bold">ชนะทาง:</p>
                        <p class="text-[9px] text-white">${bestHero.reasons.length} ตัว</p>
                    </div>` : ''}
                </div>
            `;
            dreamTeamContainer.innerHTML += html;
        } else {
            dreamTeamContainer.innerHTML += `
                <div class="flex-1 bg-gray-800/50 rounded-xl p-2 border border-dashed border-gray-600 flex flex-col items-center justify-center">
                    <span class="text-[10px] text-gray-500">${pos.label}</span>
                    <span class="text-xs text-gray-600">-</span>
                </div>`;
        }
    });
}