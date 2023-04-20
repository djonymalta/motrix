
export function cart (){

    cy.get('.showcart').click()
    cy.wait(2000)
    cy.get('#top-cart-btn-checkout').click()
}