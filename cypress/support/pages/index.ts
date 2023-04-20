/// <reference types="cypress" />

import { PRODUTO, CARRINHO } from "./elements";

class produto {
  comprar() {
    cy.get(PRODUTO.tamnhoxs).click();
    cy.get(PRODUTO.corlaranja).click();
    cy.get(PRODUTO.botaoaddtocart).should('be.visible').click({ force: true });
    
  }

  abrirCarrinho() {
    cy.get(CARRINHO.botaocarrinho, {timeout: 2000}).click();
    cy.get(CARRINHO.fazercheckout, {timeout: 2000}).click();
  }
}
export default new produto();
