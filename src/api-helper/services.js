
import axios from 'axios'

const TOKEN = '08934a20-b202-11e9-95eb-6525f67b00a0'
const BASE_URL = 'https://api.harvardartmuseums.org'

const api = axios.create({
 baseURL: BASE_URL,
})


export const fetchAllObjects = async () => {
 const response = await api.get(`/object?apikey=${TOKEN}`)
 console.log(response);
 return response
}