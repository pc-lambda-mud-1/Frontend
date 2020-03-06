import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: `Token ${token}`
        }
    })
};

export const axiosWithToken = (token) => {
    return axios.create({
        headers: {
            Authorization: `Token ${token}`
        }
    })
};

