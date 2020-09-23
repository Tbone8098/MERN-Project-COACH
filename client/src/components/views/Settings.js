import React, { useState } from "react";
import { UserForm } from "../UserForm";
import { RaceForm } from "../RaceForm";

export const Settings = () => {
    // const []
    const clickHandler = (e) => {
        e.preventDefault();
        if (e === "account") {
        }
    };

    return (
        <div className="card wth center">
            <h2>Settings</h2>
            <ul>
                <li>
                    <button onclick={() => clickHandler("account")}>
                        Account
                    </button>
                </li>
                <li>
                    <button onclick={() => clickHandler("raceSettings")}>
                        Race Settings
                    </button>
                </li>
            </ul>
            <div className="card-item">
                <h2>Account Settings</h2>
                <UserForm />
            </div>
            <div className="card-item">
                <h2>Race Settings</h2>
                <RaceForm />
            </div>
        </div>
    );
};
