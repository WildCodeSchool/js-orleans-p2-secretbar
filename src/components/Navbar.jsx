import React from 'react';
import './Navbar';
import './Navbar.css';








class Navbar extends React.Component{
    render(){
        return (

            <nav className='navbar'>
                <div className='contain'>
                <div className='tab'>
                    <img className='navbar--logo' src="https://zupimages.net/up/20/44/kzh0.png"  ></img>
                </div>
                <div className='menu--logo'>
                    <img className= 'logoHome' src='https://zupimages.net/up/20/44/ji9d.png' alt="logo" />
                    <img className= 'logoCart' src='https://zupimages.net/up/20/44/33qx.png' alt="logo" />
                    <img className= 'logoPicture' src='https://zupimages.net/up/20/44/xk4n.png' alt="logo" /> 
                </div>
                <ul className='menu' id="menu">
                    
                    <a className='close' href="#" >X</a>
                    
                    <a className='' href="">
                        Accueil
                    </a>
                    <a className='' href='' >
                        Carte
                    </a>
                    <a className='' href=''>
                        livre d'or
                    </a>
                    </ul>
                    
                
                <a href="#menu" className='burger'>
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