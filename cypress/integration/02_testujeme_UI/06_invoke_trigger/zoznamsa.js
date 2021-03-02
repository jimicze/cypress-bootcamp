/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/')


});

// úloha #1: pomocou príkazu .invoke() zobraz api tooly
it('zobrazenie api toolov', () => {

  cy
    .get('#tools')
    .invoke('show')

});

// úloha #2: otvor si zoznam boardov a pomocou príkazu .trigger() zobraziť input
// na zadanie názvu nového boardu. potom skús podobnú akciu urobiť pomocou príkazu
// .invoke() a porovnaj si, v čom sa akcie líšia
it.only('zobrazenie inputu na vytvorenie nového boardu', () => {

  cy
    .get('[data-cy=create-board]')
    .trigger('click')

  // pre porovnanie týchto dvoch príkazov je potrebné zakomentovať predošlú reťaz
  cy
    .get('[data-cy="new-board-input"]')
    .invoke('show')

});