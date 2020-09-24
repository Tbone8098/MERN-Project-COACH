import React from "react";
import { Link } from "@reach/router";
import HelperLogout from "./helper/HelperLogout";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                <Link className="link colorApr" to="/main/dashboard">
                    COACH
                </Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="/main/settings">
                        Settings
                    </Link>
                </li>
                <li onClick={HelperLogout}>Logout</li>
            </ul>
        </nav>
    );
};
