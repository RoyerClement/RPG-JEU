//DECLARATION DES VARIABLES
let roomIAm = "start";
const fightBeforeBoss = 10;
const buttonDoorDiv = {
    D1: document.getElementById("UN"),
    D2: document.getElementById("DEUX"),
    D3: document.getElementById("TROIS"),
    divEnn1: document.getElementById("first"),
    divEnn2: document.getElementById("second"),
    divEnn3: document.getElementById("third"),
    divEnn4: document.getElementById("fourth"),
    divEnn5: document.getElementById("fifth"),
    divEnn1degats : document.getElementById("divEnn1degats"),
    divEnn2degats : document.getElementById("divEnn2degats"),
    divEnn3degats : document.getElementById("divEnn3degats"),
    divEnn4degats : document.getElementById("divEnn4degats"),
    divEnn5degats : document.getElementById("divEnn5degats"),
    fightDoor: document.getElementById("fightDoor"),
    market: document.getElementById("market"),
    itemMarket: document.getElementById("itemMarket"),
    ennemiDegats: document.getElementById("ennemiDegats"),
    panneauAttaque : document.getElementById("panneauAttaque"),
    allSkill: document.getElementById("allSkill"),
    allSpell: document.getElementById("allSpell"),
    tableauRune: document.getElementById('tableauRune'),
    tableauRuneDone: document.getElementById("tableauRuneDone"),
    all: document.getElementById("all")
};
const imDoor = {
    ImA: document.getElementById("ImA"),
    ImB: document.getElementById("ImB"),
    ImC: document.getElementById("ImC"),
    ImEnn1: document.getElementById("ImEnn1"),
    ImEnn2: document.getElementById("ImEnn2"),
    ImEnn3: document.getElementById("ImEnn3"),
    ImEnn4: document.getElementById("ImEnn4"),
    ImEnn5: document.getElementById("ImEnn5"),
    btnBack: document.getElementById("back"),
    mur: document.getElementById("mur"),
    fightDoor: document.getElementById("fightDoor"),
    allDoor: document.getElementById("porte"),
    reset: document.getElementById("reset"),
    btnAttaque : document.getElementById("btnAttaque"),
    btnSpell : document.getElementById("btnSpell"),
    btnSkill : document.getElementById("btnSkill"),
    ALL:{
        sortFeu: document.getElementById("btnFeu"),
        sortFoudre: document.getElementById("btnFoudre"),
        sortArcane: document.getElementById("btnArcane"),
        sortBlast: document.getElementById("btnBlast"),
        skillAll: document.getElementById("btnAttaqueAll"),
        skillDouble: document.getElementById("btnATQdouble"),
    }
};
const runes = {
    1 : "image/rune1.webp",
    2 : "image/rune2.webp",
    3 : "image/rune3.webp",
    4 : "image/rune4.webp",
    5 : "image/rune5.webp",
    6 : "image/rune6.webp",
    7 : "image/rune7.webp",
    8 : "image/rune8.webp",
    9 : "image/rune9.webp",
    10 : "image/rune10.webp",
}
const dialogue = {
    txtId: document.getElementById("boiteDialogue"),
    verif: "ceci est une verification",
    txtOpen: "Vous ouvrez une porte...",
    txtEnterExplored: "Vous entrez dans une salle explorée",
    txtEnterInexplored: "Vous entrez dans une salle inexplorée",
    txtBack: "Vous revenez sur vos pas",
    txtFight: `Des ennemis surgissent de la porte !`,
    txtEmptyRoom: "La salle ouverte est vide",
    txtVictory: "Vous avez remporté le combat",
    txtAttaque: `Vous attaquez `,
    txtKill: `Vous tuez `,
    txtMarchand: `Il y a un marchand dans cette salle`,
    txtLoot: `Qqchose tombe du monstre... Vous ramassez `,
    txtDarkness: "Il fait trop noir pour continuer sans lumière, vous ne pouvez pas combattre ainsi"
};
let textDialogue = "";
let message = [];
const room = {
    numberDoor: {
        start: 3,
    },
    doorState: {
        start: {
            A: "ferme",
            B: "ferme",
            C: "ferme",
        },
    },
};
let money = 0
const persoClass = {
    magicien : {
        IMG : "image/magicien.webp"
    },
    voleur : {
        IMG : "image/voleur.webp"
    },
    guerrier : {
        IMG : "image/guerrier.webp"
    }
}

let designationPerso = "perso1" 
let nombreDePerso = ""
const marketMemory = { start: [], };
let itemList = [];
let dataStat = {
    DonneeStatPerso: {
        stats : {
            perso1 : {
            mainDroite: 0,
            mainGauche: 0,
            def: 0,
            },
            perso2 : {
                mainDroite: 0,
                mainGauche: 0,
                def: 0,
            },
            perso3 : {
                mainDroite: 0,
                mainGauche: 0,
                def: 0,
            },
        }
    },
    equipement: {
        perso1 : 
        {
            LeftHand: "mainGauche",
            RightHand: "mainDroite",
            Chest: "Chest",
            Head: "Head",
            Ring: "Ring",
            Neck: "Neck",
        },
        perso2 : 
        {
            LeftHand: "mainGauche",
            RightHand: "mainDroite",
            Chest: "Chest",
            Head: "Head",
            Ring: "Ring",
            Neck: "Neck",
        },
        perso3 : 
        {
            LeftHand: "mainGauche",
            RightHand: "mainDroite",
            Chest: "Chest",
            Head: "Head",
            Ring: "Ring",
            Neck: "Neck",
        },
    },
    inventaire: {
        Chest: [],
        Head: [],
        Neck: [],
        Object: [],
        Ring: [],
        LeftHand: [],
        Scroll: [],
        Or : 0
    },
    statPerso: {
        perso1 : 
        {   
            type : "perso1",
            nom: "",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: []
        },
        perso2 : 
        {   
            type : "perso2",
            nom:"",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: []
        },
        perso3 : 
        {   
            type : "perso3",
            nom: "",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: []
        },
    },
    marketMemory: {start : [], },
    btnCheck: "",
};
const ratioLvlXp = {
    1: 10,
    2: 30,
    3: 60,
    4: 100,
    5: 150,
    6: 200,
    7: 250,
    8: 300,
    9: 400,
    10: 500,
    11: 650,
    12: 800,
    13: 1000,
    14: 1200,
    15: 1500,
}
let nombreDegatsTemporaire = ""
let isAttacking = false
let lastAttackDelay = 0
let attack = false
let skillInUse = ""
let spellInUse = "" 
let skills = {
    skillAll : {
        effect: () => dataStat.DonneeStatPerso.stats[designationPerso].LeftHand+dataStat.DonneeStatPerso.stats[designationPerso].LeftHand,
        manaCost: 5,
        variation: 5,
        target:"all",
        repetition:1,
        state:true,
        nom: "sortFeu",
        IMG: "image/SLASH2.gif",
        nombreRune: 3,
        runeMultiple: 0.5,
        tempsRune: 800,  
        width: "1500"
        
    },
    skillDouble: {
        effect: () => (dataStat.DonneeStatPerso.stats[designationPerso].LeftHand+dataStat.DonneeStatPerso.stats[designationPerso].LeftHand)*2,
        manaCost: 5,
        variation: 5,
        target:"solo",
        repetition:1,
        state:true,
        nom: "sortFeu",
        IMG: "image/slash.webp",
        nombreRune: 3,
        runeMultiple: 0.5,
        tempsRune: 600,  
        width: "300"
    },
    steal : {
        effect : "on va voir"
    }
}
let spells = {
    sortFeu : {
        effect: () => 10 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Intelligence * 10),
        manaCost: 20,
        variation: 5,
        target:"solo",
        repetition:1,
        state:true,
        nom: "sortFeu",
        IMG: "image/sortFeu.webp",
        nombreRune: 3,
        runeMultiple: 0.5,
        tempsRune: 900,  
        width: "300"
    },
    sortFoudre : {
        effect: () => 40 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Intelligence * 3),
        manaCost: 20,
        variation: 30,
        target: "random",
        repetition: 3,
        state:true,
        nom: "sortFoudre",
        IMG: "image/sortFoudre7.gif",
        nombreRune: 3,
        runeMultiple: 0.5,
        tempsRune: 750,  
        width: "1300"
    },
    sortArcane : {
        effect: () => 400 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Intelligence * 3),
        manaCost: 1,
        variation: 15,
        target: "all",
        repetition: 3,
        state:true,
        nom: "sortArcane",
        IMG: "image/sortArcane.webp",
        nombreRune: 3,
        runeMultiple: 0.5,
        tempsRune: 600,   
        width: "1600" 
    },
    sortBlast : {
        effect: () => 5 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Intelligence * 3),
        manaCost: 20,
        variation: 5,
        target: "all",
        repetition: 1,
        state:true,
        nom: "sortArcane",
        IMG: "image/sortBlast.webp",  
        runeMultiple: 0.5,
        nombreRune: 5,
        tempsRune: 3000,   
        width: "500" 
    }
}
const item = {
    anneauForce: {
        nom: "un anneau de force",
        IMG: "image/anneauForce.webp",
        cost: 100,
        type: "Ring"
    },
    espadon: {
        nom: "un espadon à deux mains",
        IMG: "image/espadon.webp",
        cost: 200,
        type: "LeftHand"
    },
    anneauDexterite: {
        nom: "un anneau de dextérité",
        IMG: "image/anneauForce.webp",
        cost: 100,
        type: "Ring"
    },
    armureEnFer: {
        nom: "une armure en fer",
        IMG: "image/armureEnFer.webp",
        cost: 200,
        type: "Chest"
    },
    armureEnCuir: {
        nom: "une armure en cuir",
        IMG: " image/armureEnCuir.webp",
        cost: 100,
        type: "Chest"
    },
    casqueEnCuir: {
        nom: "un casque en cuir",
        IMG: "image/casqueEnCuir.webp",
        cost: 100,
        type: "Head"
    },
    dague: {
        nom: "une dague",
        IMG: "image/dague.webp",
        cost: 100,
        type: "LeftHand"
    },
    potionVie: {
        nom: "une potion de vie",
        IMG: "image/potionVie.webp",
        cost: 50,
        type: "Object",
        nombre : 1
    },
    potionMana: {
        nom: "une potion de mana",
        IMG: "image/potionMana.webp",
        cost: 50,
        type: "Object",
        nombre : 1
    },
    pain: {
        nom: "un pain",
        IMG: "image/pain.webp",
        cost: 30,
        type: "Object"
    },
    torche: {
        nom: "une torche",
        IMG: "image/torche.webp",
        cost: 50,
        type: "LeftHand",
        nombre : 1
    },
    sortFeu: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 150,
        id: "sortFeu",
        type: "Scroll"
    },
    sortLumiere: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 100,
        id: "sortLumiere",
        type: "Scroll"
    },
    sortFoudre: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 300,
        id: "sortFoudre",
        type: "Scroll"
    },
    sortBlast: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 300,
        id: "sortBlast",
        type: "Scroll"
    },
    sortArcane: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 300,
        id: "sortArcane",
        type: "Scroll"
    },
    orcEpee: {
        nom: "une épée d'orc",
        IMG: "image/orcEpee.webp",
        cost: 150,
        id: "orcEpee",
        type: "LeftHand",
    },
    orcHache : {
        nom: "une hache d'orc",
        IMG: "image/orcHache.webp",
        cost: 150,
        id: "orcHache",
        type: "LeftHand",
    },
    orcCasque: {
        nom: "un casque d'orc",
        IMG: "image/orcCasque.webp",
        cost: 100,
        id: "orcCasque",
        type: "Head"
    },
    gobArc: {
        nom: "un arc de gobelin",
        IMG: "image/gobArc.webp",
        cost : 150,
        id: "gobArc",
        type: "LeftHand",
    }
};
let actualFight = [];
let actualEnnemiStatut = {};
const ennemiList = ["orc", "gobelin","serpent","champi","troll","ogre","skeleton","mageSkeleton",];
const ennemi = {
    orc: {
        txt: "un orc",
        IMG: "image/orc.webp",
        IMGmort: "image/orcMort.webp",
        IMGATQ: "image/orcATQ1.webp",
        ImID: "",
        div:"",
        width: 300,
        height:300,
        ATQ: 20,
        CRIT: 25,
        DEF: 10,
        HP: 60,
        DEX: 0,
        XP: 50,
        LOOT: {
            orcEpee : 5,
            orcCasque: 5,
            potionVie: 7,
            pain:10,
        },
        or: 50,
        LVL: 5
    },
    gobelin: {
        txt: "un gobelin",
        IMG: "image/gobelin.webp",
        IMGmort: "image/gobelinMort.webp",
        IMGATQ: "image/gobelinATQ.webp",
        ImID: "",
        div:"",
        testid: "testGob",
        width: 300,
        height:250,
        ATQ: 10,
        CRIT: 20,
        DEF: 3,
        HP: 10,
        DEX: 2,
        XP: 10,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 1,
            potionMana : 5,
            potionVie: 5,
            pain:10,
        },
        or: 20, 
        LVL: 1
    },
    skeleton: {
        txt: "un squelette",
        IMG: "image/skeleton.webp",
        IMGmort: "image/skeletonMort.webp",
        IMGATQ: "image/skeletonATQ.webp",
        ImID: "",
        div:"",
        width: 250,
        height:300,
        ATQ: 10,
        CRIT: 10,
        DEF: 3,
        HP: 10,
        DEX: 1,
        XP: 30,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 3
    },
    troll: {
        txt: "un troll",
        IMG: "image/troll.webp",
        IMGmort: "image/trollMort.webp",
        IMGATQ: "image/trollATQ.webp",
        ImID: "",
        div:"",
        width: 300,
        height:400,
        ATQ: 20,
        CRIT: 30,
        DEF: 3,
        HP: 210,
        DEX: 0,
        XP: 100,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 10
    },
    ogre: {
        txt: "un ogre",
        IMG: "image/ogre.webp",
        IMGmort: "image/ogreMort.webp",
        IMGATQ: "image/ogreATQ.webp",
        ImID: "",
        div:"",
        width: 250,
        height:350,
        ATQ: 10,
        CRIT: 15,
        DEF: 3,
        HP: 120,
        DEX: 2,
        XP: 70,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 7
    },
    mageSkeleton: {
        txt: "un mage squelette",
        IMG: "image/mageSkeleton.webp",
        IMGmort: "image/mageSkeletonMort.webp",
        IMGATQ: "image/mageSkeletonATQ.webp",
        ImID: "",
        div:"",
        width: 300,
        height:320,
        ATQ: 20,
        CRIT: 40,
        DEF: 3,
        HP: 30,
        DEX: 1,
        XP: 40,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 4
    },
    champi: {
        txt: "un champignon humanoïde",
        IMG: "image/champi.webp",
        IMGmort: "image/champiMort.webp",
        IMGATQ: "image/champiATQ.webp",
        ImID: "",
        div:"",
        width: 300,
        height:300,
        ATQ: 5,
        CRIT: 15,
        DEF: 3,
        HP: 40,
        DEX: 5,
        XP: 20,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 2
    },
    // dragon: {
    //     txt: "un dragon légendaire",
    //     IMG: "image/dragon.webp",
    //     IMGmort: "image/dragonMort.webp",
    //     IMGATQ: "image/dragon.webp",
    //     ImID: "",
    //     div:"",
    //     width: 1100,
    //     height:500,
    //     ATQ: 30,
    //     CRIT: 100,
    //     DEF: 3,
    //     HP: 1000,
    //     DEX: 15,
    //     XP: 500,
    //     LOOT: {
    //         gobArc : 7,
    //         anneauDexterite : 5,
    //         potionMana : 15,
    //         potionVie: 20,
    //     },
    //     or: 20, 
    //     LVL: 20
    // },
    serpent: {
        txt: "un serpent",
        IMG: "image/serpent.webp",
        IMGmort: "image/serpentMort.webp",
        IMGATQ: "image/serpentATQ.webp",
        ImID: "",
        div:"",
        width: 300,
        height:300,
        ATQ: 15,
        CRIT: 30,
        DEF: 3,
        HP: 85,
        DEX: 10,
        XP: 60,
        LOOT: {
            gobArc : 7,
            anneauDexterite : 5,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
        LVL: 6
    },
};

let tooltip = document.createElement("infoEnnemi");
tooltip.style.position = "absolute";
tooltip.style.padding = "5px 10px";
tooltip.style.borderRadius = "5px";
tooltip.style.fontSize = "24px";
tooltip.style.visibility = "hidden"; 
tooltip.style.pointerEvents = "none"; 
tooltip.style.border = "5px solid #4d372a";
tooltip.style.padding = "10px";
tooltip.style.margin = "10px";
tooltip.style.fontFamily = "'MedievalSharp', serif";
tooltip.style.fontWeight = "400";
tooltip.style.fontStyle = "normal";
tooltip.style.backgroundColor = "#886146";
tooltip.style.color = "#706c2e"; 


document.body.appendChild(tooltip);

function boiteDialogue(type, objet) {
    if (objet !== undefined) {
        message.push(dialogue[type] + objet);
    } else {
        message.push(dialogue[type])
    }
        if (message.length > 6) {
            message.shift();
        }     
        let textDialogue = message.join("<br>");
        dialogue.txtId.innerHTML = textDialogue;
}

const randomNumber = (max) => Math.floor(Math.random() * max) + 1;
let backCheck = false;

function backCheckFn() {
    if (backCheck) {
        imDoor.btnBack.style.display = "block";
    } else {
        imDoor.btnBack.style.display = "none";
    }
}
function back() {
    roomIAm = roomIAm.slice(0, -1);
    if (!roomIAm) {
        roomIAm = "start";
        backCheck = false;
        imDoor.btnBack.style.display = "none";
    }
    boiteDialogue("txtBack");
    updateRenderBack(roomIAm);
}

//POUR LES TESTS
const btnCheckFight = document.getElementById('checkFight')
btnCheckFight.addEventListener('click', () => {
    paramCheckFight = "alwaysFight"
})
const btnCheckNoFight = document.getElementById('checkNoFight')
btnCheckNoFight.addEventListener('click', () => {
    paramCheckFight = "neverFight"
})
const btnAllATQ = document.getElementById('getAllATQ')
btnAllATQ.addEventListener('click', () => {
    imDoor.ALL.sortArcane.style.display="block"
    imDoor.ALL.sortBlast.style.display="block"
    imDoor.ALL.sortFeu.style.display="block"
    imDoor.ALL.sortFoudre.style.display="block"
    imDoor.ALL.skillAll.style.display="block"
    imDoor.ALL.skillDouble.style.display="block"
})

const btnGetStuff = document.getElementById('getStuff')
btnGetStuff.addEventListener('click', () => {
    dataStat.DonneeStatPerso.inventaire.LeftHand = ["torche","espadon", "dague", "batonDepart", "arcDepart", "epeeDepart", "hacheDepart", "orcHache", "gobArc"]
    dataStat.DonneeStatPerso.inventaire.Chest = ["armureEnFer", "armureEnCuir"]
    dataStat.DonneeStatPerso.inventaire.Head = ["casqueEnCuir"]
})
const btnNewChar = document.getElementById('getNewPerso')
btnNewChar.addEventListener('click', () => {
    dataStat.DonneeStatPerso.statPerso.perso2 = {
        type: "perso2",
        nom: "Rengar",
        class: "voleur",
        Force: 5,
        Dexterite: 12,
        Vitalite: 3,
        Volonte: 1,
        Concentration: 4,
        Intelligence: 2,
        Point: 0,
        HP:175,
        HPactual: 82,
        MP: 95,
        MPactual: 16,
        XP: 0,
        LVL: 3,
        spells: ["sortFoudre"]
    }
    dataStat.DonneeStatPerso.equipement.perso2 = {
            LeftHand: "dague",
            RightHand: "mainDroite",
            Chest: "armureEnFer",
            Head: "Head",
            Ring: "Ring",
            Neck: "Neck",
    }
    nombreDePerso = 2
    update()    
    imgPerso()
})


//Des variables pour tester des états
let checkFight = 0;
let paramCheckFight = ""
let fighting = false
//Ouverture de la porte, check si combat ou non selon une variable random de 1/3
function openDoor(door, image, idOpenDoor, imDiv, myRoom) {
    image.remove();
    if (roomIAm === "start") {
        room.doorState.start[door] = "ouvert";
    } else {
        room.doorState[myRoom][door] = "ouvert";
    }
    const imDoorOpen = document.createElement("img");
    imDoorOpen.src = "image/porteOuverte.webp";
    imDoorOpen.width = "400";
    imDoorOpen.height = "408";
    imDoorOpen.alt = "porte ouverte";
    imDoorOpen.id = idOpenDoor;
    const testID = "porteOuvert"+door
    imDoorOpen.setAttribute("data-testid", "porteOuvertA")
    buttonDoorDiv[imDiv].appendChild(imDoorOpen);
    imDoor[idOpenDoor] = document.getElementById(idOpenDoor);
    imDoor[idOpenDoor].addEventListener("click", () => enterDoor(door, myRoom));
    boiteDialogue("txtOpen");
    if (paramCheckFight === "neverFight") {
        checkFight = 5
    } else if (paramCheckFight === "alwaysFight") {
        checkFight = 0
    } else {
    checkFight = randomNumber("3");
    }
    //RISQUE DE FAIRE DES COMBATS
    if (checkFight < 3) {
        actualFight = [];
        imDoor.btnBack.style.display = "none";
        opInventaire.style.display = "none";
        imDoor.allDoor.style.display = "none";
        const imDoorOpen = document.createElement("img");
        imDoorOpen.src = "image/porteOuverte.webp";
        imDoorOpen.width = "400";
        imDoorOpen.height = "408";
        imDoorOpen.alt = "porte ouverte";
        imDoorOpen.id = "fightDoor";
        buttonDoorDiv.fightDoor.appendChild(imDoorOpen);
        fighting = true
        boiteDialogue("txtFight");
        triggerFight();
    } else {
        boiteDialogue("txtEmptyRoom");
    }
}
//Compteur pour différencier les differents ennemis du meme type dans le combat.
let compteur = { 
    orc: 1, 
    gobelin: 1, 
    serpent:1, 
    troll:1, 
    ogre:1, 
    dragon:1,
    champi:1,
    skeleton: 1,
    mageSkeleton: 1,
 };
let expectLVLennemiRoom = 0;
let divEnnemi = 0;
let ennemiLVLinRoom = 0
let ennemiNumberinRoom = 0
let ordreTourAttaque = []
let ordreTourAttaque2 = []
function ajouterEnnemiOrdreTour (nom, dex, bolean) {
    ordreTourAttaque.push({nom, dex, bolean})
    ordreTourAttaque.sort((a,b) => b.dex - a.dex)
}
function triggerFight() {
    divEnnemi = 1;
    if (roomIAm === "start") {
        expectLVLennemiRoom = 1;
    } else {
        const splitRoom = roomIAm.split("");
        expectLVLennemiRoom = splitRoom.length;
    }
    while(expectLVLennemiRoom >  ennemiLVLinRoom ) {
        if (ennemiNumberinRoom === 5) {
            break
        } else {
            let findIndexEnnemi = ennemiList[randomNumber(ennemiList.length) - 1];
            while (ennemi[findIndexEnnemi].LVL > (expectLVLennemiRoom - ennemiLVLinRoom)) {
                findIndexEnnemi = ennemiList[randomNumber(ennemiList.length) - 1];
            }
            actualFight.push(findIndexEnnemi);
            ennemiLVLinRoom += ennemi[findIndexEnnemi].LVL
            const nomEnnemi = `${findIndexEnnemi}${compteur[findIndexEnnemi]}`;
            ajouterEnnemiOrdreTour(nomEnnemi, ennemi[findIndexEnnemi].DEX, false)
            actualEnnemiStatut[nomEnnemi] = { ...ennemi[findIndexEnnemi] };
            compteur[findIndexEnnemi]++;
            const where = "divEnn" + divEnnemi;
            const ImEnn = "ImEnn" + divEnnemi;
            updateRenderFight(findIndexEnnemi, nomEnnemi, where, ImEnn);
            divEnnemi++;
            ennemiNumberinRoom++
        }
    }
    ajouterEnnemiOrdreTour(dataStat.DonneeStatPerso.statPerso.perso1.type, dataStat.DonneeStatPerso.statPerso.perso1.Dexterite, false)
    try {
        if (dataStat.DonneeStatPerso.statPerso.perso2.nom){
        ajouterEnnemiOrdreTour(dataStat.DonneeStatPerso.statPerso.perso2.type, dataStat.DonneeStatPerso.statPerso.perso2.Dexterite, false)
        }
        if (dataStat.DonneeStatPerso.statPerso.perso3.nom){
        ajouterEnnemiOrdreTour(dataStat.DonneeStatPerso.statPerso.perso3.type, dataStat.DonneeStatPerso.statPerso.perso3.Dexterite, false)
        }
    } catch {}
    console.log("Tour des attaques : ", ordreTourAttaque)
    
    launchFight()
    ennemiLVLinRoom = 0
    ennemiNumberinRoom = 0
}

let currentFighter = ordreTourAttaque[0];

function launchFight() {
    console.log(ordreTourAttaque);
    
    function nextTurn() {

        if (ordreTourAttaque.length === 0 && ordreTourAttaque2.length > 0) {
            ordreTourAttaque = ordreTourAttaque2
        }

        if (ordreTourAttaque.length === 0) {
            console.log("Fin du combat !");
            return;
        }
        if (ordreTourAttaque[0]) {
        currentFighter = ordreTourAttaque[0];
        } else {
            ordreTourAttaque = ordreTourAttaque2
            currentFighter = ordreTourAttaque[0]
        }
        if (currentFighter.nom === "perso1" || currentFighter.nom === "perso2" || currentFighter.nom === "perso3") {
            console.log("C'est au tour de :", currentFighter.nom);
            ordreTourAttaque2.push(ordreTourAttaque.shift())
            if (ordreTourAttaque.lenght === 0) {
                ordreTourAttaque = ordreTourAttaque2
                console.log("ordre du tour : ", ordreTourAttaque)
            }
            console.log("reste du tour : ", ordreTourAttaque )
            return; 
        }

        console.log("Tour de :", currentFighter.nom);

        setTimeout(() => {
            const CRT = randomNumber(100);
            const numRand = randomNumber(nombreDePerso);
            const persoRand = "perso" + numRand;

            if (CRT - dataStat.DonneeStatPerso.statPerso[persoRand].Dexterite > 90 + actualEnnemiStatut[currentFighter.nom].DEX) {
                const rand = genererChiffre(actualEnnemiStatut[currentFighter.nom].CRIT, 10);
                const randDef = Math.round(rand - (rand * (dataStat.DonneeStatPerso.stats[persoRand].Def / 100)));
                nombreDegatsTemporaire = "Coup critique ! ! ! -" + randDef + " dégâts";
                dataStat.DonneeStatPerso.statPerso[persoRand].HPactual -= randDef;
            } else if (CRT - dataStat.DonneeStatPerso.statPerso[persoRand].Dexterite < 10 + actualEnnemiStatut[currentFighter.nom].DEX) {
                nombreDegatsTemporaire = "Raté !";
            } else {
                const rand = genererChiffre(actualEnnemiStatut[currentFighter.nom].ATQ, 5);
                const randDef = Math.round(rand - (rand * (dataStat.DonneeStatPerso.stats[persoRand].Def / 100)));
                nombreDegatsTemporaire = "-" + randDef + " dégâts";
                dataStat.DonneeStatPerso.statPerso[persoRand].HPactual -= randDef;
            }

            // Mise à jour de l'affichage
            const OldImg = document.getElementById(actualEnnemiStatut[currentFighter.nom].ImID);
            OldImg.style.display = "none";
            const imAttaque = document.createElement("img");
            const nomGenerique = currentFighter.nom.replace(/\s*[0-9]+\s*/g, '');
            imAttaque.src = ennemi[nomGenerique].IMGATQ;
            imAttaque.style.zIndex = "5";
            imAttaque.style.width = "400px";
            imAttaque.style.height = "400px";
            buttonDoorDiv.divEnn3.appendChild(imAttaque);

            let spanDegats = document.createElement("span");
            spanDegats.id = "spanDegats";
            spanDegats.textContent = nombreDegatsTemporaire || "Raté !";
            buttonDoorDiv.ennemiDegats.appendChild(spanDegats);

            setTimeout(() => {
                // Réinitialisation après l'attaque
                OldImg.style.display = "block";
                imAttaque.remove();
                spanDegats.remove();
                update();
                
                // Passer au prochain combattant
                ordreTourAttaque2.push(ordreTourAttaque.shift());

                // Vérifier la fin du jeu
                if (!end) {
                    gameOver();
                }

                // Appeler récursivement la fonction pour le prochain tour
                nextTurn();
            }, 800);
        }, 1300);
    }

    // Lancer le premier tour
    nextTurn();
}



let dark = false;
let marchand = 0
let  testMarchand = ""
const btnMarchand = document.getElementById("checkMarchand")
const btnNoMarchand = document.getElementById("checkNoMarchand")
btnMarchand.addEventListener("click", () => {
    testMarchand = "alwaysMarchand"
})
btnNoMarchand.addEventListener("click", () => {
    testMarchand = "neverMarchand"
})
//Si on clique sur la porte ouverte
function enterDoor(door, myRoom) {

    if (darknessOpacity === 1) {
        dark = true
        boiteDialogue("txtDarkness")
    } else {
    // SI CLIC DEPUIS LE START
        if (roomIAm === "start") {
            // ON VA A LA SALLE !
            roomIAm = door;
            backCheck = true;
            imDoor.btnBack.style.display = "block";
            // SI LA SALLE EXISTE DEJA ON CHARGE LES SALLES VIA UPDATERENDERBACK()
            if (room.numberDoor[door]) {
                updateRenderBack(roomIAm);
                boiteDialogue("txtEnterExplored");
            }
            //SI LA SALLE NEXISTE PAS ON CREE LES SALLES
            else {
                room.numberDoor[door] = randomNumber("3");
                if (room.numberDoor[door] === 3) {
                    room.doorState[door] = { A: "ferme", B: "ferme", C: "ferme" };
                }
                if (room.numberDoor[door] === 2) {
                    room.doorState[door] = { A: "ferme", B: "ferme" };
                }
                if (room.numberDoor[door] === 1) {
                    room.doorState[door] = { A: "ferme" };
                }
                boiteDialogue("txtEnterInexplored");
                updateRender(roomIAm);
            }
        }
        //DEPUIS UNE AUTRE SALLE QUE LA SALLE DE DEPART
        else {
            // ON VA A LA SALLE
            roomIAm = roomIAm + door;
            //SI LA SALLE EXISTE DEJA ON CHARGE LA SALLE VIA UPDATERENDERBACK()
            if (room.numberDoor[[myRoom] + [door]] === "marchand") {
                updateRenderBack(roomIAm, "marchand");
                boiteDialogue("txtMarchand");
            } else if (room.numberDoor[[myRoom] + [door]]) {
                updateRenderBack(roomIAm);
                boiteDialogue("txtEnterExplored");
            }
            //SI LA SALLE N'EXISTE PAS ON CREE LES SALLES !
            else {
                //CONDITION MARCHAND
                if (testMarchand === "alwaysMarchand") {
                    marchand = 100
                } else if (testMarchand === "neverMarchand") {
                    marchand = 0
                } else {
                marchand = randomNumber("100");
                }
                if (marchand > 80) {
                    let howDeep = "";
                    const splitRoom = roomIAm.split("");
                    howDeep = splitRoom.length;
                    room.numberDoor[[myRoom] + [door]] = "marchand";
                    //PETIT MARCHAND
                    if (howDeep < 7) {
                        room.doorState[[myRoom] + [door]] = "smallMarket";
                    }   
                    //MOYEN MARCHAND
                    else if (howDeep < 14) {
                        room.doorState[[myRoom] + [door]] = "mediumMarket";
                    }
                    //GRAND MARCHAND
                    else {
                        room.doorState[[myRoom] + [door]] = "bigMarket";
                    }
                    updateRender(roomIAm, "marchand");
                    boiteDialogue("txtMarchand");
                } else {
                    room.numberDoor[[myRoom] + [door]] = randomNumber("3");
                    if (room.numberDoor[[myRoom] + [door]] === 3) {
                        room.doorState[[myRoom] + [door]] = {
                            A: "ferme",
                            B: "ferme",
                            C: "ferme",
                        };
                    }
                    if (room.numberDoor[[myRoom] + [door]] === 2) {
                        room.doorState[[myRoom] + [door]] = {
                            A: "ferme",
                            B: "ferme",
                        };
                    }
                    if (room.numberDoor[[myRoom] + [door]] === 1) {
                        room.doorState[[myRoom] + [door]] = { A: "ferme" };
                    }
                    boiteDialogue("txtEnterInexplored");
                    updateRender(roomIAm);
                }
            }
        }
    }
}

function delDoor(myRoom) {
    buttonDoorDiv.itemMarket.style.display = "none";
    try {
        imDoor.ImA.remove();
    } catch {}
    try {
        imDoor.ImB.remove();
    } catch {}
    try {
        imDoor.ImC.remove();
    } catch {}
    try {
        imDoor.ImOpenA.remove();
    } catch {}
    try {
        imDoor.ImOpenB.remove();
    } catch {}
    try {
        imDoor.ImOpenC.remove();
    } catch {}
    try {
        imDoor.smallMarket = document.getElementById("smallMarket");
        imDoor.smallMarket.remove();
    } catch {}
    try {
        imDoor.mediumMarketMarket = document.getElementById("mediumMarket");
        imDoor.mediumMarket.remove();
    } catch {}
    try {
        imDoor.bigMarket = document.getElementById("bigMarket");
        imDoor.bigMarket.remove();
    } catch {}
    try {
        marketMemory[myRoom].forEach((value) => {
            imDoor[value] = document.getElementById(value);
            imDoor[value].remove;
        });
    } catch {}
    try {
    } catch {}
}
function updateRender(myRoom, marchand) {
    delDoor();
    if (marchand === "marchand") {
        updateRenderMarket(myRoom);
    }
    if (room.numberDoor[myRoom] === 1) {
        const imNewDoorA = document.createElement("img");
        imNewDoorA.src = "image/porteFerme.webp";
        imNewDoorA.width = "400";
        imNewDoorA.height = "408";
        imNewDoorA.alt = "porte ferme";
        imNewDoorA.id = "ImA";
        imNewDoorA.setAttribute("data-testid", "porteFermeA")
        buttonDoorDiv.D1.appendChild(imNewDoorA);
        imDoor.ImA = document.getElementById("ImA");
        imDoor.ImA.addEventListener("click", () =>
            openDoor("A", ImA, "ImOpenA", "D1", roomIAm),
        );
    } else if (room.numberDoor[myRoom] === 2) {
        const imNewDoorA = document.createElement("img");
        imNewDoorA.src = "image/porteFerme.webp";
        imNewDoorA.width = "400";
        imNewDoorA.height = "408";
        imNewDoorA.alt = "porte ferme";
        imNewDoorA.id = "ImA";
        imNewDoorA.setAttribute("data-testid", "porteFermeA")
        buttonDoorDiv.D1.appendChild(imNewDoorA);
        imDoor.ImA = document.getElementById("ImA");
        imDoor.ImA.addEventListener("click", () =>
            openDoor("A", ImA, "ImOpenA", "D1", roomIAm),
        );

        const imNewDoorB = document.createElement("img");
        imNewDoorB.src = "image/porteFerme.webp";
        imNewDoorB.width = "400";
        imNewDoorB.height = "408";
        imNewDoorB.alt = "porte ferme";
        imNewDoorB.id = "ImB";
        imNewDoorA.setAttribute("data-testid", "porteFermeB")
        buttonDoorDiv.D2.appendChild(imNewDoorB);
        imDoor.ImB = document.getElementById("ImB");
        imDoor.ImB.addEventListener("click", () =>
            openDoor("B", ImB, "ImOpenB", "D2", roomIAm),
        );
    } else if (room.numberDoor[myRoom] === 3) {
        const imNewDoorA = document.createElement("img");
        imNewDoorA.src = "image/porteFerme.webp";
        imNewDoorA.width = "400";
        imNewDoorA.height = "408";
        imNewDoorA.alt = "porte ferme";
        imNewDoorA.id = "ImA";
        imNewDoorA.setAttribute("data-testid", "porteFermeA")
        buttonDoorDiv.D1.appendChild(imNewDoorA);
        imDoor.ImA = document.getElementById("ImA");
        imDoor.ImA.addEventListener("click", () =>
            openDoor("A", ImA, "ImOpenA", "D1", roomIAm),
        );

        const imNewDoorB = document.createElement("img");
        imNewDoorB.src = "image/porteFerme.webp";
        imNewDoorB.width = "400";
        imNewDoorB.height = "408";
        imNewDoorB.alt = "porte ferme";
        imNewDoorB.id = "ImB";
        imNewDoorA.setAttribute("data-testid", "porteFermeB")
        buttonDoorDiv.D2.appendChild(imNewDoorB);
        imDoor.ImB = document.getElementById("ImB");
        imDoor.ImB.addEventListener("click", () =>
            openDoor("B", ImB, "ImOpenB", "D2", roomIAm),
        );

        const imNewDoorC = document.createElement("img");
        imNewDoorC.src = "image/porteFerme.webp";
        imNewDoorC.width = "400";
        imNewDoorC.height = "408";
        imNewDoorC.alt = "porte ferme";
        imNewDoorC.id = "ImC";
        imNewDoorA.setAttribute("data-testid", "porteFermeC")
        buttonDoorDiv.D3.appendChild(imNewDoorC);
        imDoor.ImC = document.getElementById("ImC");
        imDoor.ImC.addEventListener("click", () =>
            openDoor("C", ImC, "ImOpenC", "D3", roomIAm),
        );
    }
    darknessOpacity()
}
let ImToDel = [];
let end = false
function gameOver() {
    if (dataStat.DonneeStatPerso.statPerso.perso1.HPactual <= 0) {
        const op = document.getElementById("all");
        const dial = document.getElementById('divDialogue')
        buttonDoorDiv.panneauAttaque.style.display ="none"
        dial.style.display="none"
        for (let i = 0; i <= 10; i++) { 
            setTimeout(() => {
                let opacity = i / 10; 
                op.style.setProperty('--darkness-opacity', opacity);
            }, i * 100); 
        }
    
        const gameOver = document.createElement("span");
        gameOver.textContent = "GAME OVER";
        gameOver.style.color = "red";
        gameOver.style.zIndex = "9999";
        gameOver.style.fontSize = "120px";
        gameOver.style.position="absolute"
        gameOver.style.left ="450px"
        gameOver.style.top ="250px"
        document.body.appendChild(gameOver);
        end = true
    }
}
// IMAGES DES PERSONNAGES SELON LEUR CLASSE
function imgPerso () {
    try {
        const imgPerso1 = document.getElementById("imgperso1")
        const imgPerso2 = document.getElementById("imgperso2")
        const imgPerso3 = document.getElementById("imgperso3")
        imgPerso1.remove()
        imgPerso2.remove()
        imgPerso3.remove()
    } catch {}
    Object.entries(dataStat.DonneeStatPerso.statPerso).forEach(([cle, valeur]) => {
        let classPerso = valeur.class
            if (classPerso) {
                const perso1 = document.createElement('img')
                const persoDiv = document.getElementById(cle)
                perso1.src = persoClass[classPerso].IMG
                perso1.width = 370
                perso1.height = 400
                perso1.id = "img"+cle
                perso1.addEventListener("click", ()=> chooseChar(valeur.type))
        persoDiv.appendChild(perso1)
        document.body.appendChild(persoDiv)}
        })

}

function chooseChar (type) {
            if (fighting) { 
                if(currentFighter.nom === type) {
                    Object.entries(imDoor.ALL).forEach(([key, value]) => {
                        value.style.display = "none"
                    }) 
                    attack = false
                    document.body.style.cursor = "default"
                    buttonDoorDiv.allSpell.style.display ="none"
                    buttonDoorDiv.allSkill.style.display ="none"
                    designationPerso = type
                    buttonDoorDiv.panneauAttaque.style.display="block"
                    update()
                } else {
                    attack = false
                    document.body.style.cursor = "default"
                    buttonDoorDiv.allSpell.style.display ="none"
                    buttonDoorDiv.allSkill.style.display ="none"
                    designationPerso = type 
                    buttonDoorDiv.panneauAttaque.style.display="none"
                    update()
                }
            } else {
                designationPerso = type
                update()
            }
        }

function genererChiffre(base, variation) {
    let randomVariation = (Math.random() * (2 * variation)) - variation;
    let resultat = base + randomVariation;
    return Math.round(resultat);
}
let runeCrit = 0
let runeDoneToDel = []

function addCrit (runeId, runeSource) {
    const runeSkill = document.getElementById(runeId)
    const runeDoneDiv = document.getElementById("tableauRuneDone")
    runeCrit++
    runeSkill.remove()
    const runesDone = document.createElement("img")
    runesDone.src = "image/"+runeId+".webp"
    runesDone.width = 180
    runesDone.height = 200
    runesDone.id = "done"+runeId
    runeDoneToDel.push("done"+runeId)
    runeDoneDiv.appendChild(runesDone)
}
let runeTempo = Object.keys(runes)

const popAndDelRune = async (temps, nbreRune, i) => {
            setTimeout(() => {
            const top = randomNumber(220);
            const left = randomNumber(660);
            const rune = document.createElement("img");
            let randomKey = Math.floor(Math.random() * 10) + 1;
            rune.src = runes[randomKey];
            rune.style.position = "absolute";
            rune.style.top = top + "px";
            rune.style.left = left + "px";
            rune.id = "rune" + randomKey;
            rune.width = 40 * (1 + dataStat.DonneeStatPerso.statPerso[designationPerso].Dexterite / 30);
            rune.height = 50 * (1 + dataStat.DonneeStatPerso.statPerso[designationPerso].Dexterite / 30);
            runeTempo.splice(randomKey, 1);
            buttonDoorDiv.tableauRune.appendChild(rune);
            rune.addEventListener("click", () => {
                addCrit([rune.id], [rune.src]);         
            })
            setTimeout(() => {
                const delRune = document.getElementById("rune" + randomKey);
                try {
                    delRune.remove();
                } catch  {}
            }, temps * (1 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration / 30)));
    }, ((temps + 100) * (1 + (dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration / 30))) * (i));
    }
const runeTimeOut = async (temps, nbreRune) => {
        setTimeout(async () => {
            const spanConcentration = document.getElementById('spanConcentration');
            spanConcentration.remove();
            for (let i = 0; i < nbreRune; i++) {
                await popAndDelRune(temps, nbreRune, i); 
                runeTempo = Object.keys(runes);
        }}, 1000);
};

async function QTErune(temps, nbreRune) {
    const op = document.getElementById("all");
        const dial = document.getElementById('divDialogue')
        buttonDoorDiv.panneauAttaque.style.display ="none"
        dial.style.display="none"
        const tableauRune = document.getElementById("tableauRune")
        const tableauRuneDone = document.getElementById("tableauRuneDone")
        for (let i = 0; i <= 10; i++) { 
            setTimeout(() => {
                let opacity = i / 10; 
                op.style.setProperty('--darkness-opacity', opacity);
            }, i * 100); 
        }
        setTimeout(() => {
            const spanConcentration = document.createElement("p")
            spanConcentration.textContent = "Concentration"
            spanConcentration.id = "spanConcentration"
            tableauRuneDone.style.display ="block"
            tableauRune.style.display ="block"
            tableauRune.style.position="absolute"
            tableauRune.appendChild(spanConcentration)
        }, 500)
    await runeTimeOut(temps, nbreRune)
    setTimeout(()=> {
    buttonDoorDiv.panneauAttaque.style.display ="block"
    dial.style.display="block"
    tableauRune.style.display="none"
    tableauRuneDone.style.display="none"
    if (runeDoneToDel){
        try {
            runeDoneToDel.forEach((value)=> {
                const delrune = document.getElementById(value)
                delrune.remove()
        })
        } catch {}
        runeDoneToDel= []
    }
        op.style.setProperty('--darkness-opacity', 0)
    }, ((((temps)*(1 +(dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))) * nbreRune)+(temps*(1 +(dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))))+2000)
}
function whatAttaque(type, name) {
    if(!isAttacking){
    if (type === "attack") {
        attack = true
        spellInUse=""
        skillInUse= ""
        buttonDoorDiv.allSkill.style.display="none"
        buttonDoorDiv.allSpell.style.display="none"
        document.body.style.cursor = "url('image/cursorATQ.png'), auto"   
    } else if (type === "skill") {
        attack = false
        spellInUse=""
        buttonDoorDiv.allSpell.style.display="none"
        buttonDoorDiv.allSkill.style.display="block"
        document.body.style.cursor = "default"  
        showSkills()
    } else if (type === 'spell') {
        attack = false
        skillInUse= ""
        buttonDoorDiv.allSkill.style.display="none"
        buttonDoorDiv.allSpell.style.display="block"
        document.body.style.cursor = "default"  
        showSpells()
    }} else return
}
async function spell (nom, nomGen, div,ImEnn) {
    if (!spellInUse) {return}
    if (spells[spellInUse].state) {
        if (isAttacking) return; 
    else {
        if (dataStat.DonneeStatPerso.statPerso[designationPerso].MPactual < spells[spellInUse].manaCost) {
            alert("mana insuffisant pour lancer ", spells[spellInUse].nom)
        } else {
            buttonDoorDiv.allSpell.style.display ="none"
            buttonDoorDiv.allSkill.style.display ="none"
            buttonDoorDiv.panneauAttaque.style.display="none"
            isAttacking = true; 
    //CC SYSYTEM ESSAI facon QTE
    await QTErune(spells[spellInUse].tempsRune, spells[spellInUse].nombreRune)
    //QTE END
    setTimeout(()=> {
    const keys = Object.keys(actualEnnemiStatut);
    lastAttackDelay = (keys.length - 1) * 1300 + 800;
    document.body.style.cursor ="default"
    buttonDoorDiv.allSpell.style.display="none"
    const spell = document.createElement("img")
    spell.id = "spell"
    spell.src = spells[spellInUse].IMG
    spell.width = spells[spellInUse].width;
    spell.height = "308";
    spell.zIndex="99"
    let SPELLDMG = spells[spellInUse].effect() * (runeCrit * spells[spellInUse].runeMultiple)
    if (runeCrit === spells[spellInUse].nombreRune) {  
        let spanCrit = document.createElement('p')
        spanCrit.id = "spanCrit"
        spanCrit.textContent = "Exécution parfaite ! "
        buttonDoorDiv[[div]+"degats"].appendChild(spanCrit)
    }
    else if (runeCrit === 0) {
        let spanCrit = document.createElement('p')
        spanCrit.id = "spanCrit"
        spanCrit.textContent = "Raté ! "
        buttonDoorDiv[[div]+"degats"].appendChild(spanCrit)
    }

    if (spells[spellInUse].target === "solo"){
        let RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
        if (RANDOM < 0) {
            RANDOM = 0
        } 
        actualEnnemiStatut[nom].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM
        buttonDoorDiv[div].appendChild(spell)
        buttonDoorDiv[[div]+"degats"].appendChild(spanDegats)
    }   
    else if (spells[spellInUse].target === "random") {
        for(let i = 0; i < spells[spellInUse].repetition; i++) {
        const ennemiID = Object.keys(actualEnnemiStatut)
        const randomKey = ennemiID[Math.floor(Math.random() * ennemiID.length)]     
        let RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
        if (RANDOM < 0) {
            RANDOM = 0
        } 
        actualEnnemiStatut[randomKey].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM+" "
        buttonDoorDiv.divEnn1.appendChild(spell)
        buttonDoorDiv[[actualEnnemiStatut[randomKey].div]+"degats"].appendChild(spanDegats)   
        }
    } 
    else if (spells[spellInUse].target === "all") {
        const ennemiID = Object.keys(actualEnnemiStatut)
        ennemiID.forEach((value) => {
            let RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
            if (RANDOM < 0) {
                RANDOM = 0
            } 
            actualEnnemiStatut[value].HP -= RANDOM
            let spanDegats = document.createElement("p")
                spanDegats.id = "spanDegats"
                spanDegats.textContent = "-"+RANDOM+" "
            buttonDoorDiv.divEnn1.appendChild(spell)
            buttonDoorDiv[[actualEnnemiStatut[value].div]+"degats"].appendChild(spanDegats)  
        })
    }
    dataStat.DonneeStatPerso.statPerso[designationPerso].MPactual -= spells[spellInUse].manaCost
}, (2500+((((spells[spellInUse].tempsRune)*1.5)*(1+dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))*(spells[spellInUse].nombreRune-1))))    
    setTimeout(() => {
        const delSpell = document.getElementById("spell")
        delSpell.remove() 
        const spanDegats = document.querySelectorAll("p")
        spanDegats.forEach(span => {
            span.remove()});
    const ennemiID = Object.keys(actualEnnemiStatut)  
    ennemiID.forEach((value) => {
        if(actualEnnemiStatut[value].HP <= 0) { 
            const ennemiGen = value.replace(/\s*[0-9]+\s*/g, '')
            const findDiv = actualEnnemiStatut[value].div
            const findImEnn = actualEnnemiStatut[value].ImID
            loot(value, ennemiGen, findDiv, findImEnn)
            const index = ordreTourAttaque.findIndex(e => e.nom === nom)
            if (index !== -1){
                ordreTourAttaque.splice(index , 1)
            }
            const index2 = ordreTourAttaque2.findIndex(e => e.nom === nom)
            if (index2 !== -1){ 
                ordreTourAttaque2.splice(index2 , 1)
            }
            setTimeout(() => {
                spellInUse=""
                isAttacking = false
            }, lastAttackDelay + 100);}
            else {
                setTimeout(() => {
                    spellInUse=""
                    isAttacking = false
                }, lastAttackDelay + 100);  
            }
        })
        vicOrRetaliation()
    },(5000+(((spells[spellInUse].tempsRune)*1.5)*(1+dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))*(spells[spellInUse].nombreRune-1)))}}} 
    else  return 
}
async function skill (nom, nomGen, div,ImEnn) {
    if (!skillInUse) {return}
    if (skills[skillInUse].state) {
        if (isAttacking) return; 
    else {
        if (dataStat.DonneeStatPerso.statPerso[designationPerso].MPactual < skills[skillInUse].manaCost) {
            alert("mana insuffisant pour lancer ", skills[skillInUse].nom)
        } else {
            isAttacking = true; 
            buttonDoorDiv.allSpell.style.display ="none"
            buttonDoorDiv.allSkill.style.display ="none"
            buttonDoorDiv.panneauAttaque.style.display="none"
    //CC SYSYTEM ESSAI facon QTE
    await QTErune(skills[skillInUse].tempsRune, skills[skillInUse].nombreRune)
    //QTE END
    setTimeout(()=> {
    const keys = Object.keys(actualEnnemiStatut);
    lastAttackDelay = (keys.length - 1) * 1300 + 800;
    document.body.style.cursor ="default"
    buttonDoorDiv.allSpell.style.display="none"
    const skill = document.createElement("img")
    skill.id = "skill"
    skill.src = skills[skillInUse].IMG
    skill.width = skills[skillInUse].width;
    skill.height = "308";
    skill.zIndex="99"
    let SKILLDMG = skills[skillInUse].effect() * runeCrit
    if (runeCrit === skills[skillInUse].nombreRune) {  
        let spanCrit = document.createElement('p')
        spanCrit.id = "spanCrit"
        spanCrit.textContent = "Exécution parfaite ! "
        buttonDoorDiv[[div]+"degats"].appendChild(spanCrit)
    }
    else if (runeCrit === 0) {
        let spanCrit = document.createElement('p')
        spanCrit.id = "spanCrit"
        spanCrit.textContent = "Raté ! "
        buttonDoorDiv[[div]+"degats"].appendChild(spanCrit)
    }

    if (skills[skillInUse].target === "solo"){
        let RANDOM = genererChiffre(SKILLDMG, skills[skillInUse].variation)
        if (RANDOM < 0) {
            RANDOM = 0
        } 
        actualEnnemiStatut[nom].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM
        buttonDoorDiv[div].appendChild(skill)
        buttonDoorDiv[[div]+"degats"].appendChild(spanDegats)
    }   
    else if (skills[skillInUse].target === "random") {
        for(let i = 0; i < skills[skillInUse].repetition; i++) {
        const ennemiID = Object.keys(actualEnnemiStatut)
        const randomKey = ennemiID[Math.floor(Math.random() * ennemiID.length)]     
        let RANDOM = genererChiffre(SKILLDMG, skills[skillInUse].variation)
        if (RANDOM < 0) {
            RANDOM = 0
        } 
        actualEnnemiStatut[randomKey].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM+" "
        buttonDoorDiv.divEnn1.appendChild(skill)
        buttonDoorDiv[[actualEnnemiStatut[randomKey].div]+"degats"].appendChild(spanDegats)   
        }
    } 
    else if (skills[skillInUse].target === "all") {
        const ennemiID = Object.keys(actualEnnemiStatut)
        ennemiID.forEach((value) => {
            let RANDOM = genererChiffre(SKILLDMG, skills[skillInUse].variation)
            if (RANDOM < 0) {
                RANDOM = 0
            } 
            actualEnnemiStatut[value].HP -= RANDOM
            let spanDegats = document.createElement("p")
                spanDegats.id = "spanDegats"
                spanDegats.textContent = "-"+RANDOM+" "
            buttonDoorDiv.divEnn1.appendChild(skill)
            buttonDoorDiv[[actualEnnemiStatut[value].div]+"degats"].appendChild(spanDegats)  
        })
    }
    dataStat.DonneeStatPerso.statPerso[designationPerso].MPactual -= skills[skillInUse].manaCost
}, (2500+(((skills[skillInUse].tempsRune)*(1+dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))*skills[skillInUse].nombreRune)))    
    setTimeout(() => {
        const delSpell = document.getElementById("skill")
        delSpell.remove() 
        const spanDegats = document.querySelectorAll("p")
        spanDegats.forEach(span => {
            span.remove()});
    const ennemiID = Object.keys(actualEnnemiStatut)  
    ennemiID.forEach((value) => {
        if(actualEnnemiStatut[value].HP <= 0) { 
            const ennemiGen = value.replace(/\s*[0-9]+\s*/g, '')
            const findDiv = actualEnnemiStatut[value].div
            const findImEnn = actualEnnemiStatut[value].ImID
            loot(value, ennemiGen, findDiv, findImEnn)
            const index = ordreTourAttaque.findIndex(e => e.nom === nom)
            if (index !== -1){
                ordreTourAttaque.splice(index , 1)
            }
            const index2 = ordreTourAttaque2.findIndex(e => e.nom === nom)
            if (index2 !== -1){ 
                ordreTourAttaque2.splice(index2 , 1)
            }
            setTimeout(() => {
                skillInUse=""
                isAttacking = false
            }, lastAttackDelay + 100);}
            else {
                setTimeout(() => {
                    skillInUse=""
                    isAttacking = false
                }, lastAttackDelay + 100);  
            }
        })
        vicOrRetaliation()
    },(((skills[skillInUse].tempsRune)*(1+dataStat.DonneeStatPerso.statPerso[designationPerso].Concentration/30))*skills[skillInUse].nombreRune)+5000)}}} 
    else  return 
}
function attaque(nom, nomGen, div, ImEnn) {
    if (attack) {
        if (isAttacking) return; 
    else {
        buttonDoorDiv.allSpell.style.display ="none"
            buttonDoorDiv.allSkill.style.display ="none"
            buttonDoorDiv.panneauAttaque.style.display="none"
        const keys = Object.keys(actualEnnemiStatut);
        lastAttackDelay = (keys.length - 1) * 1300 + 800;
    isAttacking = true; }
    const attaque = document.createElement("img")
        attaque.id = "attaque"
        attaque.src = "image/attaque.webp"
        attaque.width = "400";
        attaque.height = "208";
        buttonDoorDiv[div].appendChild(attaque)
        let randomAttaque = genererChiffre(dataStat.DonneeStatPerso.stats[designationPerso].RightHand +
            dataStat.DonneeStatPerso.stats[designationPerso].LeftHand, 10)
            while (randomAttaque < 0) {
                randomAttaque++
            }
        let spanDegats = document.createElement("span")
        spanDegats.id = "spanDegats"
        spanDegats.textContent = "-"+randomAttaque
        buttonDoorDiv[[div]+"degats"].appendChild(spanDegats)
    setTimeout(()=> {
        const blood = document.createElement("img")
        blood.src = "image/BLOOD.gif"
        blood.id = "blood"
        buttonDoorDiv[div].appendChild(blood)
    }, 100)
    setTimeout(() => {
        const delAttaque = document.getElementById("attaque")
        const blood = document.getElementById("blood")
        blood.remove()
        delAttaque.remove()
    actualEnnemiStatut[nom].HP -= randomAttaque
    if (actualEnnemiStatut[nom].HP > 0) {
        boiteDialogue("txtAttaque", ennemi[nomGen].txt);
        spanDegats.remove()
        vicOrRetaliation()
        setTimeout(() => {
            document.body.style.cursor ="default"
            attack = false
            isAttacking = false;
        }, lastAttackDelay + 100);
    } else {
        spanDegats.remove()
        loot(nom, nomGen, div, ImEnn)
            const index = ordreTourAttaque.findIndex(e => e.nom === nom)
            if (index !== -1){
                ordreTourAttaque.splice(index , 1)
            }
            const index2 = ordreTourAttaque2.findIndex(e => e.nom === nom)
            if (index2 !== -1){ 
                ordreTourAttaque2.splice(index2 , 1)
            }
        vicOrRetaliation()
        setTimeout(() => {
            document.body.style.cursor ="default"
            attack = false
            isAttacking = false;
        }, lastAttackDelay + 100);
    }},1000)} 
}
async function nextAttaque() {

}
async function vicOrRetaliation() {
    if (Object.keys(actualEnnemiStatut).length === 0) {
        boiteDialogue("txtVictory")
        setTimeout(() => {
            for(let i = 0; i < 6; i++) {
                try {
                    const imageDel = document.getElementById("ImEnn"+i)
                    imageDel.remove();
                    ImToDel.shift()
                }
                catch{}
            }
            imDoor.btnBack.style.display = "block";
            opInventaire.style.display = "block";
            imDoor.allDoor.style.display = "block";
            buttonDoorDiv.panneauAttaque.style.display = "none";
            imDoor.fightDoor.remove();
            Object.keys(compteur).forEach((key) => {
                compteur[key] = 1
            })
            Object.entries(imDoor.ALL).forEach(([key, value]) => {
                value.style.display = "none"
            }) 
            ordreTourAttaque = []
            ordreTourAttaque2 = []
            update()
            fighting = false
            isAttacking = false;
            tooltip.style.visibility = "hidden"
        },1000)
        console.log("fin du combat : ", ordreTourAttaque, ordreTourAttaque2)
    }
    else {
        launchFight ()
        }
        runeCrit = 0
    }
function loot(nom, nomGen, div, ImEnn) {
    boiteDialogue("txtKill", ennemi[nomGen].txt);
        Object.entries(dataStat.DonneeStatPerso.statPerso).forEach(([key, value]) => {
            value.XP += Math.round(actualEnnemiStatut[nom].XP / nombreDePerso);
        }) 
        dataStat.DonneeStatPerso.money += actualEnnemiStatut[nom].or
        Object.entries(ennemi[nomGen].LOOT).forEach(([key,value]) => {
            const chance = randomNumber(100)
            if (value >= chance) {
                const whatType = item[key].type
                if(whatType === "Object") {

                    dataStat.DonneeStatPerso.inventaire[whatType].push(key)
                    boiteDialogue("txtLoot", item[key].nom)
                } else if (whatType !== "Object" && dataStat.DonneeStatPerso.inventaire[whatType].includes(key)) { 

                    dataStat.DonneeStatPerso.money += 20
                } else if (whatType !== "Object" && dataStat.DonneeStatPerso.equipement[whatType] === key) {
                    dataStat.DonneeStatPerso.money += 20
                } else if (whatType !== "Object" && dataStat.DonneeStatPerso.equipement.RightHand === key) {
                    dataStat.DonneeStatPerso.money += 20
                }
                else {
                    dataStat.DonneeStatPerso.inventaire[whatType].push(key)
                    boiteDialogue("txtLoot", item[key].nom)
                }
            }
        })
        delete actualEnnemiStatut[nom]
        imDoor[ImEnn].remove();
        const imEnnemi = document.createElement("img");
        imEnnemi.src = ennemi[nomGen].IMGmort;
        imEnnemi.width = ennemi[nomGen].width;
        imEnnemi.height = ennemi[nomGen].height;
        imEnnemi.alt = "Ennemi féroce !";
        imEnnemi.id = ImEnn;
        buttonDoorDiv[div].appendChild(imEnnemi);
        ImToDel.push(ImEnn);
        buttonDoorDiv[div].removeEventListener("click", attaque);
}
//LUMIERE ET OBSCURITE 
let torche = false
const flashlight = document.getElementById("flashlight")
const overlay = document.getElementById("overlay")
function darknessOpacity() {
    if (roomIAm === "start") {
        roomIAm = ""
    } 
        const splitRoom = roomIAm.split("");
        let numberEnn = (splitRoom.length/20)
        if (dataStat.DonneeStatPerso.equipement.perso1.LeftHand === "torche" || 
            dataStat.DonneeStatPerso.equipement.perso1.RightHand === "torche" ||
            dataStat.DonneeStatPerso.equipement.perso2.LeftHand === "torche" || 
            dataStat.DonneeStatPerso.equipement.perso2.RightHand === "torche" ||
            dataStat.DonneeStatPerso.equipement.perso3.LeftHand === "torche" || 
            dataStat.DonneeStatPerso.equipement.perso3.RightHand === "torche")
        {
                overlay.style.display="none"
                flashlight.style.display="block"
                flashlight.style.background = `radial-gradient(circle, rgba(255, 181, 22, ${numberEnn}) 400px, rgba(0, 0, 0, ${numberEnn}) 650px)`
                torche = true
        }
        else {
            flashlight.style.display="none"
            overlay.style.display="block"
            overlay.style.background = ` rgba(0, 0, 0, ${numberEnn})`
            torche = false
        }
    if (roomIAm ==="") {
        roomIAm = "start"
    }  
}

function updateFlashlight() {
        if (torche){
            const splitRoom = roomIAm.split("");
            let numberEnn = (splitRoom.length/20)
            const random = genererChiffre(650, 15)
            const random2 = genererChiffre(400, 15)
            flashlight.style.background = `radial-gradient(circle, rgba(255, 216, 22, 0.1) ${random2}px, rgba(0, 0, 0, ${numberEnn}) ${random}px)`
      } else {
    }
    }

setInterval(updateFlashlight, 100)
   
document.addEventListener("mousemove", (e) => {
    if (torche){
    const flashlight = document.getElementById("flashlight");
    flashlight.style.left = `${e.clientX}px`;
    flashlight.style.top = `${e.clientY}px`;}
    else {return}
});


function updateRenderFight(type, nomEnnemi, div, ImEnn) {
    const imEnnemi = document.createElement("img");
    imEnnemi.src = ennemi[type].IMG;
    imEnnemi.width = ennemi[type].width;
    imEnnemi.height = ennemi[type].height;
    imEnnemi.alt = "Ennemi féroce !";
    imEnnemi.id = ImEnn;
    imEnnemi.setAttribute("data-testid", ennemi[type].testid)
    actualEnnemiStatut[nomEnnemi].ImID = ImEnn
    actualEnnemiStatut[nomEnnemi].div = div
    buttonDoorDiv[div].appendChild(imEnnemi);
    imDoor[ImEnn] = document.getElementById(ImEnn);
    imDoor[ImEnn].addEventListener("click", () =>
        attaque(nomEnnemi, type, div, ImEnn),   
    );
    imDoor[ImEnn].addEventListener("click", () =>
        spell(nomEnnemi, type, div, ImEnn),   
    );
    imDoor[ImEnn].addEventListener("click", () =>
        skill(nomEnnemi, type, div, ImEnn),   
    );
    imDoor[ImEnn].addEventListener("mouseover", (event) => {
        tooltip.innerText = type + "\n" + "HP : " + actualEnnemiStatut[nomEnnemi].HP
        tooltip.style.left = event.pageX + 40 + "px"
        tooltip.style.top = event.pageY + 40 + "px"
        tooltip.style.visibility = "visible"
    })
    imDoor[ImEnn].addEventListener("mousemove", function(event) {
        tooltip.style.left = event.pageX + 40 + "px";
        tooltip.style.top = event.pageY + 40 + "px";
    })
    imDoor[ImEnn].addEventListener("mouseout", function() {
        tooltip.style.visibility = "hidden";})
}
    

//Ouvrir porte
imDoor.ImA.addEventListener("click", () =>
    openDoor("A", ImA, "ImOpenA", "D1", roomIAm),
);
imDoor.ImB.addEventListener("click", () =>
    openDoor("B", ImB, "ImOpenB", "D2", roomIAm),
);
imDoor.ImC.addEventListener("click", () =>
    openDoor("C", ImC, "ImOpenC", "D3", roomIAm),
);
//revenir en arriere
imDoor.btnBack.addEventListener("click", () => back(roomIAm));

//attaque
imDoor.btnAttaque.addEventListener("click", () => whatAttaque("attack"))
imDoor.btnSpell.addEventListener("click", () => whatAttaque("spell"))
imDoor.btnSkill.addEventListener("click", () => whatAttaque("skill"))
imDoor.ALL.sortFeu.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortFeu"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.ALL.sortFoudre.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortFoudre"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.ALL.sortArcane.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortArcane"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.ALL.sortBlast.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortBlast"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.ALL.skillDouble.addEventListener("click",() =>{ 
    if(!isAttacking){
    skillInUse = "skillDouble"
    document.body.style.cursor = "url('image/cursorSKL.webp'), auto"} else return
})
imDoor.ALL.skillAll.addEventListener("click",() =>{ 
    if(!isAttacking){
    skillInUse = "skillAll"
    document.body.style.cursor = "url('image/cursorSKL.webp'), auto"} else return
})
function replaceStat() {
    Object.entries(dataStat.DonneeStatPerso.room.numberDoor).forEach(
        ([key, value]) => {
            room.numberDoor[key] = value;
        },
    );
    Object.entries(dataStat.DonneeStatPerso.room.doorState).forEach(
        ([key, value]) => {
            room.doorState[key] = value;
        },
    );
    roomIAm = dataStat.DonneeStatPerso.roomIAm;
    if (!roomIAm) {
        roomIAm = "start";
    }
    backCheck = dataStat.DonneeStatPerso.backCheck;
    message = dataStat.DonneeStatPerso.message;
    itemList = dataStat.DonneeStatPerso.itemList
    money = dataStat.DonneeStatPerso.money
    nombreDePerso = dataStat.DonneeStatPerso.nombreDePerso
    Object.entries(dataStat.DonneeStatPerso.marketMemory).forEach(
        ([key, value]) => {
            marketMemory[key] = value;
        },
    );
    backCheckFn();
    boiteDialogue("recDonnee");
    updateRenderBack(roomIAm);
    imgPerso()
    update()
}
imDoor.reset.addEventListener("click", () => fnReset())
async function fnReset() {
    const donjonpath = {
        reset
    };
    const res = await fetch("http://localhost:8000/all-data", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ donjonpath }),
    });
    const json = await res.json();
    window.location.href = "index.html";
}
const reset = {
        itemList : [
            "anneauForce",
            "espadon",
            "anneauDexterite",
            "armureEnFer",
            "armureEnCuir",
            "casqueEnCuir",
            "dague",
            "torche",
            //x9 potion mana
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            "potionMana",
            //x9 potion de vie
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            "potionVie",
            //x9 pain
            "pain",
            "pain",
            "pain",
            "pain",
            "pain",
            "pain",
            "pain",
            "pain",
            "pain",
            "sortFeu",
            "sortArcane",
            "sortFoudre",
            "sortBlast",
        ],
    }
const opInventaire = document.getElementById("Inventaire");
opInventaire.addEventListener("click", () => savePath());

async function savePath() {
    const donjonpath = {
        room,
        roomIAm,
        dataStat,
        backCheck,
        message,
        marketMemory,
        itemList,
        money,
        nombreDePerso,
    };
    const res = await fetch("http://localhost:8000/all-data", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ donjonpath }),
    });
    const json = await res.json();
    window.location.href = "index.html";
}

async function getData() {
    const res = await fetch("http://localhost:8000/all-data", {
        method: "GET",
    });
    const json = await res.json();
    dataStat = json;
    replaceStat();
    return dataStat;
}
getData();
// .then((data) => (dataStat = data))
// .catch((_) => (dataStat = serverResponse));
function buyItem(rawValue, type, myRoom, idItem) {
    delItem()   
    dataStat.DonneeStatPerso.inventaire[type].push(rawValue)
    const index = marketMemory[myRoom].findIndex((objet) => idItem === objet);
        if (index !== -1) {
            marketMemory[myRoom].splice(index, 1);
        }
    updateRenderItemMarket(myRoom)
}
function delItem() {
    Object.entries(marketMemory).forEach(([key, values]) => {
            Object.values(values).forEach((value) => { 
                try {
            imDoor[value] = document.getElementById(value)
            imDoor[value].remove()} 
            catch {}
        })
    })
}
let compteurObjet = 0
function updateRenderItemMarket(myRoom) {
    marketMemory[myRoom].forEach((value) => {
        if (value !== undefined) {
        const ImItem = document.createElement("img");
        const rawValue = value.replace(/\s*[0-9]+\s*/g, '')
        ImItem.src = item[rawValue].IMG;
        ImItem.width = 100;
        ImItem.height = 108;
            ImItem.id = value
            buttonDoorDiv.itemMarket.appendChild(ImItem);
            imDoor[value] = document.getElementById(value);
            imDoor[value].addEventListener("click", () =>
                buyItem(rawValue, item[rawValue].type, myRoom, value),
            );
        }  
    });
    
}
function itemMarket(myRoom) {
    delItem()
    if (buttonDoorDiv.itemMarket.style.display === "none") {
        buttonDoorDiv.itemMarket.style.display = "block"
        if (itemList !== "") {
            if (marketMemory[myRoom] === undefined) {
                marketMemory[myRoom] = [];
                for (let i = 0; i < 7; i++) {
                    if (room.doorState[myRoom] === "smallMarket") {
                        i += 2;
                    } else if (room.doorState[myRoom] === "mediumMarket") {
                        i += 1;
                    }
                    let findIndexItem = itemList[randomNumber(itemList.length) - 1];
                    if (findIndexItem === undefined) {
                        break
                    }
                    if (item[findIndexItem].type !== "Object") {
                        while (marketMemory[myRoom].includes(findIndexItem)) {
                            findIndexItem = itemList[randomNumber(itemList.length) - 1];
                        }
                        marketMemory[myRoom].push(findIndexItem);
                        const index = itemList.findIndex((objet) => objet === findIndexItem);
                        if (index !== -1) {
                            itemList.splice(index, 1);
                        }
                    }
                    else {
                        compteurObjet++
                        marketMemory[myRoom].push(findIndexItem+compteurObjet);
                    }
                }
                updateRenderItemMarket(myRoom);
            } else {
                    updateRenderItemMarket(myRoom);
            }
        } else {
        }
    } else {
        buttonDoorDiv.itemMarket.style.display = "none"
    }
} 

function updateRenderMarket(myRoom) {
    if (room.doorState[myRoom] === "smallMarket") {
        const smallMarket = document.createElement("img");
        smallMarket.src = "image/etal2.webp";
        smallMarket.width = "500";
        smallMarket.height = "500";
        smallMarket.alt = "Un marchand pour dépenser vos sous";
        smallMarket.id = "smallMarket";
        smallMarket.setAttribute("data-testid", "petitMarchand")
        buttonDoorDiv.market.appendChild(smallMarket);
        imDoor.smallMarket = document.getElementById("smallMarket");
        imDoor.smallMarket.addEventListener("click", () => itemMarket(myRoom))
    } else if (room.doorState[myRoom] === "mediumMarket") {
        const mediumMarket = document.createElement("img");
        mediumMarket.src = "image/etal.webp";
        mediumMarket.width = "700";
        mediumMarket.height = "600";
        mediumMarket.alt = "Un marchand pour dépenser vos sous";
        mediumMarket.id = "mediumMarket";
        mediumMarket.setAttribute("data-testid", "moyenMarchand")
        buttonDoorDiv.market.appendChild(mediumMarket);
        imDoor.mediumMarket = document.getElementById("mediumMarket");
        imDoor.mediumMarket.addEventListener("click", () => itemMarket(myRoom));
    } else {
        const bigMarket = document.createElement("img");
        bigMarket.src = "image/etal3.webp";
        bigMarket.width = "900";
        bigMarket.height = "650";
        bigMarket.alt = "Un marchand pour dépenser vos sous";
        bigMarket.id = "bigMarket";
        bigMarket.setAttribute("data-testid", "grandMarchand")
        buttonDoorDiv.market.appendChild(bigMarket);
        imDoor.bigMarket = document.getElementById("bigMarket");
        imDoor.bigMarket.addEventListener("click", () => itemMarket(myRoom));
    }
}
function updateRenderBack(myRoom) {
    delDoor(myRoom);
    if (room.numberDoor[myRoom] === "marchand") {
        updateRenderMarket(myRoom);
    } else {
        if (room.doorState[myRoom].A === "ouvert") {
            const imNewDoorA = document.createElement("img");
            imNewDoorA.src = "image/porteOuverte.webp";
            imNewDoorA.width = "400";
            imNewDoorA.height = "408";
            imNewDoorA.alt = "porte ouverte";
            imNewDoorA.id = "ImOpenA";
            buttonDoorDiv.D1.appendChild(imNewDoorA);
            imNewDoorA.setAttribute("data-testid", "porteOuvertA")
            imDoor.ImOpenA = document.getElementById("ImOpenA");
            imDoor.ImOpenA.addEventListener("click", () =>
                enterDoor("A", roomIAm),
            );
        } else if (room.doorState[myRoom].A === "ferme") {
            const imNewDoorA = document.createElement("img");
            imNewDoorA.src = "image/porteFerme.webp";
            imNewDoorA.width = "400";
            imNewDoorA.height = "408";
            imNewDoorA.alt = "porte ferme";
            imNewDoorA.id = "ImA";
            imNewDoorA.setAttribute("data-testid", "porteFermeA")
            buttonDoorDiv.D1.appendChild(imNewDoorA);
            imDoor.ImA = document.getElementById("ImA");
            imDoor.ImA.addEventListener("click", () =>
                openDoor("A", ImA, "ImOpenA", "D1", roomIAm),
            );
        } else {
        }

        if (room.doorState[myRoom].B === "ouvert") {
            const imNewDoorB = document.createElement("img");
            imNewDoorB.src = "image/porteOuverte.webp";
            imNewDoorB.width = "400";
            imNewDoorB.height = "408";
            imNewDoorB.alt = "porte ouverte";
            imNewDoorB.id = "ImOpenB";
            imNewDoorB.setAttribute("data-testid", "porteOuvertB")
            buttonDoorDiv.D2.appendChild(imNewDoorB);
            imDoor.ImOpenB = document.getElementById("ImOpenB");
            imDoor.ImOpenB.addEventListener("click", () =>
                enterDoor("B", roomIAm),
            );
        } else if (room.doorState[myRoom].B === "ferme") {
            const imNewDoorB = document.createElement("img");
            imNewDoorB.src = "image/porteFerme.webp";
            imNewDoorB.width = "400";
            imNewDoorB.height = "408";
            imNewDoorB.alt = "porte ferme";
            imNewDoorB.id = "ImB";
            imNewDoorB.setAttribute("data-testid", "porteFermeB")
            buttonDoorDiv.D2.appendChild(imNewDoorB);
            imDoor.ImB = document.getElementById("ImB");
            imDoor.ImB.addEventListener("click", () =>
                openDoor("B", ImB, "ImOpenB", "D2", roomIAm),
            );
        } else {
        }

        if (room.doorState[myRoom].C === "ouvert") {
            const imNewDoorC = document.createElement("img");
            imNewDoorC.src = "image/porteOuverte.webp";
            imNewDoorC.width = "400";
            imNewDoorC.height = "408";
            imNewDoorC.alt = "porte ouverte";
            imNewDoorC.id = "ImOpenC";
            imNewDoorC.setAttribute("data-testid", "porteOuvertC")
            buttonDoorDiv.D3.appendChild(imNewDoorC);
            imDoor.ImOpenC = document.getElementById("ImOpenC");
            imDoor.ImOpenC.addEventListener("click", () =>
                enterDoor("C", roomIAm),
            );
        } else if (room.doorState[myRoom].C === "ferme") {
            const imNewDoorC = document.createElement("img");
            imNewDoorC.src = "image/porteFerme.webp";
            imNewDoorC.width = "400";
            imNewDoorC.height = "408";
            imNewDoorC.alt = "porte ferme";
            imNewDoorC.id = "ImC";
            imNewDoorC.setAttribute("data-testid", "porteFermeC")
            buttonDoorDiv.D3.appendChild(imNewDoorC);
            imDoor.ImC = document.getElementById("ImC");
            imDoor.ImC.addEventListener("click", () =>
                openDoor("C", ImC, "ImOpenC", "D3", roomIAm),
            );
        } else {
        }
    }
    darknessOpacity()
}
//INFO PERSO
const infoDiv = document.createElement("div");
infoDiv.id = "info";

const nomDuPerso = document.createElement("span")
nomDuPerso.textContent =`${dataStat.statPerso[designationPerso].nom}`
nomDuPerso.id = "nomDuPerso"
infoDiv.appendChild(nomDuPerso)
infoDiv.appendChild(document.createElement("br"));

const hpSpan = document.createElement("span");
hpSpan.id = "hp";
hpSpan.style.color = "#860d0d"
hpSpan.textContent = `Points de vie : ${dataStat.statPerso[designationPerso].HPactual}/${dataStat.statPerso[designationPerso].HP}`;
infoDiv.appendChild(hpSpan);
infoDiv.appendChild(document.createElement("br"));

const mpSpan = document.createElement("span");
mpSpan.id = "mp";
mpSpan.style.color = "#4444af"
mpSpan.textContent = `Points de mana : ${dataStat.statPerso[designationPerso].MPactual}/${dataStat.statPerso[designationPerso].MP}`;
infoDiv.appendChild(mpSpan);
infoDiv.appendChild(document.createElement("br"));

infoDiv.appendChild(document.createElement("br"));

const damageTitle = document.createElement("span");
damageTitle.textContent = "Dégâts";
damageTitle.style.color = "#6a511f"
infoDiv.appendChild(damageTitle);
infoDiv.appendChild(document.createElement("br"));
infoDiv.appendChild(document.createElement("br"));
const degatsArmeG = document.createElement("span");
degatsArmeG.id = "degatsArmeG";
degatsArmeG.textContent = "Arme gauche : 1";
infoDiv.appendChild(degatsArmeG);
infoDiv.appendChild(document.createElement("br"));

const degatsArmeD = document.createElement("span");
degatsArmeD.id = "degatsArmeD";
degatsArmeD.textContent = "Arme droite : 1";
infoDiv.appendChild(degatsArmeD);
infoDiv.appendChild(document.createElement("br"));

const defenseSpan = document.createElement("span");
defenseSpan.id = "defense";
defenseSpan.textContent = "Défense : 0";
infoDiv.appendChild(defenseSpan);
infoDiv.appendChild(document.createElement("br"));

infoDiv.appendChild(document.createElement("br"));

const experienceSpan = document.createElement("span");
experienceSpan.id = "experience";
experienceSpan.textContent = "Expérience : 0/10";
infoDiv.appendChild(experienceSpan);
infoDiv.appendChild(document.createElement("br"));
const levelSpan = document.createElement("span");
levelSpan.id = "level";
levelSpan.textContent = `Niveau : 0`;
infoDiv.appendChild(levelSpan);
infoDiv.appendChild(document.createElement("br"));
const pointsSpan = document.createElement("span");
pointsSpan.id = "point";
pointsSpan.textContent = "Point(s) disponible(s) : 10";
infoDiv.appendChild(pointsSpan);

document.body.appendChild(infoDiv);

function update() {
    document.getElementById("nomDuPerso").textContent = `${dataStat.DonneeStatPerso.statPerso[designationPerso].nom}`
    document.getElementById("defense").textContent = `Défense : ${dataStat.DonneeStatPerso.stats[designationPerso].Def}`;
    document.getElementById("degatsArmeG").textContent =
        `Arme gauche : ${dataStat.DonneeStatPerso.stats[designationPerso].LeftHand}`;
    document.getElementById("degatsArmeD").textContent =
        `Arme droite : ${dataStat.DonneeStatPerso.stats[designationPerso].RightHand}`; 
    document.getElementById("hp").textContent =
        `Points de vie : ${dataStat.DonneeStatPerso.statPerso[designationPerso].HPactual}/${dataStat.DonneeStatPerso.statPerso[designationPerso].HP}`;
    document.getElementById("mp").textContent =
        `Points de mana : ${dataStat.DonneeStatPerso.statPerso[designationPerso].MPactual}/${dataStat.DonneeStatPerso.statPerso[designationPerso].MP}`;
    document.getElementById("experience").textContent =
        `Expérience : ${dataStat.DonneeStatPerso.statPerso[designationPerso].XP}`
    document.getElementById("level").textContent =
        `Niveau : ${dataStat.DonneeStatPerso.statPerso[designationPerso].LVL}`
        
        if (dataStat.DonneeStatPerso.statPerso[designationPerso].XP >= ratioLvlXp[dataStat.DonneeStatPerso.statPerso[designationPerso].LVL]) {
            dataStat.DonneeStatPerso.statPerso[designationPerso].XP -= ratioLvlXp[dataStat.DonneeStatPerso.statPerso[designationPerso].LVL]
            dataStat.DonneeStatPerso.statPerso[designationPerso].Point++
            dataStat.DonneeStatPerso.statPerso[designationPerso].LVL++
            dataStat.DonneeStatPerso.btnCheck = false
            update()
        }
    document.getElementById("point").textContent =
        `Point(s) disponible(s) : ${dataStat.DonneeStatPerso.statPerso[designationPerso].Point}`;
        gameOver()
}
function showSpells() {

Object.values(dataStat.DonneeStatPerso.statPerso[designationPerso].spells).forEach((value) => {
            imDoor.ALL[value].style.display="block"

})
}
function showSkills() {
    Object.values(dataStat.DonneeStatPerso.statPerso[designationPerso].spells).forEach((value) => {
       
                imDoor.ALL[value].style.display="block"
    
    })
    }
    update()