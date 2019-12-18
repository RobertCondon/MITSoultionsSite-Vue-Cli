<template>
  <div>
    <b-navbar id="nav"  :sticky="true" style="color: darkblue; padding-top: 0px;" type="Dark">
      <b-navbar-brand href="#">
        <transition name="fade">
          <img v-if="Boo" :key="Boo" style="position: absolute; padding-top: 25px; z-index: -3; transform: translateX(-16px);" src="../assets/images/ManageIT_Background2.png" alt="Ahh">
        </transition>
        <transition name="fade">
          <img v-if="Boo" :key="Boo" style="width: 38.4vw; height: 108%; position: absolute; padding-top: 25px; z-index: -4; transform: translateX(357px);" src="../assets/images/ManageIT_Background_Line.png" alt="Ahh">
        </transition>
        <transition name="fade">
          <img v-if="Boo" :key="Boo" style="position: absolute; padding-top: 25px; z-index: -4; right: 0" src="../assets/images/ManageIT_Background_Options.png" alt="Ahh">
        </transition>
        <img style="padding-top: 30px" src="../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">
      </b-navbar-brand>










      <b-collapse id="ml-auto" is-nav right>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link" type="dark" href="#"><div class="NavItem"><h2 class="NavTitle">About us</h2> <div class="NavLine"></div></div></b-nav-item>
          <b-nav-item  class="nav-link"  href="#" ><div class="NavItem"><h2 class="NavTitle">Our Services</h2> <div class="NavLine"></div></div></b-nav-item>
          <b-nav-item  class="nav-link"  href="#" ><div class="NavItem"><h2 class="NavTitle">Contact Us</h2> <div class="NavLine"></div></div></b-nav-item>
          <b-nav-item  class="nav-link"  href="#" ><div class="NavItem"><h2 class="NavTitle">Portal</h2> <div class="NavLine"></div></div></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "Navbar",
      data() {
        return{
          boo: false
        }
      },
      mounted() {

        var self = this;
        this.$nextTick(function(){
          window.addEventListener("scroll", function(){
            var navbar = document.getElementById("nav");

            var nav_classes = navbar.classList;

            self.Scrolled = document.documentElement.scrollTop;
            if(document.documentElement.scrollTop >= 150) {
              self.Boo = true;
              if (nav_classes.contains("stuck") === false) {
                nav_classes.toggle("stuck");

              }
            } else {
              self.Boo = false;
              if (nav_classes.contains("stuck") === true) {
                nav_classes.toggle("stuck");

              }
            }

          })
        })
      }

    }
</script>

<style scoped>
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
</style>
