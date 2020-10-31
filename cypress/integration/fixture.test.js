/// <reference types="cypress" />

describe("fixture test", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  it("should fill a form from a fixture file", () => {
    cy.fixture('userData').as('user').then(function() {
      
      cy.get("input#formNome").type(this.user.nome);
      cy.get("input#formSobrenome").type(this.user.sobrenome)
      cy.get(`[name=formSexo][value=${this.user.sexo}]`).click();
      cy.get(`///label[@innertext=' Carne']`).click();
      cy.get(`select#formEsportes`).select(this.user.esportes);
      cy.get("input#formCadastrar").click();
      cy.get("div#resultado > span").should('contain', 'Cadastrado!')
    })
  });
});
