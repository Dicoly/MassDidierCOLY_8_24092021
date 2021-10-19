import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/" className="kasaLogo">
                    <img src={logo} alt="Kasa" />
                </Link>
                <nav>
                    <Link to="/" className="navLink">
                        Accueil
                    </Link>
                    <Link to="/about" className="navLink">
                        A Propos
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;

