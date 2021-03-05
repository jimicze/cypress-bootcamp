// úloha #1: nainštaluj si cypress-file-upload plugin a napíš
// test na upload obrázku do tasku. malé upozornenie - naša aplikácia používa
// knižnicu, ktorá schováva html tag <input type="file"> ten je však elementom
// ktorý si potrebuješ označiť pred uploadnutím súboru. Bonus: skús pre novinštalovaný
// plugin zaregistrovať typescript typy. návod ako na to nájdeš v dokumentáci

const db = require('../../../fixtures/uploadImageFixture.json')

it('upload súboru', () => {

  cy
    .task('setupDb', db)

  cy
    .visit(`/board/${db.boards[0].id}`)

  cy
    .get('[data-cy=task]')
    .click()

  cy
    .get('[type=file]')
    .attachFile('cypressLogo.png')


});