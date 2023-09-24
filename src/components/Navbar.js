import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/imgs/adam_signature.png';

function LogoImg(){
    const location = useLocation();
    if(location.pathname==="/"){
        return ;
    }
    else{
        return (
            <Link to="/" className='logoContainer'>
                <img className="logo" src={logo} alt="Adam Wajahat" width="300"></img>
            </Link>
        );
    }
}

function LinkTitles(){
    const location = useLocation();
    if(location.pathname==="/"){
        return (
            <div className="links">
                <Link to="/" className='activeTab'> Home </Link>
                <Link to="/work" className=''> Work </Link>
                <Link to="/about"className=''> About </Link>
            </div>
        );
    }
    else if(location.pathname.includes("/work")){
        return (
            <div className="links">
                <Link to="/" className=''> Home </Link>
                <Link to="/work" className='activeTab'> Work </Link>
                <Link to="/about" className=''> About </Link>
            </div>
            );
    }
    else if(location.pathname==="/about"){
        return (
            <div className="links">
                <Link to="/" className=''> Home </Link>
                <Link to="/work" className=''> Work </Link>
                <Link to="/about" className='activeTab'> About </Link>
            </div>
            );
        }
}

function Navbar() {
  return (
    <>
        <div className="navbar"> 
            <LogoImg />
            <LinkTitles></LinkTitles>
        </div>
        
    </>
  )
}



export default Navbar