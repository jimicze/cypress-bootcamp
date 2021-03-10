export class List {

  add(input: string) {

    cy
      .get('[data-cy=add-list]')
      .click()

    cy
      .get('[data-cy=add-list-input]')
      .type(`${input}{enter}`)

  }

}