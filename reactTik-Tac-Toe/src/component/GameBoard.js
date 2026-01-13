const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSqr , turns }) {
  let gameBoard = initialGameBoard;
  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    
    gameBoard[row][col] = player;
  }
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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colInd) => (
              <li key={colInd}>
                <button onClick={() => onSelectSqr(rowIndex, colInd)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
