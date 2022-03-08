<template>
    <div style="height: 120vh; overflow-x: hidden; max-height: 100%; max-width: 100%">
      <img v-if="!isMobile" id="Background" style="  overflow-x: hidden; max-height: 100%; max-width: 100%" src="../../assets/images/OurServicesPageTitleBackground.png" alt="Lost image">
      <img v-if="isMobile" id="Background2" style="  overflow-x: hidden; max-height: 110%; max-width: 100%" src="../../assets/images/OurServicesPageTitleBackgroundMobile.png" alt="Lost image">
      <div id="OurServicesTitleCard" style=" position: absolute; overflow: hidden; max-width: 100%">
        <div id="Wires" style="  overflow-x: hidden; max-height: 100%; max-width: 100%">
          <img id="WireOne" style="opacity: 0.2;" src="../../assets/images/CableAnimation.png" alt="Lost image">
          <img id="WireTwo" style="opacity: 0.2;" src="../../assets/images/CableAnimation.png" alt="Lost image">
        </div>
        <div  style="z-index: 2;">
          <h1 style="opacity: 1; z-index: 2;" class="PageTitleTwo" > Our </h1> <h1 style="opacity: 1" class="PageTitleOne"> Services</h1>
          <h3 style="opacity: 0.8; z-index: 3;" class="SemiTitle"> Practical and expert solutions</h3>

        </div>
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
  #Wires {
    transform: translateY(950px);
    -webkit-transform: translateY(950px);
    -ms-transform: translateY(950px);
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
  .PageTitleTwo {
    display: inline-block;

    color: #495d68;

  }

  #Background {
    position: absolute;

    width: 100vw;

    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
  }

  #Background2 {
    position: absolute;

    width: 100vw;

    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
  }

#WireOne {
  position: relative;
  z-index: 1;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  opacity: 0.2;
  animation-name: Start;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
#WireTwo {
  position: relative;
  z-index: 1;
  opacity: 0.2;
  transform: translate(0%,-100%);
  -webkit-transform: translate(0%,-100%);
  -ms-transform: translate(0%,-100%);
  animation-name: Middle;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
#WireThree {
  transform: translate(-100%,-200%);
}


@keyframes Middle {
  from {
    -webkit-transform:translate(0px, -100%);
    transform: translate(0px, -100%);
    -ms-transform: translate(0%,-100%);
  }
  to {
    -webkit-transform:translate(-100%, -100%);
    transform: translate(-100%, -100%);
    -ms-transform: translate(-100%, -100%);
  }
}

@keyframes Start {
  from {
    -webkit-transform:translate( 99.88%, 0);
    transform: translate(99.88%, 0);
    -ms-transform: translate(99.88%, 0);

  }
  to {
    -webkit-transform:translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);

  }
}
  @media (max-width:800px){
    #Wires {
      transform: translateY(750px);
      -webkit-transform:translateY(750px);
      -ms-transform:translateY(750px);
    }

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
    .PageTitleTwo {
      display: inline-block;

      color: #495d68;

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
