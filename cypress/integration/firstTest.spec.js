// describe("Mobile phone replenishment", () => {
//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});

//     });
// })
/// <reference types="Cypress" />
//Comment

it("by id", () => {
cy.visit('https://time.fortegrp.com/#/login')
cy.get('#inputLogin')
})

it("by class", () => {
    cy.visit('https://time.fortegrp.com/#/login')
    cy.get('.frt-btn.frt-btn-default.frt-btn-sm-font.pull-right')
})


it("by tag", () => {
cy.visit('http://radio-qa.com/savin-audiobook-1/')
cy.get("a[href='http://radio-qa.com/tag/testirovanie/']")
})

it("by different tags", () => {
cy.visit('http://radio-qa.com/savin-audiobook-1/')
cy.get("[id='masthead'][role='banner']")
})

it("by different attributes", () => {
cy.visit('https://www.volvocars.com/nl')
cy.get("a[data-di-id='di-id-121fbba-bad133c9']")
})

it("by class contains Name", () => {
    cy.visit('https://time.fortegrp.com/#/login')
    cy.get("*[class^='frt-btn']")
    })

    cy.get()