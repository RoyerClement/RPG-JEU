// @ts-check
import { test, expect } from "@playwright/test";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("voir fermer l'inventaire", async ({ page }) => {
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
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    // Expect : être sur la page donjon.html
    
    //Cliquer sur la premiere porte (A)
    const closedDoor = await page.getByTestId("firstClosedDoor");
    await expect (closedDoor).toBeVisible();
    await closedDoor.click();
    //Expect : voir la premiere porte ouverte.
    
    //Cliquer sur la porte ouverte (A)
    const openDoor = await page.getByTestId("firstOpenDoor");
    await expect (openDoor).not.toBeVisible()
    await openDoor.click();
    //Expect : être dans une autre pièce avec toutes les portes fermées
    await expect (openDoor).not.toBeVisible()
});

test('Selectionner une arme de départ, puis l\'équiper' , async ({page }) => {
    //clic sur epee de depart, hache de depart disparait (car plus disponible)
    await page.goto("http://localhost:3000/index.html");
    const epeeDepart = await page.getByTitle("titleEpeeDepart");
    await epeeDepart.click();
    await expect (page.getByTitle("titleHacheDepart")).not.toBeVisible
    sleep(2000)
    //Puis clic à nouveau epee pour l'equiper dans l'inventaire
    await epeeDepart.click();
    await expect (page.getByTitle("titleMainGauche")).not.toBeVisible
})
