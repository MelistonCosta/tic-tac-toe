import logo from "../../public/game-logo.png"

export default function Header() {
    return(
        <header>
            <img src={logo} alt="" />
            <h1><center>React Tic-Tac-Toe <i>by <strong>Meliston Costa</strong></i></center></h1>
        </header>
    )
}