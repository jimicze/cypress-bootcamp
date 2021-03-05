declare global {
  namespace Cypress {
    interface Chainable {
      addBoard: typeof addBoard;
    }
  }
}

export const addBoard = (title: string): void => {

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(`${title}{enter}`);

}