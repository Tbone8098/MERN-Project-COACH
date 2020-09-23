import React, { useState, useEffect } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import { Landingpage } from "./components/views/Landingpage";
import { Register } from "./components/views/Register";
import { Dashboard } from "./components/views/Dashboard";
import { getCookie } from "./helpers/cookies";
import { Navbar } from "./components/Navbar";
import { InputDay } from "./components/views/InputDay";
import { NewRace } from "./components/views/NewRace";
import { Settings } from "./components/views/Settings";

function App() {
    const [activeUser, setActiveUser] = useState("");

    useEffect(() => {
        console.log(getCookie("accessToken"));
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Router>
                <Landingpage path="/" />
                <Register path="/register" />
                <Dashboard path="/dashboard" activeUser={activeUser} />
                <InputDay path="/inputDay" />
                <NewRace path="/newRace" />
                <Settings path="/settings" />
            </Router>
        </div>
    );
}

export default App;
