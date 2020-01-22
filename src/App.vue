<template>
  <div id="app" style="width: 100%">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';

export const EventBus = new Vue();
export default {
  name: 'app',
  data() {
    return{
      isMobile: false,
      EslintUser: false,
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 800;

      EventBus.$emit('MobileSize', this.isMobile);
    }
  },
  mounted() {
    let self = this;
    EventBus.$on('PageLoaded', changed => {
      self.EslintUser = changed;
      console.log("Paged loaded emoting now");
      EventBus.$emit('MobileSize', self.isMobile);
    });

    this.onResize();
    window.addEventListener('resize', this.onResize, {passive: true});
  },
  watch:{
    $route (){
      EventBus.$emit('MobileSize', this.isMobile);
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:100,400,600|Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500i&display=swap');
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
    padding: 0;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 100;
    transition: 0.3s;
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

  .Contact-Top {
    display:inline-block;
    padding: 1.5vw 1.5vw 0 1.5vw;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    margin-right: 1vw;
    font-size: 1.2vw;
  }

  .line{
    transform: translateY(-5px);
    width: 40vw;
    height: 0px;
    border-bottom: 1px solid #859e30;
    position: absolute;
    right: 0;
  }

  .Contact-Top-Box {
    text-align: right;
    color: #859e30;
    margin-bottom: 0px;
  }
  .NavLine {
    transform: translateY(-5px);
    border-bottom: 2px solid #859e30;
    width: 0px;
    height: 0px;
    transition: 1s;
  }
  .NavTitle {
    font-size: 1.35vw;
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
