import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Home from "./component/Home";
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/Home' component={Home} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>

    );
}

export default App;