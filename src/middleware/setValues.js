import findElements from '../utils/findElements'

export default function SetValues(data) {
  let elements = findElements(this.helpers, data.elements)
  elements.forEach((element, index) => {
    element.getDOMNode().value = data.values[index];
  });
}
