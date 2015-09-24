import React from 'react'

export default class TableComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div className="component">
      <table className="table1">
	<tr><td>1</td><td>2</td></tr>
	<tr><td>3</td><td>4</td></tr>
      </table>
      <table className="table2">
	<tr><td>5</td><td>6</td></tr>
	<tr><td>7</td><td>8</td></tr>
      </table>
    </div>
  }
}
