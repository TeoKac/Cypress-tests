/// <reference types="cypress" />

describe('Middle name check', () => {
    beforeEach(() => {
      cy.visit('https://app.sea.stage.veremark.com/candidate-feedback/details/name?user_token=edc39a8f38605ed760bac7c63426ea71ab2e67a3&guid=ae1d6be8-4672-446e-ba16-6c0725f59ed7')
    })
  
    it('Checks if checkbox for middle name input field works as it should', () => {

      cy.contains('Salutation').next().click()
      cy.contains('Dr').click()


      cy.get("[name=first_name]").clear()
      cy.get("[name=first_name]").type("John")

      // disable middle name input field and check if it's not displayed
      
      cy.get("[name=middle_name]").should("exist")
      cy.contains("I don't have middle name").click()
      cy.get("[name=middle_name]").should("not.exist")
      cy.contains("I don't have middle name").click()
      cy.get("[name=middle_name]").should("exist")
      cy.get("[name=middle_name]").type("Johnny")

      cy.get("[name=last_name]").clear()
      cy.get("[name=last_name]").type("Doe")

    })
})