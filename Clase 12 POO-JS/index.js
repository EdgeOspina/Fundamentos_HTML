
const Estudiante = require("./estudiante");

const objEstudiante = new Estudiante();

objEstudiante.saludar();
objEstudiante.setNombre("Juan");
objEstudiante.setApellido("Quintero");
objEstudiante.setEmail("juan@gmail.com");

console.log(objEstudiante.nombre);
console.log(objEstudiante.apellido);
console.log(objEstudiante.email);
