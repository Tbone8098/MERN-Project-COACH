import { navigate } from "@reach/router";
import Axios from "axios";

function HelperDelete(scope) {
    console.log(scope);
    let userID = localStorage.getItem("activeUserId");
    if (scope === "account") {
        deleteUser(userID);
    } else {
        // TODO add a remove from race
        console.log("not all");
        removeUserFromRace();
    }
    navigate("/");
}

function removeUserFromRace(userID) {
    // remove the user from the race
    // Axios.patch("http://localhost:8000/race/");
}

function deleteUser(userID) {
    Axios.delete("http://localhost:8000/user/delete/" + userID, {
        withCredentials: true,
    })
        .then(() => {})
        .catch((err) => console.log(err));
}

export default HelperDelete;
