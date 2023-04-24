/// <reference types="cypress" />

import { PRODUTO, CARRINHO } from "./elements";

class produto {
  comprar() {
    cy.get(PRODUTO.tamnhoxs).click();
    cy.get(PRODUTO.corlaranja).click();
    cy.get(PRODUTO.botaoaddtocart, {timeout: 4500}).should('be.visible').click({ force: true });
    
  }

  abrirCarrinho() {
    cy.get(CARRINHO.botaocarrinho, {timeout: 4500}).click();
    cy.get('strong > .price', {timeout: 6000}).should('be.visible')
    cy.get(CARRINHO.fazercheckout, {timeout: 2000}).click({force: true});
  }
}
export default new produto();
