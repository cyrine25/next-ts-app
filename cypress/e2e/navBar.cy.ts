describe('template spec', () => {
  it('passes', () => {
    const baseUrl = Cypress.config().baseUrl
    cy.visit(`${baseUrl}/dashboard`)
    cy.get('[data-cy="navbar"]')
    cy.get('main h1').contains('Dashboard')

    cy.visit(`${baseUrl}/questions`)
    cy.fixture('questions.json')
      .as('question')
      .then(question => {
        expect(question[1].id).to.eq(2)
      })
    cy.intercept('GET', `${baseUrl}/cypress/fixtures/questions.json`)
    cy.get('@question').then(response => {
      cy.log(JSON.stringify(response))
    })
    cy.get('main h1').contains('Questions')
    cy.get('body')
    cy.contains('Answer 1')
  })
})
