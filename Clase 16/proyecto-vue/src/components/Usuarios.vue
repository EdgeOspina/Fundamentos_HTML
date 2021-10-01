<template>
  <div>
      <h1>Usuarios</h1>
    <input v-model="nombre" type="text" placeholder="Nombre"/>
    <br>
    <input v-model="apellido" type="text" placeholder="Apellido"/>
    <br>
    <input v-model="nickname" type="text" placeholder="Nickname"/>
    <br>
    <input v-model="email" type="text" placeholder="Email"/>
    <br>
    <input v-model="telefono" type="text" placeholder="Telefono"/>
    <br>
    <button v-on:click="crearUsuario">Crear Usuario</button>
    <br>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="objUsuario in usuarios" :key="objUsuario.nickname">
                <td>{{objUsuario.nombre}}</td>
                <td>{{objUsuario.apellido}}</td>
                <td>{{objUsuario.nickname}}</td>
                <td>{{objUsuario.email}}</td>
                <td>{{objUsuario.telefono}}</td>
                <td>
                    <button v-on:click="btnActualizar(objUsuario.nombre, objUsuario.apellido, objUsuario.nickname, objUsuario.email, objUsuario.telefono)">Actualizar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <br>
    <button v-on:click="mostrarTitulo">Mostrar</button>
    <h1 v-on:click="mostrarTitulo" v-if="mostrar">Titulo</h1>
    <button>Actualizar Datos</button>
  </div>
</template>

<script>

var obj1 = {
  nombre: "Carolina",
  apellido: "Daza",
  nickname: "caro123",
  email: "carolina@gmail.com",
  telefono: "319872",
};
var obj2 = {
  nombre: "Ana Maria",
  apellido: "Hernán",
  nickname: "ana0123",
  email: "anamaria@gmail.com",
  telefono: "08255",
};
var obj3 = {
  nombre: "Juan",
  apellido: "Quiñonez",
  nickname: "Juancho",
  email: "juan@gmail.com",
  telefono: "64332",
};
var obj4 = {
  nombre: "Daniel",
  apellido: "Fernandez",
  nickname: "danielF",
  email: "daniel@gmail.com",
  telefono: "2945002",
};
var obj5 = {
    nombre: "Caro",
    apellido: "Lina",
    nickname: "cl",
    email: "caro@example.com",
    telefono: "3142"
}


export default {
    data: () => {
        return{
        nombre: null,
        apellido: null,
        nickname: null,
        email: null,
        telefono: null,
        usuarios: [obj1, obj2, obj3, obj4, obj5],
        mostrar: false,
        }
    },
    methods:{
        crearUsuario(){
            let objUsuario = {
                nombre: this.nombre,
                apellido: this.apellido,
                nickname: this.nickname,
                email: this.email,
                telefono: this.telefono
            }
            this.usuarios.push(objUsuario);
            this.limpiarCampos();
        },
        limpiarCampos(){
            this.nombre = null;
            this.apellido = null;
            this.nickname = null;
            this.email = null;
            this.telefono = null;
        },
        btnActualizar(nombre, apellido, nickname, email, telefono){
            this.nombre = nombre;
            this.apellido = apellido;
            this.nickname = nickname;
            this.email = email;
            this.telefono = telefono;
            this.mostrar = !mostrar;
        },
        mostrarTitulo(){
            this.mostrar = !this.mostrar;
        }

    }
}
</script>


<style>

table{
    margin-top: 50px;
    width: 100%;
}
table, tr, td, th{
    border: 1px solid black;
}

</style>