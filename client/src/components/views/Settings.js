import React, { useState } from "react";
import { UserForm } from "../UserForm";
import { RaceForm } from "../RaceForm";
import Axios from "axios";
import { navigate } from "@reach/router";
import HelperDelete from "../helper/HelperDelete";

export const Settings = (props) => {
    const clickHandler = (e) => {
        e.preventDefault();
        // if (e === "account") {
        // }
    };

    const deleteAccountHandler = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this user")) {
            HelperDelete("account");
        }
    };

    return (
        <div className="card wth center">
            <h2>Settings</h2>
            <ul>
                <li>
                    <button onClick={() => clickHandler("account")}>
                        Account
                    </button>
                </li>
                <li>
                    <button onClick={() => clickHandler("raceSettings")}>
                        Race Settings
                    </button>
                </li>
            </ul>
            <div className="card-item">
                <h2>Account Settings</h2>
                <UserForm />
                <button className="warning" onClick={deleteAccountHandler}>
                    Delete Account
                </button>
            </div>
            <div className="card-item">
                <h2>Race Settings</h2>
                <RaceForm />
            </div>
        </div>
    );
};
