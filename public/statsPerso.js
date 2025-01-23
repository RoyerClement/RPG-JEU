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
    mainGauche: {
        degats: () => 1 + 1 * statPerso.Dexterite,
        IMG: "image/mainGauche.jpg",
    },
    mainDroite: {
        degats: () => 1 + 1 * statPerso.Force,
        IMG: "image/mainDroite.jpg",
    },
    epeeDepart: {
        degats: () => 4 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
        IMG: "image/epeeDepart.png",
    },
    hacheDepart: {
        degats: () => 5 + 4 * statPerso.Force,
        IMG: "image/hacheDepart.jpg",
    },
    arcDepart: {
        degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
        IMG: "image/arcDepart.png",
    },
    batonDepart: {
        degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
        IMG: "image/batonDepart.avif",
    },
    espadon: {
        degats: () => 13 + (2 * statPerso.Force + 2 * statPerso.Dexterite),
        IMG: "image/espadon.webp",
        twoHand: true,
    },
    dague: {
        degats: () => 3 + 3 * statPerso.Dexterite,
        IMG: "image/dague.webp",
    },
};
const gear = {
    LeftHand: {
        mainGauche: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainGauche.jpg",
            class: "depart",
            title: "titleMainGauche",
        },
        mainDroite: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainDroite.jpg",
            class: "depart",
            title: "titleMainDroite",
        },
        espadon: {
            degats: () => 3 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
            IMG: "image/espadon.webp",
            class: "image",
            title: "titleEspadon",
            twoHand: true,
        },
        dague: {
            degats: () => 3 + 3 * statPerso.Dexterite,
            IMG: "image/dague.webp",
            class: "image",
            title: "titleDague",
        },
        epeeDepart: {
            degats: () => 4 + (2 * statPerso.Force + 1 * statPerso.Dexterite),
            IMG: "image/epeeDepart.png",
            class: "depart",
            title: "titleEpeeDepart",
        },
        hacheDepart: {
            degats: () => 5 + 3 * statPerso.Force,
            IMG: "image/hacheDepart.jpg",
            class: "depart",
            title: "titleHacheDepart",
        },
        arcDepart: {
            degats: () => 4 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
            IMG: "image/arcDepart.png",
            class: "depart",
            title: "titleArcDepart",
        },
        batonDepart: {
            degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
            IMG: "image/batonDepart.avif",
            class: "depart",
            title: "titleBatonDepart",
        },
    },
    RightHand: {
        mainGauche: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainGauche.jpg",
            class: "depart",
            title: "titleMainGauche",
        },
        mainDroite: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainDroite.jpg",
            class: "depart",
            title: "titleMainDroite",
        },
        espadon: {
            degats: () => 3 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
            IMG: "image/espadon.webp",
            class: "image",
            title: "titleEspadon",
            twoHand: true,
        },
        dague: {
            degats: () => 3 + 3 * statPerso.Dexterite,
            IMG: "image/dague.webp",
            class: "image",
            title: "titleDague",
        },
        epeeDepart: {
            degats: () => 4 + (2 * statPerso.Force + 1 * statPerso.Dexterite),
            IMG: "image/epeeDepart.png",
            class: "depart",
            title: "titleEpeeDepart",
        },
        hacheDepart: {
            degats: () => 5 + 3 * statPerso.Force,
            IMG: "image/hacheDepart.jpg",
            class: "depart",
            title: "titleHacheDepart",
        },
        arcDepart: {
            degats: () => 4 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
            IMG: "image/arcDepart.png",
            class: "depart",
            title: "titleArcDepart",
        },
        batonDepart: {
            degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
            IMG: "image/batonDepart.avif",
            class: "depart",
            title: "titleBatonDepart",
        },
    },
    Chest: {
        Chest: { def: 0, IMG: "image/Torse.jpg", title: "titleChest" },
        armureEnCuir: { def: 10, IMG: "image/armureEnCuir.jpg", title: "titleArmureEnCuir", },
        armureEnFer: { def: 20, IMG: "image/armureEnFer.jpg", title: "titleArmureEnFer", },
        armureEnCuivre: 15,
        armureEnPeau: 5,
        armureEnTissu: 7,
    },
    Head: {
        Head: { def: 0, IMG: "image/Tete.jpg", title: "titleHead", },
        casqueEnCuir: { def: 10, IMG: "image/casqueEnCuir.webp", title: "titleCasqueEnCuir", },
        casqueEnFer: 20,
        casqueEnCuivre: 15,
        casqueEnPeau: 5,
        casqueEnTissu: 7,
    },
    Ring: {
        Ring: {
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            title: "titleEmplacementAnneau",
        },
        anneauForce: {
            effet: false,
            IMG: "image/anneauForce.jpg",
            title: "titleAnneauForce",
        },
        anneauDexterite: {
            effet: false,
            IMG: "image/anneauForce.jpg",
            title: "titleAnneauDexterite",
        },
    },
    Neck: {
        Neck: {
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            title: "titleEmplacementAmulette",
        },
    },
};

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
        return (
            gear.Chest[equipement.Chest].def + gear.Head[equipement.Head].def
        );
    },
};

const inventaire = {
    LeftHand: ["espadon", "dague"],
    RightHand: [],
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
            btnCheck = true;
        });
        statPerso.Point--;
        statPerso[stat]++;
        update();
    }
}
// CHECK SI AJOUT DES BOUTONS + DES STATS
let btnCheck = false;
function btnStat() {
    if (btnCheck) {
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.display = "none";
        });
    }
}
let depart = false;
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

statsHTML.forEach((stat) => {
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
        id: "DivLeftHand",
        imgSrc: "image/mainGauche.jpg",
        imgId: "mainGauche",
        title: "Arme en main gauche",
        class: "image",
    },
    {
        id: "DivRightHand",
        imgSrc: "image/mainDroite.jpg",
        imgId: "mainDroite",
        title: "Arme en main droite",
        class: "image",
    },
    {
        id: "DivChest",
        imgSrc: "image/Torse.jpg",
        imgId: "ChestImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image",
    },
    {
        id: "DivHead",
        imgSrc: "image/Tete.jpg",
        imgId: "HeadImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image",
    },
    {
        id: "DivRing",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "RingImage",
        title: "Ici pour vous équipez de bijou",
        class: "image",
    },
    {
        id: "DivNeck",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "NeckImage",
        title: "Ici pour vous équipez de bijou",
        class: "image",
    },
];

equipements.forEach((equipement) => {
    const equipementContainer = document.createElement("div");
    equipementContainer.id = equipement.id;
    const img = document.createElement("img");
    img.src = equipement.imgSrc;
    img.id = equipement.imgId;
    img.className = equipement.class;
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
const equipementDansInventaire = [
    {
        id: "armureEnCuir",
        class: "image",
        imgSrc: "image/armureEnCuir.jpg",
        title: "Armure simple en cuir, protège relativement",
    },
    {
        id: "espadon",
        class: "image",
        imgSrc: "image/espadon.webp",
        title: "Longue épée à deux mains",
    },
    {
        id: "dague",
        class: "image",
        imgSrc: "image/dague.webp",
        title: "Dague de base",
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
    },
];
equipementDansInventaire.forEach((equipement) => {
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
inventaireDiv.appendChild(equipementSpan);

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
            testId : "testEpeeDepart",
            imgSrc: "image/epeeDepart.png",
            title: "titleEpeeDepart",
        },
        {
            id: "hacheDepart",
            class: "depart",
            testId: "testHacheDepart",
            imgSrc: "image/hacheDepart.jpg",
            title: "titleHacheDepart",
        },
        {
            id: "arcDepart",
            class: "depart",
            testId : "testArcDepart",
            imgSrc: "image/arcDepart.png",
            title: "Arc simple || Inflige plus de dégats avec votre force et dexterité",
        },
        {
            id: "batonDepart",
            class: "depart",
            testId : "testBatonDepart",
            imgSrc: "image/batonDepart.avif",
            title: "Baton simple || Inflige plus de dégats avec votre force et intelligence",
        },
    ];
    equipementDepart.forEach((equipement) => {
        const equipementDiv = document.createElement("div");
        equipementDiv.id = equipement.id;
        equipementDiv.className = equipement.class;
        const equipementImg = document.createElement("img");
        equipementImg.id = equipement.id
        equipementImg.src = equipement.imgSrc;
        equipementImg.title = equipement.title;
        equipementImg.width = 100;
        equipementImg.height = 108;
        equipementDiv.appendChild(equipementImg);
        console.log(equipementImg)
        equipementSpan.appendChild(equipementDiv);
    });
    armeDepartDiv.appendChild(equipementSpan);
    document.body.appendChild(armeDepartDiv);
}
//CREATION BOUTON FERMER INVENTAIRE
const fermerButton = document.createElement("button");
fermerButton.id = "FermerInv";
fermerButton.dataset.testid = "closeInv";
fermerButton.textContent = "Fermer l'inventaire";

document.body.appendChild(fermerButton);
console.log(document.body.innerHTML)
//EVENTLISTENER DES BOUTONS STATS
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

//QUASI TOUS LES ELEMENTS SELECTIONNABLES
const elements = {
    dague: document.getElementById("dague"),
    espadon: document.getElementById("espadon"),
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
    Ring: document.getElementById("RingImage"),
    Neck: document.getElementById("NeckImage"),
    FermerInv: document.getElementById("FermerInv"),
    div: {
        Chest: document.getElementById("DivChest"),
        Head: document.getElementById("DivHead"),
        Ring: document.getElementById("DivRing"),
        Neck: document.getElementById("DivNeck"),
        LeftHand: document.getElementById("DivLeftHand"),
        RightHand: document.getElementById("DivRightHand"),
        armeDepart: document.getElementById("armeDepart"),
    },
    depart: document.querySelectorAll(".depart"),
    allPicture: document.querySelectorAll(".image"),
    inventaire: document.getElementById("inventaire"),
};

// FONCTION POUR REPERER SI CEST UNE ARME OU UN OBJET
function whatObject(value, key, valueImage) {
    if (key === "arme") {
        key = "LeftHand";
    }
    if (key !== "LeftHand" && key !== "RightHand") {
        takeObject(value, key, valueImage);
    } else {
        takeWeapon(value, key, valueImage);
    }
}
// FONCTION DE GESTION DES ARMES
function takeWeapon(name, type, genre) {
    if (genre === "depart") {
        depart = true;
        suppDepart();
    }
    // En premier c'est pour retirer une arme des mains.
    // si l'arme n'est pas dans l'inventaire & est dans main gauche ou main droite
    if (
        !inventaire[type].includes(name) &&
        (equipement.LeftHand === name || equipement.RightHand === name)
    ) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        // Si arme à deux mains je la retire des deux mains
        if (arme[name].twoHand !== undefined) {
            equipement.LeftHand = "mainGauche";
            equipement.RightHand = "mainDroite";
            // Sinon je la retire d'une main
        } else {
            //Si c'est la main gauche je la retire de la main gauche
            if (equipement.LeftHand === name) {
                equipement.LeftHand = "mainGauche";
            } //Si c'est la main droite je la retire de la main droite
            else {
                equipement.RightHand = "mainDroite";
            }
        }
        //En deuxieme c'est pour mettre dans l'inventaire
        // Si l'objet n'est pas dans l'inventaire, je la met dans l'inventaire
    } else if (!inventaire[type].includes(name)) {
        inventaire[type].push(name);
    }
    // En Troisieme c'est pour equiper une arme de l'inventaire dans mon equipement
    // Si l'arme est dans linventaire je l'equipe
    else if (inventaire[type].includes(name)) {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            inventaire[type].splice(index, 1);
        }
        //Si arme à deux mains !
        if (arme[name].twoHand !== undefined) {
            //Si j'ai une arme en main gauche, je l'ajoute à l'inventaire
            if (equipement.LeftHand !== "mainGauche") {
                inventaire[type].push(equipement.LeftHand);
                //Puis j'equipe cette arme dans la main gauche
                equipement.LeftHand = name;
            }
            //Si j'ai une arme en main droite je l'ajoute à l'inventaire
            if (equipement.RightHand !== "mainDroite") {
                inventaire[type].push(equipement.RightHand);
                //Puis je l'equipe dans la main droite
                equipement.RightHand = name;
            }
            //Si pas d'arme du coup, j'equipe l'arme et je remets rien dans l'inventaire
            equipement.LeftHand = name;
            equipement.RightHand = name;
        } else {
            //[SI il y a une arme en main gauche : oui =>
            if (equipement.LeftHand !== "mainGauche") {
                // je regarde [SI il y a une arme en main droite, oui =>
                if (equipement.RightHand !== "mainDroite") {
                    // Si arme à deux mains je desequipe les deux mains quand j'équipe la main gauche
                    if (equipement.LeftHand === equipement.RightHand) {
                        equipement.RightHand = "mainDroite";
                    }
                    // je retire l'arme main gauche et la remet dans l'inventaire et j'equipe l'arme selectionné si non =>
                    inventaire[type].push(equipement.LeftHand);
                    equipement.LeftHand = name;
                    // j'equipe l'arme dans main droite vide]
                } else {
                    equipement.RightHand = name;
                }
                //Si non j'equipe l'arme en main gauche]
            } else {
                equipement.LeftHand = name;
            }
        }
    }
    update();
    VisualRender();
}
function suppDepart() {
    if (depart === true) {
        elements.div.armeDepart.remove();
        elements.depart.forEach((element) => element.remove());
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

// AJOUT EVENTLISTENER
elements.epeeDepart.addEventListener("click", () =>
    takeWeapon("epeeDepart", "LeftHand", "depart"),
);
elements.espadon.addEventListener("click", () =>
    takeWeapon("espadon", "LeftHand"),
);
elements.dague.addEventListener("click", () => takeWeapon("dague", "LeftHand"));
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
let roomIAm = "";
let room = {
    numberDoor: {},
    doorState: {},
};
let recData = {
    donjonpath: {
        room: {},
        roomIAm: "",
        backCheck: "",
        message: [],
    },
};
let backCheck = "";
let message = [];
async function FermerInv() {
    const DonneeStatPerso = {
        mainGauche: stats.LeftHand,
        mainDroite: stats.RightHand,
        def: stats.Def,
        equipement,
        inventaire,
        statPerso,
        depart,
        btnCheck,
        room,
        roomIAm,
        backCheck,
        message,
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
    console.log({ recData });
    replaceStat();
    return recData;
}
//REMETTRE LES STATS RECUPERER DANS LES BONS POTS !
function replaceStat() {
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.statPerso,
    ).forEach(([key, value]) => {
        if (statPerso[key] !== undefined) {
            statPerso[key] = value;
        }
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.equipement,
    ).forEach(([key, value]) => {
        if (equipement[key] !== undefined) {
            equipement[key] = value;
        }
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.inventaire,
    ).forEach(([key, value]) => {
        if (inventaire[key] !== undefined) {
            inventaire[key] = value;
        }
    });
    Object.entries(recData.donjonpath.room.numberDoor).forEach(
        ([key, value]) => {
            room.numberDoor[key] = value;
        },
    );
    Object.entries(recData.donjonpath.room.doorState).forEach(
        ([key, value]) => {
            room.doorState[key] = value;
        },
    );
    roomIAm = recData.donjonpath.roomIAm;
    btnCheck = recData.donjonpath.dataStat.DonneeStatPerso.btnCheck;
    depart = recData.donjonpath.dataStat.DonneeStatPerso.depart;
    backCheck = recData.donjonpath.backCheck;
    message = recData.donjonpath.message;
    suppDepart();
    btnStat();
    update();
    VisualRender();
}
function delAllGearImage() {
    const allDelete = document.querySelectorAll(".image");
    allDelete.forEach((element) => element.remove());
}
function VisualRender() {
    delAllGearImage();
    Object.entries(equipement).forEach(([key, value]) => {
        if (equipement[key] !== undefined) {
            const image = document.createElement("img");
            image.src = gear[key][value].IMG;
            image.width = "100";
            image.height = "108";
            image.id = value;
            image.title = gear[key][value].title
            image.className = "image";
            elements.div[key].appendChild(image);
            const listeImage = [
                "mainGauche",
                "mainDroite",
                "Chest",
                "Head",
                "Ring",
                "Neck",
            ];
            if (!listeImage.includes(value)) {
                image.addEventListener("click", () =>
                    whatObject(value, key, [value + "Image"]),
                );
            } else {
                console.log("pas de EventLister pour toi !");
            }
        }
    });
    Object.entries(inventaire).forEach(([key, items]) => {
        items.forEach((value) => {
            if (gear[key] && gear[key][value]) {
                const image = document.createElement("img");
                image.src = gear[key][value].IMG;
                image.width = 100;
                image.height = 108;
                image.className = "image";
                image.title = gear[key][value].title
                image.id = value;
                elements.inventaire.appendChild(image);
                image.addEventListener("click", () =>
                    whatObject(value, key, [`${value}Image`]),
                );
            }
        });
    });
}
getData();
