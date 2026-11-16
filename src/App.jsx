import { useState } from "react"
import Feedback from "./components/Feedback"
import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTurns();
  }
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Meliston" symbol="X" noEdit isActive={activePlayer === "X"} />
            <Player initialName="You" symbol="O" isActive={activePlayer === "O"} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        <Log />
      </main>
      <Feedback />
    </>
  )
}

export default App
