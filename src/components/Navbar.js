import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.svg'


const Navbar = () => {
    useEffect(() => {
        const autohide = document.querySelector('.autohide')
        let lastScroll = 0

        window.onscroll = e => {
            const currentScroll = document.documentElement.scrollTop

            if (lastScroll <= currentScroll) {
                if (currentScroll < 107)
                    autohide.classList.remove('navbar-sticky')
                else {
                    autohide.classList.remove('scrolled-up')
                    autohide.classList.add('scrolled-down')
                }
            } else {
                autohide.classList.remove('scrolled-down')
                autohide.classList.add('scrolled-up')
                autohide.classList.add('navbar-sticky')
            }
            
            lastScroll = currentScroll
        }
    })

    return (
        <nav className="navbar navbar-container navbar-expand-lg bg-light autohide">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo-nav" alt="Maere Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/quienessomos">Quiénes somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/casas">Casas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactos">Contactos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
