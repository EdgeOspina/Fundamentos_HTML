

class Estudiante {

    constructor() {
        this.nombre;
        this.apellido;
        this.email;
        console.log("constructor")
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    setEmail(email) {
        this.email = email;
    }


    //Métodos
    saludar(){
        console.log("Hola Mundo");
    }

    sumar(num1, num2){
        return num1+num2;
    }
}

module.exports = Estudiante;