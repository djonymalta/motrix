/// <reference types="cypress" />

import {  PRODUTO, CARRINHO} from "./elements";

class produto {
  comprar() {
    cy.get(PRODUTO.tamnhoxs).click();
    cy.get(PRODUTO.corlaranja).click();
    cy.get(PRODUTO.botaoaddtocart).click({ force: true });
    cy.wait(4000)
}

  abrirCarrinho(){
    cy.get(CARRINHO.botaocarrinho).click()
    cy.get(CARRINHO.fazercheckout).click()
}
  }


export default new produto();
