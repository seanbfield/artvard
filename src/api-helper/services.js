
import axios from 'axios'
import { async } from 'q';

const TOKEN = '08934a20-b202-11e9-95eb-6525f67b00a0'
const BASE_URL = 'https://api.harvardartmuseums.org'

const api = axios.create({
 baseURL: BASE_URL,
})


export const fetchAllObjects = async () => {
 const response = await api.get(`/person?apikey=${TOKEN}`)
 console.log(response.data);
 return response.data
}


export const fetchImages = async () => {
 const response = await api.get(`/image?apikey=${TOKEN}`)
 return response.data
}


export const fetchArtist = async () => {
 const response = await api.get(`/person?q=records:displayname`)
 return response.data
};