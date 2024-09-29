import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://192.168.100.7:8000",
})

export default axios
