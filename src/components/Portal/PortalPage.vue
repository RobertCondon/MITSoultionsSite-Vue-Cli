<template>

  <div id="PortalPage">
    <a target="_blank" rel="noopener noreferrer"  href= "http://labtech.manageit.net.nz:8040/" id="Remote">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/RemoteAccess.png" alt="None">
        <h1 class="ItemName"> Remote Access </h1>
      </div>
    </a>
    <a target="_blank" rel="noopener noreferrer"  href= "https://aus.myconnectwise.net/support/index.htm?Company=Manag31t" id="ConntectWise">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/ConnectWise.png" alt="None">
        <h1 class="ItemName"> Ticket Management </h1>
      </div>
    </a>
    <a target="_blank" rel="noopener noreferrer"  href= "https://Outlook.office365.com" id="OfficeEmail">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/OfficeEmail.png" alt="None">
        <h1 class="ItemName"> Office 365 Emails </h1>
      </div>
    </a>
    <div class="ItemHolder" id="Portal">
      <h1 id="PortalTitle">Portals</h1>
    </div>
    <a target="_blank" rel="noopener noreferrer"  href= "https://Portal.office365.com" id="OfficePortal">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/OfficePortal.png" alt="None">
        <h1 class="ItemName"> Office 365 Portal </h1>
      </div>
    </a>
    <a target="_blank" rel="noopener noreferrer"  href= "https://www.forticlient.com/downloads" id="FortiClient">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/FortiClient.png" alt="None">
        <h1 class="ItemName"> FortiClient SSL VPN </h1>
      </div>
    </a>
    <a target="_blank" rel="noopener noreferrer"  href= "https://labtech.manageit.nz" id="Labtech">
      <div class="ItemHolder" >
        <div class="ItemCircle"></div>
        <img class="Icon" src="../../assets/images/Portal/Labtech.png" alt="None">
        <h1 class="ItemName"> Labtech Agent Install </h1>
      </div>
    </a>
  </div>
</template>

<script>
    import {  TimelineMax } from "gsap"
    export default {

        data() {
            return {
                AboutUsContent: false,
            }
        },
        methods: {

        },

        computed: {

        },
        mounted() {


            //let self = this; OfficeEmail 20vw, 35vh
            var LogoStringTimeline = new TimelineMax({});
            LogoStringTimeline.to( "#PortalPage", 1, { scale: 1}).to(
                "#Portal", 0.2, { scale: 1}, '-=0.2').from(
                "#Labtech", 0.3, {x:  '-20vw', y: '-35vh', scale: 0}).to("#Labtech", 0.2, {opacity: 1}, '-=0.4').from(
                "#FortiClient", 0.3, {x:  '25vw', y: '-40vh', scale: 0}).to("#FortiClient", 0.2, {opacity: 1}, '-=0.4').from(
                "#OfficePortal", 0.3, {x:  '-30vw', scale: 0}).to("#OfficePortal", 0.2, {opacity: 1}, '-=0.4').from(
                "#OfficeEmail", 0.3, {x:  '30vw', scale: 0}).to("#OfficeEmail", 0.2, {opacity: 1}, '-=0.4').from(
                "#ConntectWise", 0.3, {x:  '-20vw', y: '35vh', scale: 0}).to("#ConntectWise", 0.2, {opacity: 1}, '-=0.4').from(
                "#Remote", 0.3, {x:  '20vw', y: '35vw', scale: 0}).to("#Remote", 0.2, {opacity: 1}, '-=0.4')
        },


    }
</script>

<style scoped>
  #PortalPage {
    z-index: 100;
    transform: scale(0);
    background-color: rgba(255,255,255,0.9);
    position: fixed;
    top: 5vh;
    left: 5vw;
    padding: 5vw;
    border-radius: 20%;
    height: 93vh;
    width: 90vw;
    color: black;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 50% 25%;
    //grid-template-rows: auto;
    grid-template-areas: "Remote Remote ConntectWise ConntectWise"
      "OfficeEmail Portal Portal OfficePortal"
      "FortiClient FortiClient Labtech Labtech";
    justify-items: center;
    align-items: center;

  }
  #Labtech {
    grid-area: Labtech;
    opacity: 0;
  }
  #FortiClient {
    grid-area: FortiClient;
    opacity: 0;
  }
  #OfficePortal {
    grid-area: OfficePortal;
    opacity: 0;
  }
  #Portal {
    transform: scale(0);
    transition: initial;
    grid-area: Portal;
    cursor: initial;
  }
  #OfficeEmail {
    grid-area: OfficeEmail;
    opacity: 0;
  }
  #ConntectWise {
    grid-area: ConntectWise;
    opacity: 0;
  }
  #Remote {
    grid-area: Remote;
    opacity: 0;
  }
  .Icon {
    max-height: 6vw;
    margin: 2vw;
    transition: 1s;
  }
  .ItemHolder:hover .ItemCircle {
    transform: scale(1);
  }
  .ItemHolder:hover {
    cursor: pointer;
  }
  #PortalTitle {
    color: black;
    font-size: 10vw;
    transform: translateY(3vh);
  }
  .ItemHolder {
    position: relative;
    transition: 1s;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 20vw;
    height: 20vw;
  }
  .ItemCircle {
    transition: 1s;
    background-color: whitesmoke;
    border-radius: 100%;
    position: absolute;
    width: 18vw;
    height: 18vw;
    top: 2%;
    left: 5%;
    z-index: -1;
    transform: scale(0);
  }
  .ItemName {
    color: black;
    font-weight: 200;
    font-size: 3vw;
  }

</style>