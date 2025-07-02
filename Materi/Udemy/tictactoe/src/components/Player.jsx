import { useState } from "react";

export default function Player({ initialName, simbol, isActive, handlePlayerChangeName }) {
    const [enableEdit, setEnableEdit] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handeEditClick() {
        // setEnableEdit(!enableEdit); // jika ditulis dua kali maka hanya diperbaharui sekali yang paling bawah
        if (enableEdit) {
            handlePlayerChangeName(simbol, playerName)
        }
        setEnableEdit(editing => !editing); // langsung diupdate
    }
    // twoo way bindings
    function handleEditPlayer(event) {
        setPlayerName(() => event.target.value);
    }

    return <li className={isActive ? "active" : undefined}>
        <span className='player'>
            {!enableEdit ?
                <span className='player-name'>{playerName}</span>
                : <input type="text" defaultValue={playerName} required onChange={handleEditPlayer} />}
            <span className='player-symbol'>{simbol}</span>
            <button onClick={() => handeEditClick()}>{enableEdit ? "Save" : "Edit"}</button>
        </span>
    </li>;
} 