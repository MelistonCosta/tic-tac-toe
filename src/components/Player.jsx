import { useState } from "react"

export default function Player({name, symbol, noEdit }) {
    const [ isEditing, setIsEditing ] = useState(false);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
        
    }
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={name} />;
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            {!noEdit && (
                <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            )}
        </li>
    )
}