import Question from '@/app/questions/page'
describe('get data from api', () => {
  it('renders a list of questions', () => {
    /* @ts-expect-error Async Server Component */
    cy.mount(<Question />)
    cy.wait(['@question'])
    cy.get('body')
  })
})
