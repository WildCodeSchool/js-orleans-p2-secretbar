import React from 'react';
import './Navbar';
import './Navbar.css';
import logo from './image/logobar.png';
import logoCarte from './image/logoCarte.png'
import logoPhotos from './image/portefolio.png'
import logoHome from './image/acceuil.png'


class Navbar extends React.Component {
    render(){
        return (
            <nav className='Navbar'>
                <div className='contain'>
                <div className='enseigne'>
                    <img className='navbar--logo' src={logo} alt="logo" />
                </div>
                <div className='menu--logo'>
                    <img className= 'logoAcceuil' src={logoHome} alt="logo" />
                    <img className= 'logoCart' src={logoCarte} alt="logo" />
                    <img className= 'logoPhoto' src={logoPhotos} alt="logo" /> 
                </div>
                <ul className='Menu' id="menu">
                    
                    <a className='close' >X</a>
                    
                    <a className='' href="">
                        Acceuil
                    </a>
                    <a className='' href='' >
                        Menu de la carte
                    </a>
                    <a className='' href=''>
                        livre d'or
                    </a>
                </ul>
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