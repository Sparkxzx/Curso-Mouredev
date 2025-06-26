/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

    // Este es mi comentario en primera Linea para empezar el ejercicio

// 2. Escribe un comentario en varias líneas

/*
Este es mi comentario
En varias lineas para 
Seguir el ejercicio
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Aquí se definio mediante String el nombre y la especie de Brownie  
let name = "Brownie"
let especie = "perrito"

//Aquí se definió mediante Number la edad, la estatura y el largo de Brownie
let age = 12
let peso = 20
let largo = 60

//Aquí se definió mediante un booleano si Brownie sigue vivo o no
let isLive = true
let isDeath = false

//Aquí se definió como una variable indefinida si Brownie esta muerto
let brownieDeath

//Aquí se definió mediante una variable null el cumpleaños de Brownie ya que no se sabe cuando nacio
let brownieBirthday = null

//Aquí se definió como Symbol la raza de Brownie
let brownieSymbol = Symbol("Mini Doberman")

//Aquí se definió como BigInt el amor que nos da Brownie
let brownieLove = BigInt(1000000000000000000000000000000000)
 
// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(especie)
console.log(age)
console.log(peso)
console.log(largo)
console.log(isLive)
console.log(isDeath)
console.log(brownieDeath)
console.log(brownieBirthday)
console.log(brownieSymbol)
console.log(brownieLove)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof especie)
console.log(typeof age)
console.log(typeof peso)
console.log(typeof largo)
console.log(typeof isLive)
console.log(typeof isDeath)
console.log(typeof brownieDeath)
console.log(typeof brownieBirthday)
console.log(typeof brownieSymbol)
console.log(typeof brownieLove)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = "xbox series s"
especie = "microsoft"

age = 5
peso = 1.9
largo = 27.5

isLive = true
isDeath = false

brownieDeath

brownieBirthday = null

brownieSymbol = Symbol("Consola de videojuegos")

brownieLove = BigInt(5600)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 5
age = "Me encanta JavaScript"
peso = true
largo = BigInt(3000)
isLive
isDeath = null

brownieDeath = 0

brownieBirthday = "No se sabe cuando nacio"
brownieSymbol = false
brownieLove

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const modelo = "Air force one"
const marca = "nike"

const costo = 2000
const talla = 27

const isNew = true
const isClon = false
//Da error porque una constante debe ser inicializada
const isDestroy

const tenisConfection = Symbol("20-12-2024")

const tenisStock = BigInt(500000)



// 9. A continuación, modifica los valores de las constantes

modelo = "Yeezy"
marca = "Adidas"

costo = 10000
talla = 45

isNew =  false
isClon = true

isDestroy

tenisConfection = Symbol("12-8-2005")

tenisStock = BigInt(40000)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//Dan error las lineas del ejercicio 9 puesto que no es posible redefinir constantes