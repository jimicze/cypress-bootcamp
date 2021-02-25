/// <reference types="cypress" />

// ⚠️ jednotlivé testy si môžeš vyfiltrovať tak, že prepíšeš "it" na "it.only"
// úloha #1: označ štvorec pomocou classy, kruh pomocou idčka, trojuholník pomocou atribútu
it('class, id, attr', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/shapes.html');

  cy
    .get('.square') // označenie pomocou classy
    .get('#circle') // označenie pomocou id
    .get('[data-cy="triangle"]'); // označenie pomocou attribútu

})

/*
úloha #2: podobne (alebo ináč) ako v demonštrácii, označ jediným selectorom:
  1. iba prvý a tretí kruh
  2. iba druhý a tretí kruh
  3. iba druhý kruh
*/
it('nested classes', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/squares.html');

  cy
    .get('.green.circle') // prvý a tretí kruh

  cy
    .get('.green.square-big .circle') // druhý a tretí kruh

  cy
    .get('.red.circle') // druhý kruh

})

/*
  úloha #3: na stránke sa nachádza dúha. pozri do dokumentácie docs.cypress.io a označ
  elementy na stránke podľa inštrukcii. Tvojou úlohou bude doplniť správny príkaz
  za príkaz .get(), teda napr.:

  cy
    .get('li')
    .first()

  a podobne.
*/
it.only('advanced selecting', { baseUrl: "" }, () => {

  cy
    .visit('./cypress/integration/01_zaklady/02_oznacovanie_elementov/pages/rainbow.html');

  // #1 označ prvý element pomocou príkazu .first()
  cy
    .get('li')
    .first()

  // #2 označ posledný element pomocou príkazu .last()
  cy
    .get('li')
    .last()

  // #3 označ žltú farbu pomocou príkazu .eq()
  cy
    .get('li')
    .eq(2)

  // #4 označ modrú farbu za pomoci príkazu .next()
  cy
    .get('.green')
    .next()

  // #5 označ žltú farbu za pomoci príkazu .prev()
  cy
    .get('.green')
    .prev()

  // #5 označ všetky primárne farby pomocou príkazu .filter() (majú classu ".primary")
  cy
    .get('li')
    .filter('.primary')

  // #6 označ všetky farby okrem primárnych, pomocou príkazu .not()
  cy
    .get('li')
    .not('.primary')

  // #7 označ zelenú farbu pomocou príkazu .find
  cy
    .get('.list')
    .find('.green')

  // #8 označ celý zoznam (.list) farieb pomocou príkazu .parent()
  cy
    .get('.violet')
    .parent('.list')

});