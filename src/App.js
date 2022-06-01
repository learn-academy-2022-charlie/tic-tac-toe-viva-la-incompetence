import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: 1,
      xo: ["X", "O"]
    }
  }

    calculateWinner = (squares) => {
    const {turn} = this.state
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if (turn % 2 === 0) {
        alert("YAY PLAYER X YOU WON");
      } else  {
        alert("YAY PLAYER O YOU WON");
      }
    }   
  }
  return null;
}

handleGamePlay = (index) => {
  const {squares, turn} = this.state
  if( squares[index] !== null) {
    void(0)
  }
  else if (turn % 2 === 0 ){
    squares[index] = "X"
    this.calculateWinner(squares)
    this.setState({squares: squares, turn: turn + 1})
  }
  else if (turn % 2 !== 0 ) {
    squares[index] = "O"
    this.calculateWinner(squares)
    this.setState({squares: squares, turn: turn + 1})
    
  }

}

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
