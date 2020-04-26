const {Blog} = require('../models');
const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper


module.exports = {
    data() {
        return{
            Title: "None atm",
            Blur: "None atm again",
        }
    },
    methods: {


    },
    // Create a new Blog
    async createBlog(req, res) {
        try {
            const blogData = await Blog.create(req.body);
            //console.log(req.body.Title, req.body.Blurb);
            this.Title = req.body.Title;
            this.Blurb = req.body.Blurb;
            //this.SendMail.catch(console.error);
            //await this.SendMail();

            res.send(blogData);
            //his.SendMail().catch(console.error);
        } catch (err) {
            res.status(400).send({})
        }

        async function SendMail() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            console.log('SendMail Runnin');
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtpauth.discountdomains.co.nz",
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'contact@inhouseweb.nz', // generated ethereal user
                    pass: 'buster' // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <contact@inhouseweb.nz>', // sender address
                to: "rt_condon@hotmail.com, inhouseweb@hotmail.com", // list of receivers
                subject: this.Title, // Subject line
                text: this.Blurb, // plain text body
                html: "<h1>"+this.Blurb+"</h1>" // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        SendMail().catch(console.error);
    },
    // Get Single blog with ID
    async getBlog(req, res) {
        try {
            const blogId = req.params.blogId;
            const blog = await Blog.findOne({
                where: {
                    id: blogId
                }
            });

            // Blog does not exist
            if (!blog) {
                res.status(403).send({
                    error: ' Blog Post does not exist'
                })
            }
            // Convert blog to JSON data
            const blogJson = blog.toJSON();

            //Send Single blog to Front-End to display
            res.send({
                blog: blogJson
            })
        } catch (e) {
            res.status(400).send({
                error: e
            })
        }
    },
    // Get all existing blogs
    async getAll(req, res) {
        try {
            const allBlogs = await Blog.findAll();
            //Send all existing Blogs to Front-End to display
            res.send({
                Blogs: allBlogs
            })
        } catch (e) {
            res.status(400).send({
                error: e
            })
        }
    },
    async deleteBlog(req,res) {
        try{
            const blogId = req.params.blogId;
            const del = await Blog.destroy({
                where: {
                    id: blogId
                }
            })
            console.log(del)

        }catch (e) {
            res.status(400).send({
                error: e
            })
        }
    }
};