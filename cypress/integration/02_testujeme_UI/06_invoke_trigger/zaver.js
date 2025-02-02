/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('zobrazenie hviezdičky príkazom .trigger()', () => {

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy="star"]')
    .click();

})

it('zobrazenie hviezdičky príkazom .invoke()', () => {

  cy
    .get('[data-cy="star"]')
    .invoke('show')
    .click();

})

it('pridanie classy pomocou.invoke()', () => {

  cy
    .get('[data-cy=task]')
    .invoke('addClass', 'overDue')

})



