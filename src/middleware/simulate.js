import React from 'react'
let { TestUtils } = React.addons

export default function simulate(data){
  let elements = data.element ? this.helpers.elements[data.element] : [this];
  elements.forEach((element) => {
    TestUtils.Simulate[data.method].call(this,
	element,
	data.options || null
    );
  });
}
