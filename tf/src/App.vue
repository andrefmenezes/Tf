<template>
  <div id="app">
    
    <router-view />    
    <fofo />
  </div>

</template>

<script>

import fofo from './components/Footer.vue'

export default {
  name: 'App',
  components: {
   
    fofo
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
</style>
