import locators from "./locators";

Cypress.Commands.add("acessarMenuConta", () => {
  cy.get(locators.Menu.settings).click();
  cy.get(locators.Menu.contas).click();
});

Cypress.Commands.add("inserirConta", (conta) => {
  cy.get(locators.PgContas.inputNomeContas)
    .clear()
    .type(conta);
  cy.get(locators.PgContas.btnSalvar).click();
});
