import Api from '@/services/api'

export default {
    createBlog (credentials) {
        return Api().post('/create', credentials)
    },
    getBlog (blogId) {
        return Api().get('/blog/'+blogId)
    },
    getAll (){
        return Api().get('/blog')

    }
}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password:'1234'
// });