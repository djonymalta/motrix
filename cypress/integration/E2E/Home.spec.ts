/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { produto } from '../../support/pages/Products.spec'
import { cart } from '../../support/pages/Checkout.spec'


describe('Acessar a tela de login e adiconar produtos ao carrinho carrinho com a finalidade de realizar o fluxo de compra.', () => { 

    before('Before all', () => {
        cy.visit('/')
    })

    it('Acessar a Home Page e adicionar um produto ao carrinho e ir para a página de checkout', () => {
        cy.get('#option-label-size-143-item-166').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button').click({force: true})
        cy.get('.showcart').click()
        cy.wait(3000)
        cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
     });

     it('Acessar a tela Shipping Address e preencher os campos para envio', () => {
        cy.wait(5000)
        cy.get('#customer-email').type('djony.malta@icloud.com')
        cy.get('input[name="firstname"').type('Djony')
        cy.get('input[name="lastname"').type('Xavier Malta Kalfeltz')
        cy.get('input[name="company"').type('Motrix')
        cy.get('input[name="street[0]"').type('Avenida Aniloel Nazareth, 5080')
        cy.get('input[name="street[1]"').type('Parque Res. Comendador Mançor Daud ')
        cy.get('input[name="street[2]"').type('Torre II, Apto 112')
        cy.get('input[name="city"').type('São José do Rio Preto')
        cy.get('.control  .select[name="region_id"').select('5')
        cy.get('input[name="postcode"').type('12345-6789')
        cy.wait(3000)
        cy.get('input[name="telephone"').type('666-145-23')

        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click({force:true})
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

        // <option data-title="Alabama" value="1">Alabama</option>
     })
})

