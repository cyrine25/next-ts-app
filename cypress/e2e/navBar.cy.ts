describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/dashboard')
    cy.get('[data-cy="navbar"]')
    cy.get('main h1').contains('Dashboard')
    // cy.get('main:contains("dashboard")')
  })
})
