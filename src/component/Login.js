import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage
            .getItem("Password")
            .replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <h3>LogIn</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(event) => setEmaillog(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(event) => setPasswordlog(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">
                        Login
                    </button>
                    <br />
                    <br/>
                    <div className="forgot-password text-end">
                        <Link to="/Forgot">Forgot password?</Link>
                    </div>
                    <br/>

                    <div className="auth-option text-center pt-2">If you have No Account! <Link className="text-link" to="/register" >Sign up </Link></div>

                    {flag && (
                        <Alert color="primary" variant="warning">
                            Fill correct Info else keep trying.
                        </Alert>
                    )}
                </form>
            ) : (
                <Home />
            )}
        </div>
    );
}

export default Login;
