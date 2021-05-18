/// <reference types="cypress" />

beforeEach( () => {

  cy.intercept('@AddTask'); //??????

  cy.intercept('@Homepage');

  cy.
    intercept({
      method: 'GET',
      url: '/api/boards'
  }).as('GetBoards'); //zrejmne pouziti aliasu je treba vzdy

  cy
    .visit('/').as('Homepage'); // ⚠️ doplň si adresu svojho boardu

});

it.only('vytvorenie tasku', () => {

  // úloha #1: vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení.
  // pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

  cy.
    request({
      method: 'POST',
      url: 'api/lists',
      body: //body je vlastne nahrazeni v pripade intercept, cize toto nebude fungovat
      {
        boardId: 79587092860,
        title: "new api task"
      }
    }).as('AddTask'); //????

})

it('odstránenie zoznamu', () => {

  // úloha #2: manuálne si vytvor nový zoznam a pomocou príkazov .get() a click()
  // testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it('zaškrtnutie tasku', () => {

  // úloha #3: pomocou testu si zaškrtni task v zozname a odsleduj si request,
  // ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request.
  // skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})