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
    sortFeu: document.getElementById("btnFeu"),
    sortFoudre: document.getElementById("btnFoudre"),
    sortArcane: document.getElementById("btnArcane"),
    sortBlast: document.getElementById("btnBlast"),
};
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
const marketMemory = { start: [], };
let itemList = [];
let dataStat = {
    DonneeStatPerso: {
        mainDroite: 0,
        mainGauche: 0,
        def: 0,
    },
    equipement: {
        Chest: "Chest",
        Head: "Head",
        LeftHand: "",
        Neck: "Neck",
        RightHand: "",
        Ring: "Ring",
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
        Dexterite: 0,
        Force: 0,
        HP: 50,
        HPactual: 50,
        Intelligence: 0,
        LVL: 0,
        MP: 50,
        MPactual: 50,
        Point: 0,
        Vitalite: 0,
        Volonte: 0,
        XP: 0,
        spells: []
    },
    marketMemory: {start : [], }
};
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
    parcheminLumiere: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 100,
        id: "parcheminLumiere",
        type: "Scroll"
    },
    sortFoudre: {
        nom: "un parchemin mystérieux",
        IMG: "image/parchemin.webp",
        cost: 300,
        id: "sortFoudre",
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
const ennemiList = ["orc", "gobelin"];
const ennemi = {
    orc: {
        txt: "un orc",
        IMG: "image/orc.webp",
        IMGmort: "image/orcMort.webp",
        IMGATQ: "image/orcATQ1.webp",
        ImID: "",
        div:"",
        ATQ: 20,
        CRIT: 40,
        DEF: 10,
        HP: 300,
        DEX: 0,
        XP: 10,
        LOOT: {
            orcEpee : 99,
            orcCasque: 95,
            potionVie: 25,
        },
        or: 50,
    },
    gobelin: {
        txt: "un gobelin",
        IMG: "image/gobelin.webp",
        IMGmort: "image/gobelinMort.webp",
        IMGATQ: "image/gobelin.webp",
        ImID: "",
        div:"",
        ATQ: 10,
        CRIT: 30,
        DEF: 3,
        HP: 50,
        DEX: 5,
        XP: 5,
        LOOT: {
            gobArc : 97,
            anneauDexterite : 95,
            potionMana : 15,
            potionVie: 20,
        },
        or: 20, 
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
    imDoorOpen.setAttribute("data-testid", "firstOpenDoor")
    buttonDoorDiv[imDiv].appendChild(imDoorOpen);
    imDoor[idOpenDoor] = document.getElementById(idOpenDoor);
    imDoor[idOpenDoor].addEventListener("click", () => enterDoor(door, myRoom));
    boiteDialogue("txtOpen");
    const checkFight = randomNumber("3");
    //RISQUE DE FAIRE DES COMBATS
    if (checkFight) {
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
        boiteDialogue("txtFight");
        triggerFight();
    } else {
        boiteDialogue("txtEmptyRoom");
    }
}
//Compteur pour différencier les differents ennemis du meme type dans le combat.
let compteur = { orc: 1, gobelin: 1 };
let numberEnn = 0;
let divEnnemi = 1;
function triggerFight() {
    divEnnemi = 1;
    if (roomIAm === "start") {
        numberEnn = 1;
    } else {
        const splitRoom = roomIAm.split("");
        numberEnn = splitRoom.length;
    }
    if (numberEnn > 5) {
        numberEnn = 5;
    }
    for (let i = 0; i < numberEnn; i++) {
        const findIndexEnnemi = ennemiList[randomNumber(ennemiList.length) - 1];
        actualFight.push(findIndexEnnemi);
        const nomEnnemi = `${findIndexEnnemi}${compteur[findIndexEnnemi]}`;
        actualEnnemiStatut[nomEnnemi] = { ...ennemi[findIndexEnnemi] };
        compteur[findIndexEnnemi]++;
        const where = "divEnn" + divEnnemi;
        const ImEnn = "ImEnn" + divEnnemi;
        updateRenderFight(findIndexEnnemi, nomEnnemi, where, ImEnn);
        divEnnemi++;
    }
    buttonDoorDiv.panneauAttaque.style.display="block"
}
let dark = false;
//Si on clique sur la porte ouverte
function enterDoor(door, myRoom) {
    const darknessOpacity = getComputedStyle(document.documentElement).getPropertyValue('--darkness-opacity')
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
                const marchand = randomNumber("100");
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
        buttonDoorDiv.D3.appendChild(imNewDoorC);
        imDoor.ImC = document.getElementById("ImC");
        imDoor.ImC.addEventListener("click", () =>
            openDoor("C", ImC, "ImOpenC", "D3", roomIAm),
        );
    }
    darknessOpacity()
}
let ImToDel = [];

function genererChiffre(base, variation) {
    let randomVariation = (Math.random() * (2 * variation)) - variation;
    let resultat = base + randomVariation;
    return Math.round(resultat);
}

let nombreDegatsTemporaire = ""
let isAttacking = false
let lastAttackDelay = 0
let attack = false

let skills = {
    allATQ : {
        effect : () => {
            Object.entries(actualEnnemiStatut).forEach((key, value) => 
            value.forEach((cle, valeur) => {
                if(cle === "HP") {
                    const randomAttaque = genererChiffre(dataStat.DonneeStatPerso.mainGauche +
                    dataStat.DonneeStatPerso.mainDroite, 10)
                    valeur -= randomAttaque
                }
            }))
            dataStat.DonneeStatPerso.statPerso.MPactual -= 20
        },
        state: false,
        IMG: "image/allATQ.webp"
    },
    doubleATQ: {
        effect : () => { 
            genererChiffre((dataStat.DonneeStatPerso.mainGauche +
            dataStat.DonneeStatPerso.mainDroite)*2, 10)
            dataStat.DonneeStatPerso.statPerso.MPactual -= 10
        },
        state: false,
        IMG : "image/doubleATQ.webp"
    },
    steal : {
        effect : "on va voir"
    }
}
let spells = {
    sortFeu : {
        effect: () => 10 + (dataStat.DonneeStatPerso.statPerso.Intelligence * 10),
        manaCost: 20,
        variation: 5,
        target:"solo",
        repetition:1,
        state:true,
        nom: "sortFeu",
        IMG: "image/sortFeu.webp",
        width: "300"
    },
    sortFoudre : {
        effect: () => 5 + (dataStat.DonneeStatPerso.statPerso.Intelligence * 3),
        manaCost: 20,
        variation: 30,
        target: "random",
        repetition: 3,
        state:true,
        nom: "sortFoudre",
        IMG: "image/sortFoudre7.gif",
        width: "1300"
    },
    sortArcane : {
        effect: () => 5 + (dataStat.DonneeStatPerso.statPerso.Intelligence * 3),
        manaCost: 20,
        variation: 15,
        target: "all",
        repetition: 1,
        state:true,
        nom: "sortArcane",
        IMG: "image/sortArcane.webp",   
        width: "1600" 
    },
    sortBlast : {
        effect: () => 5 + (dataStat.DonneeStatPerso.statPerso.Intelligence * 3),
        manaCost: 20,
        variation: 5,
        target: "all",
        repetition: 1,
        state:true,
        nom: "sortArcane",
        IMG: "image/sortBlast.webp",   
        width: "500" 
    }
}
let skillInUse = ""
let spellInUse = ""
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
    } else if (type === 'spell') {
        attack = false
        skillInUse= ""
        buttonDoorDiv.allSkill.style.display="none"
        buttonDoorDiv.allSpell.style.display="block"
        document.body.style.cursor = "default"  
        showSpells()
    }} else return
}
function spell (nom, nomGen, div,ImEnn) {
    if (!spellInUse) {return}
    if (spells[spellInUse].state) {
        if (isAttacking) return; 
    else {
    isAttacking = true; 
    const keys = Object.keys(actualEnnemiStatut);
    lastAttackDelay = (keys.length - 1) * 1300 + 800;
    document.body.style.cursor ="default"
    buttonDoorDiv.allSpell.style.display="none"
    const spell = document.createElement("img")
    spell.id = "spell"
    spell.src = spells[spellInUse].IMG
    spell.width = spells[spellInUse].width;
    spell.height = "308";
    buttonDoorDiv[div].appendChild(spell)
    const SPELLDMG = spells[spellInUse].effect()
    if (spells[spellInUse].target === "solo"){
        const RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
        actualEnnemiStatut[nom].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM
        buttonDoorDiv[[div]+"degats"].appendChild(spanDegats)
    }   
    else if (spells[spellInUse].target === "random") {
        for(let i = 0; i < spells[spellInUse].repetition; i++) {
        const ennemiID = Object.keys(actualEnnemiStatut)
        const randomKey = ennemiID[Math.floor(Math.random() * ennemiID.length)]     
        const RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
        actualEnnemiStatut[randomKey].HP -= RANDOM
        let spanDegats = document.createElement("p")
            spanDegats.id = "spanDegats"
            spanDegats.textContent = "-"+RANDOM+" "
        buttonDoorDiv[[actualEnnemiStatut[randomKey].div]+"degats"].appendChild(spanDegats)   
        }
    } 
    else if (spells[spellInUse].target === "all") {
        const ennemiID = Object.keys(actualEnnemiStatut)
        ennemiID.forEach((value) => {
            const RANDOM = genererChiffre(SPELLDMG, spells[spellInUse].variation)
            actualEnnemiStatut[value].HP -= RANDOM
            let spanDegats = document.createElement("p")
                spanDegats.id = "spanDegats"
                spanDegats.textContent = "-"+RANDOM+" "
            buttonDoorDiv[[actualEnnemiStatut[value].div]+"degats"].appendChild(spanDegats)  
        })
    }
    dataStat.DonneeStatPerso.statPerso.MPactual -= spells[spellInUse].manaCost
    setTimeout(() => {
        const delSpell = document.getElementById("spell")
        delSpell.remove() 
        const spanDegats = document.querySelectorAll("p")
        spanDegats.forEach(span => {
            span.remove()});
    update()
    const ennemiID = Object.keys(actualEnnemiStatut)  
    ennemiID.forEach((value) => {
        if(actualEnnemiStatut[value].HP <= 0) { 
            const ennemiGen = value.replace(/\s*[0-9]+\s*/g, '')
            const findDiv = actualEnnemiStatut[value].div
            const findImEnn = actualEnnemiStatut[value].ImID
            loot(value, ennemiGen, findDiv, findImEnn)
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
    },1000)}} 
    else  return 
}
function skill(nom, nomGen, div,ImEnn) {
    if (!skillInUse) {return}
    if (skills[skillname].state) {
        if (isAttacking) return; 
    else {
    isAttacking = true; }
    const skill = document.createElement("img")
    skill.id = "skill"
    skill.src = "image/"+[skillname]+".webp"
    skill.width = "400";
    skill.height = "208";
    buttonDoorDiv[div].appendChild(skill)
    setTimeout(() => {
        const delAttaque = document.getElementById("skill")
        delAttaque.remove()
        const randomAttaque = genererChiffre(dataStat.DonneeStatPerso.mainGauche +
        dataStat.DonneeStatPerso.mainDroite, 10)
    actualEnnemiStatut[nom].HP -= randomAttaque
    if (actualEnnemiStatut[nom].HP > 0) {
        boiteDialogue("txtSkill", ennemi[nomGen].txt);
        vicOrRetaliation()
        setTimeout(() => {
            document.body.style.cursor ="default"
            skillInUse = ""
            isAttacking = false;
        }, lastAttackDelay + 100);
    } else {
        loot(nom, nomGen, div, ImEnn)
        vicOrRetaliation()
        setTimeout(() => {
            document.body.style.cursor ="default"
            skillInUse = ""
            isAttacking = false;
        }, lastAttackDelay + 100);
    }},1000)} 
    else  return 
}
function attaque(nom, nomGen, div, ImEnn) {
    if (attack) {
        if (isAttacking) return; 
    else {
        const keys = Object.keys(actualEnnemiStatut);
        lastAttackDelay = (keys.length - 1) * 1300 + 800;
    isAttacking = true; }
    const attaque = document.createElement("img")
        attaque.id = "attaque"
        attaque.src = "image/attaque.webp"
        attaque.width = "400";
        attaque.height = "208";
        buttonDoorDiv[div].appendChild(attaque)
        let randomAttaque = genererChiffre(dataStat.DonneeStatPerso.mainGauche +
            dataStat.DonneeStatPerso.mainDroite, 10)
            while (randomAttaque < 0) {
                randomAttaque++
            }
        let spanDegats = document.createElement("span")
        spanDegats.id = "spanDegats"
        spanDegats.textContent = "-"+randomAttaque
        buttonDoorDiv[[div]+"degats"].appendChild(spanDegats)
    setTimeout(() => {
        const delAttaque = document.getElementById("attaque")
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
        vicOrRetaliation()
        setTimeout(() => {
            document.body.style.cursor ="default"
            attack = false
            isAttacking = false;
        }, lastAttackDelay + 100);
    }},1000)} 
}
function vicOrRetaliation() {
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
            update()
            isAttacking = false;
        },1000)
        
    }
    else {
        const keys = Object.keys(actualEnnemiStatut);
        lastAttackDelay = (keys.length - 1) * 1300 + 800;
        keys.forEach((key, index) => {
            setTimeout(() => {  
                const CRT = randomNumber(100)
            if (CRT > 90) {
                const rand = genererChiffre(actualEnnemiStatut[key].CRIT, 10)
                nombreDegatsTemporaire ="Coup critique ! ! ! !"+"-"+ rand +" "+  "dégats"
                dataStat.DonneeStatPerso.statPerso.HPactual -= rand
                update()
            } else {
                const rand = genererChiffre(actualEnnemiStatut[key].ATQ,5)
                nombreDegatsTemporaire = "-" + rand + " " + "dégats"
                dataStat.DonneeStatPerso.statPerso.HPactual -= rand
                update()
            }
                const OldImg = document.getElementById(actualEnnemiStatut[key].ImID)
                OldImg.style.display="none"
                const imAttaque = document.createElement("img")
                const nomGenerique = key.replace(/\s*[0-9]+\s*/g, '')
                imAttaque.src = ennemi[nomGenerique].IMGATQ
                imAttaque.style.zIndex="5"
                imAttaque.style.width="400px"
                imAttaque.style.height="400px"
                buttonDoorDiv.divEnn3.appendChild(imAttaque)
                let spanDegats = document.createElement("span")
                spanDegats.id = "spanDegats"
                if(nombreDegatsTemporaire !== undefined){
                    spanDegats.textContent =nombreDegatsTemporaire
                    buttonDoorDiv.ennemiDegats.appendChild(spanDegats)
                    nombreDegatsTemporaire = ""
                } 
                else {
                    spanDegats.textContent ="Raté !"
                    buttonDoorDiv.ennemiDegats.appendChild(spanDegats)
                    nombreDegatsTemporaire = ""
                }
                    setTimeout(() => {
                    OldImg.style.display="block"
                    imAttaque.remove()
                    spanDegats.remove()
                    },800)
                },index * 1300) 
                
            })
        }
    }
function loot(nom, nomGen, div, ImEnn) {
    boiteDialogue("txtKill", ennemi[nomGen].txt);
        dataStat.DonneeStatPerso.statPerso.XP += actualEnnemiStatut[nom].XP;
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
        imEnnemi.width = "300";
        imEnnemi.height = "300";
        imEnnemi.alt = "Ennemi féroce !";
        imEnnemi.id = ImEnn;
        buttonDoorDiv[div].appendChild(imEnnemi);
        ImToDel.push(ImEnn);
        buttonDoorDiv[div].removeEventListener("click", attaque);
}
function darknessOpacity() {
    let numberEnn = 0
    if (roomIAm === "start") {roomIAm = ""}
    const splitRoom = roomIAm.split("");
    numberEnn = (splitRoom.length/20)
    document.documentElement.style.setProperty('--darkness-opacity', numberEnn)
    if (roomIAm ==="") {roomIAm = "start"}
}
function updateRenderFight(type, nomEnnemi, div, ImEnn) {
    const imEnnemi = document.createElement("img");
    imEnnemi.src = ennemi[type].IMG;
    imEnnemi.width = "300";
    imEnnemi.height = "300";
    imEnnemi.alt = "Ennemi féroce !";
    imEnnemi.id = ImEnn;
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
imDoor.sortFeu.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortFeu"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.sortFoudre.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortFoudre"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.sortArcane.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortArcane"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
})
imDoor.sortBlast.addEventListener("click",() =>{ 
    if(!isAttacking){
    spellInUse = "sortBlast"
    document.body.style.cursor = "url('image/cursorMGC.png'), auto"} else return
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
    Object.entries(dataStat.DonneeStatPerso.marketMemory).forEach(
        ([key, value]) => {
            marketMemory[key] = value;
        },
    );
    backCheckFn();
    boiteDialogue("recDonnee");
    updateRenderBack(roomIAm);
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
            "parcheminLumiere",
            "sortFoudre",
        ],
    }
const opInventaire = document.getElementById("Inventaire");
opInventaire.addEventListener("click", () => savePath());

let money = 0

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
            imNewDoorA.setAttribute("data-testid", "firstOpenDoor")
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
            imNewDoorA.setAttribute("data-testid", "firstClosedDoor")
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
const infoDiv = document.createElement("div");
infoDiv.id = "info";

const hpSpan = document.createElement("span");
hpSpan.id = "hp";
hpSpan.style.color = "#860d0d"
hpSpan.textContent = `Points de vie : ${dataStat.statPerso.HPactual}/${dataStat.statPerso.HP}`;
infoDiv.appendChild(hpSpan);
infoDiv.appendChild(document.createElement("br"));

const mpSpan = document.createElement("span");
mpSpan.id = "mp";
mpSpan.style.color = "#4444af"
mpSpan.textContent = `Points de mana : ${dataStat.statPerso.MPactual}/${dataStat.statPerso.MP}`;
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

document.body.appendChild(infoDiv);
function update() {
    document.getElementById("defense").textContent = `Défense : ${dataStat.DonneeStatPerso.def}`;
    document.getElementById("degatsArmeG").textContent =
        `Arme gauche : ${dataStat.DonneeStatPerso.mainDroite}`;
    document.getElementById("degatsArmeD").textContent =
        `Arme droite : ${dataStat.DonneeStatPerso.mainGauche}`; 
    document.getElementById("hp").textContent =
        `Points de vie : ${dataStat.DonneeStatPerso.statPerso.HPactual}/${dataStat.DonneeStatPerso.statPerso.HP}`;
    document.getElementById("mp").textContent =
        `Points de mana : ${dataStat.DonneeStatPerso.statPerso.MPactual}/${dataStat.DonneeStatPerso.statPerso.MP}`;
    document.getElementById("experience").textContent =
        `Expérience : ${dataStat.DonneeStatPerso.statPerso.XP}`
    document.getElementById("level").textContent =
        `Niveau : ${dataStat.DonneeStatPerso.statPerso.LVL}`
}
function showSpells() {
Object.values(dataStat.DonneeStatPerso.statPerso.spells).forEach((value) => {
    
            imDoor[value].style.display="block"

})
}