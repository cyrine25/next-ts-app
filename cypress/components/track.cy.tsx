import Track from '@/app/components/track/Track'
describe('Track Component', () => {
  it('renders the track title and seniority levels', () => {
    const seniority = [
      { id: 1, level: 'Junior' },
      { id: 2, level: 'Intermediate' },
      { id: 3, level: 'Senior' },
    ]
    cy.mount(<Track seniorityLevels={seniority} track={'Web'} />)
    cy.get('h1').should('contain', 'Web')
    cy.dataCy('seniority').should('have.length', 3)
    cy.dataCy('seniority').first().should('contain', 'Junior')
  })
})
