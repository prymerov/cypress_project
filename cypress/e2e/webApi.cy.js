/// <reference types="Cypress" />

it("Radio Check", () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get("#radio-btn-example").find("input[value='radio1']").should("be.visible").should("not.be.checked").check().should("be.checked")
    cy.get("#radio-btn-example").find("input[value='radio2']").should("be.visible").should("not.be.checked").check().should("be.checked")
    cy.get("#radio-btn-example").find("input[value='radio3']").should("be.visible").should("not.be.checked").check().should("be.checked")
 })



it("Dropdown Check", () => {
cy.visit("https://codenboxautomationlab.com/practice/")
cy.get("#dropdown-class-example").should("have.value", "").select("option1").should("have.value", "option1")
cy.get("#dropdown-class-example").select("option2").should("have.value", "option2")
cy.get("#dropdown-class-example").select("option3").should("have.value", "option3")
})

it("Dynamic Dropdown Check", () => {
cy.visit("https://codenboxautomationlab.com/practice/")
cy.get("#autocomplete").type("rus")
cy.get(".ui-menu-item div").each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === 'Cyprus') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })
})

////ДОДЕЛАТЬ
// it("Open new Window", () => {
// cy.visit("https://codenboxautomationlab.com/practice/")
// cy.get("#openwindow").should("have.text", "Open Window").invoke("removeAttr", "onclick").click()
// cy.url("should.eq", "http://www.codenbox.com/")
// })

it("Open new Tab", () => {
  cy.visit("https://codenboxautomationlab.com/practice/")
  cy.get("#opentab").should("have.text", "Open Tab").invoke("removeAttr", "target").click()
  cy.url("should.eq", "http://www.codenbox.com/")
  })

it("Alert", () => {
  cy.visit("https://codenboxautomationlab.com/practice/")
  cy.get("#name").invoke('attr', 'placeholder').should('contain', 'Enter Your Name')
  cy.get("#name").type("NarutoSobaka")
  cy.get("#alertbtn").should('be.visible').and("have.value", "Alert").click()
  cy.on("window:alert", (str) => {
expect(str).to.eq("Hello NarutoSobaka, share this practice page who love to learn automation")
  } )
  })

  it("Confirm", () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get("#name").invoke('attr', 'placeholder').should('contain', 'Enter Your Name')
    cy.get("#name").type("NarutoSobaka")
    cy.get("#confirmbtn").should('be.visible').and("have.value", "Confirm").click()
    cy.on("window:confirm", (str) => {
  expect(str).to.eq("Hello NarutoSobaka, Are you sure you want to confirm?")
    } )
    })

    it("Hide and show element", () => {
      cy.visit(Cypress.env("urlSariful"))
      cy.get("#displayed-text").should("be.visible").invoke("attr", "placeholder").should("contain", "Hide/Show Example")
      cy.get("#displayed-text").type("Hello World")
      cy.get("#hide-textbox").should("have.value", "Hide").click()
      cy.get("#displayed-text").should("not.be.visible")
      cy.get("#show-textbox").should("have.value", "Show").click()
      cy.get("#displayed-text").should("be.visible")
    })

    it("Mousehover", () => {
      cy.visit(Cypress.env("urlSariful"))
      cy.get("a[href='#top']").contains("Top").should("not.be.visible")
      cy.get("a[href='']").contains("Reload").should("not.be.visible")
      cy.get(".mouse-hover-content").invoke("show")//.trigger("mouseover")
      cy.get("a[href='#top']").contains("Top").should("be.visible")
      cy.get("a[href='']").contains("Reload").should("be.visible")
    })

    it("Cecking text using text metod", () => {
      cy.visit(Cypress.env("urlSariful"))
cy.get("h1.site-title").invoke("text").then((textExample) => {
expect(textExample).to.eq("CodenBox AutomationLab")
}) 
})


it("Find Value in Table", () => {
  cy.visit(Cypress.env("urlSariful"))
  cy.get("#product > tbody > tr").contains("td", "WebSecurity")
})

it("Check Value in Table", () => {
  cy.visit(Cypress.env("urlSariful"))
  cy.get("#product > tbody > tr td:nth-child(2)").each(($el, index, $list) =>{
  let text = $el.text()
  if(text.includes("WebSecurity")){
    cy.get("#product > tbody > tr td:nth-child(3)").eq(index).then(function(price){
      let actPrice = price.text()
      expect(actPrice.trim()).to.eq("25")
    })
  }
  })
})

it("Go Back at the Browser", () => {
  cy.visit(Cypress.env("urlSariful"))
  cy.get("[href='https://codenboxautomationlab.com/why-need-automation-testing/']").eq(1).click()
  cy.url("should.eq", "https://codenboxautomationlab.com/why-need-automation-testing/")
  cy.go("back")
  cy.url("should.eq", "https://codenboxautomationlab.com/practice/#top")
})