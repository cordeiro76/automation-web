class Register {
    completeRegistrationForm(){
        cy.get('#id_gender1').check()

        cy.get('input#password').type('12345', { log: false })

        cy.get('select[data-qa="days"]').select('20')
        cy.get('select[data-qa="months"]').select('September')
        cy.get('select[data-qa="years"]').select('2000')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type('QA')
        cy.get('input#last_name').type('Tester')
        cy.get('input#company').type('PosAutomation')
        cy.get('input#address1').type('Avenida Selenium, n 2004')
        cy.get('select#country').select('Canada')
        cy.get('input#state').type('California')
        cy.get('input#city').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('90001')
        cy.get('[data-qa="mobile_number"]').type('111 222 333')

        // Act
        cy.get('[data-qa="create-account"]').click()
    }

    subscription(email){

        cy.get('input#susbscribe_email').type(email)
        cy.get('[id="subscribe"]').click()
    }
}

export default new Register()