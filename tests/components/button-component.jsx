import React from 'react'

export default class ButtonComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div>
      <div className="main">
	<button value="ok" onClick={this.props.action1} />
      </div>
      <div className="other">
	<button value="submit" onClick={this.props.action2} />
      </div>
    </div>
  }
}
