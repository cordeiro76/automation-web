/// <reference types="cypress" />

import userData from '../fixtures/example.json'

import menu from '../modules/menu'
import login from '../modules/login'
import register from '../modules/register'
import contact from '../modules/contact'
import cart from '../modules/cart'



describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/')

        menu.navigateToLogin()
    });

    it('Register a user', () => {

        login.completePreRegistrationForm()

        register.completeRegistrationForm()

        cy.url().should('include', 'account_created')
        cy.contains('b', 'Account Created')
    })


    it('User login with corret email and password', () => {

        login.fillOutRegistrationForm(userData.user, userData.password)

        cy.get('i.fa-user').parent().should('contain', userData.name)
        cy.get('a[href="/logout"]').should('be.visible')
    });

    it('User login with incorret email or password', () => {

        login.fillOutRegistrationForm(userData.user, '54321')

        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });

    it('User logout', () => {

        login.fillOutRegistrationForm(userData.user, userData.password)

        menu.logout()

        cy.url().should('contain', 'login')
        cy.contains('Login to your account')
    });

    it('User registration with an email already existing in the system', () => {

        login.loginWithSameUser(userData.user, userData.email)

        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')

    });

    it('Send Contact form with file upload', () => {

        contact.uploadContact(userData.name, userData.email, userData.subject, userData.message)

        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')

    });

    it('Verify All Products and product detail page', () => {

        menu.navigateToProducts()
        menu.verifyAllProductsPage()
        menu.clickFirstProductsListVisible()

        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').eq(0).should('contain.text', 'Category:')
        cy.get('.product-information span span').should('contain.text', 'Rs.')
        cy.get('.product-information p').eq(1).should('contain.text', 'Availability:')
        cy.get('.product-information p').eq(2).should('contain.text', 'Condition:')
        cy.get('.product-information p').eq(3).should('contain.text', 'Brand:')

    });

    it('Search for a Product', () => {
        menu.navigateToProducts()
        menu.verifyAllProductsPage()
        menu.searchForProduct()

        cy.get('.title').should('contain.text', 'Searched Products')

    });

    it.only('Verify Subscription in home page', () => {
        register.subscription(userData.email)

        cy.get('.alert-success').should('contain.text', 'You have been successfully subscribed!')
    });

    it.only('Place Order: Register before Checkout', () => {
        login.completePreRegistrationForm()

        register.completeRegistrationForm()

        cy.url().should('include', 'account_created')
        cy.contains('b', 'Account Created')

        cy.get('[data-qa="continue-button"]').click()

        cy.get('i.fa-user').parent().should('contain', userData.name)

        cart.addProductsToTheCart()
        cart.proceedToCheckout()
        cart.enterPayment(userData.name)

        cy.contains('.col-sm-9 > p', 'Congratulations! Your order has been confirmed!')
        cy.get('.col-sm-9 > .btn-default').should('be.visible')


    });
})

