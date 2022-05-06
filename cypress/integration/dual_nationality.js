/// <reference types="cypress" />

describe('Dual nationality input field check', () => {
  beforeEach(() => {
    cy.visit('https://app.sea.stage.veremark.com/candidate-feedback/details/birth?user_token=8e1bc3af471255d756a98ede261ebf81d5ceaced&guid=b96b97a1-1bea-4d14-8acc-3f3445d5c81d')
  })

  it('Check if input fields for dual nationality are displayed', () => {

    cy.get("[name=day]").type('13')
    cy.get("[name=month]").select('Feb').should('have.value', '2')
    cy.get("[name=year]").type('1993')
    cy.contains('13').click()

    cy.contains('Country of Birth*').next().click().type("Slovenia")
    cy.contains('Slovenia').click()

    cy.contains('Town of Birth*').next().type("Maribor")

    cy.contains('Nationality at Birth*').next().click().type('Slovenian')
    cy.contains('Slovenian').click({ force: true })

    cy.contains('What is your new nationality *').should('not.exist')
    cy.contains('What is your second nationality *').should('not.exist')

    cy.get('#changeNationalityYes').click({ force: true })
    cy.contains('What is your new nationality *').should('exist')

    cy.get('#changeNationalityNo').click({ force: true })
    cy.contains('What is your new nationality *').should('not.exist')

    cy.get('#holdsDualDationalityYes').click({ force: true })
    cy.contains('What is your second nationality *').should('exist')

    cy.get('#holdsDualDationalityNo').click({ force: true })
    cy.contains('What is your second nationality *').should('not.exist')

  })
})