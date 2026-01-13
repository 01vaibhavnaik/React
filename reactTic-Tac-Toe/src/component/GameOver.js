export default function GameOver({winner,onRestartGame}) {
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
       {winner && <p>{winner} won the game!</p>}
       {!winner && <p>It's A Draw!</p>}
       <p>
        <button onClick={onRestartGame}>Restart Game</button>
       </p>
    </div>
  );
}