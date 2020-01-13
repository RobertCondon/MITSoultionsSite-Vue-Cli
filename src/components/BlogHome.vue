<template>
    <div class="blog">
        <navbar></navbar>
        <BlogHomeTitle></BlogHomeTitle>
        <img style=" z-index: 1; position: absolute; transform: translate(0, -25vw); width: 100%; left: 0"  src="../assets/images/Divider2.png" alt="Ah shit lost it again">


        <div class="BlogPost" v-for="blog in blogs" v-bind:key="blog">

            <img class="Thumbnail" v-bind:src="blog.Thumbnail" alt="../assets/images/BrokenImage.png">

            <div class="BlogContent">
                <div class="AuthorDate">
                    <h3 class="BlogAuthor">By: {{blog.Author}}</h3>
                    <h3 class="BlogAuthor">{{blog.Date}}</h3>
                </div>
                <router-link tag="div" v-bind:to="'/Blog/'+blog.id">
                    <h1 class="BlogTitle">{{blog.Title}} </h1>
                </router-link>
                <h2 class="BlogBlurb">{{blog.Blurb}}</h2>

            </div>
        </div>


        <Footer></Footer>

    </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'
    import BlogHomeTitle from "./BlogHomeTitle";
    import Footer from "./Footer";
    import Navbar from "./Navbar";
    export default {
        components: {Navbar, Footer, BlogHomeTitle},
        data() {
            return {
                myUrl: 'asdfb',
                blogContent:"",
                blogs: '',
                thumbnail: ''
            }
        },
        methods: {
            async getBlogs() {
                try {

                    const blogs = await BlogController.getAll();
                    console.log(blogs.data.Blogs);
                    this.blogs = blogs.data.Blogs
                    this.thumbnail = this.blogs[9].Thumbnail.data
                    // this.blogContent = blogData.data.blog.Content;
                    // document.getElementById('blog').innerHTML = this.blogContent
                } catch (e) {
                    console.log(e);
                    this.myUrl = e;
                }
            }
        },
        beforeMount() {
            this.getBlogs()
        },
        mounted() {



        }
    }
</script>
<style scoped>
    .Thumbnail {
        width: auto;
        max-width: 30vw;
        height: auto;
        max-height: 19vw;
        horiz-align: center;
        margin: 2vw 3vw 2vw 3vw;
        align-self: center;
        justify-self: center;
    }
    .ImageContent {
        width: 30vw;
        height: 19vw;
    }
    .BlogPost {
        display: inline-grid;
        grid-template-columns: 50% 50%;
        top: 0;
        margin: 2vw 0 2vw 0;
        min-width: 72.5vw;

        box-shadow:  1px 10px 18px #888888;
        overflow: hidden; /* make sure it hides the content that overflows */
        text-overflow: ellipsis;
    }
    .AuthorDate {
        position: relative;
        display: inline-grid;
        grid-template-columns: 50% 50%;
        width: 100%;
        left: 0;
    }
    .BlogAuthor {
        font-size: 1vw;
        color: dimgray;
        left: 0;
        text-align: left;
    }
    .BlogTitle {
        color: #100B00;
        text-align: left;
        transition: 1s;
        font-family: 'Big Shoulders Text', cursive;
        font-size: 3vw;

    }
    .BlogTitle:hover {
        cursor: pointer;
        text-underline: black dash-dot-dot-heavy;
        text-shadow: 4px 4px #859e30;
    }

    .BlogContent {
        margin-top: 1vw;
        width: 36vw;

        line-height: 1.1;
    }
    .BlogBlurb {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        font-size: 1.3vw;
        font-weight: 500;
        max-height: 1vw;
    }
    .blog {
        background-color: #dadbe0;
    }
</style>
