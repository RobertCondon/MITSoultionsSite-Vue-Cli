<template>
  <div class="ServiceDiv_" >
    <router-link  to="/OurServices#Services">
      <div class="IconBottomRight"></div>
      <div class="IconBottomLeft"></div>
      <div class="IconTopRight"></div>
      <div class="IconTopLeft"></div>
      <img class="AllServices_" src="../assets/images/svg/AllServices.png" alt="Ah shit lost it again">
      <h1 id="BreakFixText" class="ServiceTag" style="  "> All Services </h1>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "AllServicesMobile"
    }
</script>

<style scoped>
  .IconBottomRight {
    transition: 0.7s;
    position: absolute;
    border-bottom: 1px solid #859e30;
    border-right: 1px solid #859e30;
    height: 10%;
    width: 6%;
    bottom: 0;
    right: 0;
  }
  .IconBottomLeft {
    transition: 0.7s;
    position: absolute;
    border-bottom: 1px solid #859e30;
    border-left: 1px solid #859e30;
    height: 10%;
    width: 6%;
    bottom: 0;
    left: 0;
  }
  .IconTopRight {
    transition: 0.7s;
    position: absolute;
    border-top: 1px solid #859e30;
    border-right:1px solid #859e30;
    height: 10%;
    width: 6%;
    top: 0;
    right: 0;
  }
  .IconTopLeft {
    transition: 0.7s;
    position: absolute;
    border-top: 1px solid #859e30;
    border-left: 1px solid #859e30;
    height: 10%;
    width: 6%;
    top: 0;
    left: 0;
  }

  .ServiceDiv_ {
    z-index: 3;
  }

  .ServiceDiv_:hover .IconTopLeft {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_:hover .IconTopRight {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_:hover .IconBottomLeft {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_:hover .IconBottomRight {
    height: 50%;
    width: 50%;
  }

  .SectionTitle {
    width: 100%;
    padding-left: 40px;
    padding-bottom: 60px;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 80px;
    color: #495d68;
    position: relative;
    float: left;
    text-align: left;
    border-bottom: 3px dotted dimgray;
  }

  #BreakFixText {
    transform: translate(-40%, 45px);
  }

  @media (max-width:800px){
    .ServiceDiv_ {
      transition: 1s;
      top: 4vh;
      margin: 0;
      height: 30%; width: 100%; display: inline-block; position: relative
    }
    .AllServices_ {
      margin-top: 2%;
      margin-left: 17%;
      height: 140px;
      transition: 1s;
      float: left;
    }
    .ServiceTag {
      float: right;
      transition: 1s;
      text-align: center;
      margin-left: auto;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 11.0vw;
      color: #495d68;
    }

    .ServiceDiv_:hover .ServiceTag {
      font-size: 13.0vw;
    }
    .ServiceDiv_:hover .AllServices_ {
      margin-top: 1%;
      margin-left: 10%;
      height:  120px;
    }


    @media (max-width:450px){
      .AllServices_ {
        margin-top: 2%;
        margin-left: 14%;
        height: 100px;
        transition: 1s;
        float: left;
      }
      #BreakFixText {
        transform: translate(-28%, 35px);
      }
    }
  }
</style>
