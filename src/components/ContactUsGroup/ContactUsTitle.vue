                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         v                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <template>
  <div style="height: 60vw; overflow-x: hidden; max-height: 100%; max-width: 100%; background-color: #dadbe0">
    <img id="Background" style="" src="../../assets/images/ContactUsTitleBackground.png" alt="Ah shit lost it again">
    <div style=" overflow: hidden; max-width: 100%; height: 50vw">
      <div style="transform: translateY(64%)">
        <h1 style="opacity: 100%;" class="PageTitleOne"> Contact Us </h1>
        <h3 style="opacity: 80%;" class="SemiTitle"> Get In Touch </h3>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "ContactUsTitle"
    }
</script>

<style scoped>
#Background {
  position: absolute;  overflow-x: hidden; max-height: 100%; max-width: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vw;
}

  .PageTitleOne {
    padding-left: 40px;
    display: inline-block;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 13.5vw;
    color: #dadbe0;
    text-shadow: -3px 3px #495d68;
    position: relative;
    z-index: 2;
    opacity: 100%
  }

  .SemiTitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 2.5vw;
    color: #dadbe0;
    opacity: 80%
  }
</style>
