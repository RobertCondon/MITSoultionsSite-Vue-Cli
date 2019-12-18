<template>
  <div style="background-color: black">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-bind:style="{'background-image': 'url('+SlideShow[0]+')'}" style="background-repeat: no-repeat; background-size: cover;">
        <router-link to="/OurServices">
          <b-button class="Menu-Button" squared variant="success" style="left: 0; margin-top: 320px; margin-left: 86px;"> Services </b-button>
        </router-link>
        <router-link to="/OurServices#Packages">
        <b-button class="Menu-Button" squared variant="outline-primary" style="left: 0; margin-top: 320px; margin-left: 60px;"> Packages </b-button>
        </router-link>
      </div>
      <div class="carousel-cell" v-bind:style="{'background-image': 'url('+SlideShow[1]+')'}" style="background-repeat: no-repeat; background-size: cover;">
        <b-button class="Menu-Button" squared variant="success" style="left: 0; margin-top: 260px; margin-left: 82px;"> Support </b-button>
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
          autoPlay: 3500,
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
  }

  .Menu-Button {
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    letter-spacing: 0.03em;
    font-size: 70%;
    padding-right: 60px;
    padding-left: 60px;
  }


  .carousel-cell {
    align-items: center;
    background-color: lightgray;
    display: flex;
    font-size: 32px;
    height: 100vh;

    width: 100%;
    transform: translateX(-50);
  }
  .carousel-cell:hover {
    cursor: default;
  }

  .flickity-page-dots {
    transform: translateY(-180px);

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
