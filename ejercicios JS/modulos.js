/*import {Rusbi, valorPI} from "./constantes.js";
import {Mascota} from "./constantes.js";

console.log(valorPI);
console.log(Mascota);*/


//------------------------------ INICIO DE EJERCICIOS DE LOGICA DE PROGRAMACION ------------------------- // 

                                   //// EJERCICIOS DE VIDEO 34 //// 

//EJERCICIO#1//
/*Cree una funcion que devuelva el numero de caracteres 
de un string ejemplo miFuncion("HOLA MUNDO") , RETORNE: 10 */

//Respuesta EJERCICIO#1 con function//
/* El metodo "length" devuelve la longitud de una cadena de caracteres*/
function logitud (cadena){
    if (!cadena) {
        console.warn("No ingresaste informacion , la cadena esta vacia")
    } else {
        console.info(`la cadena ${cadena} tienen un total de ${cadena.length} caracateres`)
        
    }
};
logitud("Valentina baute")

//Respuesta EJERCICIO#1 con arrow funtion y operator ternario//
 let longitudCadena = (cadena) => 
 ( (!cadena)? 
 console.warn("No ingresaste informacion , la cadena esta vacia")
 :console.info(`la cadena ${cadena} tienen un total de ${cadena.length} caracateres`)) ;

 logitud("XAVIER AUGUSTO SILVA BAUTE")

//EJERCICIO#2//
/*Cree una funcion que devuelva el texto recortado segun el numero de caracteres
indicados , ejemplo miFuncion("HOLA MUNDO, 4") , RETORNE: "HOLA" */

//Respuesta EJERCICIO#2// 
/* El metodo "substring" cadena.substring(a, b) devuelve los caracteres de una cadena que comienza
en una localización especificada y de acuerdo al número de caracteres que se indicarán.
El primer parametro es la localizacion "a" que en este caso tiene cero lo cual incia desde la 
primer aracter de la cadena y el segundo parametro es el numero de caracteres indicados a subtraer "b"
para este ejemplo tiene el valor 4 por lo cual devolvera los primeros cuatro carateres de la cadena
espeficada */
function recorta (a,b){
    let recortada =a.substring(0, b);
    console.log(recortada);
};
recorta("Hola Mundo" , 4);

//Respuesta EJERCICIO#2 con arrow funtion y operator ternario//
let recortarCadena = (a,b) =>
 ((!a)? console.warn("No especificaste texto , la cadena esta vacia")
 : console.info( a.substring(0,b)));

 recortarCadena("valentina baute", 9)

//EJERCICIO#3//
/*Programe un funcion que dado un string te devuelva un 
array de texto separado por ciertos caracteres 
ejemplo; miFuncion("HOLA QUE TAL") , RETORNE: ['HOLA' , 'QUE' , 'TAL'] */

//Respuesta EJERCICIO#3
/* El metodo "Split" divide un objeto de tipo String en un
 array (vector) de cadenas mediante la separación de la cadena en subcadenas.
 cadena.split([separador][,limite])
 Separador: Especifica el caracter a usar para la separacion de la cadena 
 Limite: Especifica el limite sobre el numero de divisiones a realizar*/
function separador(x,b){
    let cadena= x.split(" ", b );
console.log(cadena)
}
separador("Hola Valentina como estas",3)

let separadorCadena = (a,b)=>((!a)? console.warn("No ingresaste una cadena de texto"):
(Math.sign(b)===-1)? console.error("No puedes ingresar un valor Negativo"):
console.info(a.split(" ", b )))

separadorCadena("hola el mundo es maravilloso",10)
//EJERCICIO#4//
/*Programe un funcion que repita un texto X veces.
ejemplo; miFuncion("HOLA MUNDO, 3") , RETORNE: HOLA MUNDO HOLA MUNDO HOLA MUNDO */

//Respuesta EJERCICIO#4

const repetidorCadena = (texto="",veces=undefined) => {
if (!texto) return console.warn('No ingresaste una cadena de texto');
if (veces=== undefined) return console.warn('No ingresaste el numero de veces a repetir');
if (veces===0) return console.error('El numero de veces no puede ser cero');
if (Math.sign(veces)===-1) return console.error('No puedes ingresar un valor negativo para repetir');
for (let i=1 ;i <= veces ;i++) {
console.log(`${texto}, ${i}`)
    
}
}
repetidorCadena("hola mundo",)

//------------------------------------------------------------------------------------------------------------------------

                                                ////EJERCICIOS VIDEO 35 ////

/*5) Programa una funcion que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 
6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimina cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5. */


// EJERCICIO#5
/*Programa una funcion que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
// CRITERIO DE SOLUCION 
/*
- El método split() separa un objeto de string en arreglo de strings al separar la cadena
en subcadenas
- El método Reverse() invierte el orden de un arreglo el primero elemento sera el ultimo y el ultimo
sera el primero
- El método join() une todos los elementos de un arreglo en una cadena 
 */

// SOLUCIION CON FUNCTION 
function invertirCadenat (a) {
    if (!a) return console.warn('Debes ingresar una cadena de texto');
    if (a.length < 2) console.error("No puedes ingresar un solo caracter en la cadena")
    const x = a.split("").reverse().join("");
    console.log(x)
}


invertirCadenat(" HOLA MUNDO")

// SOLUCIION CON ARROW FUNCTION 
const invertirCadena = (a) =>{
    if (!a) return console.warn('Debes ingresar una cadena de texto');
    if (a.length < 2) console.error("No puedes ingresar un solo caracter en la cadena")
    const x = a.split("").reverse().join("");
    console.log(x)
}

invertirCadena()

// SOLUCION CON CICLO FOR https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/

// EJERCICIO#6
/* Programa una función para contar el número de veces que se repite una palabra en un texto largo,
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
let cadena= " hola mundo adios mundo , mundo";

function buscarPalabraRep (str,x){
    if (!str) return console.warn('Debes ingresar una cadena de texto');
    if (str.length < 2) console.error("No puedes ingresar un solo caracter en la cadena");
    if (!x) console.error("No especificaste el texto a evaluar");

   /* let i=0;
    contador = 0;

    while (i!==-1) {
        i= str.indexOf(x,i)
        if (i!==-1) {
            i++;
            contador++;
        }
    }   
    */ 
}

buscarPalabraRep("hola mundo como estas , mundo", "mundo")

//EJERCICIO#7
/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true. * /
// CRITERIO DE SOLUCION
/*Creamos la constante strReversed, en la que guardaremos el string invertido.

.split('') lo separa en un array.

.reverse() revierte el arreglo.

.join('') Lo vuelve a convertir en string.

Por ultimo usando el operador ternario, indicamos que si ambas cadenas son iguales devuelva 'es palindromo', y si no 'no es palindromo'. */

/*  Criterio para frases:
https://www.freecodecamp.org/espanol/news/dos-formas-de-revisar-palindromos-en-javascript/#:~:text=Vas%20a%20necesitar%20remover%20todos,%22race%20CAR%22%20entre%20otros.&text=pal%C3%ADndromo%20(%22race%20car%22)%20debe%20regresar%20verdadero.
*/

// solucion con function 
function validarPalidrimo (str){
    if (!str) return console.warn('Debes ingresar una cadena de texto');
    if (str.length < 2) console.error("No puedes ingresar un solo caracter en la cadena" );
    const newStr = str.replace(/[\W_]/g, "").toLowerCase(); // expresion regular detallada en * Criterio de frases 
    const strReversed = newStr.split("").reverse().join("");
    if (strReversed === newStr) {
        console.log(` TRUE , la palabrra ingresada "${str}" es Palindromo`)
        
    } else {
        console.log(`False , la palabrra ingresada "${str}" no es Palindromo`)
        
}
};

validarPalidrimo("")

// Solucion con funcion flecha
let validarPalidrimo1 = (str) => {
    if (!str) return console.warn('Debes ingresar una cadena de texto');
    if (str.length < 2) console.error("No puedes ingresar un solo caracter en la cadena" );
    const newStr = str.replace(/[\W_]/g, "").toLowerCase(); // expresion regular detallada en * Criterio de frases 
    const strReversed = newStr.split("").reverse().join("");
    if (strReversed === newStr) {
        console.log(` TRUE , la palabrra ingresada "${str}" es Palindromo`) 
    } else {
        console.log(`False , la palabrra ingresada "${str}" no es Palindromo`) }
}

validarPalidrimo1("salas")

/*8) Programa una función que elimina cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5. */


// solucion con function 
function deleteChart (str=undefined,X=undefined){
    if (!str) return console.warn('Debes ingresar una cadena de texto');
    if(str !== "string") console.error("ERROR, Solo es permitido ingresar TEXTO" );
    if (!X) return console.warn('Debes ingresar el caracter que deseas eliminar');
    if (str.length < 2) console.error("No puedes ingresar un solo caracter en la cadena" );
    const Valorc = str.split(X).join("");
    console.log(Valorc)
}

deleteChart("","e")

// Solucion con funcion flecha
let deleteChart1 = (str,X) => {
    if (!str) return console.warn('Debes ingresar una cadena de texto');
    if (!X) return console.warn('Debes ingresar el caracter que deseas eliminar');
    if (str.length < 2) console.error("No puedes ingresar un solo caracter en la cadena" );
    const Valorc = str.split(X).join("");
    console.log(Valorc)
}
deleteChart1(`"xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"`,"xyz")

//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 36 ////

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
, pe. miFuncion(2002) devolverá true.

11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

*/



//EJERCICIO#9
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function aleatorio (min, max) {
    if (!min) return console.warn('Debes ingresar una cadena de texto');
    if(min & max === NaN) console.error("ERROR, Solo es permitido ingresar NUMEROS" );
  min = Math.ceil(min);
  max = Math.floor(max);
  let x=  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(x)
}

aleatorio("b",600);


let aleatorio1 = (min,max) =>{
    if (!min) return console.warn('Debes ingresar un numero');
    if(min & max !== 5) console.error("ERROR, Solo es permitido ingresar Numeros" );
    min = Math.ceil(min);
    max = Math.floor(max);
  let x=  Math.floor(Math.random() * (max - min ) + min);
    console.log(x)
}

aleatorio1(850,1000)


//EJERCICIO#10
/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
, pe. miFuncion(2002) devolverá true.*/
/*  Criterio para frases:
https://www.freecodecamp.org/espanol/news/dos-formas-de-revisar-palindromos-en-javascript/#:~:text=Vas%20a%20necesitar%20remover%20todos,%22race%20CAR%22%20entre%20otros.&text=pal%C3%ADndromo%20(%22race%20car%22)%20debe%20regresar%20verdadero.
*/

function validarCapicua (numero=undefined){
    numero = numero.toString()
    if (!numero) return console.warn('Debes ingresar una cadena de texto');
    if (numero.length < 2) console.error("No puedes ingresar un solo caracter en la cadena" );
    const newStr = numero.replace(/[\W_]/g, "").toLowerCase(); // expresion regular detallada en * Criterio de frases 
    const strReversed = newStr.split("").reverse().join("");
    if (strReversed === newStr) {
        console.log(` TRUE , el numero ingresado "${numero}" es Capicua`)
        
    } else {
        console.log(`False , el numero ingresado "${numero}" NO es Capicua`)
        
}
};

validarCapicua(22);

//EJERCICIO#11
/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
/*Criterio de solucion:
https://www.freecodecamp.org/espanol/news/tres-formas-de-factorizar-un-numero-en-javascript */

function factorial(num) {
  // Si el número es menor que 0, rechacelo. 
    if (num < 0) 
        return -1;
    
  // Si el número es 0, su factorial es 1.
    else if (num == 0 || num == 1 ) 
        return 1;
    
  // De otra forma, llama al procedimiento de nuevo
    else {
        return (num * factorial(num - 1));
    }

}

console.log(factorial(5))



//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 37 ////

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. 

*/

//EJERCICIO#12
/* 12) Programa una función que determine si un número es primo
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
 */

// SOLUCION CON FUNCION DECLARADA
function numeroPrimo (numero) {
    if (typeof numero != 'number'){
        console.error('Debes ingresar un valor numerico') 
    } 

if (!Number.isInteger(numero)) {
    console.error ('el argumento debe ser un numero entero')
    
}

if (numero <= 1) {
    console.error('Debes ingresar un numero positivo')
    
}
if (numero === 1) return false;
    for (var i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i == 0) return false;
        if (numero === 1) return false;

    }   
    return true;  
    }

    console.log(numeroPrimo())


// SOLUCION CON FUNCION FLECHA

let numeroPrimo1 = (numero) => {
    if (typeof numero != 'number'){
        console.error('Debes ingresar un valor numerico') 
    } 

if (!Number.isInteger(numero)) {
    console.error ('el argumento debe ser un numero entero')
    
}

if (numero <= 1) {
    console.error('Debes ingresar un numero positivo')
    
}
if (numero === 1) return false;
    for (var i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i == 0) return false;
        if (numero === 1) return false;

    }   
    return true;  

}

console.log (numeroPrimo1(59))



// EJERCICIO#13
/*
13) Programa una función que determine si un número es par o impar,
pe. miFuncion(29) devolverá Impar.
 */

function validacionImpar (num){
    if(typeof num != 'number'){
        console.error('Debes ingresar un valor Numerico')
    }
    if (num <= 0) {
        console.warn('Debes ingresar un valor Positivo') 
    }
    if (!Number.isInteger(num)) {
    console.error('Debes ingresar un valor Entero') 
        
    }
    if (num % 2 === Math.abs(0)) {
        console.log( `el numero '${num}' es PAR`)
        } 
if (num % 2 === 1) {
    console.log( `el numero '${num}' es IMPAR`)
}     
}

validacionImpar()
/*

*/
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.  */

let conversionGrados = (a,b) =>{
    if(typeof a != 'number'){
        console.error('Debes ingresar un valor Numerico') 
        }
    let resultCel= (a*(9/5))+32;
    resultCel = resultCel.toFixed(3);
    let resultfa = (a - 32)*(5/9);
    resultfa= resultfa.toFixed(3);
    if (b === 'C') {
    return(resultCel);  
} else {
    return(resultfa);  
}
}

console.log(conversionGrados(250,'F'))

//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 38 ////

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.

16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
pe. miFuncion(1000, 20) devolverá 800.

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
pe. miFuncion(nueva Fecha(1984,4,23)) devolverá 35 años (en 2020).
*/



// EJERCICIO#14
/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
 */
//SOLUCION CON FUNCION DECLARADA

function conversionNume(a,b){
    let convertir = parseInt(a,b);
    if (b===2) {
        console.log(`${parseInt(a,b)} base 10 / ${a} en Binario es ${parseInt(a,b)} en decimal`) 
    }
    else if (b=== 10 || a != 'number') {
    console.error(`no se puede realizar la converion porque debe ingresar un valor numerico y ingreso "${a}"`)
    }
    else{
        console.log(`debe ingresar un valor numero en formato Decimal o Binario`)  
    }
    if (b===10) {
        let convdecitobina = a.toString(2);
        console.log(`${convdecitobina} base 2 /El numero decimal ${a} representado en binario es ${convdecitobina}`) 
        
    }
}

conversionNume(25,10);

//SOLUCION CON FUNCION FLECHA

let conversionNumer = (a,b) => {
let convertir = parseInt(a,b);
    if (b===2) {
        console.log(`${parseInt(a,b)} base 10 / ${a} en Binario es ${parseInt(a,b)} en decimal`) 
    }
    else if (b=== 10 ) {
    console.error(`ingreso base 10 para conversion de decimal a Binario y esta coloando un Valor Binario,Corrija el numero a convertir`)
    }
    else{
        console.log(`debe ingresar un valor numero en formato Decimal o Binario`)  
    }
    if (b===10) {
        let convdecitobina = a.toString(2);
        console.log(`${convdecitobina} base 2 /El numero decimal ${a} representado en binario es ${convdecitobina}`)
    }
    else if (b=== 2 ) {
    console.error(`ingreso base 2 para conversion de Binario a Decimal y esta coloando un Valor decimal,Corrija el numero a convertir`)
    }
    else{
        console.log(`debe ingresar un valor numero en formato Decimal o Binario`)

    }
} 

conversionNumer(10001,2);

// EJERCICIO#16
/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
pe. miFuncion(1000, 20) devolverá 800.
 */
//SOLUCION CON FUNCION DECLARADA

function descuentoPrecio (a,b){
    let pagar=a-(a*(b/100));

    if (b>100) {
        console.log(`El producto no puede Tener mas de 100% de descuento EXISTE UN ERROR verifique e ingrese un descuento correcto`)
    } else if (b===100) {
        console.log(`Felicidades el producto le sale Gratis porque tiene ${100}% de descuento`)  
    }
    else if( typeof a!='number' & b!='number') {
        console.error('Debes ingresar un valor Numerico Para poder realizar la operacion')   
    }
    else{
        console.log(`El producto tiene un costo de ${a}$ , tiene un descuento del ${b}% el monto a pagar aplicando del descuento es ${pagar}$`)
        
    }
return pagar
}


descuentoPrecio("xx",20);

//SOLUCION CON FUNCION FLECHA

let descuentoPrecio1 = (a,b) => {
    let pagar=a-(a*(b/100));
    if (b>100) {
        console.log(`El producto no puede Tener mas de 100% de descuento EXISTE UN ERROR verifique e ingrese un descuento correcto`)
    } else if (b===100) {
        console.log(`Felicidades el producto le sale Gratis porque tiene ${100}% de descuento`)  
    }
    else if( typeof a!='number' & b!='number') {
        console.error('Debes ingresar un valor Numerico Para poder realizar la operacion')   
    }
    else{
        console.log(`El producto tiene un costo de ${a}$ , tiene un descuento del ${b}% el monto a pagar aplicando del descuento es ${pagar}$`)
        
    }
return pagar
}

descuentoPrecio1(1500,35);

// EJERCICIO#17
/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
pe. miFuncion(nueva Fecha(1984,4,23)) devolverá 35 años (en 2020).
 */
//SOLUCION CON FUNCION DECLARADA

function fechaActual (fecha= undefined){
    if (fecha === undefined ) return console.warn("debes ingresar una fecha");
    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");

    let fechaF= new Date().getTime() - fecha.getTime(); // de esta manera definimos la fecha transcurrida desde 1970 
       let aniosenMS= 1000*60*60*24*365  ;            // en ms mesn la fecha introducida en el argumento tambien expresada en ms*/
/* esta expresion 
1000*60*60*24*365
es para expresar años ya que javascript expresa el tiempo en milisegundos
1000 seg = 1ms
al multiplicar 1000*60 estamos obtniendo  minutos ya que 1min tiene 60 segundos
si multiplicamos por 1000*60*60 tendremos horas ya 60min es 1hora
si multiplicamos por 24 , 1000*60*60*24 tendremos dias ya que q dia tiene 24 horas
si multplicamos por 365 tendremos años ya que un año tiene 365 dias
esto me expresaria un año para asi saber cuantos ms transcurren en 1año
 */

let aniosHumanos = Math.floor(fechaF/aniosenMS);
return(Math.sign(aniosHumanos)=== -1)
? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el año ${fecha.getFullYear()}`)
: (Math.sign(aniosHumanos)=== 1)
? console.info(`Han pasado ${Math.abs(aniosHumanos)} años desde el año ${fecha.getFullYear()}`)
: console.info(" No hay diferencia estamos en el año actual") 

}


fechaActual(new Date(2040,10,4));


//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 39 ////

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.

20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/


function countVowel(str) { 
if (typeof  str !=='string') {
    
console.error("debes ingresar solo texto para saber el numero de vocales que tienen la la palabra")
}
    let vocales=0;
    let consonantes = 0;
    str = str.toLocaleLowerCase();
for (const letra of str) {
    if (/[aeiou]/ig.test(letra))
        vocales++;
    if (/[bcdfghjklmnrstvwxyz]/ig.test(letra))
        consonantes++;
}
    return console.info ({
        str,
        vocales,
        consonantes

    })

}

countVowel("Hola Mundo");

/*
19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */

let nombreValido = (nombre="") => {
    if (typeof nombre !=='string') {
    console.error("debes ingresar solo texto para definir el nombre")
}
if (!nombre) return console.warn("no ingresaste el nombre")

    let expReg=/^[A-Za-zÑñáéíóúÁÉÍÓÚ\s]+$/g.test(nombre);

    return(expReg)
    ? console.info(`"${nombre}"Es un Nombre valido`)
    : console.warn(`"${nombre}"no es un nombre valido`)
}

nombreValido("Xavier Silva");

/* 
20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/

let validarEmail = (email = "") => {
if (typeof email !=='string') {
    console.error("debes ingresar un correo electronico es decir tipo STRING")
}
if (!email) return console.warn("no ingresaste el correo")

let regExp= /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/ig.test(email);

return(regExp)
? console.info(`el correo "${email}" es un correo valido`)
: console.warn(` el correo "${email}" NO es un correo valido`)
}

validarEmail("valentina_55@grupopolytex.com");

//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 39 //

/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena
los números pares y en el segundo los impares,
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,
*/

/* EJERCICIO#21
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */
//SOLUCION CON FUNCION FLECHA
const elevarCuadrado = (numeros = undefined) => {
  if (numeros === undefined)
    return console.log("Debes Ingresar un array de numeros");

  if (numeros.length === 0) return console.log("El array ingresado está Vacio"); // evaluamos la longitud del array y devolvemos un mensaje

  if (!(numeros instanceof Array)) // con 'instaceof' validados que sea un array lo que ingresa el usuario en caso que no retorna msj de error
    return console.log(`El valor ${numeros} no es un Array de Numeros`);

  numeros = numeros.filter((numero) => typeof numero === "number"); /* con el metodo filter creamos un array con todos los elementos que cumplan
                                                                     la condicion implementada en este caso que sea un valor numerico */ 

  let cuadrados = []; // creamos un variable llamada cuadros con un array vacio , la cual se llenara con los datos ingresados por el usuario

  for (let i = 0; i < numeros.length; i++) { // hacemos un For para iterar el argumento "numeros "
    cuadrados.push(Math.pow(numeros[i], 2)); /* la variable cuadrado empujamos los elementos insertados en el argumento numero siempre que 
                                             sea Numbers con el metodo Math.pow devolvemos la base elevada del exponente para este caso
                                              (numero[i],2) es decir va incrustar en la variable cuadrado el elemento ingresado en nombre elevado
                                              al cuadrado  ya que se expesifico exponente "2"
                                              */                                  
}                                        
    return console.log(cuadrados);
};

elevarCuadrado([2,4,6,6,8,10]);


/* EJERCICIO#22
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

*/

// SOLUCION CON FUNCION FLECHA 

let maxMin = (numeroa) => {
if (numeroa === undefined)
    return console.log("Debes Ingresar un array de numeros");

    if (numeroa.length === 0) return console.log("El array ingresado está Vacio");  

    if (!(numeroa instanceof Array))
    return console.log(`El valor ${numeroa} no es un Array de Numeros`);
let acomodado = numeroa.sort(); // creamos una variable a la cual se le asigna el argumento y se aplica el metodo sort() para devolver el arreglo ordenado
console.log(acomodado) // imprimimos la variable para validar 
numeroa.sort((a,b) => a-b) // con el metodo sort devolvemos el arreglo ordenado 
console.log( [numeroa[0], numeroa[numeroa.length-1]])

// con el metodo Math.max delvolvemos el mayor numero del arreglo y con Math.min el menor valor
console.log ( ` el numero mayor del arreglo es ${Math.max.apply(null ,acomodado)} y el numero menor es ${Math.min.apply(null ,acomodado)}`)
}

maxMin([5,4,3,2,1,10,22,125,1 ,-18])

/* EJERCICIO#23
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena
los números pares y en el segundo los impares,
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7]


*/

let parImpar = (arregloss) =>{
if (arregloss === undefined)
    return console.log("Debes Ingresar un array de numeros");

    if (arregloss.length === 0) return console.log("El array ingresado está Vacio");  

    if (!(arregloss instanceof Array))
    return console.log(`El valor ${arregloss} no es un Array de Numeros`);
for (const numero of arregloss) // con "for of" iteramos los elementos del argumento "arregloss"
if (typeof numero !== "number") return console.error(` el numero ${arregloss} no es un valor numerico`);
// si la variable numero es diferente de un valor numerico retorna un mensaje de error 


return console.log ({
    pares:arregloss.filter(numero=> numero % 2 === 0), // con el metodo filter retornamos los elementos que cumplan con cierta condicion 
    impares:arregloss.filter(numero=> numero % 2 === 1)

}) 
}

parImpar([2,4,6,8,10,25,1])


//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 40 //

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

26) Programa una función que dado un arreglo de números obtenga el promedio,
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/



//EJERCICIO # 24
/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

let ascDesc = (arregloss) =>{
if (arregloss === undefined)
    return console.log("Debes Ingresar un array de numeros");

    if (arregloss.length === 0) return console.log("El array ingresado está Vacio");  
for (const numero of arregloss) {// con "for of" iteramos los elementos del argumento "arregloss"
if (typeof numero !== "number") return console.error(` el numero ${arregloss} no es un valor numerico`);
};

// si la variable numero es diferente de un valor numerico retorna un mensaje de error 


return console.log ({
    arregloss,
    asc: arregloss.map(el => el).sort() ,                             // con el metodo filter retornamos los elementos que cumplan con cierta condicion 
    desc: arregloss.map(el => el).sort().reverse()

})
} 

ascDesc([7,5,7,8,6])

//EJERCICIO # 25
/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
//SOLUCION CON FUNCION FLECHA

let quitarDuplicados = (arr= undefined) =>{
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");

    if (!(arr instanceof Array))return console.error(" El valor que ingresaste no es un arreglo");
    
    if( arr.length === 0) return console.error("Ingresaste un arreglo vacio");

    if ( arr.length === 1) return console.warn("El arreglo debe tener minimo menos 2 elementos");

return console.info ({
original:arr,
sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)
}) 
}

quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//EJERCICIO # 26
/*
26) Programa una función que dado un arreglo de números obtenga el promedio,
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

 */

let promedio= (x) =>{
    if (x === undefined)
    return console.log("Debes Ingresar un array de numeros"); // si no se ingresa ningun argumento retorna msj

    if (x.length === 0) return console.log("El array ingresado está Vacio");  // Si el argumento es un array igual a 0 retorna msj

    if (!(x instanceof Array)) // con "instanceof" validamos si el argumento ingresado es un array de no serlo retorna msj 
    return console.log(`El valor ${x} no es un Array de Numeros`);
    let xx =  (x.reduce(function(a, b){ return a + b; }) / (x.length));

    console.log (` El array es "${x}" el promedio de sus elementos es "${xx.toFixed(2)}" `)
}


promedio([9,8,7,6,5,4,3,2,1,0])


//------------------------------------------------------------------------------------------------------------------------
                                                ////EJERCICIOS VIDEO 41 //

/*

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
    aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography,
Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show,
History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi,
Short, Sport, Talk-Show, Thriller, War, Western.



*/




//Solucion con la creacion de una Clase
/*
creamos la funcion por medio del constructor y dentro el argumento del constructor se ingresa dentro de
llaves para referenciar a un objeto, los id debe tener la estructura "IMDb, Internet Movie Database (Base de Datos de películas en Internet)"
*/


/*usamos "destructuracion de objeto" en el constructor ya que el enunciado dice:'Programa una clase recibirá un objeto al momento de instanciarse'*/
class Peliculas{0
    constructor({id,titulo, director, estreno, pais, generos, calificacion}){

        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;
// Metodos de la clase
        this.validarIMDB(id);
        this.ValidarTitulo(titulo);
        this.ValidarDirector(director);
        this.ValidarEstreno(estreno);
        this.ValidarPais(pais);
        this.ValidarGeneros(generos);
        this.ValidarCalificacion(calificacion);
    }

static get listaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography",
"Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show",
"History", "Horror","Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
"Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

}

static generosAceptados(){
    return console.info(`Los generos aceptados son: ${Peliculas.listaGeneros.join(", ")}`)
}

    ValidarCadena(propiedad,valor){
    if(!valor)return console.warn(`${propiedad} ${valor} esta vacio`);

    if(typeof valor !== "string") return console.error( `${propiedad} ${valor} ingresado no es un dato tipo String`);
    return true;
    }

    ValidarLongitudCadena(propiedad,valor,longitud){
        if (valor.length > longitud) return console.error(`${propiedad} ${valor} excede el numero de caracteres Permitidos (${longitud})`);  
        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.error(`${propiedad} ${valor} esta vaco`);
        if(typeof valor !== "number") return console.error (` ${propiedad} ${valor} ingresado no es un valor numerico`);
        return true;
    }

    ValidarArreglo(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} ${valor} esta vacio`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} ${valor} ingresado No es un arreglo`);

        if(valor.length === 0) return console.error(`${propiedad} ${valor} No tiene datos`);

        for (let cadena of valor){
            if(typeof cadena!= "string") return console.error(`el valor ${cadena} ingresado no es una Cadena de texto`);
        }
        return true;

    }
    validarIMDB(id){
        if(this.ValidarCadena("IMDB id", id));
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.error(`IMDB id ${id} no es valido debe teber 9 caracteres las 2 primeros letras y los 7 restantes numeros   `)
        }
    }

    ValidarTitulo(titulo){
        if(this.ValidarCadena("Titulo", titulo));
        if(this.ValidarLongitudCadena("Titulo",titulo,100));
    }

    ValidarDirector(director){
    if(this.ValidarCadena("Director",director));
    if(this.ValidarLongitudCadena("Director",director,50));
    }

    ValidarEstreno(estreno){
        if (this.validarNumero("Estreno", estreno))
        if(!(/^([0-9]){4}$/.test(estreno))){
            return console.error(` el valor ingresado no es valido ${estreno} el año debe ser un numero de 4 digitos`)
        }
    }

    ValidarPais(pais){
        this.ValidarArreglo("Pais",pais)
    }

    ValidarGeneros(generos){
       if (this.ValidarArreglo("Generos", generos)) {
        for (let genero of generos){
            if(!Peliculas.listaGeneros.includes(genero)){
                console.error(` Los Genero(s) ingresados "${generos.join(", ")}" no son permitidos `);
                console.log(` los generos aceptados son : `) 
                Peliculas.generosAceptados();
            }
          
        }
        
       }
    }

    ValidarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion))
        return (calificacion < 0 || calificacion > 10 )
        ? console.error(`la calificacion debe estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);

    }

    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.estreno}\nPais: ${this.pais.join("-")}\nCalificacion: ${this.calificacion} \nIMDB: ${this.id} `)
    }

}

const Peli = new Peliculas({
    id:"tt1234568",
    titulo:"The End Game",
    director:"Stan Lee",
    estreno:2010,
    pais:["Alemania","Estados Unidos","Inglaterra","Mexico"],
    generos:["Fantasy", "Family"],
    calificacion: 8.50,

})

Peli.fichaTecnica();
