let roomIAm = "start"
const fightBeforeBoss = 10;
const buttonDoorDiv = {
    D1: document.getElementById("UN"),
    D2: document.getElementById("DEUX"),
    D3: document.getElementById("TROIS"),
    divEnn1 : document.getElementById("first"),
    divEnn2 : document.getElementById("second"),
    divEnn3 : document.getElementById("third"),
}

const imDoor = { 
    ImA: document.getElementById("ImA"),
    ImB: document.getElementById("ImB"),
    ImC: document.getElementById("ImC"),
    ImEnn1: document.getElementById('ImEnn1'),
    ImEnn2: document.getElementById('ImEnn2'),
    ImEnn3: document.getElementById('ImEnn3'),
    btnBack: document.getElementById('back'),
    allDoor: document.getElementById('porte')
}
const dialogue = { 
    txtId : document.getElementById('boiteDialogue'),
    verif : "ceci est une verification",
    txtOpen : "Vous ouvrez une porte...",
    txtEnterExplored : "Vous entrez dans une salle explorée",
    txtEnterInexplored : "Vous entrez dans une salle inexplorée",
    txtBack : "Vous revenez sur vos pas",
    txtFight : `Des ennemis surgissent de la porte !`,
    txtEmptyRoom : "La salle ouverte est vide",
}

let textDialogue = ""
let message = []

const room = {
    numberDoor: {
        start: 3,
    },
    doorState : {
        start : {
        A: "ferme",
        B: "ferme",
        C: "ferme",
        }
    }
}
let actualFight = []

const ennemiList = [ "orc" , "gobelin", ]

const ennemi = {
    orc : {IMG: "image/orc.avif", ATQ : 20, DEF : 10, HP : 200, DEX : 0, XP : 10, LOOT : { 1 : "orcHache", 2 : "orcCasque", 3 : "orcArmure", 4 : "potionVie", or : 50}},
    gobelin : {IMG: "image/gobelin.webp", ATQ : 10, DEF : 3, HP : 50, DEX : 5, XP : 5, LOOT : { 1 : "gobArc", 2 : "anneauDex", 3 : "potionMana", 4 : "potionVie", or : 20}},
}

const opInventaire = document.getElementById("Inventaire")

function boiteDialogue (type) {

    message.unshift(dialogue[type])

    if (message.length > 4) {
        message.pop();
    }

    let textDialogue = message.join("<br>")
    dialogue.txtId.innerHTML = textDialogue
}

const randomNumber = (max) =>
    Math.floor(Math.random() * max) + 1

function back() {
    roomIAm = roomIAm.slice(0, -1);
    if(!roomIAm) {
        roomIAm = "start";
        imDoor.btnBack.style.display="none";
    }
    boiteDialogue("txtBack")
    updateRenderBack(roomIAm);
}

//Ouverture de la porte, check si combat ou non selon une variable random de 1/3
function openDoor (door, image, idOpenDoor, imDiv, myRoom) {
    image.remove();
    if (roomIAm === "start") {
        room.doorState.start[door] = "ouvert"
    }
    else {
        room.doorState[myRoom][door] = "ouvert";
    }
    const imDoorOpen= document.createElement("img")
        imDoorOpen.src= 'image/porteOuverte.jpg'
        imDoorOpen.width= "400"
        imDoorOpen.height= "408"
        imDoorOpen.alt='porte ouverte'
        imDoorOpen.id= idOpenDoor
    buttonDoorDiv[imDiv].appendChild(imDoorOpen)
    imDoor[idOpenDoor] = document.getElementById(idOpenDoor)
    imDoor[idOpenDoor].addEventListener('click', () => enterDoor(door, myRoom))
    boiteDialogue("txtOpen")
    const checkFight = randomNumber("3")
    if (checkFight < 3) {
        actualFight = []
        imDoor.btnBack.style.display="none"
        opInventaire.style.display="none"
        imDoor.allDoor.style.display="none"
        setTimeout(() => {boiteDialogue('txtFight')}, 500);
        triggerFight();
    }
    else {
        setTimeout(() => {boiteDialogue('txtEmptyRoom')}, 500);
    }
}
function triggerFight() {
    const numberOfEnnemi = randomNumber(3)
    const findIndexEnnemi = ennemiList[randomNumber(ennemiList.length) - 1]
    actualFight.push(findIndexEnnemi)
    if (actualFight.length < numberOfEnnemi) {
        triggerFight()
    }
    else {
        updateRenderFight(actualFight[0], actualFight[1], actualFight[2])
        console.log(actualFight)
    }
    
}
//Si on clique sur la porte ouverte
function enterDoor (door, myRoom) {
    // SI CLIC DEPUIS LE START 
    if (roomIAm === "start") {
        // ON VA A LA SALLE ! 
        roomIAm = door
        imDoor.btnBack.style.display="block";
        // SI LA SALLE EXISTE DEJA ON CHARGE LES SALLES VIA UPDATERENDERBACK()
        if (room.numberDoor[door]) {
            updateRenderBack(roomIAm)
            boiteDialogue("txtEnterExplored")
        }
        //SI LA SALLE NEXISTE PAS ON CREE LES SALLES
        else {
                room.numberDoor[door] = randomNumber("3");
                if (room.numberDoor[door] === 3) {
                room.doorState[door] = {A: "ferme", B: "ferme", C: "ferme"}
                }
                if (room.numberDoor[door] === 2) {
                    room.doorState[door] = {A: "ferme", B: "ferme"}
                }
                if (room.numberDoor[door] === 1) {
                    room.doorState[door] = {A: "ferme"}
                }
                boiteDialogue("txtEnterInexplored")
                updateRender(roomIAm)    
        }
    }
    //DEPUIS UNE AUTRE SALLE QUE LA SALLE DE DEPART
    else {
        // ON VA A LA SALLE
        roomIAm = roomIAm + door
        //SI LA SALLE EXISTE DEJA ON CHARGE LA SALLE VIA UPDATERENDERBACK()
        if (room.numberDoor[[myRoom]+[door]]) {
            updateRenderBack(roomIAm)
            boiteDialogue("txtEnterExplored")
        }
        //SI LA SALLE N'EXISTE PAS ON CREE LES SALLES ! 
        else {
                room.numberDoor[[myRoom]+[door]] = randomNumber("3");
                if (room.numberDoor[[myRoom]+[door]] === 3) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme", B: "ferme", C: "ferme"}
                }
                if (room.numberDoor[[myRoom]+[door]] === 2) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme", B: "ferme"}
                }
                if (room.numberDoor[[myRoom]+[door]] === 1) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme"}
                }
                boiteDialogue("txtEnterInexplored")
                updateRender(roomIAm);
                }
        }

    }
    

function delDoor() {
    try { imDoor.ImA.remove() }
            catch { }
        try { imDoor.ImB.remove() }
            catch { }
        try { imDoor.ImC.remove() }
            catch { }
        try { imDoor.ImOpenA.remove(); }
            catch { }
        try { imDoor.ImOpenB.remove() }
            catch { }
        try { imDoor.ImOpenC.remove() }
            catch { }
}
function updateRender(myRoom) {
    delDoor()
    if(room.numberDoor[myRoom] === 1) { 
            const imNewDoorA= document.createElement("img")
            imNewDoorA.src= 'image/porteFerme.jpg'
            imNewDoorA.width= "400"
            imNewDoorA.height= "408"
            imNewDoorA.alt='porte ferme'
            imNewDoorA.id="ImA"
            buttonDoorDiv.D1.appendChild(imNewDoorA)
            imDoor.ImA = document.getElementById("ImA")
            imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
        }
    else if (room.numberDoor[myRoom] === 2) {
        const imNewDoorA= document.createElement("img")
        imNewDoorA.src= 'image/porteFerme.jpg'
        imNewDoorA.width= "300"
        imNewDoorA.height= "408"
        imNewDoorA.alt='porte ferme'
        imNewDoorA.id="ImA"
        buttonDoorDiv.D1.appendChild(imNewDoorA)
        imDoor.ImA = document.getElementById("ImA")
        imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))

        const imNewDoorB= document.createElement("img")
        imNewDoorB.src= 'image/porteFerme.jpg'
        imNewDoorB.width= "300"
        imNewDoorB.height= "408"
        imNewDoorB.alt='porte ferme'
        imNewDoorB.id="ImB"
        buttonDoorDiv.D2.appendChild(imNewDoorB)
        imDoor.ImB = document.getElementById("ImB")
        imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))
    }
    
    else {
        const imNewDoorA= document.createElement("img")
        imNewDoorA.src= 'image/porteFerme.jpg'
        imNewDoorA.width= "300"
        imNewDoorA.height= "408"
        imNewDoorA.alt='porte ferme'
        imNewDoorA.id="ImA"
        buttonDoorDiv.D1.appendChild(imNewDoorA)
        imDoor.ImA = document.getElementById("ImA")
        imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))

        const imNewDoorB= document.createElement("img")
        imNewDoorB.src= 'image/porteFerme.jpg'
        imNewDoorB.width= "300"
        imNewDoorB.height= "408"
        imNewDoorB.alt='porte ferme'
        imNewDoorB.id="ImB"
        buttonDoorDiv.D2.appendChild(imNewDoorB)
        imDoor.ImB = document.getElementById("ImB")
        imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))

        const imNewDoorC= document.createElement("img")
        imNewDoorC.src= 'image/porteFerme.jpg'
        imNewDoorC.width= "300"
        imNewDoorC.height= "408"
        imNewDoorC.alt='porte ferme'
        imNewDoorC.id="ImC"
        buttonDoorDiv.D3.appendChild(imNewDoorC)
        imDoor.ImC = document.getElementById("ImC")
        imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
    }
}

function updateRenderBack(myRoom) {
    delDoor()
    if (room.doorState[myRoom].A === "ouvert") {
        const imNewDoorA= document.createElement("img")
            imNewDoorA.src= 'image/porteOuverte.jpg'
            imNewDoorA.width= "400"
            imNewDoorA.height= "408"
            imNewDoorA.alt='porte ouverte'
            imNewDoorA.id="ImOpenA"
            buttonDoorDiv.D1.appendChild(imNewDoorA)
            imDoor.ImOpenA = document.getElementById("ImOpenA")
            imDoor.ImOpenA.addEventListener('click', () => enterDoor("A", roomIAm))
    }
    else if (room.doorState[myRoom].A === "ferme") {
        const imNewDoorA= document.createElement("img")
            imNewDoorA.src= 'image/porteFerme.jpg'
            imNewDoorA.width= "300"
            imNewDoorA.height= "408"
            imNewDoorA.alt='porte ferme'
            imNewDoorA.id="ImA"
            buttonDoorDiv.D1.appendChild(imNewDoorA)
            imDoor.ImA = document.getElementById("ImA")
            imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
    }
    else {
        console.log("bizarre")
    }

    if (room.doorState[myRoom].B === "ouvert") {
        const imNewDoorB= document.createElement("img")
            imNewDoorB.src= 'image/porteOuverte.jpg'
            imNewDoorB.width= "400"
            imNewDoorB.height= "408"
            imNewDoorB.alt='porte ouverte'
            imNewDoorB.id="ImOpenB"
            buttonDoorDiv.D2.appendChild(imNewDoorB)
            imDoor.ImOpenB = document.getElementById("ImOpenB")
            imDoor.ImOpenB.addEventListener('click', () => enterDoor("B", roomIAm))
    }
    else if (room.doorState[myRoom].B === "ferme") {
        const imNewDoorB= document.createElement("img")
            imNewDoorB.src= 'image/porteFerme.jpg'
            imNewDoorB.width= "300"
            imNewDoorB.height= "408"
            imNewDoorB.alt='porte ferme'
            imNewDoorB.id="ImB"
            buttonDoorDiv.D2.appendChild(imNewDoorB)
            imDoor.ImB = document.getElementById("ImB")
            imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))
    }
    else {
        
    }

    if (room.doorState[myRoom].C === "ouvert") {
        const imNewDoorC= document.createElement("img")
            imNewDoorC.src= 'image/porteOuverte.jpg'
            imNewDoorC.width= "400"
            imNewDoorC.height= "408"
            imNewDoorC.alt='porte ouverte'
            imNewDoorC.id="ImOpenC"
            buttonDoorDiv.D3.appendChild(imNewDoorC)
            imDoor.ImOpenC = document.getElementById("ImOpenC")
            imDoor.ImOpenC.addEventListener('click', () => enterDoor("C", roomIAm))
    }
    else if (room.doorState[myRoom].C === "ferme") {
        const imNewDoorC= document.createElement("img")
            imNewDoorC.src= 'image/porteFerme.jpg'
            imNewDoorC.width= "300"
            imNewDoorC.height= "408"
            imNewDoorC.alt='porte ferme'
            imNewDoorC.id="ImC"
            buttonDoorDiv.D3.appendChild(imNewDoorC)
            imDoor.ImC = document.getElementById("ImC")
            imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
    }
    else {
        
    } 
}
function attaque () {}
function updateRenderFight(type1, type2, type3) {
    if (type1 !== undefined) {
    const imEnnemi = document.createElement("img")
        imEnnemi.src = ennemi[type1].IMG
        imEnnemi.width= "100"
        imEnnemi.height= "100"
        imEnnemi.alt='Ennemi féroce !'
        imEnnemi.id="ImEnn1"
        buttonDoorDiv.divEnn1.appendChild(imEnnemi)
        imDoor.ImEnn1.addEventListener('click', () => attaque())
    }
        if (type2 !== undefined) {
            const imEnnemi2 = document.createElement("img")
                imEnnemi2.src = ennemi[type2].IMG
                imEnnemi2.width= "100"
                imEnnemi2.height= "100"
                imEnnemi2.alt='Ennemi féroce !'
                imEnnemi2.id="ImEnn2"
                buttonDoorDiv.divEnn2.appendChild(imEnnemi2)
                imDoor.ImEnn2.addEventListener('click', () => attaque())
        }
            if (type3 !== undefined) {
            const imEnnemi3 = document.createElement("img")
                imEnnemi3.src = ennemi[type3].IMG
                imEnnemi3.width= "100"
                imEnnemi3.height= "100"
                imEnnemi3.alt='Ennemi féroce !'
                imEnnemi3.id="ImEnn3"
                buttonDoorDiv.divEnn3.appendChild(imEnnemi3)
                imDoor.ImEnn3.addEventListener('click', () => attaque())
            }
}

//Ouvrir porte 
imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))
imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
//revenir en arriere
imDoor.btnBack.addEventListener('click', () => back(roomIAm))



let dataStat = {}

document.addEventListener('DOMContentLoaded', async function () {
    async function getData() {
        const res = await fetch("http://localhost:8000/all-data", {
            method: "GET",
        });    
        const json = await res.json();
        dataStat = json
        return dataStat; 
    }
    dataStat = await getData(); 
    console.log(dataStat); 
});

opInventaire.addEventListener('click', () => savePath())

async function savePath () {
    const donjonpath = {
        room, 
        roomIAm,
    }
    const res = await fetch('http://localhost:8000/all-data', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ donjonpath }),
    })
    const json = await res.json()
    window.location.href = 'index.html';
}