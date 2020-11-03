// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

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
