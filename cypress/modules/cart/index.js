class Cart{
    addProductsToTheCart(){
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
    }

    proceedToCheckout(){
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(4) > .heading')
        cy.get('.form-control').type('Testing the text area!')
        cy.get(':nth-child(7) > .btn').click()

    }

    enterPayment(name){
        cy.get('[data-qa="name-on-card"]').type(name)
        cy.get('[data-qa="card-number"]').type('2222 2222 2222 2222')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('10')
        cy.get('[data-qa="expiry-year"]').type('2028')
        cy.get('[data-qa="pay-button"]').click()
    }
}

export default new Cart()