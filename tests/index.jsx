import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai';

import TableComponent from './components/table-component'

describe('Index middleware', () => {

  it('should select a specific element after a multi find', () => {

    Test(<TableComponent/>)
      .find('table', {multi: false})
      .find('td', {multi: true})
      .index(1)
      .element(td => {
        expect(td.getDOMNode().textContent).to.equal('2')
      })
  });

  it('should throw an error if the root is not multi', () => {

    var search = () => Test(<TableComponent/>).find('table', {multi: false}).index(0)
    expect(search).to.throw('You can only call the "index()" method after a multi selection')
  });
});
