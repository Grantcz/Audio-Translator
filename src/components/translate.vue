<template>
  <b-container fluid id="box">
    <b-row class="mx-auto">
      <b-col cols="12" sm="auto">
        <b-form v-on:submit.prevent="translate">  

        <div id="input">
          <b-row class="justify-content-md-center">
            <b-col cols="1" sm="auto">
              <img v-b-popover.hover.left="'Click to hear pronunciation!'" @click="translateSpeak" src="../assets/speaker.png">
            </b-col>
            <b-col cols="4">  
              <b-form-select v-model="FromLanguage" v-b-popover.hover="'Click to change languages!'">
                <option v-for="(lang,index) in AvailableLanguages" :value="lang.code" :key="index"> {{ lang.text }} </option>
              </b-form-select>
            </b-col>
          </b-row>
          <b-row class="justify-content-md-center">
            <b-col cols="4" sm="auto">  
              <b-form-textarea v-model="Text" placeholder="Type in something here"></b-form-textarea>
            </b-col>  
          </b-row>
        </div>

        <div id="output">
          <b-row class="justify-content-md-center">
            <b-col cols="1" sm="auto">
              <img v-b-popover.hover.left="'Click to hear pronunciation!'" @click="responseSpeak" src="../assets/speaker.png">
            </b-col>
            <b-col cols="3" sm="auto"> 
              <b-form-select v-model="ToLanguage" v-b-popover.hover="'Click to change languages!'">
                <option v-for="(lang,index) in AvailableLanguages" :value="lang.code" :key="index"> {{ lang.text }} </option>
              </b-form-select>
            </b-col>
          </b-row> 
          <b-row class="justify-content-md-center">
            <b-col cols="4" sm="auto"> 
              <b-form-textarea v-model="ResponseText" placeholder="Translation shows here" disabled> </b-form-textarea>        
            </b-col>
          </b-row>
        </div>

        <div id="button">
          <b-row class="justify-content-sm-center">
            <b-col cols="6" sm="auto">
              <b-button type="submit" id="submit">Translate!</b-button>
            </b-col>
          </b-row> 
        </div>

        </b-form>   
      </b-col>
    </b-row>
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
  max-width: 30%;
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
form{
  font-family: 'Open Sans', sans-serif;
  min-width: 500px;
  padding: 1em;
} 
img {
  max-width: 2em;
  height: 2em;
  display: block-inline;
  padding: none;
}
select{
  padding-left: 1em;
  font-weight: 900;
}
textarea {
  margin: 1em;
  padding: 2em;
  border-radius: 5px;
}
#submit {
  font-family: 'Sigmar One', cursive;
  padding: 1em;
  background-color: #046F55;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#submit:hover {
  background-color: #045F96;
  transition: 1s;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>