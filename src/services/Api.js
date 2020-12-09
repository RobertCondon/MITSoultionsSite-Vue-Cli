import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://www.manageit.nz:8081'
        //baseURL: 'http://localhost:8081/'
    })
}