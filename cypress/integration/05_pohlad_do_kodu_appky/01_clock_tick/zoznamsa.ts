// úloha #1: v súbore ./trelloapp/assets/js/components/board.js je funkcia addList() (riadok 241)
// ktorá funguje podobne ako createNewBoard(), ktorú sme si práve ukázali. skús napísať
// podobný test ako sme si ukázali, ale pre vytvorenie listu. pomocou príkazov
// .clock() a .tick() zmeň timeout zobrazenia chybovej hlášky.

it('chybova hláška pri vytvorení listu', () => {

  cy
    .intercept('POST', '/api/lists', {
      forceNetworkError: true
    })
    .as('listCreate')

  cy
    .visit('/board/12733783659'); // doplň ID boardu

  cy
    .get('[data-cy=add-list]')
    .click()

  cy
    .clock()

  cy
    .get('[data-cy=add-list-input]')
    .type('nový zoznam{enter}')

  cy
    .get('#errorMessage')
    .should('be.visible')

  cy
    .tick(4000)

  cy
    .get('#errorMessage')
    .should('not.be.visible')

})