/// <reference types="cypress" />

// úloha #1: vytvor si board cez api
it('vytvorenie boardu cez api', () => {

  cy
    .visit('/');
  
  cy
    .request({
      method: 'GET',
      url: '/api/boards'
    });
  
  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new api board'
      }
    });

})

// úloha #2: vytvor si list cez api. venuj špeciálnu pozornosť tomu, ktoré atribúty requestu sú povinné
it.only('vytvorenie listu cez api', () => {

  cy
    .visit('/');// pridaj si adresu svojho boardu
  
  var resp;
  
  cy
    .request({
      method: 'GET',
      url: '/api/boards',
      headers: 
      {
          accept: 'application/json' //je treba specifikovat headry
        }    
    }).then(boards => {
      
      //resp = board.body;

      
      assert.equal(boards.status, 200)
      //expect(boards.body).to.not.be.null

      //console.log(boards)
      console.log(boards.body)
      //expect(boards.body.name).to.eq('nova zahrada')

    });

})

// úloha #3: vytvor si task cez api
it('vytvorenie tasku cez api', () => {

  cy
    .visit() // pridaj si adresu svojho boardu

})

// úloha #4: premenuj board pomocou api
it('premenovanie boardu cez api', () => {

  cy
    .visit('/')

})

// úloha #5: vymaž board pomocou api
it('premenovanie boardu cez api', () => {

  cy
    .visit('/')

})