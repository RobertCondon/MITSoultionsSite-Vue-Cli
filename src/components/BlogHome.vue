<template>
    <div class="blog">

        <div>{{myUrl}}</div>
        
        <div class="BlogPost" v-for="blog in blogs" v-bind:key="blog">
            <img class="Thumbnail" v-bind:src="blog.Thumbnail" alt="../assets/images/BrokenImage.png">
            <div class="BlogContent">
                <h1 class="BlogTitle">{{blog.Title}} </h1>
                <h2 class="BlogBlurb">{{blog.Blurb}}</h2>
                <div class="AuthorDate">
                    <h3 class="BlogAuthor">By: {{blog.Author}}</h3>
                    <h3 class="BlogAuthor">{{blog.Created}}</h3>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'
    export default {
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
        width: 30vw;
        margin: 2vw 3vw 2vw 3vw;

    }
    .BlogPost {
        display: inline-grid;
        grid-template-columns: 50% 50%;

        top: 0;
    }
    .AuthorDate {
        position: relative;
        display: inline-grid;
        grid-template-columns: 50% 50%;
        width: 100%;
        left: 0;
        margin-top: 17%;
        bottom: 0;
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
    .BlogContent {
        margin-top: 2vw;
        width: 36vw;

        line-height: 1.1;
    }
    .BlogBlurb {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        font-size: 1.3vw;
        font-weight: 500;
    }
</style>
