import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Logs from './components/Log.jsx'
// import './App.css'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectBox() {
    setActivePlayer(player => player === 'X' ? 'O' : 'X');
    setGameTurns();
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
        <GameBoard onSelectBox={handleSelectBox} activePlayer={activePlayer} />

      </div>
      <Logs />
    </main>
  )
}

export default App;
