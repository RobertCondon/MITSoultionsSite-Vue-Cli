<template>
  <div  style=" left:1%; width: 67.5%; position: relative; transform: translate(75%,0%);
   -webkit-transform: translate(75%,0%);
    -ms-transform: translate(75%,0%);
   padding-top: 19.5%; overflow-y: hidden; max-height: 100%;" >
    <img style="height: 50%; width: 50%; z-index: 2;"  src="../assets/images/ServiceAll.png" alt="lost image it again">
    <router-link  to="/OurServices#Services">
      <div class="ServiceDiv_" style=" height:37%; width: 24%; right: 36%; top:64%; position: absolute;">
        <img class="SBorderY" src="../assets/images/IconBorderY.png" alt="lost image it again" style="">
        <img class="SBorderX" src="../assets/images/IconBorderX.png" alt="lost image it again" style="">
        <img class="AllServices" src="../assets/images/svg/AllServices.png" alt="lost image it again">
        <h1 class="ServiceTag" style=" "> All Services </h1>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "AllServices"
  }
</script>

<style scoped>


  .SBorderY {
    position: absolute;
    right: 5%;
    bottom: 12%;
    transition: 1s;
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);

  }
  .SBorderX {
    position: absolute;
    left: 5%;
    top: 12%;
    transition: 1s;
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .ServiceTag {
    transition: 1s;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    font-size: 2.4vw;
    color: #495d68;
  }
  .AllServices {
    margin-top: 19%;
    height: 8vw;
    width: calc( 8vw*1.13077);
    transition: 1s;
  }

  .ServiceDiv_:hover {
    cursor: pointer;
  }

  .ServiceDiv_:hover .AllServices {
    margin-top: 15%;
    height:  9.3vw;
    width: calc( 9.3vw*1.13077);
  }
  .ServiceDiv_:hover .SBorderX {
    top: 5%;
    left: 2%;
  }

  .ServiceDiv_:hover .SBorderY {
    bottom: 3%;
    right: 2%;
  }
  .ServiceDiv_:hover .ServiceTag {
    font-size:  2.8vw;
  }
  .SBorderX, .SBorderY {
    height: 55%;
    width: 55%
  }
</style>
