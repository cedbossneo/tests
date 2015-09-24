import Test from '../src/legit-tests'
import { Find } from '../src/middleware'
import { expect } from 'chai';
import sinon from 'sinon';

import ButtonComponent from './components/button-component'

describe('Find middleware', () => {

  it('should find nested elements', () => {
    let spy = sinon.spy();

    Test(<ButtonComponent action1={spy}/>)
      .find('.main', {root: true})
      .find('button', {root: false})
      .simulate('click')
      .test(({component}) => {
	expect(component.props.action1.called).to.be.true;
      })
  });
});
