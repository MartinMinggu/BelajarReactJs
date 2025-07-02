import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Logs from './components/Log.jsx'
// import './App.css'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectBox(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      console.log("=======================================");
      console.log("currentPlayer: " + currentPlayer);
      console.log("prevTurns: " + prevTurns);
      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      console.log("updateTurns: " + updateTurns);

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
