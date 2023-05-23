import Dashboard from '@/app/dashboard/page'

describe('<Dashboard />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Dashboard />)
    cy.dataCy('dashboard-title').contains('Dashboard')
    cy.url().should('include', '/dashboard')
    cy.dataCy('Gretting-input').type('User')
    cy.get('button').should('contains.text', 'Greeting').click()
    cy.dataCy('greeting').should('contain', 'Hello::User')
  })
})
