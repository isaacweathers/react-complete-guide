import { useState } from "react";

// Initial state of the game board, a 3x3 grid filled with null values
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// GameBoard component
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    // State to manage the current state of the game board
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // Function to handle the selection of a square
    function handleSelectSquare(rowIndex, colIndex) {
        // Update the game board state
        setGameBoard((prevGameBoard) => {
            // Create a deep copy of the previous game board state
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            // Set the selected square to the active player's symbol
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
        // Call the onSelectSquare callback
        onSelectSquare();
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
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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