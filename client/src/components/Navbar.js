import React from "react";
import { Link } from "@reach/router";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                <Link className="link colorApr" to="/dashboard">COACH</Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="inputDay">
                        Input Day
                    </Link>
                </li>
                <li>
                    <Link className="link" to="">
                        Store
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/settings">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link className="link" to="">
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
