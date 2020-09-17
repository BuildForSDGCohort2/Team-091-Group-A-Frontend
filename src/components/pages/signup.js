import React from "react"
import "../../styles/auth.css"
import {Link} from "react-router-dom"

const Signup = () => {
    return (
        <div>
            <div className="container-fluid auth-banner">
                <div className="row pl-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form className="card mt-5 pl-3">
                            <h1 className="auth-heading">Create Your Account</h1>
                            <p className="auth-text">Welcome to a better way to travel and chop life</p>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" aria-label="firstname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Email Address</label>  
                                    <input type="email" className="form-control" placeholder="Email Address" aria-label="email" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Password</label>  
                                    <input type="password" className="form-control" placeholder="Password" aria-label="password" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Confirm Password</label>  
                                    <input type="password" className="form-control" placeholder="Confirm Password" aria-label="password" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 mb-3">
                                    <button type="button" className="form-control btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            <div className="row input-group pl-3 mb-3">
                                <p>Already have an account? <Link to="/sign-in" className="">Log In</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
