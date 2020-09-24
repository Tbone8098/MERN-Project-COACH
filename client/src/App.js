import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Landingpage } from "./components/views/Landingpage";
import { Register } from "./components/views/Register";
import { Dashboard } from "./components/views/Dashboard";
import { Wrapper } from "./components/views/Wrapper";

function App() {
    return (
        <div className="App">
            <Router>
                <Landingpage path="/" />
                <Register path="/register" />

                <Wrapper path="/main">
                    <Dashboard path="/dashboard" />
                </Wrapper>
            </Router>
        </div>
    );
}

export default App;
