import React from "react";
import { Link } from "@reach/router";

export const LandingNavBar = () => {
    return (
        <nav className="navbar">
            <h1>
                <Link className="link colorApr" to="/dashboard">
                    COACH
                </Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="/register">
                        <button>Register</button>
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/">
                        <button>Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
