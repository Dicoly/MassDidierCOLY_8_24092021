import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Router from './Router';


class App extends React.Component {

    render (){
      return (
        
        <BrowserRouter>
            <div className="layout">
                <Header/>
                <Router/>
            </div>
            <Footer/>
        </BrowserRouter>
       
      )
    } 
  }

export default App;
