import { useRef, useState } from "react";

export default function Player({ setPlayerName, playeris }) {
    const [isEdit, setIsEdit] = useState(true);
    const a = useRef();
    function savePlayerName() {
        setPlayerName(a.current.value);
        setIsEdit(false);
        a.current.value = ''; // MANIPULASI ISI NYA
    }
    return (
        <section id="player">
            <h2>Selamat datang entitas fana:  {playeris} {!isEdit && <span style={{ color: "yellow", fontSize: "10px" }} onClick={() => setIsEdit(true)}>🗡️edit</span>} </h2>
            {/* {isEdit &&  */}
            <p>
                <input type="text" ref={a} />
                <button onClick={savePlayerName}>🗃️Save Name</button>
            </p>
            {/* } */}
        </section>
    );
}
