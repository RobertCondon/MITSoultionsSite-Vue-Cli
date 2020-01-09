<template>
  <div id="PostIts" style="">
    <img id="Background" style="" src="../../assets/images/ContactUsPostItNote.png" alt="Ah shit lost it again">
    <img v-if="!isMobile" id="Background1" style="" src="../../assets/images/ContactUsPostItNotePink.png" alt="Ah shit lost it again">
    <img v-if="!isMobile" id="Keyboard"  src="../../assets/images/ContactUsKeyboard.png" alt="Ah shit lost it again">
    <div v-if="!isMobile"  id="PinkPostIt" style=" ">
      <div style="transform: translateY(80%)">
        <h1 style="opacity: unset" class="PageTitleTwo"> Remote Desktop </h1>
        <h3 style="opacity: 80%"  class="SemiTitle1"> Download remote desktop for</h3>
        <h3 style="opacity: 80%"  class="SemiTitle1"> instant support. </h3>
        <a onclick="window.location.href = 'https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?SilentAuth=1&wa=wsignin1.0&activetab=pivot:overviewtab';" id="Submit" class="button"> Download </a>
      </div>
    </div>

    <div  id="YellowPostIt" style="">

        <h1 style="opacity: unset" class="PageTitleOne"> IT Support </h1>
        <h3 style="opacity: 80%" class="SemiTitle"> Professional IT services made for you locally </h3>
        <h3 style="opacity: 80%" class="SemiTitle"> By a close-knit company in CHCH </h3>


    </div>


  </div>
</template>

<script>
    export default {
        name: "ContactUsNote",
        data() {
          return{
            isMobile: false,
          }
        },
      methods: {
        onResize () {
          this.isMobile = window.innerWidth < 800
        }
      },
      mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize, {passive: true});
      }
    }
</script>

<style scoped>
  #Submit {
    padding: 4% 3% 4% 3%;
    margin: initial;
    left: initial;
    position: initial;
  }
  .button {
    display: inline-flex;
    align-items: center;
    background: #c06c84;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 5%;
    padding: 0 1.6%;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    will-change: transform;
  }
  .button:hover {
    background: #ae4b67;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
    -webkit-transform: translate3d(0, -2px, 0);
    -ms-transform: translate3d(0, -2px, 0);
  }
  .button:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
    -webkit-transform: translate3d(0, -2px, 0);
    -ms-transform: translate3d(0, -2px, 0);
  }

  #PostIts {
    height: 33vw; overflow: hidden; max-height: 100%; max-width: 100%; background-color: #dadbe0;
    margin-bottom: 400px;
  }

  #Background {
    position: absolute;  overflow: hidden; max-height: 100%; max-width: 100%;
    left: 28%;
    height: 35vw;
    width: 45%;
  }

  #YellowPostIt {
    overflow: hidden; max-width: 100%; height: 33vw; display: inline-block;  transform: translate(-39%, 25%)
  }

  #Background1 {
    position: absolute;  overflow: hidden; max-height: 100%; max-width: 100%;
    left: 3%;
    transform: translateY(20%);
    height: 25vw;
    width: 30%;
  }
  #Keyboard {
    position: absolute;
    overflow-x: hidden; max-width: 100%;
    right: 0;
    height: 55%;
    width: 35%;
    transform: translateY(70%);
  }
  #PinkPostIt {
    overflow: hidden; max-width: 100%; height: 33vw; display: inline-block; transform: translateX(-71%);
  }
  .PageTitleOne {
    padding-left: 40px;
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size:  6.5vw;
    color: #6f6476;
    position: relative;
    z-index: 2;
    opacity: 100%
  }

  .PageTitleTwo {
    padding-left: 40px;
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size:  4.0vw;
    color: #6f6476;
    position: relative;
    z-index: 2;
    opacity: 100%
  }

  .SemiTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.40vw;
    color: #6f6476;
    opacity: 80%;

  }

  .SemiTitle1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4vw;
    color: #6f6476;
    opacity: 80%;
    transform: translateX(5px);
  }
  @media (max-width:800px){
    #Background {
      position: absolute;  overflow: hidden; max-height: 100%; max-width: 100%;
      transform: translateY(-30%);
      left: 10%;
      height: auto;
      width: 80%;
    }
    #YellowPostIt {
      overflow: hidden; max-width: 100%; height: 40vw; display: inline-block;
      transform: translate(-4%, -5%)
    }

    #PostIts {
      margin-top: 5%;
      margin-bottom: 20%;
      height: 100%;

    }
    .PageTitleOne {
      font-size:  13.0vw;
    }
    .SemiTitle {
      font-size: 4vw;
      width: 70%;
      transform: translateX(25%);
    }
  }

</style>
