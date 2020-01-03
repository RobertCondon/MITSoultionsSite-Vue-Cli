const BlogController = require('./controller/BlogController');
// const AuthenticationControllerPolicy = require('./policies/BlogPolicies')

module.exports = (app) => {
    app.post('/create', BlogController.createBlog);
    // AuthenticationControllerPolicy.register
    app.get('/blog/:blogId', BlogController.getBlog);

    app.get('/blog', BlogController.getAll);



};

