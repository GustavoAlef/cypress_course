/// <reference types="cypress" />

describe("cypress helpers", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  })
  
  it.only("wrap & Its", () => {

    const obj = {
      nome:'user',
      idade:20
    }
    
    cy.wrap(obj).its('nome').should('be.equal', 'user')
    cy.title().its('length').should('be.equal', 20)
  });


});
