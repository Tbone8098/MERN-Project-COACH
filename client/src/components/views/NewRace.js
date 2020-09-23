import React from "react";
import { RaceForm } from "../RaceForm";

export const NewRace = () => {
    return (
        <div className="card">
            <h1>New Race</h1>
            <div className="card-item">
                <RaceForm />
            </div>
        </div>
    );
};
