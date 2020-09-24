import { Link } from "@reach/router";
import React from "react";

export const Leaderboard = (props) => {
    const { participants } = props;
    return (
        <div className="center">
            <div className="title">
                <h2>Leaderboard</h2>
                <Link to="/main/addEntry">
                    <button>Add Entry</button>
                </Link>
            </div>
            <div className="card-item">
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map((item, i) => (
                            <tr key={i}>
                                <td>{item.fname}</td>
                                <td>{item.totalPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
