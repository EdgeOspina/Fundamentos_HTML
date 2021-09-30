<template>
  <div id="app">
    <h1 style="color: green">Mi aplicación de vue</h1>
    <div id="padre">
      <div id="hijo1">
        <mi-componente />
      </div>
      <div id="hijo2">
        <formulario-estudiante />
      </div>
    </div>
    <lista-tarjetas/>
  </div>
</template>

<script>
import MiComponente from "./components/MiComponente.vue";
import FormularioEstudiante from "./components/FormularioEstudiante.vue";
import ListaTarjetas from './components/ListaTarjetas.vue';

export default {
  name: "App",
  components: {
    MiComponente,
    FormularioEstudiante,
    ListaTarjetas,
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
