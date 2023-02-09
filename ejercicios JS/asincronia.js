
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


/*
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

*/


export default function obtenerGanador(id,btn1){
const $div= document.createElement("div");
 let lenguajes= [ "javascript","React","Next.js","Python","Java","Node.js","PHP","Rust","Angular","SQL","HTML","CSS"];
document.addEventListener("click",(e)=>{
    if (e.target.matches(btn1)) {
        console.log("button selection =>",e.target)
        const $container=document.getElementById(id);
    let ganador = lenguajes[ Math.floor(Math.random()*lenguajes.length)] ;
    $div.innerHTML=`<p class="win-title"> Felcidades el lenguaje ganador es <b>${ganador}</b> 👏🥳</p>`;
$container.insertAdjacentElement("beforeend",$div);
    }
})
 
}

console.log()

 /*const nombres = ["Luis", "Chris", "Link", "María", "Maggie", "Grim"];
const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
console.log("El arreglo es: ");
console.log(nombres);
console.log("Y un aleatorio es: ");
console.log(aleatorio);
*/

