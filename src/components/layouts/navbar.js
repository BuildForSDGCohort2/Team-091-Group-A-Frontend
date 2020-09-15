import React from "react"
import {NavLink} from "react-router-dom"
import "../../styles/navbar.css"

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <NavLink className="navbar-brand" to="/">Trans All</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-stuff" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Hotels</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Flight</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Trains</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Cars</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Tours</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Attractions</NavLink>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
