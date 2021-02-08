import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '616db6e6-687e-4316-9745-1adc6c61ab21'
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage} & count=${pageSize}`)
            .then(response => response.data)
    },
    getLogin : () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unFollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

