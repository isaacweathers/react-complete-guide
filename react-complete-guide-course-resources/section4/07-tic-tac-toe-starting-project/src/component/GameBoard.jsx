import { useState } from "react";

// GameBoard component
export default function GameBoard({ onSelectSquare, board }) {


    // Render the game board
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* Button to select a square */}
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                        disabled={playerSymbol !== null}>
                                        {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}