<template>
  <div id="app">
  <usuarios/>
  </div>
</template>

<script>
import Usuarios from './components/Usuarios.vue'

export default {
  components: {
    Usuarios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
