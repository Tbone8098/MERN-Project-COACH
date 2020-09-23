import React, { useState, useEffect } from "react";
import { UserForm } from "../UserForm";
import { Link } from "@reach/router";
import Axios from "axios";
import HelperLogin from "../helper/HelperLogin";

export const Register = () => {
  const onSubmit = e => {
    Axios.post('http://localhost:8000/user/new', {
      fname: e.fName.value,
      lname: e.lName.value,
      displayName: e.displayName.value,
      email: e.email.value,
      password: e.password.value,
      confirmPassword: e.confirmPassword.value,
    })
      .then(resp => {
        console.log(resp);
        if (resp.data.errors) {
          // TODO return validations here
        } else {
          console.log("Successful register");
          let data = {
            email: e.email.value,
            password: e.password.value
          }
          HelperLogin(data)

        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Register</h1>
      <UserForm onSubmit={onSubmit} />
    </div>
  );
};
