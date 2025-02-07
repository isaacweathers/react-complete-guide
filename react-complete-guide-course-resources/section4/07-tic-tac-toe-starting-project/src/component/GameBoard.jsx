import { useState } from "react";

// Initial state of the game board, a 3x3 grid filled with null values
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// GameBoard component
export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;

    }

    // Render the game board
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* Button to select a square */}
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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