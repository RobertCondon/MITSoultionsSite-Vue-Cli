<template id="three">
  <div  id="app" class="wrapper" >
      <div >
        <div  v-if="!this.isMobile">
        <div id="Top-Info" class="Contact-Top-Box" style="background-color: black; ">

          <h2 class="Contact-Top"> 0800 648787 </h2>
          <h2 class="Contact-Top"> 58-64 Carmen Rd </h2>
          <b-button class="Contact-Top" style="font-size: 120%; padding: 5px; margin-left: 35px; transform: translateY(-5px);" variant="outline-success">Client Portal</b-button>
          <div class="line"></div>
        </div>

        <div id="nav-Alloud" >
          <b-navbar id="nav"  :sticky="true" style="color: darkblue; padding-top: 0px;" type="Dark">
            <b-navbar-brand href="#">
              <transition name="fade">
                <img v-if="Boo" :key="Boo" style="position: absolute; padding-top: 25px; z-index: -3; transform: translateX(-16px);" src="../assets/images/ManageIT_Background2.png" alt="Ahh">
              </transition>
              <transition name="fade">
                <img v-if="Boo" :key="Boo" class="NavMiddle" style=" height: 108%; position: absolute; padding-top: 25px; z-index: -4; transform: translateX(357px);" src="../assets/images/ManageIT_Background_Line.png" alt="Ahh">
              </transition>
              <transition name="fade">
                <img v-if="Boo" :key="Boo" style="position: absolute; padding-top: 25px; z-index: -4; right: 0" src="../assets/images/ManageIT_Background_Options.png" alt="Ahh">
              </transition>
              <router-link  to="/">
              <img style="padding-top: 30px" src="../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">
              </router-link>
            </b-navbar-brand>










            <b-collapse id="ml-auto" is-nav right>
              <b-navbar-nav class="ml-auto">
                <b-nav-item class="nav-link" type="dark" href="#">
                  <router-link tag="div" to="/AboutUs"><div class="NavItem"><h2 class="NavTitle">About us</h2> <div class="NavLine"></div></div></router-link>
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
          <SlideShowMenu id="SlideShow"></SlideShowMenu>




          <img style=" z-index: 1; position: absolute; transform: translate(0, -65%); width: 100%; left: 0"  src="../assets/images/Divider2.png" alt="Ah shit lost it again">




          <div style="background-color: #dadbe0;  overflow-x: hidden; max-width: 100%;">
            <div class="ServiceBackground" style="height: 100vh; position: relative">

              <transition name="slide-fade" style="margin-top: 40%; position: absolute; width: 20%;" >
                <div v-if="SlideServices" style="position: absolute; top:0; left:0; overflow-x: hidden; max-width: 100%; overflow-y: hidden; max-height: 100%">
                  <h6 id="IconsTitle"> Our Services </h6>
                  <Icons ></Icons>
                </div>
              </transition>
              <transition name="slide-fade-right" style="position: absolute; width: 20%; right: 0; overflow-x: hidden; max-width: 100%;" >
                  <div v-if="SlideServices" style="overflow-x: hidden; max-width: 100%;">
                    <AllServices style=""></AllServices>
                  </div>
              </transition>

            </div>
            <div class="ServiceBackground" style="height: 20vh"></div>
            <img style=" z-index: 1; position: absolute; transform: translate(0, -34%); width: 101%; right: 0"  src="../assets/images/ParrlaxImageTransition.png" alt="Ah shit lost it again">



          </div>

            <div class="parallax-container" style="position: relative; height: 120%; overflow: hidden; max-width: 100%; ">
              <img class="parallax-title"  src="../assets/images/WhyUsParrlax2.png" alt="Ah fuck">

              <parallax :fixed="true">

                <video style="position: relative; z-index: 100; transform: translateY(30px)" preload="auto" autoplay="autoplay"  loop="true" controls>
                  <source src="../assets/images/ParalaxGraph2.mp4" type="video/mp4">
                </video>
              </parallax>
            </div>

          <img style=" z-index: 1; position: absolute; transform: translate(0, -64%); width: 101%; right: 0"  src="../assets/images/ParrlaxBottomTransition.png" alt="Ah shit lost it again">

          <div style=" z-index: 1; background-color: #dadbe0; overflow: hidden; max-width: 100%;">

           <ContactUs style="z-index: 1;"></ContactUs>
            <div> <img style=" z-index: 1; position: absolute; transform: translate(0, -10%); width: 100vm; right: 0"  src="../assets/images/DividerChunk2.png" alt="Ah shit lost it again"></div>

            <Testimonials></Testimonials>

            <div>
              <Footer></Footer>
            </div>




          </div>


        </div>

    </div>


    <div v-if="this.isMobile" style="background-color: #dadbe0;">
      <HomePageMobile></HomePageMobile>
        <div style="position: relative; display: inline-block; text-align: center;  overflow-x: hidden; max-width: 100%; max-height: 100vh">
          <img src="../assets/images/ServiceToSuitYou2.png" alt="Fuck off" style=" height: 100vh; transform: translateX(-50%); overflow-x: hidden; ">
          <img src="../assets/images/MIDCircle_Transparent.png" alt="Fuck off" style=" width: 100%; position: absolute; top: 27%; opacity: 20%; overflow: hidden;
          transform: translateX(-50%); max-height: 50vh">
          <div style="position: absolute; top: 25%; max-height: 100vh;">
            <h1 style=" overflow: hidden;  font-size: 4.7rem;
            color: whitesmoke;
            font-family: 'Bebas Neue', cursive; font-weight: 400;
            "> Services to Suit You </h1>
            <h4 style=" overflow: hidden; font-size: 1.7rem;

          font-family: 'Montserrat', sans-serif; font-weight: 400; color: whitesmoke; opacity: 90%
          ">From 'as you need it' to proactive support
              and everything inbetween, we assure peace of mind
            </h4>
          </div>
          <img style=" z-index: 1; position: absolute; transform: translate(0, -65%); width: 100%; left: 0"  src="../assets/images/Divider2.png" alt="Ah shit lost it again">
          <div  class="ServiceBackground">
            <div class="ServiceBackground" >
            <h1 style=" overflow: hidden;  font-size: 17.0vw;
            color: #859e30;
            font-family: 'Bebas Neue', cursive; font-weight: 400;
            transform: translateY(20%);
            ">Services  </h1>
            <Icons style="transform: scale3d(1.1, 1.1, 1)"></Icons>
            <AllServicesMobile></AllServicesMobile>
            </div>

            <div style="transform: translate(0, 20%); background-repeat: no-repeat; background-size: 100% 100%;" v-bind:style="{'background-image': 'url('+MobileWhyUs+')'}">
              <img style=" z-index: 1; position: absolute; top:-2px;  width: 101%; right: 0"  src="../assets/images/ParrlaxImageTransition2.png" alt="Ah shit lost it again">
              <div style="margin-top: 0%">
                <h3 style=" overflow: hidden;  font-size: 5.0vw;
              color: #495d68;;
              font-family: 'Bebas Neue', cursive; font-weight: 400; margin: 0;
              padding-top: 20%;
              opacity: 80%;
              "> Manage IT </h3>
                <h1 style=" overflow: hidden;  font-size: 17.0vw;
              color: #2a2a36;
              font-family: 'Bebas Neue', cursive; font-weight: 400;"> Why Us </h1>
                <h4 style=" overflow: hidden; font-size: 4.5vw;
            text-align: left; margin-left: 3%;
             display: list-item; list-style-type: disc;  list-style-position: inside;
            font-family: 'Montserrat', sans-serif; font-weight: 400; color: #2a2a36; opacity: 90%">
                  We here at manage IT are here for you, priding ourselves on our abblity to create
                  meaningful and easy to understand dialoge, so togther we can work to your maxiumim benefit.
                </h4>
                <h4 style=" overflow: hidden; font-size: 4.5vw;
            text-align: left; margin-left: 3%;
             display: list-item; list-style-type: disc;  list-style-position: inside;
            font-family: 'Montserrat', sans-serif; font-weight: 400; color: #2a2a36; opacity: 90%;
            padding-bottom: 20%">
                That's why our mission statement means so much to us, 'harnessing the potential technology
                  to help people and business work smarter, faster and better."
                </h4>
              </div>
              <img style=" z-index: 1; position: absolute; bottom: 0; width: 101%; right: 0"  src="../assets/images/ParrlaxBottomTransition.png" alt="Ah shit lost it again">
            </div>
            <div style="transform: translateY(16%)">
              <ContactUs></ContactUs>
            </div>
            <Footer style="transform: translateY(80%)"></Footer>
          </div>

        </div>
    </div>
    </div>

  </div>

</template>

<script>

  import Parallax from "vue-parallaxy";
  import Testimonials from "@/components/Testimonials";
  import SlideShowMenu from "@/components/SlideShowMenu";
  import Footer from "@/components/Footer";
  import Icons from "@/components/Icons";

  import AllServices from "./AllServices";
  import ContactUs from "./ContactUs";
  import HomePageMobile from "./HomePageMobile";

  import AllServicesMobile from "./AllServicesMobile";

  export default {
    name: 'HomePage',
    components: {
      AllServicesMobile,
      HomePageMobile,
      ContactUs,
      AllServices,
      Icons,
      SlideShowMenu,
      Testimonials,
      Parallax,
      Footer,
    },
    data () {
      return {
        SlideShow: [
          require('../assets/images/ServiceToSuitYou2.png') ,
          require('../assets/images/CuttingEdgeSupport.png'),
          require('../assets/images/StockImageThree.jpg')
        ],
        opacityVal: 0,
        msg: 'Welcome to Your Vue.js App',
        SeeThrough: 0.01,
        BackCol: 'rgba(118,76,41,',
        FullCol: '',
        vm: this,
        container: document.querySelector('#app'),
        Scrolled: 0,
        Boo: false,
        SlideServices: false,
        NavTheme: "Light",
        isMobile: false,
        MobileWhyUs: require('../assets/images/WhyUsMobile.png'),
      }
    },
    computed: {

      reversedMessage: function () {

        return this.BackCol.concat(parseFloat(this.SeeThrough), ')')
      },

      /**
       * @return {number}
       */
      ScrollMoment: function () {
        return this.container.scrollTop;
      }
    },
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 800
      },
      ChangeSeeThrough(NumOne) {
        this.SeeThrough = this.SeeThrough *NumOne;
      },
      /**
       * @return {number}
       */
      GetSeeThrough() {
        return this.SeeThrough;
      }
    },

    mounted() {

      this.onResize();
      window.addEventListener('resize', this.onResize, { passive: true });

      var self = this;
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav");
          var navlink = document.getElementsByClassName("nav-link");
          var nav_classes = null;
          if(navbar != null) {
            nav_classes = navbar.classList;
          }




          // console.log(nav_classes);
          // this.ChangeSeeThrough(document.documentElement.scrollTop);
          // console.log(this.GetSeeThrough());
          self.Scrolled = document.documentElement.scrollTop;
          if(document.documentElement.scrollTop >= 150 && nav_classes != null) {
            self.Boo = true;
            if (nav_classes.contains("stuck") === false) {
              nav_classes.toggle("stuck");

              for (var i = 0; i < navlink.length; i++) {
                navlink[i].style.color = "#" + '191919';
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

          if(document.documentElement.scrollTop >= 900) {
            self.SlideServices = true;
          }


        })
      })
    }
  }


</script>

<style scoped>
  .NavMiddle {
    width: 47%;
  }


   img {
     -webkit-user-drag: none;
     -khtml-user-drag: none;
     -moz-user-drag: none;
     -o-user-drag: none;
     user-drag: none;
   }
  .ServiceBackground {
    background: linear-gradient(90deg, #dadbe0 60px, transparent 50%) center, linear-gradient(#dadbe0 60px, transparent 5%) center, #859e30;
    background-size: 62px 62px;
  }


    html, body {
    max-width: 100%;
    //overflow-x:hidden;
  }

  video {
    margin:0 auto;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    transition: 1s opacity;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    //color: #2c3e50;
  }
  #CarouselImage {
    height: 1175px;
  }

 .SVGimage {

   position: relative;
   height: 400px;
   width: 400px;
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

  .Contact-Top {
    display:inline-block;
    padding: 30px;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    margin-right: 1vw;
    font-size: 140%;
  }

  .Contact-Top-Box {
    text-align: right;
    color: #859e30;
    margin-bottom: 0px;
  }

  .line{
    transform: translateY(-25px);
    width: 40vw;
    height: 0px;
    border-bottom: 1px solid #859e30;
    position: absolute;
    right: 0;
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



  h1, h2 {
    bottom: 0;
  }
  h4 {

    font-size: 80px;
  }
  h3 {
    font-size: 20px;
    color: dimgray;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    //color: brown;
  }

  .bannerContainer {
    position:relative;

  }
  .carousel {
    margin-top: -70px;
  }

  .ContactBox {
    background: rgba(0, 60, 15, 0.2);
    width: 50%;
    transform: translateX(50%);
    padding: 50px;


  }


  .navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }



  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-fade-right-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-right-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-right-enter, .slide-fade-right-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(150%);
    opacity: 0;
  }


  .parallax-container {
    position: relative;
  }
  .parallax-title {
    position: absolute;
    right: -5%;
    margin-top: 1%;
    padding: 1%;
    height: 100%;
  }
  .parallax-paragraph {
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    padding: 20px;
    bottom: 50%;
    color: lightgray;
    text-align: center;
  }

  .parallax-Button {
    position: absolute;
    top: 90%;
    left: 40%;
    right: 0;
    padding: 10px;
    z-index: -1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  #IconsTitle {
    transform: translateY(30%);
    transition: 1s;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    color: #859E30;
    text-shadow: -2px 0px #425014;
    width: 80%;
    font-size: 7.5vw;
  }
</style>
