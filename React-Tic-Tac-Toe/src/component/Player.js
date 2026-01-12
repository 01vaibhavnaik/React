import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayername] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function handleEdit() {
    setEditing((editing) => !editing);
  }

  let initialPlayerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    initialPlayerName = <input type="text" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
