import axios from "axios";
const baseUrl = 'http://localhost:4000/users'
const registerUser = (username, password) => {
    return axios.post(`${baseUrl}/register`, { username, password })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { registerUser };