import React from 'react'
let { TestUtils } = React.addons

export default function find(selector){
  let elements, name
  if (!(typeof selector === "string")) {
    name = selector.name.toLowerCase()
    elements = TestUtils.scryRenderedComponentsWithType(this.instance, selector)
  } else if (selector.match(/\./)) {
    selector = selector.replace(/\./, '')
    elements = TestUtils.scryRenderedDOMComponentsWithClass(this.instance, selector)
  }
  else elements = TestUtils.scryRenderedDOMComponentsWithTag(this.instance, selector)

  if (!elements || elements.length === 0)
    throw new Error(`Could not find element "${selector}"`)

  if(!this.helpers.elements) this.helpers.elements = []
  this.helpers.elements[name || selector] = elements
}
