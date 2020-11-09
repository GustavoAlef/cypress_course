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
    cy.xpath(locators.PgContas.fnXpBtnEditar('conta1')).click()
    cy.inserirConta('conta editada')
    cy.get(locators.message).should('contain', 'atualizada com sucesso')
    
  })
  
  it('should create a transaction', () => {
    cy.get(locators.Menu.movimentacao).click()
    
    cy.get(locators.PgMovimentacao.inputDescricao).type('transação1')
    cy.get(locators.PgMovimentacao.inputValor).type('123')
    cy.get(locators.PgMovimentacao.inputInteressado).type('stackeholder')
    cy.get(locators.PgMovimentacao.NomeConta).select('conta editada')
    cy.get(locators.PgMovimentacao.btnStatus).click()
    cy.get(locators.PgMovimentacao.btnSalvar)
      .contains('Salvar')
      .click()

    cy.get(locators.message).should('contain', 'sucesso')
    cy.xpath(locators.PgExtrato.fnXpLiTransacao('transação1', '123')).should("exist")
    
  })

  it('should get a balance', () => {
    cy.get(locators.Menu.home).click()
    cy.xpath(locators.PgHome.fnXpSaldoConta('conta editada')).should('contain', '123,00')
    
  })

  

})