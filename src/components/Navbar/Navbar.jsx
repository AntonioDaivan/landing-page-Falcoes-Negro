import { Link } from "react-router-dom"
import Nav from "./styled"

const Navbar = _ => {
    return(
        <Nav>
            <ul>
                <li className="pagina-atual">
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">Sobre</Link>
                </li>
                <li>
                    <Link to="/Services">Serviços</Link>
                </li>
                <li>
                    <Link to="/Galery">Galeria</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Navbar