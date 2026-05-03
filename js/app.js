// THE WARRIOR'S CODEX — App Logic v2

const REGION_ORDER = ['lazio','campania','sicilia','toscana','modena','napoli_ponto','messina','reggio_calabria','puglia','liguria','veneto','piemonte','sardegna'];
const START_DATE = new Date('2026-04-14'); // Monday start
const PHASE_NAMES = ['Foundation','Progressive Overload','Refinement','Deload','Progressive Overload II','Refinement II','Deload II','Sculpture'];

// Produce freshness data (days until should be repurchased)
const FRESHNESS = {
    'Eggs': { shelf: 14, category: 'protein' },
    'Fresh mozzarella': { shelf: 3, category: 'protein' },
    'Burrata': { shelf: 3, category: 'protein' },
    'Fresh ricotta': { shelf: 5, category: 'protein' },
    'Chicken breast': { shelf: 3, category: 'protein' },
    'Fish': { shelf: 2, category: 'protein' },
    'Prawns': { shelf: 2, category: 'protein' },
    'Swordfish': { shelf: 2, category: 'protein' },
    'Fresh basil': { shelf: 3, category: 'produce' },
    'Cherry tomatoes': { shelf: 5, category: 'produce' },
    'Berries': { shelf: 3, category: 'produce' },
    'Bananas': { shelf: 5, category: 'produce' },
    'Rocket': { shelf: 3, category: 'produce' },
    'Spinach': { shelf: 3, category: 'produce' },
    'Broccolini': { shelf: 4, category: 'produce' },
    'Greek yoghurt': { shelf: 10, category: 'protein' },
    'Bread': { shelf: 3, category: 'pantry' }
};

// Italian language data
// Hero painting gallery — rotates randomly with artist credits
const HERO_PAINTINGS = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA06068.jpg/1280px-Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA06068.jpg', artist: 'Jacques-Louis David', title: 'Leonidas at Thermopylae', year: '1814' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Caravaggio_-_Supper_at_Emmaus_-_National_Gallery%2C_London.jpg/1280px-Caravaggio_-_Supper_at_Emmaus_-_National_Gallery%2C_London.jpg', artist: 'Caravaggio', title: 'Supper at Emmaus', year: '1601' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Caspar_David_Friedrich_-_Der_Wanderer_%C3%BCber_dem_Nebelmeer.jpg/800px-Caspar_David_Friedrich_-_Der_Wanderer_%C3%BCber_dem_Nebelmeer.jpg', artist: 'Caspar David Friedrich', title: 'Wanderer Above the Sea of Fog', year: '1818' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg', artist: 'Sandro Botticelli', title: 'The Birth of Venus', year: '1485' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', artist: 'Vincent van Gogh', title: 'The Starry Night', year: '1889' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VanGogh-starry_night_ballance1.jpg/1280px-VanGogh-starry_night_ballance1.jpg', artist: 'Vincent van Gogh', title: 'Starry Night Over the Rhône', year: '1888' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Salvator_Rosa_-_Democritus_in_Meditation.jpg/800px-Salvator_Rosa_-_Democritus_in_Meditation.jpg', artist: 'Salvator Rosa', title: 'Democritus in Meditation', year: '1651' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Creaci%C3%B3n_de_Ad%C3%A1m.jpg', artist: 'Michelangelo', title: 'The Creation of Adam', year: '1512' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', artist: 'Leonardo da Vinci', title: 'Mona Lisa', year: '1503' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg', artist: 'Johannes Vermeer', title: 'Girl with a Pearl Earring', year: '1665' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Grandes_Baigneuses_%28Paul_C%C3%A9zanne%29.jpg/1280px-Grandes_Baigneuses_%28Paul_C%C3%A9zanne%29.jpg', artist: 'Paul Cézanne', title: 'The Large Bathers', year: '1906' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_Mort_de_Sardanapale.jpg/1280px-La_Mort_de_Sardanapale.jpg', artist: 'Eugène Delacroix', title: 'The Death of Sardanapalus', year: '1827' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Water_Lilies_-_1906%2C_Chicago.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Chicago.jpg', artist: 'Claude Monet', title: 'Water Lilies', year: '1906' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg', artist: 'Edvard Munch', title: 'The Scream', year: '1893' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg', artist: 'Jacques-Louis David', title: 'The Death of Socrates', year: '1787' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843%29.jpg/800px-Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843%29.jpg', artist: 'Gustave Courbet', title: 'The Desperate Man', year: '1845' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Théodore_Géricault_-_Le_Radeau_de_la_Méduse.jpg/1280px-Théodore_Géricault_-_Le_Radeau_de_la_Méduse.jpg', artist: 'Théodore Géricault', title: 'The Raft of the Medusa', year: '1819' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_William_Waterhouse_-_Ulysses_and_the_Sirens_%281891%29.jpg/1280px-John_William_Waterhouse_-_Ulysses_and_the_Sirens_%281891%29.jpg', artist: 'John William Waterhouse', title: 'Ulysses and the Sirens', year: '1891' }
];

const ITALIAN_WORDS = [
    { word: 'Guerriero', translation: 'Warrior', example: 'Il guerriero si prepara per la battaglia.' },
    { word: 'Forza', translation: 'Strength / Force', example: 'La forza viene dalla disciplina.' },
    { word: 'Coraggio', translation: 'Courage', example: 'Ci vuole coraggio per cambiare.' },
    { word: 'Disciplina', translation: 'Discipline', example: 'La disciplina è la base del successo.' },
    { word: 'Allenamento', translation: 'Training / Workout', example: "L'allenamento di oggi è stato duro." },
    { word: 'Cucina', translation: 'Kitchen / Cuisine', example: 'La cucina italiana è la migliore del mondo.' },
    { word: 'Famiglia', translation: 'Family', example: 'La famiglia è tutto.' },
    { word: 'Passione', translation: 'Passion', example: 'Segui la tua passione.' },
    { word: 'Bellezza', translation: 'Beauty', example: 'La bellezza è ovunque.' },
    { word: 'Destino', translation: 'Destiny', example: 'Il destino favorisce gli audaci.' },
    { word: 'Vittoria', translation: 'Victory', example: 'La vittoria appartiene a chi persevera.' },
    { word: 'Anima', translation: 'Soul', example: "L'anima del guerriero è forte." },
    { word: 'Respiro', translation: 'Breath', example: 'Fai un respiro profondo.' },
    { word: 'Mare', translation: 'Sea', example: 'Il mare è calmo questa mattina.' }
];

const REGIONAL_PHRASES = {
    lazio: { phrase: 'Daje!', meaning: 'Come on! / Let\'s go! (Roman dialect)', usage: 'Used to encourage, cheer, or express enthusiasm' },
    campania: { phrase: 'Uè!', meaning: 'Hey! (Neapolitan greeting)', usage: 'Casual greeting among friends in Naples' },
    sicilia: { phrase: 'Minchia!', meaning: 'Expression of surprise (Sicilian)', usage: 'Versatile Sicilian exclamation — surprise, amazement, frustration' },
    toscana: { phrase: 'Icché tu fai?', meaning: 'What are you doing? (Tuscan)', usage: 'Tuscan dialect replaces "che cosa" with "icché"' },
    modena: { phrase: 'Andèmm!', meaning: 'Let\'s go! (Emilian dialect)', usage: 'Common expression in Modena and Bologna' },
    napoli_ponto: { phrase: 'Jamm\' bell\'!', meaning: 'Let\'s go, beautiful! (Neapolitan)', usage: 'Encouragement in Neapolitan dialect' },
    messina: { phrase: 'Amunì!', meaning: 'Let\'s go! (Sicilian)', usage: 'From Arabic influence — very common across Sicily' },
    reggio_calabria: { phrase: 'Ndavi raggiùni', meaning: 'You\'re right (Calabrese)', usage: 'Calabrian dialect agreement' },
    puglia: { phrase: 'Ué, ce fàce?', meaning: 'Hey, how are you? (Pugliese)', usage: 'Casual greeting in Puglia' },
    liguria: { phrase: 'Belin!', meaning: 'Wow! / Expression of surprise (Genovese)', usage: 'Quintessential Ligurian exclamation' },
    veneto: { phrase: 'Ostia!', meaning: 'Wow! (Venetian)', usage: 'Venetian expression of surprise' },
    piemonte: { phrase: 'Neh!', meaning: 'Right? / Isn\'t it? (Piemontese)', usage: 'Tag question in Piemontese dialect' },
    sardegna: { phrase: 'Ajò!', meaning: 'Let\'s go! / Come on! (Sardinian)', usage: 'One of the most recognizable Sardinian words' }
};

const PODCASTS = [
    { name: 'Coffee Break Italian', desc: 'Beginner to intermediate lessons, perfect pace', url: 'https://open.spotify.com/show/3zBUXftKb7W4gYAadSEJCH', level: 'Beginner' },
    { name: 'News in Slow Italian', desc: 'Current events spoken slowly and clearly', url: 'https://open.spotify.com/show/09yDmqPL26MK1XEWdGnHDt', level: 'Intermediate' },
    { name: 'ItalianPod101', desc: 'Structured lessons with cultural context', url: 'https://open.spotify.com/show/4Jct0WFelBpCq04jZMOYOE', level: 'All levels' },
    { name: 'Italiano Automatico', desc: 'Natural Italian conversation for immersion', url: 'https://open.spotify.com/show/3dQZd4KbzbF8a8rOPuLHET', level: 'Intermediate' },
    { name: 'Learn Italian with Lucrezia', desc: 'Grammar, culture, and real Italian life', url: 'https://open.spotify.com/show/2KR8UZRKf9zHT7kbvUhFhx', level: 'Beginner-Intermediate' }
];

const SYDNEY_WALKS = [
    { name: 'Bondi to Coogee Coastal Walk', distance: '6 km', time: '2 hrs', history: 'This path follows ancient Aboriginal trading routes of the Bidjigal and Gadigal peoples. The sandstone cliffs are 230 million years old. Waverley Cemetery (1877) along the route holds the graves of Henry Lawson and Dorothea Mackellar.', vibe: 'Ocean views, cliffs, rock pools' },
    { name: 'Spit Bridge to Manly', distance: '10 km', time: '3-4 hrs', history: 'Passes through Sydney Harbour National Park and Aboriginal rock engravings at Grotto Point, estimated at 2,000-5,000 years old. The track passes former military installations from WWII — gun emplacements watching for Japanese submarines.', vibe: 'Bushland, harbour views, beaches' },
    { name: 'The Rocks Heritage Walk', distance: '2 km', time: '1.5 hrs', history: 'Australia\'s oldest European neighbourhood (1788). Convict-built sandstone buildings, the Suez Canal (narrowest laneway), Cadman\'s Cottage (1816 — oldest surviving residential building in Sydney). The bubonic plague hit here in 1900.', vibe: 'History, architecture, harbourside' },
    { name: 'Barangaroo to Pyrmont', distance: '4 km', time: '1.5 hrs', history: 'Named after Barangaroo, a powerful Cammeraygal woman who defied colonial authority. The foreshore was a shipping container terminal until 2012. Pyrmont was once the most densely populated suburb in Australia — a wool and shipping hub.', vibe: 'Waterfront, modern architecture, sunset' },
    { name: 'Centennial Park Loop', distance: '3.8 km', time: '1 hr', history: 'Opened in 1888 for Australia\'s centenary. The federation of Australia was proclaimed here on January 1, 1901. Originally swampland used by the Gadigal people. The park has 15,000 trees and 8 ponds.', vibe: 'Parkland, cycling, birding, tranquil' },
    { name: 'Watsons Bay & South Head', distance: '4 km', time: '1.5 hrs', history: 'Australia\'s oldest fishing village. The Gap — dramatic 60m cliffs. Hornby Lighthouse (1858) guided ships through the treacherous Heads. Camp Cove was where the First Fleet marines first landed in 1788.', vibe: 'Harbour views, cliffs, lighthouse, fish & chips' },
    { name: 'Cockatoo Island Walk', distance: '2 km', time: '1.5 hrs', history: 'A UNESCO World Heritage Site. Used as a convict prison (1839-1869), then a naval dockyard building warships through two World Wars. The dry docks, cranes, and industrial buildings are preserved. You can camp overnight on the island.', vibe: 'Industrial heritage, harbour island, art installations' },
    { name: 'Newtown to Marrickville Food Trail', distance: '3 km', time: '2 hrs', history: 'Newtown was Sydney\'s bohemian hub since the 1970s. King Street\'s Victorian terraces house some of Australia\'s most diverse food. Marrickville was historically Greek and Portuguese — now Vietnamese, Thai, and everything else. A food walk IS a history walk.', vibe: 'Street art, food diversity, inner-west culture' }
];

const RECOVERY_ACTIVITIES = [
    { type: 'Art', activity: 'Visit Art Gallery of NSW (free entry)', location: 'The Domain', note: 'Walking there from CBD = 20 min walk through the gardens' },
    { type: 'Art', activity: 'MCA (Museum of Contemporary Art) — free entry', location: 'Circular Quay', note: 'Combine with a Rocks heritage walk' },
    { type: 'Pottery', activity: 'Pottery class — Clay Sydney or The Ceramic Studio', location: 'Various', note: 'Book a wheel-throwing class. Content opportunity.' },
    { type: 'Nature', activity: 'Royal Botanic Gardens walk', location: 'CBD', note: '30 hectares of gardens. Free. Walk + stretch by the harbour.' },
    { type: 'Swim', activity: 'Ocean pool swim — rotate a different pool each week', location: 'Coastal', note: 'Icebergs, Bronte, Wylie\'s, Mahon Pool, McIver\'s' },
    { type: 'Culture', activity: 'Carriageworks Farmers Market (Saturday)', location: 'Eveleigh', note: 'Buy fresh produce for the week. Content opportunity — The Foodie pillar.' },
    { type: 'Nature', activity: 'Manly to Shelly Beach snorkel', location: 'Manly', note: 'Easy 10 min walk + snorkelling for active recovery' },
    { type: 'Art', activity: 'White Rabbit Gallery (free) — contemporary Chinese art', location: 'Chippendale', note: 'One of the world\'s best private collections' },
    { type: 'Culture', activity: 'Sydney Fish Market — walk, buy, learn', location: 'Pyrmont', note: 'Learn about fish sourcing. Buy dinner. Content opportunity.' },
    { type: 'Nature', activity: 'Blue Mountains day trip — Three Sisters walk', location: 'Katoomba (1.5hr drive)', note: 'Bigger adventure recovery. Breathtaking views. History of the Gundungurra people.' }
];

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initDaySelector();
    initNutrition();
    initSupplements();
    initProgress();
    initModal();
    initRecovery();
    initLanguage();
    initCinema();
    initSocials();
    initFinance();
    initHeroGallery();
    renderWorkout('monday');
    updateWeekAndPhase();
});

// === AUTO-ROTATION SYSTEM ===

function getWeekNumber() {
    const now = new Date();
    const diff = now - START_DATE;
    return Math.max(1, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1);
}

function getCurrentRegion() {
    const autoRotate = localStorage.getItem('warrior_auto_rotate') !== 'false';
    const manualRegion = localStorage.getItem('warrior_manual_region');
    if (!autoRotate && manualRegion) return manualRegion;
    const week = getWeekNumber();
    return REGION_ORDER[(week - 1) % REGION_ORDER.length];
}

function getCurrentPhase() {
    const week = getWeekNumber();
    const cycleWeek = ((week - 1) % 4);
    const cycleNum = Math.floor((week - 1) / 4);
    const phaseIdx = Math.min(cycleNum * 2 + (cycleWeek >= 3 ? 1 : 0), PHASE_NAMES.length - 1);
    if (cycleWeek === 3) return 'Deload';
    return PHASE_NAMES[Math.min(cycleNum, PHASE_NAMES.length - 1)] || 'Ongoing';
}

function updateWeekAndPhase() {
    const week = getWeekNumber();
    document.getElementById('current-week').textContent = week;
    document.getElementById('current-phase').textContent = getCurrentPhase();
    document.getElementById('progress-week').textContent = week;
}

function toggleAutoRotate() {
    const current = localStorage.getItem('warrior_auto_rotate') !== 'false';
    localStorage.setItem('warrior_auto_rotate', !current);
    document.getElementById('auto-rotate-status').textContent = `Auto-rotate: ${!current ? 'ON' : 'OFF'}`;
    if (!current) {
        localStorage.removeItem('warrior_manual_region');
        const region = getCurrentRegion();
        renderMealPlan(region);
        renderShoppingList(region);
        renderFreshnessAlerts(region);
        highlightRegionButton(region);
    }
}

function showPhaseInfo() {
    alert('Training Phases (4-week cycles):\n\nWeek 1: Moderate — Establish rhythm\nWeek 2: High — Push weights/reps\nWeek 3: Peak — Heaviest, lowest reps\nWeek 4: Deload — Reduce 40-50%\n\nRepeat cycle. Every 12 weeks, full recovery week.');
}

// === OVERLAY NAVIGATION ===

function initTabs() {
    const trigger = document.getElementById('menu-trigger');
    const overlay = document.getElementById('overlay-nav');

    // Hamburger toggle
    trigger.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });

    // Nav items
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.dataset.tab;
            const title = link.dataset.title || link.textContent;
            document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.page').forEach(t => t.classList.remove('active'));
            link.classList.add('active');
            const page = document.getElementById(`tab-${tab}`);
            page.classList.add('active');
            document.body.classList.remove('menu-open');
            window.scrollTo({ top: 0 });

            // Update header title
            document.getElementById('header-page-title').textContent = title;

            // Set background image
            updatePageBackground(page);

            // Trigger reveal animations after page switch
            setTimeout(initScrollReveal, 100);
        });
    });

    // Set initial background
    updatePageBackground(document.querySelector('.page.active'));

    // Render home weekly summary
    renderWeeklySummary();

    // Scroll reveal (Intersection Observer)
    initScrollReveal();
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-up').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
    });
}

// === NAVIGATION HELPER ===

function navigateTo(tab) {
    document.querySelectorAll('.nav-item').forEach(l => l.classList.toggle('active', l.dataset.tab === tab));
    document.querySelectorAll('.page').forEach(t => t.classList.remove('active'));
    const page = document.getElementById(`tab-${tab}`);
    if (page) {
        page.classList.add('active');
        updatePageBackground(page);
    }
    document.body.classList.remove('menu-open');
    window.scrollTo({ top: 0 });

    const titles = { home:'The Warrior\'s Codex', training:'Training — Prepare for Battle', nutrition:'Nutrition — The Warrior\'s Table', supplements:'Supplements — The Armoury Within', recovery:'Recovery — Rest Like a Warrior', cinema:'Cinema', language:'Italiano — Impara l\'Italiano', socials:'Socials', finance:'Finance', progress:'Progress — The Path Forward' };
    document.getElementById('header-page-title').textContent = titles[tab] || tab;
    setTimeout(initScrollReveal, 100);
}

// === DAY TYPE SELECTOR (Training/Sport/Rest) ===

function switchDayType(type, btn) {
    document.querySelectorAll('.dtype-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderMacros(type);
    localStorage.setItem('warrior_day_type', type);
}

// === WEEKLY SUMMARY (Home page) ===

function renderWeeklySummary() {
    const container = document.getElementById('weekly-summary');
    if (!container) return;
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay() + 1); // Monday

    // Gather data for the week
    let workoutsCompleted = 0;
    let totalSets = 0, completedSets = 0;
    let mealsTracked = 0;
    let moviesWatched = 0;
    let languageDays = 0;

    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    const langLog = JSON.parse(localStorage.getItem('warrior_language_log') || '[]');

    for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + i);
        const key = d.toISOString().split('T')[0];

        const workout = JSON.parse(localStorage.getItem(`warrior_workout_completion_${key}`) || 'null');
        if (workout && workout.completed > 0) { workoutsCompleted++; totalSets += workout.total; completedSets += workout.completed; }

        const meals = JSON.parse(localStorage.getItem(`warrior_meals_${key}`) || '{}');
        mealsTracked += Object.values(meals).filter(Boolean).length;

        if (langLog.find(e => e.date === key)) languageDays++;
    }

    // Count movies watched this week
    Object.values(watched).forEach(w => {
        if (w.date) {
            const wd = new Date(w.date);
            if (wd >= weekStart && wd <= today) moviesWatched++;
        }
    });

    const workoutPct = 7 > 0 ? Math.round((workoutsCompleted / 6) * 100) : 0; // 6 training days
    const mealPct = Math.round((mealsTracked / 35) * 100); // ~5 meals x 7 days
    const langPct = Math.round((languageDays / 7) * 100);

    container.innerHTML = `
        <div class="summary-grid">
            <div class="summary-item">
                <div class="summary-bar-wrap"><div class="summary-bar" style="width:${workoutPct}%"></div></div>
                <div class="summary-info"><span class="summary-label">Workouts</span><span class="summary-value">${workoutsCompleted}/6 days</span></div>
            </div>
            <div class="summary-item">
                <div class="summary-bar-wrap"><div class="summary-bar" style="width:${completedSets > 0 ? Math.round((completedSets/Math.max(totalSets,1))*100) : 0}%"></div></div>
                <div class="summary-info"><span class="summary-label">Sets Completed</span><span class="summary-value">${completedSets}/${totalSets}</span></div>
            </div>
            <div class="summary-item">
                <div class="summary-bar-wrap"><div class="summary-bar bar-green" style="width:${mealPct}%"></div></div>
                <div class="summary-info"><span class="summary-label">Meals Logged</span><span class="summary-value">${mealsTracked} meals</span></div>
            </div>
            <div class="summary-item">
                <div class="summary-bar-wrap"><div class="summary-bar bar-amber" style="width:${moviesWatched > 0 ? Math.min(moviesWatched * 20, 100) : 0}%"></div></div>
                <div class="summary-info"><span class="summary-label">Films Watched</span><span class="summary-value">${moviesWatched} this week</span></div>
            </div>
            <div class="summary-item">
                <div class="summary-bar-wrap"><div class="summary-bar bar-purple" style="width:${langPct}%"></div></div>
                <div class="summary-info"><span class="summary-label">Italian Practice</span><span class="summary-value">${languageDays}/7 days</span></div>
            </div>
        </div>
    `;
}

// Background painting management
function updatePageBackground(page) {
    if (!page) return;
    const bgUrl = page.dataset.bg;
    const bgEl = page.querySelector('.page-bg');
    if (bgEl && bgUrl) {
        bgEl.style.backgroundImage = `url('${bgUrl}')`;
        bgEl.style.backgroundSize = 'cover';
        bgEl.style.backgroundPosition = 'center';
    }
}

// Hero painting rotation — Apple TV style crossfade with artist credits
let heroInterval = null;
function initHeroGallery() {
    const credit = document.getElementById('painting-credit');
    if (!credit) return;

    let currentIndex = Math.floor(Math.random() * HERO_PAINTINGS.length);

    function updatePainting() {
        const painting = HERO_PAINTINGS[currentIndex];
        const activePage = document.querySelector('.page.active');
        if (activePage) {
            const bgEl = activePage.querySelector('.page-bg');
            if (bgEl) {
                bgEl.style.backgroundImage = `url('${painting.url}')`;
                bgEl.style.backgroundSize = 'cover';
                bgEl.style.backgroundPosition = 'center';
            }
        }
        // Update credit
        credit.style.opacity = '0';
        setTimeout(() => {
            credit.innerHTML = `<span class="cr-title">${painting.title}</span><span class="cr-artist">${painting.artist}, ${painting.year}</span>`;
            credit.style.opacity = '.3';
        }, 600);
        currentIndex = (currentIndex + 1) % HERO_PAINTINGS.length;
    }

    // Initial
    updatePainting();

    // Rotate every 15 seconds
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(updatePainting, 15000);
}

// === WORKOUT / TRAINING TAB ===

function initDaySelector() {
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWorkout(btn.dataset.day);
        });
    });
}

function renderWorkout(day) {
    const workout = WORKOUTS[day];
    if (!workout) return;
    const container = document.getElementById('workout-display');
    let html = `<div class="workout-header"><h2>${workout.name}</h2><div class="workout-quote">"${workout.quote}"</div><div class="workout-duration">${workout.theme} — ${workout.duration}</div></div>`;
    if (workout.warmup && workout.warmup.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        const warmupLog = JSON.parse(localStorage.getItem(`warrior_warmup_${today}`) || '{}');
        html += `<div class="warmup-section"><h3>Movement Warm-Up</h3>`;
        workout.warmup.forEach((w, wi) => {
            const wId = `wu_${day}_${wi}`;
            const checked = warmupLog[wId] ? 'checked' : '';
            const doneClass = warmupLog[wId] ? ' warmup-done' : '';
            html += `<div class="warmup-item${doneClass}" onclick="toggleWarmup('${day}',${wi},this)"><label class="warmup-check"><input type="checkbox" ${checked}></label><span class="warmup-name">${w.exercise}</span><span class="warmup-dur">${w.duration}</span></div>`;
        });
        html += `</div>`;
    }
    workout.blocks.forEach(block => {
        html += `<h3 class="block-title">${block.title} <span style="font-family:Inter;font-weight:400;font-size:12px;color:var(--text-muted);margin-left:8px">${block.time}</span></h3>`;
        if (block.subtitle) html += `<p class="block-subtitle">${block.subtitle}</p>`;
        if (block.flow) html += renderFlow(block.flow);
        if (block.exercises) block.exercises.forEach(ex => { html += renderExerciseRow(ex); });
    });
    container.innerHTML = html;
    container.querySelectorAll('.exercise-row[data-video]').forEach(row => {
        row.addEventListener('click', () => openExerciseModal(row.dataset.name, row.dataset.video, row.dataset.notes));
    });
}

function renderExerciseRow(ex) {
    const hasVideo = ex.video ? `data-video="${ex.video}"` : '';
    const videoIcon = ex.video ? '<span class="video-indicator" onclick="event.stopPropagation()">▶</span>' : '';
    const nameAttr = ex.video ? `data-name="${ex.name}"` : '';
    const notesAttr = ex.notes ? `data-notes="${ex.notes}"` : '';
    const exId = ex.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const today = new Date().toISOString().split('T')[0];
    const logData = JSON.parse(localStorage.getItem(`warrior_exercise_${today}`) || '{}');
    const exLog = logData[exId] || {};

    // Parse sets info (e.g., "4 x 8" -> 4 sets, "5 x 5/side" -> 5 sets, "3 x 40m" -> 3 sets)
    const setsMatch = ex.sets.match(/^(\d+)\s*x/);
    const numSets = setsMatch ? parseInt(setsMatch[1]) : 0;

    // Build set checkboxes
    let setsHtml = '';
    if (numSets > 0) {
        setsHtml = '<div class="set-tracker" onclick="event.stopPropagation()">';
        for (let i = 1; i <= numSets; i++) {
            const checked = exLog['set_' + i] ? 'checked' : '';
            setsHtml += `<label class="set-check"><input type="checkbox" ${checked} onchange="logSet('${exId}',${i},this.checked)"><span class="set-num">${i}</span></label>`;
        }
        setsHtml += '</div>';
    }

    // Weight input
    const savedWeight = exLog.weight || '';
    const weightInput = `<input type="text" class="weight-input" value="${savedWeight}" placeholder="${ex.weight || '—'}" onclick="event.stopPropagation()" onchange="logWeight('${exId}',this.value)" title="Log your weight">`;

    const allComplete = numSets > 0 && Array.from({length: numSets}, (_, i) => exLog['set_' + (i + 1)]).every(Boolean);
    const doneClass = allComplete ? ' exercise-done' : '';

    let html = `<div class="exercise-row${doneClass}" ${hasVideo} ${nameAttr} ${notesAttr}>
        <div class="exercise-main">
            <span class="exercise-name">${ex.name}${videoIcon}</span>
            <span class="exercise-prescription">${ex.sets}</span>
        </div>
        <div class="exercise-tracking">
            ${setsHtml}
            ${weightInput}
        </div>
        <span class="exercise-rest">${ex.rest || ''}</span>`;
    if (ex.notes) html += `<div class="exercise-notes">${ex.notes}</div>`;
    return html + `</div>`;
}

function logSet(exId, setNum, checked) {
    const today = new Date().toISOString().split('T')[0];
    const logData = JSON.parse(localStorage.getItem(`warrior_exercise_${today}`) || '{}');
    if (!logData[exId]) logData[exId] = {};
    logData[exId]['set_' + setNum] = checked;
    localStorage.setItem(`warrior_exercise_${today}`, JSON.stringify(logData));
    // Update completion state visually
    const row = event.target.closest('.exercise-row');
    if (row) {
        const checks = row.querySelectorAll('.set-check input');
        const allDone = Array.from(checks).every(c => c.checked);
        row.classList.toggle('exercise-done', allDone);
    }
    updateProgressStats();
}

function logWeight(exId, value) {
    const today = new Date().toISOString().split('T')[0];
    const logData = JSON.parse(localStorage.getItem(`warrior_exercise_${today}`) || '{}');
    if (!logData[exId]) logData[exId] = {};
    logData[exId].weight = value;
    localStorage.setItem(`warrior_exercise_${today}`, JSON.stringify(logData));
}

function toggleWarmup(day, index, el) {
    const today = new Date().toISOString().split('T')[0];
    const warmupLog = JSON.parse(localStorage.getItem(`warrior_warmup_${today}`) || '{}');
    const wId = `wu_${day}_${index}`;
    warmupLog[wId] = !warmupLog[wId];
    localStorage.setItem(`warrior_warmup_${today}`, JSON.stringify(warmupLog));
    const cb = el.querySelector('input[type="checkbox"]');
    cb.checked = warmupLog[wId];
    el.classList.toggle('warmup-done', warmupLog[wId]);
}

function updateProgressStats() {
    const today = new Date().toISOString().split('T')[0];
    const logData = JSON.parse(localStorage.getItem(`warrior_exercise_${today}`) || '{}');
    let totalSets = 0, completedSets = 0;
    Object.values(logData).forEach(ex => {
        Object.entries(ex).forEach(([key, val]) => {
            if (key.startsWith('set_')) { totalSets++; if (val) completedSets++; }
        });
    });
    // Store for progress page
    localStorage.setItem(`warrior_workout_completion_${today}`, JSON.stringify({ total: totalSets, completed: completedSets }));
}

function renderFlow(flow) {
    let html = `<div class="flow-sequence"><h4>${flow.name}</h4><div class="flow-info">${flow.weight} — ${flow.rounds} — Rest: ${flow.rest}</div>`;
    flow.steps.forEach((step, i) => {
        html += `<div class="flow-step"><span class="step-number">${i + 1}</span><span>${step.movement}</span><span class="step-reps">x${step.reps}</span></div>`;
    });
    return html + `</div>`;
}

// === MODAL ===

function initModal() {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('exercise-modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openExerciseModal(name, videoKey, notes) {
    const modal = document.getElementById('exercise-modal');
    document.getElementById('modal-title').textContent = name;
    const videoUrl = getVideoUrl(videoKey);
    const videoContainer = document.getElementById('modal-video');
    if (videoUrl.includes('watch?v=') || videoUrl.includes('youtu.be')) {
        const videoId = videoUrl.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        videoContainer.innerHTML = videoId ? `<iframe src="https://www.youtube.com/embed/${videoId[1]}" allowfullscreen></iframe>` : '';
    } else {
        videoContainer.innerHTML = `<div class="placeholder"><div><p style="font-size:24px;margin-bottom:12px">▶</p><p>Video demonstration</p><p style="margin-top:8px"><a href="${videoUrl}" target="_blank" style="color:var(--gold);text-decoration:none">Search YouTube for "${name}"</a></p><p style="margin-top:12px;font-size:11px;color:var(--text-muted)">Alessandro's own video will replace this</p></div></div>`;
    }
    document.getElementById('modal-notes').textContent = notes || '';
    modal.classList.add('active');
}

function closeModal() { document.getElementById('exercise-modal').classList.remove('active'); document.getElementById('modal-video').innerHTML = ''; }

// === NUTRITION TAB ===

function initNutrition() {
    const region = getCurrentRegion();
    renderMacros('training');
    renderRegionButtons();
    renderMealTracker(region);
    renderMealPlan(region);
    renderShoppingList(region);
    renderFreshnessAlerts(region);
    renderProductPreferences(region);
    renderExtraMeals();
    document.getElementById('tracker-date').textContent = new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'short' });
    const arStatus = document.getElementById('auto-rotate-status');
    if (arStatus) arStatus.textContent = `Auto ${localStorage.getItem('warrior_auto_rotate') !== 'false' ? 'ON' : 'OFF'}`;
}

function renderMacros(dayType) {
    const macros = MACRO_TARGETS[dayType];
    document.getElementById('macro-summary').innerHTML = ['Calories','Protein','Carbs','Fats'].map((label, i) => {
        const vals = [macros.calories, macros.protein, macros.carbs, macros.fats];
        const units = ['kcal', `${Math.round(vals[1]*4)} kcal`, `${Math.round(vals[2]*4)} kcal`, `${Math.round(vals[3]*9)} kcal`];
        return `<div class="macro-card"><div class="macro-label">${label}</div><div class="macro-value">${vals[i]}${i > 0 ? 'g' : ''}</div><div class="macro-unit">${units[i]}</div></div>`;
    }).join('');
}

function renderRegionButtons() {
    const container = document.getElementById('region-buttons');
    const current = getCurrentRegion();
    container.innerHTML = Object.entries(ITALIAN_REGIONS).map(([key, r]) =>
        `<button class="region-btn ${key === current ? 'active' : ''}" data-region="${key}">${r.name}</button>`
    ).join('');
    container.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const region = btn.dataset.region;
            localStorage.setItem('warrior_manual_region', region);
            if (localStorage.getItem('warrior_auto_rotate') !== 'false') { localStorage.setItem('warrior_auto_rotate', 'false'); document.getElementById('auto-rotate-status').textContent = 'Auto-rotate: OFF'; }
            const crEl = document.getElementById('current-region');
            if (crEl) crEl.textContent = '— ' + ITALIAN_REGIONS[region].name;
            renderMealTracker(region);
            renderMealPlan(region);
            renderShoppingList(region);
            renderFreshnessAlerts(region);
            renderProductPreferences(region);
        });
    });
    const crInit = document.getElementById('current-region');
    if (crInit) crInit.textContent = '— ' + ITALIAN_REGIONS[current].name;
}

function highlightRegionButton(region) {
    document.querySelectorAll('.region-btn').forEach(b => b.classList.toggle('active', b.dataset.region === region));
}

// === MEAL TRACKER (Check-off system) ===

function renderMealTracker(regionKey) {
    const region = ITALIAN_REGIONS[regionKey];
    if (!region) return;
    const today = new Date().toISOString().split('T')[0];
    const tracked = JSON.parse(localStorage.getItem(`warrior_meals_${today}`) || '{}');
    const container = document.getElementById('meal-tracker');
    let totalCals = 0, totalP = 0, totalC = 0, totalF = 0;
    let html = '';
    Object.entries(region.meals).forEach(([key, meal]) => {
        const checked = tracked[key] ? 'checked' : '';
        const cls = tracked[key] ? 'checked' : '';
        if (tracked[key]) { totalCals += meal.macros.calories; totalP += meal.macros.protein; totalC += meal.macros.carbs; totalF += meal.macros.fats; }
        html += `<div class="tracker-item ${cls}" onclick="toggleMeal('${regionKey}','${key}')"><input type="checkbox" ${checked}><div class="tracker-info"><strong>${meal.name}</strong><span class="tracker-time">${meal.time}</span></div><span class="tracker-cals">${meal.macros.calories} kcal</span></div>`;
    });
    container.innerHTML = html;
    // Add extras
    const extras = JSON.parse(localStorage.getItem(`warrior_extras_${today}`) || '[]');
    extras.forEach(e => { totalCals += e.calories || 0; totalP += e.protein || 0; totalC += e.carbs || 0; totalF += e.fats || 0; });
    document.getElementById('tracker-summary').innerHTML = `<span>Consumed: <strong>${totalCals} kcal</strong></span><span>P: ${totalP}g</span><span>C: ${totalC}g</span><span>F: ${totalF}g</span>`;
}

function toggleMeal(regionKey, mealKey) {
    const today = new Date().toISOString().split('T')[0];
    const tracked = JSON.parse(localStorage.getItem(`warrior_meals_${today}`) || '{}');
    tracked[mealKey] = !tracked[mealKey];
    localStorage.setItem(`warrior_meals_${today}`, JSON.stringify(tracked));
    renderMealTracker(regionKey);
}

// === EXTRA MEAL LOGGER ===

function addExtraMeal() {
    const name = document.getElementById('extra-meal-name').value;
    if (!name) return;
    const today = new Date().toISOString().split('T')[0];
    const extras = JSON.parse(localStorage.getItem(`warrior_extras_${today}`) || '[]');
    extras.push({
        name, calories: parseInt(document.getElementById('extra-cal').value) || 0,
        protein: parseInt(document.getElementById('extra-protein').value) || 0,
        carbs: parseInt(document.getElementById('extra-carbs').value) || 0,
        fats: parseInt(document.getElementById('extra-fats').value) || 0
    });
    localStorage.setItem(`warrior_extras_${today}`, JSON.stringify(extras));
    document.getElementById('extra-meal-name').value = '';
    ['extra-cal','extra-protein','extra-carbs','extra-fats'].forEach(id => document.getElementById(id).value = '');
    renderExtraMeals();
    renderMealTracker(getCurrentRegion());
}

function renderExtraMeals() {
    const today = new Date().toISOString().split('T')[0];
    const extras = JSON.parse(localStorage.getItem(`warrior_extras_${today}`) || '[]');
    document.getElementById('extra-meals-list').innerHTML = extras.map((e, i) =>
        `<div class="extra-meal-item"><span>${e.name}</span><span class="tracker-cals">${e.calories} kcal | P:${e.protein}g C:${e.carbs}g F:${e.fats}g</span><button class="btn-text" onclick="removeExtra(${i})">×</button></div>`
    ).join('');
}

function removeExtra(index) {
    const today = new Date().toISOString().split('T')[0];
    const extras = JSON.parse(localStorage.getItem(`warrior_extras_${today}`) || '[]');
    extras.splice(index, 1);
    localStorage.setItem(`warrior_extras_${today}`, JSON.stringify(extras));
    renderExtraMeals();
    renderMealTracker(getCurrentRegion());
}

function renderMealPlan(regionKey) {
    const region = ITALIAN_REGIONS[regionKey];
    if (!region) return;
    const container = document.getElementById('meal-plan');
    let html = `<p style="color:var(--text-muted);font-size:14px;font-style:italic;margin-bottom:16px">${region.description}</p>`;
    let totalCals = 0, totalP = 0, totalC = 0, totalF = 0;
    Object.values(region.meals).forEach(meal => {
        totalCals += meal.macros.calories; totalP += meal.macros.protein; totalC += meal.macros.carbs; totalF += meal.macros.fats;
        html += `<div class="meal-card"><h3>${meal.name}</h3><div class="meal-time">${meal.time}</div><ul class="meal-items">`;
        meal.items.forEach(item => { html += `<li>${item}</li>`; });
        html += `</ul><div class="meal-macros">P: ${meal.macros.protein}g | C: ${meal.macros.carbs}g | F: ${meal.macros.fats}g | ${meal.macros.calories} kcal</div></div>`;
    });
    html += `<div class="meal-card" style="border-color:var(--gold-dark);background:rgba(201,168,76,0.05)"><h3>Daily Total</h3><div class="meal-macros" style="border:none;padding:0;margin:0;font-size:14px;color:var(--gold-light)">Protein: ${totalP}g | Carbs: ${totalC}g | Fats: ${totalF}g | <strong>${totalCals} kcal</strong></div></div>`;
    container.innerHTML = html;
}

// === SHOPPING WITH WOOLWORTHS ===

function renderShoppingList(regionKey) {
    const shopping = ITALIAN_REGIONS[regionKey]?.shopping;
    if (!shopping) return;
    const prefs = JSON.parse(localStorage.getItem('warrior_product_prefs') || '{}');
    const container = document.getElementById('shopping-list');
    let html = '';
    const today = new Date().toISOString().split('T')[0];
    const shopState = JSON.parse(localStorage.getItem(`warrior_shop_${regionKey}_${today}`) || '{}');

    Object.entries(shopping).forEach(([category, items]) => {
        html += `<div class="shopping-category"><h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>`;
        items.forEach((item, i) => {
            const id = `shop-${regionKey}-${category}-${i}`;
            const prefName = prefs[item.item] || item.item;
            const hasPref = prefs[item.item] ? ' <span style="color:var(--sky);font-size:10px">★</span>' : '';
            const isChecked = shopState[id] ? 'checked' : '';
            const checkedClass = shopState[id] ? ' checked' : '';
            html += `<div class="shopping-item${checkedClass}" onclick="toggleShoppingItem(this)"><input type="checkbox" id="${id}" ${isChecked} onclick="event.stopPropagation()"><span class="shop-name">${prefName}${hasPref}</span><span class="quantity">${item.qty}</span></div>`;
        });
        html += `</div>`;
    });
    container.innerHTML = html;
}

function toggleShoppingItem(el) {
    const cb = el.querySelector('input[type="checkbox"]');
    cb.checked = !cb.checked;
    el.classList.toggle('checked', cb.checked);
    // Save state
    const today = new Date().toISOString().split('T')[0];
    const region = getCurrentRegion();
    const shopState = JSON.parse(localStorage.getItem(`warrior_shop_${region}_${today}`) || '{}');
    shopState[cb.id] = cb.checked;
    localStorage.setItem(`warrior_shop_${region}_${today}`, JSON.stringify(shopState));
    updateShoppingProgress();
}

function updateShoppingProgress() {
    const items = document.querySelectorAll('.shopping-item input[type="checkbox"]');
    const total = items.length;
    const checked = Array.from(items).filter(i => i.checked).length;
    // Store for progress tracking
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`warrior_shopping_progress_${today}`, JSON.stringify({ total, checked }));
}

function openWoolworths() {
    const regionKey = getCurrentRegion();
    const shopping = ITALIAN_REGIONS[regionKey]?.shopping;
    if (!shopping) return;
    const prefs = JSON.parse(localStorage.getItem('warrior_product_prefs') || '{}');
    const allItems = [];
    Object.values(shopping).forEach(items => {
        items.forEach(item => { allItems.push(prefs[item.item] || item.item); });
    });
    // Woolworths search — open with first few items as search
    // Woolworths doesn't have a public cart API, so we open search pages
    const searchTerm = allItems.slice(0, 5).join(', ');
    const url = `https://www.woolworths.com.au/shop/search/products?searchTerm=${encodeURIComponent(allItems[0])}`;
    window.open(url, '_blank');
    // Also copy full list for manual adding
    const listText = allItems.map(i => `- ${i}`).join('\n');
    navigator.clipboard.writeText(listText).then(() => {
        alert(`Woolworths opened for "${allItems[0]}".\n\nFull shopping list copied to clipboard — paste into Woolworths search or notes.`);
    });
}

function toggleShopMode() {
    const label = document.getElementById('shop-mode-label');
    const isDaily = label.textContent.includes('Daily');
    label.textContent = isDaily ? 'Weekly' : 'Daily';
    // Re-render shopping with mode context
    localStorage.setItem('warrior_shop_mode', isDaily ? 'weekly' : 'daily');
}

function copyShoppingList() {
    const regionKey = getCurrentRegion();
    const shopping = ITALIAN_REGIONS[regionKey]?.shopping;
    if (!shopping) return;
    const prefs = JSON.parse(localStorage.getItem('warrior_product_prefs') || '{}');
    let text = `Shopping List — ${ITALIAN_REGIONS[regionKey].name}\n\n`;
    Object.entries(shopping).forEach(([category, items]) => {
        text += `${category.toUpperCase()}\n`;
        items.forEach(item => { text += `  [ ] ${prefs[item.item] || item.item} — ${item.qty}\n`; });
        text += '\n';
    });
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-shopping-list');
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy List', 2000);
    });
}

// === PRODUCT PREFERENCES ===

function renderProductPreferences(regionKey) {
    const shopping = ITALIAN_REGIONS[regionKey]?.shopping;
    if (!shopping) return;
    const prefs = JSON.parse(localStorage.getItem('warrior_product_prefs') || '{}');
    const container = document.getElementById('product-preferences');
    let html = '';
    const allItems = new Set();
    Object.values(shopping).forEach(items => items.forEach(item => allItems.add(item.item)));
    allItems.forEach(item => {
        html += `<div class="pref-row"><label>${item}</label><input type="text" class="input-field pref-input" data-item="${item}" value="${prefs[item] || ''}" placeholder="Your preferred brand/product"></div>`;
    });
    container.innerHTML = html;
}

function savePreferences() {
    const prefs = JSON.parse(localStorage.getItem('warrior_product_prefs') || '{}');
    document.querySelectorAll('.pref-input').forEach(input => {
        if (input.value.trim()) prefs[input.dataset.item] = input.value.trim();
        else delete prefs[input.dataset.item];
    });
    localStorage.setItem('warrior_product_prefs', JSON.stringify(prefs));
    renderShoppingList(getCurrentRegion());
    alert('Preferences saved! Your preferred brands will show in shopping lists and Woolworths links.');
}

// === FRESHNESS ALERTS ===

function renderFreshnessAlerts(regionKey) {
    const shopping = ITALIAN_REGIONS[regionKey]?.shopping;
    if (!shopping) return;
    const container = document.getElementById('freshness-alerts');
    let alerts = [];
    Object.values(shopping).forEach(items => {
        items.forEach(item => {
            Object.entries(FRESHNESS).forEach(([key, info]) => {
                if (item.item.toLowerCase().includes(key.toLowerCase())) {
                    if (info.shelf <= 3) alerts.push({ item: item.item, days: info.shelf, urgency: 'high' });
                    else if (info.shelf <= 5) alerts.push({ item: item.item, days: info.shelf, urgency: 'medium' });
                }
            });
        });
    });
    if (alerts.length === 0) { container.innerHTML = ''; return; }
    let html = '<h4>Freshness Guide</h4>';
    alerts.sort((a, b) => a.days - b.days);
    alerts.forEach(a => {
        const color = a.urgency === 'high' ? 'var(--accent-red)' : 'var(--gold)';
        html += `<div class="freshness-item"><span style="color:${color}">●</span> <strong>${a.item}</strong> — buy fresh every ${a.days} days</div>`;
    });
    container.innerHTML = html;
}

// === SUPPLEMENTS ===

function initSupplements() {
    renderSupplementTier('supplements-essential', SUPPLEMENTS.essential, false);
    renderSupplementTier('supplements-advanced', SUPPLEMENTS.advanced, false);
    renderSupplementTier('supplements-skip', SUPPLEMENTS.skip, true);
}

function renderSupplementTier(containerId, supplements, isSkip) {
    document.getElementById(containerId).innerHTML = supplements.map(supp => {
        if (isSkip) return `<div class="supplement-card skip"><h4>${supp.name}</h4><div class="supp-why">${supp.why}</div></div>`;
        return `<div class="supplement-card"><h4>${supp.name}</h4><div class="supp-dose">${supp.dose}</div><div class="supp-when">When: ${supp.when}</div><div class="supp-why">${supp.why}</div>${supp.dietCheck ? `<div class="supp-why" style="margin-top:8px;color:var(--accent-green)"><strong>From food?</strong> ${supp.dietCheck}</div>` : ''}</div>`;
    }).join('');
}

// === RECOVERY TAB ===

function initRecovery() {
    const week = getWeekNumber();
    // Rotate activities and walks based on week
    const activityCount = 3;
    const walkIdx = (week - 1) % SYDNEY_WALKS.length;
    const shuffled = [...RECOVERY_ACTIVITIES].sort(() => 0.5 - Math.seededRandom(week));

    const container = document.getElementById('recovery-activities');
    const activities = RECOVERY_ACTIVITIES.slice(0, activityCount).map((_, i) => RECOVERY_ACTIVITIES[(week * 3 + i) % RECOVERY_ACTIVITIES.length]);
    container.innerHTML = activities.map(a =>
        `<div class="recovery-card"><div class="recovery-type">${a.type}</div><h4>${a.activity}</h4><p>${a.location}</p><p class="recovery-note">${a.note}</p></div>`
    ).join('');

    const walksContainer = document.getElementById('walks-history');
    const walk = SYDNEY_WALKS[walkIdx];
    const nextWalk = SYDNEY_WALKS[(walkIdx + 1) % SYDNEY_WALKS.length];
    walksContainer.innerHTML = `
        <div class="walk-card featured"><h4>This Week: ${walk.name}</h4><div class="walk-meta">${walk.distance} — ${walk.time}</div><p class="walk-vibe">${walk.vibe}</p><div class="walk-history"><strong>History:</strong> ${walk.history}</div></div>
        <div class="walk-card"><h4>Next Week: ${nextWalk.name}</h4><div class="walk-meta">${nextWalk.distance} — ${nextWalk.time}</div><p class="walk-vibe">${nextWalk.vibe}</p></div>
    `;
}

// Seeded random for consistent weekly rotation
Math.seededRandom = function(seed) { let x = Math.sin(seed) * 10000; return x - Math.floor(x); };

// === LANGUAGE TAB ===

function initLanguage() {
    const day = new Date().getDay();
    const word = ITALIAN_WORDS[day % ITALIAN_WORDS.length];
    document.getElementById('word-of-day').innerHTML = `<div class="word-main">${word.word}</div><div class="word-translation">${word.translation}</div><div class="word-example">"${word.example}"</div>`;

    const region = getCurrentRegion();
    const phrase = REGIONAL_PHRASES[region];
    if (phrase) {
        document.getElementById('regional-phrase').innerHTML = `<div class="word-main">${phrase.phrase}</div><div class="word-translation">${phrase.meaning}</div><div class="word-example">${phrase.usage}</div>`;
    }

    // Podcasts
    const listened = JSON.parse(localStorage.getItem('warrior_podcasts_listened') || '{}');
    document.getElementById('podcast-list').innerHTML = PODCASTS.map((p, i) =>
        `<div class="podcast-card"><div class="podcast-info"><h4>${p.name}</h4><p>${p.desc}</p><span class="podcast-level">${p.level}</span></div><div class="podcast-actions"><a href="${p.url}" target="_blank" class="btn-spotify" onclick="logPodcastListen(${i})">Open in Spotify</a><span class="podcast-count">${listened[i] || 0}x listened</span></div></div>`
    ).join('');

    // Custom podcasts
    renderCustomPodcasts();

    // Streak
    const streak = localStorage.getItem('warrior_duolingo_streak') || '';
    document.getElementById('duolingo-streak').value = streak;

    // Practice log
    renderLanguageLog();
}

function logPodcastListen(index) {
    const listened = JSON.parse(localStorage.getItem('warrior_podcasts_listened') || '{}');
    listened[index] = (listened[index] || 0) + 1;
    localStorage.setItem('warrior_podcasts_listened', JSON.stringify(listened));
}

function saveLanguageProgress(key, value) {
    localStorage.setItem(`warrior_${key}`, value);
}

function addCustomPodcast() {
    const name = document.getElementById('new-podcast-name').value;
    const url = document.getElementById('new-podcast-url').value;
    if (!name) return;
    const custom = JSON.parse(localStorage.getItem('warrior_custom_podcasts') || '[]');
    custom.push({ name, url: url || '#' });
    localStorage.setItem('warrior_custom_podcasts', JSON.stringify(custom));
    document.getElementById('new-podcast-name').value = '';
    document.getElementById('new-podcast-url').value = '';
    renderCustomPodcasts();
}

function renderCustomPodcasts() {
    const custom = JSON.parse(localStorage.getItem('warrior_custom_podcasts') || '[]');
    document.getElementById('custom-podcasts').innerHTML = custom.map((p, i) =>
        `<div class="podcast-card"><div class="podcast-info"><h4>${p.name}</h4></div><div class="podcast-actions"><a href="${p.url}" target="_blank" class="btn-spotify">Open</a><button class="btn-text" onclick="removeCustomPodcast(${i})">×</button></div></div>`
    ).join('');
}

function removeCustomPodcast(index) {
    const custom = JSON.parse(localStorage.getItem('warrior_custom_podcasts') || '[]');
    custom.splice(index, 1);
    localStorage.setItem('warrior_custom_podcasts', JSON.stringify(custom));
    renderCustomPodcasts();
}

function renderLanguageLog() {
    const log = JSON.parse(localStorage.getItem('warrior_language_log') || '[]');
    const last7 = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        const entry = log.find(e => e.date === key);
        last7.push({ date: d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric' }), key, done: !!entry });
    }
    document.getElementById('language-log').innerHTML = `<div class="log-grid">${last7.map(d =>
        `<div class="log-day ${d.done ? 'done' : ''}" onclick="toggleLanguageDay('${d.key}')"><div class="log-date">${d.date}</div><div class="log-check">${d.done ? '✓' : '○'}</div></div>`
    ).join('')}</div>`;
}

function toggleLanguageDay(dateKey) {
    const log = JSON.parse(localStorage.getItem('warrior_language_log') || '[]');
    const idx = log.findIndex(e => e.date === dateKey);
    if (idx >= 0) log.splice(idx, 1);
    else log.push({ date: dateKey });
    localStorage.setItem('warrior_language_log', JSON.stringify(log));
    renderLanguageLog();
}

// === PROGRESS TAB ===

// === SOCIALS TAB ===

function initSocials() {
    renderShoots();
    renderBrands();
    renderInspo();
    renderIdeas();
}

function addShoot() {
    const title = document.getElementById('shoot-title').value;
    if (!title) return;
    const shoots = JSON.parse(localStorage.getItem('warrior_shoots') || '[]');
    shoots.push({ title, date: document.getElementById('shoot-date').value || '', platform: document.getElementById('shoot-platform').value, done: false });
    localStorage.setItem('warrior_shoots', JSON.stringify(shoots));
    document.getElementById('shoot-title').value = '';
    renderShoots();
}

function renderShoots() {
    const shoots = JSON.parse(localStorage.getItem('warrior_shoots') || '[]');
    const el = document.getElementById('shoot-schedule');
    if (!el) return;
    if (shoots.length === 0) { el.innerHTML = '<p class="note">No shoots scheduled</p>'; return; }
    el.innerHTML = shoots.map((s, i) => `<div class="list-row ${s.done ? 'row-done' : ''}"><input type="checkbox" ${s.done ? 'checked' : ''} onchange="toggleShoot(${i})" class="row-check"><div class="row-info"><strong>${s.title}</strong><span class="row-meta">${s.date || 'No date'} · ${s.platform}</span></div><button class="link-btn" onclick="removeItem('warrior_shoots',${i},renderShoots)">×</button></div>`).join('');
}

function toggleShoot(i) { const d = JSON.parse(localStorage.getItem('warrior_shoots') || '[]'); d[i].done = !d[i].done; localStorage.setItem('warrior_shoots', JSON.stringify(d)); renderShoots(); }

function addBrand() {
    const name = document.getElementById('brand-name').value;
    if (!name) return;
    const list = JSON.parse(localStorage.getItem('warrior_brands') || '[]');
    list.push({ name, category: document.getElementById('brand-category').value || '', ig: document.getElementById('brand-ig').value || '' });
    localStorage.setItem('warrior_brands', JSON.stringify(list));
    document.getElementById('brand-name').value = ''; document.getElementById('brand-category').value = ''; document.getElementById('brand-ig').value = '';
    renderBrands();
}

function renderBrands() {
    const list = JSON.parse(localStorage.getItem('warrior_brands') || '[]');
    const el = document.getElementById('brand-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No brands added</p>'; return; }
    el.innerHTML = list.map((b, i) => `<div class="list-row"><div class="row-info"><strong>${b.name}</strong><span class="row-meta">${b.category}${b.ig ? ' · ' + b.ig : ''}</span></div>${b.ig ? `<a href="https://instagram.com/${b.ig.replace('@','')}" target="_blank" class="link-btn">IG</a>` : ''}<button class="link-btn" onclick="removeItem('warrior_brands',${i},renderBrands)">×</button></div>`).join('');
}

function addInspo() {
    const name = document.getElementById('inspo-name').value;
    if (!name) return;
    const list = JSON.parse(localStorage.getItem('warrior_inspo') || '[]');
    list.push({ name, handle: document.getElementById('inspo-handle').value || '', note: document.getElementById('inspo-note').value || '' });
    localStorage.setItem('warrior_inspo', JSON.stringify(list));
    document.getElementById('inspo-name').value = ''; document.getElementById('inspo-handle').value = ''; document.getElementById('inspo-note').value = '';
    renderInspo();
}

function renderInspo() {
    const list = JSON.parse(localStorage.getItem('warrior_inspo') || '[]');
    const el = document.getElementById('inspo-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No inspiration saved</p>'; return; }
    el.innerHTML = list.map((item, i) => {
        const isUrl = item.handle.startsWith('http');
        const link = isUrl ? item.handle : item.handle ? `https://instagram.com/${item.handle.replace('@','')}` : '';
        return `<div class="list-row"><div class="row-info"><strong>${item.name}</strong>${item.handle ? `<span class="row-meta">${item.handle}</span>` : ''}${item.note ? `<span class="row-note">${item.note}</span>` : ''}</div>${link ? `<a href="${link}" target="_blank" class="link-btn">Open</a>` : ''}<button class="link-btn" onclick="removeItem('warrior_inspo',${i},renderInspo)">×</button></div>`;
    }).join('');
}

function addIdea() {
    const text = document.getElementById('idea-text').value;
    if (!text) return;
    const list = JSON.parse(localStorage.getItem('warrior_ideas') || '[]');
    list.push({ text, date: new Date().toISOString().split('T')[0] });
    localStorage.setItem('warrior_ideas', JSON.stringify(list));
    document.getElementById('idea-text').value = '';
    renderIdeas();
}

function renderIdeas() {
    const list = JSON.parse(localStorage.getItem('warrior_ideas') || '[]');
    const el = document.getElementById('ideas-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No ideas yet</p>'; return; }
    el.innerHTML = list.map((item, i) => `<div class="list-row"><div class="row-info"><span>${item.text}</span><span class="row-meta">${item.date}</span></div><button class="link-btn" onclick="removeItem('warrior_ideas',${i},renderIdeas)">×</button></div>`).join('');
}

function removeItem(key, index, renderFn) {
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(list));
    renderFn();
}

// === FINANCE TAB ===

function initFinance() {
    renderFinanceBalance();
    renderIncome();
    renderExpenses();
    renderDeals();
}

function addIncome() {
    const desc = document.getElementById('income-desc').value;
    if (!desc) return;
    const list = JSON.parse(localStorage.getItem('warrior_income') || '[]');
    list.push({ desc, amount: parseFloat(document.getElementById('income-amount').value) || 0, date: document.getElementById('income-date').value || new Date().toISOString().split('T')[0] });
    localStorage.setItem('warrior_income', JSON.stringify(list));
    document.getElementById('income-desc').value = ''; document.getElementById('income-amount').value = '';
    renderIncome(); renderFinanceBalance();
}

function renderIncome() {
    const list = JSON.parse(localStorage.getItem('warrior_income') || '[]');
    const el = document.getElementById('income-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No income recorded</p>'; return; }
    el.innerHTML = list.sort((a, b) => b.date.localeCompare(a.date)).map((item, i) => `<div class="list-row"><div class="row-info"><strong>${item.desc}</strong><span class="row-meta">${item.date}</span></div><span class="finance-amount income">+$${item.amount.toLocaleString()}</span><button class="link-btn" onclick="removeItem('warrior_income',${i},()=>{renderIncome();renderFinanceBalance()})">×</button></div>`).join('');
}

function addExpense() {
    const desc = document.getElementById('expense-desc').value;
    if (!desc) return;
    const list = JSON.parse(localStorage.getItem('warrior_expenses') || '[]');
    list.push({ desc, amount: parseFloat(document.getElementById('expense-amount').value) || 0, date: document.getElementById('expense-date').value || new Date().toISOString().split('T')[0] });
    localStorage.setItem('warrior_expenses', JSON.stringify(list));
    document.getElementById('expense-desc').value = ''; document.getElementById('expense-amount').value = '';
    renderExpenses(); renderFinanceBalance();
}

function renderExpenses() {
    const list = JSON.parse(localStorage.getItem('warrior_expenses') || '[]');
    const el = document.getElementById('expense-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No expenses recorded</p>'; return; }
    el.innerHTML = list.sort((a, b) => b.date.localeCompare(a.date)).map((item, i) => `<div class="list-row"><div class="row-info"><strong>${item.desc}</strong><span class="row-meta">${item.date}</span></div><span class="finance-amount expense">-$${item.amount.toLocaleString()}</span><button class="link-btn" onclick="removeItem('warrior_expenses',${i},()=>{renderExpenses();renderFinanceBalance()})">×</button></div>`).join('');
}

function renderFinanceBalance() {
    const income = JSON.parse(localStorage.getItem('warrior_income') || '[]');
    const expenses = JSON.parse(localStorage.getItem('warrior_expenses') || '[]');
    const totalIn = income.reduce((s, i) => s + i.amount, 0);
    const totalOut = expenses.reduce((s, i) => s + i.amount, 0);
    const balance = totalIn - totalOut;
    const el = document.getElementById('finance-balance');
    if (!el) return;
    el.innerHTML = `
        <div class="balance-grid">
            <div class="balance-item"><span class="balance-label">Income</span><span class="balance-val income">$${totalIn.toLocaleString()}</span></div>
            <div class="balance-item"><span class="balance-label">Expenses</span><span class="balance-val expense">$${totalOut.toLocaleString()}</span></div>
            <div class="balance-item"><span class="balance-label">Balance</span><span class="balance-val ${balance >= 0 ? 'income' : 'expense'}">$${balance.toLocaleString()}</span></div>
        </div>
    `;
}

function addDeal() {
    const brand = document.getElementById('deal-brand').value;
    if (!brand) return;
    const list = JSON.parse(localStorage.getItem('warrior_deals') || '[]');
    list.push({ brand, status: document.getElementById('deal-status').value, value: parseFloat(document.getElementById('deal-value').value) || 0, date: new Date().toISOString().split('T')[0] });
    localStorage.setItem('warrior_deals', JSON.stringify(list));
    document.getElementById('deal-brand').value = ''; document.getElementById('deal-value').value = '';
    renderDeals();
}

function renderDeals() {
    const list = JSON.parse(localStorage.getItem('warrior_deals') || '[]');
    const el = document.getElementById('deals-list');
    if (!el) return;
    if (list.length === 0) { el.innerHTML = '<p class="note">No deals tracked</p>'; return; }
    const statusColors = { prospect:'var(--marble-ghost)', pitched:'var(--sky)', negotiating:'#D4A44A', confirmed:'var(--green)', completed:'var(--green)', paid:'var(--green)' };
    el.innerHTML = list.map((d, i) => `<div class="list-row"><div class="row-info"><strong>${d.brand}</strong><span class="row-meta"><span class="deal-status" style="color:${statusColors[d.status] || ''}">${d.status}</span>${d.value ? ` · $${d.value.toLocaleString()}` : ''}</span></div><select class="input" style="max-width:120px;padding:6px;min-height:32px;font-size:11px" onchange="updateDealStatus(${i},this.value)"><option ${d.status==='prospect'?'selected':''} value="prospect">Prospect</option><option ${d.status==='pitched'?'selected':''} value="pitched">Pitched</option><option ${d.status==='negotiating'?'selected':''} value="negotiating">Negotiating</option><option ${d.status==='confirmed'?'selected':''} value="confirmed">Confirmed</option><option ${d.status==='completed'?'selected':''} value="completed">Completed</option><option ${d.status==='paid'?'selected':''} value="paid">Paid</option></select><button class="link-btn" onclick="removeItem('warrior_deals',${i},renderDeals)">×</button></div>`).join('');
}

function updateDealStatus(i, status) { const d = JSON.parse(localStorage.getItem('warrior_deals') || '[]'); d[i].status = status; localStorage.setItem('warrior_deals', JSON.stringify(d)); renderDeals(); }

// === PROGRESS TAB ===

function initProgress() {
    document.getElementById('benchmark-list').innerHTML = BENCHMARKS.map((b, i) =>
        `<div class="benchmark-row"><span class="benchmark-name">${b.name}</span><span class="benchmark-target">${b.target}</span><span class="benchmark-current"><input type="text" placeholder="Current" id="bench-${i}" value="${loadBenchmark(i)}" onchange="saveBenchmark(${i}, this.value)"></span></div>`
    ).join('');

    // Show recent workout completion history
    renderWorkoutHistory();
}

function renderWorkoutHistory() {
    const container = document.getElementById('benchmark-list');
    let historyHtml = '<div class="workout-history" style="margin-top:40px"><h3 class="sub-head">Recent Workouts</h3>';
    let hasData = false;
    for (let i = 6; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        const data = JSON.parse(localStorage.getItem(`warrior_workout_completion_${key}`) || 'null');
        const dayName = d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
        if (data && data.total > 0) {
            hasData = true;
            const pct = Math.round((data.completed / data.total) * 100);
            historyHtml += `<div class="history-row"><span class="history-date">${dayName}</span><div class="history-bar-bg"><div class="history-bar" style="width:${pct}%"></div></div><span class="history-pct">${pct}%</span><span class="history-detail">${data.completed}/${data.total} sets</span></div>`;
        }
    }
    if (!hasData) historyHtml += '<p class="note">Complete workouts to see your history here.</p>';
    historyHtml += '</div>';
    container.insertAdjacentHTML('afterend', historyHtml);
}

function saveBenchmark(index, value) {
    const data = JSON.parse(localStorage.getItem('warrior_benchmarks') || '{}');
    data[index] = value;
    localStorage.setItem('warrior_benchmarks', JSON.stringify(data));
}

function loadBenchmark(index) {
    return (JSON.parse(localStorage.getItem('warrior_benchmarks') || '{}'))[index] || '';
}

// === CINEMA TAB ===

function initCinema() {
    renderItalianFilmOfWeek();
    renderStreamingAccounts();
    switchWatchlist('must_watch', document.querySelector('.watchlist-tab.active'));
    renderWatchLog();
    renderRoles();

    // Load letterboxd username — default to sandro33
    const lbUser = localStorage.getItem('warrior_letterboxd') || 'sandro33';
    localStorage.setItem('warrior_letterboxd', lbUser);
    const lbInput = document.getElementById('letterboxd-username');
    if (lbInput) lbInput.value = lbUser;

    // Fetch Letterboxd data
    fetchLetterboxd(lbUser);
}

// === LETTERBOXD RSS INTEGRATION ===

async function fetchLetterboxd(username) {
    if (!username) return;

    // RSS via our own Netlify Function — Letterboxd has no CORS headers and
    // public proxies (allorigins.win) are unreliable.
    const proxyUrl = `/.netlify/functions/letterboxd?user=${encodeURIComponent(username)}`;

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error('Failed to fetch');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        if (items.length === 0) return;

        const letterboxdFilms = [];
        items.forEach(item => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';

            // Parse rating from title (e.g., "Film Name, 2024 - ★★★★")
            const starMatch = title.match(/★/g);
            const rating = starMatch ? starMatch.length : 0;
            const halfStar = title.includes('½') ? 0.5 : 0;
            const totalRating = rating + halfStar;

            // Clean title — remove year and rating
            let cleanTitle = title.replace(/,\s*\d{4}\s*-?\s*★.*$/, '').replace(/,\s*\d{4}$/, '').trim();
            // Extract year
            const yearMatch = title.match(/,\s*(\d{4})/);
            const year = yearMatch ? yearMatch[1] : '';

            // Extract image from description
            const imgMatch = description.match(/src="([^"]+)"/);
            const img = imgMatch ? imgMatch[1] : '';

            // Extract review text (strip HTML)
            const reviewText = description.replace(/<[^>]*>/g, '').replace(/Watched on.*$/, '').trim();

            const dateObj = new Date(pubDate);
            const dateStr = dateObj.toISOString().split('T')[0];

            letterboxdFilms.push({
                title: cleanTitle,
                year,
                rating: totalRating,
                date: dateStr,
                link,
                img,
                review: reviewText.substring(0, 200)
            });
        });

        // Store and merge with local watched data
        if (letterboxdFilms.length > 0) {
            localStorage.setItem('warrior_letterboxd_films', JSON.stringify(letterboxdFilms));
            mergeLetterboxdWithWatched(letterboxdFilms);
            renderLetterboxdDiary(letterboxdFilms);
        }
    } catch (err) {
        console.log('Letterboxd fetch failed (expected on local file):', err.message);
        // Try loading cached data
        const cached = JSON.parse(localStorage.getItem('warrior_letterboxd_films') || '[]');
        if (cached.length > 0) {
            renderLetterboxdDiary(cached);
        }
    }
}

function mergeLetterboxdWithWatched(lbFilms) {
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    let updated = false;
    lbFilms.forEach(film => {
        if (!watched[film.title]) {
            watched[film.title] = {
                date: film.date,
                rating: Math.round(film.rating),
                notes: film.review || '',
                source: 'letterboxd'
            };
            updated = true;
        }
    });
    if (updated) {
        localStorage.setItem('warrior_watched', JSON.stringify(watched));
        renderWatchLog();
    }
}

function renderLetterboxdDiary(films) {
    // Add a Letterboxd diary section to the watch log
    const logEl = document.getElementById('watch-log');
    if (!logEl) return;

    let diaryHtml = '<div class="letterboxd-diary"><h3 class="sub-head" style="margin-top:24px">Letterboxd Diary <span class="tag-green">synced</span></h3>';

    films.slice(0, 15).forEach(film => {
        const stars = '★'.repeat(Math.floor(film.rating)) + (film.rating % 1 >= 0.5 ? '½' : '');
        diaryHtml += `<div class="diary-entry">
            <div class="diary-info">
                <span class="diary-title">${film.title} <span class="film-year">${film.year}</span></span>
                <span class="diary-date">${film.date}</span>
            </div>
            <span class="diary-stars">${stars || '—'}</span>
            <a href="${film.link}" target="_blank" class="diary-link">↗</a>
        </div>`;
    });

    diaryHtml += '</div>';
    logEl.insertAdjacentHTML('beforeend', diaryHtml);
}

function renderItalianFilmOfWeek() {
    const week = getWeekNumber();
    const film = ITALIAN_FILMS[(week - 1) % ITALIAN_FILMS.length];
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    const isWatched = watched[film.title];
    const container = document.getElementById('italian-film-of-week');
    container.innerHTML = `
        <div class="film-of-week ${isWatched ? 'watched' : ''}">
            <div class="film-week-header">
                <div>
                    <h3>${film.title} <span class="film-year">(${film.year})</span></h3>
                    <div class="film-director">Directed by ${film.director}</div>
                </div>
                <button class="btn-watch ${isWatched ? 'done' : ''}" onclick="markFilmWatched('${film.title.replace(/'/g, "\\'")}')">
                    ${isWatched ? '✓ Watched' : 'Mark as Watched'}
                </button>
            </div>
            <p class="film-desc">${film.desc}</p>
            <div class="film-actions">
                ${renderStreamingSearch(film.title)}
                <a href="https://letterboxd.com/film/${film.letterboxd || ''}" target="_blank" class="btn-streaming" style="background:#00E054;color:#000">Letterboxd</a>
            </div>
        </div>
    `;
}

function renderStreamingAccounts() {
    const container = document.getElementById('streaming-accounts');
    const userAccounts = JSON.parse(localStorage.getItem('warrior_streaming') || '[]');
    container.innerHTML = STREAMING_PLATFORMS.map(p => {
        const hasAccount = userAccounts.includes(p.name);
        return `<div class="streaming-account ${hasAccount ? 'active' : ''}" onclick="toggleStreamingAccount('${p.name}')" style="border-color:${hasAccount ? p.color : 'var(--border)'}">
            <span class="streaming-icon" style="background:${p.color}">${p.icon}</span>
            <span>${p.name}</span>
            <span class="streaming-check">${hasAccount ? '✓' : '+'}</span>
        </div>`;
    }).join('');
}

function toggleStreamingAccount(name) {
    const accounts = JSON.parse(localStorage.getItem('warrior_streaming') || '[]');
    const idx = accounts.indexOf(name);
    if (idx >= 0) accounts.splice(idx, 1);
    else accounts.push(name);
    localStorage.setItem('warrior_streaming', JSON.stringify(accounts));
    renderStreamingAccounts();
}

function renderStreamingSearch(filmTitle) {
    const accounts = JSON.parse(localStorage.getItem('warrior_streaming') || '[]');
    return STREAMING_PLATFORMS
        .filter(p => accounts.includes(p.name))
        .map(p => `<a href="${p.url}${encodeURIComponent(filmTitle)}" target="_blank" class="btn-streaming" style="background:${p.color}">${p.icon}</a>`)
        .join('');
}

function saveLetterboxd(username) {
    localStorage.setItem('warrior_letterboxd', username);
}

function openLetterboxd(e) {
    e.preventDefault();
    const user = localStorage.getItem('warrior_letterboxd');
    if (user) window.open(`https://letterboxd.com/${user}/`, '_blank');
    else alert('Enter your Letterboxd username first.');
}

// === WATCHLISTS ===

function switchWatchlist(listType, btn) {
    document.querySelectorAll('.watchlist-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const container = document.getElementById('watchlist-content');
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');

    if (listType === 'must_watch') {
        const userAdded = JSON.parse(localStorage.getItem('warrior_list_must_watch') || '[]');
        const allFilms = [...MUST_WATCH.map(f => ({...f, source: 'built-in'})), ...userAdded.map(f => ({...f, source: 'user'}))];
        container.innerHTML = allFilms.map(f => renderFilmRow(f, watched, 'must_watch')).join('');
    } else if (listType === 'world') {
        const userAdded = JSON.parse(localStorage.getItem('warrior_list_world') || '[]');
        const allFilms = [...WORLD_CINEMA.map(f => ({...f, source: 'built-in'})), ...userAdded.map(f => ({...f, source: 'user'}))];
        container.innerHTML = allFilms.map(f => renderFilmRow(f, watched, 'world')).join('');
    } else if (listType === 'italian') {
        const userAdded = JSON.parse(localStorage.getItem('warrior_list_italian') || '[]');
        const allFilms = [...ITALIAN_FILMS.map(f => ({...f, source: 'built-in'})), ...userAdded.map(f => ({...f, source: 'user'}))];
        container.innerHTML = allFilms.map(f => renderFilmRow(f, watched, 'italian')).join('');
    } else if (listType === 'directors') {
        let html = '';
        Object.entries(DIRECTOR_STUDIES).forEach(([name, data]) => {
            html += `<div class="director-card"><h3>${name}</h3><p class="director-bio">${data.bio}</p><div class="director-films">`;
            data.essential.forEach(title => {
                const w = watched[title];
                const safe = title.replace(/'/g, "\\'");
                html += `<div class="film-row ${w ? 'watched' : ''}">
                    <span class="film-check" onclick="markFilmWatched('${safe}')">${w ? '✓' : '○'}</span>
                    <span class="film-title">${title}</span>
                    <div class="film-row-actions">
                        <button class="btn-jw" onclick="openJustWatch(event, '${safe}', null)" title="Where to watch" aria-label="Where to watch">
                            <span class="btn-jw-icon">▶</span><span class="btn-jw-label">Watch</span>
                        </button>
                        ${renderStreamingSearch(title)}
                    </div>
                </div>`;
            });
            html += `</div></div>`;
        });
        container.innerHTML = html;
    } else if (listType === 'custom') {
        const userFilms = JSON.parse(localStorage.getItem('warrior_list_custom') || '[]');
        if (userFilms.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted);padding:20px;text-align:center">No custom films added yet. Use the form below to add films.</p>';
        } else {
            container.innerHTML = userFilms.map(f => renderFilmRow(f, watched, 'custom')).join('');
        }
    }
}

function renderFilmRow(film, watched, listType) {
    const w = watched[film.title];
    const countryTag = film.country ? `<span class="film-country">${film.country}</span>` : '';
    const whyText = film.why || film.desc || '';
    const safeTitle = film.title.replace(/'/g, "\\'");
    const yr = film.year || '';
    return `<div class="film-row ${w ? 'watched' : ''}">
        <span class="film-check" onclick="markFilmWatched('${safeTitle}')">${w ? '✓' : '○'}</span>
        <div class="film-info">
            <span class="film-title">${film.title} <span class="film-year">(${film.year})</span></span>
            <span class="film-director-small">${film.director} ${countryTag}</span>
            ${whyText ? `<span class="film-why">${whyText}</span>` : ''}
        </div>
        <div class="film-row-actions">
            <button class="btn-jw" onclick="openJustWatch(event, '${safeTitle}', ${yr || 'null'})" title="Where to watch" aria-label="Where to watch">
                <span class="btn-jw-icon">▶</span><span class="btn-jw-label">Watch</span>
            </button>
            ${renderStreamingSearch(film.title)}
            ${film.source === 'user' ? `<button class="btn-text" onclick="removeUserFilm('${listType}','${safeTitle}')">×</button>` : ''}
        </div>
    </div>`;
}

function markFilmWatched(title) {
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    if (watched[title]) {
        delete watched[title];
    } else {
        watched[title] = { date: new Date().toISOString().split('T')[0], rating: null, notes: '' };
    }
    localStorage.setItem('warrior_watched', JSON.stringify(watched));
    // Re-render current list
    const activeTab = document.querySelector('.watchlist-tab.active');
    if (activeTab) switchWatchlist(activeTab.dataset.list, activeTab);
    renderItalianFilmOfWeek();
    renderWatchLog();
}

// === JUSTWATCH MODAL ===

let _jwCurrent = { title: null, year: null };

function openJustWatch(e, title, year) {
    if (e && e.stopPropagation) e.stopPropagation();
    _jwCurrent = { title, year };
    const modal = document.getElementById('jw-modal');
    document.getElementById('jw-title').textContent = title;
    document.getElementById('jw-subtitle').textContent = year ? `(${year})` : '';
    populateJustWatchCountrySelect();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadJustWatchOffers();
}

function closeJustWatch() {
    document.getElementById('jw-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function populateJustWatchCountrySelect() {
    const sel = document.getElementById('jw-country');
    if (sel.options.length > 0) {
        sel.value = jwGetCountry();
        return;
    }
    sel.innerHTML = JW_COUNTRIES
        .map(c => `<option value="${c.code}">${c.name}</option>`)
        .join('');
    sel.value = jwGetCountry();
}

function onJustWatchCountryChange() {
    const code = document.getElementById('jw-country').value;
    jwSetCountry(code);
    loadJustWatchOffers();
}

async function loadJustWatchOffers() {
    const body = document.getElementById('jw-body');
    body.innerHTML = `<div class="jw-loading"><div class="jw-spinner"></div><p>Looking up streaming options...</p></div>`;
    try {
        const result = await jwLookup(_jwCurrent.title, _jwCurrent.year, jwGetCountry());
        console.log('[JustWatch] result:', result);
        renderJustWatchOffers(result);
    } catch (err) {
        console.error('[JustWatch] error:', err);
        renderJustWatchError(err.message || 'Lookup failed');
    }
}

function renderJustWatchOffers(result) {
    const body = document.getElementById('jw-body');
    const { offers, titleUrl } = result;

    if (!offers || offers.length === 0) {
        body.innerHTML = `
            <div class="jw-empty">
                <p>No streaming options found in this country.</p>
                <p class="jw-hint">Try switching country, or check JustWatch directly.</p>
                ${titleUrl ? `<a class="jw-cta" href="${titleUrl}" target="_blank" rel="noopener">View on JustWatch →</a>` : ''}
            </div>`;
        return;
    }

    // Group by monetization type for clear sectioning
    const groups = {};
    for (const o of offers) {
        if (!groups[o.monetizationType]) groups[o.monetizationType] = [];
        groups[o.monetizationType].push(o);
    }

    const sectionOrder = ['FLATRATE', 'FREE', 'ADS', 'RENT', 'BUY'];
    let html = '';
    for (const type of sectionOrder) {
        const list = groups[type];
        if (!list || list.length === 0) continue;
        html += `<div class="jw-section">
            <div class="jw-section-label">${jwLabelForType(type)}</div>
            <div class="jw-providers">
                ${list.map(jwOfferRowHTML).join('')}
            </div>
        </div>`;
    }

    if (titleUrl) {
        html += `<div class="jw-section jw-more">
            <a class="jw-cta" href="${titleUrl}" target="_blank" rel="noopener">View all options on JustWatch →</a>
        </div>`;
    }

    body.innerHTML = html;
}

function jwOfferRowHTML(o) {
    const icon = jwIconURL(o.providerIcon);
    const url = (o.url || '').replace(/"/g, '&quot;');
    return `<a class="jw-provider" href="${url || '#'}" target="_blank" rel="noopener" onclick="return jwOnProviderClick(event, this)" data-jw-url="${url}">
        <div class="jw-provider-left">
            ${icon ? `<img class="jw-provider-icon" src="${icon}" alt="${o.providerName}" loading="lazy"/>` : `<div class="jw-provider-icon jw-provider-icon-placeholder">${(o.providerName||'?').charAt(0)}</div>`}
            <span class="jw-provider-name">${o.providerName}</span>
        </div>
        <span class="jw-provider-arrow">›</span>
    </a>`;
}

function jwOnProviderClick(e, anchor) {
    const url = anchor.getAttribute('data-jw-url');
    e.preventDefault();
    e.stopPropagation();
    if (!url || url === '#') {
        console.warn('[JustWatch] no URL for provider, ignoring click');
        return false;
    }
    window.open(url, '_blank', 'noopener');
    return false;
}

function renderJustWatchError(msg) {
    const body = document.getElementById('jw-body');
    body.innerHTML = `
        <div class="jw-empty">
            <p>Couldn't load streaming options.</p>
            <p class="jw-hint">${msg}</p>
        </div>`;
}

function addFilm() {
    const title = document.getElementById('film-title').value;
    if (!title) return;
    const film = {
        title,
        director: document.getElementById('film-director').value || 'Unknown',
        year: document.getElementById('film-year').value || '',
        why: '',
        source: 'user'
    };
    const listType = document.getElementById('film-list').value;
    const list = JSON.parse(localStorage.getItem(`warrior_list_${listType}`) || '[]');
    list.push(film);
    localStorage.setItem(`warrior_list_${listType}`, JSON.stringify(list));
    document.getElementById('film-title').value = '';
    document.getElementById('film-director').value = '';
    document.getElementById('film-year').value = '';
    const activeTab = document.querySelector('.watchlist-tab.active');
    if (activeTab && activeTab.dataset.list === listType) switchWatchlist(listType, activeTab);
}

function removeUserFilm(listType, title) {
    const list = JSON.parse(localStorage.getItem(`warrior_list_${listType}`) || '[]');
    const idx = list.findIndex(f => f.title === title);
    if (idx >= 0) list.splice(idx, 1);
    localStorage.setItem(`warrior_list_${listType}`, JSON.stringify(list));
    switchWatchlist(listType, document.querySelector('.watchlist-tab.active'));
}

// === WATCH LOG ===

function renderWatchLog() {
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    const entries = Object.entries(watched).sort((a, b) => (b[1].date || '').localeCompare(a[1].date || ''));
    const container = document.getElementById('watch-log');
    if (entries.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);padding:16px;text-align:center">No films logged yet. Mark films as watched from any list.</p>';
        return;
    }
    container.innerHTML = entries.slice(0, 20).map(([title, data]) =>
        `<div class="log-film">
            <div class="log-film-info">
                <strong>${title}</strong>
                <span class="log-film-date">${data.date || ''}</span>
            </div>
            <div class="log-film-rating">
                ${[1,2,3,4,5].map(s => `<span class="star ${(data.rating || 0) >= s ? 'filled' : ''}" onclick="rateFilm('${title.replace(/'/g, "\\'")}', ${s})">★</span>`).join('')}
            </div>
            <input type="text" class="log-film-notes" placeholder="Notes..." value="${data.notes || ''}" onchange="noteFilm('${title.replace(/'/g, "\\'")}', this.value)">
        </div>`
    ).join('');
}

function rateFilm(title, rating) {
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    if (watched[title]) {
        watched[title].rating = watched[title].rating === rating ? null : rating;
        localStorage.setItem('warrior_watched', JSON.stringify(watched));
        renderWatchLog();
    }
}

function noteFilm(title, note) {
    const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
    if (watched[title]) {
        watched[title].notes = note;
        localStorage.setItem('warrior_watched', JSON.stringify(watched));
    }
}

// === ROLES IN DEVELOPMENT ===

function addRole() {
    const name = document.getElementById('role-name').value;
    if (!name) return;
    const roles = JSON.parse(localStorage.getItem('warrior_roles') || '[]');
    roles.push({
        name,
        project: document.getElementById('role-project').value || '',
        notes: document.getElementById('role-notes').value || '',
        films: [],
        created: new Date().toISOString().split('T')[0]
    });
    localStorage.setItem('warrior_roles', JSON.stringify(roles));
    document.getElementById('role-name').value = '';
    document.getElementById('role-project').value = '';
    document.getElementById('role-notes').value = '';
    renderRoles();
}

function renderRoles() {
    const roles = JSON.parse(localStorage.getItem('warrior_roles') || '[]');
    const container = document.getElementById('roles-list');
    if (roles.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);padding:16px;text-align:center">No roles added yet. When you\'re developing a character, add it here to build a study list.</p>';
        return;
    }
    container.innerHTML = roles.map((role, ri) => {
        const watched = JSON.parse(localStorage.getItem('warrior_watched') || '{}');
        return `<div class="role-card">
            <div class="role-header">
                <div>
                    <h3>${role.name} ${role.project ? `<span class="role-project">— ${role.project}</span>` : ''}</h3>
                    <p class="role-notes">${role.notes}</p>
                </div>
                <button class="btn-text" onclick="removeRole(${ri})">Remove</button>
            </div>
            <div class="role-films">
                <h4>Study Films for This Role</h4>
                ${role.films.map((f, fi) =>
                    `<div class="film-row ${watched[f.title] ? 'watched' : ''}">
                        <span class="film-check" onclick="markFilmWatched('${f.title.replace(/'/g, "\\'")}')">${watched[f.title] ? '✓' : '○'}</span>
                        <span class="film-title">${f.title}</span>
                        <span class="film-why">${f.why || ''}</span>
                        <div class="film-row-actions">${renderStreamingSearch(f.title)}<button class="btn-text" onclick="removeRoleFilm(${ri},${fi})">×</button></div>
                    </div>`
                ).join('')}
                <div class="add-role-film">
                    <input type="text" id="role-film-${ri}" placeholder="Add a film to study..." class="input-field">
                    <input type="text" id="role-film-why-${ri}" placeholder="Why this film helps" class="input-field">
                    <button class="btn-secondary" onclick="addRoleFilm(${ri})">Add</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function addRoleFilm(roleIndex) {
    const title = document.getElementById(`role-film-${roleIndex}`).value;
    if (!title) return;
    const roles = JSON.parse(localStorage.getItem('warrior_roles') || '[]');
    roles[roleIndex].films.push({
        title,
        why: document.getElementById(`role-film-why-${roleIndex}`).value || ''
    });
    localStorage.setItem('warrior_roles', JSON.stringify(roles));
    renderRoles();
}

function removeRoleFilm(roleIndex, filmIndex) {
    const roles = JSON.parse(localStorage.getItem('warrior_roles') || '[]');
    roles[roleIndex].films.splice(filmIndex, 1);
    localStorage.setItem('warrior_roles', JSON.stringify(roles));
    renderRoles();
}

function removeRole(index) {
    if (!confirm('Remove this role and its study list?')) return;
    const roles = JSON.parse(localStorage.getItem('warrior_roles') || '[]');
    roles.splice(index, 1);
    localStorage.setItem('warrior_roles', JSON.stringify(roles));
    renderRoles();
}
