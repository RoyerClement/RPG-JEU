let roomIAm = "A0"
let roomBefore = ''
const fightBeforeBoss = 10;
const allRoom = [1,2,3,4,]
const buttonDoorDiv = {
    A1: document.getElementById("A1"),
    A2: document.getElementById("2A"),
    A3: document.getElementById("3A"),
    A4: document.getElementById("4A"),
    B1: document.getElementById("B1"),
    B2: document.getElementById("2B"),
    B3: document.getElementById("3B"),
    B4: document.getElementById("4B"),
    C1: document.getElementById("C1"),
    C2: document.getElementById("2C"),
    C3: document.getElementById("3C"),
    C4: document.getElementById("4C"),
    porteBoss: document.getElementById("porteBoss")
}

const imDoor = { 
    ImA1: document.getElementById("ImA1") 
}
const nombreDePorte = {
    A0: 3,
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    B4: 0,
    C1: 0,
    C2: 0,
    C3: 0,
    C4: 0
}
const nombreDePorteOuverte = {
    A0: 0,
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    B4: 0,
    C1: 0,
    C2: 0,
    C3: 0,
    C4: 0
}
const imDoorOpen= document.createElement("img")
        imDoorOpen.src= 'image/porteOuverte.jpg'
        imDoorOpen.width= "300"
        imDoorOpen.height= "408"
        imDoorOpen.alt='porte ouverte'

const randomNumber = () =>
    Math.floor(Math.random() * 3) + 1

//Ouverture de la porte, Ajoute une porte ouverte en plus. (mais peut être ça pue un peu car on peut pas savoir quel porte a été ouverte.) check si combat ou non selon une variable random
function openDoor (door, image) {
    nombreDePorteOuverte[door]++
    image.remove();
    door.appendChild(imDoorOpen)
}
//Si on reclique sur la porte ouverte, on entre dans une autre salle.
function enterDoor (roomNum, door) {
//Noter pour aller dans une salle précédente. Peut être trouver un autre systeme pour revenir de plusieurs salles d'affilé. Mais t'facon c'est une autre fonction pour revenir en arriere mais quand mm faudra y reflechir. 
    roomBefore = roomIAm;
    roomIAm = roomNum ;
    nombreDePorte[door] = randomNumber();
    updateRender();
}
function updateRender() {
    if(nombreDePorte.roomIAm ) {

    }
    
}

//Ouvrir porte 
imDoor.ImA1.addEventListener('click', () => openDoor(A1, ImA1))
//Entrez porte 
imDoor.ImA1.addEventListener('click', () => openDoor("A1", A1, ImA1))


let dataStat = {}

document.addEventListener('DOMContentLoaded', async function () {
    async function getData() {
        const res = await fetch("http://localhost:8000/all-data", {
            method: "GET",
        });
        debugger    
        const json = await res.json();
        dataStat = json
        return dataStat; 
    }
    dataStat = await getData(); 
    console.log(dataStat); 
});

