describe('API Tests', () => {
  it('Should return the correct response', () => {
    cy.request('http://localhost:8080/api/v1/questions')
      .its('body')
      .should('deep.equal', [
        {
          id: 1,
          title: 'Question 1',
          answer: 'Answer 1',
        },
        {
          id: 2,
          title: 'Question 2',
          answer: 'Answer 2',
        },
        {
          id: 3,
          title: 'Question 3',
          answer: 'Answer 3',
        },
        {
          id: 4,
          title: 'Question 4',
          answer: 'Answer 4',
        }
      ])
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
        expect(question[1].id).to.eq(2)
      })
    cy.intercept('GET', '/fixtures/questions.json')
    cy.get('@question').then(response => {
      cy.log(JSON.stringify(response))
    })
    cy.dataCy('Questions').contains('Questions')
    cy.get('body')
    cy.contains('Answer 1')
  })
})
