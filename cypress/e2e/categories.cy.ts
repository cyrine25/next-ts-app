describe('Page Component', () => {
  it('renders the tracks and redirect links', () => {
    cy.visit('/categories')
    cy.fixture('tracks.json')
      .as('fetchedTracks')
      .then(question => {
        expect(question).to.exist
      })
    cy.get('@fetchedTracks').then(response => {
      cy.log('fetchedTracks', JSON.stringify(response))
    })
    cy.dataCy('track').should('have.length', 5)
    cy.dataCy('track').first().find('h1').should('contain', 'Programming Languages')
    cy.dataCy('track').first().click()
    cy.url().should('include', '/questions')
  })
})
