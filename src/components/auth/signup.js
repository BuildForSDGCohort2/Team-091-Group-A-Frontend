import React, { useState } from "react";
import "../../styles/auth.css";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { registerUser } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //setup our states using hooks
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnValue, setBtnValue] = useState("Sign Up");

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      dispatch(createMessage({ notNull: "All fields are required" }));
    } else if (!emailRegex.test(email)) {
      dispatch(createMessage({ emailNotValid: "Email not Valid" }));
    } else if (password !== confirmPassword) {
      dispatch(createMessage({ passwordNotMatch: "Passwords do not match" }));
    } else {
      // prepare the data
      const user = {
        firstname,
        lastname,
        email,
        password,
      };

      dispatch(registerUser(user));
      setBtnValue("Sign Up");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/users/dashboard" />;
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
              <p className="auth-text">
                Welcome to a better way to travel and chop life
              </p>
              <div className="row input-group">
                <div className="col-12 mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    aria-label="firstname"
                  />
                </div>
              </div>
              <div className="row input-group">
                <div className="col-12 mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    aria-label="lastname"
                  />
                </div>
              </div>
              <div className="row input-group">
                <div className="col-12 mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="email"
                  />
                </div>
              </div>
              <div className="row input-group">
                <div className="col-12 mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="password"
                  />
                </div>
              </div>
              <div className="row input-group">
                <div className="col-12 mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    aria-label="password"
                  />
                </div>
              </div>
              <div className="row btn-group pr-4">
                <div className="col-12 mb-3">
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                    onClick={handleSubmit}
                  >
                    {btnValue}
                  </button>
                </div>
              </div>
              <div className="row input-group pl-3 mb-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/sign-in" className="">
                    Log In
                  </Link>{" "}
                  or{" "}
                  <Link to="/" className="">
                    Go Back
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
