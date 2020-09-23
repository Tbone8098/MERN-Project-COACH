import React from "react";
import { UserForm } from "../UserForm";
import { Link } from "@reach/router";

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <UserForm />
      <Link to="/">
        <button>Login</button>
      </Link>
    </div>
  );
};
