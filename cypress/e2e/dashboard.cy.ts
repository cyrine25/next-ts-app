describe('GreetingInput', () => {
  it('fetches and displays the greeting on button click', () => {
    cy.visit('/dashboard')
    cy.get('input[type="text"]').type('John')
    cy.contains('Greeting').click()
    cy.dataCy('greeting').should('contain', 'Hello::John')
  })
})
