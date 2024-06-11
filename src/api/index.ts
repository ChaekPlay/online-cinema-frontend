import axios from 'axios'
import process from 'process'

export const API = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080/api/v1/'
  },
  auth: {
    username: 'test@test.test',
    password: '123'
  }
})
