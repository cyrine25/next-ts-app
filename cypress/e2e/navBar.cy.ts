describe('API Tests', () => {
  it('Should return the correct response', () => {
    cy.request('http://localhost:8088/api/v1/questions').then(resp => {
      expect(resp.status).to.eq(200)
    })
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/dashboard')
    cy.dataCy('navbar')
    cy.dataCy('dashboard-title').contains('Dashboard')

    cy.visit('/questions')
    cy.fixture('questions.json')
      .as('question')
      .then(question => {
        expect(question).to.exist
      })
    cy.intercept('GET', '/fixtures/questions.json')
    cy.get('@question').then(response => {
      cy.log(JSON.stringify(response))
    })
    cy.dataCy('Questions').contains('Questions')
    cy.get('body')
    cy.contains('1')
  })
})
