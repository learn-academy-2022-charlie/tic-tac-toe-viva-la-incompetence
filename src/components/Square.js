import React, { Component } from 'react'

class Square extends Component {

handleClick = () => {
  this.state.xo(this.state.value)
}

  render() {
    return(
      <>
        <div className="square" onClick={this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
