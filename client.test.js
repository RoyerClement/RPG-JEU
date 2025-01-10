import { describe, it, expect, beforeEach } from "vitest";
import fs from "fs/promises";
import path from "path";

describe("client", () => {
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
    });

    // FIXME: euh ca a pas l'air de marcher ca
    it("peut utiliser uniqument 10 points", async () => {
        expect(document.querySelector("#point").textContent).toEqual(
            "Point(s) disponible(s) : 10",
        );
        const force = document.querySelector("#statFor");
        expect(force.textContent).toEqual("Force : 0");

        const rajoutForce = document.querySelector("#btnFor");
        for (let i = 0; i < 20; i += 1) {
            await rajoutForce.click();
        }

        expect(rajoutForce.style.display).toEqual("none");
        expect(document.querySelector("#point").textContent).toEqual(
            "Point(s) disponible(s) : 0",
        );
    });
});
