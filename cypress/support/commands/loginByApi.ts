declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi: typeof loginByApi;
    }
  }
}

export const loginByApi = ({ email, password }): void => {

  cy
    .request({
      method: 'POST',
      url: '/login',
      body: {
        email,
        password
      }
    }).then(({ body }) => {
      cy
        .setCookie('trello_token', body.accessToken)
    })

}