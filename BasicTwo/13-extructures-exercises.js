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
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
])
console.log(mes)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mes.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mes.set("Meses de Verano", ["Junio", "Julio", "Agosto"])
console.log(mes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
// Array
let games = []

games = ["Black myth wukong", "Fortnite", "Warframe", "F1 25"]
console.log(games)

// Set
let gamesSet = new Set(games)
console.log(gamesSet)

// Map

let gamesMap = new Map()
console.log(gamesMap)

gamesMap.set("Juegos comprados", gamesSet)

console.log(gamesMap)