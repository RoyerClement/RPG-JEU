let roomIAm = "A"
let roomBefore = ''
const fightBeforeBoss = 10;
const buttonDoorDiv = {
    D1: document.getElementById("UN"),
    D2: document.getElementById("DEUX"),
    D3: document.getElementById("TROIS"),
}

const imDoor = { 
    ImA1: document.getElementById("ImA1"),
    ImA2: document.getElementById("ImA2"),
    ImA3: document.getElementById("ImA3"),
    ImOpenA1: document.getElementById("ImOpenA1"),
    ImOpenA2: document.getElementById("ImOpenA2"),
    ImOpenA3: document.getElementById("ImOpenA3"),
}

const numberDoor = {
        A: 3,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F : 0, 
        G : 0,
        H :0,
        I :0,
        J:0,
        K :0,
        L:0
    }
const doorState = {
        A1: false,
            AA1: false,
                AAA1: false,
                AAB1: false,
                AAC1: false,
            AB1: false,
                ABA1: false,
                ABB1: false,
                ABC1: false,
            AC1: false,
                ACA1: false,
                ACB1: false,
                ACC1: false,
        
        
        
        A2: false,
            AA2: false,
            AB2: false,
            AC2: false,
        
        A3: false,
            AA3: false,
            AB3: false,
            AC3: false,
       

    }


const randomNumber = () =>
    Math.floor(Math.random() * 3) + 1

//Ouverture de la porte, check si combat ou non selon une variable random
function openDoor (door, image, idOpenDoor, imDiv) {
    debugger
    image.remove();
    doorState[door] = true;
    const imDoorOpen= document.createElement("img")
        imDoorOpen.src= 'image/porteOuverte.jpg'
        imDoorOpen.width= "400"
        imDoorOpen.height= "408"
        imDoorOpen.alt='porte ouverte'
        imDoorOpen.id= idOpenDoor
        console.log(imDoorOpen)
    buttonDoorDiv[imDiv].appendChild(imDoorOpen)
}
//Si on reclique sur la porte ouverte, on entre dans une autre salle.
function enterDoor (roomLetter, door) {
    debugger
//Noter pour aller dans une salle précédente. Peut être trouver un autre systeme pour revenir de plusieurs salles d'affilé. Mais t'facon c'est une autre fonction pour revenir en arriere mais quand mm faudra y reflechir. 
    roomBefore = roomIAm;
    roomIAm = roomLetter ;
    numberDoor[door] = randomNumber();
    updateRender();
}
function updateRender() {
    if(nombreDePorte.roomIAm ) {

    }
    
}

//Ouvrir porte 
imDoor.ImA1.addEventListener('click', () => openDoor("A1", ImA1, "ImOpenA1", "D1"))
imDoor.ImA2.addEventListener('click', () => openDoor("A2", ImA2, "ImOpenA2", "D2"))
imDoor.ImA3.addEventListener('click', () => openDoor("A3", ImA3, "ImOpenA3", "D3"))
//Entrez porte 
imDoor.ImOpenA1.addEventListener('click', () => enterDoor("A1", ))


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



