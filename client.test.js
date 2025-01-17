import { describe, it, expect, beforeEach, vi } from "vitest";
import fs from "fs/promises";
import path from "path";

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
        expect(true).toEqual(false);
    });
});
