describe('API Tests', () => {
  it('Should return the correct response', () => {
    cy.request('http://localhost:5000/questions')
      .its('body')
      .should('deep.equal', [
        {
          id: 1,
          title: 'question 1',
          answer: 'Answer 1',
        },
        {
          id: 2,
          title: 'question 2',
          answer: 'Answer 2',
        },
        {
          id: 3,
          title: 'question 3',
          answer: 'Answer 3',
        },
        {
          id: 4,
          title: 'question 4',
          answer: 'Answer 4',
        },
        {
          id: 5,
          title: 'question 5',
          answer: 'Answer 5',
        },
      ])
  })
})
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/dashboard')
    cy.get('[data-cy="navbar"]')
    cy.get('main h1').contains('Dashboard')

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
    cy.get('main h1').contains('Questions')
    cy.get('body')
    cy.contains('Answer 1')
  })
})
