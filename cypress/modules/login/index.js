class Login {
    completePreRegistrationForm() {
        const timestamp = new Date().getTime()

        cy.get('[data-qa=signup-name]').type('QA Tester')
        cy.get('[data-qa=signup-email]').type(`qa-testerr-${timestamp}@test.com`)
        cy.contains('button', 'Signup').click()
    }

    fillOutRegistrationForm(user, password) {
        cy.get(`[data-qa="login-email"]`).type(user)
        cy.get(`[data-qa="login-password"]`).type(password)

        cy.get(`[data-qa="login-button"]`).click()
    }

    loginWithSameUser(user, email) {
        cy.get('[data-qa=signup-name]').type(user)
        cy.get('[data-qa=signup-email]').type(email)
        cy.contains('button', 'Signup').click()
    }
}
export default new Login()