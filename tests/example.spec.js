// @ts-check
import { test, expect } from "@playwright/test";

test("fermer l'inventaire", async ({ page }) => {
    await page.goto("localhost:3000/index.html");

    // Fermer l'inventaire
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
});

test("fermer l'inventaire puis cliquer sur la premiere porte, puis cliquer sur la porte ouverte !", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await expect(closeInv).toBeVisible(); //DOUBLE VERIF
    // Attendre la navigation vers donjon.html
    await Promise.all([
        closeInv.click(),
        page.waitForURL("http://localhost:3000/donjon.html"),
    ]);
    // Expect : être sur la page donjon.html
    await expect(page.url()).toBe("http://localhost:3000/donjon.html");
    //Cliquer sur la premiere porte (A)
    const closedDoor = await page.getByTestId("firstClosedDoor");
    await closedDoor.click();
    //Expect : voir la premiere porte ouverte.
    await expect (page.getByTestId("firstOpenDoor")).toBeVisible();
    //Cliquer sur la porte ouverte (A)
    const openDoor = await page.getByTestId("firstOpenDoor");
    await openDoor.click();
    //Expect : être dans une autre pièce avec toutes les portes fermées
    await expect (page.getByTestId("firstOpenDoor")).not.toBeVisible()
});
