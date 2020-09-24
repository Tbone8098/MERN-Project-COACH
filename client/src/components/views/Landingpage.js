import React from "react";
import { LoginForm } from "../LoginForm";
import HelperLogin from "../helper/HelperLogin";
import { LandingNavBar } from "../LandingNavBar";

export const Landingpage = (props) => {
    const onReturn = (e) => {
        HelperLogin(e);
    };
    return (
        <div>
            <LandingNavBar />
            <h1>Landing page</h1>
            <LoginForm onSubmit={onReturn} />
        </div>
    );
};
