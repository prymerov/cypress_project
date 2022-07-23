/// <reference types="Cypress" />
const { should } = require("chai")

it.only("Variables", () =>{
    cy.visit(Cypress.env("url")+("/watch?v=7sav5ZXg22o&list=PLN9RL2PyZc184ita-eXbAMlErM0eVNUMj&index=21&ab_channel=CodenboxAutomationLab"))
})

// it("Should", () => {
// cy.visit("https://rozetka.com.ua/spell_4820207310490/p42832496/")
// cy.get(".search-form__input.ng-untouched.ng-pristine.ng-valid")
//     .type("Стакан")
//     .should('have.value', "Стакан")
//     .and('be.visible')
// })

// it("Expect", () => {
//     cy.visit("https://rozetka.com.ua/spell_4820207310490/p42832496/")
//     cy.get(".search-form__input.ng-untouched.ng-pristine.ng-valid")
//         .type("Стакан").then(input=>{
//             expect(input).to.have.value("Стакан")
//         })
//     })


//     it("Expect", () => {
//         cy.viewport(1600,900)
//         cy.visit("https://www.work.ua/ru/jobs/4761727/")
//         cy.get("header").find("nav").find("div").find("ul").find("li").eq(0)
//         .should('have.class', 'active')
//         })

//         // it.only("Mouse Over - visible", () => {
//         //     cy.viewport(1600,900)
//         //     cy.visit("https://www.pumb.ua/ru")
//         //     cy.get(".header-language.j-header-language")
//         //     .click()
//         //     //.trigger('click')
//         //     cy.get("[href='/en']")
//         //     .should('be.visible')
//         //     })
    

// // it.only("Mouse over", () => {
// // cy.visit("https://www.pumb.ua/ru")
// // cy.get("a[href='https://retail.pumb.ua/ru/credit']").contains("Кредиты").should("not.be.visible")
// // cy.get(".header-menu-dropdown").invoke("show")
// // cy.get("a[href='https://retail.pumb.ua/ru/credit']").contains("Кредиты").should("be.visible")

// //       })

      
// // it.only("Forte", () => {
// // cy.visit("https://time.fortegrp.com/#/login")
// // cy.get("#inputLogin").type("artur.primerov@fortegrp.com")
// // cy.get(".frt-btn.frt-btn-default.frt-btn-sm-font.pull-right").click()
// // //КРАШИТСЯ
// // })      

// it("Успешная проверка mouseover", () => {
// cy.visit("https://next.privat24.ua/")
// cy.get("div[data-qa-node='item'][data-qa-value='transfers_swift']").should("not.exist")
// cy.get("[data-qa-value='transfer_money']").trigger("mouseover")
// cy.get("div[data-qa-node='item'][data-qa-value='transfers_swift']").should("be.visible")
// cy.get("div[data-qa-node='item'][data-qa-value='transfers_swift']").click()
// })

// ///NI hU YAA
// // it.only("Клик и открывается меню", () => {
// // cy.visit("https://amy.com.ua/")
// // cy.get("a[href='https://amy.com.ua/intimnye-tovary/prelyudiya/duhi']")
// // .should("not.visible")
// // cy.get(".sf-with-ul").eq(2).click()
// // cy.get("a[href='https://amy.com.ua/intimnye-tovary/prelyudiya/duhi']").should("not.be.visible")


// // })


// it("Dropdown Menu", () => {
// cy.viewport(1600,900)
// cy.visit("https://about.pumb.ua/ru/info/tenders")
// //cy.get("[data-qa='search-biddingTypes']")
// cy.wait(6000)
// cy.get(".ivu-select-placeholder").contains("Виберіть вид торгів")
// })







// it("Dropdown Menu", () => {
//     cy.viewport(1600,900)
//     cy.visit("https://about.pumb.ua/ru/info/tenders")
//     //cy.get("[data-qa='search-biddingTypes']")
//     cy.wait(6000)
//     cy.get(".ivu-select-placeholder").contains("Виберіть вид торгів")
//     })



// it.only("Variables", () =>{
//     cy.visit(Cypress.env("url"))
// })