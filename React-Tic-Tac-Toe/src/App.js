import Player from "./component/Player.js";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        Game Over
      </div>
      <div>Log</div>
    </main>
  );
}

export default App;
