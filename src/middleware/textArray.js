import React from 'react'
let { TestUtils } = React.addons;

const joinTexts = el => {
  var textContent = [...el.getDOMNode().childNodes].map(child => child.textContent);
  return textContent.join('|');
};

export default function textArray(data) {
  var elements = Array.isArray(this.root) ? this.root : [this.root];
  const result = elements.map(element => {
    const subElements = TestUtils.scryRenderedDOMComponentsWithTag(element, data.tag);
    return subElements.map(joinTexts);
  });
  this.textArrayResult = data.allowEmpty ? result : result.filter((el) => el.length > 0);
}

