import Test from '../src/legit-tests'
import { expect } from 'chai';
import sinon from 'sinon';

import FormComponent from './components/form-component'

describe('SetValues middleware', () => {

  it('should set values', () => {
    let spy = sinon.spy();
    Test(<FormComponent login={spy}/>)
      .find('input', {multi: true})
      .setValues(['username', 'password'])
      .find('form', {root: true})
      .simulate('submit')
      .test(function () {
        expect(spy.calledWith('username', 'password')).to.be.true;
      })
  });
});
