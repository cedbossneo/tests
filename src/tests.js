import React from 'react/addons';
let { TestUtils } = React.addons
global.React = React //expose React to tests so they can use jsx syntax when passing in components to the class
require('react/lib/ExecutionEnvironment').canUseDOM = true

import {Find, SetState, Simulate, SetValues, Index, TextArray} from './middleware'

const unarray = (elems) => {
  return Object.keys(elems).reduce((obj, key) => {
    let element = elems[key]
    if (element.length === 1)
      obj[key] = element[0]
    else
      obj[key] = element

    return obj;
  }, {})
}

export default class Test {

  constructor(component, config){
    this.component = component

    if(config && config.shallow === true){
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(component);
      this.instance = shallowRenderer.getRenderOutput();
    }
    else{
      this.instance = TestUtils.renderIntoDocument(component)
    }

    this.helpers = {}
    this.root = this.instance
    return this
  }

  use(callback, data){
    callback.call(this, data)
    return this
  }

  element(select, callback) {
    if(!this.helpers) return this

    if(typeof select === 'string') {
      let elements = this.helpers.elements[select]
      callback.call(this, elements)
      return this
    }

    select.call(this, this.root)
    return this
  }

  test(callback) {
    var params = this.params()
    callback.call(params, params)
    return this
  }

  params(){
    var length = Object.keys(this.helpers).length
    if(this.helpers.elements && length === 1) {
      let elements = unarray(this.helpers.elements)
      return Object.assign({}, this, elements)
    }
    return this
  }

  //private

  getFirst(object){
    for (let element in object) return object[element]
  }

  //Built in middleware

  find(){
    Find.call(this, ...arguments)
    return this
  }

  index(){
    Index.call(this, ...arguments)
    return this
  }

  setState(){
    SetState.call(this, ...arguments)
    return this
  }

  simulate(){
    Simulate.call(this, ...arguments)
    return this
  }

  setValues(){
    SetValues.call(this, ...arguments)
    return this
  }

  textArray(){
    TextArray.call(this, ...arguments)
    return this
  }

  renderToString(callback){
    var component = React.renderToStaticMarkup(this.component)
    callback.call(null, component)
    return this
  }

}
