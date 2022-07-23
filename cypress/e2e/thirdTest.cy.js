/// <reference types="Cypress" />

it.only("Use CommandJS to optimize test", () => {
cy.login("qwertyy@sdsds.sdsd")
})


it("Contains", () => {
    cy.visit("https://rozetka.com.ua/")
    cy.contains("a", "Зоотовары");
    })



    it("CaMecCasE", () => {
        cy.visit("https://rozetka.com.ua/")
        cy.contains("ЗоОтОвАрЫ", {matchCase: false});
        })


 
it("Get + COntains", () => {
    cy.visit("https://rozetka.com.ua/search/?text=jim+beam+apple")
    cy.get("a").contains("Ликер Jim Beam Apple 4 года выдержки 0.7 л 32.5%");
    })