//Crear un array con objetos literales, pasar a una funcion como parametro e imprimir la infomracion 
//en pantalla cada elemento del array.
//ejemplo:
//const estudiantes = [{nombre: "Juan", edad: 34},{nombre: "Luis", edad: 25}];
//Salida:
//Mi nombre es Juan y tengo 34 anios
//Mi nombre es Luis y tengo 25 anios
//Nota: Usar FOR

let students = [{nombre: "Pablo", edad: 22},{nombre: "Carla", edad: 19}];

function showStudents(array){
    let message = "";
    for (let i =0; i<array.length;i++){
        message += "Mi nombre es " + students[i].nombre + " y tengo " + students[i].edad + " años \n";
    }
    return message;
}

let lista = showStudents(students);

alert(lista)