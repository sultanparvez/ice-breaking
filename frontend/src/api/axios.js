import axios from 'axios'
const url = 'https://ice-breaking.herokuapp.com/'

const instance = axios.create({
    baseURL: url
});
export default instance;