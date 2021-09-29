import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

class Error extends React.Component {
    render() {
        return (
            <div className="error">
                <p className="errorType">404</p>
                <p className="errorMessage">Oups ! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="backHome">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        );
    }
}

export default Error;