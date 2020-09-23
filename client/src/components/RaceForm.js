import React from "react";

export const RaceForm = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <span className="disBlock">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" />
                    </span>
                    <span className="disBlock">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" name="startDate" id="startDate" />
                    </span>
                    <span className="disBlock">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" name="endDate" id="endDate" />
                    </span>
                    <span className="disBlock">
                        <h3>Participants</h3>
                        <label htmlFor="Tyler">Tyler:</label>
                        <input
                            type="checkbox"
                            name="participants"
                            id="participants"
                        />
                        <label htmlFor="Kendal">Kendal:</label>
                        <input
                            type="checkbox"
                            name="participants"
                            id="participants"
                        />
                    </span>
                </fieldset>
            </form>
        </div>
    );
};
