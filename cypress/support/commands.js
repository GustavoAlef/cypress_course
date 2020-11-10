import locators from "./locators";

Cypress.Commands.add("login", (email, password) => {
  cy.get(locators.Login.user).type(email);
  cy.get(locators.Login.pass).type(password);
  cy.get(locators.Login.btnLogin).click();
  cy.get(locators.message).should("contain", "gustavo");
});

Cypress.Commands.add("resetApp", () => {
  cy.get(locators.Menu.settings).click();
  cy.get(locators.Menu.reset).click();
});

//getToken apiTest
Cypress.Commands.add('getToken', (email, pass) => {
  cy.request({
    method: 'POST',
    url: '/signin',
    body:{
      email: email,
      senha: pass,
      redirecionar: false
    }
  }).its('body.token').should('not.be.empty')
    .then(token => {
      return token
    })
})

//reset via api
Cypress.Commands.add('resetRest', (email, pass) => {
  cy.getToken(email, pass).then(token => {
    cy.request({
      method: 'GET',
      url: '/reset',
      headers: {Authorization: `JWT ${token}`}  
    }).its('status').should('be.equal', 200)
    
  })
  
  

})