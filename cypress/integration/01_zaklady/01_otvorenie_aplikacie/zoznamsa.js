/// <reference types="cypress" />

it('otvorenie trello boardu', () => {

  // úloha #1: vyskúšaj si otvorenie stránky pomocou príkazu .visit()
  cy
    .visit('https://localhost:3000')


  // úloha #2: vytvor si nový trello board a pomocou príkazu .visit() si otvor url tohto boardu
  cy
    .visit('https://localhost:3000/board/890672489')


  // úloha #3: pozri sa do baseUrl v súbore cypress.json. skús prísť na to, akým
  // spôsobom môžeš tento parameter využiť. skús si za pomoci tohto parametra otvoriť domovskú stránku,
  // alebo trello board z úlohy #2

  cy
    .visit('/')

    // alebo

  cy
    .visit('/board/890672489')

});

// DISCLAIMER - spustenie tohto testu v Cypresse pravdepodobne vygeneruje nejaké divné výsledky :D
// je to preto, že board s číslom 890672489 mám u seba momentálne iba ja, keďže aplikácia nie je na webe
// ale iba spustená lokálne na mojom počítači. Stačí, že si tento test prepíšeš a pridáš si číslo
// vlastného boardu