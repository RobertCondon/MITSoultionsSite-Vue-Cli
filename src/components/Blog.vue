<template>
    <div id="SingleBlog">

        <navbar></navbar>
        <div id="Buffer"></div>

        <img id="image">
        <div id="blog"></div>

    </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'
    import Navbar from "./Navbar";
    export default {
        components: {Navbar},
        data() {
            return {
                myUrl: 'asdfb',
                blogContent:"",
                thumbnail:''
            }
        },
        methods: {
            async getBlog() {

                var reader = new FileReader();
                try {
                    let id = this.$router.currentRoute.params.blogId;
                   const blogData = await BlogController.getBlog(id);
                    // console.log(blogData.data.blog.Content);
                    reader.addEventListener('loadend', (e) => {
                        self.thumbnail = e.srcElement.result;

                    })

                    console.log(blogData.data.blog.Thumbnail)
                    this.thumbnail = blogData.data.blog.Thumbnail;
                    this.blogContent = blogData.data.blog.Content;
                    document.getElementById('blog').innerHTML = this.blogContent;
                   document.querySelector("#image").src = this.thumbnail

                } catch (e) {

                    console.log(e);
                    this.myUrl = e;
                }
            }
        },
        beforeMount() {
            this.getBlog()
        },
        mounted() {



        }
    }
</script>
<style scoped>
    #Buffer {
        height: 120px;
    }
    #SingleBlog {
        background-color: #dadbe0;
    }
</style>
