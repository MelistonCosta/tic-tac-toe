import Header from "./components/Header"
import Player from "./components/Player"

function App() {
  return (
    <>
      <Header/ >
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Meliston" symbol="X" noEdit />
            <Player name="You" symbol="O" />
          </ol>
          Game Board...
        </div>
        Log...
      </main>
    </>
  )
}

export default App
