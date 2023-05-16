import './commands'

import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', (component, options) => mount(component, options))
