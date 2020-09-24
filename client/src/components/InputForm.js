import React from "react";

export const InputForm = (props) => {
    const { initExerciseVal, initFoodVal, initWaterVal, initSleepVal } = props;
    console.log(`exercise val: ${initExerciseVal}`);
    const onSubmit = (e) => {
        e.preventDefault();
        let returnObj = {
            exercise: e.target.exercise.value,
            food: e.target.food.value,
            water: e.target.water.value,
            sleep: e.target.sleep.value,
        };
        props.onReturn(returnObj);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <section className="card-item">
                    <h3>Exercise</h3>
                    <section className="radio-btns">
                        <span>
                            {initExerciseVal === "2" ? (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-good"
                                    value="2"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-good"
                                    value="2"
                                />
                            )}
                            <label htmlFor="exercise">Good</label>
                        </span>
                        <span>
                            {initExerciseVal === "1" ? (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-okay"
                                    value="1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-okay"
                                    value="1"
                                />
                            )}
                            <label htmlFor="exercise">Okay</label>
                        </span>
                        <span>
                            {initExerciseVal === "-1" ? (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-bad"
                                    value="-1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="exercise"
                                    id="exercise-bad"
                                    value="-1"
                                />
                            )}
                            <label htmlFor="exercise">Bad</label>
                        </span>
                    </section>
                </section>
                <section className="card-item">
                    <h3>Eating</h3>
                    <section className="radio-btns">
                        <span>
                            {initFoodVal === "2" ? (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-good"
                                    value="2"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-good"
                                    value="2"
                                />
                            )}

                            <label htmlFor="food">Good</label>
                        </span>
                        <span>
                            {initFoodVal === "1" ? (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-okay"
                                    value="1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-okay"
                                    value="1"
                                />
                            )}
                            <label htmlFor="food">Okay</label>
                        </span>
                        <span>
                            {initFoodVal === "-1" ? (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-bad"
                                    value="-1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="food"
                                    id="food-bad"
                                    value="-1"
                                />
                            )}
                            <label htmlFor="food">Bad</label>
                        </span>
                    </section>
                </section>
                <section className="card-item">
                    <h3>Drinking Water</h3>
                    <section className="radio-btns">
                        <span>
                            {initWaterVal === "2" ? (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-good"
                                    value="2"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-good"
                                    value="2"
                                />
                            )}

                            <label htmlFor="water">Good</label>
                        </span>
                        <span>
                            {initWaterVal === "1" ? (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-okay"
                                    value="1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-okay"
                                    value="1"
                                />
                            )}
                            <label htmlFor="water">Okay</label>
                        </span>
                        <span>
                            {initWaterVal === "-1" ? (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-bade"
                                    value="-1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="water"
                                    id="water-bade"
                                    value="-1"
                                />
                            )}
                            <label htmlFor="water">Bad</label>
                        </span>
                    </section>
                </section>
                <section className="card-item">
                    <h3>Sleep</h3>
                    <section className="radio-btns">
                        <span>
                            {initSleepVal === "2" ? (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-good"
                                    value="2"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-good"
                                    value="2"
                                />
                            )}

                            <label htmlFor="sleep">Good</label>
                        </span>
                        <span>
                            {initSleepVal === "1" ? (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-okay"
                                    value="1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-okay"
                                    value="1"
                                />
                            )}
                            <label htmlFor="sleep">Okay</label>
                        </span>
                        <span>
                            {initSleepVal === "-1" ? (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-bad"
                                    value="-1"
                                    defaultChecked
                                />
                            ) : (
                                <input
                                    type="radio"
                                    name="sleep"
                                    id="sleep-bad"
                                    value="-1"
                                />
                            )}
                            <label htmlFor="sleep">Bad</label>
                        </span>
                    </section>
                </section>
                <button>Submit</button>
            </form>
        </div>
    );
};
