import React, { Component } from 'react'
import Square from './Components/Square'
import './App.css'

export default class  extends Component {
  //Constructor for initializing the state
  constructor(props){
    super(props);
    this.state={
      square:Array(9).fill(null),
      playerTurn:true,
    }
    this.resetFunction=this.resetFunction.bind(this)
  }
  //Function for checking the winner
  checkWinner(squares){
    var player=null;
    let playerWon=false;
    const line=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0;i<line.length;i++){
      const [a,b,c]=line[i];
      if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
        player=squares[a];
        playerWon=true;
        break;
      }
    }
    if(playerWon){
      
      return player;
    }
    else
    {
      return player;
    }

  }
  //Check Drawn
  checkDraw(squares){
    if(!this.checkWinner(squares)&& !squares.includes(null)){
      return 'draw'
    }
    else 
    return null;
  }
  //Event handler for the on Click event for each square
  handleClick(i){
    var squares=this.state.square.slice();
    if(this.state.square[i]||this.checkWinner(squares))
    {
      return;
    }
    this.state.playerTurn ? squares[i]='X' :squares[i]='O';
      this.setState({playerTurn:!this.state.playerTurn})
      this.setState({square:squares})
      
  }
  //render method for the square
  rendersquare(i){
    return(
      <Square index={i} value={this.state.square[i]} onClick={()=>this.handleClick(i)}/>
    )
  }
  //reset board function
  resetFunction(){
    
    this.setState({
      square:Array(9).fill(null),
      playerTurn:true

    })


  }
  //main code begins here
  render() {
     const whichPlayer=this.state.playerTurn ? 'X' : 'O'; 
    return (
      <div className="board">
        <button onClick={()=>this.resetFunction()}>Reset</button>
        <div><h1>Welcome to Tic Tac Toe Game</h1></div>
        <div><h2>Player {whichPlayer} Turn. </h2></div>
        <div className="row">
           {this.rendersquare(0)}
           {this.rendersquare(1)}
           {this.rendersquare(2)}
        </div>
        <div className="row">
           {this.rendersquare(3)}
           {this.rendersquare(4)}
           {this.rendersquare(5)}
        </div>
        <div className="row">
           {this.rendersquare(6)}
           {this.rendersquare(7)}
           {this.rendersquare(8)}
        </div>
        <div>{
          
          this.checkWinner(this.state.square) ?<h1>Player {this.checkWinner(this.state.square)} Wins!</h1>:''  
          }</div>
          <div>
            {
              this.checkDraw(this.state.square)?<h1>Drawn</h1>:''
            }
          </div>

      </div>
    )
  }
}
