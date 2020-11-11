/// <reference types="cypress" />

describe("functional tests", () => {
  let token;
  
  before(() => {
    cy.getToken('asd@email.com', 'asd')
      .then(tkn => {
        token = tkn
    })

    cy.resetRest('asd@email.com', 'asd')
  })

  it('should create a new account', () => {
      cy.request({
          method: 'POST',
          headers: {Authorization: `JWT ${token}`},
          url: '/contas',
          body:{
            nome: 'nova conta',
          }
        }).as('response')

      cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')

    })
  })

  it('should edit an account', () => {
    cy.request({
      method: 'GET',
      headers: {Authorization: `JWT ${token}`},
      url: '/contas',
      qs:{
        nome: 'Conta para alterar',
      }
    }).then(res => {
      cy.request({
        method: 'PUT',
        headers: {Authorization: `JWT ${token}`},
        url: `/contas/${res.body[0].id}`,
        body:{
          nome: 'conta alterada via rest',
        }
      }).as('response')
      
    })

    cy.get('@response').its('status').should('be.equal', 200)
  })

  it('should not create an account with same name', () => {
    cy.request({
      method: 'POST',
      url: '/contas',
      headers: {Authorization: `JWT ${token}`},
      body:{
        nome: 'Conta mesmo nome',
      },
      failOnStatusCode: false
    }).as('response')   
    
    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(400)
      expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
    })
  })
  
  it('should create a transaction', () => {
    cy.getAccountByName('Conta para movimentacoes', 'asd@email.com', 'asd')
      .then(contaId => {
        cy.request({
          method: 'POST',
          url: '/transacoes',
          headers: {Authorization: `JWT ${token}`},
          body: {
            conta_id: contaId,
            //uso da library moment para datas
            //data atual + 1 dia
            data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
            //pega data atual
            data_transacao: Cypress.moment().format('DD/MM/YYYY'),
            descricao: "asd",
            envolvido: "interessado",
            status: true,
            tipo: "REC",
            valor: "123",
          }
        }).as('resTransaction')
      })

    cy.get('@resTransaction').its('status').should('be.equal', 201)
    cy.get('@resTransaction').its('body.id').should('exist')
  })

  // it('should get a balance', () => {
    
  // })

})
