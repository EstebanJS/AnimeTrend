import React from 'react'
import Logo from '@images/Logo.png'
import '@styles/Header.sass'
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img loading="lazy" src={Logo} alt="Anime Logo" width="75" height="74.4"/>
            </div>
            {/* <nav className="header__navbar">
                <ul>
                    <li>Anime</li>
                    <li>Manga</li>
                    <li>Categorias</li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header
