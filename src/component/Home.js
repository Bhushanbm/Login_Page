import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            
            <h1>Login Successfully</h1>
            <div>
                <div className="auth-option text-center pt-2">Back to loginpage? <Link className="text-link" to="/login" >Sign in</Link></div>
            </div>
            
        </>
    );
}

export default Home;
