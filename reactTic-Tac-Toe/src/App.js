import Player from "./component/Player.js";
import GameBoard from "./component/GameBoard.js";
import Log from "./component/Log.js";
import GameOver from "./component/GameOver.js";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination.js"; 

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
      if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currentPlayer = "O";
      }
      return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    "X": "Player 1",
    "O": "Player 2"
  });
  const [gameTurn, setGameTurn] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameBoard].map(row => [...row]);
  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    
    gameBoard[row][col] = player;
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];
   
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
     winner = players[firstSquare];
    }
}

const hasDraw = gameTurn.length === 9 && !winner;


  function handleSelSq(rowInd, colInd) {
    // setActivePlayer((currActPly) => (currActPly === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {

      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  function handleRestartGame() {
    setGameTurn([]);
  
  }
  function handlePlayerNameChange(symbol, newName,isActive,onChange) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChange={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestartGame={handleRestartGame} />}
        <GameBoard onSelectSqr={handleSelSq} board={gameBoard} />
      </div>
      <Log turns={gameTurn}/>
    </main>
  );
}

export default App;
