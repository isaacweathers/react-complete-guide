import { useState } from 'react';

import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
import Log from './component/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);

  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (gameTurns.length < 5) {
      continue;
    }

    const aTurn = gameTurns.find((turn) => turn.square.row === a.row && turn.square.col === a.column);
    const bTurn = gameTurns.find((turn) => turn.square.row === b.row && turn.square.col === b.column);
    const cTurn = gameTurns.find((turn) => turn.square.row === c.row && turn.square.col === c.column);

    if (!aTurn || !bTurn || !cTurn) {
      continue;
    }

    if (aTurn.player === bTurn.player && aTurn.player === cTurn.player) {
      console.log(`${aTurn.player} wins!`);
      break;
    }
  }
  
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
    ];

  return updatedTurns;
  });
}
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} 
          />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
