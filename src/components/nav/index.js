import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
    return (
        <div className="container-nav w-30">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/about"
                        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                        About
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/portfolio"
                        className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
        </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs;