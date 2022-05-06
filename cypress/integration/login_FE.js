/// <reference types="cypress" />

const email = Cypress.env("email")
const pw = Cypress.env("password")

describe('The Home Page', () => {
    beforeEach(() => {

        // seed a post in the DB that we control from our tests
        cy.request('POST', 'https://app.sea.stage.veremark.com/login', {
      })
})

it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    const { email, pw } = this.currentUser

    cy.visit('/login')

    cy.get('input[name=email]').type(email)

    cy.get('input[name=password]').type(`${pw}{enter}`)

    cy.url().should('include', '/requests')

    cy.getCookie('your-session-cookie').should('exist')

})
})