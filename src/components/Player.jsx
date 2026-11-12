import { useState } from "react"

export default function Player({initialName, symbol, noEdit, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }
    function handleNameChange(event){
        // console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleNameChange} required />;
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            {!noEdit && (
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            )}
        </li>
    )
}