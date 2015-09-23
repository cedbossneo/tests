
export default function SetValues(data) {
  if (data.elements && !this.helpers.elements)
    throw new Error('Please call find() method before working on elements')

  let elements = this.helpers.elements[data.elements];
  if (!elements) {
    throw new Error(`Could not find element "${data.elements}"`)
  }
  elements.forEach((element, index) => {
    element.getDOMNode().value = data.values[index];
  });
}
