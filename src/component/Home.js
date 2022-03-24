import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";


function Home() {
    return (
        <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
            <h1>Login Successfully</h1>
                <br/>
            <div className="Home">
                <div className="auth-option text-center pt-2">Back to loginpage? <Link className="text-link" to="/Login" >Sign in</Link></div>
            </div>
            </form>
        </>
    );
}

export default Home;
