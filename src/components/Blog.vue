<template>
<div>
    <img id="image">
    <div id="blog">


<!--        <b-navbar id="nav"  :sticky="true" style="color: darkblue; padding-top: 0px;" type="Dark">-->
<!--            <b-navbar-brand href="#">-->
<!--                <transition name="fade">-->
<!--                    <img v-if="Boo" :key="Boo" style=" width: 20vw; position: absolute;  z-index: -3; transform: translateX(-16px); top:0;" src="../assets/images/ManageIT_Background2.png" alt="Ahh">-->
<!--                </transition>-->
<!--                <transition name="fade">-->
<!--                    <img v-if="Boo" :key="Boo" class="NavMiddle" style="width: 41vw; height: 5.4vh; position: absolute; top: 0; z-index: -4; transform: translateX(18vw);" src="../assets/images/ManageIT_Background_Line.png" alt="Ahh">-->
<!--                </transition>-->
<!--                <transition name="fade">-->
<!--                    <img v-if="Boo" :key="Boo" style="position: absolute; top: 0; z-index: -4; right: 0; width: 42vw;" src="../assets/images/ManageIT_Background_Options.png" alt="Ahh">-->
<!--                </transition>-->
<!--                <router-link  to="/">-->
<!--                    <img style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">-->
<!--                </router-link>-->
<!--            </b-navbar-brand>-->

<!--            <b-collapse id="ml-auto" is-nav right>-->
<!--                <b-navbar-nav class="ml-auto" id="RightLinks">-->
<!--                    <b-nav-item class="nav-link"  href="#" >-->
<!--                        <router-link tag="div" to="/AboutUs"><div class="NavItem"><h2 class="NavTitle">About Us</h2> <div class="NavLine"></div></div></router-link>-->
<!--                    </b-nav-item>-->
<!--                    <b-nav-item class="nav-link"  href="#" >-->
<!--                        <router-link tag="div" to="/OurServices"><div class="NavItem"><h2 class="NavTitle">Our Services</h2> <div class="NavLine"></div></div></router-link>-->
<!--                    </b-nav-item>-->
<!--                    <b-nav-item  class="nav-link"  href="#" >-->
<!--                        <router-link tag="div" to="/ContactUs"> <div class="NavItem"><h2 class="NavTitle">Contact Us</h2> <div class="NavLine"></div></div></router-link>-->
<!--                    </b-nav-item>-->
<!--                    <b-nav-item  class="nav-link"  href="#" ><div class="NavItem"><h2 class="NavTitle">Portal</h2> <div class="NavLine"></div></div></b-nav-item>-->
<!--                </b-navbar-nav>-->

<!--            </b-collapse>-->
<!--        </b-navbar>-->

        </div>
    <div>{{thumbnail}}</div>


    </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'
    export default {
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
