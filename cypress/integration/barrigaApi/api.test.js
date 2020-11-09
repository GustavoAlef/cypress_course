/// <reference types="cypress" />

describe("functional tests", () => {
  before(() => {
    // cy.visit("https://barrigareact.wcaquino.me/");
    
    // cy.login("asd@email.com", "asd")

    // cy.resetApp()
  })

  it('should create a new account', () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body:{
        email: "asd@email.com", 
        senha: "asd", 
        redirecionar: false
      }
    }).its('body.token').should('not.be.empty')
      .then( token => {
        cy.request({
          method: 'POST',
          headers: {Authorization: `JWT ${token}`},
          url: 'https://barrigarest.wcaquino.me/contas',
          body:{
            nome: 'conta qualquer',
    
          }
        }).as('response')
      })
    
    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')

    })

  
  })

  it('should edit an account', () => {
    
  })
  
  it('should create a transaction', () => {
    
  })

  it('should get a balance', () => {
    
  })

})