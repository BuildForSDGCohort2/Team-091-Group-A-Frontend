import React from "react"
import {NavLink, Link} from "react-router-dom"
import "../../styles/navbar.css"

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <NavLink className="navbar-brand" to="/">Trans All</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-stuff" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/hotels">Hotels</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/flights">Flights</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/trains">Trains</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/cars">Cars</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/tours">Tours</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="selected" to="/attractions">Attractions</NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-outline-success" to="/sign-up">Create Account</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
