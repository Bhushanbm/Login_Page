import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone ) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem(
                "sanskarPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");

            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }




    return (
        <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <div className="background">
                {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone No.</label>
                            <input
                                type="Phone"
                                className="form-control"
                                placeholder="Enter contact no"
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        

                        <button type="submit" className="btn">
                            Register
                        </button>
                        <br />
                        <br/>
                        <p onClick={handleClick} className="forgot-password text-right">
                            Already registered{" "}log in?

                        </p>

                        <div className="auth-option text-center pt-2">Have an account? <Link className="text-link" to="/login" >Sign in</Link></div>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                I got it you are in hurry! But every Field is important!
                            </Alert>
                        )}
                    </form>
                ) : (
                    <Login />
                )}
            </div>

        </>
    );
}

export default Registration;
