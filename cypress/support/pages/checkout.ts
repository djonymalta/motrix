/// <reference types="cypress" />

import { FORMULARIO } from "./elements";

class dados {
  checkout() {
    cy.get(FORMULARIO.email, {timeout: 15000}).should('be.visible').type(Cypress.env("dados").email);
    cy.get(FORMULARIO.primeiroNome).type(Cypress.env("dados").primeiroNome);
    cy.get(FORMULARIO.ultimoNome).type(Cypress.env("dados").ultimoNome);
    cy.get(FORMULARIO.companhia).type(Cypress.env("dados").companhia);
    cy.get(FORMULARIO.enderecoCampo1).type(Cypress.env("dados").enderecoCampo1);
    cy.get(FORMULARIO.enderecoCampo2).type(Cypress.env("dados").enderecoCampo2);
    cy.get(FORMULARIO.enderecoCampo3).type(Cypress.env("dados").enderecoCampo3);
    cy.get(FORMULARIO.cidade).type(Cypress.env("dados").cidade);
    cy.get(FORMULARIO.estado).select(Cypress.env("dados").estado);
    cy.get(FORMULARIO.cep, {timeout: 7000}).type(Cypress.env("dados").cep);
    cy.get(FORMULARIO.telefone).type(Cypress.env("dados").telefone);
    cy.get(FORMULARIO.frete).click({force:true});
    cy.get(".button", {timeout: 7000}).click({ force: true });
    cy.get(".payment-method-content > :nth-child(4) > div.primary > .action").should('be.visible').click()
  }
}
export default new dados();
