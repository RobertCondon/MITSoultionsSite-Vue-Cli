

const BlogController = require('./controller/BlogController');
const SubscribersController = require("./controller/SubscribersController");
// const AuthenticationControllerPolicy = require('./policies/BlogPolicies')

module.exports = (app) => {
    app.post('/create', BlogController.createBlog);
    // AuthenticationControllerPolicy.register
    app.get('/blog/:blogId', BlogController.getBlog);

    app.delete('/blog/:blogId', BlogController.deleteBlog)

    app.get('/blog', BlogController.getAll);

    // app.put('/create', BlogController.uploadThumbnail)
    app.get('/subs', SubscribersController.getAllSubs);

    app.post('/subs', SubscribersController.createSub);



};

