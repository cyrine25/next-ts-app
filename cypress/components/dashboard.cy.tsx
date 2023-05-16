import React = require('react')

import Dashboard from '@/app/dashboard/page'

describe('<Dashboard />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Dashboard />)
    cy.get('h1').contains('Dashboard')
    cy.url().should('include', '/dashboard')
  })
})
