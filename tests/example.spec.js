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
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("firstClosedDoor");
    //VOIR LA PREMIERE PORTE
    await expect (closedDoor).toBeVisible();
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const openDoor = await page.getByTestId("firstOpenDoor");
    //VOIR LA PREMIERE PORTE OUVERTE
    await expect (openDoor).toBeVisible()
    //CLIQUEZ SUR LA PORTE OUVERTE
    await openDoor.click();
    //VOIR LE BOUTON REVENIR EN ARRIERE
    await expect (page.getByText(/Revenir en arrière/)).toBeVisible 
    const btnBack = await page.getByTestId('testBack')
    //CLIQUER SUR LE BOUTON REVENIR EN ARRIERE
    await btnBack.click ();
    //NE PLUS VOIR LE BOUTON REVENIR EN ARRIERE
    await expect (page.getByText(/Revenir en arrière/)).not.toBeVisible
    
});

test('arme de départ, puis l\'équiper' , async ({page }) => {
    //clic sur epee de depart, hache de depart disparait (car plus disponible)
    await page.goto("http://localhost:3000/index.html");
    const epeeDepart = await page.getByTestId("testEpeeDepart");
    await expect (page.getByTestId("testHacheDepart")).toBeVisible
    await epeeDepart.click();
    await expect (page.getByTestId("testHacheDepart")).not.toBeVisible
    await expect (epeeDepart).toBeVisible 
    //Puis clic à nouveau epee pour l'equiper dans l'inventaire
    await epeeDepart.click();
    await expect (page.getByTestId("testLeftHand")).not.toBeVisible 
    await expect (epeeDepart).toBeVisible 
    await epeeDepart.click(); 
    await expect (page.getByTestId("testLeftHand")).toBeVisible 
    await expect (epeeDepart).toBeVisible 
})
test("bouton pour ajouter des stats", async({page}) => {
    /*on verifie ici que les boutons "+" pour ajouter les stats fonctionnent bien
    On check le rendu visuel du texte qui doit se modifier à chaque clic
    et on verifie que les boutons "+" ne soient plus disponible lorsque l'on a plus de point à dépenser*/
    await page.goto("localhost:3000/index.html")
    const btnForce = await page.getByTestId("testForce")
    const btnDexterite = await page.getByTestId("testDexterite")
    const btnVitalite = await page.getByTestId("testVitalite")
    const btnVolonte = await page.getByTestId("testVolonte")
    const btnIntelligence = await page.getByTestId("testIntelligence")
    await btnForce.click()
    await expect (page.getByText(/Force : 1/)).toBeVisible
    await btnDexterite.click()
    await expect (page.getByText(/Dexterite : 1/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 8/)).toBeVisible
    await btnForce.click()
    await expect (page.getByText(/Force : 2/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 7/)).toBeVisible
    await btnVitalite.click()
    await expect (page.getByText(/Vitalité : 1/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 6/)).toBeVisible
    await btnVolonte.click()
    await expect (page.getByText(/Volonté : 1/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 5/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Intelligence : 1/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 4/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Intelligence : 2/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 3/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Intelligence : 3/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 2/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Intelligence : 4/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 1/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Intelligence : 5/)).toBeVisible
    await expect (page.getByText(/Point(s) disponible(s) : 0/)).toBeVisible
    await expect (btnIntelligence).not.toBeVisible
})
test("sauvegarde des stats entre 2 pages", async({page}) => {
    /*On verifie apres un premier passage en fermant l'inventaire et en l'ouvrant à nouveau que les stats restent les mêmes, 
    (en l'occurence ici 2 de force), puis on verifie que le bouton "+" disparaissent lorsqu'on a plus de point à ajouter. 
    On ferme l'inventaire et on l'ouvre pour verifier que l'on ne peut plus ajouter de point */
    await page.goto("localhost:3000/index.html")
    const btnForce = await page.getByTestId("testForce")
    await btnForce.click()
    await expect (page.getByText(/Force : 1/)).toBeVisible
    await btnForce.click()
    await expect (page.getByText(/Force : 2/)).toBeVisible
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const openInv = await page.getByTestId("testOpInv")
    await openInv.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await expect (page.getByText(/Force : 2/)).toBeVisible
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await btnForce.click()
    await expect (btnForce).not.toBeVisible
    await closeInv.click()
    await openInv.click()
    await expect (btnForce).not.toBeVisible
})
test("modification HP/MP en fonction des stats", async({page}) => {
    await page.goto("localhost:3000/index.html")
    const btnForce = await page.getByTestId("testForce")
    const btnVitalite = await page.getByTestId("testVitalite")
    const btnVolonte = await page.getByTestId("testVolonte")
    const btnIntelligence = await page.getByTestId("testIntelligence")
    await btnForce.click()
    await expect (page.getByText(/Points de vie : 60\/60/)).toBeVisible
    await btnVitalite.click()
    await expect (page.getByText(/Points de vie : 85\/85/)).toBeVisible
    await btnVolonte.click()
    await expect (page.getByText(/Points de vie : 60\/60/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Points de mana : 70\/70/)).toBeVisible
})
test ("arme à deux mains", async ({page}) => {
    await page.goto("localhost:3000/index.html")
    const espadon = await page.getByTestId('testEspadon')
    const dague = await page.getByTestId("testDague")
    await expect (page.getByTestId("testLeftHand")).toBeVisible 
    await expect (page.getByTestId("testRightHand")).toBeVisible 
    await espadon.click()
    await expect (page.getByTestId("testLeftHand")).not.toBeVisible 
    await expect (page.getByTestId("testRightHand")).not.toBeVisible 
    await expect (espadon).toBeVisible
    await espadon.click()
    await expect (page.getByTestId("testLeftHand")).toBeVisible 
    await expect (page.getByTestId("testRightHand")).toBeVisible 
    await expect (espadon).toBeVisible
    await espadon.click()
    await dague.click()
    await expect (page.getByTestId("testRightHand")).toBeVisible 
})
test ("defense/armure" , async ({page}) => {
    await page.goto("localhost:3000/index.html")
    const armureEnCuir = await page.getByTestId("testArmureEnCuir")
    const chest = await page.getByTestId("testChest")
    const casqueEnCuir = await page.getByTestId("testCasqueEnCuir")
    const head = await page.getByTestId("testCasqueEnCuir")
    await expect (chest).toBeVisible
    await expect (head).toBeVisible
    await expect (armureEnCuir).toBeVisible
    await expect (page.getByText(/Défense : 0/))
    await armureEnCuir.click()
    await expect (chest).not.toBeVisible
    await expect (armureEnCuir).toBeVisible
    await expect (head).toBeVisible
    await expect (page.getByText(/Défense : 10/))
    await casqueEnCuir.click()
    await expect (chest).not.toBeVisible
    await expect (head).not.toBeVisible
    await expect (armureEnCuir).toBeVisible
    await expect (casqueEnCuir).toBeVisible
    await expect (page.getByText(/Défense : 20/))
})