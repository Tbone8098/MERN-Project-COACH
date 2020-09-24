import { Link } from "@reach/router";
import React from "react";

export const History = (props) => {
    const { userHistory } = props;

    return (
        <div>
            <h2>History</h2>
            <section className="mr-s">
                <span className="card-item pd-s">2 = Good</span>
                <span className="card-item pd-s">1 = Okay</span>
                <span className="card-item pd-s">-1 = Bad</span>
            </section>
            {/* {userHistory.map((entry, i) => (
                <div className="card-item entry" key={i}>
                    <section>
                        <p>exercise: {entry.exercise}</p>
                        <p>food: {entry.food}</p>
                    </section>
                    <section>
                        <p>water: {entry.water}</p>
                        <p>sleep: {entry.sleep}</p>
                    </section>
                    <Link to={"/main/editEntry/" + entry._id}>
                        <button>Edit</button>
                    </Link>
                </div>
            ))} */}
        </div>
    );
};
