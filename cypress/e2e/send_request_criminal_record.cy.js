/// <reference types="cypress" />

const email = Cypress.env("email")
const pw = Cypress.env("password")

var timestamp = Date.now()

describe('Criminal record checkbox check', () => {
    beforeEach(() => {
        cy.visit('https://app.sea.stage.veremark.com/criteria')
    })

    it('Create new criteria for criminal record search with checkbox & sends to user', () => {

        cy.contains('New Criteria').click({force: true})

        cy.get('input[name=name]').type('Test #' + timestamp)

        cy.contains('Second, select a location to display the accurate check availability and pricing').next().click()
        cy.contains('United States').click({force: true})

        cy.wait(1000)
        cy.get('input[name=switch-criminal_record_search]').focus().click({force: true})

        cy.get('input[name=additional_fees_consent]').click({force: true})

        cy.contains('Select the check level that you require:').next().click()
        cy.contains('Unlimited Screening Package').should('be.visible')
        cy.contains('Base Screening Package').should('be.visible')

        cy.scrollTo('bottom')
        cy.contains('Save Criteria and Use Later').should('be.visible')

        cy.contains('Use this criteria').click()
        cy.wait(2000)

        cy.contains('Name').next().click().type('Auto test #' + timestamp)
        cy.contains('Email').next().click().type(timestamp + '@test.test')
        cy.contains('Role').next().click().type('Auto Test')
        cy.contains('Send Request').click()

        cy.wait(8000)
        cy.contains('Request created successfully!').should('be.visible')
        cy.contains('ID').should('be.visible')
        cy.contains('Stage').should('be.visible')
        cy.contains('Due Date').should('be.visible')
        cy.contains('Actions').should('be.visible')
    })
})