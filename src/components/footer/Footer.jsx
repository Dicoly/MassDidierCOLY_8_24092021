import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logoWhite.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="myFooter">
                <Link to="/">
                    <img className="logoFooter" src={logoWhite} alt="Kasa" />
                </Link>
                <p className="textFooter">© 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;