import logo from "../../public/game-logo.png"

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Tic Tac Toe Game" />
            <h1>React Tic-Tac-Toe <i>by <strong>Meliston Costa</strong></i></h1>
        </header>
    )
}