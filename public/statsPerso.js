const statPerso = {
    Force: 0,
    Dexterite: 0,
    Vitalite: 0,
    Volonte: 0,
    Concentration: 0,
    Intelligence: 0,
    Point: 10,
    HP:50,
    HPactual: 50,
    MP: 50,
    MPactual: 50,
    XP: 0,
    LVL: 1,
    spells: []
};

let skills = {
    allATQ : {
        effect : () => {
            Object.entries(actualEnnemiStatut).forEach((key, value) => 
            value.forEach((cle, valeur) => {
                if(cle === "HP") {
                    const randomAttaque = genererChiffre(dataStat.DonneeStatPerso.mainGauche +
                    dataStat.DonneeStatPerso.mainDroite, 10)
                    valeur -= randomAttaque
                }
            }))
            dataStat.DonneeStatPerso.statPerso.MPactual -= 20
        },
        state: false,
        IMG: "image/allATQ.webp"
    },
    doubleATQ: {
        effect : () => { 
            genererChiffre((dataStat.DonneeStatPerso.mainGauche +
            dataStat.DonneeStatPerso.mainDroite)*2, 10)
            dataStat.DonneeStatPerso.statPerso.MPactual -= 10
        },
        state: false,
        IMG : "image/doubleATQ.webp"
    },
    steal : {
        effect : "on va voir"
    }
}

const arme = {
    mainGauche: {
        degats: () => 1 + 1 * statPerso.Dexterite,
        IMG: "image/mainGauche.webp",
    },
    mainDroite: {
        degats: () => 1 + 1 * statPerso.Force,
        IMG: "image/mainDroite.webp",
    },
    epeeDepart: {
        degats: () => 900 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
        IMG: "image/epeeDepart.webp",
    },
    hacheDepart: {
        degats: () => 5 + 4 * statPerso.Force,
        IMG: "image/hacheDepart.webp",
    },
    arcDepart: {
        degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
        IMG: "image/arcDepart.webp",
    },
    batonDepart: {
        degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
        IMG: "image/batonDepart.webp",
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
    torche: {
        degats: () => 10,
        IMG: "image/torche.webp",
    },
    orcHache: {
        degats: () => 15 + (statPerso.Force * 3),
        IMG: "image/orcHache.webp",
        class: "image",
        test: "testOrcHache",
        title: "Une Hache fraichement trouvé sur un cadavre d'orc"
    },
    gobArc: {
        degats: () => 10 + 3 * statPerso.Dexterite,
        IMG: "image/gobArc.webp",
        class: "image",
        test: "testGobArc",
        title: "Un arc qui nécessite une bonne dextérité !"
    },
    orcEpee: {
        degats: () => 15 + 2 * statPerso.Force + 1 * statPerso.Dexterite,
        IMG: "image/orcEpee.webp",
        class: "image",
        test: "testOrcEpee",
        title: "Une épée recouverte de sang et de rouille"
    },
};
const gear = {
    LeftHand: {
        mainGauche: {
            degats: () => 1 + 1 * statPerso.Force,
            IMG: "image/mainGauche.webp",
            class: "depart",
            test: "testMainGauche",
            title: "votre main gauche",
        },
        mainDroite: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainDroite.webp",
            class: "depart",
            test: "testMainDroite",
            title :"votre main droite",
        },
        espadon: {
            degats: () => 3 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
            IMG: "image/espadon.webp",
            class: "image",
            test: "testEspadon",
            title: "Une épée à deux mains",
            twoHand: true,
        },
        dague: {
            degats: () => 3 + 3 * statPerso.Dexterite,
            IMG: "image/dague.webp",
            class: "image",
            test: "testDague",
            title : "une dague en bon état"
        },
        epeeDepart: {
            degats: () => 900 + (2 * statPerso.Force + 1 * statPerso.Dexterite),
            IMG: "image/epeeDepart.webp",
            class: "depart",
            test: "testEpeeDepart",
            title: "une épée de mauvaise qualité"
        },
        hacheDepart: {
            degats: () => 5 + 3 * statPerso.Force,
            IMG: "image/hacheDepart.webp",
            class: "depart",
            test: "testHacheDepart",
            title: "une hache emoussée"
        },
        arcDepart: {
            degats: () => 4 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
            IMG: "image/arcDepart.webp",
            class: "depart",
            test: "testArcDepart",
            title: "un arc rudimentaire"
        },
        batonDepart: {
            degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
            IMG: "image/batonDepart.webp",
            class: "depart",
            test: "testBatonDepart",
            title: "un baton rudimentaire"
        },
        torche: {
            degats: () => 10,
            IMG: "image/torche.webp",
            class: "image",
            test: "testTorche",
            title: "une torche",
        },
        orcHache: {
            degats: () => 15 + (statPerso.Force * 3),
            IMG: "image/orcHache.webp",
            class: "image",
            test: "testOrcHache",
            title: "Une Hache fraichement trouvé sur un cadavre d'orc"
        },
        gobArc: {
            degats: () => 10 + 3 * statPerso.Dexterite,
            IMG: "image/gobArc.webp",
            class: "image",
            test: "testGobArc",
            title: "Un arc qui nécessite une bonne dextérité !"
        },
        orcEpee: {
            degats: () => 15 + 2 * statPerso.Force + 1 * statPerso.Dexterite,
            IMG: "image/orcEpee.webp",
            class: "image",
            test: "testOrcEpee",
            title: "Une épée recouverte de sang et de rouille"
        },
    },
    RightHand: {
        mainGauche: {
            degats: () => 1 + 1 * statPerso.Force,
            IMG: "image/mainGauche.webp",
            class: "depart",
            test: "testMainGauche",
            title: "votre main gauche",
        },
        mainDroite: {
            degats: () => 1 + 1 * statPerso.Dexterite,
            IMG: "image/mainDroite.webp",
            class: "depart",
            test: "testMainDroite",
            title :"votre main droite",
        },
        espadon: {
            degats: () => 3 + (3 * statPerso.Force + 2 * statPerso.Dexterite),
            IMG: "image/espadon.webp",
            class: "image",
            test: "testEspadon",
            title: "Une épée à deux mains",
            twoHand: true,
        },
        dague: {
            degats: () => 3 + 3 * statPerso.Dexterite,
            IMG: "image/dague.webp",
            class: "image",
            test: "testDague",
            title : "une dague en bon état"
        },
        epeeDepart: {
            degats: () => 4 + (2 * statPerso.Force + 1 * statPerso.Dexterite),
            IMG: "image/epeeDepart.webp",
            class: "depart",
            test: "testEpeeDepart",
            title: "une épée de mauvaise qualité"
        },
        hacheDepart: {
            degats: () => 5 + 3 * statPerso.Force,
            IMG: "image/hacheDepart.webp",
            class: "depart",
            test: "testHacheDepart",
            title: "une hache emoussée"
        },
        arcDepart: {
            degats: () => 4 + 1 * statPerso.Force + 2 * statPerso.Dexterite,
            IMG: "image/arcDepart.webp",
            class: "depart",
            test: "testArcDepart",
            title: "un arc rudimentaire"
        },
        batonDepart: {
            degats: () => 7 + 1 * statPerso.Force + 2 * statPerso.Intelligence,
            IMG: "image/batonDepart.webp",
            class: "depart",
            test: "testBatonDepart",
            title: "un baton rudimentaire"
        },
        torche: {
            degats: () => 10,
            IMG: "image/torche.webp",
            class: "image",
            test: "testTorche",
            title: "une torche",
            nombre: 0
        },
        orcHache: {
            degats: () => 15 + (statPerso.Force * 3),
            IMG: "image/orcHache.webp",
            class: "image",
            test: "testOrcHache",
            title: "Une Hache fraichement trouvé sur un cadavre d'orc"
        },
        gobArc: {
            degats: () => 10 + 3 * statPerso.Dexterite,
            IMG: "image/gobArc.webp",
            class: "image",
            test: "testGobArc",
            title: "Un arc qui nécessite une bonne dextérité !"
        },
        orcEpee: {
            degats: () => 15 + 2 * statPerso.Force + 1 * statPerso.Dexterite,
            IMG: "image/orcEpee.webp",
            class: "image",
            test: "testOrcEpee",
            title: "Une épée recouverte de sang et de rouille"
        },
    },
    Chest: {
        Chest: { 
            def: 0, 
            IMG: "image/Torse.webp", 
            test: "testChest", 
            title:"votre torse" 
        },
        armureEnCuir: { 
            def: 10, 
            IMG: "image/armureEnCuir.webp", 
            test: "testArmureEnCuir", 
            title: "une armure en cuir vous protègeant des coups" 
        },
        armureEnFer: { 
            def: 90, IMG: "image/armureEnFer.webp", 
            test: "testArmureEnFer", 
            title :"une armure en fer vous protègeant de biens des attaques" 
        },
        armureEnCuivre: 15,
        armureEnPeau: 5,
        armureEnTissu: 7,
    },
    Head: {
        Head: { 
            def: 0, 
            IMG: "image/Tete.webp", 
            test: "testHead", 
            title:"votre tête" 
        },
        casqueEnCuir: { def: 10, IMG: "image/casqueEnCuir.webp", test: "testCasqueEnCuir", title: "un casque en cuir vous protègeant des coups" },
        casqueEnFer: 20,
        casqueEnCuivre: 15,
        casqueEnPeau: 5,
        casqueEnTissu: 7,
        orcCasque: {def : 7, IMG: "image/orcCasque.webp", test:"testOrcCasque", title:"Un casque qui ne sent pas bon"}
    },
    Ring: {
        Ring: {
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            test: "testRing",
            title : "emplacement pour ajouter un anneau"
        },
        anneauForce: {
            effet: false,
            IMG: "image/anneauForce.webp",
            test: "testAnneauForce",
            title:"anneau qui augmente votre force !"
        },
        anneauDexterite: {
            effet: false,
            IMG: "image/anneauForce.webp",
            test: "testAnneauDexterite",
            title: "anneau qui augmentaire votre dexterite"
        },
    },
    Neck: {
        Neck: {
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            test: "testNeck",
            title: "emplacement pour ajouter une amulette"
        },
    },
    Object: {
        potionVie: {
            effect: () => {
                if (statPerso.HPactual === statPerso.HP) { 
                    alert('HP déjà au maximum')
                    maxCheck = true
                } else {
                    statPerso.HPactual += 50 
                    if (statPerso.HPactual > statPerso.HP) {
                        statPerso.HPactual = statPerso.HP
                    }
                }
            },
                IMG: "image/potionVie.webp",
                title: "Potion de vie",
                nombre: 0,
        },
        potionMana: {
            effect: () => {
                if (statPerso.MPactual === statPerso.MP) { 
                    alert("MP déjà au maximum")
                    maxCheck = true
                } else {
                    statPerso.MPactual += 50 
                    if (statPerso.MPactual > statPerso.MP) {
                        statPerso.MPactual = statPerso.MP
                    }
                }
            },
            IMG: "image/potionMana.webp",
            title: "Potion de mana",
            nombre: 0,
        },
        pain: {
            effect: () => {
                    statPerso.HPactual += 25 
                    if (statPerso.HPactual > statPerso.HP) {
                        statPerso.HPactual = statPerso.HP
                    }
                    statPerso.MPactual += 25 
                    if (statPerso.MPactual > statPerso.MP) {
                        statPerso.MPactual = statPerso.MP
                    }
            },
            IMG: "image/pain.webp",
            title: "Pain",
            nombre: 0,
        },
    },
    Scroll: {
        sortFoudre : {
            effect: () => {statPerso.spells.push("sortFoudre")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
        },
        sortLumiere : {
            effect: "",
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
        },
        sortFeu : {
            effect: () => {statPerso.spells.push("sortFeu")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
        },
        sortArcane : {
            effect: () => {statPerso.spells.push("sortArcane")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
        },
        sortBlast : {
            effect: () => {statPerso.spells.push("sortBlast")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
        },
    }
};
console.log("apres scroll", statPerso.spells)
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
let money = 50
const inventaire = {
    LeftHand: [],
    RightHand: [],
    Chest: [],
    Head: [],
    Ring: [],
    Neck: [],
    Object: [],
    Scroll: [],
};
let maxCheck = false
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
    document.getElementById("statConc").textContent =
        `Lucidité : ${statPerso.Concentration}`;
    document.getElementById("statVol").textContent =
        `Volonté : ${statPerso.Volonte}`;
    document.getElementById("statInt").textContent =
        `Intelligence : ${statPerso.Intelligence}`;
    document.getElementById("point").textContent =
        `Point(s) disponible(s) : ${statPerso.Point}`;
    statPerso.HP = 50 + 25 * statPerso.Vitalite + 10 * statPerso.Force;
    document.getElementById("hp").textContent =
        `Points de vie : ${statPerso.HPactual}/${statPerso.HP}`;
    statPerso.MP = 50 + 25 * statPerso.Volonte + 10 * statPerso.Intelligence;
    document.getElementById("mp").textContent =
        `Points de mana : ${statPerso.MPactual}/${statPerso.MP}`;
    document.getElementById("inventaireOr").textContent =
        `Or : ${money}`
    document.getElementById("experience").textContent =
        `Expérience : ${statPerso.XP}`
    document.getElementById("level").textContent =
        `Niveau : ${statPerso.LVL}`
}
function addStat(stat) {
    if (statPerso.Point >= 1) {
        statPerso.Point--;
        statPerso[stat]++;
        if (stat === "Vitalite") {
            statPerso.HPactual += 25
        }
        if (stat === "Volonte") {
            statPerso.MPactual += 25
        }
        update();
        if (statPerso.Point === 0) {
            const btn = document.querySelectorAll(".btnStat");
            btn.forEach((element) => {
                element.style.display = "none";
                btnCheck = true;
            });
        }
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
    { id: "statFor", label: "Force", buttonId: "btnFor", buttonTestId:"testForce" },
    { id: "statDex", label: "Dextérité", buttonId: "btnDex+", buttonTestId:"testDexterite" },
    { id: "statVit", label: "Vitalité", buttonId: "btnVit+", buttonTestId:"testVitalite" },
    { id: "statVol", label: "Volonté", buttonId: "btnVol+", buttonTestId:"testVolonte" },
    { id: "statConc", label: "Lucidité", buttonId: "btnConc+", buttonTestId:"testConcentration" },
    { id: "statInt", label: "Intelligence", buttonId: "btnInt+", buttonTestId:"testIntelligence" },
];

statsHTML.forEach((stat) => {
    const statSpan = document.createElement("span");
    statSpan.id = stat.id;
    statSpan.textContent = `${stat.label} : 0`;

    const button = document.createElement("button");
    button.id = stat.buttonId;
    button.setAttribute("data-testid", stat.buttonTestId)
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
infoDiv.appendChild(document.createElement("br"));
const levelSpan = document.createElement("span");
levelSpan.id = "level";
levelSpan.textContent = `Niveau : ${statPerso.LVL}`;
infoDiv.appendChild(levelSpan);

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
        imgSrc: "image/mainGauche.webp",
        imgId: "mainGauche",
        title: "Arme en main gauche",
        class: "image",
        test : "testMainGauche"
    },
    {
        id: "DivRightHand",
        imgSrc: "image/mainDroite.webp",
        imgId: "mainDroite",
        title: "Arme en main droite",
        class: "image",
        test : "testMainDroite"
    },
    {
        id: "DivChest",
        imgSrc: "image/Torse.webp",
        imgId: "ChestImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image",
        test : "testChest"
    },
    {
        id: "DivHead",
        imgSrc: "image/Tete.webp",
        imgId: "HeadImage",
        title: "Equipez vous d'armure pour subir moins de dégats",
        class: "image",
        test : "testHead"
    },
    {
        id: "DivRing",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "RingImage",
        title: "Ici pour vous équipez de bijou",
        class: "image",
        test : "testRing"
    },
    {
        id: "DivNeck",
        imgSrc: "image/EmplacementAmulette.png",
        imgId: "NeckImage",
        title: "Ici pour vous équipez de bijou",
        class: "image",
        test : "testNeck"
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
    img.setAttribute("data-testid", equipement.test)
    img.width = 100;
    img.height = 108;
    equipementContainer.appendChild(img);
    equipementDiv.appendChild(equipementContainer);
});
document.body.appendChild(equipementDiv);

// CREATION INVENTAIRE
const inventaireDiv = document.createElement("div");
inventaireDiv.id = "inventaire";

const divTitreInv = document.createElement('div')
divTitreInv.id = "titreInventaire"

const TitreEtOr = document.createElement('div')
TitreEtOr.id = "titreEtOr"
TitreEtOr.style.display="flex"
TitreEtOr.style.gap = '300px';

const inventaireOr = document.createElement("span");
inventaireOr.id = "inventaireOr"
inventaireOr.textContent = `Or : ${money}`;

const inventaireTitle = document.createElement("span");
inventaireTitle.textContent = "Inventaire";

TitreEtOr.appendChild(inventaireTitle);
TitreEtOr.appendChild(inventaireOr);
inventaireDiv.appendChild(TitreEtOr)
inventaireDiv.appendChild(divTitreInv);
document.body.appendChild(inventaireDiv);
// CREATION CLASSE DE DEPART 

let classPerso = ""
console.log
if (!classPerso) {
    const classDepartDiv = document.createElement("div")
    classDepartDiv.id = "classDiv"
    const classTitle = document.createElement("p");
    classTitle.textContent = "Choisissez votre classe de départ"
    classDepartDiv.appendChild(classTitle)
    const classSpan = document.createElement('span')
    const classDepart = [
        {
            id : "magicien",
            class: "depart",
            testId : "testMagicien",
            IMG : "image/magicien.webp"
        },
        {
            id : "voleur",
            class: "depart",
            testId : "testVoleur",
            IMG : "image/voleur.webp"
        },
        {
            id : "guerrier",
            class: "depart",
            testId : "testGuerrier",
            IMG : "image/guerrier.webp"
        },
    ];
    classDepart.forEach((value) => {
                const classDiv = document.createElement("div");
                classDiv.id = value.id;
                classDiv.className = value.class;
                const classImg = document.createElement("img");
                classImg.id = value.id
                classImg.src = value.IMG;
                classImg.setAttribute("data-testid", value.testId)
                classImg.width = 300;
                classImg.height = 408;
                classDiv.appendChild(classImg);
                classSpan.appendChild(classDiv);
            });
            classDepartDiv.appendChild(classSpan);
            document.body.appendChild(classDepartDiv);
        }
const classDiv = document.getElementById("classDiv")
const mag = document.getElementById("magicien")
mag.addEventListener("click", () => {
    statPerso.Force = 0;
    statPerso.Dexterite = 2;
    statPerso.Intelligence = 4;
    statPerso.Concentration = 2;
    statPerso.Volonte = 3
    statPerso.Vitalite = 1
    update()
    statPerso.HPactual = statPerso.HP
    statPerso.MPactual = statPerso.MP
    update()
    classPerso = "magicien"
    classDiv.style.display="none"
})
const vol = document.getElementById("voleur")
vol.addEventListener("click", () => {
    statPerso.Force = 2;
    statPerso.Dexterite = 4;
    statPerso.Intelligence = 0;
    statPerso.Concentration = 2;
    statPerso.Volonte = 2
    statPerso.Vitalite = 2
    update()
    statPerso.HPactual = statPerso.HP
    statPerso.MPactual = statPerso.MP
    update()
    classPerso = "voleur"
    classDiv.style.display="none"
})
const guer = document.getElementById("guerrier")
guer.addEventListener("click", () => {
    statPerso.Force = 5;
    statPerso.Dexterite = 2;
    statPerso.Intelligence = 0;
    statPerso.Concentration = 1;
    statPerso.Volonte = 0
    statPerso.Vitalite = 4
    update()
    statPerso.HPactual = statPerso.HP
    statPerso.MPactual = statPerso.MP
    update()
    classPerso = "guerrier"
    classDiv.style.display="none"
})
//CREATION SECTION ARME DE DEPART
// if (!depart) {
//     const armeDepartDiv = document.createElement("div");
//     armeDepartDiv.id = "armeDepart";
//     const armeTitle = document.createElement("p");
//     armeTitle.textContent = "Choisissez votre arme";
//     armeDepartDiv.appendChild(armeTitle);
//     const equipementSpan = document.createElement("span");
//     const equipementDepart = [
//         {
//             id: "epeeDepart",
//             class: "depart",
//             testId : "testEpeeDepart",
//             imgSrc: "image/epeeDepart.webp",
//             title: "Epee simple || inflige des dégats selon la force et la dexterité", 
//         },
//         {
//             id: "hacheDepart",
//             class: "depart",
//             testId: "testHacheDepart",
//             imgSrc: "image/hacheDepart.webp",
//             title: "Hache simple || inflige des dégats selon la force",
//         },
//         {
//             id: "arcDepart",
//             class: "depart",
//             testId : "testArcDepart",
//             imgSrc: "image/arcDepart.webp",
//             title: "Arc simple || Inflige plus de dégats avec votre force et dexterité",
//         },
//         {
//             id: "batonDepart",
//             class: "depart",
//             testId : "testBatonDepart",
//             imgSrc: "image/batonDepart.webp",
//             title: "Baton simple || Inflige plus de dégats avec votre force et intelligence",
//         },
//     ];
//     equipementDepart.forEach((equipement) => {
//         const equipementDiv = document.createElement("div");
//         equipementDiv.id = equipement.id;
//         equipementDiv.className = equipement.class;
//         const equipementImg = document.createElement("img");
//         equipementImg.id = equipement.id
//         equipementImg.src = equipement.imgSrc;
//         equipementImg.setAttribute("data-testid", equipement.testId)
//         equipementImg.title = equipement.title;
//         equipementImg.width = 100;
//         equipementImg.height = 108;
//         equipementDiv.appendChild(equipementImg);
//         equipementSpan.appendChild(equipementDiv);
//     });
//     armeDepartDiv.appendChild(equipementSpan);
//     document.body.appendChild(armeDepartDiv);
// }
// elements.epeeDepart.addEventListener("click", () =>
//     takeWeapon("epeeDepart", "LeftHand", "depart"),
// );
// elements.hacheDepart.addEventListener("click", () =>
//     takeWeapon("hacheDepart", "LeftHand", "depart"),
// );
// elements.arcDepart.addEventListener("click", () =>
//     takeWeapon("arcDepart", "LeftHand", "depart"),
// );
// elements.batonDepart.addEventListener("click", () =>
//     takeWeapon("batonDepart", "LeftHand", "depart"),
// );
//CREATION BOUTON FERMER INVENTAIRE
const fermerButton = document.createElement("button");
fermerButton.id = "FermerInv";
fermerButton.dataset.testid = "closeInv";
fermerButton.textContent = "Fermer l'inventaire";

document.body.appendChild(fermerButton);
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
    .getElementById("btnConc+")
    .addEventListener("click", () => addStat("Concentration"));
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
    // if (genre === "depart") {
    //     depart = true;
    //     suppDepart();
    // }
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
function suppClassDepart() {
    if (classPerso !== "") {
        classDiv.remove();
    }
}
function takeObject(name, type, baseType) {
    //Utilisation objet : suppression objet et ajout de l'effet
    if (type === "Object") {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            gear[type][name].effect()
            if (maxCheck === true) {
                maxCheck = false
                return
            } else {
            inventaire[type].splice(index, 1);
            }
        } 
    } else if (type === "Scroll") {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            
            console.log("avant takeObject" , statPerso)
            gear[type][name].effect()
            inventaire[type].splice(index, 1);
            console.log(statPerso)
        } 
    } else {
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
    }
    update();
    VisualRender();
}

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
let itemList = [
    "anneauForce",
    "espadon",
    "anneauDexterite",
    "armureEnFer",
    "armureEnCuir",
    "casqueEnCuir",
    "dague",
    "torche",
    //x9 potion mana
    "potionMana",

    //x9 potion de vie
    "potionVie",

    //x9 pain
    "pain",
    "pain",
 
    "sortFeu",
    "sortLumiere",
    "sortFoudre",
    "sortBlast",
    "sortArcane",
]
let marketMemory = { start: [], }
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
        marketMemory,
        itemList,
        money,
        classPerso,
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
    skills = recData.donjonpath.dataStat.DonneeStatPerso.skills
    itemList = recData.donjonpath.dataStat.DonneeStatPerso.itemList
    marketMemory = recData.donjonpath.marketMemory
    roomIAm = recData.donjonpath.roomIAm;
    btnCheck = recData.donjonpath.dataStat.DonneeStatPerso.btnCheck;
    depart = recData.donjonpath.dataStat.DonneeStatPerso.depart;
    backCheck = recData.donjonpath.backCheck;
    message = recData.donjonpath.message;
    money = recData.donjonpath.dataStat.DonneeStatPerso.money
    classPerso = recData.donjonpath.dataStat.DonneeStatPerso.classPerso
    suppClassDepart()
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
            image.setAttribute('data-testid', gear[key][value].test)
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
                image.setAttribute('data-testid', gear[key][value].test)
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
VisualRender()
update()
