
export default function SetValues(values) {
  let elements = Array.isArray(this.root) ? this.root : [this.root]
  elements.forEach((element, index) => {
    element.getDOMNode().value = values[index];
  });
}
