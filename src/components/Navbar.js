import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import logo from '../images/NavLogo.jpg'

// <img src={logo} width={60}/>


const Navbar = () =>{
  return (
    <nav className="ui secondary menu">
      <img src="/images/NavLogo.jpg" width={60}/>
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/dish">Articles</Link>
      <Link className="item" to="/feedback">Feedback</Link>
    </nav>
  )
}


export default Navbar;
