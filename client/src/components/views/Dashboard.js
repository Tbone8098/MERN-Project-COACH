import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import { Leaderboard } from "../Leaderboard";
import { Store } from "../Store";
import { Backpack } from "../Backpack";
import { History } from "./History";

export const Dashboard = (props) => {
    const [user, setUser] = useState("");
    const [raceParticipants, setRaceParticipants] = useState("");

    // Get active user information
    useEffect(() => {
        axios
            .get(
                "http://localhost:8000/user/" +
                    localStorage.getItem("activeUserId"),
                { withCredentials: true }
            )
            .then((resp) => {
                setUser(resp.data._doc);
                props.onReturn(resp.data._doc);
            })
            .catch((err) => {
                console.log(err);
                navigate("/");
            });
    }, []);

    // Get all users in current race for Leaderboard
    useEffect(() => {
        if (user) {
            axios
                .get("http://localhost:8000/race/" + user.raceId, {
                    withCredentials: true,
                })
                .then((resp) => {
                    setRaceParticipants(resp.data.participants);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user]);

    return (
        <div>
            <div className="center-content">
                <h1>{user.fname}'s Dashboard</h1>
                {raceParticipants ? (
                    <div>
                        <div className="card">
                            <Leaderboard participants={raceParticipants} />
                        </div>
                        <div className="card">
                            <History userHistory={user.entry} />
                        </div>
                        <div className="card">
                            <Store />
                        </div>
                        <div className="card">
                            <Backpack />
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link to="/main/joinRace">
                            <button>Join a Race</button>
                        </Link>
                        <button>Start a Race</button>
                    </div>
                )}
            </div>
        </div>
    );
};
