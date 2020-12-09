<template>
  <div id="TermsPage">
    <div id="TopBanner">
      <div id="WhiteBanner">
        <div id="Pages">
          <div class="SingularPage"> About Us </div>
          <div class="SingularPage"> Our Services </div>
          <div class="SingularPage"> Contact Us </div>
        </div>
        <div id="LogoZone">
          <img id="Logo" src="../../assets/images/MIT_images/MID Logo_On Wht.png" alt="None">
        </div>
      </div>
      <div id="ColorBanner">
        <div id="Title"> Terms Of Service</div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "TermsOfBussiness"
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#TermsPage {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
}
#TopBanner {
  min-height: 230px;
  max-height: 450px;
  width: 100vw;
  margin-bottom: 40px;
  position: relative;
}
#WhiteBanner {
  background: #FFF;
  height: 70px;
  border-bottom: dimgray solid 4px;
  box-shadow: 5px 0px 5px black;
  z-index: 2;
  position: relative;
}
#ColorBanner {
  background: #0070d0;
  min-height: 230px;
  max-height: 450px;
  width: 100vw;
  z-index: 1;
}
  #Pages {
    color: white;
    position: absolute;
    left: 20%;
    top: 30%;
    display: flex;
    flex-direction: row;
  }

  .SingularPage {
    margin: 0 5px;
    min-width: 150px;
    font-size: 20px;
    font-weight: 700;
    opacity: 0.9;
    transition: 0.4s;
    color: dimgray;
  }
  .SingularPage:hover {
    opacity: 1;
    cursor: pointer;
  }
  #LogoZone {
    position: absolute;
    //bottom: 0;
    left: 2%;
    top: 1%;
  }
  #Logo {
    width: 200px;
  }
  #Title {
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 90px;
    color: whitesmoke;
  }
</style>