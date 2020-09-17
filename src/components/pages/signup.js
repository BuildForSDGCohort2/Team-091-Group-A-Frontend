import React, {useState} from "react"
import "../../styles/auth.css"
import {Link} from "react-router-dom"
import axios from 'axios'

const Signup = () => {
    //setup our states using hooks
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [btnValue, setBtnValue] = useState("Sign Up")
    const [error, setError] = useState("")

    //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({firstname,lastname,email,password,confirmPassword})
        // check if all fields are filled
        if (!firstname || !lastname || !email || !password || !confirmPassword){
            setError("*All fields are required")
            return false;
        }
        // check if the email is valid
        if (/\S+@\S+\.\S+/.test(email) === false) {
            setError("*Enter a valid email address")
            return false;
        }
        // if all data is provided
        if ((firstname && lastname && email && password && confirmPassword) && password === confirmPassword){
            console.log(true)
        }else{
            setError("*Password does not match")
        }

    }
    return (
        <div>
            <div className="container-fluid auth-banner">
                <div className="row pl-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form className="card mt-5 pl-3">
                            <h1 className="auth-heading">Create Your Account</h1>
                            <p className="auth-text">Welcome to a better way to travel and chop life</p>
                            <p className="text-danger">{error}</p>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} aria-label="firstname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} aria-label="lastname" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Email Address</label>  
                                    <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} aria-label="email" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Password</label>  
                                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} aria-label="password" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Confirm Password</label>  
                                    <input type="password" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} aria-label="password" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 mb-3">
                                    <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>{btnValue}</button>
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
