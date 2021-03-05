import '@4tw/cypress-drag-drop';
import "cypress-real-events/support";
import '@cypress/code-coverage/support'
import 'cypress-file-upload';
require('@cypress/skip-test/support')

import { component } from './commands/component'
import { addBoard } from './commands/addBoard'
import { loginByApi } from './commands/loginByApi'

Cypress.Commands.add('component', component);
Cypress.Commands.add('addBoard', addBoard);
Cypress.Commands.add('loginByApi', loginByApi);