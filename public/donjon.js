let roomIAm = "start"
let roomBefore = ''
const fightBeforeBoss = 10;
const buttonDoorDiv = {
    D1: document.getElementById("UN"),
    D2: document.getElementById("DEUX"),
    D3: document.getElementById("TROIS"),
}

const imDoor = { 
    ImA: document.getElementById("ImA"),
    ImB: document.getElementById("ImB"),
    ImC: document.getElementById("ImC"),
}

const room = {
    numberDoor: {
        start: 3,
        A: 0,
        B: 0,
        C: 0,
    },
    doorState : {
        start : {
        A: false,
        B: false,
        C: false,
        }
    }
}


const randomNumber = () =>
    Math.floor(Math.random() * 3) + 1

//Ouverture de la porte, check si combat ou non selon une variable random
function openDoor (door, image, idOpenDoor, imDiv, myRoom) {
    debugger
    image.remove();
    if (roomIAm === "start") {
        room.doorState.start[door] = true
    }
    else {
        room.doorState[myRoom][door] = true;
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
}
//Si on reclique sur la porte ouverte, on entre dans une autre salle.
function enterDoor (door, myRoom) {
    debugger
//Noter pour aller dans une salle précédente. Peut être trouver un autre systeme pour revenir de plusieurs salles d'affilé. Mais t'facon c'est une autre fonction pour revenir en arriere mais quand mm faudra y reflechir. 
    roomBefore = roomIAm;
    if (roomIAm === "start") {
        roomIAm = door ;
        room.doorState[door] = {A: false, B: false, C: false}
        room.numberDoor[door] = randomNumber();
        updateRender(myRoom)
    }
    else {
        roomIAm = roomIAm + door ;
        room.doorState[[myRoom]+[door]] = {A: false, B: false, C: false}
        room.numberDoor[[myRoom]+[door]] = randomNumber();
        updateRender([myRoom]+[door]);
    }
    
    
}
function delDoor() {
    try { imDoor.ImA.remove() }
            catch { console.log("pas de porte A fermé")}
        try { imDoor.ImB.remove() }
            catch { console.log("pas de porte B fermé")}
        try { imDoor.ImC.remove() }
            catch { console.log("pas de porte C fermé")}
        try { imDoor.ImOpenA.remove(); }
            catch { console.log("pas de porte A ouverte")}
        try { imDoor.ImOpenB.remove() }
            catch { console.log("pas de porte B ouverte")}
        try { imDoor.ImOpenC.remove() }
            catch { console.log("pas de porte C ouverte")}
}
function updateRender(myRoom) {
    debugger
    if(room.numberDoor[myRoom] === 1) {
        delDoor()
        const imNewDoorA= document.createElement("img")
        imNewDoorA.src= 'image/porteFerme.jpg'
        imNewDoorA.width= "300"
        imNewDoorA.height= "408"
        imNewDoorA.alt='porte ouverte'
        imNewDoorA.id="ImA"
        buttonDoorDiv.D1.appendChild(imNewDoorA)
        imDoor.ImA = document.getElementById("ImA")
        imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
    }
    else if (room.numberDoor[myRoom] === 2) {
        delDoor()

        const imNewDoorA= document.createElement("img")
        imNewDoorA.src= 'image/porteFerme.jpg'
        imNewDoorA.width= "300"
        imNewDoorA.height= "408"
        imNewDoorA.alt='porte ouverte'
        imNewDoorA.id="ImA"
        buttonDoorDiv.D1.appendChild(imNewDoorA)
        imDoor.ImA = document.getElementById("ImA")
        imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))

        const imNewDoorB= document.createElement("img")
        imNewDoorB.src= 'image/porteFerme.jpg'
        imNewDoorB.width= "300"
        imNewDoorB.height= "408"
        imNewDoorB.alt='porte ouverte'
        imNewDoorB.id="ImB"
        buttonDoorDiv.D3.appendChild(imNewDoorB)
        imDoor.ImB = document.getElementById("ImB")
        imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))
    }
    
    else {
        delDoor()

        const imNewDoorA= document.createElement("img")
        imNewDoorA.src= 'image/porteFerme.jpg'
        imNewDoorA.width= "300"
        imNewDoorA.height= "408"
        imNewDoorA.alt='porte ouverte'
        imNewDoorA.id="ImA"
        buttonDoorDiv.D1.appendChild(imNewDoorA)
        imDoor.ImA = document.getElementById("ImA")
        imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))

        const imNewDoorB= document.createElement("img")
        imNewDoorB.src= 'image/porteFerme.jpg'
        imNewDoorB.width= "300"
        imNewDoorB.height= "408"
        imNewDoorB.alt='porte ouverte'
        imNewDoorB.id="ImB"
        buttonDoorDiv.D2.appendChild(imNewDoorB)
        imDoor.ImB = document.getElementById("ImB")
        imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))

        const imNewDoorC= document.createElement("img")
        imNewDoorC.src= 'image/porteFerme.jpg'
        imNewDoorC.width= "300"
        imNewDoorC.height= "408"
        imNewDoorC.alt='porte ouverte'
        imNewDoorC.id="ImC"
        buttonDoorDiv.D3.appendChild(imNewDoorC)
        imDoor.ImC = document.getElementById("ImC")
        imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
    }
}

//Ouvrir porte 
imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
imDoor.ImB.addEventListener('click', () => openDoor("B", ImB, "ImOpenB", "D2", roomIAm))
imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
//Entrez porte 



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

