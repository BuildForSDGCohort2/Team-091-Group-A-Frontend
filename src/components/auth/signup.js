import React, {useState} from "react"
import "../../styles/auth.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    //setup our states using hooks
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [btnValue, setBtnValue] = useState("Sign Up")
    const [error, setError] = useState("")

    // success and error message
    const successMsg = () => toast.success("Account created successfully!");
    const warningMsg = () => toast.warning("User already exist!");

    //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();

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

        // check password length
        if (password.length < 5 || confirmPassword.length < 5){
            setError("*Password must be 5 characters or more")
            return false;
        }

        // if all data is provided
        if ((firstname && lastname && email && password && confirmPassword) && password === confirmPassword){
            setError("")
            setBtnValue("Processing...")

            // prepare the data
            const user = {
                firstname,
                lastname,
                email,
                password
            }

            axios({
                method: "POST",
                url: "https://backend-91.herokuapp.com/api/v1/auth/register",
                headers: {
                    "Content-Type": "application/json",
                },
                data: user
            }).then((response) => {
                // display success alert
                successMsg()

                // clear input fields
                setFirstname("")
                setLastname("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                setBtnValue("Sign Up")

                // wait for 2seconds then redirect to sign in page
                setTimeout(() => {
                    props.history.push("/sign-in")
                }, 2000)
                
            }).catch((error) => {
                // console.log(error);
                setBtnValue("Sign Up")
                warningMsg()
            })

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
                    <ToastContainer />
                        <form className="card mt-5 pl-3" onSubmit={handleSubmit}>
                            <h1 className="auth-heading">Create Your Account</h1>
                            <p className="auth-text">Welcome to a better way to travel and chop life</p>
                            <p className="text-danger error-note">{error}</p>
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
                                <p>Already have an account? <Link to="/sign-in" className="">Log In</Link> or <Link to="/" className="">Go Back</Link></p>
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
