import React from 'react';
import './Navbar';
import './Navbar.css';
import logo from './image/logobar.png';
import logoCarte from './image/logoCarte.png'
import logoPhotos from './image/portefolio.png'
import logoHome from './image/accueil.png'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
/*import * from './components/*';
import * from './components/*';
import * from './components/*';*/



class Navbar extends React.Component {

    render(){

        return (
            <nav className='Navbar'>
                <div className='contain'>
                <div className='enseigne'>
                    <img className='navbar--logo' src={logo} alt="logo" />
                </div>
                <div className='menu--logo'>
                    <img className= 'logoAccueil' src={logoHome} alt="logo" />
                    <img className= 'logoCart' src={logoCarte} alt="logo" />
                    <img className= 'logoPhoto' src={logoPhotos} alt="logo" /> 
                </div>
                <div className='Menu' id="menu">
                    
                    <a className='close' >X</a>
                    <div className='Onglets'>
                    <Link to="/"> Accueil </Link>
                    <Link to="/" > Carte </Link>
                    <Link to="/">Livre d'or</Link>
                    </div>
                    <div>
                    <Switch>
                    <Route exact path="/" component={}/>
                    <Route path="/" component={}/>
                    <Route path="/" component={}/>
                    <Route path="/" component={}/>
                    </Switch>
                    </div>
                    </div>
                
                <a href="#menu"className='burger'>
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
                </div>
            </nav>
            );
    }
    
}

export default Navbar;