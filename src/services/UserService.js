import axios from "axios";

const USER_REST_API_URL = 'https://student-mgmt-sys-backend.herokuapp.com/'

class UserService{

    getAllUsers(){
        return axios.get(USER_REST_API_URL)
    }

    createUser(user){
        return axios.post(USER_REST_API_URL, user)
    }

}

export default new UserService()