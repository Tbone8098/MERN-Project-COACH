import React from "react";

export const Leaderboard = () => {
    return (
        <div className="center">
            <div className="title">
                <button>Expand</button>
                <h2>Leaderboard</h2>
            </div>
            <div className="card-item">
                <table>
                    <thead>
                        <th>User</th>
                        <th>Points</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tyler</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>Kendal</td>
                            <td>20000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
