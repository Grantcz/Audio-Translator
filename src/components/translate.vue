<template>
  <b-container fluid id="box">
        <b-form v-on:submit.prevent="translate">  

          <!-- ENGLISH -->
        <div id="input" fluid>
            <img v-b-popover.hover.left="'Click to hear pronunciation!'" @click="translateSpeak" src="../assets/speaker.png">
            <b-form-select id="bar" v-model="FromLanguage">
              <option v-for="(lang,index) in AvailableLanguages" :value="lang.code" :key="index"> {{ lang.text }} </option>
            </b-form-select> 
            <b-form-textarea v-model="Text" placeholder="TYPE HERE"></b-form-textarea>
        </div>

          <!-- ESPAÑOL -->
        <div id="output" fluid>
          <img v-b-popover.hover.left="'Click to hear pronunciation!'" @click="responseSpeak" src="../assets/speaker.png">
          <b-form-select id="bar" v-model="ToLanguage">
            <option v-for="(lang,index) in AvailableLanguages" :value="lang.code" :key="index"> {{ lang.text }} </option>
          </b-form-select>
          <b-form-textarea v-model="ResponseText" placeholder="TRANSLATION HERE" disabled> </b-form-textarea>        
        </div>

          <!-- BUTTON -->
        <div id="button">
          <b-button type="submit" id="submit">Translate!</b-button>
        </div>

        </b-form>   
  </b-container>

</template>

<script>
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  name: "translate",
  data() {
    return {
      FromLanguage: "en",
      Text: "",
      ToLanguage: "es",
      TranslateText: "",
      ResponseText: "",
      CurrentLanguage: "en",
      TranslateLanguage: "es",
      AvailableLanguages: [
        { code: "en", text: "English" },
        { code: "es", text: "Spanish" }
      ]
    };
  },
  created() {
  },
  methods: {
    translate: function() {
      axios
        .get("https://translate.yandex.net/api/v1.5/tr.json/translate?", {
          params: {
            key:
              "trnsl.1.1.20180313T175317Z.1dc10fdf093e5704.5caf00e49cd70355cd24895a8f6a63c13a5da876",
            text: this.Text,
            lang: this.CurrentLanguage + "-" + this.TranslateLanguage,
            format: "plain"
          }
        })
        .then(response => {
          this.validateResponse(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    validateResponse: function(response) {
      if (response.status === 422) {
        console.log("Could not translate text please try again later");
      } else if (response.status === 413) {
        console.log("Please enter a shorter text to translate");
      } else if (response.status === 200) {
        this.ResponseText = response.data.text[0];
      } else {
        console.log("Cannot translate at this moment please try again later");
      }
    },
    translateSpeak: function() {
      responsiveVoice.speak(this.Text);
    },
    responseSpeak: function() {
      responsiveVoice.speak(this.ResponseText);
    }
  }
};
</script>

<style scoped>
#box {
  margin: auto;
  max-width: 80%;
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  border-radius: 1em;
  background: #f7fbfc; /* Old browsers */
  background: rgb(255,94,97); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
}
#input, #output{
  margin: auto;
}
form{
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  padding: 1em;
} 
img {
  max-width: 2em;
  height: 2em;
  display: block-inline;
  padding: none;
  margin-right: 1em;
}
#bar{
  max-width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
select{
  padding-left: 1em;
  font-weight: 900;
}
textarea {
  margin: 2em 0 2em 0;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#submit {
  margin-left: 2.5em;
  text-align: center;
  font-family: 'Sigmar One', cursive;
  padding: 1em;
  background-color: #046F55;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#submit:hover {
  background-color: #066066;
  transition: 1s;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>