import { useState } from "react";

export default function Player({ initialName, symbol, isActive , onChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function handleEdit() {
    setEditing((editing) => !editing);

    if (isEditing) {
    onChange(symbol, playerName);
  }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let initialPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    initialPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {initialPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
