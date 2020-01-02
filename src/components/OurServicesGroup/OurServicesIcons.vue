<template>
    <div style="background-color: #dadbe0;">
      <h1 class="SectionTitle"> Our Services</h1>

      <div class="ServiceDiv_" @click="ServiceClick(1)" >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
          <img class="AllServices_" style="" src="../../assets/images/svg/breakfixServices.png" alt="Ah shit lost it again">
          <h1 class="ServiceTag" style="  "> Break/Fix <br> Support </h1>
        </div>
      </div>

      <div class="ServiceDiv_" @click="ServiceClick(6)"  >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
          <img class="AllServices_" style="" src="../../assets/images/svg/security.png" alt="Ah shit lost it again">
          <h1 id="SecurityText" class="ServiceTag" style="  "> IT Security </h1>
        </div>
      </div>

      <div class="ServiceDiv_" @click="ServiceClick(0)" >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
          <img class="AllServices_"   src="../../assets/images/svg/computerSystems.png" alt="Ah shit lost it again">
          <h1 class="ServiceTag" style=" "> Computer Systems </h1>
        </div>
      </div>
      <div class="ServiceDiv_" @click="ServiceClick(2)"  >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
        <img class="AllServices_" style=" " src="../../assets/images/svg/ServerManagement.png" alt="Ah shit lost it again">
        <h1  class="ServiceTag" style="  "> Server <br> Management </h1>
        </div>
      </div>

      <div class="ServiceDiv_" @click="ServiceClick(3)"  >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
        <img class="AllServices_" src="../../assets/images/svg/disasterRecovery.png" alt="Ah shit lost it again">
        <h1 class="ServiceTag" style=" "> Disaster Recovery </h1>
        </div>
      </div>

      <div class="ServiceDiv_" style="margin: 20px;" @click="ServiceClick(4)" >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
        <img class="AllServices_" style="" src="../../assets/images/svg/networking.png" alt="Ah shit lost it again">
        <h1 id="NetworkingText" class="ServiceTag" style=""> Networking  </h1>
        </div>
      </div>

      <div class="ServiceDiv_" @click="ServiceClick(2)">
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
        <img class="AllServices_" style="" src="../../assets/images/svg/databaseManagement.png" alt="Ah shit lost it again">
        <h1  class="ServiceTag" style="">Database <br> Management </h1>
        </div>
      </div>

      <div class="ServiceDiv_" @click="ServiceClick(7)"  >
        <div class="IconBottomRight"></div>
        <div class="IconBottomLeft"></div>
        <div class="IconTopRight"></div>
        <div class="IconTopLeft"></div>
        <div class="ContentForIcons">
          <img class="AllServices_" style="" src="../../assets/images/svg/cloudComputing.png" alt="Ah shit lost it again">
          <h1 class="ServiceTag" style=""> Cloud <br> computing </h1>
        </div>
      </div>
      <div style="height: 60px"></div>
    </div>
</template>

<script>
  import JQuery from 'jquery';
  let $ = JQuery;
    export default {
      name: "OurServicesIcons",
      data() {
        return {ReadMoreArray: [
            {ReadBool: false, TransitionBool: "Divder1", Line: "Line1", Arrow: "Arrow1", DaddyNode: "#ItemOne", Top: 150},
            {ReadBool: false, TransitionBool: "Divder2", Line: "Line2", Arrow: "Arrow2", DaddyNode: "#ItemTwo", Top:-300},
            {ReadBool: false, TransitionBool: "Divder3", Line: "Line3", Arrow: "Arrow3", DaddyNode: "#ItemThree", Top: -300},
            {ReadBool: false, TransitionBool: "Divder4", Line: "Line4", Arrow: "Arrow4", DaddyNode: "#ItemFour", Top: -400},
            {ReadBool: false, TransitionBool: "Divder5", Line: "Line5", Arrow: "Arrow5", DaddyNode: "#ItemFive", Top: -400},
            {ReadBool: false, TransitionBool: "Divder6", Line: "Line6", Arrow: "Arrow6", DaddyNode: "#ItemSix", Top: -400},
            {ReadBool: false, TransitionBool: "Divder7", Line: "Line7", Arrow: "Arrow7", DaddyNode: "#ItemSeven", Top: -400},
            {ReadBool: false, TransitionBool: "Divder8", Line: "Line8", Arrow: "Arrow8", DaddyNode: "#ItemEight", Top: -400}
          ]
        }
      },
      methods: {
        ServiceClick(Int) {
            $('html, body').animate({
              scrollTop: $(this.ReadMoreArray[Int].DaddyNode).offset().top + this.ReadMoreArray[Int].Top
            }, 2000);
          }
      },
    }
</script>

<style scoped>
  .ServiceTag {
    transition: 1s;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 63px;
    color: #495d68;
    transform: initial;
    text-align: initial;
    float: initial;
    margin: initial;
  }
  .AllServices_ {
    margin-top: 6%;
    height: 60%;
    transition: 1s;
    float: left;
    margin-left: 20%;
  }
  .ServiceDiv_:hover .AllServices_ {
    height: 62%;
  }
  .ServiceDiv_:hover .ServiceTag {
    font-size: 65px;
  }
  .ServiceDiv_:hover .SBorderX {
    top: 5%;
    left: 2%;
  }

  .ServiceDiv_:hover .SBorderY {
    bottom: 3%;
    right: 2%;
  }

  .ServiceDiv_ {
    transition: 1s;
    margin: 20px; height: 200px; width: 550px; display: inline-block; position: relative
  }
  .ServiceDiv_:hover {
    background: rgba(100%, 100%, 100%, 0.2);
    cursor: pointer;
  }




  .IconBottomRight {
    transition: 0.7s;
    position: absolute;
    border-bottom: 1px dotted black;
    border-right: 1px dotted black;
    height: 5%;
    width: 3%;
    bottom: 0;
    right: 0;
  }
  .IconBottomLeft {
    transition: 0.7s;
    position: absolute;
    border-bottom: 1px dotted black;
    border-left: 1px dotted black;
    height: 5%;
    width: 3%;
    bottom: 0;
    left: 0;
  }
  .IconTopRight {
    transition: 0.7s;
    position: absolute;
    border-top: 1px dotted black;
    border-right: 1px dotted black;
    height: 5%;
    width: 3%;
    top: 0;
    right: 0;
  }
  .IconTopLeft {
    transition: 0.7s;
    position: absolute;
    border-top: 1px dotted black;
    border-left: 1px dotted black;
    height: 5%;
    width: 3%;
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


  #NetworkingText {
    margin-right: 40px
  }

  #SecurityText {
    margin-left: 40px; float: left
  }


  .ContentForIcons {
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-columns: 50% 50%;
    align-items:center;
    justify-content:center;
  }

  @media (max-width:800px){
    .ServiceDiv_:hover .AllServices_ {
      height: 0.1vh;
    }
    .ServiceDiv_:hover .ServiceTag {
      font-size: 1vw;
    }
    .ServiceDiv_ {
      transition: 1s;
      margin-left: 7%;  margin-right: 7%;

      height: 180px; width: 90%; display: inline-block; position: relative
    }
    .AllServices_ {
      margin-top: 50px;
      height: 90px;
      transition: 1s;
      float: left;
    }
    .ServiceTag {

      transition: 1s;

      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 9.0vw;
      color: #495d68;


    }
    #SecurityText {
      margin-left: 20%;
    }

    @media (max-width:450px){
      .ServiceDiv_ {
        transition: 1s;
        margin-left: 0;  margin-right: 0;
        margin-top: 5px; margin-bottom: 5px;
        height: 110px; width: 90%; display: inline-block; position: relative;
      }
      .AllServices_ {
        margin-top: initial;
        height: 80px;
        transition: 1s;
        float: left;
      }
      .ServiceTag {
        transition: 1s;
        font-family: 'Bebas Neue', cursive;
        font-weight: 400;
        font-size: 9.0vw;
        color: #495d68;
      }



      #NetworkingText {
        margin-right: 5px
      }

      #SecurityText {
        margin: initial;
      }

    }
  }
</style>
