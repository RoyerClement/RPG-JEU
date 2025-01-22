import { describe, it, expect, beforeEach, vi } from "vitest";
import fs from "fs/promises";
import path from "path";
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const serverResponse = {
    DonneeStatPerso: {
        mainGauche: 5,
        mainDroite: 22,
        def: 30,
        equipement: {
            LeftHand: "hacheDepart",
            RightHand: "arcDepart",
            Chest: "armureEnFer",
            Head: "casqueEnCuir",
            Ring: "anneauDexterite",
            Neck: "Neck",
        },
        inventaire: {
            arme: ["batonDepart", "epeeDepart"],
            Chest: ["armureEnCuir"],
            Head: [],
            Ring: ["anneauForce"],
            Neck: [],
            Object: [],
        },
        statPerso: {
            Force: 0,
            Dexterite: 5,
            Vitalite: 0,
            Volonte: 0,
            Intelligence: 0,
            Point: 10,
            HP: 50,
            MP: 30,
            XP: 0,
            LVL: 0,
        },
    },
};

describe("inventaire", () => {
    beforeEach(async () => {
        const htmlPath = path.join(__dirname, "public", "index.html");
        const html = await fs.readFile(htmlPath, "utf-8");
        document.body.innerHTML = html;
        const scriptPath = path.join(__dirname, "public", "statsPerso.js");
        const jsCode = await fs.readFile(scriptPath, "utf-8");
        eval(jsCode);
    });

    it("commence la partie avec 10 points", () => {
        const points = document.querySelector("#point");
        expect(points.textContent).toEqual("Point(s) disponible(s) : 10");
    });

    it("peut augmenter la force en cosumant 1 point", async () => {
        expect(document.querySelector("#point").textContent).toEqual(
            "Point(s) disponible(s) : 10",
        );
        const force = document.querySelector("#statFor");
        expect(force.textContent).toEqual("Force : 0");

        const rajoutForce = document.querySelector("#btnFor");
        await rajoutForce.click();

        expect(document.querySelector("#point").textContent).toEqual(
            "Point(s) disponible(s) : 9",
        );
        expect(force.textContent).toEqual("Force : 1");
    });
});

describe("donjon", () => {
    beforeEach(async () => {
        vi.spyOn(global, "fetch").mockResolvedValue(
            Promise.resolve({
                json: () => Promise.resolve(serverResponse),
            }),
        );

        const htmlPath = path.join(__dirname, "public", "Donjon.html");
        const html = await fs.readFile(htmlPath, "utf-8");
        document.body.innerHTML = html;
        const scriptPath = path.join(__dirname, "public", "donjon.js");
        const jsCode = await fs.readFile(scriptPath, "utf-8");
        eval(jsCode);
    });

    it("jouer commence dans la premiere salle", () => {
        const btnBack = document.getElementById("back");
        expect(btnBack.style.display).toEqual("none");
    });

    // it("On peut sortir de la premiere salle", async () => {
    //     //Chance qu'il n'y ait pas de combat
    //     vi.spyOn(Math, "floor").mockReturnValue(
    //         4
    //     );
    //     //Utilisateur doit cliquer sur une porte ferme
    //     const clicPorteFerme = document.getElementById('UN');
    //     await clicPorteFerme.click();
    //     //Utilisateur doit cliquer sur une porte ouverte
    //     const clicPorteOuvert = document.getElementById('UN')
    //     await clicPorteOuvert.click();
    //     //sleep
    //     await sleep(1000);
    //     const Back = document.getElementById('back')
    //     expect(Back.style.display).toEqual('none')
    // })

    it("On ouvre une porte", async () => {
        //Chance qu'il n'y ait pas de combat
        vi.spyOn(Math, "floor").mockReturnValue(4);
        //Utilisateur doit cliquer sur une porte ferme
        const clicPorteFerme = document.getElementById("UN");
        await clicPorteFerme.click();

        const dialogue = document.getElementById("boiteDialogue");

        expect(dialogue).toEqual("Vous ouvrez une porte...");
    });
});
