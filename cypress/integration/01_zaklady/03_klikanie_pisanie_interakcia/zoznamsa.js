/// <reference types="cypress" />

/*
  ⚠️ vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
  ℹ️ medzi jednotlivými stavmi si budeš musieť aplikáciu vrátiť do pôvodného stavu
  pomocou klávesy F2 si otvor nástroje, ktoré Ti s tým pomôžu
*/

// úloha #1: vytvor si nový zoznam (list) vo svojom boarde
it('vytvorenie nového zoznamu', () => {

  cy
    .visit('/board/58385902523')

  cy
    .get('[data-cy=add-list]')
    .click()

  cy
    .get('[data-cy=add-list-input]')
    .type('new list{enter}')


});

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {

  cy
    .visit('/board/58385902523')

  cy
    .get('[data-cy=new-task]')
    .click()

  cy
    .get('[data-cy="task-input"]')
    .type('new task{enter}')

});

// úloha #3: zaškrtni task ako vybavený
it('označenie tasku', () => {

  cy
    .visit('/board/58385902523')

  cy
    .get('[data-cy="task-done"]')
    .check()

});

// úloha #4: odškrtni task ako nevybavený
it('odznačenie tasku', () => {

  cy
    .visit('/board/58385902523')

  cy
    .get('[data-cy="task-done"]')
    .uncheck()

});