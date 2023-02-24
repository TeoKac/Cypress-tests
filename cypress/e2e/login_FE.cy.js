/// <reference types="cypress" />

describe('Login to Veremark app', () => {
    beforeEach(() => {
      // Log out if already logged in
      cy.visit('https://app.sea.stage.veremark.com/login')
      cy.get('[data-test=logout]').click()
    })
  
    it('can log in with valid credentials', () => {
      cy.visit('https://app.sea.stage.veremark.com/login')
  
      // Enter username and password
      cy.get('[data-test=username]').type('your-username')
      cy.get('[data-test=password]').type('your-password')
  
      // Submit the form
      cy.get('[data-test=login-form]').submit()
  
      // Make sure we are redirected to the dashboard
      cy.url().should('include', '/dashboard')
  
      // Check that the login was successful by checking for the presence of the logout button
      cy.get('[data-test=logout]').should('exist')
    })
  
    it('displays an error message if login fails', () => {
      cy.visit('https://app.sea.stage.veremark.com/login')
  
      // Enter a wrong username and password
      cy.get('[data-test=username]').type('wrong-username')
      cy.get('[data-test=password]').type('wrong-password')
  
      // Submit the form
      cy.get('[data-test=login-form]').submit()
  
      // Check that an error message is displayed
      cy.get('[data-test=error-message]').should('be.visible')
    })
  })

  
  /*
  // Navigate to the login page
cy.visit('https://app.sea.stage.veremark.com/login');

// Check if the user is already logged in
cy.get('#logout-button').then(($btn) => {
  // If the user is logged in, log them out
  if ($btn.length > 0) {
    cy.get('#logout-button').click();
  }
});

// Enter the username and password
cy.get('#username-field').type('my_username');
cy.get('#password-field').type('my_password');

// Submit the login form
cy.get('#login-button').click();

// Verify that the user has logged in successfully
cy.get('#profile-picture').should('be.visible');

  
  */