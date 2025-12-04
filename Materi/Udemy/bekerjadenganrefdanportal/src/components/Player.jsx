import { useRef, useState } from "react";

export default function Player() {
    const enteredName = useRef();
    const [name, setName] = useState(null);
    function handleSubmitName() {
        setName(enteredName.current.value);
        enteredName.current.value = '';
    }
    return (
        <section id="player">
            <h2>Welcome {name ?? "unknown entity"}</h2>
            < p >
                <input type="text" ref={enteredName} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmitName();
                    }
                }} />
                <button onClick={() => {
                    handleSubmitName();
                }}>Set Name</button>
            </p>
        </section>
    );
}
