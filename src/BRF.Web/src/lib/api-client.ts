import axios from 'axios'

/**
 * Pre-configured Axios instance for calling the BRF API.
 * The Vite dev-server proxies /api/* → http://localhost:5250
 * so we use a relative baseURL.
 */
export const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})
