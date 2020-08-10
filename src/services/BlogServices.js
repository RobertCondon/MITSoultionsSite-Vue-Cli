import Api from '@/services/Api'

export default {
    createBlog (data) {
        return Api().post('/create', data)
    },
    getBlog (blogId) {
        return Api().get('/blog/'+blogId)
    },
    getAll (){
        return Api().get('/blog')
    },
    deleteBlog (blogId) {
        return Api().delete('/blog/'+blogId)
    },
    SendContact (data) {
        return Api().post('', data)
    }
    // uploadThumbnail (file){
    //     return Api().post('/create', file)
    // }
}

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password:'1234'
// });