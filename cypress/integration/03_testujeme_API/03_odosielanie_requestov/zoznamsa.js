/// <reference types="cypress" />

// úloha #1: vytvor si board cez api
it('vytvorenie boardu cez api', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board vytvoreny cez api'
      }
    })

  cy
    .visit('/')

})

// úloha #2: vytvor si list cez api. venuj špeciálnu pozornosť tomu, ktoré atribúty requestu sú povinné
it('vytvorenie listu cez api', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/lists',
      body: {
        boardId: 76547003119,
        title: 'list vytvoreny cez api'
      }
    })

  cy
    .visit('/board/76547003119') // pridaj si adresu svojho boardu

})

// úloha #3: vytvor si task cez api
it('vytvorenie tasku cez api', () => {

  cy
    .request({
      method: 'POST',
      url: '/api/tasks',
      body: {
        listId: 56244626608,
        boardId: 76547003119,
        title: 'list vytvoreny cez api'
      }
    })

  cy
    .visit('/board/76547003119') // pridaj si adresu svojho boardu

})

// úloha #4: premenuj board pomocou api
it('premenovanie boardu cez api', () => {

  cy
    .request({
      method: 'PATCH',
      url: '/api/boards/76547003119',
      body: {
        name: 'renamed board'
      }
    })

  cy
    .visit('/')

})

// úloha #5: vymaž board pomocou api
it('premenovanie boardu cez api', () => {

  cy
    .request({
      method: 'DELETE',
      url: '/api/boards/76547003119'
    })

  cy
    .visit('/')

})