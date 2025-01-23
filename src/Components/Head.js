
import React, { useState } from 'react';
import { Fragment } from 'react';
import './Head.css'


export function Head() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Fragment>
            <div className="container">
                <header className={`header ${isMenuOpen ? 'open' : ''}`}>
                    <div className="header-content">
                        <button className="menu-toggle" onClick={toggleMenu}>
                            <span className="hamburger-icon">☰</span>
                        </button>

                    </div>
                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main">
                    <h2 className="title">Masoumeh Nawrozi</h2>

                </main>
            </div>

        </Fragment>


    );
}
