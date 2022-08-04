/// <reference types="cypress" />

const email = Cypress.env("email")
const pw = Cypress.env("password")

describe('Triggers an error and check if correct error message is displayed', () => {
    beforeEach(() => {
        cy.visit('https://app.sea.stage.veremark.com/criteria')
    })

    it('Checks if buttons on the bottom are disabled if name is not entered', () => {

        cy.contains('New Criteria').click({ force: true })

        cy.contains('Second, select a location to display the accurate check availability and pricing').next().click()
        cy.contains('United States').click({ force: true })

        cy.wait(1000)
        cy.get('input[name=switch-criminal_record_check]').focus().click({ force: true })

        cy.scrollTo('bottom')
        cy.contains('Save Criteria and Use Later').should('be.disabled')
        cy.contains('Use this criteria').should('be.disabled')

    })

    it('Checks if buttons on the bottom are disabled if checks are not selected', () => {

        cy.contains('New Criteria').click({ force: true })
        cy.get('input[name=name').type('Criminal Record Checkbox')

        cy.contains('Second, select a location to display the accurate check availability and pricing').next().click()
        cy.contains('United States').click({ force: true })

        cy.scrollTo('bottom')
        cy.contains('Save Criteria and Use Later').should('be.disabled')
        cy.contains('Use this criteria').should('be.disabled')

    })

    it('Checks if buttons on the bottom are disabled if country is not selected', () => {

        cy.contains('New Criteria').click({ force: true })
        cy.get('input[name=name').type('Criminal Record Checkbox')

        cy.wait(1000)
        cy.get('input[name=switch-criminal_record_check]').focus().click({ force: true })

        cy.scrollTo('bottom')
        cy.contains('Save Criteria and Use Later').should('be.disabled')
        cy.contains('Use this criteria').should('be.disabled')

    })

})