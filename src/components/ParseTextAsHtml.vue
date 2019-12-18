<template>
  <div class="wrapper">
    <!--<div class="user-input">-->
      <!--<form>-->


        <!--<label for="userInput"></label><textarea id="userInput" value="<!DOCTYPE html>">-->

        <!--<html>-->

          <!--<body>-->

          <!--</body>-->

        <!--</html>-->

      <!--</textarea>-->

        <!--<button class="send-html" v-on:click="sendHtml"> Preview </button>-->





      <!--</form>-->

    <!--</div>-->
    <div id="control-bar">


    </div>
    <div id="output">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        // msg: "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><img src="../assets/logo.png"><a href='test1'>test02</a><a href='test2'>test03</a></body></html>"
        userInput: '',

      }
    },
    methods: {
      sendHtml: function () {

      this.userInput = document.getElementById('userInput').value;
        var outputSection = document.getElementById('output');
        outputSection.innerHTML= this.userInput;
  }


    },
    mounted() {



    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #userInput{
    height: 500px;
    width: 100%;
  }
</style>
