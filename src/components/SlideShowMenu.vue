<template>
  <div style="background-color: black">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-bind:style="{'background-image': 'url('+SlideShow[0]+')'}" style="background-repeat: no-repeat; background-size: cover;">
        <router-link to="/OurServices">
          <b-button squared variant="success" style=" padding: 0.4vw 0 0.4vw 0; left: 0; margin-top: 35vh; margin-left: 4.5vw"> <span class="Menu-Button"> Services </span> </b-button>
        </router-link>
        <router-link to="/OurServices#Packages">
          <b-button  squared variant="outline-primary" style=" padding: 0.4vw 0 0.4vw 0; left: 0;  margin-top: 35vh; margin-left: 5.5vw;"> <span class="Menu-Button"> Packages </span> </b-button>
        </router-link>
      </div>
      <div class="carousel-cell" v-bind:style="{'background-image': 'url('+SlideShow[1]+')'}" style="background-repeat: no-repeat; background-size: cover;">
        <router-link to="/ContactUs">
          <b-button  squared variant="success" style="padding: 0.4vw 0 0.4vw 0; left: 0; margin-top: 30vh; margin-left: 4vw"> <span class="Menu-Button"> Support </span> </b-button>
        </router-link>
      </div>
    </flickity>

  </div>
</template>

<script>
  import Flickity from 'vue-flickity';

  export default {
    name: "test",
    components: {
      Flickity
    },
    data() {
      return {
        SlideShow: [
          require('../assets/images/ServiceToSuitYou2.png') ,
          require('../assets/images/CuttingEdgeSupport2.png'),
          require('../assets/images/StockImageThree.jpg')
        ],
        flickityOptions: {
          initialIndex: 0,
           prevNextButtons: false,
          // pageDots: true,
           wrapAround: true,
          autoPlay: 35009999,
          pauseAutoPlayOnHover: true
        }
      }
    },
    mounted() {
      this.resize();
    },
    methods: {
      resize() {
        this.$refs.flickity.resize();
      }
    }
  };
</script>

<style>
  .flickity-page-dots {
    transform: translateY(-40px);
    -webkit-transform: translateY(-40px);
    -ms-transform: translateY(-40px);
  }

  .Menu-Button {
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    letter-spacing: 0.03vw;
    font-size: 1.0vw;
    padding-right: 2vw;
    padding-left: 2vw;
  }


  .carousel-cell {
    align-items: center;
    background-color: lightgray;
    display: flex;
    font-size: 32px;
    height: 100vh;

    width: 100%;
    transform: translateX(-50);
    -webkit-transform: translateX(-50);
    -ms-transform: translateX(-50);
  }
  .carousel-cell:hover {
    cursor: default;
  }

  .flickity-page-dots {
    transform: translateY(-180px);
    -webkit-transform: translateY(-180px);
    -ms-transform: translateY(-180px);

  }

  /* white circles */
  .flickity-page-dots .dot {

    opacity: 1;
    padding-right: 20px;
    margin: 10px;
    background: transparent;
    border: 2px solid #E0FBFC;
  }
  /* fill-in selected dot */
  .flickity-page-dots .dot.is-selected {
    background: #E0FBFC;
  }
</style>
