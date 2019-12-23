<template>
    <div style="height: 100vh; overflow-x: hidden; max-height: 100%; max-width: 100%">
      <img id="Background" style="  overflow-x: hidden; max-height: 100%; max-width: 100%" src="../../assets/images/OurServicesPageTitleBackground.png" alt="Ah shit lost it again">
      <div style="top: -50%; position: absolute; overflow: hidden; max-width: 100%">
        <div style="transform: translateY(975px);  overflow-x: hidden; max-height: 100%; max-width: 100%">
          <img id="WireOne" style="opacity: 20%;" src="../../assets/images/CableAnimation.png" alt="Ah shit lost it again">
          <img id="WireTwo" style="opacity: 20%;" src="../../assets/images/CableAnimation.png" alt="Ah shit lost it again">
        </div>
        <div style="z-index: 2;">
          <h1 style="opacity: 100%; z-index: 2;" class="PageTitleTwo" > Our </h1> <h1 style="opacity: 100%;" class="PageTitleOne"> Services</h1>
          <h3 style="opacity: 80%; z-index: 3;" class="SemiTitle"> Piratical and expert solutions</h3>
          <b-button pill variant="success" style="margin-top: 40px; padding-right: 35px;  padding-left: 35px; padding-top: 9px;  padding-bottom: 9px"> Services </b-button>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "OurServicesTitle"
    }
</script>

<style scoped>
  .SemiTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 2vw;
      color: #dadbe0;
    opacity: 80%;
    transition: 0.5s;
  }
  .PageTitleOne, .PageTitleTwo {
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 15vw;
    position: relative;
    opacity: 100%;
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
  }

#WireOne {
  position: relative;
  z-index: 1;
  transform: translateX(100%);
  opacity: 20%;
  animation-name: Start;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
#WireTwo {
  position: relative;
  z-index: 1;
  opacity: 20%;
  transform: translate(0%,-100%);
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

  }
  to {
    -webkit-transform:translate(-100%, -100%);
    transform: translate(-100%, -100%);
  }
}

@keyframes Start {
  from {
    -webkit-transform:translate( 99.88%, 0);
    transform: translate(99.88%, 0);

  }
  to {
    -webkit-transform:translate(0, 0);
    transform: translate(0, 0);
  }
}
  @media (max-width:800px){
    .PageTitleOne, .PageTitleTwo {
      display: inline-block;
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 20vw;
      position: relative;
      z-index: -1;
      opacity: 100%
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
      opacity: 80%
    }
    #Background {
      height: 850px;
    }
  }

</style>
