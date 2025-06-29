/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = []

animales = ["Oso", "Leon", "Castor", "Mapache", "Jirafa"]
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("hipopotamo")
animales.push("Axolote")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libreria = new Set(["Harry Potter", "La ladrona de libros", "Divergente", "Percy Jackson", "Los Juegos del Hambre"])
console.log(libreria)
// 5. Añade dos más. Uno de ellos repetido
libreria.add("Say You Swear")
libreria.add("Alas de onix")
libreria.add("Harry Potter")

console.log(libreria)

// 6. Elimina uno concreto a tu elección
libreria.delete("Alas de onix")
console.log(libreria)
// 7. Crea un mapa que asocie el número del mes a su nombre
let mes = new Map([
    [0, "Enero"],
    [1, "Febrero"],
    [2, "Marzo"],
    [3, "Abril"],
    [4, "Mayo"],
    [5, "Junio"],
    [6, "Julio"],
    [7, "Agosto"],
    [8, "Septiembre"],
    [9, "Octubre"],
    [10,"Noviembre"],
    [11,"Diciembre"]
])
console.log(mes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mes.has(4))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map