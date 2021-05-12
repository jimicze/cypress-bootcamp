
it('vytvorenie nového boardu basic', () => {

    cy.visit("http://localhost:3000/")
        .get("#new-board")
        .click()
        .children(".board_addBoard")
        .click()
        .type('newahaha')
        .get(".Button")
        .contains("Save")
        .click();
});


it('vytvorenie nového boardu simple 2', () => {

    cy.visit("http://localhost:3000/")
        .get("#new-board")
        //.click()
        .children(".board_addBoard")
        .click({force: true}) // <---- nutne pri vynechane volani .click() u predchoziho elementu
        .type('newahaha')
        .get(".Button")
        .contains("Save")
        .click();
});

it('vytvorenie nového boardu simple 3', () => {

    cy.visit("http://localhost:3000/")
        .get("#new-board")
        //.click()
        .children(".board_addBoard")
        //.click({force: true}) // <---- nutne pri vynechane volani .click() u predchoziho elementu
        .type('newahaha',{force: true}) // <----- nutne pri vynechani prechodziho .click() u predchoziho elementu
        .get(".Button")  // <---- nutne pro zavolani contains
        .contains("Save")
        .click();
});

it('označenie boardu hviezdičkou', () => {



});

it('označenie tasku', () => {



});