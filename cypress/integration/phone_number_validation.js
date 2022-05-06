/// <reference types="cypress" />


describe('Phone number validation on details page', () => {
    beforeEach(() => {
      cy.visit('https://app.sea.stage.veremark.com/candidate-feedback/details/phone?user_token=c33994c7e8ad0e553ce873ef0d9ec84bd8ce628d&guid=c4941640-9aba-4db5-ac75-a45ce5fdb454')
    })
  
    it('Checks the phone number format validation', () => {

        cy.contains('Phone number*')

        cy.get('[name=phone_number]').click().type('202 123 123')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('202 123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('202-123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('202 123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('202-123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('2021231232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(202) 123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(202)-123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(202)-123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(202) 123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(202)1231232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('not.exist')

        cy.get('[name=phone_number]').click().clear().type('(102) 123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('102 123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('102-123 1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('102 123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('102-123-1232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')

        cy.get('[name=phone_number]').click().clear().type('1021231232')
        cy.contains('Phone number*').click()
        cy.contains('Please enter valid USA phone number').should('be.visible')
    
    })
})