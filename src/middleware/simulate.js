import React from 'react'
let { TestUtils } = React.addons
import findElements from '../utils/findElements'

export default function simulate(data){
  let elements = findElements(this.helpers, data.element)

  elements.forEach((element) => {
    TestUtils.Simulate[data.method].call(this,
	element,
	data.options || null
    );
  });
}
