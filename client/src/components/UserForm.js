import React from "react";

export const UserForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(e.target);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="fName">First Name:</label>
                    <input type="text" name="fName" id="fName" />
                </p>
                <p>
                    <label htmlFor="lName">Last Name:</label>
                    <input type="text" name="lName" id="lName" />
                </p>
                <p>
                    <label htmlFor="displayName">Display Name:</label>
                    <input type="text" name="displayName" id="displayName" />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </p>
                <p>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                </p>
                <button>Submit</button>
            </form>
        </div>
    );
};
