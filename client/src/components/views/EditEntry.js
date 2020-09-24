import Axios from "axios";
import React, { useState, useEffect } from "react";
import { InputForm } from "../InputForm";

export const EditEntry = (props) => {
    const [entry, setEntry] = useState("");
    // const { entries } = props;

    // UseEffect to find props.entries that match props.id
    useEffect(() => {
        // let storedId = JSON.parse(localStorage.getItem("currentEntry"))[0].id;
        if (
            JSON.parse(localStorage.getItem("currentEntry")) === null ||
            JSON.parse(localStorage.getItem("currentEntry"))[0].id !== props.id
        ) {
            let currentEntry = [];
            for (let i = 0; i < props.entries.length; i++) {
                if (props.entries[i]._id === props.id) {
                    console.log("found it");
                    let Entry = props.entries[i];

                    currentEntry.push({
                        id: Entry._id,
                        exercise: Entry.exercise,
                        food: Entry.food,
                        water: Entry.water,
                        sleep: Entry.sleep,
                    });
                    localStorage.setItem(
                        "currentEntry",
                        JSON.stringify(currentEntry)
                    );
                    break;
                }
            }
        }
        setEntry(JSON.parse(localStorage.getItem("currentEntry")));
    }, []);

    const onEdit = (returnObj, id) => {
        console.log(returnObj);
        console.log(id);
        let url = `http://localhost:8000/user/update/${localStorage.getItem(
            "activeUserId"
        )}/entry/${id}`;
        Axios.patch(
            url,
            {
                exercise: returnObj.exercise,
                food: returnObj.food,
                sleep: returnObj.sleep,
                water: returnObj.water,
            },
            { withCredentials: true }
        );
    };

    return (
        <div>
            {entry ? (
                <div>
                    <h1>Edit Entry</h1>
                    <div className="card">
                        <InputForm
                            onReturn={(e) => onEdit(e, entry[0].id)}
                            initExerciseVal={entry[0].exercise}
                            initFoodVal={entry[0].food}
                            initWaterVal={entry[0].water}
                            initSleepVal={entry[0].sleep}
                        />
                    </div>
                    <button>Delete</button>
                    <button>Go Back</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
