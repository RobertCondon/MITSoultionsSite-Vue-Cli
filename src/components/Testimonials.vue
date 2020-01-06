<template>

  <div class="wrapper" style="position: relative; height: 100%;">
    <div style="position: relative;" class="testimonialBackground">
    <div style="position: relative;" class="testimonialBackground">
        <div style="height: 15vh"></div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">








            <i class="arrow animated left" style="left: 15%;
                border: solid black;
                border-width: 0px 7px 7px 0;
                 display: inline-block;
                 padding: 10px;

                 height: 50px;
                 width: 50px;
                 float: left;
                 position: absolute;
                 top: 450px" v-on:click="previousItem"></i>



            <i class="arrow animated right" style="right: 15%;
                    border: solid black;
                     border-width: 0px 7px 7px 0;
                     display: inline-block;
                     padding: 10px;
                     height: 50px;
                     width: 50px;
                     float: right;
                    top: 450px;
                    position: absolute;"
                     v-on:click="nextItem" ></i>




          <div class="Title" style="margin-left: auto; margin-right: auto;">
          <span style="font-family: 'Martel', serif; font-weight: bolder; font-size: 75px; opacity: 100%;">Testimonials</span>
          </div>

          <div id="testimonials-container"
                 style="
                 width: 60%;
                 max-height: 1000px;
                 border-style: inset;
                 border-radius: 50px 0px 50px 0px;
                 border-width: 15px;
                 border-color: #859e30;
                 margin-left: auto;
                 margin-right: auto;
                 transition: opacity 500ms ease 0s;
                 background-color: white;
                 z-index: -1;">

                <div id="testimonials"
                     style="text-align: center; padding: 15px; color: #272727;"
                      >

                  <h2><p style="text-align: center; font-family: 'Lora',serif;">{{testlist[i].short}}</p></h2>
                  <p v-bind:key="quote" v-for="quote in testlist[i].quote" style="font-family: 'Martel', serif; text-align: left; color: #555; " >{{quote}}</p>
                  <p style="text-align: center; font-family: 'Georgia',serif; font-size: 26px; ">{{testlist[i].author}}</p>
                  <img :src="testlist[i].logo" style="width: auto; height: auto;">
                </div>

              </div>
        </div>




    </div>




  </div>

</template>

<script>

  import furnitureSolutions from "../assets/images/ClientLogos/FurnitureSolutionsLogo.png";
  import foxAndAssociates from "../assets/images/ClientLogos/FoxAndAssociates.jpg";
  import wildBerries from "../assets/images/ClientLogos/WildBerries.jpg";
  import kannangaraThomson from "../assets/images/ClientLogos/KannangaraThomson.jpg";
  import windowTreatments from "../assets/images/ClientLogos/WindowTreatments.jpg";
  import melrayElectric from "../assets/images/ClientLogos/MelrayElectric.jpg";
  import shantyTown from "../assets/images/ClientLogos/ShantyTown.jpg";
  import cochranes from "../assets/images/ClientLogos/Cochranes.jpg";

  export default {
    name: "Testimonials",
    data() {
      return{
        testlist: [
          {
            short: "Working with Manage IT Business Solutions Ltd (MIT) since 2009.",
            quote: [
              "MIT have proven to be a very professional, competent and innovative ICT business that has been able to provide concise and suitable solutions for our business.  One of the main advantages with MIT is their ability to listen to what our business requires today and for the future and then develop a plan with our team to meet those requirements.",
              "MIT have supported our business from general day-to-day maintenance through to complex IT challenges and their knowledge of technology and how this fits within our business has proven to be a great asset to our company.",
              "We are happy to provide this recommendation on Manage IT Business Solutions Ltd and recommend them to all our partners and customers."
              ],
            author:"Furniture Solutions NZ Ltd ",
            stars: 5,
            logo: furnitureSolutions
          },
          {
            short:"Incredibly responsive and professional",
            quote:[
              "2 Wild berries Ltd have been dealing with  MIT for many years. We have found MIT to be incredibly responsive, professional in their approach and advice, even with the smallest of issues.",
              "Having dealt with MIT in previous corporate business environments, we have found MIT have managed intricate technical issues with various other suppliers and internal customers with diplomacy, always ensuring a win/win and the best outcome for our business.",
              "The staff at MIT relate well to our employees and are viewed as part of our wider team."
            ],
            author: "2 Wild Berries Ltd",
            stars: 5,
            logo: wildBerries
          },
          {
            short:"Speed, friendliness and Professionalism",
            quote:[
              "ManageIT have been our IT provider of choice since the creation of our firm more than nine years ago.",
              "From installing or upgrading our servers to adding new users the team at ManageIT have always made us feel as though we are their only client through their speed, friendliness and professionalism in getting the job done.",
              "We are very pleased to have ManageIT as part of our firm and have no hesitation in recommending Tony and his team to anyone."],
            author: "Practice Manager",
            stars: 5,
            logo: kannangaraThomson
          },
          {
            short:"Our preferred ICT partner for the last 13 years since 2004.",
            quote:[
              "They have proven to be a very professional, competent and innovative ICT support for our business.  From general day-to-day maintenance through to complex IT challenges, their knowledge of technology and how this fits within our business has proven to be a great asset to our company.",
              "They will always go the extra mile to get a solution to work for us e.g. we are looking to move to a new data centre this year and wanted a point to point dark fibre connection.  Other suppliers either couldn’t provide this solution or wanted a ransom to pay for it.  Tony contacted Enable Networks and Manage IT are now a Retail Service Provider enabling a cost effective solution work for us.",
              "Being a small team, I have got to know them all personally over the years and they are a great tight-knit team.  They are easy to get hold of and always happy to give advice, often without charge.  The engineers are very down to earth and relate easily with our staff.",
              "We are very pleased to provide this testimonial for Manage IT and would recommend them to all our partners and customers."
            ],
            author: "Keith Shaw - Financial Controller",
            stars: 5,
            logo: windowTreatments
          },
          {
            short:"Offering the best responsive support, adaptability and professional courtesy",
            quote: [
              "Shantytown Heritage Park has been a client of Manage IT for 10 years. Shantytown needed a provider of IT support and services that would meet its needs, and Manage IT was recommended.",
              "Manage IT scope and provide Shantytown's hardware and software, manage and maintain the server - its capacity and performance, system backups, troubleshooting and are generally our go-to team for all aspects of IT support.",
              "They offer Shantytown the best in responsive support, adaptability and professional courtesy. They communicate well, explain any technical issues in everyday language and offer solutions and alternatives to potential difficulties. They take the strategic long term view rather than look for quick wins, and can anticipate when issues are likely to be encounter or new products better suited to our needs should be considered.",
              "Manage IT are aware that Shantytown faces unique challenges with limited and inconsistent internet, power and telecommunications services in a rural setting, yet require 7 days a week access to run the business, and Manage IT work to ensure this is achieved.",
              "At Shantytown, we know that Manage IT have our back, their advice and professional service delivery is outstanding and most of all we know that we can be confident that our systems are maintained, up to date, secure and continually monitored.",
              "Shantytown would not hesitate to recommend Manage IT to any business that needs excellent IT management and support."
            ],
            author: "Andrea Forrest - CEO",
            stars: 5,
            logo: shantyTown
          },
          {
            short:"Highly efficient and knowledgeable friendly staff.",
            quote:[
              "Manage IT have been looking after our IT needs since 2008. During this time they have looked after our routine maintenance and installs, including two new servers. They are highly efficient and have a knowledgeable friendly staff."
            ],
            author: "Glenn Connor - General Manager",
            stars: 5,
            logo: melrayElectric
          },
          {
            short:"Quick and robust solutions",
            quote:[
              "We have used MIT as IT consultants for almost a decade.  Obviously our requirements have changed significantly over this time – MIT have always provided quick and robust solutions to these challenges.  We’ve got no hesitation in recommending them to others."
            ],
            author: "Michael Martin",
            stars: 5,
            logo: foxAndAssociates
          },
          {
            short:"A great understanding of our systems",
            quote:[
              "Cochranes have been dealing with Manage IT since 2006 and find them very approachable with quick response to any problems that arise. Chris has a great understanding of our systems and offers good advice when we need it. We would highly recommend Manage IT to other business’s"
            ],
            author: "Anita Milne",
            stars: 5,
            logo: cochranes
          },
        ],
        i: 0,
        arrowHeight: 500,
      }
    },
    mounted: function(){
    },
    methods: {
      nextItem: function() {
        this.i += 1;
        if (this.i >= this.testlist.length) {
          this.i = 0
        }

      },
      previousItem: function() {
        this.i -= 1;
        if (this.i <= -1) {
          this.i = this.testlist.length-1
        }
      },
    },
  }
</script>




<style>


  .wrapper{
    margin-left: auto;
    margin-right: auto;
  }
  .arrow{
    cursor: pointer;
    border-radius:0px 20px;
    top: 200px;

  }
  .arrow.animated.right{
    transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -ms-transform:  rotate(-45deg);
  }
  .arrow.animated.left{
    transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      -ms-transform:  rotate(135deg);
  }
  .arrow.animated.right:hover{

    animation-play-state: running;
    animation-duration: 0.15s;
    animation-timing-function: linear;
    animation-name: colorChangeRight;
    animation-fill-mode: forwards;
    transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -ms-transform:  rotate(-45deg);
  }
  .arrow.animated.left:hover{

    animation-play-state: running;
    animation-duration: 0.25s;
    animation-timing-function: linear;
    animation-name: colorChangeLeft;
    animation-fill-mode: forwards;
    transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      -ms-transform:  rotate(135deg);
  }
  .arrow.animated.left:active{
    animation-name: arrowClickedLeft;
    animation-delay: 0s;
    animation-duration: 0.05s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

  }
  .arrow.animated.right:active{
    animation-name: arrowClickedRight;
    animation-delay: 0s;
    animation-duration: 0.05s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }





  @keyframes colorChangeLeft {
      0% {
          border-color: #2e2e3a;
      }
      100% {
          border-color: #859e30;
      }
      from {
          -ms-transform: scale3d(1, 1, 1) rotate(135deg);
          -webkit-transform: scale3d(1, 1, 1) rotate(135deg);
          transform: scale3d(1, 1, 1)  rotate(135deg);
      }

      50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05) rotate(135deg);
          transform: scale3d(1.05, 1.05, 1.05)rotate(135deg);
          -ms-transform: scale3d(1.05, 1.05, 1.05)rotate(135deg);
      }

      to {
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(135deg);
          transform: scale3d(1.1, 1.1, 1.1) rotate(135deg);
          -ms-transform: scale3d(1.1, 1.1, 1.1) rotate(135deg);
      }
  }


  @keyframes colorChangeRight {
      0% {
          border-color: #2e2e3a;
      }
      100% {
          border-color: #859e30;
      }
      from {
          -webkit-transform: scale3d(1, 1, 1) rotate(-45deg);
          transform: scale3d(1, 1, 1)  rotate(-45deg);
          -ms-transform: scale3d(1, 1, 1)  rotate(-45deg);
      }

      50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05)rotate(-45deg);
          transform: scale3d(1.05, 1.05, 1.05)rotate(-45deg);
          -ms-transform: scale3d(1.05, 1.05, 1.05)rotate(-45deg);
      }

      to {
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);
          transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);
          -ms-transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);
      }
  }

  @keyframes arrowClickedLeft {
      from {

          transform: scale3d(1.1, 1.1, 1.1) rotate(135deg);
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(135deg);
          -ms-transform:  scale3d(1.1, 1.1, 1.1) rotate(135deg);

      }

      50% {
          -webkit-transform: scale3d(1, 1, 1) rotate(135deg);
          transform: scale3d(1, 1, 1) rotate(135deg);
          -ms-transform: scale3d(1, 1, 1) rotate(135deg);
          border-radius: 0 30px 0px 30px;
      }

      to {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(135deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate(135deg);
          -ms-transform: scale3d(0.9, 0.9, 0.9) rotate(135deg);
          border-radius: 0 30px 0 30px;
      }
  }
  @keyframes arrowClickedRight {
      from {
          -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);
          transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);
          -ms-transform: scale3d(1.1, 1.1, 1.1) rotate(-45deg);

      }

      50% {
          -webkit-transform: scale3d(1, 1, 1) rotate(-45deg);
          transform: scale3d(1, 1, 1) rotate(-45deg);
          -ms-transform: scale3d(1, 1, 1) rotate(-45deg);
          border-radius: 0 30px 0px 30px;
      }

      to {
          -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(-45deg);
          transform: scale3d(0.9, 0.9, 0.9) rotate(-45deg);
          -ms-transform: scale3d(0.9, 0.9, 0.9) rotate(-45deg);
          border-radius: 0 30px 0 30px;
      }
  }
  


  .testimonialBackground{


    background:
      linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, .3) 10%),
      linear-gradient(90deg, transparent 10%, rgba(255, 255, 255, .4) 20%),
      linear-gradient(90deg, transparent 15%, rgba(255, 255, 255, .5) 30%);
      background-color: #dadbe0;
      background-size: 50px 50px;
      padding: 10% 0 5% 0;

  }
  #testimonials-container
  {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  .Title{
    background-image: url("../assets/images/white_cloud.png");
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    font-size: 1.2rem;
    line-height: 1.3;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 150px;
    padding: 15px;
    position: relative;


  }

</style>
