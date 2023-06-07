import TagComponent from '@/app/components/tags/tag/TagComponent'
import Tags from '@/app/components/tags/Tags'

describe('Tag component', () => {
  it('fetches and displays the greeting on button click', () => {
    const handleTagClick = cy.stub()

    cy.mount(<TagComponent tagName={{ value: 'Tag 1' }} key={'Tag 1'} handleTagClick={handleTagClick} />)

    cy.get('button').click()
    cy.get('button').invoke('attr', 'class').should('contain', 'selected')
    cy.get('button').click()
    cy.get('button').invoke('attr', 'class').should('not.contain', 'selected')
  })
})

describe('Tags component', () => {
  it('fetches and displays the greeting on button click', () => {
    const setQuestionsTags = cy.stub()
    cy.mount(<Tags setQuestionsTags={setQuestionsTags} />)
    cy.get('button').should('have.length', 10)
    cy.contains('Tag 1').click()
    cy.contains('Tag 1').invoke('attr', 'class').should('contain', 'selected')
    cy.contains('Tag 2').invoke('attr', 'class').should('not.contain', 'selected')
  })
})
