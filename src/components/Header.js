import React from "react"
import {Link} from "react-router-dom"


function Header() {
    return (

        <header>
            <button className="nav__toggle" area-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/profile" title="Go to profile Page">Profile</Link>
        </header>
    )
}

export default Header
