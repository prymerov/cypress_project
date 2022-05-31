/// <reference types="Cypress" />

it("Contains", () => {
cy.visit("https://time.fortegrp.com/#/login")
cy.contains("Continue");
})


it("Contains", () => {
    cy.visit("https://rozetka.com.ua/")
    cy.contains("a", "Зоотовары");
    })



    it("CaMecCasE", () => {
        cy.visit("https://rozetka.com.ua/")
        cy.contains("ЗоОтОвАрЫ", {matchCase: false});
        })


 
it.only("Get + COntains", () => {
    cy.visit("https://rozetka.com.ua/search/?text=jim+beam+apple")
    cy.get("a").contains("Ликер Jim Beam Apple 4 года выдержки 0.7 л 32.5%");
    })