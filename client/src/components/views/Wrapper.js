import React, { useState } from "react";
import { Router } from "@reach/router";
import { Dashboard } from "./Dashboard";
import { InputDay } from "./InputDay";
import { NewRace } from "./NewRace";
import { JoinRace } from "./JoinRace";
import { Settings } from "./Settings";
import { AddEntry } from "./AddEntry";
import { Navbar } from "../Navbar";
import { EditEntry } from "./EditEntry";

export const Wrapper = () => {
    const [user, setUser] = useState("");

    const onLoad = async (e) => {
        console.log(e);
        await setUser(e);
    };

    return (
        <div className="Wrapper">
            <Navbar />
            <Router>
                <Dashboard path="/dashboard" onReturn={onLoad} />
                <InputDay path="/inputDay" />
                <NewRace path="/newRace" />
                <JoinRace path="/joinRace" />
                <Settings path="/settings" />
                <AddEntry path="/addEntry" />
                <EditEntry path="/editEntry/:id" entries={user.entry} />
            </Router>
        </div>
    );
};
