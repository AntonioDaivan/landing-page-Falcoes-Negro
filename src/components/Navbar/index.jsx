import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Nav from "./styled"

export const Navbar = _ => {

    const makeActive = address => {
        const lis = document.querySelectorAll('nav ul li')
        lis.forEach(li => li.classList.remove('active'))
        address.target.parentElement.classList.toggle('active')
    }

    return(
        <Nav>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link onClick={makeActive} to="/">Home</Link>
                </li>
                <li className={location.pathname === '/About' ? 'active' : ''}>
                    <Link onClick={makeActive} to="/About">Sobre</Link>
                </li>
                <li className={location.pathname === '/Services' ? 'active' : ''}>
                    <Link onClick={makeActive} to="/Services">Serviços</Link>
                </li>
                <li className={location.pathname === '/Galery' ? 'active' : ''}>
                    <Link onClick={makeActive} to="/Galery">Galeria</Link>
                </li>
            </ul>
        </Nav>
    )
}
