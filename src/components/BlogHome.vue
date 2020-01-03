<template>
    <div class="blog">

        <div>{{myUrl}}</div>

        <div v-for="blog in blogs" v-bind:key="blog">{{blog}}</div>


    </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'
    export default {
        data() {
            return {
                myUrl: 'asdfb',
                blogContent:"",
                blogs: ''
            }
        },
        methods: {
            async getBlogs() {
                try {

                    const blogs = await BlogController.getAll();
                    console.log(blogs.data.Blogs);
                    this.blogs = blogs.data.Blogs;
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
