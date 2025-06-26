//Strings

let myName = "Eliu"
let getting = "¡" + "Hola, " + myName + "!"
console.log(getting)
console.log(typeof getting)

// Longitud
console.log(getting.length)

// Acceso a caracteres
console.log(getting[0])
console.log(getting[1])
console.log(getting[11])

//Metodos comunes

console.log(getting.toUpperCase())//Convierte todo a Minuscula
console.log(getting.toLowerCase())//Convierte todo a Minuscula
//Busca si existe y el lugar del indice de la palabra en la cadena de texto
console.log(getting.indexOf("Hola"))
console.log(getting.indexOf("Eliu"))
console.log(getting.indexOf("Spark"))
//Corrobora si la palabra esta incluida en el texto
console.log(getting.includes("Hola"))
console.log(getting.includes("Eliu"))
console.log(getting.includes("Spark"))
console.log(getting.slice(0, 10))
//remplaza un indice por otro
console.log(getting.replace("Eliu" , "Spark"))

let message = 
`Hola, este 
es mi
Curso de JavaScript`

console.log(message)

let email = "spark@gmail.com"

console.log(`¡Hola, ${myName}!, Tu email es ${email}.`)