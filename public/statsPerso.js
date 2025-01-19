const statPerso = {
    Force: 0,
    Dexterite: 0,
    Vitalite: 0,
    Volonte: 0,
    Intelligence: 0,
    Point: 10,
    HP: 50,
    MP: 30,
    XP: 0,
    LVL: 0,
};

const arme = {
    mainGauche: { degats : () => 1 + 1 * statPerso.Dexterite, IMG : "image/mainGauche.jpg" },
    mainDroite: { degats : () => 1 + 1 * statPerso.Force, IMG : "image/mainDroite.jpg"},
    epeeDepart: { degats : () => 4 + (3 * statPerso.Force + 2 * statPerso.Dexterite), IMG : "image/epeeDepart.png"},
    hacheDepart: { degats : () => 5 + 4 * statPerso.Force, IMG : "image/hacheDepart.jpg"},
    arcDepart: { degats : () => 7 + 1 * statPerso.Force + 3 * statPerso.Dexterite, IMG : "image/arcDepart.png"},
    batonDepart: { degats : () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence, IMG : "image/batonDepart.avif"},
}
const gear = {
    LeftHand : {
        mainGauche: { 
            degats : () => 1 + 1 * statPerso.Dexterite, 
            IMG : "image/mainGauche.jpg",
            class : "depart",
        },
        epeeDepart: { 
            degats : () => 4 + (3 * statPerso.Force + 2 * statPerso.Dexterite), 
            IMG : "image/epeeDepart.png",
            class : "depart"
        },
        hacheDepart: { 
            degats : () => 5 + 4 * statPerso.Force, 
            IMG : "image/hacheDepart.jpg",
            class : "depart",
        },
        arcDepart: { 
            degats : () => 7 + 1 * statPerso.Force + 3 * statPerso.Dexterite, 
            IMG : "image/arcDepart.png",
            class : "depart"
        },
        batonDepart: { 
            degats : () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence, 
            IMG : "image/batonDepart.avif",
            class : "depart",
        },
    },
    RightHand : {
        mainDroite: { 
            degats : () => 1 + 1 * statPerso.Force, 
            IMG : "image/mainDroite.jpg",
            class : "depart",
        },
        epeeDepart: { 
            degats : () => 4 + (3 * statPerso.Force + 2 * statPerso.Dexterite), 
            IMG : "image/epeeDepart.png",
            class : "depart"
        },
        hacheDepart: { 
            degats : () => 5 + 4 * statPerso.Force, 
            IMG : "image/hacheDepart.jpg",
            class : "depart",
        },
        arcDepart: { 
            degats : () => 7 + 1 * statPerso.Force + 3 * statPerso.Dexterite, 
            IMG : "image/arcDepart.png",
            class : "depart"
        },
        batonDepart: { 
            degats : () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence, 
            IMG : "image/batonDepart.avif",
            class : "depart",
        }
    },
    Chest : {
        Chest: { def: 0, IMG:"image/Torse.jpg",},
        armureEnCuir: {def : 10, IMG: "image/armureEnCuir.jpg", },
        armureEnFer: {def : 20, IMG: "image/armureEnFer.jpg", },
        armureEnCuivre: 15,
        armureEnPeau: 5,
        armureEnTissu: 7,
    },
    Head : {
        Head: {def : 0, IMG : "image/Tete.jpg"},
        casqueEnCuir: {def: 10, IMG : "image/casqueEnCuir.webp"},
        casqueEnFer: 20,
        casqueEnCuivre: 15,
        casqueEnPeau: 5,
        casqueEnTissu: 7,
    },
    Ring : {
        Ring: {
            effet : null, 
            IMG : "image/EmplacementAmulette.png"
        },
        anneauForce: {
            effet : false, 
            IMG : "image/anneauForce.jpg"
        },
        anneauDexterite: {
            effet : false, 
            IMG : "image/anneauForce.jpg"
        },
    },
    Neck : {
        Neck: {
            effet: null, 
            IMG : "image/EmplacementAmulette.png"
        },
    }
}

const Buff = {
    anneauForce: () => (statPerso.Force += 5),
    anneauDexterite: () => (statPerso.Dexterite += 5),
};
const Debuff = {
    anneauForce: () => (statPerso.Force -= 5),
    anneauDexterite: () => (statPerso.Dexterite -= 5),
};
const equipement = {
    LeftHand: "mainGauche",
    RightHand: "mainDroite",
    Chest: "Chest",
    Head: "Head",
    Ring: "Ring",
    Neck: "Neck",
};

const stats = {
    get LeftHand() {
        return arme[equipement.LeftHand].degats(); // Appelle la fonction de calcul dynamique
    },
    get RightHand() {
        return arme[equipement.RightHand].degats(); // Appelle la fonction de calcul dynamique
    },
    get Def() {
        return gear.Chest[equipement.Chest].def + gear.Head[equipement.Head].def;
    },
};

const inventaire = {
    LeftHand: [],
    Chest: ["armureEnFer", "armureEnCuir"],
    Head: ["casqueEnCuir"],
    Ring: ["anneauForce", "anneauDexterite"],
    Neck: [],
    Object: [],
};

function update() {
    document.getElementById("defense").textContent = `Défense : ${stats.Def}`;
    document.getElementById("degatsArmeG").textContent =
        `Arme gauche : ${stats.LeftHand}`;
    document.getElementById("degatsArmeD").textContent =
        `Arme droite : ${stats.RightHand}`;
    document.getElementById("statFor").textContent =
        `Force : ${statPerso.Force}`;
    document.getElementById("statDex").textContent =
        `Dextérité : ${statPerso.Dexterite}`;
    document.getElementById("statVit").textContent =
        `Vitalité : ${statPerso.Vitalite}`;
    document.getElementById("statVol").textContent =
        `Volonté : ${statPerso.Volonte}`;
    document.getElementById("statInt").textContent =
        `Intelligence : ${statPerso.Intelligence}`;
    document.getElementById("point").textContent =
        `Point(s) disponible(s) : ${statPerso.Point}`;
    statPerso.HP = 50 + 25 * statPerso.Vitalite + 10 * statPerso.Force;
    document.getElementById("hp").textContent =
        `Points de vie : ${statPerso.HP}/${statPerso.HP}`;
    statPerso.MP = 30 + 30 * statPerso.Volonte + 10 * statPerso.Intelligence;
    document.getElementById("mp").textContent =
        `Points de mana : ${statPerso.MP}/${statPerso.MP}`;
}

function addStat(stat) {
    if (statPerso.Point > 1) {
        statPerso.Point--;
        statPerso[stat]++;
        update();
    } else {
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.display = "none";
        });
        statPerso.Point--;
        statPerso[stat]++;
        update();
    }
}


let depart = false
// CREATION DU HTML
// CREATION DES STATS
const statDiv = document.createElement("div");
statDiv.id = "stat";

const statsHTML = [
    { id: "statFor", label: "Force", buttonId: "btnFor" },
    { id: "statDex", label: "Dextérité", buttonId: "btnDex+" },
    { id: "statVit", label: "Vitalité", buttonId: "btnVit+" },
    { id: "statVol", label: "Volonté", buttonId: "btnVol+" },
    { id: "statInt", label: "Intelligence", buttonId: "btnInt+" },
];

statsHTML.forEach(stat => {
    const statSpan = document.createElement("span");
    statSpan.id = stat.id;
    statSpan.textContent = `${stat.label} : 0`;

    const button = document.createElement("button");
    button.id = stat.buttonId;
    button.className = "btnStat";
    button.textContent = "+";

    statDiv.appendChild(statSpan);
    statDiv.appendChild(button);

    statDiv.appendChild(document.createElement("br"));
    statDiv.appendChild(document.createElement("br"));
});

const pointsSpan = document.createElement("span");
pointsSpan.id = "point";
pointsSpan.textContent = "Point(s) disponible(s) : 10";
statDiv.appendChild(pointsSpan);

document.body.appendChild(statDiv);

//CREATION DES INFOS DU PERSONNAGE : 
const infoDiv = document.createElement("div");
infoDiv.id = "info";

const hpSpan = document.createElement("span");
hpSpan.id = "hp";
hpSpan.textContent = "Points de vie : 50/50";
infoDiv.appendChild(hpSpan);
infoDiv.appendChild(document.createElement("br"));

const mpSpan = document.createElement("span");
mpSpan.id = "mp";
mpSpan.textContent = "Points de mana : 30/30";
infoDiv.appendChild(mpSpan);
infoDiv.appendChild(document.createElement("br"));

infoDiv.appendChild(document.createElement("br"));

const damageTitle = document.createElement("p");
damageTitle.textContent = "Dégâts";
infoDiv.appendChild(damageTitle);

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

document.body.appendChild(infoDiv);
//CREATION EQUIPEMENT

const equipementDiv = document.createElement("div");
equipementDiv.id = "equipement";

const equipementTitle = document.createElement("span");
equipementTitle.textContent = "Equipement";
equipementDiv.appendChild(equipementTitle);

const equipements = [
    {
        id: "LeftHand",
        imgSrc: "image/mainGauche.jpg",
        imgId: "mainGauche",
        title: "Arme de base",
        class: "image"
    },
    {
        id: "RightHand",
        imgSrc: "image/mainDroite.jpg",
        imgId: "mainDroite",
        title: "Arme de base",
        class: "image"
    },
    {
        id: "Chest",
        imgSrc: "image/Torse.jpg",
        imgId: "ChestImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image"
    },
    {
        id: "Head",
        imgSrc: "image/Tete.jpg",
        imgId: "HeadImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image"
    },
    {
        id: "Ring",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "RingImage",
        title: "Ici pour vous équipez de bijou",
        class: "image"
    },
    {
        id: "Neck",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "NeckImage",
        title: "Ici pour vous équipez de bijou",
        class: "image"
    },
];

equipements.forEach(equipement => {

    const equipementContainer = document.createElement("div");
    equipementContainer.id = equipement.id;

    const img = document.createElement("img");
    img.src = equipement.imgSrc;
    img.id = equipement.imgId;
    img.className = equipement.class
    img.title = equipement.title;
    img.width = 100;
    img.height = 108;

    equipementContainer.appendChild(img);

    equipementDiv.appendChild(equipementContainer);
});

document.body.appendChild(equipementDiv);

// CREATION INVENTAIRE 

const inventaireDiv = document.createElement("div");
inventaireDiv.id = "inventaire";

const inventaireTitle = document.createElement("span");
inventaireTitle.textContent = "Inventaire";
inventaireDiv.appendChild(inventaireTitle);

const equipementSpan = document.createElement("span");

const equipementDansInventaire = [{
    id: "armureEnCuir",
    class: "image",
    imgSrc: "image/armureEnCuir.jpg",
    title: "Armure simple en cuir, protège relativement",
},
{
    id: "armureEnFer",
    class: "image",
    imgSrc: "image/armureEnFer.jpg",
    title: "Armure en fer, protège bien",
},
{
    id: "casqueEnCuir",
    class: "image",
    imgSrc: "image/casqueEnCuir.webp",
    title: "Casque en cuir, protège relativement",
},
{
    id: "anneauForce",
    class: "image",
    imgSrc: "image/anneauForce.jpg",
    title: "Anneau qui vous rend plus fort",
},
{
    id: "anneauDexterite",
    class: "image",
    imgSrc: "image/anneauForce.jpg",
    title: "Anneau qui vous rend plus agile",
}]
equipementDansInventaire.forEach(equipement => {

    const equipementDiv = document.createElement("div");
    equipementDiv.id = equipement.id;
    

    const equipementImg = document.createElement("img");
    equipementImg.src = equipement.imgSrc;
    equipementImg.title = equipement.title;
    equipementImg.className = equipement.class;
    equipementImg.width = 100;
    equipementImg.height = 108;

    equipementDiv.appendChild(equipementImg);

    equipementSpan.appendChild(equipementDiv);
});
inventaireDiv.appendChild(equipementSpan)

document.body.appendChild(inventaireDiv);

//CREATION SECTION ARME DE DEPART
if (!depart) {
const armeDepartDiv = document.createElement("div");
armeDepartDiv.id = "armeDepart";

const armeTitle = document.createElement("p");
armeTitle.textContent = "Choisissez votre arme";
armeDepartDiv.appendChild(armeTitle);

const equipementSpan = document.createElement("span");

const equipementDepart = [
    {
        id: "epeeDepart",
        class: "depart",
        imgSrc: "image/epeeDepart.png",
        title: "Epee simple || Inflige plus de dégats avec votre force et dexterité",
    },
    {
        id: "hacheDepart",
        class: "depart",
        imgSrc: "image/hacheDepart.jpg",
        title: "Hache simple || Inflige plus de dégats avec votre force",
    },
    {
        id: "arcDepart",
        class: "depart",
        imgSrc: "image/arcDepart.png",
        title: "Arc simple || Inflige plus de dégats avec votre force et dexterité",
    },
    {
        id: "batonDepart",
        class: "depart",
        imgSrc: "image/batonDepart.avif",
        title: "Baton simple || Inflige plus de dégats avec votre force et intelligence",
    },
    
];

equipementDepart.forEach(equipement => {

    const equipementDiv = document.createElement("div");
    equipementDiv.id = equipement.id;
    equipementDiv.className = equipement.class;

    const equipementImg = document.createElement("img");
    equipementImg.src = equipement.imgSrc;
    equipementImg.title = equipement.title;
    equipementImg.width = 100;
    equipementImg.height = 108;

    equipementDiv.appendChild(equipementImg);

    equipementSpan.appendChild(equipementDiv);
});

armeDepartDiv.appendChild(equipementSpan);

document.body.appendChild(armeDepartDiv);
}
//CREATION BOUTON FERMER INVENTAIRE
const fermerButton = document.createElement("button");
fermerButton.id = "FermerInv";
fermerButton.textContent = "Fermer l'inventaire";

document.body.appendChild(fermerButton);

document
    .getElementById("btnFor")
    .addEventListener("click", () => addStat("Force"));
document
    .getElementById("btnDex+")
    .addEventListener("click", () => addStat("Dexterite"));
document
    .getElementById("btnVit+")
    .addEventListener("click", () => addStat("Vitalite"));
document
    .getElementById("btnVol+")
    .addEventListener("click", () => addStat("Volonte"));
document
    .getElementById("btnInt+")
    .addEventListener("click", () => addStat("Intelligence"));

const elements = {
    
    epeeDepart: document.getElementById("epeeDepart"),
    hacheDepart: document.getElementById("hacheDepart"),
    arcDepart: document.getElementById("arcDepart"),
    batonDepart: document.getElementById("batonDepart"),
    armureEnCuir: document.getElementById("armureEnCuir"),
    armureEnFer: document.getElementById("armureEnFer"),
    casqueEnCuir: document.getElementById("casqueEnCuir"),
    anneauForce: document.getElementById("anneauForce"),
    anneauDexterite: document.getElementById("anneauDexterite"),
    mainGauche: document.getElementById("mainGauche"),
    mainDroite: document.getElementById("mainDroite"),
    Chest: document.getElementById("ChestImage"),
    Head: document.getElementById("HeadImage"),
    Ring : document.getElementById("RingImage"),
    Neck: document.getElementById("NeckImage"),
    FermerInv: document.getElementById("FermerInv"),
    div : {
        Chest: document.getElementById("Chest"),
        Head: document.getElementById("Head"),
        Ring: document.getElementById("Ring"),
        Neck: document.getElementById("Neck"),
        LeftHand: document.getElementById("LeftHand"),
        RightHand: document.getElementById("RightHand"),
    },
    depart : document.querySelectorAll(".depart"),
    allPicture: document.querySelectorAll(".image"),
    inventaire : document.getElementById("inventaire")
};

function whatObject (value, key, valueImage) {
    if (key === "arme") {
        key = "LeftHand"
    }
    if (key !== 'LeftHand' && key !== "RightHand") {
        takeObject(value, key, valueImage)
    }
    else  {
        takeWeapon(value, key, valueImage)
    }
}

function takeWeapon(name, type, genre) {
    if (genre === "depart") {
        depart = true
        suppDepart()

    }
    // En premier c'est pour retirer une arme des mains.
    // si l'arme n'est pas dans l'inventaire & est dans main gauche ou main droite
    if (
        !inventaire[type].includes(name) &&
        (equipement.LeftHand === name || equipement.RightHand === name)
    ) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        //Si c'est la main gauche je la retire de la main gauche
        if (equipement.LeftHand === name) {
            equipement.LeftHand = "mainGauche";
        } //Si c'est la main droite je la retire de la main droite
        else {
            equipement.RightHand = "mainDroite";
        }
        //En deuxieme c'est pour mettre dans l'inventaire
        // Si l'objet n'est pas dans l'inventaire, je la met dans l'inventaire
    } else if (!inventaire[type].includes(name)) {
        inventaire[type].push(name);
    } // En Troisieme c'est pour equiper une arme de l'inventaire dans mon equipement
    // Si l'arme est dans linventaire je l'equipe
    else if (inventaire[type].includes(name)) {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            inventaire[type].splice(index, 1);
        }
        //[SI il y a une arme en main gauche : oui =>
        // je regarde [SI il y a une arme en main droite, oui =>
        // je retire l'arme main gauche et la remet dans l'inventaire et j'equipe l'arme selectionné si non =>
        // j'equipe l'arme dans main droite vide]
        //Si non j'equipe l'arme en main gauche]
        if (equipement.LeftHand !== "mainGauche") {
            if (equipement.RightHand !== "mainDroite") {
                inventaire[type].push(equipement.LeftHand);
                equipement.LeftHand = name;
            } else {
                equipement.RightHand = name;
            }
        } else {
            equipement.LeftHand = name;
        }
    }
    update();
    VisualRender()
}
function suppDepart () {
    
    if (depart === true) {
        
        elements.depart.forEach(element => element.remove());
    }
}
function takeObject(name, type, baseType) {
    // En premier c'est pour retirer un objet de l'equipement.
    // si l'objet n'est pas dans l'inventaire & est dans l'equipement
    if (!inventaire[type].includes(name) && equipement[type] === name) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        //et je la retire de l'equipement
        equipement[type] = type;
        //Si l'equipement est un bijou alors j'enleve le buff de ce bijou
        if (type === "Ring" || type === "Neck") {
            Debuff[name]();
        }
        //En deuxieme c'est pour mettre dans l'inventaire
        // Si l'objet n'est pas dans l'inventaire, je la met dans l'inventaire
    } else if (!inventaire[type].includes(name)) {
        inventaire[type].push(name);
    } // En Troisieme c'est pour equiper un objet de l'inventaire dans mon equipement
    // Si l'objet est dans linventaire je l'equipe
    else if (inventaire[type].includes(name)) {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            inventaire[type].splice(index, 1);
            //S'il y a déjà un objet dans le slot, je le mets dans l'inventaire et j'equipe l'objet.
            if (equipement[type] !== type) {
                if (type === "Ring" || type === "Neck") {
                    Debuff[equipement[type]]();
                }
                inventaire[type].push(equipement[type]);
                equipement[type] = name;
                if (type === "Ring" || type === "Neck") {
                    Buff[name]();
                }
            } else {
                equipement[type] = name;
                if (type === "Ring" || type === "Neck") {
                    Buff[name]();
                }
            }
        }
    }
    update();
    VisualRender();
}


elements.epeeDepart.addEventListener("click", () =>
    takeWeapon("epeeDepart", "LeftHand", "depart"),
);
elements.hacheDepart.addEventListener("click", () =>
    takeWeapon("hacheDepart", "LeftHand", "depart"),
);
elements.arcDepart.addEventListener("click", () =>
    takeWeapon("arcDepart", "LeftHand", "depart"),
);
elements.batonDepart.addEventListener("click", () =>
    takeWeapon("batonDepart", "LeftHand", "depart"),
);
elements.armureEnCuir.addEventListener("click", () =>
    takeObject("armureEnCuir", "Chest", "ChestImage"),
);
elements.armureEnFer.addEventListener("click", () =>
    takeObject("armureEnFer", "Chest", "ChestImage"),
);
elements.casqueEnCuir.addEventListener("click", () =>
    takeObject("casqueEnCuir", "Head", "HeadImage"),
);
elements.anneauForce.addEventListener("click", () =>
    takeObject("anneauForce", "Ring", "RingImage"),
);
elements.anneauDexterite.addEventListener("click", () =>
    takeObject("anneauDexterite", "Ring", "RingImage"),
);
elements.FermerInv.addEventListener("click", () => FermerInv());

let recData = {};
async function FermerInv() {
    
    const DonneeStatPerso = {
        mainGauche: stats.LeftHand,
        mainDroite: stats.RightHand,
        def: stats.Def,
        equipement,
        inventaire,
        statPerso,
        depart
    };
    const res = await fetch("http://localhost:8000/all-data", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ DonneeStatPerso }),
    });
    const json = await res.json();
    window.location.href = "Donjon.html";
}
    async function getData() {
        
        const res = await fetch("http://localhost:8000/all-data", {
            method: "GET",
        });
        const json = await res.json();
        recData = json;
        replaceStat ()
        return recData
    }
    function replaceStat () {
        Object.entries(recData.donjonpath.dataStat.DonneeStatPerso.statPerso).forEach(([key, value]) => {
            if (statPerso[key] !== undefined) {
                statPerso[key] = value; 
            }
        });
        Object.entries(recData.donjonpath.dataStat.DonneeStatPerso.equipement).forEach(([key, value]) => {
            if (equipement[key] !== undefined) {
                equipement[key] = value
            }
        });
        Object.entries(recData.donjonpath.dataStat.DonneeStatPerso.inventaire).forEach(([key, value]) => {
            if (inventaire[key] !== undefined) {
                inventaire[key] = value
            }
        });
        depart = recData.donjonpath.dataStat.DonneeStatPerso.depart
        suppDepart()
        update()
        VisualRender()  
    }
    function delAllGearImage () {
        const allDelete = document.querySelectorAll(".image")
        allDelete.forEach( element => element.remove())
    }
    function VisualRender () {
        delAllGearImage() 
        Object.entries(equipement).forEach(([key, value]) => {
            if (equipement[key] !== undefined){
                const image = document.createElement("img")
                image.src = gear[key][value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                image.className = "image"
                elements.div[key].appendChild(image);
                elements[value].addEventListener("click", () => whatObject(value , key , [value+"Image"]))
                console.log([elements[value]])
            }
        })
        Object.entries(inventaire).forEach(([key, items]) => {
            // Parcourir chaque item dans la catégorie
            items.forEach((value) => {
                // Vérifier si gear contient une correspondance pour key et value
                if (gear[key] && gear[key][value]) {
                    // Créer une image pour l'objet trouvé
                    const image = document.createElement("img")
                    image.src = gear[key][value].IMG 
                    image.width = 100
                    image.height = 108
                    image.className = "image"
                    image.id = value
        
                    // Ajouter l'image à l'inventaire dans le DOM
                    elements.inventaire.appendChild(image);
        
                    // Ajouter un gestionnaire d'événement pour cet objet
                    image.addEventListener("click", () => whatObject(value, key, [`${value}Image`]));
        
                    console.log(`Ajouté : ${value} (${key}) à l'inventaire visuel`);
                }
            });
        });
        }

    suppDepart()
getData()