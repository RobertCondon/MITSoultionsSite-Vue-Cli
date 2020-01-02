<template>
    <div style="background-color: #dadbe0; padding-bottom: 100px">
      <h1 class="SectionTitle"> Service Level Packages (SLA) </h1>
      <div style="width: 100%; height: 10vw"></div>
      <transition name="PackageAniLeft" :key="Packages">
        <div id="PackageBronze" v-if="Packages" style="" class="Package">
          <div style="background-color: #cdced3;">
            <h1 class="PackageTitle" style=" text-shadow: #F7C59F 2.5px 1.5px"> Bronze </h1>
            <h4>Understand Whats Going On</h4>
          </div>
          <div style="background-color: #d6d7dc; margin-top: -10px;">
            <h4 style="padding-top: 15px" class="PackageFeature"> Proactive monitoring </h4>
            <h4 style="padding-bottom: 15px" class="PackageFeature"> Formalised system status reporting </h4>
          </div>
          <div style="background-color: #cdced3; padding: 20px;  margin-top: -10px;">
            <h1 class="PackagePrice"> Single Payment </h1>
          </div>
        </div>
      </transition>
      <div id="Gold" class="Package">
        <div style="background-color: #cdced3;">
          <h1 class="PackageTitle" style="text-shadow: #E1CE7A 2.5px 1.5px"> Gold </h1>
          <h4>Full 24/7 Support</h4>
        </div>
        <div style="background-color: #d6d7dc; margin-top: -10px;">
          <h4 style="padding-top: 15px" class="PackageFeature"> 24/7 break/fix support </h4>
          <h4 class="PackageFeature"> Agreed response times </h4>
          <h4 class="PackageFeature"> Formalised disaster recovery planning </h4>
          <h4 style="padding-bottom: 15px" class="PackageFeature"> Quarterly updated images of critical computers held at MIT </h4>
        </div>
        <div style="background-color: #cdced3; padding: 20px;  margin-top: -10px;">
          <h1 class="PackagePrice"> Monthly Payments </h1>
        </div>
      </div>
      <transition name="PackageAniRight" :key="Packages">
        <div v-if="Packages" id="PackageSliver" style="" class="Package">
          <div style="background-color: #cdced3;">
            <h1 class="PackageTitle" style="text-shadow: #D8DBE2 2.5px 1.5px"> Sliver </h1>
            <h4>Critical Support</h4>
          </div>
          <div style="background-color: #d6d7dc; margin-top: -10px;">
            <h4 style="padding-top: 15px" class="PackageFeature"> Proactive monitoring </h4>
            <h4 class="PackageFeature"> Formalised system status reporting </h4>
            <h4 style="padding-bottom: 15px" class="PackageFeature"> Constant support for one key system/computer </h4>
          </div>
          <div style="background-color: #cdced3; padding: 20px;  margin-top: -10px;">
            <h1 class="PackagePrice"> Monthly Payments </h1>
          </div>
        </div>
      </transition>
      <div class="BreakFix">
        <div class="BreakFixContent">
          <h1 class="BreakFixIntro"> For a more flexibilty or as a sumplment to our plans we have<br></h1>
          <div class="ServiceDiv_SLA" style="position: relative; margin: auto" @click="ServiceClick(1)">
            <div class="IconBottomRight"></div>
            <div class="IconBottomLeft"></div>
            <div class="IconTopRight"></div>
            <div class="IconTopLeft"></div>
            <h1 class="BreakFixTitle"> Break/Fix Support </h1>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
  import JQuery from 'jquery';
  let $ = JQuery;
    export default {
        name: "SLAPackages",
      data () {
        return {
          Packages: false,
          ReadMoreArray: [
            {ReadBool: false, TransitionBool: "Divder1", Line: "Line1", Arrow: "Arrow1", DaddyNode: "#ItemOne", Top: 150},
            {ReadBool: false, TransitionBool: "Divder2", Line: "Line2", Arrow: "Arrow2", DaddyNode: "#ItemTwo", Top:-300},
            {ReadBool: false, TransitionBool: "Divder3", Line: "Line3", Arrow: "Arrow3", DaddyNode: "#ItemThree", Top: -300},
            {ReadBool: false, TransitionBool: "Divder4", Line: "Line4", Arrow: "Arrow4", DaddyNode: "#ItemFour", Top: -300}
          ]
        }
      },
      mounted() {
        var self = this;
        this.$nextTick(function(){
          window.addEventListener("scroll", function(){
            self.Scrolled = document.documentElement.scrollTop;
             if(document.documentElement.scrollTop >= 800) {
               self.Packages = true;
            }


          })
        })
      },

      methods: {
        ServiceClick(Int) {
          $('html, body').animate({
            scrollTop: $(this.ReadMoreArray[Int].DaddyNode).offset().top + this.ReadMoreArray[Int].Top
          }, 2000);
        }
      }


    }
</script>

<style scoped>
  #PackageBronze {
    margin-left: 10%
  }
  #PackageSliver {
    margin-right: 10%
  }
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 25px;
    padding: 5px;
  }

  .BreakFix {

    padding-top: 100px;
    width: 100%
  }
  .BreakFixContent {
    background-color: #d6d7dc;
  }

 .PackageFeature {
   display: list-item;
   list-style-type: disc;
   list-style-position: inside;
   text-align: left;
   font-family: 'Montserrat', sans-serif;
   font-weight: 400;
   font-size: 20px;
   padding: 5px;
   color: #495d68;
 }
.PackagePrice {
  width: 100%;
  font-size: 25px;
  font-family: 'Bebas Neue', cursive;
  color: #495d68;
}
.PackageTitle {
  width: 100%;
  font-family: 'Bebas Neue', cursive;
  color: #495d68;
}

 .Package {
   display: inline-block;
   width: 25%;
   position: relative;
   z-index: 0;
   box-shadow: 0px 0px 20px #888888;
   transition: 0.8s;
 }
 .Package:hover {
   transform: scale(1.05, 1.05);
   z-index: 3;
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
.BreakFixIntro {
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 40px;
  color: #495d68;
}
.BreakFixTitle {
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 50px;
  color: #495d68;
}

  #Gold {

    z-index: 1;
  }


 .PackageAniRight-enter-active, .PackageAniRight-leave-active {
   transition: all .5s;
 }
 .PackageAniLeft-enter-active, .PackageAniLeft-leave-active {
   transition: all .5s;
 }
 .PackageAniRight-enter, .PackageAniRight-leave-to /* .fade-leave-active below version 2.1.8 */ {
   transform: translateX(-50%);
   opacity: 0;
 }
 .PackageAniLeft-enter, .PackageAniLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
   transform: translateX(50%);
   opacity: 0;
 }

  .IconBottomRight {
    transition: 0.7s;
    position: absolute;
    border-bottom: 2px solid #859e30;
    border-right: 2px solid #859e30;
    height: 5%;
    width: 3%;
    bottom: 0;
    right: 0;
  }
  .IconBottomLeft {
    transition: 0.7s;
    position: absolute;
    border-bottom: 2px solid #859e30;
    border-left: 2px solid #859e30;
    height: 5%;
    width: 3%;
    bottom: 0;
    left: 0;
  }
  .IconTopRight {
    transition: 0.7s;
    position: absolute;
    border-top: 2px solid #859e30;
    border-right: 2px solid #859e30;
    height: 5%;
    width: 3%;
    top: 0;
    right: 0;
  }
  .IconTopLeft {
    transition: 0.7s;
    position: absolute;
    border-top: 2px solid #859e30;
    border-left: 2px solid #859e30;
    height: 5%;
    width: 3%;
    top: 0;
    left: 0;
  }

  .ServiceDiv_SLA {
    z-index: 3;
    display: inline-block;
    padding: 10px 5px 0px 5px;
    margin-bottom: -5px;
    transition: 1s;
  }

  .ServiceDiv_SLA:hover {
    background: rgba(100%, 100%, 100%, 0.2);
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }

  .ServiceDiv_SLA:hover .IconTopLeft {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_SLA:hover .IconTopRight {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_SLA:hover .IconBottomLeft {
    height: 50%;
    width: 50%;
  }
  .ServiceDiv_SLA:hover .IconBottomRight {
    height: 50%;
    width: 50%;
  }
  @media (max-width:800px){
    .PackageTitle {
      font-size: 13vw;
    }

    #PackageBronze {
      margin-left: 0
    }
    #PackageSliver {
      margin-right: 0
    }
    .Package {
      width: 30%;
    }
    .SectionTitle {
      width: 100%;
      padding-top: 20px;
      padding-left: 0px;
      padding-bottom: 60px;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 13vw;
      color: #495d68;
      position: relative;
      float: none;
      text-align: center;
      border-bottom: 3px dotted dimgray;
    }
    @media (max-width:600px){
      .Package {
        width: 90%;
        margin: 5%;
      }
      #PackageBronze {
        margin-left: 5%
      }
      #PackageSliver {
        margin-right: 5%
      }
    }
  }

</style>
