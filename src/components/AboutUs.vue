<template>
  <div class="wrapper" style="position: relative;">
    <b-navbar id="nav"  :sticky="true" style="color: darkblue; padding-top: 0px;" type="Dark">
      <b-navbar-brand href="#">
        <transition name="fade">
          <img v-if="Boo" :key="Boo" style=" width: 20vw; position: absolute;  z-index: -3; transform: translateX(-16px); top:0;" src="../assets/images/ManageIT_Background2.png" alt="Ahh">
        </transition>
        <transition name="fade">
          <img v-if="Boo" :key="Boo" class="NavMiddle" style="width: 41vw; height: 5.4vh; position: absolute; top: 0; z-index: -4; transform: translateX(18vw);" src="../assets/images/ManageIT_Background_Line.png" alt="Ahh">
        </transition>
        <transition name="fade">
          <img v-if="Boo" :key="Boo" style="position: absolute; top: 0; z-index: -4; right: 0; width: 42vw;" src="../assets/images/ManageIT_Background_Options.png" alt="Ahh">
        </transition>
        <router-link  to="/">
          <img style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">
        </router-link>
      </b-navbar-brand>










      <b-collapse id="ml-auto" is-nav right>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link"  href="#" >
            <router-link tag="div" to="/AboutUs"><div class="NavItem"><h2 class="NavTitle">About Us</h2> <div class="NavLine"></div></div></router-link>
          </b-nav-item>
          <b-nav-item class="nav-link"  href="#" >
            <router-link tag="div" to="/OurServices"><div class="NavItem"><h2 class="NavTitle">Our Services</h2> <div class="NavLine"></div></div></router-link>
          </b-nav-item>
          <b-nav-item  class="nav-link"  href="#" >
            <router-link tag="div" to="/ContactUs"> <div class="NavItem"><h2 class="NavTitle">Contact Us</h2> <div class="NavLine"></div></div></router-link>
          </b-nav-item>
          <b-nav-item  class="nav-link"  href="#" ><div class="NavItem"><h2 class="NavTitle">Portal</h2> <div class="NavLine"></div></div></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

      <div id="blurred-image-container">
        <div class="img-src" ></div>
        <div id="blurred" class="img-src blurred-img"></div>
      </div>


      <div class="article" style="position: relative">
        <div class="Page-Title" style="position: relative">Not Your Average IT Company</div>

      </div>


      <div class="content-background" >


        <div class="area" >


          <div class="circles">
            <div class="company-introduction" style="color: black;">We are Manage<span style="color: #70892f;">IT</span>
              <span class="intro-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam. Ut eu sem integer vitae justo eget magna. Ut lectus arcu bibendum at varius vel pharetra vel. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Erat nam at lectus urna duis convallis convallis tellus id. Ac tincidunt vitae semper quis. Urna duis convallis convallis tellus id interdum. Massa placerat duis ultricies lacus sed turpis tincidunt id. Nisi scelerisque eu ultrices vitae. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Vitae congue eu consequat ac felis donec et. Etiam tempor orci eu lobortis elementum nibh. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
              </p>
              </span>

            </div>

            <div class="our-values">

              Our Values
              <div >
                <div class="values"><img src="../assets/images/svg/AllServices.png" alt=""></div>
                <div class="values"><img src="../assets/images/svg/AllServices.png" alt=""></div>
                <div class="values"><img src="../assets/images/svg/AllServices.png" alt=""></div>
                <div class="values"><img src="../assets/images/svg/AllServices.png" alt=""></div>
                <div class="values"><img src="../assets/images/svg/AllServices.png" alt=""></div>


              </div>

            </div>
            <div class="est">
              <p><span>est.</span><br><span>2004</span></p>
            </div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>
        </div >
      </div>


    <!--<div> <img style=" z-index: 1; position: absolute; transform: translate(0, -50px); width: 100vm; right: 0"  src="../assets/images/DividerChunk2.png" alt="Ah shit lost it again"></div>-->

    <Testimonials style="border-top: #859e30; border-top-style: ridge; border-top-width: thick"></Testimonials>

    <Footer></Footer>
  </div>

</template>














<script>
  import Footer from "@/components/Footer";
  import Testimonials from "./Testimonials_smaller";


  export default {
    name: 'HelloWorld',
    components: {
      Testimonials,
      Footer
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        scrollVal: 0,
        opacityVal: 0,
        Boo: false,
      }
    },
    methods() {

    },

    mounted() {

      this.$nextTick(function () {
        window.addEventListener("scroll", function () {
          var blurredimg = document.getElementById('blurred');

          var s = window.scrollY;
          this.opacityVal = (s / 800.0);
          blurredimg.style.opacity = this.opacityVal;
        })

      });
      var self = this;
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav");
          var navlink = document.getElementsByClassName("nav-link");

          var nav_classes = navbar.classList;



          // console.log(nav_classes);
          // this.ChangeSeeThrough(document.documentElement.scrollTop);
          // console.log(this.GetSeeThrough());
          self.Scrolled = document.documentElement.scrollTop;
          if(document.documentElement.scrollTop >= 50) {
            self.Boo = true;
            if (nav_classes.contains("stuck") === false) {
              nav_classes.toggle("stuck");

              for (var i = 0; i < navlink.length; i++) {
                navlink[i].style.color = "#" + '495d68';
                navlink[i].style.textShadow = "0px 0px black";
              }

            }
          } else {
            self.Boo = false;
            if (nav_classes.contains("stuck") === true) {
              nav_classes.toggle("stuck");
              for (var x = 0; x < navlink.length; x++) {

                navlink[x].style.color = "#" + 'E0FBFC';
                navlink[x].style.textShadow = "0px 1px black";
              }
            }
          }

        })
      })


    },
  }





</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Michroma&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Cinzel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Tinos&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  .content-background{
    background-color: #dadbe0;
    height: 1000px;
    width: 100%;

  }
  .values{
    display: inline-block;
    padding: 0 30px 0 30px;
  }





  .intro-content{
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    text-align: left;
  }
  .company-introduction{
    font-family: 'Tinos', serif;
    font-weight: 100;
    font-size: 60px;

    font-style: normal;
    width: 70%;
    position: relative;
    margin-left: auto;
    margin-right: auto;

  }
  .our-values{
    position: relative;
    font-size: 60px;
    font-family: 'Cinzel', serif;
    font-weight: bolder;
    color: #2e2e3a;
    text-shadow: #859e30 2px 2px 5px;
    width: 100%;
  }
  .est{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 5%;
    font-family: 'Michroma', sans-serif;
    font-size: 50px;
    color: whitesmoke;
    text-shadow: #2e2e3a 2px 3px 5px;
    font-weight: bolder;
    width: 250px;
    height: 200px;
    border-radius: 50%;
    border-color: #405725;
    /*background-color: #859e30;*/
    /*border-style: groove;*/
    box-shadow: #2e2e3a 3px 3px 5px;
    background: linear-gradient(30deg,#405725 5%, #859e30 50%, whitesmoke);

    z-index: 1;
  }
  .Page-Title {
    font-family: 'Martel', serif;
    font-size: 82px;
    font-weight: bolder;
    color: #2e2e3a;
    top: 70%;
    text-shadow: #859e30 2px 2px;

  }
  .img-src {
    position: fixed;
    background-position: center;
    -webkit-background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("../assets/images/StockImages/placeholderAboutUs.jpg");
    -webkit-box-shadow: -25px 25px 50px #CBCED3, -25px -25px 50px 0 #CBCED3 inset ;
    -moz-box-shadow: -25px 25px 50px #CBCED3,-25px -25px 50px 0 #CBCED3 inset;
    box-shadow: -25px 25px 50px #CBCED3, -25px -25px 50px 0 #CBCED3 inset ;
  }

  .blurred-img {
    opacity: 0;
    background-image: url("../assets/images/StockImages/placeholderAboutUs.jpg");
    filter: blur(100px);
    /*-webkit-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
    /*-moz-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
    /*box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
  }
  .area{
background-color: #dadbe0;


    width: 100%;
    height:1000px;
    -webkit-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;
    -moz-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;
    box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3 ;

  }
  .article {

    width:100%;
    height: 1000px;
    margin-left: auto;
    margin-right: auto;

  }


  .circles{
    position: absolute;
    left: 0;
    width: 100%;
    height: 1000px;
    overflow: hidden;
    background-image: url('../assets/images/StockImages/concrete_seamless.png');
    background-repeat: repeat;

  }



  .circles .bubble{
    cursor: pointer;
    position: absolute;
    display: block;
    list-style: none;
    left: 5%;
    width: 20px;
    height: 20px;
    background: #F3C178;
    opacity: 20%;
    animation: animate 25s linear infinite;
    bottom: -150px;
    transition: opacity .3s ease-out,
                height .3s cubic-bezier(0.7,-0.6,.4,1.5),
                width .3s cubic-bezier(0.7,-0.6,.4,1.5);

  }

  .circles .bubble:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles .bubble:active{
    -webkit-animation: popOut 0.2s ease 0s;
    -o-animation: popOut 0.2s ease 0s;
    animation: popOut 0.2s ease 0s;
  }

  .circles .bubble:nth-child(2){
    left: 10%;
    width: 85px;
    height: 85px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles .bubble:nth-child(3){
    left: 70%;
    width: 35px;
    height: 35px;
    animation-delay: 4s;
  }

  .circles .bubble:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles .bubble:nth-child(5){
    left: 65%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
  }

  .circles .bubble:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;

  }

  .circles .bubble:nth-child(7){
    left: 45%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles .bubble:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    z-index: 1;
  }

  .circles .bubble:nth-child(9){
    left: 20%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles .bubble:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  .circles .bubble:nth-child(11){
    left: 30%;
    width: 95px;
    height: 95px;
    animation-delay: 7s;
    animation-duration: 17s;
  }
  .circles .bubble:nth-child(12){
    left: 10%;
    width: 50px;
    height: 50px;
    animation-delay: 4s;
    animation-duration: 15s;
  }


  @keyframes animate {

    0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }

  }
  @keyframes popOut {

    from{
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 18px;*/
    }
  }
  @-webkit-keyframes popOut {

    from{
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 18px;*/
    }
  }

  @keyframes popOutReverse {
    from{
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 18px;*/
    }
  }
  @-webkit-keyframes popOutReverse {
    from{
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 18px;*/
    }
  }
  nav {
    background-color: black;
    transition: all 0.1s;
  }
  #nav {

  }
  nav.stuck {
    padding-top: 0px;
    background: none;
  }
  .nav-link {
    color:#E0FBFC;
    text-shadow: 0px 1px black;
    padding-top: 30px;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 100;
    margin-right: 1vw;
    transition: 0.3s;
  }
  .navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }
  .NavLine {
    transform: translateY(-5px);
    border-bottom: 2px solid #859e30;
    width: 0px;
    height: 0px;
    transition: 1s;
  }
  .NavTitle {
    font-size: 160%;
    transition: 0.25s;
  }
  .NavItem:hover > .NavTitle {
    color: #859e30;
  }
  .NavItem:hover > .NavLine {
    width: 65%;
  }
  navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }



</style>
