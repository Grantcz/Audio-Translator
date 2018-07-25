<template>
  <b-container fluid>
    <div id="app">
      <h1 style="font-family:'Sigmar One', cursive;">English to Spanish</h1>
      <h2 style="font-family:'Sigmar One', cursive;">Audio Translator</h2>
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
#app {
  background: #f7fbfc; /* Old browsers */
  background: rgb(255,94,97); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(255,94,97,1) 0%, rgba(255,206,206,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,94,97,1) 0%,rgba(255,206,206,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,94,97,1) 0%,rgba(255,206,206,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff5e61', endColorstr='#ffcece',GradientType=0 ); /* IE6-9 */
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

