/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('zobrazenie hviezdičky príkazom .trigger()', () => {



})

it('zobrazenie hviezdičky príkazom .invoke()', () => {

  cy
    .get('[data-cy="star"]')
    .click({force: true});

})

it('pridanie classy pomocou.invoke()', () => {

  

})




