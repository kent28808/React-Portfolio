import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">Navbar</Link>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link"to="/about">About</Link>
        </li>
        </ul>
    </nav>
    )
}

export default Header;