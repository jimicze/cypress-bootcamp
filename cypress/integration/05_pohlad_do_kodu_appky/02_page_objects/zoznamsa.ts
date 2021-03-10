// vytvor si page object skús pomocou neho napr. vytvoriť nový zoznam na boarde
// môžeš sa inšpirovať súborom ukážkou (kód nájdeš v extra.md v tomto foldri),
// alebo zvoliť svoj vlastný prístup
import { List } from '../../../support/page_objects/list'

const list = new List()

it('vytvorenie nového zoznamu', () => {

  cy
    .visit('/board/12733783659'); // doplň ID boardu

  list
    .add('nový zoznam')

});