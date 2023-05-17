import Dashboard from '@/app/dashboard/page'

describe('<Dashboard />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Dashboard />)
    cy.get('[data-cy="dashboard-title"]').contains('Dashboard')
    cy.url().should('include', '/dashboard')
  })
})
