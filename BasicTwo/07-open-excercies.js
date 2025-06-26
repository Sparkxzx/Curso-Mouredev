/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let perrito = "Brownie"
let brownieSaluto = "¡" + perrito + ", es el perrito más bonito" + "!"
console.log(brownieSaluto)

// 2. Muestra la longitud de una cadena de texto
console.log(brownieSaluto.length)

// 3. Muestra el primer y último carácter de un string
console.log(brownieSaluto[0])
console.log(brownieSaluto[34])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(brownieSaluto.toUpperCase())
console.log(brownieSaluto.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let message =
`Pau hace cafes
muy buenos y
si me hace figuras
se enoja si no
le quedan
`
console.log(message)
// 6. Interpola el valor de una variable en un string
let name = "Pau"
let name2 = "David"
let cafe = "latte"
let cafe2 = "Moka"

console.log(`${name}, le hace un ${cafe} a ${name2} le gusto tanto que le hizo un ${cafe2}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let coffee = `${name}, le hace un ${cafe} a ${name2} le gusto tanto que le hizo un ${cafe2}`

console.log(coffee.replace(/\s+/g, '-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(coffee.includes(name))
// 9. Comprueba si dos strings son iguales
console.log(coffee == message)
// 10. Comprueba si dos strings tienen la misma longitud
let coffeeLenght = coffee.length
let messageLenght = message.length

console.log(coffeeLenght == messageLenght)