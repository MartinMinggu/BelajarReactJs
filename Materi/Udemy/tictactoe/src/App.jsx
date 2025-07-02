import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Logs from './components/Log.jsx'
import { WINNING_COMBINATION } from './WINNING_COMBINATION.js'
import GameOver from './components/GameOver.jsx'
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const PLAYERS = {
  "X": "Player 1",
  "O": "Player 2"
};
// Mendapatkan nama Player
function derivedPlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X';
}
function deriveWinner(gameBoard, playersName) {
  for (const combination of WINNING_COMBINATION) {
    const [a, b, c] = combination;
    const firstSquareSymbol = gameBoard[a.row][a.col];
    const secondSquareSymbol = gameBoard[b.row][b.col];
    const thirdSquareSymbol = gameBoard[c.row][c.col];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      return playersName[firstSquareSymbol];
    }
  }
  return null;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playersName, setPlayersName] = useState(PLAYERS);

  const activePlayer = derivedPlayer(gameTurns);
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];
  for (const turn of gameTurns) {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  }
  const draw = gameTurns.length === 9 && !winner;
  const winner = gameTurns.length > 4 ? deriveWinner(gameBoard, playersName) : null;

  function handleRematch() {
    setGameTurns([]);
  }
  function handleSelectBox(row, col) {
    setGameTurns(prevTurns => [{ square: { row, col }, player: derivedPlayer(prevTurns) }, ...prevTurns]);
  }
  function setPlayerName(simbol, newName) {
    setPlayersName(prevplayer => { return { ...prevplayer, [simbol]: newName } });
  }
  return (
    <main>
      <div id='game-container'>
        {/* PLAYERS */}
        <ol id='players' className='highlight-player'>
          <Player initialName={PLAYERS.X} simbol="X" isActive={activePlayer === 'X'} handlePlayerChangeName={setPlayerName} />
          <Player initialName={PLAYERS.X} simbol="O" isActive={activePlayer === 'O'} handlePlayerChangeName={setPlayerName} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} handleRematch={handleRematch} />}

        {/* GAMEBOARDS */}
        <GameBoard onSelectBox={handleSelectBox} board={gameBoard} />

      </div>
      <Logs turns={gameTurns} />
    </main>
  )
}

export default App;
