import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai';
import sinon from 'sinon';

import ButtonComponent from './components/button-component'
import TableComponent from './components/table-component'

describe('Find middleware', () => {

  it('should find nested elements', () => {
    let spy = sinon.spy();

    Test(<ButtonComponent action1={spy}/>)
      .find('.main')
      .find('button')
      .simulate('click')
      .test(({component}) => {
        expect(component.props.action1.called).to.be.true;
      })
  });

  it('should find multiple elements', () => {

    Test(<TableComponent/>)
      .find('table')
      .find('td', {multi: true})
      .element('td', td => {
        expect(td.length).to.equal(4)
      })
  });

  it('should find single element when multi is false', () => {

    Test(<TableComponent/>)
      .find('table', {multi: false})
      .find('td', {multi: false})
      .element(td => {
        expect(td.getDOMNode().textContent).to.equal('1')
      })
  });

  it('should find deeply nested elements', () => {

    Test(<TableComponent/>)
      .find('table', {multi: true})
      .find('td', {multi: true})
      .element('td', td => {
        expect(td.length).to.equal(8)
      })
  });
});
