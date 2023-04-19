

export function produto (){

    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')

    cy.wait(2000)
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-50').click()
     cy.get('#product-addtocart-button').click()
}