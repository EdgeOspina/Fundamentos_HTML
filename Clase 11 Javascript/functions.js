
function saludar(){
    console.log("Hola Mundo");
}


const sumar = (num1, num2)=>{
    return (num1+num2);
}

function validar(cadena){
    let result = false;
    if (cadena.length > 5){
        result = true;
    }
    return result;
}


var arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function mayorque(num){
    let numeros = [];
    for (let i=0; i<arreglo.length; i++){
        if(arreglo[i] > num){
            numeros.push(arreglo[i]);
        }
}
return numeros;
}


const filtro = (num)=> {
    let result = arreglo.filter(n => (n > num));
    return result;
}


module.exports = {
    saludar,
    sumar,
    validar,
    mayorque,
    filtro
};
