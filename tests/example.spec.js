// @ts-check
import { test, expect } from "@playwright/test";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test("voir fermer l'inventaire", async ({ page }) => {
    await page.goto("localhost:3000/index.html");

    // Fermer l'inventaire
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
});

test("entrer dans la premiere piece", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    //VOIR LA PREMIERE PORTE
    await expect (closedDoor).toBeVisible();
    const checkNoFight = await page.getByTestId("testCheckNoFight")
    await checkNoFight.click({ force: true });
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const openDoor = await page.getByTestId("porteOuvertA");
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
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
});

test("trouver marchand", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    //VOIR LA PREMIERE PORTE
    await expect (closedDoor).toBeVisible();
    //CLIQUEZ SUR LE BOUTON NOFIGHT
    const checkNoFight = await page.getByTestId("testCheckNoFight")
    await checkNoFight.click({ force: true });
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const openDoor = await page.getByTestId("porteOuvertA");
    //VOIR LA PREMIERE PORTE OUVERTE
    await expect (openDoor).toBeVisible()
    //CLIQUEZ SUR LA PORTE OUVERTE
    await openDoor.click();
    //VOIR LE BOUTON REVENIR EN ARRIERE
    await expect (page.getByText(/Revenir en arrière/)).toBeVisible 
    const porteA = await page.getByTestId('porteFermeA')
    const checkMarchand = await page.getByTestId("testCheckMarchand")
    await checkMarchand.click();
    await porteA.click ({force: true});
    await openDoor.click();
    const marchand = await page.getByTestId("petitMarchand")
    await expect (marchand).toBeVisible
    await expect (page.getByText(/Il y a un marchand dans cette salle/)).toBeVisible
    await marchand.click()
    const divMarchand = page.getByTestId("divPetitMarchand")
    await expect (divMarchand).toBeVisible
    const btnBack = await page.getByTestId('testBack')
    await btnBack.click ();
    await btnBack.click ();
    const porteB = await page.getByTestId('porteFermeB')
    await porteB.click()

    // const checkNoMarchand = await page.getByTestId("testCheckNoMarchand")
    // await checkNoMarchand.click()
    // await expect (page.getByTestId("moyenMarchand")).toBeVisible
    // await expect (page.getByText(/Il y a un marchand dans cette salle/)).toBeVisible
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
});

test("Declencher un combat", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    //VOIR LA PREMIERE PORTE
    await expect (closedDoor).toBeVisible();
    //CLIQUEZ SUR LE BOUTON POUR FORCER LAPPARITION DES COMBATS
    const checkFight = await page.getByTestId("testCheckFight")
    await checkFight.click({ force: true });
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const testPanneauATQ = await page.getByTestId("testPanneauATQ");
    //VOIR LA PREMIERE PORTE OUVERTE
    await expect (testPanneauATQ).toBeVisible()
    //NE PLUS VOIR LE BOUTON REVENIR EN ARRIERE
    await expect (page.getByText(/Revenir en arrière/)).not.toBeVisible
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
});

test("Declencher un combat et attaquer", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    //VOIR LA PREMIERE PORTE
    await expect (closedDoor).toBeVisible();
    //CLIQUEZ SUR LE BOUTON POUR FORCER LAPPARITION DES COMBATS
    const checkFight = await page.getByTestId("testCheckFight")
    await checkFight.click({ force: true });
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const testPanneauATQ = await page.getByTestId("testPanneauATQ");
    await expect(page.getByText(/Des ennemis surgissent de la porte !/)).toBeVisible();
    //VOIR LA PREMIERE PORTE OUVERTE
    await expect (testPanneauATQ).toBeVisible()
    const attaque = await page.getByTestId("testBtnATQ")
    await attaque.click()
    const gob = await page.getByTestId("testGob")
    await gob.click()
    await expect(page.getByText(/Vous attaquez un gobelin/)).toBeVisible();
    //NE PLUS VOIR LE BOUTON REVENIR EN ARRIERE
    await expect (page.getByText(/Revenir en arrière/)).not.toBeVisible
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
});

test("Declencher un combat et utiliser skill (ATQall)", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    //Cliquer sur fermer inventaire
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    //VOIR LA PREMIERE PORTE
    const getAllATQ = await page.getByTestId("testGetAllATQ")
    await getAllATQ.click()
    await expect (closedDoor).toBeVisible();
    //CLIQUEZ SUR LE BOUTON POUR FORCER LAPPARITION DES COMBATS
    const checkFight = await page.getByTestId("testCheckFight")
    await checkFight.click({ force: true });
    //CLIQUEZ SUR LA PREMIERE PORTE
    await closedDoor.click();
    const testPanneauATQ = await page.getByTestId("testPanneauATQ");
    await expect(page.getByText(/Des ennemis surgissent de la porte !/)).toBeVisible();
    //VOIR LA PREMIERE PORTE OUVERTE
    await expect (testPanneauATQ).toBeVisible()
    const skill = await page.getByTestId("testBtnSkill")
    await skill.click()
    const testBtnATQall = await page.getByTestId("testBtnATQall")
    await expect (testBtnATQall).toBeVisible
    await testBtnATQall.click()
    const gob = await page.getByTestId("testGob")
    await gob.click()
    await expect(page.getByText(/Concentration/)).toBeVisible();
    await expect(page.getByText(/Raté !/)).toBeVisible();
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
});

test("Declencher un combat et utiliser spell (sortFeu)", async ({ page }) => {
    //En arrivant sur la 1ere page
    await page.goto("http://localhost:3000/index.html");
    //Expect : voir 'Fermer l'inventaire'
    await expect(page.getByText(/Fermer l'inventaire/)).toBeVisible();
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(),
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const closedDoor = await page.getByTestId("porteFermeA");
    await expect (closedDoor).toBeVisible();
    const checkFight = await page.getByTestId("testCheckFight")
    await checkFight.click({ force: true });
    await closedDoor.click();
    const testPanneauATQ = await page.getByTestId("testPanneauATQ");
    await expect(page.getByText(/Des ennemis surgissent de la porte !/)).toBeVisible();
    const getAllATQ = await page.getByTestId("testGetAllATQ")
    await getAllATQ.click()
    await expect (testPanneauATQ).toBeVisible()
    const spell = await page.getByTestId("testBtnSpell")
    await spell.click()
    const testBtnSortFeu = await page.getByTestId("testBtnSortFeu")
    await expect (testBtnSortFeu).toBeVisible
    await testBtnSortFeu.click()
    const gob = await page.getByTestId("testGob")
    await gob.click()
    await expect(page.getByText(/Concentration/)).toBeVisible();
    await expect(page.getByText(/Raté !/)).toBeVisible();
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
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
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
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
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
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
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
})
test("modification HP/MP en fonction des stats", async({page}) => {
    await page.goto("localhost:3000/index.html")
    const btnForce = await page.getByTestId("testForce")
    const btnVitalite = await page.getByTestId("testVitalite")
    const btnVolonte = await page.getByTestId("testVolonte")
    const btnIntelligence = await page.getByTestId("testIntelligence")
    await btnForce.click()
    await expect (page.getByText(/Points de vie : 50\/60/)).toBeVisible
    await btnVitalite.click()
    await expect (page.getByText(/Points de vie : 75\/85/)).toBeVisible
    await btnVolonte.click()
    await expect (page.getByText(/Points de vie : 50\/60/)).toBeVisible
    await btnIntelligence.click()
    await expect (page.getByText(/Points de mana : 75\/85/)).toBeVisible
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
})

test ("defense/armure" , async ({page}) => {
    await page.goto("localhost:3000/index.html")
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(); 
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const getStuff = await page.getByTestId("testGetStuff")
    await getStuff.click();
    const openInv = await page.getByTestId("testOpInv")
    await openInv.click()
    await page.waitForURL("http://localhost:3000/index.html");
    const armureEnCuir = await page.getByTestId("testArmureEnCuir")
    const chest = await page.getByTestId("testChest")
    const head = await page.getByTestId("testCasqueEnCuir")
    await expect (chest).toBeVisible
    await expect (head).toBeVisible
    await expect (armureEnCuir).toBeVisible
    await expect (page.getByText(/Défense : 0/)).toBeVisible
    await armureEnCuir.click();
    await expect (chest).not.toBeVisible
    await expect (armureEnCuir).toBeVisible;
    await expect (head).toBeVisible
    await expect (page.getByText(/Défense : 10/)).toBeVisible
    const casqueEnCuir = await page.getByTestId("testCasqueEnCuir");
    await casqueEnCuir.click();
    await expect (chest).not.toBeVisible
    await expect (head).not.toBeVisible
    await expect (page.getByText(/Défense : 20/)).toBeVisible;
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
})

test ("arme à deux mains", async ({page}) => {
    await page.goto("localhost:3000/index.html")
    const closeInv = await page.getByTestId("closeInv");
    await closeInv.click(); 
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const getStuff = await page.getByTestId("testGetStuff")
    await getStuff.click();
    const openInv = await page.getByTestId("testOpInv")
    await openInv.click()
    await page.waitForURL("http://localhost:3000/index.html");
    const espadon = await page.getByTestId('testEspadon')
    const dague = await page.getByTestId("testDague")
    await expect (page.getByTestId("testLeftHand")).toBeVisible 
    await expect (page.getByTestId("testRightHand")).toBeVisible 
    await espadon.click()
    await expect (page.getByTestId("testLeftHand")).not.toBeVisible 
    await expect (page.getByTestId("testRightHand")).not.toBeVisible 
    await expect (espadon).toBeVisible
    await dague.click()
    await expect (page.getByTestId("testRightHand")).toBeVisible 
    await expect (page.getByText(/Arme gauche : 3/)).toBeVisible 
    await expect (page.getByText(/Arme droite : 1/)).toBeVisible 
    await espadon.click()
    await expect (page.getByText(/Arme gauche : 13/)).toBeVisible 
    await expect (page.getByText(/Arme droite : 13/)).toBeVisible 
    await closeInv.click()
    await page.waitForURL("http://localhost:3000/Donjon.html");
    const reset = await page.getByTestId("testReset")
    await reset.click()
    await page.waitForURL("http://localhost:3000/index.html");
    await sleep(2000)
})
