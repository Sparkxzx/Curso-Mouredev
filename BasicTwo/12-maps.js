// Map coleccion de elementos

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "David"],
    ["email", "davis44566@gmail.com"],
    ["age", 26]

])

console.log(myMap)

// Metodos y propiedades


myMap.set("alias", "Spark")
myMap.set("name", "David, Gomez")

console.log(myMap)

// get
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))


// delete

myMap.delete("email")
console.log(myMap)

// Keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())
//size
console.log(myMap.size)
// clear

myMap.clear()
console.log(myMap)




