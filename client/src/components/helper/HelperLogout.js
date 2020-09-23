import Axios from "axios"
import { navigate } from '@reach/router'

function HelperLogout() {
    Axios.get('http://localhost:8000/user/logout')
        .then(() => {
            localStorage.clear()
            navigate('/')
        })
        .catch(err => console.log(err))
}

export default HelperLogout