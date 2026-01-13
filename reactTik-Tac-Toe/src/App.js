import Player from "./component/Player.js";
import GameBoard from "./component/GameBoard.js";
import Log from "./component/Log.js";
import { useState } from "react";
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelSq(rowInd, colInd) {
    setActivePlayer((currActPly) => (currActPly === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currentPlayer = "O";
      }
      const updatedTurn = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSqr={handleSelSq} turns={gameTurn} />
      </div>
      <Log />
    </main>
  );
}

export default App;
