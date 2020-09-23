import React from "react";
import { UserForm } from "../UserForm";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import { LoginForm } from "../LoginForm";
import HelperLogin from "../helper/HelperLogin";

export const Landingpage = (props) => {
    const onReturn = (e) => {
        HelperLogin(e)
    };
    return (
        <div>
            <h1>Landing page</h1>
            <LoginForm onSubmit={onReturn} />
        </div>
    );
};
