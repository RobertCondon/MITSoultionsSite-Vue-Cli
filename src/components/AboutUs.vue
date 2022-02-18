<template>
  <div>
    <HomePageMobile style="position: fixed;" v-if="IsMobile"></HomePageMobile>
    <Navbar v-if="!IsMobile"></Navbar>


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
            <div class="company-introduction" style="color: black;">
              <div class="SoultionsTitle">
                <span>Turning complex problems into </span> <span style="color: #70892f;">simple solutions</span>
              </div>
              <span class="intro-content">
                <p>
                At manageIT we speak your language, removing the confusion and
                frustration that often comes with IT work. We are a people driven IT team,
                and this is how we maintain long-term business relationships.
                <br>
                  <br>
                Our locally based, close-knit team pride ourselves in being able to see your problems
                from many different angles, to come up with creative solutions to best benefit your needs.
                While making sure you understand each option before you hand-pick the one that
                suits your needs.
                <br>
                  <br>
                This is all possible because at our core we cultivate innovation, creativity and technical excellence
                within our team. Allowing you ease of mind when any problem arrives. From critical system failures to
                simply using technology to help push your business to work smarter, harder and faster.
                </p>
              </span>

            </div>

            <div class="our-values">

             <span style="font-size: 6vw;">Our Values </span>
              <div >
                <div class="values">
                  <img class="ValuePic" src="../assets/images/svg/CustomerUnderstandingLogo.png" alt="">
                  <span style="margin-top: 5%" class="ValueTitle"> Customer Understanding</span>
                  <span class="ValueBlerb">Simple easy to understand dialogue</span>
                </div>
                <div class="values">
                  <img class="ValuePic" src="../assets/images/svg/OptionsLogo.png" alt="">
                  <span class="ValueTitle">Options</span>
                  <span class="ValueBlerb">Being creative and innovative thinkers</span>
                </div>
                <div class="values">
                  <img class="ValuePic" src="../assets/images/svg/ExelanceLogo.png" alt="">
                  <span class="ValueTitle">Excellence</span>
                  <span class="ValueBlerb">Always striving to be at the forefront of our field</span>
                </div>
                <div class="values">
                  <img class="ValuePic" src="../assets/images/svg/LongevityLogo.png" alt="">
                  <span class="ValueTitle">Longevity</span>
                  <span class="ValueBlerb">A job done right will only need to be done once</span>
                </div>


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


    <!--<div> <img style=" z-index: 1; position: absolute; transform: translate(0, -50px); width: 100vm; right: 0"  src="../assets/images/DividerChunk2.png" alt="lost image" it again"></div>-->

    <Testimonials id="Testmonials" style="border-top: #859e30; border-top-style: ridge; border-top-width: thick"></Testimonials>
    <Footer></Footer>
  </div>

</template>














<script>
  import Footer from "@/components/Footer";
  import Testimonials from "./Testimonials_smaller";
  import Navbar from "./Navbar";
  import HomePageMobile from "./HomePageMobile";


  export default {
    name: 'HelloWorld',
    components: {
        HomePageMobile,
        Navbar,
      Testimonials,
      Footer
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        scrollVal: 0,
        opacityVal: 0,
        Boo: false,
          IsMobile: false,
      }
    },
    methods: {
        onResize () {
            this.IsMobile = window.innerWidth < 800
        }
    },

    mounted() {

        this.onResize();
        window.addEventListener('resize', this.onResize, { passive: true });
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
  body, html {
    width: 100vw;
  }

  .content-background{
    background-color: #dadbe0;
    display: block;
    height: 1800px;
    width: 100%;

  }
  .ValuePic {
    width: 10vw;
    display: inline-block;
  }

  .values{
    display: inline-block;
    text-align: center;
    width: 10vw;
    margin: 5%;
    alignment: top;
    vertical-align: top;
  }

  .ValueTitle {
    text-align: center;
    display: inline-block;
    font-size: 2vw;
    width: 14vw;
    transform: translateX(-2vw);
    font-family: 'Bebas Neue', cursive;
    color: #2e2e3a;
    font-weight: 400;
    text-shadow: #859e30 2px 2px 5px;
  }
  .ValueBlerb {
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    height: auto;
    color: #2e2e3a;

    text-shadow: none;
  }


  .intro-content{
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    text-align: left;
  }
  .company-introduction{
    margin-top: 10%;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;

    font-size: 70px;

    font-style: normal;
    width: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    z-index: 9;
  }
  .our-values{
    position: relative;

    font-family: 'Bebas Neue', cursive;
    color: #2e2e3a;
    font-weight: 400;

    color: #2e2e3a;
    margin-top: 200px;
    text-shadow: #859e30 2px 2px 5px;
    width: 100%;
  }
  .est{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    bottom: -10%;
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
    margin-bottom: 40px;
  }
  .Page-Title {
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 6vw;
    color: #dadbe0;
    text-shadow: -3px 3px #495d68;
    top: 42%;
    text-underline: #859e30;
  }
  .img-src {
    width: 100vw;
    position: fixed;
    background-position: center;
    -webkit-background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("../assets/images/AboutUsBackground.png");
    background-repeat: no-repeat;
    background-size: auto;
    -webkit-box-shadow: -25px 25px 50px #f0f0f0, -25px -25px 50px 0 #f0f0f0 inset ;
    -moz-box-shadow: -25px 25px 50px #f0f0f0,-25px -25px 50px 0 #f0f0f0 inset;
    box-shadow: -25px 25px 100px #f0f0f0, -25px -55px 100px 0 #f0f0f0 inset ;
  }


  .blurred-img {
    opacity: 0;
    background-image: url("../assets/images/AboutUsBackground.png");
    background-repeat: no-repeat;
    background-size: auto;
    filter: blur(100px);
    /*-webkit-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
    /*-moz-box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
    /*box-shadow: -25px 25px 100px #CBCED3, -25px -25px 100px 0 #CBCED3  ;*/
  }
  .area{
background-color: #dadbe0;


    width: 100%;
    -webkit-box-shadow: -25px 25px 100px #f0f0f0, -25px -25px 100px 0 #f0f0f0  ;
    -moz-box-shadow: -25px 25px 100px #f0f0f0, -25px -25px 100px 0 #f0f0f0  ;
    box-shadow: -25px 25px 100px #f0f0f0, -25px -25px 100px 0 #f0f0f0 ;

  }
  .article {

    width:100%;
    height: 900px;
    margin-left: auto;
    margin-right: auto;

  }


  .circles{
    position: absolute;
    left: 0;
    width: 100%;
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
    animation-duration: 95s;
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
      transform: translateY(-200vh) rotate(720deg);
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
    background-color: transparent;
    transition: all 0.1s;
  }
  #nav {

  }
  nav.stuck {
    padding-top: 0px;
    background: none;
  }

  .navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding: 0;
    margin: 0 1.3vw;
  }

  #RightLinks {
    position: absolute;
    top: 3vh;
    right: 2vw;
  }

  .NavLine {
    transform: translateY(-5px);
    border-bottom: 2px solid #859e30;
    width: 0px;
    height: 0px;
    transition: 1s;
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
  .SoultionsTitle {
    width: 70%; display: inline-block; margin-bottom: 40px
  }
  @media (max-width:800px){
    .intro-content{
      font-size: 5.2vw;
    }
    .company-introduction {
      width: 90%;
      font-size: 10vw;
    }
    .SoultionsTitle {
      width: 70%;
    }
    .ValuePic {
      width: 25vw;
    }

    .values{
      width: 25vw;
      margin: 10%;
    }

    .ValueTitle {
      font-size: 4vw;
      width: 30vw;
    }
    .ValueBlerb {
      font-size: 3vw;
    }
    .our-values{
      position: relative;

      font-family: 'Bebas Neue', cursive;
      color: #2e2e3a;
      font-weight: 400;

      color: #2e2e3a;
      margin-top: 200px;
      text-shadow: #859e30 2px 2px 5px;
      width: 100%;
    }
    #Testmonials {
      margin-top: 60%;
    }
    .Page-Title {
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 9vw;
      color: #dadbe0;
      text-shadow: -3px 3px #495d68;
      top: 50%;
      text-underline: #859e30;
    }
    .img-src, .blurred-img {
      background-image: url("../assets/images/AboutUsBackgroundMobile.png");
    }
  }


</style>
