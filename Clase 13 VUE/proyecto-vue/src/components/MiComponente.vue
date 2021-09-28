<template>
    <div>
        <h1> {{Titulo}}</h1>
        <h2> {{Subtitulo}}</h2>
        <input v-model="numero1" type="number" placeholder="Numero 1" />
        <br>
        <input v-model="numero2" type="number" placeholder="Numero 2" />
        <br>
        <button v-on:click="sumar">Sumar</button>
        <br>
        <span>Resultado: {{resultado}}</span>
    </div>
</template>

<script>
export default {
    //Data contiene las variables globales del componente
    data: ()=>{
        return{
            Titulo: 'Titulo Componente',
            Subtitulo: 'Subtítulo Componente',
            numero1: null,
            numero2: null,
            resultado: '',
        }
    },
    methods:{
        sumar(){
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
    }
    }

}
</script>

<style>

</style>