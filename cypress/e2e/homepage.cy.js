describe('Check if page returns 200', () => {
  beforeEach(() => {
      cy.visit('https://app.sea.stage.veremark.com')
  })

  it('Only checks if the page returns code 200', () => {
      cy.request({
          url: 'https://app.sea.stage.veremark.com',
        }).then((resp) => {
          expect(resp.status).to.eq(200)
        })
        cy.contains("Forgot password?").should("be.visible")
        cy.log("The page is working and returning code 200")
  })
})
  