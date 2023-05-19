import Dashboard from '@/app/dashboard/page'

describe('<Dashboard />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Dashboard />)
    cy.dataCy('dashboard-title').contains('Dashboard')
    cy.url().should('include', '/dashboard')
  })
})
