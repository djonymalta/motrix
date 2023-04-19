/// <reference types="cypress" />
import { produto } from '../../support/pages/Products.spec'
import { cart } from '../../support/pages/Checkout.spec'
describe('Acessar a tela de login e adiconar produtos ao carrinho carrinho com a finalidade de realizar o fluxo de compra.', () => { 

    before('Before all', () => {
        cy.visit('/')
    })

    it('First', () => {
        produto()
        cart()
        
    });
})