
import axios from 'axios'

const TOKEN = '08934a20-b202-11e9-95eb-6525f67b00a0'
const BASE_URL = 'https://api.harvardartmuseums.org'

const api = axios.create({
  baseURL: BASE_URL,
})


export const fetchAllObjects = async () => {
  const response = await api.get(`/object?apikey=${TOKEN}&size=50&page=500`)
  console.log(response.data);
  return response.data
}


export const fetchImages = async () => {
  const response = await api.get(`/image?apikey=${TOKEN}`)
  console.log(response.data);
  return response.data
}


export const searchArt = async (searchTerm) => {
  const response = await api.get(`/object?apikey=${TOKEN}&?q=${searchTerm}`)
  console.log(response.data)
  return response.data
}

