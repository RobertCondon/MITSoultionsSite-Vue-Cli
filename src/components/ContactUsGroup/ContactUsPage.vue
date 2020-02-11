<template>
    <div style="background-color: #dadbe0; overflow: hidden; max-width: 100%">
      <div>
        <HomePageMobile v-if="isMobile"></HomePageMobile>

        <b-navbar v-if="!isMobile" id="nav"  :sticky="true" style=" position: fixed; color: darkblue; padding-top: 0px;" type="Dark">
          <b-navbar-brand href="#">
            <transition name="fade">
              <img v-if="Boo" :key="Boo" style=" width: 20vw; position: absolute;  z-index: -3; transform: translateX(-16px); top:0;" src="../../assets/images/ManageIT_Background2.png" alt="Ahh">
            </transition>
            <transition name="fade">
              <img v-if="Boo" :key="Boo" class="NavMiddle" style="width: 41vw; height: 5.4vh; position: absolute; top: 0; z-index: -4; transform: translateX(18vw);" src="../../assets/images/ManageIT_Background_Line.png" alt="Ahh">
            </transition>
            <transition name="fade">
              <img v-if="Boo" :key="Boo" style="position: absolute; top: 0; z-index: -4; right: 0; width: 42vw;" src="../../assets/images/ManageIT_Background_Options.png" alt="Ahh">
            </transition>
            <router-link  to="/">
              <transition name="fade">
                <img v-if="Boo" :key="Boo" style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">
              </transition>
              <transition name="fade">
                <img v-if="!Boo" :key="Boo" style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../../assets/images/manageit-digital_logoWhite.png" alt="Ah shit lost it again">
              </transition>

            </router-link>
          </b-navbar-brand>










          <b-collapse id="ml-auto" is-nav right>
            <b-navbar-nav class="ml-auto" id="RightLinks">
              <b-nav-item class="nav-link"  href="#" >
                <router-link tag="div" to="/AboutUs"><div class="NavItem"><h2 class="NavTitle">About Us</h2> <div class="NavLine"></div></div></router-link>
              </b-nav-item>
              <b-nav-item class="nav-link"  href="#" >
                <router-link tag="div" to="/OurServices"><div class="NavItem"><h2 class="NavTitle">Our Services</h2> <div class="NavLine"></div></div></router-link>
              </b-nav-item>
              <b-nav-item  class="nav-link"  href="#" >
                <router-link tag="div" to="/ContactUs"> <div class="NavItem"><h2 class="NavTitle">Contact Us</h2> <div class="NavLine"></div></div></router-link>
              </b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>

        <ContactUsTitle></ContactUsTitle>

        <ContactUs></ContactUs>
        <h1 style="
        display: inline-block;
        font-family: 'Bebas Neue', cursive;
        font-weight: 400;
        font-size:  6.5vw;
        color: #6f6476;
        position: relative;
        z-index: 2;
        opacity: 1;
        margin-top: 10%;
         "> Where Are We </h1>
        <a target="_blank" rel="noopener noreferrer"  href= "https://www.google.co.nz/maps/place/2%2F64+Carmen+Road,+Hei+Hei,+Christchurch+8042/@-43.5373934,172.5270289,17z/data=!3m1!4b1!4m5!3m4!1s0x6d31f57aaa60c987:0x99721f232ba36031!8m2!3d-43.5373934!4d172.5292176" >
          <img style=" display: inline-block; width: 100%; padding: 3% 10% 10% 10%; cursor: pointer" src="../../assets/images/ManageITMap.png" alt="None">
        </a>
        <Footer></Footer>
      </div>
    </div>
</template>

<script>
    import ContactUsTitle from "./ContactUsTitle";
    import ContactUs from "../ContactUs";
    //import ContactUsNote from "./ContactUsNote";
    //<ContactUsNote></ContactUsNote>
    import Footer from "../Footer";
    import HomePageMobile from "../HomePageMobile";
    export default {
        name: "ContactUsPage",
      components: {HomePageMobile, Footer, ContactUs, ContactUsTitle},
      data() {
          return{ Boo: false,
            opacityVal: 0,
            isMobile: false}
      },
      methods: {
        onResize () {
          this.isMobile = window.innerWidth < 800
        }
      },
      mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize, {passive: true});

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
            if(document.documentElement.scrollTop >= 10) {
              self.Boo = true;
              if(nav_classes != null) {
                if (nav_classes.contains("stuck") === false) {
                  nav_classes.toggle("stuck");

                  for (var i = 0; i < navlink.length; i++) {
                    navlink[i].style.color = "#" + '495d68';
                    navlink[i].style.textShadow = "0px 0px black";
                  }

                }
              }

            } else {
              self.Boo = false;
              if(nav_classes != null) {
                if (nav_classes.contains("stuck") === true) {
                  nav_classes.toggle("stuck");
                  for (var x = 0; x < navlink.length; x++) {

                    navlink[x].style.color = "#" + 'E0FBFC';
                    navlink[x].style.textShadow = "0px 1px black";
                  }
                }
              }

            }

          })
        })
      }
    }
</script>

<style scoped>

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
</style>
