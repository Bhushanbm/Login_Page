import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Form from './Form'

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [validate, setValidate] = useState({});

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            name: {
                value: name,
                isRequired: true,
            },
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }



    function handleFormSubmit(e) {
        e.preventDefault();
        const validate = validateRegister();

        if (validate) {
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
                                className={`form-control ${validate.validate && validate.validate.name ? 'is-invalid ' : ''}`}
                                placeholder="Enter your name"
                                name="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.name) ? 'd-block' : 'd-none'}`} >
                                {(validate.validate && validate.validate.name) ? validate.validate.name[0] : ''}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                            </div>
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
                                className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                placeholder="Enter password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                            </div>
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

export default Register;
