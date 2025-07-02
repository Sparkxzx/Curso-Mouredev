myArray = [1, 2, 3, 4]

let person = {
    name: "David",
    age: 26,
    alias: "Bonji"
}

let myValue = myArray[1]

console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sinraxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxix objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados

let {name2, age2, alias2, email ="email@email.com"} = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(alias2) // No existe
console.log(email) // No existe

// Sintaxis objects  con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)
//Objects names

let person3 = {
    name: "Pau",
    age: 22,
    alias: "Pau Pau",
    walk: function(){
        console.log( `Pau pau cámina`)
    },
    job: {
        name: "Barista",
        exp: 7 + " meses",
        work: function(){
        console.log( `${person.alias} hace lattes buenos`)
    },
    }
}

let {name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación 
 