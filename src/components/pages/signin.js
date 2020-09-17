import React, {useState} from "react"
import "../../styles/auth.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    //setup our states using hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btnValue, setBtnValue] = useState("Log In")
    const [error, setError] = useState("")

    // success and error message
    const successMsg = () => toast.success("Login was successfully!");
    const errorMsg = () => toast.error("An error occurred!");

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if all fields are filled
        if ( !email || !password){
            setError("*All fields are required")
            return false;
        }
        // check if the email is valid
        if (/\S+@\S+\.\S+/.test(email) === false) {
            setError("*Enter a valid email address")
            return false;
        }

        // if all data is provided
        if (email && password){
            setError("")
            setBtnValue("Processing...")

            // prepare the data
            const user = {
                email,
                password
            }

            axios({
                method: "POST",
                url: "https://backend-91.herokuapp.com/api/v1/auth/login",
                headers: {
                    "Content-Type": "application/json",
                },
                data: user
            }).then((response) => {
                successMsg()
                console.log(response)
            }).catch((error) => {
                console.log(error);
                setBtnValue("Log In")
                errorMsg()
            })
        }
    }

    return (
        <div>
        <div className="container-fluid auth-banner">
                <div className="row pl-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <ToastContainer />
                        <form className="card mt-5 pl-3" onSubmit={handleSubmit}>
                            <h1 className="auth-heading">Login To Your Account</h1>
                            <p className="auth-text">Securely login to your TransAll Account</p>
                            <p className="text-danger error-note">{error}</p>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Email Address</label>  
                                    <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} aria-label="email" />
                                </div>
                            </div>
                            <div className="row input-group">
                                <div className="col-12 mb-3">
                                    <label>Password</label>  
                                    <input type="password" className="form-control" placeholder="Passowrd" value={password} onChange={e => setPassword(e.target.value)} aria-label="password" />
                                </div>
                            </div>
                            <div className="row btn-group pr-4">
                                <div className="col-12 mb-3">
                                    <button type="button" className="form-control btn btn-primary" onClick={handleSubmit}>{btnValue}</button>
                                </div>
                            </div>
                            <div className="row input-group pl-3 mb-3">
                                <p>Don't have an account? <Link to="/sign-up" className="">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Signin
