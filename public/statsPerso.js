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
const Chest = {
    Chest: { def: 0, IMG:"image/Torse.jpg", type:"Chest" },
    armureEnCuir: {def : 10, IMG: "image/armureEnCuir.jpg", type:"Chest" },
    armureEnFer: {def : 20, IMG: "image/armureEnFer.jpg", type:"Chest"},
    armureEnCuivre: 15,
    armureEnPeau: 5,
    armureEnTissu: 7,
}
const Head = {
    Head: {def : 0, IMG : "image/Tete.jpg"},
    casqueEnCuir: {def: 10, IMG : "image/casqueEnCuir.webp"},
    casqueEnFer: 20,
    casqueEnCuivre: 15,
    casqueEnPeau: 5,
    casqueEnTissu: 7,
}
const Ring = {
    Ring: null,
    anneauForce: {effet : false, IMG : "image/anneauForce.jpg"},
    anneauDexterite: {effet : false, IMG : "image/anneauForce.jpg"},
}
const Neck = {
    Neck: null,
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
        return Chest[equipement.Chest].def + Head[equipement.Head].def;
    },
};

const inventaire = {
    arme: [],
    Chest: [],
    Head: [],
    Ring: [],
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
    mainGauche: document.getElementById("mainGauche"),
    mainDroite: document.getElementById("mainDroite"),
    epeeDepart: document.getElementById("epeeDepart"),
    hacheDepart: document.getElementById("hacheDepart"),
    arcDepart: document.getElementById("arcDepart"),
    batonDepart: document.getElementById("batonDepart"),
    armureEnCuir: document.getElementById("armureEnCuir"),
    armureEnFer: document.getElementById("armureEnFer"),
    casqueEnCuir: document.getElementById("casqueEnCuir"),
    anneauForce: document.getElementById("anneauForce"),
    anneauDexterite: document.getElementById("anneauDexterite"),
    mainGaucheBase: document.getElementById("mainGaucheBase"),
    mainDroiteBase: document.getElementById("mainDroiteBase"),
    baseChest: document.getElementById("baseChest"),
    baseHead: document.getElementById("baseHead"),
    baseRing : document.getElementById("baseRing"),
    baseNeck: document.getElementById("baseNeck"),
    FermerInv: document.getElementById("FermerInv"),
};
const transf_mainGauche = document.getElementById("mainGauche");
const transf_mainDroite = document.getElementById("mainDroite");
const transf_Object = {
    Chest: document.getElementById("Chest"),
    Head: document.getElementById("Head"),
    Ring: document.getElementById("Ring"),
    Neck: document.getElementById("Neck"),
};
const transf_inventaire = document.getElementById("inventaire");

function takeWeapon(name, type) {
    const element = document.getElementById(name);
    // En premier c'est pour retirer une arme des mains.
    // si l'arme n'est pas dans l'inventaire & est dans main gauche ou main droite
    if (
        !inventaire[type].includes(name) &&
        (equipement.LeftHand === name || equipement.RightHand === name)
    ) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        transf_inventaire.appendChild(elements[name]);
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
        transf_inventaire.appendChild(elements[name]);
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
                transf_inventaire.appendChild(elements[equipement.LeftHand]);
                equipement.LeftHand = name;
                transf_mainGauche.appendChild(elements[name]);
            } else {
                equipement.RightHand = name;
                transf_mainDroite.appendChild(elements[name]);
            }
        } else {
            equipement.LeftHand = name;
            transf_mainGauche.appendChild(elements[name]);
        }
    }
    update();
    checkArmePicture();
}

function takeObject(name, type, baseType) {
    const element = document.getElementById(name);
    // En premier c'est pour retirer un objet de l'equipement.
    // si l'objet n'est pas dans l'inventaire & est dans l'equipement
    if (!inventaire[type].includes(name) && equipement[type] === name) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        transf_inventaire.appendChild(elements[name]);
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
        transf_inventaire.appendChild(elements[name]);
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
                transf_inventaire.appendChild(elements[equipement[type]]);
                equipement[type] = name;
                transf_Object[type].appendChild(elements[name]);
                if (type === "Ring" || type === "Neck") {
                    Buff[name]();
                }
            } else {
                equipement[type] = name;
                if (type === "Ring" || type === "Neck") {
                    Buff[name]();
                }
                transf_Object[type].appendChild(elements[name]);
            }
        }
    }
    update();
    checkEquipementPicture(type, baseType);
}

function checkArmePicture() {
    const imageMainG = document.getElementById("mainGaucheBase");
    const imageMainD = document.getElementById("mainDroiteBase");
    if (equipement.LeftHand === "mainGauche") {
        imageMainG.style.display = "block";
    }
    if (equipement.RightHand === "mainDroite") {
        imageMainD.style.display = "block";
    }
    if (equipement.LeftHand !== "mainGauche") {
        imageMainG.style.display = "none";
    }
    if (equipement.RightHand !== "mainDroite") {
        imageMainD.style.display = "none";
    }
}
function checkEquipementPicture(type, baseType) {
    const element = document.getElementById(baseType);
    if (equipement[type] === type) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

elements.epeeDepart.addEventListener("click", () =>
    takeWeapon("epeeDepart", "arme"),
);
elements.hacheDepart.addEventListener("click", () =>
    takeWeapon("hacheDepart", "arme"),
);
elements.arcDepart.addEventListener("click", () =>
    takeWeapon("arcDepart", "arme"),
);
elements.batonDepart.addEventListener("click", () =>
    takeWeapon("batonDepart", "arme"),
);
elements.armureEnCuir.addEventListener("click", () =>
    takeObject("armureEnCuir", "Chest", "baseChest"),
);
elements.armureEnFer.addEventListener("click", () =>
    takeObject("armureEnFer", "Chest", "baseChest"),
);
elements.casqueEnCuir.addEventListener("click", () =>
    takeObject("casqueEnCuir", "Head", "baseHead"),
);
elements.anneauForce.addEventListener("click", () =>
    takeObject("anneauForce", "Ring", "baseRing"),
);
elements.anneauDexterite.addEventListener("click", () =>
    takeObject("anneauDexterite", "Ring", "baseRing"),
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
        console.log(recData)
        replaceStat ()
        return recData
    }
    function replaceStat () {
        // statPerso.Force = recData.donjonpath.dataStat.DonneeStatPerso.statPerso.Force
        // statPerso.Dexterite = recData.donjonpath.dataStat.DonneeStatPerso.statPerso.Dexterite
        // statPerso.Vitalite
        // statPerso.Volonte
        // statPerso.Intelligence
        // statPerso.Point
        // statPerso.HP
        // statPerso.MP
        // statPerso.XP
        // statPerso.LVL
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
                inventaire[key].push(value)
            }
        });
        update()
        VisualRender()
    }
    function delAllGearImage () {
        if (equipement.Chest !== "Chest")
        {elements.baseChest.remove()}
        if (equipement.Head !== "Head")
        {elements.baseHead.remove()}
        if (equipement.Ring !== "Ring")
        {elements.baseRing.remove()}
        if (equipement.Neck !== "Neck")
        elements.baseNeck.remove()
        if (equipement.LeftHand !== "mainGauche")
        {elements.mainGaucheBase.remove()}
        if (equipement.RightHand !== "mainDroite")
        {elements.mainDroiteBase.remove()}
    }
    function VisualRender () {
        debugger
        delAllGearImage() 
        Object.entries(equipement).forEach(([key, value]) => {
            if (equipement.LeftHand[value] === arme[key]) {
                const image = document.createElement("img")
                image.src = arme[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_mainGauche.appendChild(image);
                elements[value].addEventListener("click", takeWeapon(value , "arme"))
            }
            if (equipement.RightHand[value] === arme[key]) {
                const image = document.createElement("img")
                image.src = arme[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_mainDroite.appendChild(image);
                elements[value].addEventListener("click", takeWeapon(value , "arme"))
            }
            if (equipement[value] === Chest[key]) {
                const image = document.createElement("img")
                image.src = Chest[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_Object.Chest.appendChild(image);
                elements[value].addEventListener("click", takeObject(value , "Chest", "baseChest"))
            }
            if (equipement[value] === Head[key]) {
                const image = document.createElement("img")
                image.src = Head[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_Object.Head.appendChild(image);
                elements[value].addEventListener("click", takeObject(value , "Head", "baseHead"))
            }
            if (equipement[value] === Ring[key]) {
                const image = document.createElement("img")
                image.src = Ring[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_Object.Ring.appendChild(image);
                elements[value].addEventListener("click", takeObject(value , "Ring", "baseRing"))
            }
            if (equipement[value] === Neck[key]) {
                const image = document.createElement("img")
                image.src = Neck[value].IMG
                image.width = "100"
                image.height = "108"
                image.id = value
                transf_Object.Neck.appendChild(image);
                elements[value].addEventListener("click", takeObject(value , "Neck", "baseNeck"))
            }
        })
    }
getData();
console.log("tout",recData)
