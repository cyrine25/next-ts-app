import Tag from '@/app/components/tags/tag/Tag'
import Tags from '@/app/components/tags/Tags'

describe('Tag component', () => {
  it('fetches and displays the greeting on button click', () => {
    cy.mount(<Tag tagName={'Tag 1'} key={1} />)

    cy.get('button').click()
    cy.get('button').invoke('attr', 'class').should('contain', 'selected')
    cy.get('button').click()
    cy.get('button').invoke('attr', 'class').should('not.contain', 'selected')
  })
})

describe('Tags component', () => {
  it('fetches and displays the greeting on button click', () => {
    cy.mount(<Tags />)
    cy.get('button').should('have.length', 10)
    cy.contains('Tag 1').click()
    cy.contains('Tag 1').invoke('attr', 'class').should('contain', 'selected')
    cy.contains('Tag 2').invoke('attr', 'class').should('not.contain', 'selected')
  })
})
