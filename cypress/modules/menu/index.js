class Menu {
    navigateToLogin() {
        cy.get('a[href="/login"]').click()
    }

    logout(){
        cy.get('a[href="/logout"]').should('be.visible').click()
    }

    navigateToProducts(){
        cy.get('a[href="/products"]').click()
    }

    verifyAllProductsPage() {
        cy.get('.title.text-center').should('be.visible').and('have.text', 'All Products')
    }

    clickFirstProductsListVisible() {
        cy.get('a[href="/product_details/1"]').click()
    }

    searchForProduct(){
        cy.get('#search_product').type('Men Tshirt')
        cy.get('[class="btn btn-default btn-lg"]').click()
    }

}


export default new Menu()
