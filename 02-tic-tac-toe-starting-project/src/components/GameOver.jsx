import React from 'react'

export default function GameOver({winner, onRestart}) {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
        <p>{winner && <p>{winner} won!</p>} </p>
        <p>{!winner && <p>Draw!</p>} </p>
    
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
  )
}
