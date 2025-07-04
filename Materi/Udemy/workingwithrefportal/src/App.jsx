import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [player, setPlayer] = useState("player 1");
  return (
    <>
      <Player setPlayerName={setPlayer} playeris={player} />
      <p>player name {player}</p>
      <div id="challenges"></div>
    </>
  );
}

export default App;
