
/**** Función para cambiar el DOM */
function cambiarImagen(){
    document.getElementById("img1").src = "https://image.goat.com/750/attachments/product_template_pictures/images/060/556/759/original/815560_00.png.png"
}




/******Variables ****/
const numero_5 = 5;
var cadena = "Hola mundo";
let numero_decimal = 10.2;


/******Funciones *****/
function saludar(){
    alert("Hola mundo");
}

function operacion(){
    sumar(5,2);
}

function sumar (num1, num2) {
    return num1+num2;
}

let funcionFlecha = ()=>{
    console.log("Esto es una función flecha");
}

/****Ciclos */

for (let i = 0; i<10; i++){
    console.log(i);
}

let personas = ["Juan", "Carlos", "Ana"];
for (let i=0; i<personas.length; i++){
    console.log(personas[i]);
}

console.log("----For each----")
personas.forEach(element =>{
    console.log(element);
})

console.log("----While---")
let contador = 0;
while(contador< personas.length){
    console.log(personas[contador]);
    ++contador;
    if (contador == 2){
        console.log("Terminando recorrido");
    }
}

/****Estructuras de decisión */
    if (contador == 2){
        console.log("Terminando recorrido");
    }