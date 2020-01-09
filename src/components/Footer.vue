<template>

  <div class="wrapper" style="position: relative;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

        <!--<p style="float:left; padding-top: 20px; text-align: left;">Harnessing the potential of technology to help people and businesses work smarter, faster and better</p>-->




    <div class="background">


      <div  class="content-container">


        <img v-if="!isMobile" id="logo" src="../assets/images/MIT_images/MID Circle_Transparent.png" alt="">

        <div v-if="!isMobile" class="Vision">
          <div class="columnTitle"><span>Our</span> <span style="color: #859E30;"> Mission</span></div><br>
          <p class="statement">Harnessing the potential of technology to help people and businesses work smarter, faster and better</p>


        </div>


        <!--<div class="column3">-->
          <!--<ul class="itemList" style="top: 90%;">-->
            <!--<li>Working Hours</li><br>-->
            <!--<li>Mon-Fri:   08:30 - 17:00</li><br>-->
            <!--<li>Weekends:   On-Call</li><br>-->

          <!--</ul>-->
        <!--</div>-->


        <div class="ContactUs" >
          <div class="columnTitle"><span>Contact</span> <span style="color: #859E30;">Us</span></div>
          <ul class="itemList" style="list-style-type: none;">
            <li><i class="fa fa-phone" style="font-size: 26px; padding: 0 15px 0 5px;"></i>0800 648 787<br>(03) 381 0333</li><br><br>
            <li ><i class="fa fa-map-marker" style="font-size: 30px; padding: 0 12px 0 8px"></i>Unit 2, 58-56 Carmen Road
              Hornby, Christchurch 8042</li><br><br>
          <li><i class="fa fa-envelope-open" style="font-size: 24px; padding:5px 12px 0 5px"></i>info@manageit.net.nz<br>sales@manageit.net.nz</li><br>

          </ul>
        </div>






      </div>


      <div class="bottom-bar" style="font-size: 2.0vw; top:100px; text-align: center;">Copyright © 2019 manageIT. All Rights Reserved. Designed by In House Web.</div>

    </div>

  </div>



</template>





<script>
  export default {
    name: "Footer",
    data() {
      return{

        isMobile: false,


      }

    },
    mounted(){
      this.onResize();
      window.addEventListener('resize', this.onResize, {passive: true});

      var e = document.getElementById('logo');
      var spin = false;

      var spinner = function(){
        e.classList.toggle('running', spin);
        if (spin) setTimeout(spinner, 2175);
      };

      e.onmouseover = function(){
        spin = true;
        spinner();
      };

      e.onmouseout = function(){
        spin = false;
      };
    },
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 800
      }
    }

  }




</script>







<style >
  .Vision{
    position: relative;
    float: left;
    width: 30%;
    padding-left: 50px;
    top:50%;
  }

  .background{
    height: 300px;
    background: rgb(46,46,58);
    background: radial-gradient(circle, rgba(46,46,58,1) 0%, rgba(82,82,82,1) 14%, rgba(46,46,58,1) 100%);
    padding: 25px 25px 15px 25px;
    width: 100%;
    position: relative;
  }

  .statement{
    text-align: left;
    padding-top: 40px;
    font-style: italic;

  }
  .ContactUs{
    display: inline-block;
    height:90%;
    width: 20%;
    padding: 0 150px 0 0;
    float: right;
    transition: 0.7s;
  }
  #logo{
    height: 225px;
    width: 225px;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    left:-5%;
    position: relative;
    animation: popOutReverse 0.2s ease 0s forwards;

  }
  #logo:hover{
    animation: popOut 0.2s ease 0s forwards;
  }
  .content-container{
    color:#B0B2B8;
    width: 100%;
    height: 150px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    z-index: 1;

  }
  .content-container li:hover{
    animation: ease textScale 0.2s forwards;

  }
  .content-container li{
    padding: 10px 0 10px 0;
    text-align: initial;
    width: 350px;
    position: absolute;
    line-height: 1.2;
    animation: ease textScaleReverse 0.2s forwards;
    padding-left: 1em;
    text-indent: -1.3em;
  }
  .content-container i{
    position: relative;
    top: 12px;
  }
  .bottom-bar{
    top:30%;
    margin-right: auto;
    margin-left: auto;
    width: 600px;
    position: relative;
    height: 20px;
    color: #7D7E75;

  }
  .columnTitle{
    font-family: 'Trebuchet MS', 'Helvetica', sans-serif;
    font-size: 36px;
    height: 50px;
    padding-bottom: 0px;
    position: absolute;

  }
  .itemList {
    position: absolute;
    padding-top: 2%;
    top: 40%;
    width: auto;
  }


  @media (max-width:800px){
    .ContactUs{
      display: inline-block;
      height:90%;
      width: 20%;
      padding: 0 50% 0 0;
      float: none;
    }
    @media (max-width:400px){
      .ContactUs{
        display: inline-block;
        height:90%;
        width: 20%;
        padding: 0 95% 0 0;
        float: none;
      }
    }
  }
  
  @keyframes textScale {

    from{

      font-size: 16px
    }

    to {

      font-size: 18px;
    }
  }
  @-webkit-keyframes textScale {
    from{
      font-size: 16px
    }

    to {
      font-size: 18px;
    }
  }
  @keyframes textScaleReverse {

    from{

      font-size: 18px
    }

    to {

      font-size: 16px;
    }
  }
  @-webkit-keyframes textScaleReverse {
    from{
      font-size: 18px
    }

    to {
      font-size: 16px;
    }
  }

  @keyframes popOut {

    from{
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 18px;*/
    }
  }
  @-webkit-keyframes popOut {

    from{
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 18px;*/
    }
  }

  @keyframes popOutReverse {
    from{
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 18px;*/
    }
  }
  @-webkit-keyframes popOutReverse {
    from{
      -webkit-transform: scale3d(1.2,1.2,1.2);
      transform: scale3d(1.2, 1.2, 1.2);
      /*font-size: 14px*/
    }

    to {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1, 1, 1);
      /*font-size: 18px;*/
    }
  }

  @-webkit-keyframes itemBounce {
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, -3px, 0);
      transform: translate3d(0, -3px, 0);
    }

    70% {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, -1px, 0);
      transform: translate3d(0, -1px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -2px, 0);
      transform: translate3d(0, -2px, 0);
    }
  }

  @keyframes itemBounce {
    from,
    20%,
    53%,
    80%,
    to {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    70% {
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      -webkit-transform: translate3d(0, -1px, 0);
      transform: translate3d(0, -1px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -2px, 0);
      transform: translate3d(0, -2px, 0);
    }
  }



  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
</style>
