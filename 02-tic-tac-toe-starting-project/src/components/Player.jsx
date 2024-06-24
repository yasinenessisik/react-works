import React, { useState } from 'react'

export default function Player({initialName,symbol,isActive}) {
    const [isEditing,setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);
    function handleEditing(){
        setIsEditing(editing => !editing);
    } 
    function handleOnChange(event){
        setPlayerName(event.target.value);
    }
    let editablePlayername = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayername = <input type='text' required value={playerName} onChange={handleOnChange} ></input>
    }
  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button> 
  </li>
  )
}
