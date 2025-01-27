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
    fightDoor: document.getElementById("fightDoor"),
    market: document.getElementById("market"),
    itemMarket: document.getElementById("itemMarket"),
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
    reset: document.getElementById("reset")
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
    txtAttaque: `Vous attaquez un ennemi`,
    txtKill: `Vous attaquez et tuez un ennemi`,
    txtMarchand: `Il y a un marchand dans cette salle`,
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
let itemList = [
    
];
const item = {
    anneauForce: {
        IMG: "image/anneauForce.webp",
        cost: 100,
        type: "Ring"
    },
    espadon: {
        IMG: "image/espadon.webp",
        cost: 200,
        type: "LeftHand"
    },
    anneauDexterite: {
        IMG: "image/anneauForce.webp",
        cost: 100,
        type: "Ring"
    },
    armureEnFer: {
        IMG: "image/armureEnFer.webp",
        cost: 200,
        type: "Chest"
    },
    armureEnCuir: {
        IMG: " image/armureEnCuir.webp",
        cost: 100,
        type: "Chest"
    },
    casqueEnCuir: {
        IMG: "image/casqueEnCuir.webp",
        cost: 100,
        type: "Head"
    },
    dague: {
        IMG: "image/dague.webp",
        cost: 100,
        type: "LeftHand"
    },
    potionVie: {
        IMG: "image/potionVie.webp",
        cost: 50,
        type: "Object",
        nombre : 1
    },
    potionMana: {
        IMG: "image/potionMana.webp",
        cost: 50,
        type: "Object",
        nombre : 1
    },
    pain: {
        IMG: "image/pain.webp",
        cost: 30,
        type: "Object"
    },
    torche: {
        IMG: "image/torche.webp",
        cost: 50,
        type: "LeftHand",
        nombre : 1
    },
    parcheminFlamme: {
        IMG: "image/parchemin.webp",
        cost: 150,
        id: "parcheminFlamme",
        type: "Scroll"
    },
    parcheminLumiere: {
        IMG: "image/parchemin.webp",
        cost: 100,
        id: "parcheminLumiere",
        type: "Scroll"
    },
    parcheminBlackHole: {
        IMG: "image/parchemin.webp",
        cost: 300,
        id: "parcheminBlackHole",
        type: "Scroll"
    },
};
let actualFight = [];
let actualEnnemiStatut = {};
const ennemiList = ["orc", "gobelin"];
const ennemi = {
    orc: {
        IMG: "image/orc.webp",
        IMGmort: "image/orcMort.webp",
        ATQ: 20,
        DEF: 10,
        HP: 10,
        DEX: 0,
        XP: 10,
        LOOT: {
            orcHache : 5,
            orcCasque: 5,
            potionVie: 25,
            or: 50,
        },
    },
    gobelin: {
        IMG: "image/gobelin.webp",
        IMGmort: "image/gobelinMort.webp",
        ATQ: 10,
        DEF: 3,
        HP: 10,
        DEX: 5,
        XP: 5,
        LOOT: {
            gobArc : 7,
            anneauDex : 5,
            potionMana : 15,
            potionVie: 20,
            or: 20, 
        },
    },
};

function boiteDialogue(type) {
    if (type !== "recDonnee") {
        message.unshift(dialogue[type]);

        if (message.length > 4) {
            message.pop();
        }

        let textDialogue = message.join("<br>");
        dialogue.txtId.innerHTML = textDialogue;
    } else {
        let textDialogue = message.join("<br>");
        dialogue.txtId.innerHTML = textDialogue;
    }
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
        console.log(actualEnnemiStatut);
        const where = "divEnn" + divEnnemi;
        const ImEnn = "ImEnn" + divEnnemi;
        updateRenderFight(findIndexEnnemi, nomEnnemi, where, ImEnn);
        divEnnemi++;
    }
}
let dark = false;
//Si on clique sur la porte ouverte
function enterDoor(door, myRoom) {
    const darknessOpacity = getComputedStyle(document.documentElement).getPropertyValue('--darkness-opacity')
    if (darknessOpacity === 1) {
        debugger
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
function attaque(nom, type, div, ImEnn) {
    console.log(actualEnnemiStatut);
    const attaque = document.createElement("img")
        attaque.id = "attaque"
        attaque.src = "image/attaque.webp"
        attaque.width = "400";
        attaque.height = "208";
        buttonDoorDiv[div].appendChild(attaque)
    setTimeout(() => {
        const delAttaque = document.getElementById("attaque")
        delAttaque.remove()
    },1500)
    actualEnnemiStatut[nom].HP -=
        dataStat.DonneeStatPerso.mainGauche +
        dataStat.DonneeStatPerso.mainDroite;
    if (actualEnnemiStatut[nom].HP > 0) {
        boiteDialogue("txtAttaque");
    } else {
        console.log(actualEnnemiStatut);
        dataStat.DonneeStatPerso.statPerso.XP += actualEnnemiStatut[nom].XP;
        dataStat.DonneeStatPerso.money += actualEnnemiStatut[nom].LOOT.or
        delete actualEnnemiStatut[nom]
        imDoor[ImEnn].remove();
        const imEnnemi = document.createElement("img");
        imEnnemi.src = ennemi[type].IMGmort;
        imEnnemi.width = "300";
        imEnnemi.height = "300";
        imEnnemi.alt = "Ennemi féroce !";
        imEnnemi.id = ImEnn;
        buttonDoorDiv[div].appendChild(imEnnemi);
        ImToDel.push(ImEnn);
        console.log(ImToDel)
        buttonDoorDiv[div].removeEventListener("click", attaque);
        boiteDialogue("txtKill");
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
                imDoor.fightDoor.remove();
            },1500)
        }
    }
}
function loot () {
    const rawEnnemi = ImToDel.forEach((value)=>{value.replace(/\s*[0-9]+\s*/g, '')})
    rawEnnemi.forEach((value) => { money += ennemi[value].LOOT.or

    })
    
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
    buttonDoorDiv[div].appendChild(imEnnemi);
    imDoor[ImEnn] = document.getElementById(ImEnn);
    imDoor[ImEnn].addEventListener("click", () =>
        attaque(nomEnnemi, type, div, ImEnn),
    );
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
        Dexterite: "",
        Force: "",
        HP: "",
        Intelligence: "",
        LVL: "",
        MP: "",
        Point: "",
        Vitalite: "",
        Volonte: "",
        XP: "",
    },
    marketMemory: {start : [], }
};
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
            "parcheminFlamme",
            "parcheminLumiere",
            "parcheminBlackHole",
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
        money
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
            console.log("le marchand n'a rien à proposer")
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
