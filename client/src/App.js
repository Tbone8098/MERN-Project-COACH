import React, { useState, useEffect } from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import { Landingpage } from "./components/views/Landingpage";
import { Register } from "./components/views/Register";
import { Dashboard } from "./components/views/Dashboard";
import { Navbar } from "./components/Navbar";
import { InputDay } from "./components/views/InputDay";
import { NewRace } from "./components/views/NewRace";
import { Settings } from "./components/views/Settings";
import axios from "axios";
import { LandingNavBar } from "./components/LandingNavBar";
import { JoinRace } from "./components/views/JoinRace";
import { AddEntry } from "./components/views/AddEntry";

function App() {
    return (
        <div className="App">
            {localStorage.getItem("activeUserId") ? (
                <Navbar />
            ) : (
                <LandingNavBar />
            )}
            <Router>
                <Landingpage path="/" />
                <Register path="/register" />
                <Dashboard path="/dashboard" />
                <InputDay path="/inputDay" />
                <NewRace path="/newRace" />
                <JoinRace path="/joinRace" />
                <Settings path="/settings" />
                <AddEntry path="/addEntry" />
            </Router>
        </div>
    );
}

export default App;
