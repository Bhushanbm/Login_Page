import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Login Successfully</h1>
            <div>
                <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
            </div>
        </>
    );
}

export default Home;
