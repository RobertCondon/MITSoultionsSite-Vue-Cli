<template>
    <div id="SingleBlog">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <navbar></navbar>
        <div id="Buffer"></div>

        <div v-if="authorized === true">
            <button class="delete" v-on:click="deleteBlog" style="float: right; margin-right: 5%; background-color: #DD2D4A;"> <i class="fa fa-trash" style="color: #dadbe0"></i></button>
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
                    if(confirm("Delete blog from newsletter?")) {
                        alert("Blog Deleted from newsletter");
                        let id = this.$router.currentRoute.params.blogId;
                        await BlogController.deleteBlog(id);


                    } else {
                        alert("Blog not deleted from Database")
                    }

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
