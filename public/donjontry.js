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
const opInventaire = document.getElementById("Inventaire")

const randomNumber = () =>
    Math.floor(Math.random() * 3) + 1

function back() {
    roomIAm = roomIAm.slice(0, -1);
    updateRenderBack(roomIAm);
}
function updateRenderBack(myRoom) {
    delDoor()
    if (room.doorState[myRoom].A) {
        const imNewDoorA= document.createElement("img")
            imNewDoorA.src= 'image/porteOuverte.jpg'
            imNewDoorA.width= "400"
            imNewDoorA.height= "408"
            imNewDoorA.alt='porte ouverte'
            imNewDoorA.id="ImOpenA"
            buttonDoorDiv.D1.appendChild(imNewDoorA)
            imDoor.ImImOpenA = document.getElementById("ImOpenA")
            imDoor.ImImOpenA.addEventListener('click', () => enterDoor("A", roomIAm))
    }
    else if (!room.doorState[myRoom].A) {
        const imNewDoorA= document.createElement("img")
            imNewDoorA.src= 'image/porteFerme.jpg'
            imNewDoorA.width= "300"
            imNewDoorA.height= "408"
            imNewDoorA.alt='porte ferme'
            imNewDoorA.id="ImA"
            buttonDoorDiv.D1.appendChild(imNewDoorA)
            imDoor.ImImOpenA = document.getElementById("ImA")
            imDoor.ImA.addEventListener('click', () => openDoor("A", ImA, "ImOpenA", "D1", roomIAm))
    }
    else {
        console.log("bizarre")
    }

    if (room.doorState[myRoom].B) {
        const imNewDoorB= document.createElement("img")
            imNewDoorB.src= 'image/porteOuverte.jpg'
            imNewDoorB.width= "400"
            imNewDoorB.height= "408"
            imNewDoorB.alt='porte ouverte'
            imNewDoorB.id="ImOpenB"
            buttonDoorDiv.D2.appendChild(imNewDoorB)
            imDoor.ImImOpenB = document.getElementById("ImOpenB")
            imDoor.ImImOpenB.addEventListener('click', () => enterDoor("B", roomIAm))
    }
    else if (!room.doorState[myRoom].B) {
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
        console.log("bizarre")
    }

    if (room.doorState[myRoom].C) {
        const imNewDoorC= document.createElement("img")
            imNewDoorC.src= 'image/porteOuverte.jpg'
            imNewDoorC.width= "400"
            imNewDoorC.height= "408"
            imNewDoorC.alt='porte ouverte'
            imNewDoorC.id="ImOpenC"
            buttonDoorDiv.D3.appendChild(imNewDoorC)
            imDoor.ImImOpenC = document.getElementById("ImOpenC")
            imDoor.ImImOpenC.addEventListener('click', () => enterDoor("C", roomIAm))
    }
    else if (!room.doorState[myRoom].C) {
        const imNewDoorC= document.createElement("img")
            imNewDoorC.src= 'image/porteFerme.jpg'
            imNewDoorC.width= "300"
            imNewDoorC.height= "408"
            imNewDoorC.alt='porte ferme'
            imNewDoorC.id="ImC"
            buttonDoorDiv.D3.appendChild(imNewDoorC)
            imDoor.ImC = document.getElementById("ImB")
            imDoor.ImC.addEventListener('click', () => openDoor("C", ImC, "ImOpenC", "D3", roomIAm))
    }
    else {
        console.log("bizarre")
    } 

}

//Ouverture de la porte, check si combat ou non selon une variable random
function openDoor (door, image, idOpenDoor, imDiv, myRoom) {
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
//Si on clique sur la porte ouverte, on entre dans une autre salle.
function enterDoor (door, myRoom) {
    if (roomIAm === "start") {
        roomIAm = door ;
        room.numberDoor[door] = randomNumber();
        if (room.numberDoor[door] === 3) {
        room.doorState[door] = {A: false, B: false, C: false}
        }
        if (room.numberDoor[door] === 2) {
            room.doorState[door] = {A: false, B: false}
        }
        if (room.numberDoor[door] === 1) {
            room.doorState[door] = {A: false, B}
        }
        console.log('entrez depuis le start, jarrive dans la salle' , roomIAm)
        updateRender(roomIAm)
    }
    else {
        roomIAm = roomIAm + door ;
        room.numberDoor[[myRoom]+[door]] = randomNumber();
            if (room.numberDoor[[myRoom]+[door]] === 3) {
            room.doorState[[myRoom]+[door]] = {A: false, B: false, C: false}
            }
            if (room.numberDoor[[myRoom]+[door]] === 2) {
                room.doorState[[myRoom]+[door]] = {A: false, B: false}
            }
            if (room.numberDoor[[myRoom]+[door]] === 1) {
                room.doorState[[myRoom]+[door]] = {A: false}
            }
            console.log('entrez depuis ', roomIAm.slice(0, -1), "jarrive dans la salle ", roomIAm)
        updateRender([myRoom]+[door]);
    }
}

function delDoor() {
    debugger
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
imDoor.btnBack.addEventListener('click', () => back())



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