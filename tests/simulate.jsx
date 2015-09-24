import Test from '../src/legit-tests'
import {Find, Simulate} from '../src/middleware'
import { expect } from 'chai';
import sinon from 'sinon';
import TestComponent from './components/component'


describe('simulate middleware', () => {

  it('should click a single element', () => {
    let spy = sinon.spy();

    Test(<TestComponent onClick={spy}/>)
    .use(Find, 'div')
    .use(Simulate, {method: 'click', element: 'div'})
    .test(() => {
      expect(spy.called).to.be.true;
    })

  });

  it('should click the first element in an array', () => {
    let spy = sinon.spy();

    Test(<TestComponent onClick={spy}/>)
    .find('button')
    .simulate({method: 'click', element: 'button'})
    .test(function() {
      expect(spy.called).to.be.true;
    })

  });

  it('should throw an error if find is not called before simulate', () => {
    let spy = sinon.spy();

    var simulation = () => Test(<TestComponent/>).simulate({method: 'click', element: 'button'})
    expect(simulation).to.throw('Please call find() method before working on elements')
  });

  it('should throw an error if element is not found', () => {
    let spy = sinon.spy();

    var simulation = () => Test(<TestComponent/>).find('button').simulate({method: 'click', element: 'not-present'})
    expect(simulation).to.throw('Could not find element "not-present"')
  });

});
