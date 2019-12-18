<template>
  <div class="parallax-container" style=" position: relative; height: 120%; overflow: hidden; max-width: 100%; max-height: 100%">
    <img class="parallax-title" style="transform: translateX(16%) scale(1.2); z-index: 0;" src="../assets/images/WhyUsParrlax2.png" alt="Ah fuck">

    <parallax :fixed="true">

      <video style="position: relative; z-index: 100; transform: translateY(30px); width: 100%; height: 100%;" preload="auto" autoplay="autoplay"  loop="true" controls>
        <source src="../assets/images/ParalaxGraph2.mp4" style=" width: 100%; height: 100%;" type="video/mp4">
      </video>
    </parallax>
  </div>
</template>

<script>
  import Parallax from "vue-parallaxy";
    export default {
      name: "WhyUsMobile",
      components: {
        Parallax
      }
    }
</script>

<style scoped>
.parallax-container {
  top: 14vw;
}
@media (max-width:450px) {
  .parallax-container {
    top: 18vw;
  }
}
@media (max-width:386px) {
  .parallax-container {
    top: 14vw;
  }
}

</style>
