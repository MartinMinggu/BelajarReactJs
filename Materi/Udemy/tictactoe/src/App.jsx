import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Logs from './components/Log.jsx'
import { WINNING_COMBINATION } from './WINNING_COMBINATION.js'
// import './App.css'
function derivedPlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = derivedPlayer(gameTurns);
  function handleSelectBox(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      let currentPlayer = derivedPlayer(prevTurns);
      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updateTurns;
    });
  }
  return (
    <main>
      <div id='game-container'>
        {/* PLAYERS */}
        <ol id='players' className='highlight-player'>
          <Player initialName={"Player 1"} simbol="X" isActive={activePlayer === 'X'} />
          <Player initialName={"Player 2"} simbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {/* GAMEBOARDS */}
        <GameBoard onSelectBox={handleSelectBox} turns={gameTurns} />

      </div>
      <Logs turns={gameTurns} />
    </main>
  )
}

export default App;
