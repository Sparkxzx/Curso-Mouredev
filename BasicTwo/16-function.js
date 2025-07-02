// Funciones

//Simple
function myFunction() {
    console.log("¡Hello, my function!")

}
for (let i = 0; i < 5; i++){
    myFunction()
}
// Con parametros
function myFunctionWith(name) {
    console.log(`¡Hello, my function ${name}!`)

}

myFunctionWith("David")
myFunctionWith("Spark")

// Funciones anónimas

const myFunc2 = function(name) {
    console.log(`¡Hello, my function ${name}!`)
}

myFunc2("David Gomez")

// Arroy functions

const  myFunc3 = (name) => {
    console.log(`¡Hello, my function ${name}!`)
}

myFunc3("Davis")

//Sin rango
const  myFunc4 = (name) => console.log(`¡Hello, my function ${name}!`)

myFunc4("Davis")

// Parámetros

function sum(a, b){
    console.log(a+b)
}
sum(5, 10)

sum(5, 6)

function defaultSum(a =0, b= 0){
    console.log(a+b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(a = 5)

// Retorno de valores

function mult(a, b){
    return a * b
}

mult(5, 10)
//funciones anidadas
let result = mult(5, 10)
console.log((result))

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Función interna")
    }
    intern()
}

extern()
// itern fuera del scope

extern()

//funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superiror")

// forEach

myArray = [1, 2, 3, 4]
mySet = new Set(["David", "Gomez", "Spark", 26, true, "davis44566@gmail.com"])

myMap = new Map([
    ["name", "David"],
    ["email", "davis44566@gmail.com"],
    ["age", 26]

])
myArray.forEach(function (value){
    console.log(value)
})

myArray.forEach((value => console.log(value)))

mySet.forEach((value => console.log(value)))

myMap.forEach((value => console.log(value)))
