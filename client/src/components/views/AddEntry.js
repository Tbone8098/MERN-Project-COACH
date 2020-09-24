import { navigate } from "@reach/router";
import Axios from "axios";
import React from "react";
import { InputForm } from "../InputForm";

export const AddEntry = () => {
    const onsubmit = (returnObj) => {
        console.log(returnObj);
        Axios.patch(
            "http://localhost:8000/user/addEntry/" +
                localStorage.getItem("activeUserId"),
            {
                exercise: returnObj.exercise,
                food: returnObj.food,
                sleep: returnObj.sleep,
                water: returnObj.water,
            },
            { withCredentials: true }
        )
            .then((resp) => {
                // console.log(resp);
                navigate("/main/dashboard");
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="card">
            <h2>Add Entry</h2>
            <InputForm
                onReturn={onsubmit}
                initExerciseVal=""
                initFoodVal=""
                initWaterVal=""
                initSleepVal=""
            />
        </div>
    );
};
