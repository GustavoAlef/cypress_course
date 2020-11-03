/// <reference types="cypress" />

describe("dinamic test", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
  
  foods.forEach(food => {
    
    it(`should click in a food called ${food}`, () => {
      cy.fixture('userData').as('user').then(function() {
        
        cy.get("input#formNome").type(this.user.nome);
        cy.get("input#formSobrenome").type(this.user.sobrenome)
        cy.get(`[name=formSexo][value=${this.user.sexo}]`).click();
        
        cy.get(`table#formComidaFavorita > tbody > tr > td`).contains(food).click();
        
        cy.get(`select#formEsportes`).select(this.user.esportes);
        cy.get("input#formCadastrar").click();
        cy.get("div#resultado > span").should('contain', 'Cadastrado!')
      })
    });
  })

  it.only(`should click in a food using EACH`, () => {
    cy.fixture('userData').as('user').then(function() {
      
      cy.get("input#formNome").type(this.user.nome);
      cy.get("input#formSobrenome").type(this.user.sobrenome)
      cy.get(`[name=formSexo][value=${this.user.sexo}]`).click();
      
      cy.get('[name=formComidaFavorita]').each(el => {
        if(el.val() !== 'vegetariano')
          cy.wrap(el).click()
      })
      
      cy.get("input#formCadastrar").click();
      cy.get("div#resultado > span").should('contain', 'Cadastrado!')
    })
  });

});
