import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import Axios from "axios";

export const JoinRace = (props) => {
    const [raceVal, setRaceVal] = useState("");
    const joinRace = (e) => {
        e.preventDefault();
        let JoinRaceCode = e.target.joinRace.value;

        // Check Race code against all race actual codes
        Axios.get("http://localhost:8000/race/", { withCredentials: true })
            .then((resp) => {
                // console.log(resp.data[0]);
                for (let i = 0; i < resp.data.length; i++) {
                    // fetch raceCode actual and compare to raceCode given
                    // console.log(resp.data[i].raceJoinCode);
                    if (JoinRaceCode === resp.data[i].raceJoinCode) {
                        console.log("Match");
                        let raceId = resp.data[i]._id;
                        // if match add race code to users document
                        Axios.patch(
                            "http://localhost:8000/user/update/" +
                                localStorage.getItem("activeUserId"),
                            {
                                raceId: resp.data[i],
                            },
                            { withCredentials: true }
                        )
                            .then(() => {
                                // add user id to race Document
                                Axios.patch(
                                    "http://localhost:8000/race/update/participants/" +
                                        raceId,
                                    {
                                        participants: localStorage.getItem(
                                            "activeUserId"
                                        ),
                                    },
                                    { withCredentials: true }
                                );
                            })
                            .then(() => {
                                navigate("/dashboard");
                            })
                            .catch();
                    } else {
                        // else return error "race does not exist"
                        console.log("Race doesn't exsist");
                        setRaceVal("Race doesn't exsist");
                    }
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="card">
            <form onSubmit={joinRace}>
                <fieldset className="card-item">
                    <label htmlFor="joinRace">Join Race</label>
                    <input type="text" name="joinRace" id="joinRace" />
                    <button>Join</button>
                </fieldset>
                {raceVal ? <p>{raceVal}</p> : ""}
            </form>
            <Link to="/dashboard">
                <button>Go Back</button>
            </Link>
        </div>
    );
};
