import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css"
import logo from '../assets/imgs/adam_signature.png'

function LogoImg(){
    const location = useLocation();
    if(location.pathname==="/"){
        return ;
    }
    else{
        return (
            <Link to="/">
                <img className="logo" src={logo} alt="Adam Wajahat" width="300"></img>
            </Link>
        );
    }
}

function Navbar() {
  return (
    <>
    <div className="navbar"> 
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/work"> Work </Link>
            <Link to="/about"> About </Link>
        </div>
    </div>
    <LogoImg />
    </>
  )
}



export default Navbar