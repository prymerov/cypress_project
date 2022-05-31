/// <reference types="Cypress" />

it("Using Get with Eq", () => {
cy.visit("https://www.monobank.ua/international")
cy.get(".country-list").find("li").eq(2)

});

it("Using Get with Eq", () => {
    cy.viewport(1800, 700)
    cy.visit("https://www.monobank.ua/international")
    cy.wait(1500)
    cy.get(".dark-theme").find(".main-layout-wrapper.animate-hidden.main-anim-complete").find(".line1-badges").find("div").find(".line1-badges--swift")
    
    })

 