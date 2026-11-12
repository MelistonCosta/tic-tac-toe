import Feedback from "./components/Feedback"
import Header from "./components/Header"
import Player from "./components/Player"

function App() {
  return (
    <>
      <Header/ >
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Meliston" symbol="X" noEdit />
            <Player initialName="You" symbol="O" />
          </ol>
          Game Board...
        </div>
        Log...
      </main>
      <Feedback />
    </>
  )
}

export default App
