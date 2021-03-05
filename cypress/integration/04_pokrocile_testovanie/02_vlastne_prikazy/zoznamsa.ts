// úloha #1: vytvor si vlastný custom command pre vytvorenie boardu
it('vytvorenie boardu', () => {

  cy
    .visit('/')

  // command je vo foldri ./cypress/support/commands
  // a zaregistrovali sme ho v súbore ./cypress/support/index.ts
  cy
    .addBoard('new board')

});

// úloha #2: vytvor si vlastný custom command pre login pomocou api
it('login pomocou api', () => {

  // pred spustením testu je potrebné robiť signup
  // command je vo foldri ./cypress/support/commands
  // a zaregistrovali sme ho v súbore ./cypress/support/index.ts
  cy
    .loginByApi({
      email: '',
      password: ''
    })

  cy
    .visit('/')

});