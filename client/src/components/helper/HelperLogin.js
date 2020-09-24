import Axios from "axios";
import { navigate } from "@reach/router";

function HelperLogin(data) {
    Axios.post(
        "http://localhost:8000/user/login",
        {
            email: data.email,
            password: data.password,
        },
        { withCredentials: true }
    )
        .then((resp) => {
            if (resp.data.msg === "Success") {
                localStorage.setItem("activeUserId", resp.data.id);
                navigate("main/dashboard");
            } else {
                console.log("Wrong Password or Email address");
            }
        })
        .catch((err) => console.log(err));
}

export default HelperLogin;
