<template>
  <div class="wrapper">
      <div v-if="correct === true">
      <div id="control-bar" style="height: 20%;">
        <div style="position: relative;">
          <span>
            <div class="command-bar" style="display: inline-block">
              <button v-for="command in fontCommands" class="format-button" v-bind:key="command" v-on:click="doCommand(command)" >
                <i class="command.icon"></i>{{command.text}}
              </button>
            </div>
            <div  class="command-bar" style="display: inline-block">
              <button v-for="command in alignCommands" class="format-button" v-bind:key="command" v-on:click="doCommand(command)" >
                <i class="command.icon"></i>{{command.text}}
              </button>
            </div>
            <div  class="command-bar" style="display: inline-block">
              <button v-for="command in insertCommands" class="format-button" v-bind:key="command" v-on:click="doCommand(command)" >
                <i class="command.icon"></i>{{command.text}}
              </button>
            </div>
            <div  class="command-bar" style="display: inline-block">
              <button v-for="command in removeCommands" class="format-button" v-bind:key="command" v-on:click="doCommand(command)" >
                <i class="command.icon"></i>{{command.text}}
              </button>
            </div>

          </span>

        </div>
        <button class="get-html" v-on:click="getHTML"> Get HTML</button>

        <!--<span><code class="btn btn-xs %btnClass%" title="%desc%" onmousedown="event.preventDefault();" onclick="doCommand(\'%cmd%\')"><i class="%iconClass%"></i> %cmd%</code></span>'-->

      </div>
      <div id="help">asdasd</div>
      <div id="Title" contenteditable="true"> Place Your Title Here </div>
      <div id="blurb" contenteditable="true"> Place your Blurb here</div>
      <div id="content" contenteditable="true">Place Your Content Here</div>
      <div id="author" contenteditable="true"> Place your Author Name here</div>
        <form id="uploadbanner" enctype="multipart/form-data" >
          Place your thumbnail here <input id="thumbnail" ref="file" name="myfile" type="file" required @change="onFileChange" accept="image/*"/>
  <!--        <input type="submit" value="submit" id="submit" />-->
        </form>


      <img id="photo">
    </div>
      <div v-else>
          <label>Please Enter the Password
          <input id="password">
              <button v-on:click="checkPass">Submit Password</button>
      </label>
      </div>
  </div>
</template>

<script>
  import BlogController from '@/services/BlogServices'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        // msg: "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><img src="../assets/logo.png"><a href='test1'>test02</a><a href='test2'>test03</a></body></html>"
        userInput: '',
          correct: false,
        password: "1234",
        parms: [{
          "cmd": "aCommandName",
          "desc": "A DOMString representing the name of the command"
        }, {
          "cmd": "aShowDefaultUI",
          "desc": "A Boolean indicating whether the default user interface should be shown. This is not implemented in Mozilla."
        }, {
          "cmd": "aValueArgument",
          "desc": "A DOMString representing some commands (such as insertimage) require an extra value argument (the image's url). Pass an argument of null if no argument is needed."
        }],
        fontCommands: [
          {
            "cmd": "backColor",
            "text": "Background Color",
            "val": "rgba(1,1,1,0.5)",
            "desc": "Changes the document background color. In styleWithCss mode, it affects the background color of the containing block instead. This requires a color value string to be passed in as a value argument. (Internet Explorer uses this to set text background color.)"
          },
          {
            "cmd": "foreColor",
            "text": "Font Color",
            "val": "rgba(0,0,0,0.5)",
            "desc": "Changes a font color for the selection or at the insertion point. This requires a color value string to be passed in as a value argument."
          },
          {
            "cmd": "fontName",
            "val": "'Inconsolata', monospace",
            "text": "Font Style",
            "desc": "Changes the font name for the selection or at the insertion point. This requires a font name string (\"Arial\" for example) to be passed in as a value argument."
          },
          {
            "cmd": "fontSize",
            "val": "1-7",
            "text": "Font Size",
            "icon": "text-height",
            "desc": "Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument."
          },
          {
            "cmd": "bold",
            "text": "Bold",
            "icon": "bold",
            "desc": "Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)"
          },
          {
            "cmd": "italic",
            "text": "Italics",
            "icon": "italic",
            "desc": "Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)"
          },
          {
            "cmd": "subscript",
            "icon": "subscript",
            "text": "Subscript",
            "desc": "Toggles subscript on/off for the selection or at the insertion point."
          },
          {
            "cmd": "superscript",
            "icon": "superscript", "text": "Superscript",
            "desc": "Toggles superscript on/off for the selection or at the insertion point."
          },
          {
            "cmd": "underline",
            "icon": "underline",
            "text": "Underline",
            "desc": "Toggles underline on/off for the selection or at the insertion point."
          },
          {
            "cmd": "strikeThrough",
            "icon": "strikethrough",
            "text": "Strikethrough",
            "desc": "Toggles strikethrough on/off for the selection or at the insertion point."
          },
        ],
        alignCommands: [
          {
            "cmd": "justifyFull",
            "icon": "align-justify",
            "text": "Justify",
            "desc": "Justifies the selection or insertion point."
          },
          {
            "cmd": "justifyCenter",
            "icon": "align-center",
            "text": "Center",
            "desc": "Centers the selection or insertion point."
          },
          {
            "cmd": "justifyLeft",
            "icon": "align-left",
            "text": "Align Left",
            "desc": "Justifies the selection or insertion point to the left."
          }, {
            "cmd": "justifyRight",
            "icon": "align-right",
            "text": "Align Right",
            "desc": "Right-justifies the selection or the insertion point."
          },
          {
            "cmd": "indent",
            "icon": "indent",
            "text": "Indent",
            "desc": "Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented."
          },
          {
            "cmd": "outdent",
            "icon": "outdent",
            "text": "Outdent",
            "desc": "Outdents the line containing the selection or insertion point."
          },
        ],
        insertCommands: [
          {
            "cmd": "createLink",
            "val": "https://twitter.com/netsi1964",
            "text": "HyperLink",
            "icon": "link",
            "desc": "Creates an anchor link from the selection, only if there is a selection. This requires the HREF URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
          },
          {
            "cmd": "insertImage",
            "val": "http://dummyimage.com/160x90",
            "text": "Insert Image URL",
            "icon": "picture-o",
            "desc": "Inserts an image at the insertion point (deletes selection). Requires the image SRC URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
          },
          {
            "cmd": "insertOrderedList",
            "icon": "list-ol",
            "text": "Toggle Ordered List",
            "desc": "Creates a numbered ordered list for the selection or at the insertion point."
          }, {
            "cmd": "insertUnorderedList",
            "icon": "list-ul",
            "text": "Toggle Unordered List",
            "desc": "Creates a bulleted unordered list for the selection or at the insertion point."
          },
          {
            "cmd": "insertHorizontalRule",
            "text": "Insert Horizontal Line",
            "desc": "Inserts a horizontal rule at the insertion point (deletes selection)."
          },
        ],
        removeCommands:[{
          "cmd": "removeFormat",
          "text": "Clear Format",
          "desc": "Removes all formatting from the current selection."
          },
          {
          "cmd": "unlink",
          "icon": "chain-broken",
          "text": "Remove HyperLink",
          "desc": "Removes the anchor tag from a selected anchor link."
          }
        ],
        Title: '',
        Content: '',
        Blurb: '',
        Link: '',
        Author: '',
        Date: '',
        thumbnail:''

      }

    },
    mounted() {



    },
    methods: {

        checkPass: function() {
          this.userInput = document.getElementById("password").value;
          console.log(this.userInput)
          if (this.userInput === this.password) {
              this.correct = true;
          }
        },
      sendHtml: function () {
        this.userInput = document.getElementById('userInput').value;
        var outputSection = document.getElementById('output');
        outputSection.innerHTML = this.userInput;
      },
      doCommand: function (command) {
        var val = (typeof command.val !== "undefined") ? prompt("Value for " + command.cmd + "?", command.val) : "";
        document.execCommand(command.cmd, false, (val || ""));

      },

      async onFileChange(event){

        var blobData =  this.$refs.file.files[0];
        // let blob = new Blob([blobData],{type: 'image/*'});

        function readFile(file, onloadCallback) {
          var reader = new FileReader();
          reader.onload = onloadCallback;
          reader.readAsDataURL(file)
        }
        self.data = '';
        readFile(blobData, function(e){
          self.data = e.target.result;
          console.log(self.data)
        });


        console.log(event)

      },
      async getHTML() {
          try {
            // var thumbnail = "";
            // var reader = new FileReader();
            // reader.addEventListener('load', function() {
            //
            //   reader.readAsDataURL(this.result);
            //   console.log(this.result)
            // });
            // reader.readAsText(document.getElementById('thumbnail').files[0]);
            // // console.log(thumbnail);
            // document.querySelector("#image").src =";"


            // reader.onloadend = function() {
            //   var base64data = reader.result;
            //   // console.log(base64data);
            // }






            // let data = new FormData()
            this.Title = document.getElementById('Title').innerText;
            this.Content = document.getElementById('content').innerHTML;
            this.Blurb = document.getElementById('blurb').innerText;
            this.Author = document.getElementById('author').innerText;
            this.Date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

            // data.append("Thumbnail", this.Thumbnail, "image.png");


            // console.log(this.thumbnail)
            const response = await BlogController.createBlog({
              Title: this.Title,
              Content: this.Content,
              Blurb: this.Blurb,
              Author: this.Author,
              Date: this.Date,
              Thumbnail: self.data

            });


            document.getElementById('help').innerHTML = JSON.stringify(response);
          } catch (err) {
            this.error = err;
            console.log(this.error)
          }



      }
    },
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #userInput{
    height: 500px;
    width: 100%;
  }
  .command-bar {
    width: 25%;
    height: 100%;
    position: relative;
  }
  #control-bar{
    height: 200px
  }
</style>
