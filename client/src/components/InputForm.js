import React from "react";

export const InputForm = () => {
    return (
        <div>
            <form className="inputForm">
                <fieldset className="card-item">
                    <h3>Exercise</h3>
                    <span>
                        <input
                            type="radio"
                            name="exercise"
                            id="exercise"
                            value="good"
                        />
                        <label htmlFor="exercise">Good</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="exercise"
                            id="exercise"
                            value="okay"
                        />
                        <label htmlFor="exercise">Okay</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="exercise"
                            id="exercise"
                            value="bad"
                        />
                        <label htmlFor="exercise">Bad</label>
                    </span>
                </fieldset>
                <fieldset className="card-item">
                    <h3>Eating</h3>
                    <span>
                        <input
                            type="radio"
                            name="eating"
                            id="eating"
                            value="good"
                        />
                        <label htmlFor="eating">Good:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="eating"
                            id="eating"
                            value="okay"
                        />
                        <label htmlFor="eating">Okay:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="eating"
                            id="eating"
                            value="bad"
                        />
                        <label htmlFor="eating">Bad:</label>
                    </span>
                </fieldset>
                <fieldset className="card-item">
                    <h3>Drinking Water</h3>
                    <span>
                        <input
                            type="radio"
                            name="drinking"
                            id="drinking"
                            value="good"
                        />
                        <label htmlFor="drinking">Good:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="drinking"
                            id="drinking"
                            value="okay"
                        />
                        <label htmlFor="drinking">Okay:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="drinking"
                            id="drinking"
                            value="bad"
                        />
                        <label htmlFor="drinking">Bad:</label>
                    </span>
                </fieldset>
                <fieldset className="card-item">
                    <h3>Sleep</h3>
                    <span>
                        <input
                            type="radio"
                            name="sleep"
                            id="sleep"
                            value="good"
                        />
                        <label htmlFor="sleep">Good:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="sleep"
                            id="sleep"
                            value="okay"
                        />
                        <label htmlFor="sleep">Okay:</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            name="sleep"
                            id="sleep"
                            value="bad"
                        />
                        <label htmlFor="sleep">Bad:</label>
                    </span>
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    );
};
