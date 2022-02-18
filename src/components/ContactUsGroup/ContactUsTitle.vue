lost image<template>
  <div style="height: 120vh; overflow-x: hidden; max-height: 100%; max-width: 100%">
    <img v-if="!isMobile" id="Background" style="  overflow-x: hidden; max-height: 100%; max-width: 100%" src="../../assets/images/ContactUsTitleBackground.png" alt="Ah shit lost it again">
    <img v-if="isMobile" id="Background2" style="  overflow-x: hidden; max-height: 110%; max-width: 100%" src="../../assets/images/ContactUsTitleBackgroundMobile.png" alt="Ah shit lost it again">
      <div  style="z-index: 2; transform: translateY(60%)">
         <h1 style="opacity: 1" class="PageTitleOne"> Contact Us </h1>
        <h3 style="opacity: 0.8; z-index: 3;" class="SemiTitle"> Get In Touch</h3>
      </div>
    </div>
</template>

<script>
  import {EventBus} from "../../App";

  export default {
    name: "OurServicesTitle",
    data() {
      return{
        isMobile: false
      }
    },
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 800;
      }
    },
    mounted() {
      let self = this;


      EventBus.$on('MobileSize', changed => {
        console.log(`Oh, that's nice. It's gotten ${changed} clicks! :)`);
        self.isMobile = changed;
      });
      window.onload = EventBus.$emit('PageLoaded', true);
    }

  }
</script>

<style scoped>
  #OurServicesTitleCard {
    top: -600px;
  }


  .SemiTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 2vw;
    color: #dadbe0;
    opacity: 0.8;
    transition: 0.5s;
  }
  .PageTitleOne, .PageTitleTwo {
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 15vw;
    position: relative;
    opacity: 1;
    transition: 0.5s;
  }
  .PageTitleOne {
    padding-left:3%;

    color: #dadbe0;
    text-shadow: -3px 3px #495d68;

  }


  #Background {
    position: absolute;

    width: 100vw;

    transform: translate(-50%, 0);
  }

  #Background2 {
    position: absolute;

    width: 100vw;

    transform: translate(-50%, 0);
  }



  @keyframes Middle {
    from {
      -webkit-transform:translate(0px, -100%);
      transform: translate(0px, -100%);

    }
    to {
      -webkit-transform:translate(-100%, -100%);
      transform: translate(-100%, -100%);
    }
  }

  @keyframes Start {
    from {
      -webkit-transform:translate( 99.88%, 0);
      transform: translate(99.88%, 0);

    }
    to {
      -webkit-transform:translate(0, 0);
      transform: translate(0, 0);
    }
  }
  @media (max-width:800px){

    .PageTitleOne, .PageTitleTwo {
      display: inline-block;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 30vw;
      position: relative;
      z-index: 1;
      opacity: 1;
    }

    #OurServicesTitleCard {
      position: absolute;
      top: -670px;
    }

    .PageTitleOne {
      padding-left:3%;

      color: #dadbe0;
      text-shadow: -3px 3px #495d68;

    }

    .SemiTitle {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 6vw;
      color: #dadbe0;
      opacity: 0.8;
    }
    #Background {
      height: 950px;
    }
    #Background2 {
      height: 950px;
    }
  }

</style>
