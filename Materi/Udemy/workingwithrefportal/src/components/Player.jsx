import { useState } from "react";

export default function Player({ setPlayerName, playeris }) {
    const [player, setPlayer] = useState(playeris);
    function setPlayernama(event) {
        console.log("aa :" + event.target.value);

        setPlayer(event.target.value)
    }
    return (
        <section id="player">
            <h2>Welcome unknown entity</h2>
            <p>
                <input type="text" onChange={setPlayernama} />
                <button onClick={() => setPlayerName(player)}>Set Name {player}</button>
            </p>
        </section>
    );
}
