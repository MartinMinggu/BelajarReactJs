import { useState } from "react";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenges.jsx";

function App() {
  const [player, setPlayer] = useState("player 1");
  return (
    <>
      <Player setPlayerName={setPlayer} playeris={player} />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
