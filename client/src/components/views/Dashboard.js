import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import { getCookie } from "../../helpers/cookies";
import { Navbar } from "../Navbar";
import { Leaderboard } from "../Leaderboard";
import { Store } from "../Store";
import { Backpack } from "../Backpack";

export const Dashboard = (props) => {
    return (
        <div>
            <div className="center-content">
                <h1>Your Dashboard</h1>
                <Link to="/newRace">
                    <button>New Race</button>
                </Link>

                <div className="card">
                    <Leaderboard />
                </div>
                <div className="card">
                    <Store />
                </div>
                <div className="card">
                    <Backpack />
                </div>
            </div>
        </div>
    );
};
