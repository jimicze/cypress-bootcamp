/// <reference types="cypress" />

it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

})

it('cypress príkazy', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/rainbow.html');

  // označenie prvého elementu
  cy
    .get('li').first();

  // označenie elementu pomocou indexu
  cy
    .get('li').get(1);

  // hľadanie child elementu
  cy
    .get('.list').children();
  cy
    .get('.list').children().first(); -vyber prveho pod kolekci
  // hľadanie parent elementu
  cy
    .get('.violet').parent();
  
  cy.
    get('h1:contains(Shapes)'); -vnoreni selektoru

});