<template>
    <div id="SingleBlog">

        <navbar></navbar>
        <div id="Buffer"></div>

        <div v-if="authorized === true">
            <button v-on:click="deleteBlog"> Delete Blog</button>
        </div>
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
                thumbnail:'',
                authorized: false
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

                    // console.log(blogData.data.blog.Thumbnail)
                    this.thumbnail = blogData.data.blog.Thumbnail;
                    this.blogContent = blogData.data.blog.Content;
                    document.getElementById('blog').innerHTML = this.blogContent;
                   document.querySelector("#image").src = this.thumbnail

                } catch (e) {

                    console.log(e);
                    this.myUrl = e;
                }
            },
            async deleteBlog() {
                try {
                    alert("Blog Deleted from Database")
                    let id = this.$router.currentRoute.params.blogId;
                    let del = await BlogController.deleteBlog(id);
                    console.log(del);

                } catch (e) {
                    console.log(e)
                }
            }
        },
        beforeMount() {
            this.getBlog()
            if (this.$cookies.isKey("token")) {
                this.authorized = true
            } else {
                this.authorized = false
            }
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
