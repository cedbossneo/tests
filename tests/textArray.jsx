import Test from '../src/legit-tests'
import { expect } from 'chai';
import TableComponent from './components/textarray-component'


describe('textArray middleware', () => {

  it('should return a text representation of a table', () => {
    Test(<TableComponent/>)
      .find('tr', {multi: true})
      .textArray({tag: 'td'})
      .test(({textArrayResult}) => {
        expect(textArrayResult).to.deep.equal([
          ["Test", "21", "Paris", "Edit"],
          ["Test2", "22", "New-York", "Edit|Delete"]
        ]);
      })
  });

});
