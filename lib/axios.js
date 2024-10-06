import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://finances-back.bnm-amine.com",
})

export default axios
