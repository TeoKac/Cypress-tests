describe('Check if page returns 200', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Only checks if the page returns code 200', () => {
    cy.request({
      url: '/login'
    }).then(resp => {
      expect(resp.status).to.eq(200)
    })
    cy.log('The page is working and returning code 200')
  })
})
