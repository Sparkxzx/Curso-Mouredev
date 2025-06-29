// Set

//Declaracion

let mySet = new Set()
// let mySet2 = {}

console.log(mySet)
// console.log(mySet2)

//Inicializacion

mySet = new Set(["David", "Gomez", "Spark", 26, true, "davis44566@gmail.com"])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("sparksocialmediastudio.com")

console.log(mySet)

console.log(mySet.delete("sparksocialmediastudio.com"))

console.log(mySet.delete("David"))

// Has

console.log(mySet.has("David"))
console.log(mySet.has("Gomez"))

// size 
console.log(mySet.size)

// convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)


//

mySet.add("davis44566@gmail.com")
mySet.add("Davis44566@gmail.com")
console.log(mySet)