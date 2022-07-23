// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win, 'self', {
      get: () => {
        return window.top
      }
    })
  })
////КРАШИТСЯ

beforeEach(function () {
Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
      $iframe.on('load', () => {
          resolve($iframe.contents().find('body'));
      });
  });
});
// for <iframe id="foo" src="bar.html"></iframe>
////

///cy.viewport(1600,900)




})
/////IFRAMEEE

// Alternatively you can use CommonJS syntax:
// require('./commands')
