import React from "react"
import {NavLink} from "react-router-dom"
import "../../styles/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { logout } from './../../actions/auth';
const getInitial = (user) => {
    if(user) {
        let {firstname, lastname} = user;
        return `${firstname.slice(0, 1)}${lastname.slice(0, 1)}`
    }
    return "OJ" 
}
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const logoutUser = () => {
        dispatch(logout())
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <NavLink className="navbar-brand logo-container" to="/">
                <img src="https://res.cloudinary.com/kayode/image/upload/v1601716486/TransAll/tlogo_rmuzjy.png" alt="Logo" className="logo-main" />
            </NavLink>
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
                { isAuthenticated ?
                    <>
                    <li className="nav-item">
                        <NavLink to="/users/dashboard" className="nav-link initials">{getInitial(user)}</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#" onClick={logoutUser}>Log Out</NavLink>
                    </li>
                    </>
                    :
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/sign-up">Sign Up</NavLink>
                            <NavLink className="dropdown-item" to="/sign-in">Sign In</NavLink>
                        </div>
                    </li>
                 }
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
