let roomIAm = "start"
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
    btnBack: document.getElementById('back'),
}

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
const opInventaire = document.getElementById("Inventaire")

const randomNumber = () =>
    Math.floor(Math.random() * 3) + 1

function back(myOldRoom) {
    roomIAm = roomIAm.slice(0, -1);
    if(!roomIAm) {
        roomIAm = "start";
        imDoor.btnBack.style.display="none";
    }
    console.log('entrez depuis ', myOldRoom , "jarrive dans la salle ", roomIAm)
    updateRenderBack(roomIAm);
}
function updateRenderBack(myRoom) {
    delDoor()
    debugger
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

//Ouverture de la porte, check si combat ou non selon une variable random
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
}
//Si on clique sur la porte ouverte
function enterDoor (door, myRoom) {
    debugger
    // SI CLIC DEPUIS LE START 
    if (roomIAm === "start") {
        // ON VA A LA SALLE ! 
        roomIAm = door
        imDoor.btnBack.style.display="block";
        // SI LA SALLE EXISTE DEJA ON CHARGE LES SALLES VIA UPDATERENDERBACK()
        if (room.numberDoor[door]) {
            updateRenderBack(roomIAm)
            (console.log("Depuis le start, j'arrive dans la salle explorée : ", roomIAm))
        }
        //SI LA SALLE NEXISTE PAS ON CREE LES SALLES
        else {
                room.numberDoor[door] = randomNumber();
                if (room.numberDoor[door] === 3) {
                room.doorState[door] = {A: "ferme", B: "ferme", C: "ferme"}
                }
                if (room.numberDoor[door] === 2) {
                    room.doorState[door] = {A: "ferme", B: "ferme"}
                }
                if (room.numberDoor[door] === 1) {
                    room.doorState[door] = {A: "ferme"}
                }
                console.log('depuis le start, jarrive dans la salle inexploree : ' , roomIAm)
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
            (console.log("j'arrive dans la salle explorée : ", roomIAm))
        }
        //SI LA SALLE N'EXISTE PAS ON CREE LES SALLES ! 
        else {
                room.numberDoor[[myRoom]+[door]] = randomNumber();
                if (room.numberDoor[[myRoom]+[door]] === 3) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme", B: "ferme", C: "ferme"}
                }
                if (room.numberDoor[[myRoom]+[door]] === 2) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme", B: "ferme"}
                }
                if (room.numberDoor[[myRoom]+[door]] === 1) {
                    room.doorState[[myRoom]+[door]] = {A: "ferme"}
                }
                console.log("jarrive dans la salle inexploree : ", roomIAm)
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