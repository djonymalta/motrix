/// <reference types="cypress" />
import produto from "../../support/pages/index";
import realizar from "../../support/pages/checkout";
describe("Acessar a tela de login e adiconar produtos ao carrinho carrinho com a finalidade de realizar o fluxo de compra.", () => {
  before("Before all", () => {
    cy.visit("/");
  });
  it("Escolher um produto, suas especificações e adiconar ao carrinho", () => {
    produto.comprar();
    produto.abrirCarrinho();
  });
  it("Preencher o formulário com dados do usuário e realiza o pedido até o pagamento", () => {
    realizar.checkout();
  });
});