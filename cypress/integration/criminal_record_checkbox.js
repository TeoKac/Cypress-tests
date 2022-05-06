/// <reference types="cypress" />

const email = Cypress.env("email")
const pw = Cypress.env("password")

describe('Criminal record checkbox check', () => {
    beforeEach(() => {
        cy.visit('https://app.sea.stage.veremark.com/criteria')
    })

    it('Create new criteria for criminal record check with checkbox', () => {

        cy.contains('New Criteria').click({force: true})

        cy.get('input[name=name').type('Criminal Record Checkbox')

        cy.contains('Second, select a location to display the accurate check availability and pricing').next().click()
        cy.contains('United States').click({force: true})

        cy.wait(1000)
        cy.get('input[name=switch-criminal_record_check]').focus().click({force: true})

        cy.get('input[name=additional_fees_consent]').click({force: true})

        cy.contains('Select the check level that you require:').next().click()
        cy.contains('Unlimited Screening Package').should('be.visible')
        cy.contains('Base Screening Package').should('be.visible')

        cy.scrollTo('bottom')
        cy.contains('Save Criteria and Use Later').should('be.visible')
    })
})