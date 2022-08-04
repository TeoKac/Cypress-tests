/// <reference types="cypress" />

// TO DO: iframe widget solution

describe('ClearStar Widget check', () => {
    beforeEach(() => {
      cy.visit('https://app.sea.stage.veremark.com/candidate-feedback/details/phone?user_token=bb7b71cc1bbae9385a650bdd6ea7b87580ff195b&guid=14cf0233-beaf-4403-9947-22a620b124cd')
    })
  
    it('Checks if the ClearStar Widget is displayed and if it works', () => {

        cy.contains('Save and Continue').click()
        cy.contains('Start').click()

        cy.wait(10000)
        cy.get('iframe[name=btn btn-primary pull-right custom-button step-2]').click()
    })
})