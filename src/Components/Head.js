
import React, { useState } from 'react';
import { Fragment } from 'react';
import  './Head.css'

export function Head() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <h1>Header</h1>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main">
                    <h2>Main Section</h2>
                    <p>This is the main content area.</p>
                </main>
            </div>

        </Fragment>


    );
}
