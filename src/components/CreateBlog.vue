<template>
  <div class="wrapper">
    <div id="control-bar" style="height: 20%;">
      <div style="position: relative;">
        <span>
          <button v-for="command in commands" class="format-button" v-bind:key="command" v-on:click="doCommand(command)" >
            <i class="command.icon"></i>{{command.text}}
          </button>
        </span>
      </div>
      <button class="get-html" v-on:click="getHTML();"> Get HTML</button>

      <!--<span><code class="btn btn-xs %btnClass%" title="%desc%" onmousedown="event.preventDefault();" onclick="doCommand(\'%cmd%\')"><i class="%iconClass%"></i> %cmd%</code></span>'-->

    </div>
    <div id="help">asdasd</div>
    <div id="Title" contenteditable="true"> Place Your Title Here </div>
    <div id="blurb" contenteditable="true"> Place your Blurb here</div>
    <div id="content" contenteditable="true">Place Your Content Here</div>
    <div id="link" contenteditable="true"> Place your Link here</div>
    <div id="author" contenteditable="true"> Place your Author Name here</div>

  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        // msg: "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><img src="../assets/logo.png"><a href='test1'>test02</a><a href='test2'>test03</a></body></html>"
        userInput: '',
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
        commands: [{
          "cmd": "backColor",
          "text": "Background Color",
          "val": "rgba(1,1,1,0.5)",
          "desc": "Changes the document background color. In styleWithCss mode, it affects the background color of the containing block instead. This requires a color value string to be passed in as a value argument. (Internet Explorer uses this to set text background color.)"
        }, {
          "cmd": "bold",
          "text": "Bold",
          "icon": "bold",
          "desc": "Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)"
        }, {
          "cmd": "createLink",
          "val": "https://twitter.com/netsi1964",
          "text": "HyperLink",
          "icon": "link",
          "desc": "Creates an anchor link from the selection, only if there is a selection. This requires the HREF URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
        }, {
          "cmd": "fontName",
          "val": "'Inconsolata', monospace",
          "text": "Font",
          "desc": "Changes the font name for the selection or at the insertion point. This requires a font name string (\"Arial\" for example) to be passed in as a value argument."
        }, {
          "cmd": "fontSize",
          "val": "1-7",
          "text": "Font Size",
          "icon": "text-height",
          "desc": "Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument."
        }, {
          "cmd": "foreColor",
          "text": "Foreground Color",
          "val": "rgba(0,0,0,0.5)",
          "desc": "Changes a font color for the selection or at the insertion point. This requires a color value string to be passed in as a value argument."
        }, {
          "cmd": "hiliteColor",
          "val": "rgba(1,1,1,0.5)",
          "text": "Highlight Color",
          "desc": "Changes the background color for the selection or at the insertion point. Requires a color value string to be passed in as a value argument. UseCSS must be turned on for this to function. (Not supported by Internet Explorer.)"
        }, {
          "cmd": "indent",
          "icon": "indent",
          "text": "Indent",
          "desc": "Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented."
        }, {
          "cmd": "insertHorizontalRule",
          "text": "Insert Horizontal Line",
          "desc": "Inserts a horizontal rule at the insertion point (deletes selection)."
        }, {
          "cmd": "insertImage",
          "val": "http://dummyimage.com/160x90",
          "text": "Insert Image URL",
          "icon": "picture-o",
          "desc": "Inserts an image at the insertion point (deletes selection). Requires the image SRC URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
        }, {
          "cmd": "insertOrderedList",
          "icon": "list-ol",
          "text": "Toggle Ordered List",
          "desc": "Creates a numbered ordered list for the selection or at the insertion point."
        }, {
          "cmd": "insertUnorderedList",
          "icon": "list-ul",
          "text": "Toggle Unordered List",
          "desc": "Creates a bulleted unordered list for the selection or at the insertion point."
        }, {
          "cmd": "italic",
          "text": "Italic",
          "icon": "italic",
          "desc": "Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)"
        }, {
          "cmd": "justifyCenter",
          "icon": "align-center",
          "text": "Center",
          "desc": "Centers the selection or insertion point."
        }, {
          "cmd": "justifyFull",
          "icon": "align-justify",
          "text": "Justify",
          "desc": "Justifies the selection or insertion point."
        }, {
          "cmd": "justifyLeft",
          "icon": "align-left",
          "text": "Align Left",
          "desc": "Justifies the selection or insertion point to the left."
        }, {
          "cmd": "justifyRight",
          "icon": "align-right",
          "text": "Align Right",
          "desc": "Right-justifies the selection or the insertion point."
        }, {
          "cmd": "outdent",
          "icon": "outdent",
          "text": "Outdent",
          "desc": "Outdents the line containing the selection or insertion point."
        }, {
          "cmd": "removeFormat",
          "text": "Clear Format",
          "desc": "Removes all formatting from the current selection."
        }, {
          "cmd": "strikeThrough",
          "icon": "strikethrough",
          "text": "Strikethrough",
          "desc": "Toggles strikethrough on/off for the selection or at the insertion point."
        }, {
          "cmd": "subscript",
          "icon": "subscript",
          "text": "Subscript",
          "desc": "Toggles subscript on/off for the selection or at the insertion point."
        }, {
          "cmd": "superscript",
          "icon": "superscript", "text": "Superscript",
          "desc": "Toggles superscript on/off for the selection or at the insertion point."
        }, {
          "cmd": "underline",
          "icon": "underline",
          "text": "Underline",
          "desc": "Toggles underline on/off for the selection or at the insertion point."
        }, {
          "cmd": "unlink",
          "icon": "chain-broken",
          "text": "Remove HyperLink",
          "desc": "Removes the anchor tag from a selected anchor link."
        }],
        Title: '',
        Content: '',
        Blurb: '',
        Link: '',
        Author: '',
        Date: ''

      }

    },
    mounted() {


    },
    methods: {


      sendHtml: function () {
        this.userInput = document.getElementById('userInput').value;
        var outputSection = document.getElementById('output');
        outputSection.innerHTML = this.userInput;
      },
      doCommand: function (command) {
        var val = (typeof command.val !== "undefined") ? prompt("Value for " + command.cmd + "?", command.val) : "";
        document.execCommand(command.cmd, false, (val || ""));

      },
      async getHTML() {
          try {


            this.Title = document.getElementById('Title').innerHTML;
            this.Content = document.getElementById('content').innerHTML;
            this.Blurb = document.getElementById('blurb').innerHTML;
            this.Link = document.getElementById('link').innerHTML;
            this.Author = document.getElementById('author').innerHTML;
            this.Date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

            const response = await AuthenticationService.register({
              Content: this.Content,
              Title: this.Title,
              Blurb: this.Blurb,
              Author: this.Author,
              Date: this.Date
            });
            document.getElementById('help').innerHTML = JSON.stringify(response);
          } catch (err) {
            this.error = err.response.data.error;
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
</style>
