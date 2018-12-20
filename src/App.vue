<template>
  <b-container fluid>
    <div id="app">
      <h1 style="font-family:'Sigmar One', cursive; color:#FFFFFF;">English to Spanish</h1>
      <h2 style="font-family:'Sigmar One', cursive; color:#FFFFFF;">Audio Translator</h2>
      <router-view/>
    </div>
  </b-container>  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  background: #046F55;
}
#app{
  background:#046F55;
  margin-left: -15px;
  margin-right: -15px;
}
body{
  font-family:'OpenSans',cursive;
}
h1{
  font-family: 'Sigmar One', cursive;
  text-align: center;
  margin: 1em;
  color: white;
  text-shadow:1px 2px 1.5px rgba(0,0,0,0.3);
}
h2{
  font-family: 'Sigmar One', cursive;
  text-align: center;
  margin: -1em 1em 1em 1em;
  color: white;
  text-shadow:1px 2px 1.5px rgba(0,0,0,0.3);
}
</style>

