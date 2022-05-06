/// <reference types="cypress" />

describe('SSN number validation on details page', () => {
    beforeEach(() => {
      cy.visit('https://app.sea.stage.veremark.com/candidate-feedback/details/id?user_token=dbdc34cfdab090fc269241f5a544de2d9ead0175&guid=a13dcd66-4bd3-49e4-84a9-4bb2b038e7d5')
    })
  
    it('Checks the SSN number format validation', () => {

        cy.contains('What is your SSN number?*')

        cy.get('[name=id_type_details]').click().type('123 12 1234')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('not.exist')

        cy.get('[name=id_type_details]').click().clear().type('123121234')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('be.visible')

        cy.get('[name=id_type_details]').click().clear().type('123-121234')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('be.visible')

        cy.get('[name=id_type_details]').click().clear().type('123-12-1234')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('not.exist')

        cy.get('[name=id_type_details]').click().clear().type('12312-1234')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('be.visible')

        cy.get('[name=id_type_details]').click().clear().type('123 12 1234 ')
        cy.contains('What is your SSN number?*').click()
        cy.contains('Please enter valid Social Security Number!').should('be.visible')
        cy.log('NOTE: extra space at the end')
        
    })
})