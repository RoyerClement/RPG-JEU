let compteurPerso = 1
let designationPerso = "perso"+compteurPerso
const triggerDesignation = () => {
    designationPerso = "perso" + compteurPerso

}

let nombreDePerso = 1
const statPerso = {
    perso1 : 
        {   
            type : "perso1",
            nom: "",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: [],
            arme:"",
            buff: [],
        },
        perso2 : 
        {   
            type : "perso2",
            nom:"",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: [],
            arme:"",
            buff: [],
        },
        perso3 : 
        {   
            type : "perso3",
            nom: "",
            class: "",
            Force: 0,
            Dexterite: 0,
            Vitalite: 0,
            Volonte: 0,
            Concentration: 0,
            Intelligence: 0,
            Point: 1,
            HP:50,
            HPactual: 50,
            MP: 50,
            MPactual: 50,
            XP: 0,
            LVL: 1,
            spells: [],
            arme:"",
            buff: [],
        },
};

const arme = {
    mainGauche: {
        genre:"contondant",
        degatsBase : 1,
        degatsForce: 0,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/mainGauche.webp",
    },
    mainDroite: {
        genre:"contondant",
        degatsBase : 1,
        degatsForce: 0,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/mainDroite.webp",
    },
    epeeDepart: {
        genre:"tranchant",
        degatsBase : 3,
        degatsForce: 2,
        degatsDexterite : 2,
        degatsIntelligence: 0,
        IMG: "image/epeeDepart.webp",
    },
    hacheDepart: {
        genre:"tranchant",
        degatsBase : 3,
        degatsForce: 4,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/hacheDepart.webp",
    },
    arcDepart: {
        genre:"estoc",  
        degatsBase : 2,
        degatsForce: 1,
        degatsDexterite : 2,
        degatsIntelligence: 0,
        IMG: "image/arcDepart.webp",
        twoHand: true,
    },
    batonDepart: {
        genre:"contondant",
        degatsBase : 5,
        degatsForce: 1,
        degatsDexterite : 0,
        degatsIntelligence: 3,
        IMG: "image/batonDepart.webp",
    },
    masse: {
        genre:"contondant",
        degatsBase : 9,
        degatsForce: 6,
        degatsDexterite : 1,
        degatsIntelligence: 0,
        IMG: "image/masse.webp",
        class: "image",
        test: "testMasse",
        title: "Une masse"
    },
    espadon: {
        genre:"tranchant",
        degatsBase : 7,
        degatsForce: 4,
        degatsDexterite : 2,
        degatsIntelligence: 0,
        IMG: "image/espadon.webp",
        twoHand: true,
    },
    batonMage : {
        genre:"contondant",
        degatsBase : 7,
        degatsForce: 0,
        degatsDexterite : 1,
        degatsIntelligence: 7,
        IMG: "image/batonMage.webp",
        class: "image",
        test: "testBatonMage",
        title: "Un baton excellent pour la pratique de la magie",
        twoHand: true,
    },
    batonClerc : {
        genre:"contondant",
        degatsBase : 7,
        degatsForce: 3,
        degatsDexterite : 0,
        degatsIntelligence: 4,
        IMG: "image/batonClerc.webp",
        class: "image",
        test: "testBatonClerc",
        title: "Un baton utilisé par les clercs",
        twoHand: true,
    },
    dague: {
        genre:"estoc",
        degatsBase : 5,
        degatsForce: 0,
        degatsDexterite : 3,
        degatsIntelligence: 0,
        IMG: "image/dague.webp",
    },
    torche: {
        genre:"contondant",
        degatsBase : 8,
        degatsForce: 0,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/torche.webp",
    },
    orcHache: {
        genre:"tranchant",
        degatsBase : 7,
        degatsForce: 5,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/orcHache.webp",
        class: "image",
        test: "testOrcHache",
        title: "Une Hache fraichement trouvé sur un cadavre d'orc"
    },
    gobArc: {
        genre:"estoc",
        degatsBase : 7,
        degatsForce: 1,
        degatsDexterite : 3,
        degatsIntelligence: 0,
        IMG: "image/gobArc.webp",
        class: "image",
        test: "testGobArc",
        title: "Un arc qui nécessite une bonne dextérité !",
        twoHand: true,
    },
    orcEpee: {
        genre:"tranchant",
        degatsBase : 7,
        degatsForce: 3,
        degatsDexterite : 3,
        degatsIntelligence: 0,
        IMG: "image/orcEpee.webp",
        class: "image",
        test: "testOrcEpee",
        title: "Une épée recouverte de sang et de rouille"
    },
    hallebarde: {
        genre:"tranchant",
        degatsBase : 7,
        degatsForce: 6,
        degatsDexterite : 2,
        degatsIntelligence: 0,
        IMG: "image/hallebarde.webp",
        class: "image",
        test: "testHallebarde",
        title: "Une hallebarde",
        twoHand: true,
    },
    katana: {
        genre:"tranchant",
        degatsBase : 8,
        degatsForce: 1,
        degatsDexterite : 5,
        degatsIntelligence: 0,
        IMG: "image/katana.webp",
        class: "image",
        test: "testKatana",
        title: "Un katana",
    },
    lance: {
        genre:"estoc",
        degatsBase : 6,
        degatsForce: 2,
        degatsDexterite : 3,
        degatsIntelligence: 1,
        IMG: "image/lance.webp",
        class: "image",
        test: "testLance",
        title: "Un lance",
        twoHand: true,
    },
    lance2: {
        genre:"estoc",
        degatsBase : 7,
        degatsForce: 6,
        degatsDexterite : 1,
        degatsIntelligence: 0,
        IMG: "image/lance2.webp",
        class: "image",
        test: "testLance2",
        title: "Un lance impressionnante",
        twoHand: true,
    },
    gourdin: {
        genre:"contondant",
        degatsBase : 7,
        degatsForce: 5,
        degatsDexterite : 0,
        degatsIntelligence: 0,
        IMG: "image/gourdin.webp",
        class: "image",
        test: "testGourdin",
        title: "Un gourdin",
    },
};
const gear = {
    LeftHand: {
        mainGauche: {
            degats: () => 1,
            IMG: "image/mainGauche.webp",
            class: "depart",
            test: "testMainGauche",
            title: "votre main gauche",
            nom : "Votre main gauche",
            description : "Arme contondante"
        },
        mainDroite: {
            degats: () => 1,
            IMG: "image/mainDroite.webp",
            class: "depart",
            test: "testMainDroite",
            title :"votre main droite",
            nom : "Votre main droit",
            description : "Arme contondante",
        },
        espadon: {
            //degats: () => 3 + (3 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Dexterite),
            IMG: "image/espadon.webp",
            class: "image",
            test: "testEspadon",
            title: "Une épée à deux mains",
            twoHand: true,
            nom : "Espadon",
            description : "Arme à deux mains"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
        },
        batonMage : {
            IMG: "image/batonMage.webp",
            class: "image",
            test: "testBatonMage",
            title: "Un baton excellent pour la pratique de la magie",
            twoHand: true,
            nom : "Baton d'Al-Jawarah",
            description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence"+"\n" +"Type de dégats : contondant"
        },
        batonClerc : {
            IMG: "image/batonClerc.webp",
            class: "image",
            test: "testBatonClerc",
            title: "Un baton utilisé par les clercs",
            twoHand: true,
            nom : "Baton d'Ulric",
            description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence et la force"+"\n" +"Type de dégats : contondant"
        },
        lance: {
            IMG: "image/lance.webp",
            class: "image",
            test: "testLance",
            title: "Un lance",
            twoHand: true,
            nom : "Lance",
            description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence, la force et la dextérité"+"\n" +"Type de dégats : estoc"
        },
        gourdin: {
            IMG: "image/gourdin.webp",
            class: "image",
            test: "testGourdin",
            title: "Un gourdin",
            nom : "Gourdin",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : contondant"
        },
        masse: {
            IMG: "image/masse.webp",
            class: "image",
            test: "testMasse",
            title: "Une masse",
            nom : "Masse",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : contondant"
        },
        hallebarde: {
            IMG: "image/hallebarde.webp",
            class: "image",
            test: "testHallebarde",
            title: "Une hallebarde",
            twoHand: true,
            nom : "Hallebarde",
            description : "Arme à deux mains"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
        },
        lance2: {
            IMG: "image/lance2.webp",
            class: "image",
            test: "testLance2",
            title: "Un lance impressionnante",
            twoHand: true,
            nom : "Lance sombre",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : estoc"
        },
        katana: {
            IMG: "image/katana.webp",
            class: "image",
            test: "testKatana",
            title: "Un katana",
            nom : "Katana",
            description : "Arme à une main"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : tranchant"
        },
        dague: {
            degats: () => 3 + 3 * statPerso[designationPerso].Dexterite,
            IMG: "image/dague.webp",
            class: "image",
            test: "testDague",
            title : "une dague en bon état",
            nom : "Dague",
            description : "Arme à une main"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
        },
        epeeDepart: {
            degats: () => 900 + (2 * statPerso[designationPerso].Force + 1 * statPerso[designationPerso].Dexterite),
            IMG: "image/epeeDepart.webp",
            class: "depart",
            test: "testEpeeDepart",
            title: "une épée de mauvaise qualité",
            nom : "Epee simple",
            description : "Arme à une main"+"\n" +" Affinité avec la force et la dextérité"+"\n" +"Type de dégats : tranchant"
        },
        hacheDepart: {
            degats: () => 5 + 3 * statPerso[designationPerso].Force,
            IMG: "image/hacheDepart.webp",
            class: "depart",
            test: "testHacheDepart",
            title: "une hache emoussée",
            nom : "Hache simple",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
        },
        arcDepart: {
            degats: () => 4 + 1 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Dexterite,
            IMG: "image/arcDepart.webp",
            class: "depart",
            test: "testArcDepart",
            title: "un arc rudimentaire",
            twoHand: true,
            nom : "Arc simple",
            description : "Arme à deux mains"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
        },
        batonDepart: {
            degats: () => 7 + 1 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Intelligence,
            IMG: "image/batonDepart.webp",
            class: "depart",
            test: "testBatonDepart",
            title: "un baton rudimentaire",
            nom : "Baton simple",
            description : "Arme à une main"+"\n" +" Affinité avec l'intelligence"+"\n" +"Type de dégats : contondant"
        },
        torche: {
            degats: () => 10,
            IMG: "image/torche.webp",
            class: "image",
            test: "testTorche",
            title: "une torche",
            nom : "Torche",
            description : "Arme à une main"+"\n" +"Permet de s'éclairer dans le donjon"+"\n" +"Type de dégats : contondant",
        },
        orcHache: {
            degats: () => 15 + (statPerso[designationPerso].Force * 3),
            IMG: "image/orcHache.webp",
            class: "image",
            test: "testOrcHache",
            title: "Une Hache fraichement trouvé sur un cadavre d'orc",
            nom : "Hache d'orc",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
        },
        gobArc: {
            degats: () => 10 + 3 * statPerso[designationPerso].Dexterite,
            IMG: "image/gobArc.webp",
            class: "image",
            test: "testGobArc",
            title: "Un arc qui nécessite une bonne dextérité !",
            twoHand: true,
            nom : "Arc de gobelin",
            description : "Arme à deux mains"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
        },
        orcEpee: {
            degats: () => 15 + 2 * statPerso[designationPerso].Force + 1 * statPerso[designationPerso].Dexterite,
            IMG: "image/orcEpee.webp",
            class: "image",
            test: "testOrcEpee",
            title: "Une épée recouverte de sang et de rouille",
            nom : "Epée d'orc",
            description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
        },
    },
    RightHand: {
            mainGauche: {
                degats: () => 1,
                IMG: "image/mainGauche.webp",
                class: "depart",
                test: "testMainGauche",
                title: "votre main gauche",
                nom : "Votre main gauche",
                description : "Arme contondante"
            },
            mainDroite: {
                degats: () => 1,
                IMG: "image/mainDroite.webp",
                class: "depart",
                test: "testMainDroite",
                title :"votre main droite",
                nom : "Votre main droit",
                description : "Arme contondante",
            },
            espadon: {
                //degats: () => 3 + (3 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Dexterite),
                IMG: "image/espadon.webp",
                class: "image",
                test: "testEspadon",
                title: "Une épée à deux mains",
                twoHand: true,
                nom : "Espadon",
                description : "Arme à deux mains"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
            },
            batonMage : {
                IMG: "image/batonMage.webp",
                class: "image",
                test: "testBatonMage",
                title: "Un baton excellent pour la pratique de la magie",
                twoHand: true,
                nom : "Baton d'Al-Jawarah",
                description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence"+"\n" +"Type de dégats : contondant"
            },
            batonClerc : {
                IMG: "image/batonClerc.webp",
                class: "image",
                test: "testBatonClerc",
                title: "Un baton utilisé par les clercs",
                twoHand: true,
                nom : "Baton d'Ulric",
                description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence et la force"+"\n" +"Type de dégats : contondant"
            },
            lance: {
                IMG: "image/lance.webp",
                class: "image",
                test: "testLance",
                title: "Un lance",
                twoHand: true,
                nom : "Lance",
                description : "Arme à deux mains"+"\n" +" Affinité avec l'intelligence, la force et la dextérité"+"\n" +"Type de dégats : estoc"
            },
            gourdin: {
                IMG: "image/gourdin.webp",
                class: "image",
                test: "testGourdin",
                title: "Un gourdin",
                nom : "Gourdin",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : contondant"
            },
            masse: {
                IMG: "image/masse.webp",
                class: "image",
                test: "testMasse",
                title: "Une masse",
                nom : "Masse",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : contondant"
            },
            hallebarde: {
                IMG: "image/hallebarde.webp",
                class: "image",
                test: "testHallebarde",
                title: "Une hallebarde",
                twoHand: true,
                nom : "Hallebarde",
                description : "Arme à deux mains"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
            },
            lance2: {
                IMG: "image/lance2.webp",
                class: "image",
                test: "testLance2",
                title: "Un lance impressionnante",
                twoHand: true,
                nom : "Lance sombre",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : estoc"
            },
            katana: {
                IMG: "image/katana.webp",
                class: "image",
                test: "testKatana",
                title: "Un katana",
                nom : "Katana",
                description : "Arme à une main"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : tranchant"
            },
            dague: {
                degats: () => 3 + 3 * statPerso[designationPerso].Dexterite,
                IMG: "image/dague.webp",
                class: "image",
                test: "testDague",
                title : "une dague en bon état",
                nom : "Dague",
                description : "Arme à une main"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
            },
            epeeDepart: {
                degats: () => 900 + (2 * statPerso[designationPerso].Force + 1 * statPerso[designationPerso].Dexterite),
                IMG: "image/epeeDepart.webp",
                class: "depart",
                test: "testEpeeDepart",
                title: "une épée de mauvaise qualité",
                nom : "Epee simple",
                description : "Arme à une main"+"\n" +" Affinité avec la force et la dextérité"+"\n" +"Type de dégats : tranchant"
            },
            hacheDepart: {
                degats: () => 5 + 3 * statPerso[designationPerso].Force,
                IMG: "image/hacheDepart.webp",
                class: "depart",
                test: "testHacheDepart",
                title: "une hache emoussée",
                nom : "Hache simple",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
            },
            arcDepart: {
                degats: () => 4 + 1 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Dexterite,
                IMG: "image/arcDepart.webp",
                class: "depart",
                test: "testArcDepart",
                title: "un arc rudimentaire",
                twoHand: true,
                nom : "Arc simple",
                description : "Arme à deux mains"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
            },
            batonDepart: {
                degats: () => 7 + 1 * statPerso[designationPerso].Force + 2 * statPerso[designationPerso].Intelligence,
                IMG: "image/batonDepart.webp",
                class: "depart",
                test: "testBatonDepart",
                title: "un baton rudimentaire",
                nom : "Baton simple",
                description : "Arme à une main"+"\n" +" Affinité avec l'intelligence"+"\n" +"Type de dégats : contondant"
            },
            torche: {
                degats: () => 10,
                IMG: "image/torche.webp",
                class: "image",
                test: "testTorche",
                title: "une torche",
                nom : "Torche",
                description : "Arme à une main"+"\n" +"Permet de s'éclairer dans le donjon"+"\n" +"Type de dégats : contondant",
            },
            orcHache: {
                degats: () => 15 + (statPerso[designationPerso].Force * 3),
                IMG: "image/orcHache.webp",
                class: "image",
                test: "testOrcHache",
                title: "Une Hache fraichement trouvé sur un cadavre d'orc",
                nom : "Hache d'orc",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
            },
            gobArc: {
                degats: () => 10 + 3 * statPerso[designationPerso].Dexterite,
                IMG: "image/gobArc.webp",
                class: "image",
                test: "testGobArc",
                title: "Un arc qui nécessite une bonne dextérité !",
                twoHand: true,
                nom : "Arc de gobelin",
                description : "Arme à deux mains"+"\n" +" Affinité avec la dextérité"+"\n" +"Type de dégats : estoc"
            },
            orcEpee: {
                degats: () => 15 + 2 * statPerso[designationPerso].Force + 1 * statPerso[designationPerso].Dexterite,
                IMG: "image/orcEpee.webp",
                class: "image",
                test: "testOrcEpee",
                title: "Une épée recouverte de sang et de rouille",
                nom : "Epée d'orc",
                description : "Arme à une main"+"\n" +" Affinité avec la force"+"\n" +"Type de dégats : tranchant"
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
            title: "une armure en cuir vous protègeant des coups" ,
            nom : "Armure en cuir",
            description : "Protège votre torse"+"\n" +"+ 10 en défense"
        },
        armureEnFer: { 
            def: 90, IMG: "image/armureEnFer.webp", 
            test: "testArmureEnFer", 
            title :"une armure en fer vous protègeant de biens des attaques",
            nom : "Armure en fer",
            description : "Protège votre torse"+"\n" +"+ 20 en défense"
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
        casqueEnCuir: { 
            def: 10, 
            IMG: "image/casqueEnCuir.webp", 
            test: "testCasqueEnCuir", 
            title: "un casque en cuir vous protègeant des coups",
            nom : "Casque en cuir",
            description : "Protège votre tête"+"\n" +"+ 10 en défense"
        },
        casqueEnFer: 20,
        casqueEnCuivre: 15,
        casqueEnPeau: 5,
        casqueEnTissu: 7,
        orcCasque: {
            def : 7, 
            IMG: "image/orcCasque.webp", 
            test:"testOrcCasque", 
            title:"Un casque qui ne sent pas bon",
            nom : "Casque d'orc",
            description : "Protège votre tête"+"\n" +"+ 7 en défense"
        }
    },
    Ring: {
        Ring: {
            def : 0,
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            test: "testRing",
            title : "emplacement pour ajouter un anneau"
        },
        anneauForce: {
            def : 0,
            effet: false,
            IMG: "image/anneauForce.webp",
            test: "testAnneauForce",
            title:"anneau qui augmente votre force !",
            nom : "Anneau de loup",
            description : "Améliore votre force"
        },
        anneauDexterite: {
            def : 0,
            effet: false,
            IMG: "image/anneauDex.webp",
            test: "testAnneauDexterite",
            title: "anneau qui augmentaire votre dexterite",
            nom : "Anneau de chat",
            description : "Améliore votre dextérité"
        },
        anneauDef: {
            def : 8,
            effet: false,
            IMG: "image/anneauDef.webp",
            test: "testAnneauDef",
            title:"anneau qui augmente votre défense !",
            nom : "Anneau d'ours",
            description : "Améliore votre fer"
        },
        anneauInt: {
            def : 0,
            effet: false,
            IMG: "image/anneauInt.webp",
            test: "testAnneauInt",
            title:"anneau qui augmente votre intelligence !",
            nom : "Anneau de corbeau",
            description : "Améliore votre intelligence",
        },
        anneauVie: {
            def : 0,
            effet: false,
            IMG: "image/anneauVie.webp",
            test: "testAnneauVie",
            title:"anneau qui augmente vos points de vie !",
            nom : "Anneau d'ours",
            description : "Améliore votre vie",
        },
        anneauLuc: {
            def : 0,
            effet: false,
            IMG: "image/anneauLuc.webp",
            test: "testAnneauLuc",
            title:"anneau qui augmente votre lucidité !",
            nom : "Anneau de tortue",
            description : "Améliore votre lucidité"
        },
    },
    Neck: {
        Neck: {
            effet: null,
            IMG: "image/EmplacementAmulette.png",
            test: "testNeck",
            title: "emplacement pour ajouter une amulette"
        },
        amuDoubleTour: {
            def : 0,
            effet: false,
            IMG: "image/amu10.webp",
            test: "testAmuDoubleTour",
            title:"Amulette qui vous permet d'aller si vite que les ennemis ont l'impression que vous avez un double !",
            nom : "Amulette d'Ubiquite",
            description : "Vous permet de jouer deux fois lors des combats"
        },
        amuCelerite: {
            def : 0,
            effet: false,
            IMG: "image/amu7.webp",
            test: "testAmuCelerite",
            title:"Amulette qui vous rend plus rapide !",
            nom : "Amulette de Célérité",
            description : "Vous permet de jouer en premier lors des combats"
        },
        amuBrut: {
            def : 0,
            effet: false,
            IMG: "image/amu11.webp",
            test: "testAmuBrut",
            title:"Amulette qui augmente vos dégats !",
            nom : "Amulette Brut",
            description : "Augmente les dégats de vos attaques et compétences de 20%"
        },
        amuSort: {
            def : 0,
            effet: false,
            IMG: "image/amu9.webp",
            test: "testAmuSort",
            title:"Amulette qui augmente les dégats de vos sorts !",
            nom : "Amulette de sorcellerie",
            description : "Augmente les dégats vos sorts de 25%"
        },
        amuVamp: {
            def : 0,
            effet: false,
            IMG: "image/amu8.webp",
            test: "testAmuVamp",
            title:"Amulette qui absorbe la vie de vos adversaires !",
            nom : "Amulette de vampirisme",
            description : "Gagnez 20% des dégats que vos attaques inflige sous forme de point de vie "
        },
        amuCauchemar: {
            def : 0,
            effet: false,
            IMG: "image/amu12.webp",
            test: "testAmuCauchemar",
            title:"Amulette qui absorbe la vie de vos adversaires !",
            nom : "Amulette de cauchemar",
            description : "Gagnez 20% des dégats que vos attaques inflige sous forme de point de mana "
        },
        amuConcentration: {
            def : 0,
            effet: false,
            IMG: "image/amu5.webp",
            test: "testAmuConcentration",
            title:"Fini d'avoir à vous concentrer !",
            nom : "Amulette de concentration",
            description : "Vous n'avez plus besoin de vous concentrer pour lancer vos sorts & compétences"
        },
        amuAvidite: {
            def : 0,
            effet: false,
            IMG: "image/amu6.webp",
            test: "testAmuAvidite",
            title:"Gagnez plus d'or lors des combats",
            nom : "Amulette d'avidité",
            description : "Gagnez plus d'or lors des combats"
        },
        amuLumiere: {
            def : 0,
            effet: false,
            IMG: "image/amu2.webp",
            test: "testAmuLumiere",
            title:"Vous éclaire",
            nom : "Amulette de lumière",
            description : "Vous éclaire dans la pénombre de ce donjon"
        },
    },
    Object: {
        potionVie: {
            effect: () => {
                if (statPerso[designationPerso].HPactual === statPerso[designationPerso].HP) { 
                    alert('HP déjà au maximum')
                    maxCheck = true
                } else {
                    statPerso[designationPerso].HPactual += 50 
                    if (statPerso[designationPerso].HPactual > statPerso[designationPerso].HP) {
                        statPerso[designationPerso].HPactual = statPerso[designationPerso].HP
                    }
                }
            },
                IMG: "image/potionVie.webp",
                title: "Potion de vie",
                nombre: 0,
                nom : "Potion de vie",
                description : "Soigne 50HP"
        },
        potionMana: {
            effect: () => {
                if (statPerso[designationPerso].MPactual === statPerso[designationPerso].MP) { 
                    alert("MP déjà au maximum")
                    maxCheck = true
                } else {
                    statPerso[designationPerso].MPactual += 50 
                    if (statPerso[designationPerso].MPactual > statPerso[designationPerso].MP) {
                        statPerso[designationPerso].MPactual = statPerso[designationPerso].MP
                    }
                }
            },
            IMG: "image/potionMana.webp",
            title: "Potion de mana",
            nombre: 0,
            nom : "Potion de mana",
                description : "Ajoute 50MP"
        },
        pain: {
            effect: () => {
                    statPerso[designationPerso].HPactual += 25 
                    if (statPerso[designationPerso].HPactual > statPerso[designationPerso].HP) {
                        statPerso[designationPerso].HPactual = statPerso[designationPerso].HP
                    }
                    statPerso[designationPerso].MPactual += 25 
                    if (statPerso[designationPerso].MPactual > statPerso[designationPerso].MP) {
                        statPerso[designationPerso].MPactual = statPerso[designationPerso].MP
                    }
            },
            IMG: "image/pain.webp",
            title: "Pain",
            nombre: 0,
            nom : "Pain",
            description : "Soigne 25HP/25MP"
        },
    },
    Scroll: {
        sortFoudre : {
            effect: () => {statPerso[designationPerso].spells.push("sortFoudre")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Parchemin de foudre",
            description : "Vous permet d'apprendre le sort : Foudre"
        },
        sortLumiere : {
            effect: "",
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Parchemin de lumière",
            description : "Vous permet d'apprendre le sort : Lumière"
        },
        sortFeu : {
            effect: () => {statPerso[designationPerso].spells.push("sortFeu")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Parchemin de feu",
            description : "Vous permet d'apprendre le sort : Feu"
        },
        sortArcane : {
            effect: () => {statPerso[designationPerso].spells.push("sortArcane")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Parchemin d'arcane",
            description : "Vous permet d'apprendre le sort : Arcane"
        },
        sortBlast : {
            effect: () => {statPerso[designationPerso].spells.push("sortBlast")},
            IMG: "image/parchemin.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Parchemin de souffle",
            description : "Vous permet d'apprendre le sort : Blast"
        },
        skillVol : {
            effect: () => {statPerso[designationPerso].spells.push("skillVol")},
            IMG: "image/parcheminSkill.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Technique de combat",
            description : "Vous permet d'apprendre la compétence : Voler"
        },
        skillAll : {
            effect: () => {statPerso[designationPerso].spells.push("skillAll")},
            IMG: "image/parcheminSkill.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Technique de combat",
            description : "Vous permet d'apprendre la compétence : Attaque Horizontale"
        },
        skillDouble : {
            effect: () => {statPerso[designationPerso].spells.push("skillDouble")},
            IMG: "image/parcheminSkill.webp",
            title: "Lisez ce parchemin pour apprendre un sort",
            nom : "Technique de combat",
            description : "Vous permet d'apprendre la compétence : Double Attaque"
        },
    }
} 
const Buff = {
    anneauForce: () => (statPerso[designationPerso].Force += 5),
    anneauDexterite: () => (statPerso[designationPerso].Dexterite += 5),
    anneauInt: () => (statPerso[designationPerso].Intelligence += 5),
    anneauVie: () => (statPerso[designationPerso].Vitalite += 5),
    anneauDef: () => (statPerso),
    anneauLuc: () => (statPerso[designationPerso].Concentration += 4),
    amuDoubleTour: () => statPerso[designationPerso].buff.push("amuDoubleTour"),
    amuCelerite: () => statPerso[designationPerso].buff.push("amuCelerite"),
    amuBrut: () => statPerso[designationPerso].buff.push("amuBrut"),
    amuSort : () => statPerso[designationPerso].buff.push("amuSort"),
    amuVamp : () => statPerso[designationPerso].buff.push("amuVamp"),
    amuCauchemar : () => statPerso[designationPerso].buff.push("amuCauchemar"),
    amuConcentration : () => statPerso[designationPerso].buff.push("amuConcentration"),
    amuAvidite : () => statPerso[designationPerso].buff.push("amuAvidite"),
    amuLumiere : () => statPerso[designationPerso].buff.push("amuLumiere"),
};
const Debuff = {
    anneauForce: () => (statPerso[designationPerso].Force -= 5),
    anneauDexterite: () => (statPerso[designationPerso].Dexterite -= 5),
    anneauInt: () => (statPerso[designationPerso].Intelligence -= 5),
    anneauVie: () => (statPerso[designationPerso].Vitalite -= 5),
    anneauDef: () => (statPerso),
    anneauLuc: () => (statPerso[designationPerso].Concentration -= 4),
    amuDoubleTour: () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuDoubleTour")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuCelerite: () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuCelerite")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuBrut: () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuBrut")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuSort : () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuSort")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuVamp : () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuVamp")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuCauchemar : () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuCauchemar")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuConcentration :() => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuConcentration")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuAvidite :() => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuAvidite")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
    amuLumiere : () => {
        const index = statPerso[designationPerso].buff.findIndex(value => value === "amuLumiere")
        if (index !== -1){
            statPerso[designationPerso].buff.splice(index, 1)
        }
    },
};
const equipement = {
    perso1 : 
    {
        LeftHand: "mainGauche",
        RightHand: "mainDroite",
        Chest: "Chest",
        Head: "Head",
        Ring: "Ring",
        Neck: "Neck",
    },
    perso2 : 
    {
        LeftHand: "mainGauche",
        RightHand: "mainDroite",
        Chest: "Chest",
        Head: "Head",
        Ring: "Ring",
        Neck: "Neck",
    },
    perso3 : 
    {
        LeftHand: "mainGauche",
        RightHand: "mainDroite",
        Chest: "Chest",
        Head: "Head",
        Ring: "Ring",
        Neck: "Neck",
    },
};

const stats = {
    perso1 : {
        get LeftHand() {
            return arme[equipement.perso1.LeftHand].degatsBase+ 
            (arme[equipement.perso1.LeftHand].degatsForce*statPerso.perso1.Force) + 
            (arme[equipement.perso1.LeftHand].degatsDexterite*statPerso.perso1.Dexterite) +
            (arme[equipement.perso1.LeftHand].degatsIntelligence*statPerso.perso1.Intelligence); 
        },
        get RightHand() {
            return arme[equipement.perso1.RightHand].degatsBase+ 
            (arme[equipement.perso1.RightHand].degatsForce*statPerso.perso1.Force) + 
            (arme[equipement.perso1.RightHand].degatsDexterite*statPerso.perso1.Dexterite) +
            (arme[equipement.perso1.RightHand].degatsIntelligence*statPerso.perso1.Intelligence); 
        },
        get Def() {
            return (
                gear.Chest[equipement.perso1.Chest].def + gear.Head[equipement.perso1.Head].def + gear.Ring[equipement.perso1.Ring].def
            );
        }
    },
    perso2 : {
        get LeftHand() {
            return arme[equipement.perso2.LeftHand].degatsBase+ 
            (arme[equipement.perso2.LeftHand].degatsForce*statPerso.perso2.Force) + 
            (arme[equipement.perso2.LeftHand].degatsDexterite*statPerso.perso2.Dexterite) +
            (arme[equipement.perso2.LeftHand].degatsIntelligence*statPerso.perso2.Intelligence); 
        },
        get RightHand() {
            return arme[equipement.perso2.RightHand].degatsBase+ 
            (arme[equipement.perso2.RightHand].degatsForce*statPerso.perso2.Force) + 
            (arme[equipement.perso2.RightHand].degatsDexterite*statPerso.perso2.Dexterite) +
            (arme[equipement.perso2.RightHand].degatsIntelligence*statPerso.perso2.Intelligence); 
        },
        get Def() {
            return (
                gear.Chest[equipement.perso2.Chest].def + gear.Head[equipement.perso2.Head].def + gear.Ring[equipement.perso2.Ring].def
            );
        }
    },
    perso3 : {
        get LeftHand() {
            return arme[equipement.perso3.LeftHand].degatsBase+ 
            (arme[equipement.perso3.LeftHand].degatsForce*statPerso.perso3.Force) + 
            (arme[equipement.perso3.LeftHand].degatsDexterite*statPerso.perso3.Dexterite) +
            (arme[equipement.perso3.LeftHand].degatsIntelligence*statPerso.perso3.Intelligence)
        },
        get RightHand() {
            return arme[equipement.perso3.RightHand].degatsBase+ 
            (arme[equipement.perso3.RightHand].degatsForce*statPerso.perso3.Force) + 
            (arme[equipement.perso3.RightHand].degatsDexterite*statPerso.perso3.Dexterite) +
            (arme[equipement.perso3.RightHand].degatsIntelligence*statPerso.perso3.Intelligence)
        },
        get Def() {
            return (
                gear.Chest[equipement.perso3.Chest].def + gear.Head[equipement.perso3.Head].def + gear.Ring[equipement.perso3.Ring].def
            );
        }
    },

};
let money = 5000
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
    document.getElementById("namePerso").textContent = `${statPerso[designationPerso].nom}`
    document.getElementById("defense").textContent = `Défense : ${stats[designationPerso].Def}`;
    document.getElementById("degatsArmeG").textContent =
        `Arme gauche : ${stats[designationPerso].LeftHand}`;
    document.getElementById("degatsArmeD").textContent =
        `Arme droite : ${stats[designationPerso].RightHand}`;
    document.getElementById("statFor").textContent =
        `Force : ${statPerso[designationPerso].Force}`;
    document.getElementById("statDex").textContent =
        `Dextérité : ${statPerso[designationPerso].Dexterite}`;
    document.getElementById("statVit").textContent =
        `Vitalité : ${statPerso[designationPerso].Vitalite}`;
    document.getElementById("statConc").textContent =
        `Lucidité : ${statPerso[designationPerso].Concentration}`;
    document.getElementById("statVol").textContent =
        `Volonté : ${statPerso[designationPerso].Volonte}`;
    document.getElementById("statInt").textContent =
        `Intelligence : ${statPerso[designationPerso].Intelligence}`;
    document.getElementById("point").textContent =
        `Point(s) disponible(s) : ${statPerso[designationPerso].Point}`;
    statPerso[designationPerso].HP = 50 + 25 * statPerso[designationPerso].Vitalite + 10 * statPerso[designationPerso].Force;
    document.getElementById("hp").textContent =
        `Points de vie : ${statPerso[designationPerso].HPactual}/${statPerso[designationPerso].HP}`;
    statPerso[designationPerso].MP = 50 + 25 * statPerso[designationPerso].Volonte + 10 * statPerso[designationPerso].Intelligence;
    document.getElementById("mp").textContent =
        `Points de mana : ${statPerso[designationPerso].MPactual}/${statPerso[designationPerso].MP}`;
    document.getElementById("inventaireOr").textContent =
        `Or : ${money}`
    document.getElementById("experience").textContent =
        `Expérience : ${statPerso[designationPerso].XP}`
    document.getElementById("level").textContent =
        `Niveau : ${statPerso[designationPerso].LVL}`
}
function addStat(stat) {
    if (statPerso[designationPerso].Point >= 1) {
        statPerso[designationPerso].Point--;
        statPerso[designationPerso][stat]++;
        if (stat === "Vitalite") {
            statPerso[designationPerso].HPactual += 25
        }
        if (stat === "Volonte") {
            statPerso[designationPerso].MPactual += 25
        }
        update();
        if (statPerso[designationPerso].Point === 0) {
            const btn = document.querySelectorAll(".btnStat");
            btn.forEach((element) => {
                element.style.visibility = "hidden";
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
            element.style.visibility = "hidden";
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
levelSpan.textContent = `Niveau : ${statPerso.perso1.LVL}`;
infoDiv.appendChild(levelSpan);

document.body.appendChild(infoDiv);
//CREATION NOM PERSO
const nomPerso = document.createElement("div")
nomPerso.id = "nomPerso"
const spanNomPerso = document.createElement("span")
spanNomPerso.id = "namePerso"
spanNomPerso.textContent = statPerso.perso1.nom
nomPerso.appendChild(spanNomPerso)
document.body.appendChild(nomPerso)
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


//CHANGER DE PERSO  
const btnSwitchPersoNext = document.createElement("button")
btnSwitchPersoNext.textContent = "->"
btnSwitchPersoNext.id = "nextPerso"
btnSwitchPersoNext.addEventListener("click", () => {
    compteurPerso++
    if (compteurPerso > nombreDePerso) {
        compteurPerso = 1
    }
    
    triggerDesignation()
    update()
    if (statPerso[designationPerso].Point === 0) {
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.visibility = "hidden";
        });
    } else { 
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.visibility = "visible";
        });
     }
    VisualRender()
})
const btnSwitchPersoBack = document.createElement("button")
btnSwitchPersoBack.textContent = "<-"
btnSwitchPersoBack.id = "backPerso"
btnSwitchPersoBack.addEventListener("click", () => {
    compteurPerso--
    
    if (compteurPerso < 1) {
        compteurPerso = nombreDePerso   
    }
    triggerDesignation()
    update()
    if (statPerso[designationPerso].Point === 0) {
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.visibility = "hidden";
        });
    } else { 
        const btn = document.querySelectorAll(".btnStat");
        btn.forEach((element) => {
            element.style.visibility = "visible";
        });
     }
    VisualRender()
})
equipementDiv.appendChild(btnSwitchPersoBack)
equipementDiv.appendChild(btnSwitchPersoNext)
document.body.appendChild(equipementDiv);

function checkNombrePerso() {
    console.log("nombre de perso : ", nombreDePerso)
    const idBtnPersoBack = document.getElementById("backPerso")
    const idBtnPersoNext = document.getElementById("nextPerso")
    if (statPerso.perso3.nom) {
        nombreDePerso = 3
    } else if (statPerso.perso2.nom) {
        nombreDePerso = 2
    } else {
        nombreDePerso = 1
    }
    if (nombreDePerso === 1) {
        idBtnPersoBack.style.display="none"
        idBtnPersoNext.style.display="none"
    } else {
        idBtnPersoBack.style.display="block"
        idBtnPersoNext.style.display="block"
    }
}
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

//CREATION NOM PERSO 

if (!statPerso.perso1.nom) {
    const selectName = document.createElement("div")
    selectName.id = "nameDiv"
    const nameTitle = document.createElement("p")
    nameTitle.textContent = "Ecrivez le nom de votre personnage"
    nameTitle.style.position = "absolute";
    nameTitle.style.left = "200px";
    nameTitle.style.top = "100px";
    let input = document.createElement("input");
    input.type = "text";
    input.id = "nom"
    input.className = "info";
    input.placeholder = "Entrez le nom de votre personnage";
    input.style.position = "absolute";
    input.style.left = "200px";
    input.style.top = "200px";
    const btnNameOk = document.createElement("button")
    btnNameOk.textContent = "Validez"
    btnNameOk.style.position = "absolute";
    btnNameOk.style.left = "400px";
    btnNameOk.style.top = "200px";
    btnNameOk.addEventListener("click", () => {
        statPerso.perso1.nom = input.value.trim() ? input.value : "Luigi Mangione";
        selectName.style.display = "none"
    })
    selectName.appendChild(nameTitle)
    selectName.appendChild(input)
    selectName.appendChild(btnNameOk)
    
    document.body.appendChild(selectName)
}

// CREATION CLASSE DE DEPART 

if (!statPerso.perso1.class) {
    const classDepartDiv = document.createElement("div")
    classDepartDiv.id = "classDiv"
    const classTitle = document.createElement("p");
    classTitle.textContent = "Choisissez votre classe de départ"
    classTitle.style.position = "absolute";
    classTitle.style.left = "300px";
    classDepartDiv.appendChild(classTitle)
    classDepartDiv.appendChild(document.createElement("br"));
    classDepartDiv.appendChild(document.createElement("br"));
    classDepartDiv.appendChild(document.createElement("br"));
    classDepartDiv.appendChild(document.createElement("br"));
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
                // const classDiv = document.createElement("div");
                // classDiv.id = value.id;
                
                const classImg = document.createElement("img");
                classImg.className = value.class;
                classImg.id = value.id
                classImg.src = value.IMG;
                classImg.setAttribute("data-testid", value.testId)
                classImg.width = 300;   
                classImg.height = 408;
                // classDiv.appendChild(classImg);
                classSpan.appendChild(classImg);
            });
            classDepartDiv.appendChild(classSpan);
            document.body.appendChild(classDepartDiv);
        
const classDiv = document.getElementById("classDiv")
const mag = document.getElementById("magicien")
mag.addEventListener("click", () => {
    let designationPerso = "perso"+compteurPerso
    statPerso[designationPerso].Force = 0;
    statPerso[designationPerso].Dexterite = 1;
    statPerso[designationPerso].Intelligence = 3;
    statPerso[designationPerso].Concentration = 3;
    statPerso[designationPerso].Volonte = 1
    statPerso[designationPerso].Vitalite = 0
    update()
    statPerso[designationPerso].HPactual = statPerso[designationPerso].HP
    statPerso[designationPerso].MPactual = statPerso[designationPerso].MP
    inventaire.LeftHand = ["batonDepart"]
    statPerso[designationPerso].spells = ["sortFeu"]
    update()
    VisualRender()
    statPerso.perso1.class = "magicien"
    classDiv.style.display="none"
})
const vol = document.getElementById("voleur")
vol.addEventListener("click", () => {
    let designationPerso = "perso"+compteurPerso
    statPerso[designationPerso].Force = 1;
    statPerso[designationPerso].Dexterite = 4;
    statPerso[designationPerso].Intelligence = 0;
    statPerso[designationPerso].Concentration = 2;
    statPerso[designationPerso].Volonte = 0
    statPerso[designationPerso].Vitalite = 1
    update()
    statPerso[designationPerso].HPactual = statPerso[designationPerso].HP
    statPerso[designationPerso].MPactual = statPerso[designationPerso].MP
    inventaire.LeftHand = ["dague"]
    statPerso[designationPerso].spells = ["skillVol"]
    VisualRender()
    update()
    statPerso.perso1.class = "voleur"
    classDiv.style.display="none"
})
const guer = document.getElementById("guerrier")
guer.addEventListener("click", () => {
    let designationPerso = "perso"+compteurPerso
    statPerso[designationPerso].Force = 4;
    statPerso[designationPerso].Dexterite = 1;
    statPerso[designationPerso].Intelligence = 0;
    statPerso[designationPerso].Concentration = 0;
    statPerso[designationPerso].Volonte = 0
    statPerso[designationPerso].Vitalite = 3
    update()
    statPerso[designationPerso].HPactual = statPerso[designationPerso].HP
    statPerso[designationPerso].MPactual = statPerso[designationPerso].MP
    inventaire.LeftHand = ["hacheDepart"]
    statPerso[designationPerso].spells = ["skillDouble"]
    VisualRender()
    update()
    statPerso.perso1.class = "guerrier"
    classDiv.style.display="none"
})
}
//CREATION SECTION ARME DE DEPART
// if (!depart) {
//     const armeDepartDiv = document.createElement("div");
//     armeDepartDiv.id = "armeDepart";
//     const armeTitle = document.createElement("p");
//     armeTitle.textContent = "Choisissez votre arme";
//     armeDepartDiv.appendChild(armeTitle);
//     const equipement[designationPerso]Span = document.createElement("span");
//     const equipement[designationPerso]Depart = [
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
//     equipement[designationPerso]Depart.forEach((equipement[designationPerso]) => {
//         const equipement[designationPerso]Div = document.createElement("div");
//         equipement[designationPerso]Div.id = equipement[designationPerso].id;
//         equipement[designationPerso]Div.className = equipement[designationPerso].class;
//         const equipement[designationPerso]Img = document.createElement("img");
//         equipement[designationPerso]Img.id = equipement[designationPerso].id
//         equipement[designationPerso]Img.src = equipement[designationPerso].imgSrc;
//         equipement[designationPerso]Img.setAttribute("data-testid", equipement[designationPerso].testId)
//         equipement[designationPerso]Img.title = equipement[designationPerso].title;
//         equipement[designationPerso]Img.width = 100;
//         equipement[designationPerso]Img.height = 108;
//         equipement[designationPerso]Div.appendChild(equipement[designationPerso]Img);
//         equipement[designationPerso]Span.appendChild(equipement[designationPerso]Div);
//     });
//     armeDepartDiv.appendChild(equipement[designationPerso]Span);
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
        (equipement[designationPerso].LeftHand === name || equipement[designationPerso].RightHand === name)
    ) {
        //je la met dans l'inventaire
        inventaire[type].push(name);
        // Si arme à deux mains je la retire des deux mains
        if (arme[name].twoHand !== undefined) {
            equipement[designationPerso].LeftHand = "mainGauche";
            equipement[designationPerso].RightHand = "mainDroite";
            // Sinon je la retire d'une main
        } else {
            //Si c'est la main gauche je la retire de la main gauche
            if (equipement[designationPerso].LeftHand === name) {
                equipement[designationPerso].LeftHand = "mainGauche";
            } //Si c'est la main droite je la retire de la main droite
            else {
                equipement[designationPerso].RightHand = "mainDroite";
            }
        }
        //En deuxieme c'est pour mettre dans l'inventaire
        // Si l'objet n'est pas dans l'inventaire, je la met dans l'inventaire
    } else if (!inventaire[type].includes(name)) {
        inventaire[type].push(name);
    }
    // En Troisieme c'est pour equiper une arme de l'inventaire dans mon equipement[designationPerso]
    // Si l'arme est dans linventaire je l'equipe
    else if (inventaire[type].includes(name)) {
        const index = inventaire[type].findIndex((type) => type === name);
        if (index !== -1) {
            inventaire[type].splice(index, 1);
        }
        //Si arme à deux mains !
        if (arme[name].twoHand !== undefined) {
            //Si j'ai une arme en main gauche, je l'ajoute à l'inventaire
            if (equipement[designationPerso].LeftHand !== "mainGauche") {
                inventaire[type].push(equipement[designationPerso].LeftHand);
                //Puis j'equipe cette arme dans la main gauche
                equipement[designationPerso].LeftHand = name;
            }
            //Si j'ai une arme en main droite je l'ajoute à l'inventaire
            if (equipement[designationPerso].RightHand !== "mainDroite") {
                inventaire[type].push(equipement[designationPerso].RightHand);
                //Puis je l'equipe dans la main droite
                equipement[designationPerso].RightHand = name;
            }
            //Si pas d'arme du coup, j'equipe l'arme et je remets rien dans l'inventaire
            equipement[designationPerso].LeftHand = name;
            equipement[designationPerso].RightHand = name;
        } else {
            //[SI il y a une arme en main gauche : oui =>
            if (equipement[designationPerso].LeftHand !== "mainGauche") {
                // je regarde [SI il y a une arme en main droite, oui =>
                if (equipement[designationPerso].RightHand !== "mainDroite") {
                    // Si arme à deux mains je desequipe les deux mains quand j'équipe la main gauche
                    if (equipement[designationPerso].LeftHand === equipement[designationPerso].RightHand) {
                        equipement[designationPerso].RightHand = "mainDroite";
                    }
                    // je retire l'arme main gauche et la remet dans l'inventaire et j'equipe l'arme selectionné si non =>
                    inventaire[type].push(equipement[designationPerso].LeftHand);
                    equipement[designationPerso].LeftHand = name;
                    // j'equipe l'arme dans main droite vide]
                } else {
                    equipement[designationPerso].RightHand = name;
                }
                //Si non j'equipe l'arme en main gauche]
            } else {
                equipement[designationPerso].LeftHand = name;
            }
        }
    }
    
    statPerso[designationPerso].arme = arme[name].genre
    console.log(statPerso.perso1.arme)

    //Check les doublons
    let seen = new Set();  
    let result = inventaire.LeftHand.filter(item => seen.has(item) ? false : seen.add(item));
    inventaire.LeftHand = result
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
    if (statPerso.perso1.class !== "") {
        const classDiv = document.getElementById("classDiv")
        classDiv.remove();
    }
}
function suppSelectName() {
    if (statPerso.perso1.nom !== "") {
        const suppSelectName = document.getElementById("nameDiv")
        suppSelectName.remove();
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
            
            console.log("avant takeObject" , statPerso[designationPerso])
            gear[type][name].effect()
            inventaire[type].splice(index, 1);
            console.log(statPerso[designationPerso])
        } 
    } else {
        // En premier c'est pour retirer un objet de l'equipement[designationPerso].
        // si l'objet n'est pas dans l'inventaire & est dans l'equipement[designationPerso]
        if (!inventaire[type].includes(name) && equipement[designationPerso][type] === name) {
            //je la met dans l'inventaire
            inventaire[type].push(name);
            //et je la retire de l'equipement[designationPerso]
            equipement[designationPerso][type] = type;
            //Si l'equipement[designationPerso] est un bijou alors j'enleve le buff de ce bijou
            if (type === "Ring" || type === "Neck") {
                Debuff[name]();
            }
            //En deuxieme c'est pour mettre dans l'inventaire
            // Si l'objet n'est pas dans l'inventaire, je la met dans l'inventaire
        } else if (!inventaire[type].includes(name)) {
            inventaire[type].push(name);
        } // En Troisieme c'est pour equiper un objet de l'inventaire dans mon equipement[designationPerso]
        // Si l'objet est dans linventaire je l'equipe
        else if (inventaire[type].includes(name)) {
            const index = inventaire[type].findIndex((type) => type === name);
            if (index !== -1) {
                inventaire[type].splice(index, 1);
                //S'il y a déjà un objet dans le slot, je le mets dans l'inventaire et j'equipe l'objet.
                if (equipement[designationPerso][type] !== type) {
                    if (type === "Ring" || type === "Neck") {
                        Debuff[equipement[designationPerso][type]]();
                    }
                    inventaire[type].push(equipement[designationPerso][type]);
                    equipement[designationPerso][type] = name;
                    if (type === "Ring" || type === "Neck") {
                        Buff[name]();
                    }
                } else {
                    equipement[designationPerso][type] = name;
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
let itemMaitreSort = [
    "sortFeu",
    "sortLumiere",
    "sortFoudre",
    "sortBlast",
    "sortArcane",
]
let itemMaitreArme = [
    "skillVol",
    "skillDouble",
    "skillAll"
]
let itemList = [
    "anneauForce",
    "anneauDef",
    "anneauInt",
    "anneauVie",
    "anneauLuc",

        "amuDoubleTour",
        "amuCelerite",
        "amuBrut",
        "amuAvidite",
        "amuCauchemar",
        "amuConcentration",
        "amuLumiere",
        "amuSort",
        "amuVamp",

    "hallebarde",
    "espadon",
    "masse",
    "katana",
    "batonMage",
    "batonClerc",
    "anneauDexterite",
    "armureEnFer",
    "lance",
    "lance2",
    "gourdin",
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
]
let marketMemory = { start: [], }
let backCheck = "";
let message = [];
async function FermerInv() {

    const DonneeStatPerso = {
        stats,
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
        itemMaitreArme,
        itemMaitreSort,
        money,
        nombreDePerso
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
async function replaceStat() {
    //LES STATS POUR CHAQUE PERSO
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.statPerso.perso1,
    ).forEach(([key, value]) => {
        if (statPerso.perso1[key] !== undefined) {
            statPerso[designationPerso][key] = value;
        }
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.statPerso.perso2,
    ).forEach(([key, value]) => {
        if (statPerso.perso2[key] !== undefined) {
            statPerso.perso2[key] = value;
        }
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.statPerso.perso3,
    ).forEach(([key, value]) => {
        if (statPerso.perso3[key] !== undefined) {
            statPerso.perso3[key] = value;
        }
    });
    //EQUIPEMENT POUR CHAQUE PERSO (ya grave moyen d'optimiser ça)
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.equipement.perso1,
    ).forEach(([key, value]) => {
        if (equipement.perso1[key] !== undefined) {
            equipement.perso1[key] = value;
        }   
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.equipement.perso2,
    ).forEach(([key, value]) => {
        if (equipement.perso2[key] !== undefined) {
            equipement.perso2[key] = value;
        }   
    });
    Object.entries(
        recData.donjonpath.dataStat.DonneeStatPerso.equipement.perso3,
    ).forEach(([key, value]) => {
        if (equipement.perso3[key] !== undefined) {
            equipement.perso3[key] = value;
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
    itemList = recData.donjonpath.dataStat.DonneeStatPerso.itemList
    itemMaitreArme = recData.donjonpath.dataStat.DonneeStatPerso.itemMaitreArme
    itemMaitreSort = recData.donjonpath.dataStat.DonneeStatPerso.itemMaitreSort
    marketMemory = recData.donjonpath.marketMemory
    roomIAm = recData.donjonpath.roomIAm;
    btnCheck = recData.donjonpath.dataStat.DonneeStatPerso.btnCheck;
    depart = recData.donjonpath.dataStat.DonneeStatPerso.depart;
    backCheck = recData.donjonpath.backCheck;
    message = recData.donjonpath.message;
    money = recData.donjonpath.dataStat.DonneeStatPerso.money
    nombreDePerso = recData.donjonpath.dataStat.DonneeStatPerso.nombreDePerso
    checkNombrePerso()
    suppSelectName();
    suppClassDepart();
    suppDepart();
    btnStat();
    update();
    VisualRender();
    
}
function delAllGearImage() {
    const allDelete = document.querySelectorAll(".image");
    allDelete.forEach((element) => element.remove());
}


let tooltip = document.createElement("infoObjet");
tooltip.style.position = "absolute";
tooltip.style.padding = "5px 10px";
tooltip.style.borderRadius = "5px";
tooltip.style.fontSize = "24px";
tooltip.style.visibility = "hidden"; 
tooltip.style.pointerEvents = "none"; 
tooltip.style.border = "5px solid #4d372a";
tooltip.style.padding = "10px";
tooltip.style.margin = "10px";
tooltip.style.fontFamily = "'MedievalSharp', serif";
tooltip.style.fontWeight = "400";
tooltip.style.fontStyle = "normal";
tooltip.style.backgroundColor = "#886146";
tooltip.style.color = "#706c2e"; 
document.body.appendChild(tooltip);

function VisualRender() {
    delAllGearImage();
    Object.entries(equipement[designationPerso]).forEach(([key, value]) => {
        if (equipement[designationPerso][key] !== undefined) {
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
                tooltip.style.visibility = "hidden"
                );
                image.addEventListener("mouseover", (event) => {
                    tooltip.innerText = gear[key][value].nom + " : " + "\n" + gear[key][value].description
                    tooltip.style.left = event.pageX + 40 + "px"
                    tooltip.style.top = event.pageY + 40 + "px"
                    tooltip.style.visibility = "visible"
                })
                image.addEventListener("mousemove", function(event) {
                    tooltip.style.left = event.pageX + 40 + "px";
                    tooltip.style.top = event.pageY + 40 + "px";
                })
                image.addEventListener("mouseout", function() {
                    tooltip.style.visibility = "hidden";})
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
                    tooltip.style.visibility = "hidden"
                );
                image.addEventListener("mouseover", (event) => {
                    tooltip.innerText = gear[key][value].nom + " : " + "\n"  + gear[key][value].description
                    tooltip.style.left = event.pageX + 40 + "px"
                    tooltip.style.top = event.pageY + 40 + "px"
                    tooltip.style.visibility = "visible"
                })
                image.addEventListener("mousemove", function(event) {
                    tooltip.style.left = event.pageX + 40 + "px";
                    tooltip.style.top = event.pageY + 40 + "px";
                })
                image.addEventListener("mouseout", function() {
                    tooltip.style.visibility = "hidden";})
            }
        });
    });
}
checkNombrePerso()
getData();
VisualRender()
update()
