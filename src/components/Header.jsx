import React from 'react'
import Logo from '@images/Logo.png'
import '@styles/Header.sass'
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Anime Logo" />
            </div>
            <nav className="header__navbar">
                <ul>
                    <li>Anime</li>
                    <li>Manga</li>
                    <li>Categorias</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
