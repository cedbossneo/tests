import React from 'react'
let { TestUtils } = React.addons

export default function simulate(data){
  if (data.element && !this.helpers.elements)
    throw new Error('Please call find() method to retrieve some component on which to perform the simulation')

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
