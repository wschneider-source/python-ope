// === PYTHONI ÕPPEMÄNGU LOOGIKA ===
// Tasemete andmebaas
const LEVELS = [
    {
        title: "Muutujad ja Andmetüübid",
        topic: "Variables",
        description: "Muutuja on nagu karp, kuhu saab salvestada andmeid. Pythonis luuakse muutuja nime kirjutamisega, millele järgneb võrdusmärk (omistamine) ja väärtus. Tekst (string) pannakse alati jutumärkide vahele.",
        expectedCode: 'kool = "VOCO"\nprint(kool)',
        expectedOutput: "VOCO",
        xpReward: 100,
        // Samm 1: Teooria ridade seletused
        explanations: [
            { line: 'kool = "VOCO"', text: "Selle reaga loome muutuja nimega <code>kool</code> ning salvestame sinna teksti (stringi) <code>\"VOCO\"</code>." },
            { line: 'print(kool)', text: "Funktsioon <code>print()</code> kuvab sulgude sees oleva muutuja väärtuse konsoolile. Antud juhul prinditakse ekraanile <code>VOCO</code>." }
        ],
        // Samm 3: Lünkade täitmine
        fillInScaffold: '# Salvesta kooli nimi muutujasse\nkool = "___"\n# Prindi kooli nimi välja\nprint(___)',
        fillInCorrect: 'kool = "VOCO"\nprint(kool)',
        fillInHint: 'Esimesel real kirjuta jutumärkide vahele VOCO. Teisel real kirjuta print sulgudesse kool ilma jutumärkideta.',
        // Samm 4: Sorteerimise klotsid
        sortingBlocks: ['kool', '=', '"VOCO"', 'print', '(', 'kool', ')'],
    },
    {
        title: "Aritmeetilised Tehted",
        topic: "Arithmetic",
        description: "Python saab teha matemaatilisi tehteid nagu kalkulaator. Kasutada saab sümboleid: + (liitmine), - (lahutamine), * (korrutamine) ja / (jagamine). Jagamistehe tagastab alati ujukomaarvu (nt 3.0).",
        expectedCode: 'a = 15\nb = 5\nvastus = a / b\nprint(vastus)',
        expectedOutput: "3.0",
        xpReward: 150,
        explanations: [
            { line: 'a = 15', text: "Loome muutuja <code>a</code> väärtusega <code>15</code> (täisarv)." },
            { line: 'b = 5', text: "Loome teise muutuja <code>b</code> väärtusega <code>5</code>." },
            { line: 'vastus = a / b', text: "Jagame muutuja <code>a</code> väärtuse <code>b</code>-ga ning salvestame tulemuse muutujasse nimega <code>vastus</code>." },
            { line: 'print(vastus)', text: "Kuvame jagamistehte tulemuse. Kuna jagamine tekitab ujukomaarvu, kuvatakse <code>3.0</code>." }
        ],
        fillInScaffold: 'a = 15\nb = 5\n# Jaga a b-ga\nvastus = a ___ b\n# Prindi vastus\n___(vastus)',
        fillInCorrect: 'a = 15\nb = 5\nvastus = a / b\nprint(vastus)',
        fillInHint: 'Jagamismärk Pythonis on kaldkriips (/). Printimiseks kasuta funktsiooni print.',
        sortingBlocks: ['a = 15', 'b = 5', 'vastus = a / b', 'print(vastus)'], // Reatasemel sorteerimine keerukamate koodide jaoks
    },
    {
        title: "Tingimuslaused (If-Else)",
        topic: "Conditionals",
        description: "Tingimuslaused võimaldavad koodil teha otsuseid. Kui `if` tingimus on tõene, käivitatakse sellele järgnev taandega koodiblokk. Vastasel juhul liigutakse edasi `else` bloki juurde. Pythonis on taanded (tavaliselt 4 tühikut) kohustuslikud!",
        expectedCode: 'hinne = 5\nif hinne >= 3:\n    print("Läbi")\nelse:\n    print("Korda")',
        expectedOutput: "Läbi",
        xpReward: 200,
        explanations: [
            { line: 'hinne = 5', text: "Salvestame muutujasse <code>hinne</code> väärtuse <code>5</code>." },
            { line: 'if hinne >= 3:', text: "Kontrollime tingimust: kas hinne on suurem või võrdne 3-ga? Rea lõpus olev koolon (<code>:</code>) näitab koodibloki algust." },
            { line: '    print("Läbi")', text: "See rida käivitatakse AINULT siis, kui tingimus oli tõene. Rida peab olema taandatud (4 tühikut ettepoole)!" },
            { line: 'else:', text: "Kui tingimus oli väär (hinne on väiksem kui 3), minnakse siia blokki." },
            { line: '    print("Korda")', text: "Kuvatakse tekst \"Korda\", kui eelnev if-lause ei kehtinud." }
        ],
        fillInScaffold: 'hinne = 5\n___ hinne >= 3:\n    print("Läbi")\n___:\n    print("Korda")',
        fillInCorrect: 'hinne = 5\nif hinne >= 3:\n    print("Läbi")\nelse:\n    print("Korda")',
        fillInHint: 'Tingimuse kontrolli alustatakse võtmesõnaga "if". Alternatiivne haru algab võtmesõnaga "else:".',
        sortingBlocks: ['hinne = 5', 'if hinne >= 3:', '    print("Läbi")', 'else:', '    print("Korda")'],
    },
    {
        title: "Korduslaused (For Loops)",
        topic: "Loops",
        description: "Tsüklite abil saame koodi korduvalt käivitada. `for i in range(3)` kordab selle all olevat koodi täpselt 3 korda. Muutuja `i` võtab igal kordusel uue väärtuse alates 0-st kuni 2-ni (0, 1, 2).",
        expectedCode: 'for i in range(3):\n    print("Tere")',
        expectedOutput: "Tere\nTere\nTere",
        xpReward: 250,
        explanations: [
            { line: 'for i in range(3):', text: "Käivitab tsükli, mis kordub 3 korda. <code>range(3)</code> loob arvud 0, 1, 2. Igal kordusel saab muutuja <code>i</code> ühe neist väärtustest." },
            { line: '    print("Tere")', text: "See koodirida käivitatakse iga tsükli kordusega. Kuna see on tsükli sees, on see taandatud 4 tühikuga." }
        ],
        fillInScaffold: '# Korda 3 korda\n___ i in range(___):\n    print("Tere")',
        fillInCorrect: 'for i in range(3):\n    print("Tere")',
        fillInHint: 'Tsükli algus on "for i in range(3):". Pane tähele koolonit lõpus!',
        sortingBlocks: ['for', 'i', 'in', 'range(3)', ':', '    print("Tere")'],
    },
    {
        title: "Funktsioonid (Functions)",
        topic: "Functions",
        description: "Funktsioon on korduvkasutatav koodiplokk, mille saab käivitada (välja kutsuda) nime kaudu. Funktsioon luuakse võtmesõnaga `def` ja see võib tagastada tulemuse võtmesõnaga `return`.",
        expectedCode: 'def liida(x, y):\n    return x + y\nprint(liida(4, 2))',
        expectedOutput: "6",
        xpReward: 300,
        explanations: [
            { line: 'def liida(x, y):', text: "Defineerime funktsiooni nimega <code>liida</code>, mis võtab kaks parameetrit (sisendit): <code>x</code> ja <code>y</code>." },
            { line: '    return x + y', text: "Funktsioon arvutab <code>x + y</code> väärtuse ja saadab selle tagasi (tagastab) väljakutsujale." },
            { line: 'print(liida(4, 2))', text: "Kutsume välja funktsiooni <code>liida</code> väärtustega 4 ja 2. Tulemuseks saame 6, mille funktsioon print() kuvab ekraanile." }
        ],
        fillInScaffold: '# Defineeri funktsioon\n___ liida(x, y):\n    return x + y\n# Kutsu funktsioon välja ja prindi\nprint(liida(___, ___))',
        fillInCorrect: 'def liida(x, y):\n    return x + y\nprint(liida(4, 2))',
        fillInHint: 'Funktsiooni loomiseks kasuta võtmesõna "def". Printimisel edasta funktsioonile kaks arvu (nt 4 ja 2).',
        sortingBlocks: ['def', 'liida(x, y):', '    return x + y', 'print(liida(4, 2))'],
    },
    {
        title: "Paaris või Paaritu",
        topic: "Modulo + If",
        description: "Modulo ehk jäägitehe `%` aitab kontrollida, kas arv jagub millegagi täpselt. Kui arv `% 2` annab tulemuseks `0`, siis on arv paaris.",
        expectedCode: 'arv = 8\nif arv % 2 == 0:\n    print("Paaris")\nelse:\n    print("Paaritu")',
        expectedOutput: "Paaris",
        xpReward: 180,
        explanations: [
            { line: 'arv = 8', text: "Salvestame muutujasse <code>arv</code> väärtuse <code>8</code>." },
            { line: 'if arv % 2 == 0:', text: "Kontrollime, kas arv jagub 2-ga jäägita. Kui jääk on 0, siis on arv paaris." },
            { line: '    print("Paaris")', text: "Kui tingimus vastab tõele, prindime välja <code>Paaris</code>." },
            { line: 'else:', text: "Kui tingimus ei kehti, liigume <code>else</code> harusse." },
            { line: '    print("Paaritu")', text: "Siin kuvatakse tekst <code>Paaritu</code>, kui arv ei jagu 2-ga täpselt." }
        ],
        fillInScaffold: 'arv = 8\nif arv ___ 2 == 0:\n    print("Paaris")\nelse:\n    print("Paaritu")',
        fillInCorrect: 'arv = 8\nif arv % 2 == 0:\n    print("Paaris")\nelse:\n    print("Paaritu")',
        fillInHint: 'Kasuta jäägitehet ehk protsendimärki (%). Paarisarvu kontrolliks sobib "arv % 2 == 0".',
        sortingBlocks: ['arv = 8', 'if arv % 2 == 0:', '    print("Paaris")', 'else:', '    print("Paaritu")'],
    },
    {
        title: "Tsükliga Liitmine",
        topic: "Loop + Variables",
        description: "Tsüklis saab sama muutujat korduvalt uuendada. Allolev näide lisab muutujale <code>summa</code> igal tsükli sammul 2 juurde.",
        expectedCode: 'summa = 0\nfor i in range(4):\n    summa = summa + 2\nprint(summa)',
        expectedOutput: "8",
        xpReward: 220,
        explanations: [
            { line: 'summa = 0', text: "Loome muutuja <code>summa</code> ja anname sellele algväärtuseks <code>0</code>." },
            { line: 'for i in range(4):', text: "Tsükkel kordub 4 korda. Igal sammul saame muuta muutuja väärtust." },
            { line: '    summa = summa + 2', text: "Iga kord lisame <code>summa</code> väärtusele 2 juurde." },
            { line: 'print(summa)', text: "Pärast tsüklit kuvame lõpliku summa. 0 + 2 + 2 + 2 + 2 = 8." }
        ],
        fillInScaffold: 'summa = 0\nfor i in range(4):\n    summa = summa ___ 2\nprint(summa)',
        fillInCorrect: 'summa = 0\nfor i in range(4):\n    summa = summa + 2\nprint(summa)',
        fillInHint: 'Selles ülesandes tuleb igal tsükli sammul summale 2 juurde liita. Kasuta plussmärki (+).',
        sortingBlocks: ['summa = 0', 'for i in range(4):', '    summa = summa + 2', 'print(summa)'],
    },
    {
        title: "Vanuse Kontroll",
        topic: "If + Võrdlus",
        description: "Tingimuslauset saab kasutada ka vanuse kontrolliks. Kui vanus on vähemalt 18, siis prindime, et inimene on täiskasvanu.",
        expectedCode: 'vanus = 19\nif vanus >= 18:\n    print("Täiskasvanu")\nelse:\n    print("Alaealine")',
        expectedOutput: "Täiskasvanu",
        xpReward: 240,
        explanations: [
            { line: 'vanus = 19', text: "Salvestame muutujasse <code>vanus</code> väärtuse <code>19</code>." },
            { line: 'if vanus >= 18:', text: "Kontrollime, kas vanus on vähemalt 18." },
            { line: '    print("Täiskasvanu")', text: "Kui tingimus on tõene, kuvatakse <code>Täiskasvanu</code>." },
            { line: 'else:', text: "Kui tingimus pole tõene, liigume <code>else</code> harusse." },
            { line: '    print("Alaealine")', text: "Siin kuvatakse <code>Alaealine</code>, kui vanus on väiksem kui 18." }
        ],
        fillInScaffold: 'vanus = 19\nif vanus ___ 18:\n    print("Täiskasvanu")\nelse:\n    print("Alaealine")',
        fillInCorrect: 'vanus = 19\nif vanus >= 18:\n    print("Täiskasvanu")\nelse:\n    print("Alaealine")',
        fillInHint: 'Kasuta võrdlusmärki suurem-või-võrdne: >=',
        sortingBlocks: ['vanus = 19', 'if vanus >= 18:', '    print("Täiskasvanu")', 'else:', '    print("Alaealine")'],
    },
    {
        title: "Viie Kordne Tsükkel",
        topic: "Loops + Korrutamine",
        description: "Tsüklis saab arve korrutada. Selles näites prindime viis korda arvu 5 korrutise 2-ga.",
        expectedCode: 'for i in range(5):\n    print(5 * 2)',
        expectedOutput: "10\n10\n10\n10\n10",
        xpReward: 260,
        explanations: [
            { line: 'for i in range(5):', text: "Tsükkel kordub 5 korda." },
            { line: '    print(5 * 2)', text: "Igal kordusel prinditakse korrutamise tulemus 10." }
        ],
        fillInScaffold: 'for i in range(5):\n    print(5 ___ 2)',
        fillInCorrect: 'for i in range(5):\n    print(5 * 2)',
        fillInHint: 'Korrutamiseks kasuta tärni (*).',
        sortingBlocks: ['for i in range(5):', '    print(5 * 2)'],
    },
    {
        title: "Ruut Funktsioon",
        topic: "Functions + Return",
        description: "Funktsioon saab tagastada ka ühe arvu ruudu. Kui korrutame arvu iseendaga, saame ruudu.",
        expectedCode: 'def ruut(x):\n    return x * x\nprint(ruut(5))',
        expectedOutput: "25",
        xpReward: 320,
        explanations: [
            { line: 'def ruut(x):', text: "Loome funktsiooni <code>ruut</code>, mis võtab ühe parameetri <code>x</code>." },
            { line: '    return x * x', text: "Tagastame arvu ruudu ehk <code>x * x</code>." },
            { line: 'print(ruut(5))', text: "Kutsume funktsiooni välja väärtusega 5. Tulemuseks on 25." }
        ],
        fillInScaffold: 'def ruut(x):\n    return x ___ x\nprint(ruut(5))',
        fillInCorrect: 'def ruut(x):\n    return x * x\nprint(ruut(5))',
        fillInHint: 'Ruudu leidmiseks korruta arv iseendaga tärni (*) abil.',
        sortingBlocks: ['def', 'ruut(x):', '    return x * x', 'print(ruut(5))'],
    },
    {
        title: "Sisendi Lugemine (input)",
        topic: "Input",
        description: "Funktsioon `input()` loeb kasutaja sisestust. Selles tasemes harjutad, kuidas võtta sisend muutujasse ja seejärel seda kasutada. Selles rakenduses kasutame testimisel nime `Mari`.",
        expectedCode: 'nimi = input("Sisesta nimi: ")\nprint("Tere, " + nimi)',
        expectedOutput: "Tere, Mari",
        xpReward: 260,
        simulatedInputs: ['Mari'],
        explanations: [
            { line: 'nimi = input("Sisesta nimi: ")', text: "Funktsioon <code>input()</code> küsib kasutajalt teksti ning salvestab selle muutujasse <code>nimi</code>." },
            { line: 'print("Tere, " + nimi)', text: "Siin ühendame teksti <code>\"Tere, \"</code> ja kasutaja sisestatud nime ning prindime tulemuse välja." }
        ],
        fillInScaffold: 'nimi = ___("Sisesta nimi: ")\nprint("Tere, " + nimi)',
        fillInCorrect: 'nimi = input("Sisesta nimi: ")\nprint("Tere, " + nimi)',
        fillInHint: 'Kasutaja sisendi lugemiseks kasuta funktsiooni input().',
        sortingBlocks: ['nimi = input("Sisesta nimi: ")', 'print("Tere, " + nimi)'],
    },
    {
        title: "Vanus inputiga",
        topic: "Input + If",
        description: "Nüüd kasutame `input()` funktsiooni vanuse küsimiseks. Kui vanus on väiksem kui 18, siis prindime, et tegemist on lapsega. Selles rakenduses kasutame testimisel vanust `12`.",
        expectedCode: 'vanus = int(input("Sisesta vanus: "))\nif vanus < 18:\n    print("Laps")\nelse:\n    print("Mitte laps")',
        expectedOutput: "Laps",
        xpReward: 280,
        simulatedInputs: ['12'],
        explanations: [
            { line: 'vanus = int(input("Sisesta vanus: "))', text: "Kõigepealt loeme kasutaja sisendi ja muudame selle <code>int()</code> abil arvuks." },
            { line: 'if vanus < 18:', text: "Kontrollime, kas sisestatud vanus on väiksem kui 18." },
            { line: '    print("Laps")', text: "Kui vanus on alla 18, prindime <code>Laps</code>." },
            { line: 'else:', text: "Vastasel juhul liigume <code>else</code> harusse." },
            { line: '    print("Mitte laps")', text: "Kui vanus on 18 või suurem, prindime <code>Mitte laps</code>." }
        ],
        fillInScaffold: 'vanus = int(___("Sisesta vanus: "))\nif vanus < 18:\n    print("Laps")\nelse:\n    print("Mitte laps")',
        fillInCorrect: 'vanus = int(input("Sisesta vanus: "))\nif vanus < 18:\n    print("Laps")\nelse:\n    print("Mitte laps")',
        fillInHint: 'Kasuta sisendi lugemiseks input() ja tee see arvuks int() abil.',
        sortingBlocks: ['vanus = int(input("Sisesta vanus: "))', 'if vanus < 18:', '    print("Laps")', 'else:', '    print("Mitte laps")'],
    }
];
const EXAMS = [
    {
        id: 'exam-1-5',
        title: 'Teadmiste test 1-5',
        description: 'Kirjuta peast lahendused tasemete 1-5 põhimõtete peale.',
        levelIndices: [0, 1, 2, 3, 4],
        xpReward: 400
    },
    {
        id: 'exam-5-10',
        title: 'Teadmiste test 5-10',
        description: 'Kirjuta peast lahendused tasemete 5-10 põhimõtete peale.',
        levelIndices: [4, 5, 6, 7, 8, 9],
        xpReward: 550
    }
];
// Mängu olek (State)
let gameState = {
    currentLevel: 0,
    currentStep: 1, // 1 to 5
    xp: 0,
    streak: 1,
    lastActiveDate: null,
    activeView: 'roadmap',
    completedLevels: [],
    completedExams: [],
    currentExam: null,
    currentExamQuestion: 0,
    currentCode: '',
    typingProgress: 0, // mitmendat märki kirjutatakse sammus 2
};
function isLowPerformanceMode() {
    return document.body.classList.contains('low-performance');
}
// Heli süsteem (Web Audio API)
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioContextClass();
    }
}
function playTone(freq, type, duration, delay = 0) {
    try {
        initAudio();
        if (!audioCtx) return;
        
        setTimeout(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
            osc.frequency.value = freq;
            
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            // Sujuv hääbumine
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        }, delay * 1000);
    } catch (e) {
        console.log("Heli esitamine ebaõnnestus:", e);
    }
}
function playSuccessSound() {
    playTone(523.25, 'sine', 0.15, 0); // C5
    playTone(659.25, 'sine', 0.15, 0.08); // E5
    playTone(783.99, 'sine', 0.3, 0.16); // G5
}
function playErrorSound() {
    playTone(220, 'sawtooth', 0.25); // A3 madal heli
}
function playClickSound() {
    playTone(600, 'sine', 0.05);
}
// Konfeti füüsika mootor (Canvas Confetti alternatiiv)
let confettiAnimationId = null;
function runConfetti() {
    if (isLowPerformanceMode()) return;

    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const particleCount = 80;
    const animationDuration = 1800;
    
    // Suuruse korrigeerimine
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#a855f7', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#3b82f6'];
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    let active = true;
    setTimeout(() => { active = false; }, animationDuration);
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let livingParticles = 0;
        particles.forEach((p) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 15;
            
            if (p.y < canvas.height) {
                livingParticles++;
            }
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });
        
        if (active || livingParticles > 0) {
            confettiAnimationId = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(confettiAnimationId);
        }
    }
    
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
    }
    draw();
}
// Kohaliku mälu salvestus (LocalStorage)
function syncCurrentCodeFromEditor() {
    const editor = document.getElementById('code-editor');
    if (!editor || gameState.activeView !== 'game') return;

    if (gameState.currentStep === 3 || gameState.currentStep === 5 || gameState.currentExam || gameState.currentStep === 2) {
        gameState.currentCode = editor.value;
    } else {
        gameState.currentCode = '';
    }
}
function saveProgress() {
    syncCurrentCodeFromEditor();
    localStorage.setItem('voco_python_tutor_state', JSON.stringify(gameState));
}
function restoreEditorState() {
    const editor = document.getElementById('code-editor');
    if (!editor || !gameState.currentCode) return;

    if (gameState.currentExam || gameState.currentStep === 3 || gameState.currentStep === 5) {
        editor.value = gameState.currentCode;
        updateLineNumbers(editor.value.split('\n').length);
        return;
    }

    if (gameState.currentStep === 2) {
        editor.value = gameState.currentCode;
        gameState.typingProgress = gameState.currentCode.length;
        updateTypingOverlay(LEVELS[gameState.currentLevel].expectedCode);
        updateLineNumbers(Math.max(editor.value.split('\n').length, 1));
    }
}
function restoreSession() {
    if (gameState.activeView !== 'game') return;

    openGameView(false);

    if (gameState.currentExam) {
        setupExamQuestion();
    } else {
        const level = LEVELS[gameState.currentLevel];
        if (level) {
            document.getElementById('current-level-title').innerText = `Tase ${gameState.currentLevel + 1}: ${level.title}`;
        }
        setupStep(gameState.currentStep || 1);
    }

    restoreEditorState();
}
function loadProgress() {
    const saved = localStorage.getItem('voco_python_tutor_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
            // Streak kontroll
            checkStreak();
        } catch (e) {
            console.error("Progressi laadimine ebaõnnestus:", e);
        }
    }
    updateUIHeader();
    restoreSession();
}
function checkStreak() {
    const today = new Date().toDateString();
    if (gameState.lastActiveDate) {
        const lastDate = new Date(gameState.lastActiveDate);
        const diffTime = Math.abs(new Date(today) - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Aktiivne teisel järjestikusel päeval
            gameState.streak += 1;
            gameState.lastActiveDate = today;
        } else if (diffDays > 1) {
            // Streak katkes
            gameState.streak = 1;
            gameState.lastActiveDate = today;
        }
    } else {
        gameState.lastActiveDate = today;
    }
    saveProgress();
}
// Uuenda päise infot
function updateUIHeader() {
    document.getElementById('total-xp').innerText = gameState.xp;
    document.getElementById('streak-days').innerText = gameState.streak;
    
    // Taseme kaardi profiiliuuendus
    const count = gameState.completedLevels.length;
    document.getElementById('completed-levels-count').innerText = `${count} / ${LEVELS.length}`;
    
    // Kasutaja staatus vastavalt XP-le
    let status = "Algaja Koodi-Pioneeri";
    if (gameState.xp >= 1000) status = "Pythoni Guru";
    else if (gameState.xp >= 600) status = "VOCO Eliit-Kooder";
    else if (gameState.xp >= 300) status = "Edasijõudnud Häkker";
    else if (gameState.xp >= 100) status = "Koodi-Praktikant";
    
    document.getElementById('user-status').innerText = status;
    updateExamButtons();
}
function renderProgressDots(totalDots, activeStep) {
    const dotsContainer = document.getElementById('step-dots-container');
    dotsContainer.innerHTML = '';

    for (let i = 1; i <= totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'step-dot';
        dot.innerText = i;
        if (i < activeStep) dot.classList.add('completed');
        if (i === activeStep) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}
function setProgress(totalSteps, activeStep) {
    renderProgressDots(totalSteps, activeStep);
    const safeTotal = Math.max(totalSteps - 1, 1);
    const fillPercent = ((activeStep - 1) / safeTotal) * 100;
    document.getElementById('step-progress-fill').style.width = `${fillPercent}%`;
}
function getCurrentExam() {
    if (!gameState.currentExam) return null;
    return EXAMS.find(exam => exam.id === gameState.currentExam) || null;
}
function updateExamButtons() {
    EXAMS.forEach((exam) => {
        const button = document.getElementById(exam.id);
        if (!button) return;

        const isCompleted = gameState.completedExams.includes(exam.id);
        button.classList.toggle('completed-test', isCompleted);
        button.innerText = isCompleted ? `✓ ${exam.title}` : exam.title;
    });
}
// === TASEMETE KAARDI GENEREERIMINE ===
function generateRoadmap() {
    const container = document.getElementById('levels-list');
    container.innerHTML = '';
    
    LEVELS.forEach((level, index) => {
        const isCompleted = gameState.completedLevels.includes(index);
        const isUnlocked = true;
        
        const node = document.createElement('div');
        node.className = `level-node ${isCompleted ? 'completed' : ''} ${isUnlocked && !isCompleted ? 'unlocked' : ''} ${!isUnlocked ? 'locked' : ''}`;
        
        node.innerHTML = `
            <div class="node-circle">${isCompleted ? '✓' : index + 1}</div>
            <div class="node-label">
                <div class="node-title">${level.title}</div>
                <div class="node-topic" style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; margin-top:3px;">${level.topic}</div>
            </div>
        `;
        
        if (isUnlocked) {
            node.addEventListener('click', () => {
                playClickSound();
                startLevel(index);
            });
        }
        
        container.appendChild(node);
    });
}
function openGameView(shouldSave = true) {
    gameState.activeView = 'game';
    document.getElementById('roadmap-view').classList.remove('active');
    document.getElementById('game-view').classList.add('active');

    if (shouldSave) saveProgress();
}
function closeGameView() {
    gameState.activeView = 'roadmap';
    gameState.currentExam = null;
    gameState.currentExamQuestion = 0;
    gameState.currentCode = '';
    document.getElementById('game-view').classList.remove('active');
    document.getElementById('roadmap-view').classList.add('active');
    saveProgress();
    generateRoadmap();
    updateUIHeader();
}
// === TASEME ALUSTAMINE ===
function startLevel(levelIndex) {
    gameState.currentExam = null;
    gameState.currentExamQuestion = 0;
    gameState.currentCode = '';
    gameState.typingProgress = 0;
    gameState.currentLevel = levelIndex;
    gameState.currentStep = 1;
    
    // Vaate vahetus
    openGameView();
    
    // Taseme andmete seadistamine
    const level = LEVELS[levelIndex];
    document.getElementById('current-level-title').innerText = `Tase ${levelIndex + 1}: ${level.title}`;
    
    setupStep(1);
}
function startExam(examId) {
    const exam = EXAMS.find(item => item.id === examId);
    if (!exam) return;

    gameState.currentExam = examId;
    gameState.currentExamQuestion = 0;
    gameState.currentCode = '';
    openGameView();
    setupExamQuestion();
}
// === ETAPID (STEPS) SETUP ===
function setupStep(stepNum) {
    gameState.currentStep = stepNum;
    const level = LEVELS[gameState.currentLevel];
    
    // Uuenda progressi täppe ja joont
    setProgress(5, stepNum);
    
    // Päise tekstid
    const stepNames = [
        "Samm 1/5: Teooria & Loogika",
        "Samm 2/5: Läbikirjutamine (Tactile)",
        "Samm 3/5: Meenutamine (Lüngad)",
        "Samm 4/5: Sorteerimine (Drag & Drop)",
        "Samm 5/5: Lõpptest (Peast)"
    ];
    document.getElementById('step-name-badge').innerText = stepNames[stepNum - 1];
    document.getElementById('instruction-title').innerText = level.title;
    
    // Lähtesta konsool, tagasiside ja nupud
    document.getElementById('console-output').className = 'console-body';
    document.getElementById('console-output').innerHTML = '> Vajuta koodi käivitamiseks...';
    document.getElementById('feedback-message').className = 'feedback-message hidden';
    document.getElementById('hint-btn').classList.add('hidden');
    document.getElementById('next-step-btn').classList.add('hidden');
    document.getElementById('next-step-btn').innerText = 'Edasi ➔';
    document.getElementById('run-code-btn').classList.remove('hidden');
    document.getElementById('fail-options').classList.add('hidden');
    
    // Editor nähtavaks ja sorteerimine peitu vaikimisi
    const editor = document.getElementById('code-editor');
    const overlay = document.getElementById('editor-overlay');
    const sortWorkspace = document.getElementById('sorting-workspace');
    const sortBlocks = document.getElementById('sorting-blocks-container');
    const keyboardHelpers = document.getElementById('keyboard-helpers');
    
    editor.classList.remove('hidden');
    overlay.classList.remove('hidden');
    sortWorkspace.classList.add('hidden');
    sortBlocks.classList.add('hidden');
    
    editor.value = '';
    overlay.innerHTML = '';
    editor.readOnly = false;
    
    // Muuda ridade numbreid vastavalt sisule
    updateLineNumbers(1);
    
    // Teooria interaktiivne ala puhastamine
    const theoryArea = document.getElementById('theory-interactive-area');
    theoryArea.innerHTML = '';
    theoryArea.style.display = 'none';
    
    // Konkreetse sammu eriloogika
    if (stepNum === 1) {
        // SAMM 1: TEOORIA
        document.getElementById('instruction-text').innerHTML = `
            <p>${level.description}</p>
            <p><strong>Kuidas kood töötab?</strong> Klõpsa allpool olevale koodiridadele, et näha iga osa täpsemat selgitust:</p>
        `;
        
        theoryArea.style.display = 'block';
        setupTheoryInteractive(level);
        
        // Eeltäida editor koodiga, et kasutaja näeks koodi
        editor.value = level.expectedCode;
        editor.readOnly = true;
        updateLineNumbers(level.expectedCode.split('\n').length);
        
        document.getElementById('run-code-btn').innerText = "Käivita kood ▶";
        document.getElementById('run-code-btn').classList.add('pulse');
    } 
    else if (stepNum === 2) {
        // SAMM 2: LÄBIKIRJUTAMINE
        document.getElementById('instruction-text').innerHTML = `
            <p>Kirjuta allolev kood märk-märgi haaval sisse. Rakendus kontrollib su sisestust reaalajas ja juhendab sind.</p>
            <p>Kirjutatav kood peab olema täpselt selline:</p>
            <pre class="theory-code-highlight" style="margin-top:5px; border-color:var(--primary); font-size:0.9rem;">${level.expectedCode}</pre>
        `;
        
        // Tactile typing ettevalmistus
        gameState.typingProgress = 0;
        editor.value = '';
        editor.placeholder = "Alusta trükkimist siit...";
        updateLineNumbers(level.expectedCode.split('\n').length);
        
        // Kuva õige juhendaja overlay
        updateTypingOverlay(level.expectedCode);
        
        document.getElementById('run-code-btn').classList.add('hidden'); // Läbikirjutamisel ei käivitata enne valmimist
        
        // Kuva mobiili klaviatuuri abinupud
        keyboardHelpers.style.display = 'flex';
    } 
    else if (stepNum === 3) {
        // SAMM 3: MEENUTAMINE
        document.getElementById('instruction-text').innerHTML = `
            <p>Täida koodi lüngad (<code>___</code>) õigete väärtustega, et kood teeks seda, mida teoorias õppisid.</p>
            <p>Kasuta vajadusel nuppu <strong>💡 Vihje</strong>.</p>
        `;
        
        editor.value = level.fillInScaffold;
        updateLineNumbers(level.fillInScaffold.split('\n').length);
        document.getElementById('hint-btn').classList.remove('hidden');
        document.getElementById('run-code-btn').innerText = "Kontrolli koodi ▶";
        
        keyboardHelpers.style.display = 'flex';
    } 
    else if (stepNum === 4) {
        // SAMM 4: SORTEERIMINE
        document.getElementById('instruction-text').innerHTML = `
            <p>Pane kood kokku õiges järjekorras! Klõpsa alumistele neoonklotsidele, et asetatada need koodi kasti.</p>
            <p>Kui soovid klotsi tagasi võtta, klõpsa sellele koodi kastis.</p>
        `;
        
        editor.classList.add('hidden');
        overlay.classList.add('hidden');
        sortWorkspace.classList.remove('hidden');
        sortBlocks.classList.remove('hidden');
        keyboardHelpers.style.display = 'none';
        
        setupSortingStage(level);
        
        document.getElementById('run-code-btn').innerText = "Valideeri järjekord ▶";
    } 
    else if (stepNum === 5) {
        // SAMM 5: LÕPPTEST (PEAST)
        document.getElementById('instruction-text').innerHTML = `
            <p><strong>Lõpptest!</strong> Kirjuta see kood nüüd täielikult peast ja ilma abita.</p>
            <p>Käivita kood ja veendu, et selle väljund on korrektne. Kui teed vea, pakutakse võimalust uuesti õppida või edasi liikuda.</p>
        `;
        
        editor.value = '';
        editor.placeholder = '# Kirjuta kogu kood peast...';
        updateLineNumbers(3);
        
        document.getElementById('run-code-btn').innerText = "Käivita ja testi ▶";
        keyboardHelpers.style.display = 'flex';
    }

    saveProgress();
}
function setupExamQuestion() {
    const exam = getCurrentExam();
    if (!exam) return;

    const questionNumber = gameState.currentExamQuestion + 1;
    const levelIndex = exam.levelIndices[gameState.currentExamQuestion];
    const level = LEVELS[levelIndex];
    const editor = document.getElementById('code-editor');
    const overlay = document.getElementById('editor-overlay');
    const sortWorkspace = document.getElementById('sorting-workspace');
    const sortBlocks = document.getElementById('sorting-blocks-container');
    const keyboardHelpers = document.getElementById('keyboard-helpers');
    const theoryArea = document.getElementById('theory-interactive-area');

    gameState.currentStep = 5;
    setProgress(exam.levelIndices.length, questionNumber);

    document.getElementById('current-level-title').innerText = exam.title;
    document.getElementById('step-name-badge').innerText = `Test ${questionNumber}/${exam.levelIndices.length}`;
    document.getElementById('instruction-title').innerText = level.title;
    document.getElementById('instruction-text').innerHTML = `
        <p><strong>${exam.description}</strong></p>
        <p>Kirjuta nüüd peast lahendus teemale <strong>${level.title}</strong>.</p>
        <p>Oodatud väljund peab olema: <code>${escapeHTML(level.expectedOutput)}</code></p>
    `;

    document.getElementById('console-output').className = 'console-body';
    document.getElementById('console-output').innerHTML = '> Kirjuta testilahendus ja kontrolli...';
    document.getElementById('feedback-message').className = 'feedback-message hidden';
    document.getElementById('hint-btn').classList.add('hidden');
    document.getElementById('next-step-btn').classList.add('hidden');
    document.getElementById('next-step-btn').innerText = 'Järgmine küsimus ➔';
    document.getElementById('fail-options').classList.add('hidden');
    document.getElementById('run-code-btn').classList.remove('hidden');
    document.getElementById('run-code-btn').innerText = 'Kontrolli testi ▶';

    editor.classList.remove('hidden');
    overlay.classList.add('hidden');
    sortWorkspace.classList.add('hidden');
    sortBlocks.classList.add('hidden');
    editor.readOnly = false;
    editor.value = '';
    editor.placeholder = '# Kirjuta testilahendus siia...';
    keyboardHelpers.style.display = 'flex';
    theoryArea.innerHTML = '';
    theoryArea.style.display = 'none';
    updateLineNumbers(Math.max(level.expectedCode.split('\n').length, 3));
    saveProgress();
}
// === TEOORIA SAMMU INTERAKTIIVSUS ===
function setupTheoryInteractive(level) {
    const area = document.getElementById('theory-interactive-area');
    
    const wrapper = document.createElement('div');
    wrapper.className = 'interactive-block';
    
    const codeBox = document.createElement('div');
    codeBox.className = 'theory-code-highlight';
    
    const lines = level.expectedCode.split('\n');
    lines.forEach((lineText, idx) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'theory-code-line';
        lineDiv.innerText = lineText;
        
        lineDiv.addEventListener('click', () => {
            playClickSound();
            document.querySelectorAll('.theory-code-line').forEach(l => l.classList.remove('selected'));
            lineDiv.classList.add('selected');
            
            // Leia selgitus
            const expl = level.explanations.find(e => e.line === lineText || lineText.startsWith(e.line.split(' ')[0]));
            if (expl) {
                bubble.innerHTML = expl.text;
                bubble.classList.remove('hidden');
            }
        });
        
        codeBox.appendChild(lineDiv);
    });
    
    const bubble = document.createElement('div');
    bubble.className = 'theory-explanation-bubble hidden';
    bubble.innerHTML = 'Klõpsa koodi ridadele, et näha selgitust...';
    
    wrapper.appendChild(codeBox);
    wrapper.appendChild(bubble);
    area.appendChild(wrapper);
    
    // Vali automaatselt esimene rida
    setTimeout(() => {
        const firstLine = codeBox.querySelector('.theory-code-line');
        if (firstLine) firstLine.click();
    }, 100);
}
// === LÄBIKIRJUTAMISE SAMMU LOOGIKA (REAL-TIME VALIDEERIMINE) ===
function updateTypingOverlay(targetCode) {
    const overlay = document.getElementById('editor-overlay');
    const progress = gameState.typingProgress;
    
    let html = '';
    for (let i = 0; i < targetCode.length; i++) {
        const char = targetCode[i];
        if (i < progress) {
            // Õigesti kirjutatud märgid
            html += `<span class="char-correct">${char === '\n' ? '↵\n' : escapeHTML(char)}</span>`;
        } else if (i === progress) {
            // Järgmine oodatav märk
            html += `<span class="char-expected">${char === '\n' ? '↵\n' : escapeHTML(char)}</span>`;
        } else {
            // Veel kirjutamata märgid
            html += `<span style="color: rgba(255,255,255,0.15)">${char === '\n' ? '\n' : escapeHTML(char)}</span>`;
        }
    }
    overlay.innerHTML = html;
}
function handleTypingInput(e) {
    if (gameState.currentStep !== 2) return;
    
    const level = LEVELS[gameState.currentLevel];
    const targetCode = level.expectedCode;
    const editor = document.getElementById('code-editor');
    const inputVal = editor.value;
    
    // Kontrollime, kas viimati lisatud märk vastab oodatule
    const expectedChar = targetCode[gameState.typingProgress];
    const typedChar = inputVal[inputVal.length - 1];
    
    if (inputVal.length === 0) {
        gameState.typingProgress = 0;
        updateTypingOverlay(targetCode);
        return;
    }
    
    // Kui kasutaja tegi vea
    if (inputVal.length > gameState.typingProgress) {
        if (typedChar === expectedChar || (expectedChar === '\n' && (typedChar === '\r' || typedChar === '\n'))) {
            // Õige täht!
            gameState.typingProgress++;
            // Mängi vaikne ja meeldiv tippimise heli
            playTone(400 + (gameState.typingProgress * 5), 'sine', 0.04);
            
            // Kui oodatav märk oli koolon, lisa automaatne taane reavahetusel, aga trükkimine peab sellega arvestama.
            // Lihtsuse huvides laseme neil kõik tähed ise trükkida.
            
            updateTypingOverlay(targetCode);
            
            // Kui kood sai valmis!
            if (gameState.typingProgress >= targetCode.length) {
                playSuccessSound();
                editor.readOnly = true;
                showFeedback(true, "Super töö!", "Kogu kood on edukalt läbi kirjutatud. Õpime loogikat edasi!");
                document.getElementById('next-step-btn').classList.remove('hidden');
                document.getElementById('next-step-btn').classList.add('pulse');
            }
        } else {
            // Vale täht!
            playErrorSound();
            // Eemaldame viimase (vale) tähe
            editor.value = inputVal.slice(0, -1);
            
            // Visualiseeri viga overlay peal ajutiselt
            const overlay = document.getElementById('editor-overlay');
            const progress = gameState.typingProgress;
            let html = '';
            for (let i = 0; i < targetCode.length; i++) {
                const char = targetCode[i];
                if (i < progress) {
                    html += `<span class="char-correct">${escapeHTML(char)}</span>`;
                } else if (i === progress) {
                    html += `<span class="char-incorrect">${escapeHTML(typedChar || char)}</span>`;
                } else {
                    html += `<span style="color: rgba(255,255,255,0.15)">${escapeHTML(char)}</span>`;
                }
            }
            overlay.innerHTML = html;
            
            // Väriseb editori aken
            const workspace = document.querySelector('.editor-workspace');
            workspace.style.animation = 'shake 0.15s 2';
            setTimeout(() => { workspace.style.animation = ''; }, 300);
            
            // Taasta õige seis
            setTimeout(() => {
                updateTypingOverlay(targetCode);
            }, 300);
        }
    }
    
    updateLineNumbers(editor.value.split('\n').length);
}
// === SORTEERIMISE SAMMU SEADISTUS (TAP-TO-PLACE) ===
function setupSortingStage(level) {
    const slotsContainer = document.getElementById('sorting-slots-container');
    const blocksContainer = document.getElementById('sorting-blocks-container');
    
    slotsContainer.innerHTML = '';
    blocksContainer.innerHTML = '';
    
    // Segame klotsid ära
    const blocks = [...level.sortingBlocks];
    shuffleArray(blocks);
    
    // Loome pesad (slots) koodi kogumiseks
    // Alguses on üks tühi kast
    slotsContainer.className = "sorting-slots";
    
    // Genereerime segamini klotsid
    blocks.forEach((val, idx) => {
        const tile = document.createElement('div');
        tile.className = 'code-block-tile';
        tile.innerText = val;
        tile.dataset.value = val;
        
        tile.addEventListener('click', () => {
            playClickSound();
            // Aseta klots pesasse
            moveToSlot(tile, slotsContainer, blocksContainer);
        });
        
        blocksContainer.appendChild(tile);
    });
}
function moveToSlot(tile, slotsContainer, blocksContainer) {
    // Kui klots on valikus, liiguta see üles pesadesse
    if (tile.parentElement === blocksContainer) {
        tile.classList.add('selected-in-slot');
        slotsContainer.appendChild(tile);
    } else {
        // Kui klots on juba pesas, liiguta see tagasi alla valikutesse
        tile.classList.remove('selected-in-slot');
        blocksContainer.appendChild(tile);
    }
}
// Sorteerimise valideerimine
function validateSorting() {
    const level = LEVELS[gameState.currentLevel];
    const slots = document.getElementById('sorting-slots-container').querySelectorAll('.code-block-tile');
    
    const placedValues = Array.from(slots).map(tile => tile.dataset.value);
    const correctValues = level.sortingBlocks;
    
    // Kui kõik klotsid pole asetatud
    if (placedValues.length < correctValues.length) {
        playErrorSound();
        showFeedback(false, "Kood on poolik!", "Tõsta kõik allpool olevad klotsid ülemisse kasti enne kontrollimist.");
        return;
    }
    
    let isCorrect = true;
    for (let i = 0; i < correctValues.length; i++) {
        if (placedValues[i] !== correctValues[i]) {
            isCorrect = false;
            break;
        }
    }
    
    if (isCorrect) {
        playSuccessSound();
        
        // Kuva konsoolis tulemus
        const consoleOut = document.getElementById('console-output');
        consoleOut.innerHTML = `> python main.py\n<span class="success">${level.expectedOutput}</span>`;
        consoleOut.className = 'console-body success';
        
        showFeedback(true, "Korrektne järjekord!", "Panid koodi õigesti kokku! Liigume lõputesti juurde.");
        document.getElementById('run-code-btn').classList.add('hidden');
        document.getElementById('next-step-btn').classList.remove('hidden');
        document.getElementById('next-step-btn').classList.add('pulse');
    } else {
        playErrorSound();
        showFeedback(false, "Väär järjekord!", "Mõni klots on vales kohas. Kontrolli koodi loogikat ja proovi uuesti!");
        
        // Lisame veaelemendi kasti ümber
        const slotsContainer = document.getElementById('sorting-slots-container');
        slotsContainer.style.borderColor = 'var(--danger)';
        setTimeout(() => { slotsContainer.style.borderColor = ''; }, 1000);
    }
}
// === KOODI RUNNER / SIMULAATOR (SAMM 3 & SAMM 5) ===
function runAndVerifyCode() {
    const exam = getCurrentExam();
    const activeLevelIndex = exam ? exam.levelIndices[gameState.currentExamQuestion] : gameState.currentLevel;
    const level = LEVELS[activeLevelIndex];
    const editor = document.getElementById('code-editor');
    const code = editor.value.trim();
    const consoleOut = document.getElementById('console-output');
    
    consoleOut.innerHTML = '> python main.py\n';
    
    if (!code) {
        playErrorSound();
        consoleOut.innerHTML += '<span class="error">Viga: Koodi aken on tühi!</span>';
        consoleOut.className = 'console-body error';
        return;
    }
    
    // Simuleerime käivitust
    const result = runPythonInJS(code, level);
    
    if (result.success) {
        consoleOut.innerHTML += `<span class="success">${result.output}</span>`;
        consoleOut.className = 'console-body success';
        
        // Kontrollime lisaks, kas kood on struktuurselt õige (et ei kirjutataks lihtsalt print("vastus"))
        const syntaxOk = verifyCodeSyntax(code, gameState.currentStep, level, activeLevelIndex);
        
        if (syntaxOk) {
            playSuccessSound();
            showFeedback(true, "Õige vastus!", exam ? 'Testi vastus oli õige. Liigu järgmise küsimuse juurde.' : 'Kood käivitus edukalt ja tulemus on õige!');
            document.getElementById('run-code-btn').classList.add('hidden');
            
            if (exam) {
                if (gameState.currentExamQuestion >= exam.levelIndices.length - 1) {
                    setTimeout(showLevelCompleteModal, 600);
                } else {
                    document.getElementById('next-step-btn').innerText = 'Järgmine küsimus ➔';
                    document.getElementById('next-step-btn').classList.remove('hidden');
                    document.getElementById('next-step-btn').classList.add('pulse');
                }
            } else if (gameState.currentStep === 5) {
                // Lõpptest läbitud, näita suurt eduakent
                setTimeout(showLevelCompleteModal, 600);
            } else {
                document.getElementById('next-step-btn').innerText = 'Edasi ➔';
                document.getElementById('next-step-btn').classList.remove('hidden');
                document.getElementById('next-step-btn').classList.add('pulse');
            }
        } else {
            playErrorSound();
            showFeedback(false, "Väljund on õige, aga...", "Sa ei kasutanud ülesandes nõutud muutujaid või loogikat. Ära kirjuta tulemust otse print() sisse!");
        }
    } else {
        playErrorSound();
        consoleOut.innerHTML += `<span class="error">Süntaksiviga: ${result.error}</span>`;
        consoleOut.className = 'console-body error';
        
        if (gameState.currentStep === 5) {
            // Lõpptests ebaõnnestumisel kuvatakse otsustusnupud (Uuesti õppimine või Edasi)
            showFeedback(false, "Test ebaõnnestus!", "Koodis on viga. Vali, kas soovid taseme uuesti läbida või minna edasi ilma XP-ta.");
            document.getElementById('run-code-btn').classList.add('hidden');
            document.getElementById('fail-options').classList.remove('hidden');
        } else {
            showFeedback(false, "Koodis on viga!", result.error);
        }
    }
}
// Mini Pythoni interpretaator JS-is
function runPythonInJS(code, level) {
    const lines = code.split('\n');
    let variables = {};
    let variableTypes = {};
    let output = [];
    let functionDef = null;
    let inputQueue = [...(level.simulatedInputs || [])];
    
    try {
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line || line.startsWith('#')) continue; // ignore empty & comments
            
            // Funktsiooni definitsiooni algus
            if (line.startsWith('def ')) {
                const defMatch = line.match(/def\s+(\w+)\s*\(([^)]*)\)\s*:/);
                if (!defMatch) throw new Error(`Vigane funktsiooni definitsioon real ${i+1}`);
                
                const funcName = defMatch[1];
                const params = defMatch[2].split(',').map(p => p.trim());
                
                // Otsime funktsiooni keha (taandega read)
                let bodyLines = [];
                let j = i + 1;
                while (j < lines.length && (lines[j].startsWith(' ') || lines[j].startsWith('\t') || !lines[j].trim())) {
                    if (lines[j].trim()) {
                        bodyLines.push(lines[j]);
                    }
                    j++;
                }
                
                functionDef = {
                    name: funcName,
                    params: params,
                    body: bodyLines
                };
                
                i = j - 1; // hüppame keha üle
                continue;
            }
            
            // Tingimuslaused (if / else) simulation
            if (line.startsWith('if ')) {
                const ifMatch = line.match(/if\s+(.+)\s*:/);
                if (!ifMatch) throw new Error(`Puudub koolon real ${i+1}`);
                
                let conditionStr = ifMatch[1];
                let evalCond = replaceVariablesForEval(conditionStr, variables);
                
                // Turvaline eval lihtsatele võrdlustele (nt. 5 >= 3)
                let conditionMet = false;
                try {
                    conditionMet = eval(evalCond);
                } catch (e) {
                    throw new Error(`Vigane tingimus real ${i+1}`);
                }
                
                // Otsime if-haru ja else-haru
                let ifLines = [];
                let elseLines = [];
                let inElse = false;
                
                let j = i + 1;
                while (j < lines.length) {
                    let nextLine = lines[j];
                    let nextLineTrimmed = nextLine.trim();
                    
                    if (nextLineTrimmed.startsWith('else:')) {
                        inElse = true;
                        j++;
                        continue;
                    }
                    
                    // Kui rida pole taandatud ja pole ka tühi ega else, siis if-else blokk on läbi
                    if (nextLineTrimmed && !nextLine.startsWith(' ') && !nextLine.startsWith('\t')) {
                        break;
                    }
                    
                    if (nextLineTrimmed) {
                        if (inElse) {
                            elseLines.push(nextLineTrimmed);
                        } else {
                            ifLines.push(nextLineTrimmed);
                        }
                    }
                    j++;
                }
                
                // Käivita õige haru
                let activeBranch = conditionMet ? ifLines : elseLines;
                for (let cmd of activeBranch) {
                    executeStatement(cmd, variables, variableTypes, output, functionDef, inputQueue);
                }
                
                i = j - 1; // hüppame üle kogu bloki
                continue;
            }
            
            // Tsükkel: for i in range(3):
            if (line.startsWith('for ')) {
                const forMatch = line.match(/for\s+(\w+)\s+in\s+range\s*\(\s*(\d+)\s*\)\s*:/);
                if (!forMatch) throw new Error(`Toetatud on ainult kujul "for i in range(N):" tsüklid real ${i+1}`);
                
                const varName = forMatch[1];
                const loops = parseInt(forMatch[2]);
                
                // Otsime tsükli keha
                let bodyLines = [];
                let j = i + 1;
                while (j < lines.length && (lines[j].startsWith(' ') || lines[j].startsWith('\t') || !lines[j].trim())) {
                    if (lines[j].trim()) {
                        bodyLines.push(lines[j].trim());
                    }
                    j++;
                }
                
                // Käivitame tsükli
                for (let loopIdx = 0; loopIdx < loops; loopIdx++) {
                    variables[varName] = loopIdx;
                    variableTypes[varName] = 'int';
                    for (let cmd of bodyLines) {
                        executeStatement(cmd, variables, variableTypes, output, functionDef, inputQueue);
                    }
                }
                
                i = j - 1; // hüppame üle keha
                continue;
            }
            
            // Tavaline rida
            executeStatement(line, variables, variableTypes, output, functionDef, inputQueue);
        }
        
        const finalOutput = output.join('\n');
        
        // Kontrolli, kas väljund klapib taseme oodatavaga
        if (finalOutput === level.expectedOutput) {
            return { success: true, output: finalOutput };
        } else {
            return { success: false, error: `Kood käivitus, kuid väljund oli "${finalOutput}" oodatava "${level.expectedOutput}" asemel.` };
        }
        
    } catch (err) {
        return { success: false, error: err.message };
    }
}
function expressionProducesFloat(expression, variableTypes = {}) {
    if (expression.includes('/')) return true;

    return Object.entries(variableTypes).some(([name, type]) => {
        if (type !== 'float') return false;
        return new RegExp(`\\b${name}\\b`).test(expression);
    });
}
function replaceVariablesForEval(expression, variables = {}) {
    let prepared = expression;

    Object.entries(variables).forEach(([name, value]) => {
        prepared = prepared.replace(new RegExp(`\\b${name}\\b`, 'g'), JSON.stringify(value));
    });

    return prepared;
}
function formatPythonValue(value, forceFloat = false) {
    if (typeof value === 'number') {
        if (forceFloat && Number.isInteger(value)) {
            return `${value}.0`;
        }
        return Number.isFinite(value) ? value.toString() : 'nan';
    }

    return String(value);
}
// Ühe koodirea täitmine simulaatoris
function executeStatement(line, variables, variableTypes, output, functionDef, inputQueue = []) {
    // Print lause
    if (line.startsWith('print(') && line.endsWith(')')) {
        const printContent = line.slice(6, -1).trim();
        
        // 1. Kas tegu on funktsiooni väljakutsega? nt: print(liida(4, 2))
        if (functionDef && printContent.startsWith(functionDef.name + '(')) {
            const funcCallMatch = printContent.match(new RegExp(functionDef.name + '\\s*\\(([^)]*)\\)'));
            if (funcCallMatch) {
                const args = funcCallMatch[1].split(',').map(a => parseInt(a.trim()));
                // Käivita funktsioon
                let funcVars = {};
                functionDef.params.forEach((param, idx) => {
                    funcVars[param] = args[idx];
                });
                
                // Käivita funktsiooni keha (toetame ainult return x + y jms)
                for (let fLine of functionDef.body) {
                    let fLineTrim = fLine.trim();
                    if (fLineTrim.startsWith('return ')) {
                        let expr = fLineTrim.slice(7).trim();
                        const shouldFormatAsFloat = expressionProducesFloat(expr, funcVars);
                        expr = replaceVariablesForEval(expr, funcVars);
                        const res = eval(expr);
                        output.push(formatPythonValue(res, shouldFormatAsFloat));
                        return;
                    }
                }
            }
        }
        
        // 2. Kas tegu on jutumärkides tekstiga?
        if ((printContent.startsWith('"') && printContent.endsWith('"')) || 
            (printContent.startsWith("'") && printContent.endsWith("'"))) {
            output.push(printContent.slice(1, -1));
        } 
        // 3. Kas tegu on muutujaga?
        else if (variables[printContent] !== undefined) {
            output.push(formatPythonValue(variables[printContent], variableTypes[printContent] === 'float'));
        } 
        // 4. Kas tegu on matemaatilise avaldisega muutujate vahel?
        else {
            const shouldFormatAsFloat = expressionProducesFloat(printContent, variableTypes);
            let evalExpr = replaceVariablesForEval(printContent, variables);
            try {
                const res = eval(evalExpr);
                output.push(formatPythonValue(res, shouldFormatAsFloat));
            } catch (e) {
                throw new Error(`Tundmatu muutuja või vigane avaldis print() sees: ${printContent}`);
            }
        }
        return;
    }
    
    // Muutuja omistamine: x = väärtus
    if (line.includes('=')) {
        const parts = line.split('=');
        if (parts.length === 2) {
            const varName = parts[0].trim();
            const rawVal = parts[1].trim();
            
            // Kontrolli muutuja nime valiidsust
            if (!/^[a-zA-Z_]\w*$/.test(varName)) {
                throw new Error(`Vigane muutuja nimi: "${varName}"`);
            }
            
            // String väärtus (jutumärkides)
            if ((rawVal.startsWith('"') && rawVal.endsWith('"')) || 
                (rawVal.startsWith("'") && rawVal.endsWith("'"))) {
                variables[varName] = rawVal.slice(1, -1);
                variableTypes[varName] = 'string';
            }
            // input() lugemine
            else if (rawVal.startsWith('input(') && rawVal.endsWith(')')) {
                variables[varName] = inputQueue.length ? inputQueue.shift() : '';
                variableTypes[varName] = 'string';
            }
            // int(input()) lugemine
            else if (rawVal.startsWith('int(input(') && rawVal.endsWith('))')) {
                const inputValue = inputQueue.length ? inputQueue.shift() : '0';
                const parsedValue = parseInt(inputValue, 10);
                if (Number.isNaN(parsedValue)) {
                    throw new Error(`Sisendit "${inputValue}" ei saanud arvuks teisendada.`);
                }
                variables[varName] = parsedValue;
                variableTypes[varName] = 'int';
            } 
            // Matemaatiline tehe või arv
            else {
                // Asenda olemasolevad muutujad avaldises
                let evalVal = replaceVariablesForEval(rawVal, variables);
                const shouldStoreAsFloat = expressionProducesFloat(rawVal, variableTypes);
                try {
                    variables[varName] = eval(evalVal);
                    variableTypes[varName] = shouldStoreAsFloat ? 'float' : typeof variables[varName] === 'string' ? 'string' : 'number';
                } catch (e) {
                    throw new Error(`Vigane avaldis muutuja "${varName}" omistamisel: "${rawVal}"`);
                }
            }
            return;
        }
    }
    
    // Return lause väljaspool funktsiooni (viga)
    if (line.startsWith('return ')) {
        throw new Error(`"return" lause on lubatud ainult funktsiooni sees!`);
    }
    
    throw new Error(`Tundmatu või toetamata koodirida: "${line}"`);
}
// Kontrolli, et kasutaja kasutas õigeid süntaksielemente
function verifyCodeSyntax(code, step, level, levelIndex = gameState.currentLevel) {
    const normalizedCode = code.replace(/\r/g, '').trim();
    const compactCode = normalizedCode.replace(/\s+/g, ' ');
    
    if (levelIndex === 0) {
        // Lubame suvalise muutuja nime, kui väärtus salvestatakse muutujasse ja prinditakse välja.
        const assignmentMatch = normalizedCode.match(/(^|\n)\s*([a-zA-Z_]\w*)\s*=\s*(["'])VOCO\3\s*(?=\n|$)/);
        if (!assignmentMatch) return false;
        const variableName = assignmentMatch[2];
        const printRegex = new RegExp(`print\\s*\\(\\s*${variableName}\\s*\\)`);
        return printRegex.test(normalizedCode);
    }
    else if (levelIndex === 1) {
        // Peab sisaldama jagamistehet ja väljundi kuvamist, aga muutujanimed ei pea olema täpselt samad.
        return /\//.test(compactCode) && /print\s*\(/.test(normalizedCode);
    }
    else if (levelIndex === 2) {
        // 3. tase: kontrollime loogikat paindlikumalt, mitte täpset teksti.
        const hasIf = /(^|\n)\s*if\s+.+:\s*(\n|$)/.test(normalizedCode);
        const hasElse = /(^|\n)\s*else\s*:\s*(\n|$)/.test(normalizedCode);
        const hasComparison = /(==|!=|>=|<=|>|<)/.test(normalizedCode);
        const printsPass = /print\s*\(\s*(["'])Läbi\1\s*\)/.test(normalizedCode);
        const printsFail = /print\s*\(\s*(["'])Korda\1\s*\)/.test(normalizedCode);
        return hasIf && hasElse && hasComparison && printsPass && printsFail;
    }
    else if (levelIndex === 3) {
        // Peab sisaldama for-tsüklit ja printimist, kuid indeksmuutuja võib olla suvaline.
        return /(^|\n)\s*for\s+\w+\s+in\s+range\s*\(/.test(normalizedCode)
            && /print\s*\(\s*(["'])Tere\1\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 4) {
        // Funktsioon peab olema defineeritud, midagi tagastama ja see peab olema välja kutsutud.
        const functionMatch = normalizedCode.match(/def\s+([a-zA-Z_]\w*)\s*\(/);
        if (!functionMatch) return false;
        const functionName = functionMatch[1];
        const callRegex = new RegExp(`print\\s*\\(\\s*${functionName}\\s*\\(`);
        return /(^|\n)\s*def\s+[a-zA-Z_]\w*\s*\(/.test(normalizedCode)
            && /(^|\n)\s*return\s+.+/.test(normalizedCode)
            && callRegex.test(normalizedCode);
    }
    else if (levelIndex === 5) {
        // Paarisarvu kontroll peaks kasutama modulo tehet ja if/else loogikat.
        return /(^|\n)\s*if\s+.+%\s*2\s*==\s*0\s*:\s*(\n|$)/.test(normalizedCode)
            && /(^|\n)\s*else\s*:\s*(\n|$)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Paaris\1\s*\)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Paaritu\1\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 6) {
        // Tsükliga liitmine peab sisaldama for-tsüklit, muutujat ja printimist.
        return /(^|\n)\s*for\s+\w+\s+in\s+range\s*\(\s*4\s*\)\s*:\s*(\n|$)/.test(normalizedCode)
            && /(^|\n)\s*[a-zA-Z_]\w*\s*=\s*[a-zA-Z_]\w*\s*\+\s*2\s*(\n|$)/.test(normalizedCode)
            && /print\s*\(\s*[a-zA-Z_]\w*\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 7) {
        return /(^|\n)\s*if\s+.+>=\s*18\s*:\s*(\n|$)/.test(normalizedCode)
            && /(^|\n)\s*else\s*:\s*(\n|$)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Täiskasvanu\1\s*\)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Alaealine\1\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 8) {
        return /(^|\n)\s*for\s+\w+\s+in\s+range\s*\(\s*5\s*\)\s*:\s*(\n|$)/.test(normalizedCode)
            && /print\s*\(\s*5\s*\*\s*2\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 9) {
        const functionMatch = normalizedCode.match(/def\s+([a-zA-Z_]\w*)\s*\(/);
        if (!functionMatch) return false;
        const functionName = functionMatch[1];
        const callRegex = new RegExp(`print\\s*\\(\\s*${functionName}\\s*\\(\\s*5\\s*\\)`);
        return /(^|\n)\s*return\s+.+\*.+/.test(normalizedCode) && callRegex.test(normalizedCode);
    }
    else if (levelIndex === 10) {
        return /(^|\n)\s*[a-zA-Z_]\w*\s*=\s*input\s*\(/.test(normalizedCode)
            && /print\s*\(\s*(["'])Tere,\s*\1\s*\+\s*[a-zA-Z_]\w*\s*\)/.test(normalizedCode);
    }
    else if (levelIndex === 11) {
        return /(^|\n)\s*[a-zA-Z_]\w*\s*=\s*int\s*\(\s*input\s*\(/.test(normalizedCode)
            && /(^|\n)\s*if\s+[a-zA-Z_]\w*\s*<\s*18\s*:\s*(\n|$)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Laps\1\s*\)/.test(normalizedCode)
            && /print\s*\(\s*(["'])Mitte laps\1\s*\)/.test(normalizedCode);
    }
    return true;
}
// === VIHJE NUPP ===
function showHint() {
    playClickSound();
    const level = LEVELS[gameState.currentLevel];
    
    const consoleOut = document.getElementById('console-output');
    consoleOut.className = 'console-body';
    consoleOut.innerHTML = `> Vihje:\n<span style="color: var(--warning)">${level.fillInHint}</span>`;
    
    showFeedback(false, "Vihje aktiveeritud!", "Uuri konsooli aknas kuvatud abiinfo teadet.", "hint");
}
// === TAGASISIDE ALUMISES RIBAS ===
function showFeedback(isSuccess, title, desc, customType = null) {
    const footer = document.getElementById('action-footer');
    const msg = document.getElementById('feedback-message');
    const icon = document.getElementById('feedback-icon');
    const titleEl = document.getElementById('feedback-title');
    const descEl = document.getElementById('feedback-desc');
    
    msg.classList.remove('hidden');
    
    titleEl.innerText = title;
    descEl.innerText = desc;
    
    if (customType === "hint") {
        msg.className = "feedback-message hint";
        icon.innerText = "💡";
    } else if (isSuccess) {
        msg.className = "feedback-message success";
        icon.innerText = "🎉";
    } else {
        msg.className = "feedback-message fail";
        icon.innerText = "⚠️";
    }
}
// === TASEME LÄBIMISE MODAL (CELEBRATION) ===
function showLevelCompleteModal() {
    const exam = getCurrentExam();
    const levelIndex = gameState.currentLevel;
    const level = LEVELS[levelIndex];
    
    // Salvesta progress
    if (exam) {
        if (!gameState.completedExams.includes(exam.id)) {
            gameState.completedExams.push(exam.id);
            gameState.xp += exam.xpReward;
            saveProgress();
        }
    } else if (!gameState.completedLevels.includes(levelIndex)) {
        gameState.completedLevels.push(levelIndex);
        gameState.xp += level.xpReward;
        saveProgress();
    }
    
    updateUIHeader();
    
    // Ava modal
    const overlay = document.getElementById('success-overlay');
    if (exam) {
        document.getElementById('success-level-summary').innerHTML = `Läbisid edukalt testi: <strong>${exam.title}</strong>.<br>Sul on nüüd tugevam ülevaade nende tasemete teadmistest!`;
        document.getElementById('level-reward-xp').innerText = exam.xpReward;
    } else {
        document.getElementById('success-level-summary').innerHTML = `Õppisid edukalt teemat: <strong>${level.title}</strong>.<br>Nüüd on sul Pythoni põhiloogika selgem!`;
        document.getElementById('level-reward-xp').innerText = level.xpReward;
    }
    
    overlay.classList.remove('hidden');
    
    // Heli ja konfetid!
    playSuccessSound();
    runConfetti();
}
// Jätka nupu klikk modalis
document.getElementById('continue-game-btn').addEventListener('click', () => {
    playClickSound();
    // Sulge modal
    document.getElementById('success-overlay').classList.add('hidden');

    closeGameView();
});
// Tagasi kaardile mängu aknast
document.getElementById('back-to-map-btn').addEventListener('click', () => {
    playClickSound();
    closeGameView();
});
// === JUHTPANEELI NUPUD ===
document.getElementById('run-code-btn').addEventListener('click', () => {
    playClickSound();
    if (gameState.currentExam) {
        runAndVerifyCode();
        return;
    }

    const step = gameState.currentStep;
    
    if (step === 1) {
        // Samm 1: Lihtsalt käivita ja näita tulemust
        const level = LEVELS[gameState.currentLevel];
        const consoleOut = document.getElementById('console-output');
        consoleOut.innerHTML = `> python main.py\n<span class="success">${level.expectedOutput}</span>`;
        consoleOut.className = 'console-body success';
        
        playSuccessSound();
        showFeedback(true, "Teooria test käivitatud!", "Nagu näed, kuvas programm konsooli oodatava tulemuse. Klõpsa 'Edasi', et alustada kirjutamist.");
        document.getElementById('run-code-btn').classList.add('hidden');
        document.getElementById('next-step-btn').classList.remove('hidden');
        document.getElementById('next-step-btn').classList.add('pulse');
    } 
    else if (step === 3 || step === 5) {
        // Samm 3 ja 5: Valideeri sisestatud kood
        runAndVerifyCode();
    } 
    else if (step === 4) {
        // Samm 4: Valideeri lohistamise järjekord
        validateSorting();
    }
});
document.getElementById('next-step-btn').addEventListener('click', () => {
    playClickSound();
    if (gameState.currentExam) {
        gameState.currentExamQuestion += 1;
        setupExamQuestion();
    } else if (gameState.currentStep < 5) {
        setupStep(gameState.currentStep + 1);
    }
});
document.getElementById('hint-btn').addEventListener('click', showHint);
// Ebaõnnestumise nupud sammul 5
document.getElementById('retry-step-btn').addEventListener('click', () => {
    playClickSound();
    // Restart taseme juurde sammult 1
    setupStep(1);
});
document.getElementById('skip-step-btn').addEventListener('click', () => {
    playClickSound();
    // Läbime taseme ilma täiendava XP-ta, kui oli viga
    const levelIndex = gameState.currentLevel;
    if (!gameState.completedLevels.includes(levelIndex)) {
        gameState.completedLevels.push(levelIndex);
        // Ei anna XP-d vahelejätmisel
        saveProgress();
    }
    updateUIHeader();
    
    // Tagasi kaardile
    closeGameView();
});
// Lähtesta progress nupp
document.getElementById('reset-progress-btn').addEventListener('click', () => {
    if (confirm("Kas oled kindel, et soovid kogu oma mängu progressi ja XP kustutada?")) {
        playTone(150, 'sawtooth', 0.5);
        gameState = {
            currentLevel: 0,
            currentStep: 1,
            xp: 0,
            streak: 1,
            lastActiveDate: new Date().toDateString(),
            activeView: 'roadmap',
            completedLevels: [],
            completedExams: [],
            currentExam: null,
            currentExamQuestion: 0,
            currentCode: '',
            typingProgress: 0
        };
        saveProgress();
        updateUIHeader();
        generateRoadmap();
        
        // Kui on aktiivne mäng, tagasi kaardile
        closeGameView();
    }
});
// === ABIKLASSI ABIFUNKTSIOONID ===
// HTML märkide escape et koodi overlay-s turvaliselt kuvada
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
// Massiivi segamine (sorting klotside jaoks)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Ridade numbrite uuendamine editori külgribal
function updateLineNumbers(lineCount) {
    const lineContainer = document.getElementById('editor-line-numbers');
    lineContainer.innerHTML = '';
    for (let i = 1; i <= Math.max(lineCount, 3); i++) {
        const num = document.createElement('span');
        num.innerText = i;
        lineContainer.appendChild(num);
    }
}
// Koodiredaktori tippimise kuulamised (tactile typing ja automaatsed numbrid)
const editorTextarea = document.getElementById('code-editor');
editorTextarea.addEventListener('input', (e) => {
    if (gameState.currentStep === 2) {
        handleTypingInput(e);
    } else {
        updateLineNumbers(editorTextarea.value.split('\n').length);
    }

    gameState.currentCode = editorTextarea.value;
    saveProgress();
});
// Mobiili klaviatuuri abiklahvid
document.querySelectorAll('.helper-key').forEach(key => {
    key.addEventListener('click', () => {
        playClickSound();
        const char = key.dataset.char;
        const editor = document.getElementById('code-editor');
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        
        if (char === 'Tab') {
            // Lisab 4 tühikut
            editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
        } else if (char === '""') {
            // Lisab jutumärgid ja viib kursori keskele
            editor.value = editor.value.substring(0, start) + '""' + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 1;
        } else {
            editor.value = editor.value.substring(0, start) + char + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + char.length;
        }
        
        editor.focus();
        
        // Kutsub esile input sündmuse, et teised loogikad uuendaksid end
        const event = new Event('input', { bubbles: true });
        editor.dispatchEvent(event);
    });
});
document.getElementById('exam-1-5').addEventListener('click', () => {
    playClickSound();
    startExam('exam-1-5');
});
document.getElementById('exam-5-10').addEventListener('click', () => {
    playClickSound();
    startExam('exam-5-10');
});
// Kui leht laetakse
window.addEventListener('load', () => {
    document.body.classList.add('low-performance');
    loadProgress();
    generateRoadmap();
});
