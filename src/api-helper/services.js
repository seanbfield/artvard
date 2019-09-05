
import axios from 'axios'
import { async } from 'q';

const DOMAIN = 'https://api.harvardartmuseums.org'
const TOKEN = '08934a20-b202-11e9-95eb-6525f67b00a0'
const BASE_URL = `${DOMAIN}/object?apikey=${TOKEN}`

const api = axios.create({
 baseURL: BASE_URL,
})


export const fetchAllObjects = async () => {
 const response = await api.get(`${BASE_URL}`)
 console.log(response.data);
 return response.data
}


export const fetchImages = async () => {
 const response = await api.get(`/image?apikey=${TOKEN}`)
 return response.data
}

// https://api.harvardartmuseums.org/person?q=culture:Dutch
// Finds all of the people that are Dutch.


export const fetchArtist = async (field, value) => {
 const response = await api.get(`${BASE_URL}&q=${field}:${value}*&size=100&&sort=imagecount&sortorder=desc`)
 return response.data
};