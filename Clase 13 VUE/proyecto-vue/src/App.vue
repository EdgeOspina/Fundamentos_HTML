<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 style="color: green">Mi aplicación de vue</h1>
    <div id="padre">
      <div id="hijo1">
        <mi-componente />
      </div>
      <div id="hijo2">
        <formulario-estudiante />
      </div>
    </div>
  </div>
</template>

<script>
import MiComponente from "./components/MiComponente.vue";
import FormularioEstudiante from "./components/FormularioEstudiante.vue";

export default {
  name: "App",
  components: {
    MiComponente,
    FormularioEstudiante,
  },
};
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
#padre{
  width: 100%;
}
#hijo1{
  width: 50%;
  float: left;
}
#hijo2{
  width: 50%;
  float: right;
}
</style>
