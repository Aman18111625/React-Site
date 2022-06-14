import React from "react";
import ReactLogo from '../../Images/react-logo.png';

function Header() {

   
    return (
        <header>
            <nav className='nav'>
                <img src={ReactLogo}  className='nav-img' alt="react-logo" />
                <h3>React Facts</h3>
                <h4>Basic Project</h4>
            </nav>
        </header>
    )
  }

  export default Header;