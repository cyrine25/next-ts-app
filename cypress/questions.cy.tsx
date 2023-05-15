import QuestionsCollapse from '@/components/questionsCollapse/QuestionsCollapse'

describe('QuestionsCollapse Component', () => {
  it('Should render the questions with answers', () => {
    const questions = [
      { id: 1, title: 'Question 1', answer: 'Answer 1' },
      { id: 2, title: 'Question 2', answer: 'Answer 2' },
      { id: 3, title: 'Question 3', answer: 'Answer 3' },
    ]

    cy.intercept('GET', 'http://localhost:5000/questions', { body: questions })

    cy.mount(<QuestionsCollapse questions={questions} />)
    questions.forEach(question => {
      cy.get(`.ant-collapse-header-text:contains(${question.title})`).should('exist')
      cy.get('.ant-collapse-content-box').contains('p', 'Answer 1').should('exist')
      cy.get(`.ant-collapse-header:contains(${question.title})`).click()
      cy.get('.ant-collapse-content-box').contains('p', question.answer)
    })
  })
})
