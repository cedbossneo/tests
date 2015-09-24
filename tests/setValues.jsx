import Test from '../src/legit-tests'
import { expect } from 'chai';
import sinon from 'sinon';

import FormComponent from './components/form-component'

describe('SetValues middleware', () => {

  it('should set values', () => {
    let spy = sinon.spy();
    Test(<FormComponent login={spy}/>)
      .find('input')
      .setValues({elements: 'input', values: ['username', 'password']})
      .find('form', {root: true})
      .simulate({element: 'form', method: 'submit'})
      .test(function () {
	expect(spy.calledWith('username', 'password')).to.be.true;
      })
  });

  it('should throw an error if there is no component to set values on', () => {
      let setValues = () => Test(<FormComponent/>).find('input').setValues({elements: 'nothing'})
      expect(setValues).to.throw('Could not find element "nothing"')
  });
});
