<template>
    <div id="ServiceBackImage" style=" position: relative; transform: translateX(-18.5%); z-index: 1;">
      <img id="ServiceImage"  src="../assets/images/ServicesTemplate2.png" alt="Ah shit lost it again">
      <div id="Tags">
        <router-link  to="/OurServices#ItemThree">
          <div id="Server-Content" class="IconContent"  style="position: absolute;">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/ServerManagement.png" alt="Ah shit lost it again" style="">
            <h1 class="ServiceText" style=" "> Server Management </h1>
            <h3 class="Fluff">Professional Server based management <br> and problem solving</h3>
          </div>
        </router-link>


        <router-link  to="/OurServices#ItemFive">
          <div id="Networking-Content" class="IconContent" style=" position: absolute">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/networking.png" alt="Ah shit lost it again">
            <h1 class="ServiceText" style=""> Networking </h1>
            <h3 class="Fluff"> Networking to grow with your business <br>  and suit your needs</h3>
          </div>
        </router-link>

        <router-link  to="/OurServices#ItemSeven">
          <div id="Security-Content" class="IconContent" style=" position: absolute">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/security.png" alt="Ah shit lost it again">
            <h1 class="ServiceText" style=""> Security Services</h1>
            <h3 class="Fluff"> Protect your systems and data with <br> right expert advice</h3>
          </div>
        </router-link>

        <router-link  to="/OurServices#ItemThree">
          <div id="Disaster-Content" class="IconContent" style="position: absolute">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/disasterRecovery.png" alt="Ah shit lost it again">
            <h1 class="ServiceText" style=""> Disaster Recovery </h1>
            <h3 class="Fluff"> Backup and recovery, we make sure no <br> matter what your data is safe</h3>
          </div>
        </router-link>

        <router-link  to="/OurServices#ItemOne">
          <div id="Systems-Content" class="IconContent"  style=" position: absolute">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/computerSystems.png" alt="Ah shit lost it again">
            <h1 class="ServiceText" style=""> Computer Systems </h1>
            <h3 class="Fluff"> Change from outdated technology <br>to new more productive systems</h3>
          </div>
        </router-link>

        <router-link  to="/OurServices#ItemEight">
          <div id="Cloud-Content" class="IconContent"  style=" position: absolute">
            <img class="BorderY" src="../assets/images/IconBorderY.png" alt="Ah shit lost it again" style="">
            <img class="BorderX" src="../assets/images/IconBorderX.png" alt="Ah shit lost it again" style="">
            <img class="SVGimage" src="../assets/images/svg/cloudComputing.png" alt="Ah shit lost it again">
            <h1 class="ServiceText" style=""> Cloud computing </h1>
            <h3 class="Fluff"> Simplify your IT systems with the <br>adaptive capabilities of a Cloud solution</h3>
          </div>
        </router-link>
      </div>

  </div>

</template>

<script >
    export default {
        name: "Icons",

    }
</script>

<style>
  #ServiceBackImage {
    width: 100%;
    height: 100%;
  }

  #ServiceImage {
    width: 100%;
    height: 100%;
  }

  :root {
    --aspectRatio: 33%

  }
  .BorderY {
    position: absolute;
    left: 8%;
    bottom: 15%;
    transition: 1s;
  }
  .BorderX {
    position: absolute;
    right: 8%;
    top: 18%;
    transition: 1s;
  }
  .SVGimage {
    margin-top: 30%;
    vertical-align: center;
    position: relative;
    height: var(--aspectRatio);
    width: calc(var(--aspectRatio)*1.23077);
    transition: 1s;
  }
  .Fluff {
    text-shadow: 0px 0px #425014;
    opacity: 0%;
    font-size: 0.8vw;
    color: slategray;
    transition: 1s;
  }
  h1 {
    transition: 1s;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    color: white;
    font-size:  1.5vw;
  }
  h6 {
    transform: translateY(30%);
    transition: 1s;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    color: #859E30;
    text-shadow: -2px 0px #425014;
    width: 80%;
    font-size: 7.5vw;
  }
  .ServiceText {
    position: relative;
    text-align: center;
    vertical-align: center;
    alignment: center;
    transition: 1s;
    font-family: 'Big Shoulders Text', cursive;
    font-weight: 600;
    color: white;
    font-size:  1.5vw;
  }
  .IconContent {
    z-index: 3;
    height: 16vw;
    width: 16.5vw;
    text-shadow: 2px 2px #425014;
    transition: 1s;
  }
  .IconContent:hover {
    text-shadow: 0px 5px #425014;
    cursor: pointer;
  }
  .IconContent:hover h1 {
    font-size:  1.8vw;
  }
  .IconContent:hover .SVGimage {
    margin-top: 17%;
    height: 45%;
    width: 55%;
  }
  .IconContent:hover .Fluff {
     opacity: 99%;
   }
  .IconContent:hover .fluff {
    opacity: 99%;
  }
  .IconContent:hover, .Fluff {
    opacity: 99%;
  }
  .IconContent:hover, .fluff {
    opacity: 99%;
  }
  .IconContent:hover .BorderY {
    left: -1%;
    bottom: -1%;

  }
  .IconContent:hover .BorderX {
    right: 0;
    top: 0;
  }
  .BorderX, .BorderY {
    height: 45%;
    width: 45%
  }

  #Server-Content {
    right: 15%; top:7%;
  }
  #Networking-Content {
    right: 21%; top:47%;
  }
  #Security-Content {
    right: 37%; top:7%;
  }
  #Disaster-Content {
    right: 42%; top:47%;
  }
  #Systems-Content {
    right: 58%; top:7%;
  }
  #Cloud-Content {
    right: 63%; top:47%;
  }

  @media (max-width:800px){
    #ServiceImage {
      width: 95%;
      height: 60vh;
    }
    .IconContent {
      z-index: 3;
      height: 29vw;
      width: 27vw;
      text-shadow: 2px 2px #425014;
      transition: 1s;
    }
    :root {
      --aspectRatio: 40%
    }
    .BorderX, .BorderY {
      height: 35%;
      width: 35%
    }
    h1 {
      transition: 1s;
      font-family: 'Big Shoulders Text', cursive;
      font-weight: 600;
      color: white;
      font-size:  2.5vw;
    }
    .Fluff {
      text-shadow: 0px 0px #425014;
      opacity: 0%;
      font-size: 1.8vw;
      color: slategray;
      transition: 1s;
    }
    .IconContent:hover h1 {
      font-size:  3vw;
    }
    #Server-Content {
      right: 12%; top:7%;
    }
    #Networking-Content {
      right: 18%; top:47%;
    }
    #Security-Content {
      right: 38%; top:7%;
    }
    #Disaster-Content {
      right: 43%; top:47%;
    }
    #Systems-Content {
      right: 64%; top:7%;
    }
    #Cloud-Content {
      right: 69%; top:47%;
    }
  }
  @media (max-width:550px){
    .IconContent {
      z-index: 3;
      height: 45vw;
      width: 40vw;
      text-shadow: 2px 2px #425014;
      transition: 1s;
    }
    :root {
      --aspectRatio: 40%
    }
    .BorderX, .BorderY {
      height: 35%;
      width: 35%
    }
    h1 {
      transition: 1s;
      font-family: 'Big Shoulders Text', cursive;
      font-weight: 600;
      color: white;
      font-size:  4.5vw;
    }
    .Fluff {
      text-shadow: 0px 0px #425014;
      opacity: 0%;
      font-size: 2.8vw;
      color: slategray;
      transition: 1s;
    }
    .IconContent:hover h1 {
      font-size:  5vw;
    }
    #Server-Content {
      right: 14%; top:7%;
    }
    #Networking-Content {
      right: 20%; top:47%;
    }
    #Security-Content {
      right: 50%; top:7%;
    }
    #Disaster-Content {
      right: 54%; top:47%;
    }
    .BorderX, .BorderY {
      height: 25%;
      width: 25%
    }







    #Systems-Content {
      right: 200%; top:7%;
    }
    #Cloud-Content {
      right: 200%; top:47%;
    }






    .ServiceTag {
      float: right;
      transition: 1s;
      text-align: center;
      margin-left: auto;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 63px;
      color: #495d68;
      transform: translate(-5px, 65px);
    }
    .AllServices_ {
      margin-top: 6%;
      height: 60%;
      transition: 1s;
      float: left;
    }
    .ServiceDiv_:hover .AllServices_ {
      height: 62%;
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
      font-size: 65px;
    }
    .ServiceDiv_ {
      transition: 1s;
      margin: 20px; height: 200px; width: 550px; display: inline-block; position: relative
    }
    .ServiceDiv_:hover {
      background: rgba(100%, 100%, 100%, 0.2);
      cursor: pointer;
    }





  }

</style>
