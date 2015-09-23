
export default function findElements(context, name) {
  if (!context.elements)
    throw new Error('Please call find() method before working on elements')

  let elements = context.elements[name];
  if (!elements) {
    throw new Error(`Could not find element "${name}"`)
  }
  return elements
}
