import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './views/about/About';
import Error from './views/error/Error';
import Accueil from './views/accueil/Accueil';
import Logement from './views/logement/Logement';


class Router extends React.Component {
    render() {
        const routes = [
            {
                path: '/',
                component: Accueil,
                exact: true
            },
            {
                path: '/logement/:id',
                component: Logement,
                exact: true
            },
            {
                path: '/about',
                component: About,
                exact : true
            },
            {
                path: '*',
                component: Error
            }
        ];
        return (
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        );
    }
}

export default Router;