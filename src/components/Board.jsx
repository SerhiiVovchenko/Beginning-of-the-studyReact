import React from 'react';
import './Board.css';
import Square from './Square';

const Board = ({squares, click}) => {
  return (
    <div className="board">
      {
        squares.map((square, ind) => (
          <Square key={ind} value={square} onClick={() => click(ind)} />
        ))
      }
    </div>
  );
}

export default Board;
