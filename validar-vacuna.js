//Crear una función que reciba un objeto literal con nombre y edad de una persona, 
//la función debe validar si la edad aceptado para recibir la vacuna que debe ser 
//para menores a 5 anos o mayor a 65. La salida de la función es un string de
//aceptado y no aceptado.

let person = {name:"Kevin", age:20}

function checkIfCanVaccinate(literalObject){
    if (literalObject.age<5 || literalObject.age>65){
        return `${literalObject.name} es aceptado`
    }
    return `${literalObject.name} no es aceptado`
}

let result = checkIfCanVaccinate(person);

alert(result);
