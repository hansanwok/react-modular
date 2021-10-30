/* eslint-disable no-param-reassign */
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'some url',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
        config.headers.Authorization = 'Token'
    }

    return config
  },
  (error) => Promise.reject(error),
)

export default axiosInstance
