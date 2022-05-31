import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [true, true, true, true, true, true, true, true, true],
      xo: ["X", "O"]
    }
  }
//   componentDidMount() {
//     this.setState({squares: true}) 
// }


// handleGamePlay = (index) => {
//     const { squares } = this.state
//     if (squares[index] === true) {
//       squares[index] = "X"
//       this.setState({squares: false})
//     } else if (squares[index] === false) {
//       squares[index] = "O"
//       this.setState({squares: true})
//     }
//   }

handleGamePlay = (index) => {
  alert(index)}

  render() {
    console.log(this.state.squares)
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
        {this.state.squares.map((value, index) => {
          return(
            <Square
            value={value}
            index={index}
            key={index}
            handleGamePlay={this.handleGamePlay}
             />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
