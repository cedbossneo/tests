import React from 'react';
let { TestUtils } = React.addons;

function doFind(root, selector) {
  if (!(typeof selector === "string")) {
    return {
      elements: TestUtils.scryRenderedComponentsWithType(root, selector),
      name: selector.name.toLowerCase()
    }
  }

  if (selector.match(/\./)) {
    let className = selector.replace(/\./, '');
    return {
      elements: TestUtils.scryRenderedDOMComponentsWithClass(root, className),
      name: className
    }
  }

  return {
    elements: TestUtils.scryRenderedDOMComponentsWithTag(root, selector),
    name: selector
  }
}

export default function find(selector, options) {
  let fromRoot = options && options.root;
  let root = fromRoot ? this.instance : this.root;

  let {elements, name} = doFind(root, selector);

  if (!elements || elements.length === 0)
    throw new Error(`Could not find element "${selector}"`);

  this.root = elements[0];

  if (!this.helpers.elements) {
    this.helpers.elements = [];
  }
  this.helpers.elements[name || selector] = elements
}
