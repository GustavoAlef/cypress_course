/// <reference types="cypress" />
import locators from '../../support/locators'
import '../../support/commandsContas'

describe("functional tests", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    
    cy.login("asd@email.com", "asd")

    cy.resetApp()
  })

  it('should create a new account', () => {
    cy.acessarMenuConta()
    cy.inserirConta('conta1')
    cy.get(locators.message).should('contain', 'inserida com sucesso')
    
  })

  it('should edit an account', () => {
    cy.acessarMenuConta()
    cy.xpath(locators.PgContas.xpBtnEditar).click()
    cy.inserirConta('conta editada')
    cy.get(locators.message).should('contain', 'atualizada com sucesso')
    
  })

})