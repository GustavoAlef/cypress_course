/// <reference types="cypress" />

describe("cypress basic", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  })
  
  it("should find and interact with an element", () => {
    
    cy.get("input#buttonSimple")
      .click()
      .should("have.value", "Obrigado!");
  });
  
  it("should find and interact with a link", () => {

    cy.get("center:nth-of-type(2) > a:nth-of-type(1)").click()
    cy.get("#resultado").should("have.text", "Voltou!");
  });
  
  it.only("should select a option in a combo box", () => {

    cy.get("select#formEscolaridade")
      .select('2o grau completo')
      .should('have.value', "2graucomp")

    cy.get('select#formEscolaridade > option').then(arr => {
      const values = []
      arr.each(function(){
        values.push(this.innerHTML)
      })
      expect(values).to.include.members(["Superior", "Mestrado"])
    })

  });


});
