import Test from '../src/legit-tests'
import {Find} from '../src/middleware'
import { expect } from 'chai';

import TestComponent from './components/component'
import TinyComponent from './components/tiny-component'

describe('.element', () => {

  it('should find box', () => {
    Test(<TestComponent/>)
    .find('.box')
    .element(box => {
      expect(box.props.children).to.be.equal('found me!')
    })
  });

  it('should find box, not div', () => {
    Test(<TestComponent/>)
    .find('.box')
    .find('div', {root: true})
    .element('box', box => {
      expect(box.props.children).to.be.equal('found me!')
    })
  });
});
