import React, { useState } from 'react';
import './header.css';

const Header = () => {
    // ============Toggle Menu=================
    const [Toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Alfred</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-home"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-info-alt"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
