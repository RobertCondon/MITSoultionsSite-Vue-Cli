import Api from '@/services/blogApi'

export default {
    createSub (data) {
        return Api().post('/subs', data)
    },
    getAllSubs () {
        return Api().get('/subs')
    },
}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password:'1234'
// });