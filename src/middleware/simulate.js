import React from 'react'
let { TestUtils } = React.addons

export default function simulate(data){
  if (data.element && !this.helpers.elements)
    throw new Error('Please call find() method before working on elements')

  let elements = data.element ? this.helpers.elements[data.element] : [this];
  if (!elements)
    throw new Error(`Could not call ${data.method} on element "${data.element}"`)

  elements.forEach((element) => {
    TestUtils.Simulate[data.method].call(this,
	element,
	data.options || null
    );
  });
}
