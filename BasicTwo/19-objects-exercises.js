/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Minda",
    age: 27,
    alias: "Asac",
    
}    
// 2. Accede y muestra su valor
console.log(person)
// 3. Agrega una nueva propiedad
person.email = "azmindaacostagmail.com"
console.log(person)

// 4. Elimina una de las 3 primeras propiedades
delete person.age
// 5. Agrega una función e invócala
person = {
    name: "Minda",
    age: 27,
    alias: "Asac",
    email: "azmindaacostagmail.com",
    color: function(){
        console.log(`A ${this.name} le gusta el color morado`)
    }
} 

console.log(person)
person.color()


// 6. Itera las propiedades del objeto
for (key in person){
    console.log(key + ": " + person[key])
}
// 7. Crea un objeto anidado
person = {
    name: "Minda",
    age: 27,
    alias: "Asac",
    email: "azmindaacostagmail.com",
    color: function(){
        console.log(`A ${this.name} le gusta el color morado`)
    },
    hobbies: {
        name: "fotografía",
        exp: 4 + " : meses",
        hob: function(){
            console.log(`A ${person.name} le gusta la ${this.name} y lleva ${this.exp} de experiencia`)
        }
    }
} 
person.hobbies.hob()
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person.hobbies)
// 9. Comprueba si los dos objetos creados son iguales
console.log(person ==  person.hobbies)
// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name === person.hobbies.name)