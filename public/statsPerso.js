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
    mainGauche: () => 1 + 1 * statPerso.Dexterite,
    mainDroite: () => 1 + 1 * statPerso.Force,
    epeeDepart: () => 4 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
    hacheDepart: () => 5 + 4 * statPerso.Force,
    arcDepart: () => 7 + 1 * statPerso.Force + 3 * statPerso.Dexterite,
    batonDepart: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
};
const Chest = {
    Chest: 0,
    armureEnCuir: 10,
    armureEnFer: 20,
    armureEnCuivre: 15,
    armureEnPeau: 5,
    armureEnTissu: 7,
};
const Head = {
    Head: 0,
    casqueEnCuir: 10,
    casqueEnFer: 20,
    casqueEnCuivre: 15,
    casqueEnPeau: 5,
    casqueEnTissu: 7,
};

const Ring = {
    Ring: null,
    anneauForce: false,
    anneauDexterite: false,
};
const Neck = {
    Neck: null,
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
        return arme[equipement.LeftHand](); // Appelle la fonction de calcul dynamique
    },
    get RightHand() {
        return arme[equipement.RightHand](); // Appelle la fonction de calcul dynamique
    },
    get Def() {
        return Chest[equipement.Chest] + Head[equipement.Head];
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
const allData = {
    statPerso: statPerso,
    stats: stats,
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

const button = document.createElement("button");
const text = "read stats ";
button.textContent = text;
button.addEventListener("click", async function () {
    const res = await fetch("http://localhost:8000/all-data", {
        method: "GET",
    });
    const json = await res.json();
    button.textContent = text + json.stats;
});
document.body.appendChild(button);
