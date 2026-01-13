
export default function GameBoard({ onSelectSqr , board }) {
  
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelSq(rowIndex, colInd) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedValue = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedValue[rowIndex][colInd] = activePlayerSym;
  //     return updatedValue;
  //   });
  //   onSelectSqr();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colInd) => (
              <li key={colInd}>
                <button onClick={() => onSelectSqr(rowIndex, colInd)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
