import axios from 'axios'

export default class UsersService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getUsers() {
        return axios.get('users');
    }

    getPosts() {
        return axios.get('posts');
    }

}

export const userService = new UsersService();