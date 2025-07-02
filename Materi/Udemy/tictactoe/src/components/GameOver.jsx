export default function GameOver({ winner, handleRematch }) {
    return <div id="game-over">
        <p>Game Over!</p>
        <p>{!winner ? `Draw` : `${winner} won!`}</p>
        <p><button onClick={handleRematch}>Rematch</button></p>
    </div>
}