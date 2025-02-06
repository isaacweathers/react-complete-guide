import { useState } from 'react';

import Player from "./component/Player"
import GameBoard from "./component/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curAcctivePlayer) => curAcctivePlayer === 'X' ? 'O' : 'X');
  }
  

  return (
  <main>
    <div id="game-container">
      
      <ol id="players" className='highlight-player'>
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </div>
    LOG
  </main>
  )
}

export default App
