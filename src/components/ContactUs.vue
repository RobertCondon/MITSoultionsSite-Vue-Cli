<template>
  <div style="background-color: #dadbe0; overflow: hidden; max-width: 100%; max-height: 100%">

    <div v-if="!isMobile" style="height: 14vh"> </div>
    <div v-if="isMobile" style="height: 6vh"> </div>
    <div v-if="isMobile">
      <img  style="width: 75%; height: 75%" src="../assets/images/ContactUsCard.png" alt="Ah shit lost it again">
    </div>

    <form id="form" class="topBefore"  @submit.prevent="sendEmail" >
      <input class="input" name ="user_name" type="text" placeholder="NAME">
      <input class="input" name="user_email" type="text" placeholder="E-MAIL">
      <input class="input" name="company" type="text" placeholder="COMPANY">
      <input class="input" name="phone" type="text" placeholder="CONTACT NO">
      <textarea name="message" type="text" placeholder="MESSAGE"></textarea>
      <input id="Submit" type="submit" class="button" value="Submit">

    </form>


    <img v-if="!isMobile" style="width: 100%"  src="../assets/images/ContactUsImage2.png" alt="Ah shit lost it again">
    <img v-if="isMobile" style="width: 100%"  src="../assets/images/ContactUsImageMobile.png" alt="Ah shit lost it again">

  </div>
</template>

<script>
import emailjs from "emailjs-com";
import BlogService from '../services/BlogServices';
export default {
  name: "ContactUs",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isMobile: false,
    }
  },
  methods: {

    sendEmail: async function (e) {
        console.log(e.target);
        let YourDetails = {
            Name: 'test',
            Email: 'testmail',
            Phone: 'test',
            Message: 'testing123',
        };
        const response = await BlogService.SendContact({
            Details: YourDetails,
            Time: Date()
        });
        alert("Contact Us message has been sent!");
        console.log(response);
        emailjs.sendForm('outlook', 'template_AwizkUiv', e.target, 'user_hYRgq0yoxSTiAJWaSnI2K')
        // eslint-disable-next-line no-unused-vars
            .then((result) => {
                // eslint-disable-next-line no-undef
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    },
    //border: solid 1px #859e30;
    onResize () {
      this.isMobile = window.innerWidth < 800
    },
     HoverExpand() {
       /*document.getElementById('message').style.width = "572px";
       document.getElementById('message').style.maxWidth = "572px";
       document.getElementById('message').style.border = "solid 2px #6f6475";

       let form = document.getElementById("form");
       let input = form.getElementsByTagName("input");
       let i; //Iterator
       for (i = 0; i < input.length; i++) {
         input[i].style.width = "572px";
         input[i].style.border = "solid 2px #6f6475";
       }*/

     },
    HoverBack() {
      /*document.getElementById('message').style.width = null;
      document.getElementById('message').style.border = null;

      let form = document.getElementById("form");
      let input = form.getElementsByTagName("input");
      let i; //Iterator
      for (i = 0; i < input.length; i++) {
        input[i].style.width = null;
        input[i].style.border = null;
      }*/
    },
    ClickExpand() {
      /*document.getElementById('message').style.width = "420px";
      document.getElementById('message').style.height = "220px";
      document.getElementById('form').style.margin = "400px auto 100px auto";
      document.getElementById('message').style.backgroundColor = "#97869d";

      let form = document.getElementById("form");
      let input = form.getElementsByTagName("input");
      let i; //Iterator
      for (i = 0; i < input.length; i++) {
        input[i].style.width = "420px";
        input[i].style.height = "50px";
        input[i].style.backgroundColor = "#97869d";
      }*/

    },
    ClickBack() {
      /*setTimeout(() => {
        document.getElementById('message').style.width = null;
        document.getElementById('message').style.height = null;
        document.getElementById('message').style.border = null;
        document.getElementById('form').style.margin = null;
        document.getElementById('message').style.backgroundColor = null;

        let form = document.getElementById("form");
        let input = form.getElementsByTagName("input");
        let i; //Iterator
        for (i = 0; i < input.length; i++) {
          input[i].style.width = null;
          input[i].style.height = null;
          input[i].style.border = null;
          input[i].style.backgroundColor = null;
        }
      }, 200);*/
    },

    /*
    height: calc(var(--Height)*1.1);
    width: calc(var(--AllWidth)*1.1);
    border: solid 3px #859e30;
     */
  },
  mounted() {

    this.onResize();
    window.addEventListener('resize', this.onResize, {passive: true});
  }
}

</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:400);


  :root {
    --AllWidth: 90%;
    --TextWidth: 90%;
    --Height: 3.8vw;
    --TextHeight: 13vw;
  }



  #form {
    position: absolute;
    width: 31%;
    margin: 16% auto 10% auto;
    transform: translateX(150%);
    -webkit-transform: translateX(150%);
    -ms-transform: translateX(150%);
    transition: 0.3s;

  }

  #Submit {
    position: absolute;
    margin: 47% auto 10% auto;
    left: 5%;
    padding: 1.8% 3% 2% 3%;
    height: 2.5vw
  }

  .button {
    display: inline-flex;
    align-items: center;
    background: #c06c84;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    //height: 5%;
    padding: 0 1.6%;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    will-change: transform;
  }
  .button:hover {
    background: #ae4b67;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
    -webkit-transform: translate3d(0, -2px, 0);
    -ms-transform: translate3d(0, -2px, 0);
  }
  .button:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 1px, 0);
    -webkit-transform: translate3d(0, -2px, 0);
    -ms-transform: translate3d(0, -2px, 0);
  }


  input {
    font-size: 1.0vw;
    width: 90%;
    height: 3.8vw;
    padding: 0px 15px 0px 15px;

    background: transparent;
    outline: none;
    color: #859e30;

    border: solid 1px #859e30;
    border-bottom: none;

    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  #Submit {
    width: 20%;
  }
  .input:focus, textarea:focus{
    background: #859e30;
    color: #e2dedb;
  }
  .input:hover {
    height: calc(3.8vw*1.1);
    width: calc(90%*1.1);
    border: solid 3px #859e30;
  }
  textarea:hover {
    max-height: calc(13vw*1.1);
    height: calc(13vw*1.1);
    max-width: calc(90%*1.1);
    width: calc(90%*1.1);
    border: solid 3px #859e30;
  }

  textarea {
    width: 90%;
    max-width: 90%;
    height:  13vw;
    max-height:  90%;
    padding: 15px;

    background: transparent;
    outline: none;

    color: #726659;
    font-family: 'Lato', sans-serif;
    font-size: 1.0vw;

    border: solid 1px #859e30;

    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }

  @media (max-width:800px){
    :root {
      --AllWidth: 90%;
      --TextWidth: 90%;
      --Height: 11vw;
      --TextHeight: 38vw;
    }
    #form {
      position: absolute;
      width: 90%;
      margin: 30% auto 0 auto;
      transform: translateX(3%);
      -webkit-transform: translateX(3%);
      -ms-transform: translateX(3%);
      transition: 0.3s;
    }
    .input,  textarea  {
      font-size: 4.0vw;
      height: initial;
    }
  }


</style>
