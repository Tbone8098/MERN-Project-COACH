import React from "react";
import { Link, navigate } from "@reach/router";
import moduleName from "module";
import Axios from "axios";
import HelperLogout from "./helper/HelperLogout";

export const Navbar = () => {
    // const logout = e => {
    //     localStorage.clear()
    //     Axios.get('http://localhost:8000/user/logout')
    //         .then(resp => {
    //             console.log(resp);
    //         })
    //         .catch()
    //     navigate('/')
    // }

    return (
        <nav className="navbar">
            <h1>
                <Link className="link colorApr" to="/dashboard">
                    COACH
                </Link>
            </h1>
            <ul>
                <li>
                    <Link className="link" to="/settings">
                        Settings
                    </Link>
                </li>
                <li onClick={HelperLogout}>Logout</li>
            </ul>
        </nav>
    );
};
