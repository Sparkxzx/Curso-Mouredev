//Objets


let person = {
    name: "David",
    age: 26,
    alias: "Bonji"
}

// Acceso a propiedades

// Notación punto

console.log(person.name)

// Notación de corchetes

console.log(person["name"])

//modificación
person.name = "David Gomez"

console.log(person.name)

console.log(typeof person.age)

person.age = "26"

console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "davis44566@gmail.com"
console.log(person)

person["age"] =  37

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Minda",
    age: 27,
    alias: "Asac",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

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

console.log(person3)

console.log(person3.name)
console.log(person3.job.name)

person3.job.work()

let person4 = {
    name: "David Gomez",
    age: 26,
    alias: "Bonji",
    email: 'davis44566@gmail.com'
}

// comparación
console.log(person4)
console.log(person)
// comparación por memoria
console.log(person == person4)
console.log(person === person4)
//comparación por referencia
console.log(person.name == person4.name)

// Iteración

for(let key in person4){
    console.log(key + ": " +  person4[key])
}

// Funciones como objetos

function Person(name, age){ // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Minda", 27)
console.log(person5)

console.log(typeof person5)
console.log(typeof person)