import React from "react";
import NavTabs from "../nav"

function Header(props) {
    return (

        <header className="header bg-info d-flex justify-content-between align-items-center">
            <a href="https://github.com/kent28808"> <h1 className="text-white">Ken T. </h1></a>
            <NavTabs/>
        </header>

    );
}

export default Header;