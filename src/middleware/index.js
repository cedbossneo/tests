export default function Index(index) {
  if (!Array.isArray(this.root)) {
    throw new Error('You can only call the "index()" method after a multi selection')
  }
  this.root = this.root[index]
}
