import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import React, { useState } from 'react'
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {
  
  const [gameTurns,setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSquare =gameBoard[combination[1].row][combination[1].column]
    const thirdSquare =gameBoard[combination[2].row][combination[2].column]
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = firstSquare;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex,colIndex){
    //setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square : {row:rowIndex, col: colIndex} ,player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
    console.log(gameTurns);
  }
  function handleRematch(){
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container"> 
      <ol id="players" className="highlight-player">
      <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X' }></Player>
      <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O' }></Player>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
      {(winner || hasDraw) && <GameOver winner={winner}  onRestart={handleRematch}></GameOver>}
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
