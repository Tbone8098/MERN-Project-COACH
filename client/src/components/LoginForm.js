import React from "react";

export const LoginForm = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const submitObj = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        props.onSubmit(submitObj);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </p>
                <button>Login</button>
            </form>
        </div>
    );
};
