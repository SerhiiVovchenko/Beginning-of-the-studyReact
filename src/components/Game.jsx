import React, { useState } from 'react';
import Board from './Board';
import {calculateWinner} from '../helper'
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? 'X' : 'O';

    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const startNewGame = () => {
    return (
      <button
        className="start-btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start new Game
      </button>
    )
  }

  return (
    <div className="wrapper">
      { startNewGame() }
      <Board squares={board} click={handleClick}/>
      <p className="player-walks">
        { winner
          ? 'The winner is ' +  winner + '. Congratulations!'
          : 'The ' + (xIsNext ? 'X' : 'O') + ' player walks'
        }
      </p>
    </div>
  );
}

export default Game;
