
// src/Header.js
import React, { useState } from 'react';
import './Head.css';


const Head = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">My Protofilo</div>

            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <ul className="list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">خدمات</a></li>
                    <li><a href="#about">درباره</a></li>
                    <li><a href="#contact">تماس</a></li>
                </ul>
            </nav>


            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? ' Close ' : 'Open'}
            </button>
        </header>
    );
};

export default Head;



