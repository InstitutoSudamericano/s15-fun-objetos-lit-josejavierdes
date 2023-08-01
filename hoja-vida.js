//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).

let fullname = "Jorge Páez";
let age = 28;
let skills = ["Cocinero", "Desarrollador de software", "Animador de fiestas"];
let address = { mainStreet: "Gonzalo Cordero", secondaryStreet: "Avenida solano", streetNumber: "1-144" };

function showCurriculum(name, age, skills, address) {
    let formatedSkills = skills.join('\n\t');
    let formatedAddress = `${address.mainStreet}\t${address.secondaryStreet}\t${address.streetNumber}`;
    let message = `Name: ${name}\nAge: ${age}\nSkills:\n\t${formatedSkills}\nAddress:\n\t${formatedAddress}`;
    return message;
}

let curriculum = showCurriculum(fullname, age, skills, address);

alert(curriculum);
