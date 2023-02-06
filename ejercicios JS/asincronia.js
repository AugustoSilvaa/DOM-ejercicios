
/*
console.log('inicio del conteo')
setTimeout(() => {

    console.log(`Bienvenidos Xavier`)


    
}, 5000);

setTimeout(() => {

    console.log(`Somos afortunados que formes parte de nuesta familia BNC`)


    
}, 8000); */
 

/*
const mySet1= new Set();

mySet1.add(1)
mySet1.add(2)
mySet1.add('HOLA MUNDO')
const w = {
    animal:'perro',
    edad: 5,
    raza:"grandanes",
    color:"Marron claro",
}
mySet1.add(w)
mySet1.add("bienvenidos")
mySet1.add(45)
mySet1.delete('HOLA MUNDO')



console.log(mySet1)
console.log(mySet1.size)
console.log(mySet1.has("bienvenidos"))

let mapa = new Map()

mapa.set("Nombre","Xavier")
mapa.set("Profesion" ,"Ingeniero")
mapa.set("Area de Profesion", "Desarrollo Web")
mapa.set("ID" , 125)

console.log(mapa)
console.log(mapa.has("Profesion"))

let xx = {
    mapa
}

console.log(xx)
console.log(mapa.get("Nombre"))  */

const user ={
    name: "Xavier",
    apellido: "Silva"
};

const business ={
    name: "Valentina",
    apellido: "Baute"
}

function showInfo (likes , friends){
    return `${this.name} ${this.apellido} tiene ${likes} likes y ${friends} amigos`
}

console.log(showInfo.call(business, 55,85))
console.log(showInfo.apply(user, [44,2 ]))

const newfunction = showInfo.bind(user);

console.log(newfunction(88,55))

const parragraph= documentfront .getElementById("title1");

 console.log(parragraph)

