import React, { useState } from "react";
import "../../styles/auth.css";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { useDispatch, useSelector } from "react-redux";

const Signin = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //setup our states using hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnValue, setBtnValue] = useState("Log In");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    // check if all fields are filled
    if (!email || !password) {
      dispatch(createMessage({ notNull: "All fields are required" }));
    } else if (!emailRegex.test(email)) {
      dispatch(createMessage({ emailNotValid: "Email not Valid" }));
    } else {
      setError("");
      setBtnValue("Processing...");

      // prepare the data
      const user = {
        email,
        password,
      };
      dispatch(login(user));
      setBtnValue("Log In");
    }
  };
  const query = new URLSearchParams(props.location.search);
  const next = query.get("next");
  if (isAuthenticated)
    return <Redirect to={next === null ? "/users/dashboard" : `/${next}`} />;
  return (
    <div>
      <div className="container-fluid auth-banner">
        <div className="row pl-3">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className="card mt-5 pl-3" onSubmit={handleSubmit}>
              <h1 className="auth-heading">Login To Your Account</h1>
              <p className="auth-text">
                Securely login to your TransAll Account
              </p>
              <p className="text-danger error-note">{error}</p>
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
                    placeholder="Passowrd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="">
                    Sign Up
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

export default Signin;
