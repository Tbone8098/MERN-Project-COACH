import React from "react";
import { UserForm } from "../UserForm";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import { LoginForm } from "../LoginForm";
import { setCookie } from "../../helpers/cookies";

export const Landingpage = (props) => {
    const onReturn = (e) => {
        console.log(e.email);
        console.log(e.password);
        axios
            .post("http://localhost:8000/user/login", {
                email: e.email,
                password: e.password,
            })
            .then((resp) => {
                if (resp.data.msg === "Success") {
                    setCookie("accessToken", resp.data.accessToken);
                    // props.loggedIn(resp.data.id);
                    navigate("/dashboard");
                }
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <h1>Landing page</h1>
            <LoginForm onSubmit={onReturn} />
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
};
