import axios from "axios";

const uri = 'http://localhost:5000';
const loginPath = uri + '/login';
const registerPath = uri + '/register';

class userApiClient {
    login(user) {
        return axios.post(loginPath, user);
    }

    register(user) {
        return axios.post(registerPath, user)
    }
}

export default new userApiClient();
