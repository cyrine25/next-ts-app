import QuestionsCollapse from '@/app/components/questionsCollapse/QuestionsCollapse'
const questions = [
  { id: 1, title: 'Question 1', answer: 'Answer 1', tags: [{ value: 'Tag1' }] },
  { id: 2, title: 'Question 2', answer: 'Answer 2', tags: [{ value: 'Tag2' }, { value: 'Tag1' }] },
  { id: 3, title: 'Question 3', answer: 'Answer 3', tags: [{ value: 'Tag3' }] },
  { id: 4, title: 'Question 4', answer: 'Answer 4', tags: [{ value: 'Tag4' }, { value: 'Tag1' }] },
]
describe('QuestionsCollapse Component', () => {
  it('Should render the questions with answers', () => {
    cy.intercept('GET', 'http://localhost:5000/questions', { body: questions })
    cy.mount(<QuestionsCollapse questions={questions} data-cy="questions-collapse" />)
    questions.forEach(question => {
      cy.dataCy('question').contains(`${question.title}`).should('exist')
      cy.dataCy('question').contains('p', 'Answer 1').should('exist')
      cy.dataCy('question').contains(`${question.title}`).click()
      cy.dataCy('question').contains('p', question.answer)
    })
  })
})
