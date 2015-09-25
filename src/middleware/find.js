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

function flatten(array) {
  return [].concat.apply([], array);
}

function findSingleOrMulti(root, selector) {
  if (Array.isArray(root)) {
    var matches = root.map(element => doFind(element, selector));
    return {
      elements: flatten(matches.map(match => match.elements)),
      name: matches[0].name
    };
  }
  return doFind(root, selector);
}

export default function find(selector, options) {
  let fromRoot = options && options.root;
  let multi = options && options.multi;
  let root = fromRoot ? this.instance : this.root;

  let {elements, name} = findSingleOrMulti(root, selector);

  if (!elements || elements.length === 0)
    throw new Error(`Could not find element "${selector}"`);

  if (!this.helpers.elements) {
    this.helpers.elements = [];
  }
  if (multi) {
    this.root = elements;
    this.helpers.elements[name || selector] = elements;
  } else {
    this.root = elements[0];
    this.helpers.elements[name || selector] = elements[0];
  }

}
