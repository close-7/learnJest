import axios from 'axios'

export const runCallback = (callback) => {
    callback()
}

export const createObject = (classItem) => {
    new classItem();
}

export const getDate = () => {
    return axios.get('/api').then(res => res.data)
}