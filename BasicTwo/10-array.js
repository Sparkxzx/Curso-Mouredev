// array

//Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicialización
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["David", "Gomez", "Spark", 26, true]
myArray2 = new Array("David", "Gomez", "Spark", 26, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "David"
myArray2[1] = "Gomez"
myArray2[2] = "Spark"

console.log(myArray2)

myArray = []
myArray[0] = "David"
myArray[1] = "Gomez"
myArray[2] = "Spark"

console.log(myArray)

//Métodos comunes

myArray = []

//push y pop

myArray.push("David")
myArray.push("Gomez")
myArray.push("Spark")
myArray.push("26")

console.log(myArray)

console.log(myArray.pop())
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("David", "Spark")
console.log(myArray)

//lenght

console.log(myArray.length)

//clear

myArray = []
myArray.length = 0
console.log(myArray)

// slice
myArray = ["David", "Gomez", "Spark", 26, true]

let myNewArray = myArray.slice(1, 3)// Se toma dos indices especificando su tamano


console.log(myArray)
console.log(myNewArray)

 //Splice

 myArray.splice(1 , 3)
 console.log(myArray)

 myArray = ["David", "Gomez", "Spark", 26, true]

 myArray.splice(1, 2, "Nueva entrada")
 console.log(myArray)
