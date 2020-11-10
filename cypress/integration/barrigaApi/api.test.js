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

  it.only('should edit an account', () => {
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
  
  // it('should create a transaction', () => {
    
  // })

  // it('should get a balance', () => {
    
  // })

})
