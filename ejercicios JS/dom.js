 console.log(document.getElementsByTagName("li"))
  console.log(document.getElementsByClassName("card"));

// definimos la varibale que contiene elemento del DOM
  const $linkDOM = document.querySelector(".link-dom");

  const $sections = document.querySelectorAll("#hiper");

  
  
  

  // con el metodo setAttribute le se establece un valor a un atributo especificadp
  $linkDOM.setAttribute("target","_blank");
  $linkDOM.setAttribute("href","https://www.youtube.com/watch?v=XDjpuBfkFi4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=96");

console.log($linkDOM.getAttribute("href"))
console.log($linkDOM.hasAttribute("href"))
$linkDOM.setAttribute("data-description", "Javascript Document Objet Model");

console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);


$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("margin-top", "10px");
$linkDOM.style.setProperty("font-size", "20px");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.setProperty("width", "20%");
$linkDOM.style.setProperty("text-align", "center");
$linkDOM.style.setProperty("padding","10px")
$linkDOM.style.setProperty("border-radius" , ".5rem")
console.log($linkDOM.style.width); 

console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"))


// custom Properties CSS
/* primero creamos variables para hacer referencia a HMTL y al Body
*/

let $html=document.documentElement;
let $body=document.body;

// creamos variables para presenter las custom propierties css creadas en :root

let varDarkColor=getComputedStyle($html).getPropertyValue("--Dark-color");
let varTextColor=getComputedStyle($html).getPropertyValue("--Text-color");


console.log(varDarkColor,varTextColor)
// una vez definada las variables anteriormente se la aplicamos a un elemento para modificar stylos

//$body.style.backgroundColor=varDarkColor;
//body.style.color=varTextColor;

// modificando el valor de las variables Custom Properties CSS
$html.style.setProperty("--Dark-color", "#000000 ");

//varDarkColor=getComputedStyle($html).getPropertyValue("--Dark-color");
//definiendo al body los estilos atualizados
$body.style.setProperty("background-color", varDarkColor)


$html.style.setProperty("--Text-color", "#EAEDED");

varTextColor=getComputedStyle($html).getPropertyValue("--Text-color");

$body.style.color=varTextColor;


// Trabajando con clases

const $title2=document.getElementById("title2");

$title2.classList.add("title-secundary","ww","QA");



if($title2.classList.contains('ww')) {
  console.log("Si posee la clase especificada")
  
} else {
  console.log("No posee la clase especificada")
}

$title2.classList.remove("ww");


console.log(document.querySelector("#title2"));

$title2.classList.replace("title-secundary", "second-title");

console.log(document.getElementById("title2"));


// Trabajando con los elementos de html
const $parrafo0 = document.getElementById("title");
const $parrafo = document.getElementById("second-title");
const $titleD = document.getElementById("title-dom");

let newText0= `<p>Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados. <\p> `
let newText = `<p> Las siglas <i> DOM </i> significan <i> Document Object Model </i>, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).<\p> `
let title3 = `<p>¿Qué es el DOM?<\p> `

$parrafo0.outerHTML=newText0;
$parrafo.innerHTML=newText;
$titleD.outerHTML=title3;


console.log($sections)


// DOM traversing como recorrer los elemetos del DOM
/* supongamos el siguiente codigo en HTML
    <div id="X_abuelos">
        <div id="W_Padres">
            <div id="hijoDaniel">Daniel</div>
            <div id="hijaKarla">karla</div>
            <div id="hijoAlan">Alan</div>
        </div>
     </div>
*/

// para acceder al alemento X_Abuelo creamos una variable
const $Padre = document.getElementById("W_Padre");
console.log($Padre);

//console.log($Padre.children[1])

/*
//para acceder al segundo hilo el elemrneto cuyo id es #hijaKarla
const $hijaKarla = document.getElementById("hijaKarla");
//console.log($hijaKarla); 

// para acceder al hermano anterior al elemento Karla usamos
console.log($hijaKarla.previousElementSibling);

// para acceder al hermano siguinete al elemento Karla usamos
console.log($hijaKarla.nextElementSibling);

// para acceder al Padre del elemento Karla usamos
console.log($hijaKarla.parentElement);

// para acceder al Abuelo del elemento Karla usamos
console.log($hijaKarla.parentElement.parentElement);

*/


//creando una card adicional de manera dinamica con javascript

const $figure= document.createElement("figure");
$imag= document.createElement("img");
$figcaption=document.createElement("figcaption");
$figcaptionText= document.createTextNode("Animals");
$card=document.querySelector(".cards");

// configuracion de los atributos
$imag.setAttribute("src","https://placeimg.com/200/200/animals");
$imag.setAttribute("alt","Animals")


//para agargar un hijo a un elemento
$figcaption.appendChild($figcaptionText)
 $figure.appendChild($imag)
$figure.appendChild($figcaption);
$card.appendChild($figure);

// agregando clase a figure 
$figure.classList.add("card")

      // ***************************************** Clase 69: Template ************************************************************
// usaremos la etiqueta "template" para crear nuevos elementos e insertar en el DOM 
// para acceder a la etqieta tamplate para insertar 5 nuevas cards hacemos lo sguiente:

const $cardss = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
//luego vamos a crear un fragmento para almacenar  la informacion de las cards
 
const $fragment = document.createDocumentFragment(),

$cardContent=[
  { title:"Tecnologia",
  img:"https://placeimg.com/200/200/tech",
},
  { title:"Animales",
  img:"https://placeimg.com/200/200/animals",
},
  { title:"Arquitectura",
  img:"https://placeimg.com/200/200/arch",
},
  { title:"Gente",
  img:"https://placeimg.com/200/200/people",
},
  { title:"Naturaleza",
  img:"https://placeimg.com/200/200/nature",
},
];

console.log($cardContent)

// luego creamos un forEach 

$cardContent.forEach(el =>{
$template.querySelector("img").setAttribute("src", el.img);
$template.querySelector("img").setAttribute("alt", el.title);
$template.querySelector("figcaption").textContent=el.title;

// vamos a crear un clon para asi tener una referencia , el clon lo creamos con ImportNode
let $clone = document.importNode($template,true);
// luego de haber creado el clon se inserta el clon en el fragmento creado
$fragment.appendChild($clone);

});

// una vez hecho todo lo anterior el fragamento que contiene toda la informacion se le agrega a card

$cardss.appendChild($fragment);


       // ****************************** clase 70 DOM Modificando elementos (old style) ***********************************************
/*// vamos a reemplazar una card
//const $cards = document.querySelector(".cards"), // hacemos referencia a la variable de clase cards
$newCard = document.createElement("figure"); // creamos una nueva variable para crear un elemento "figure"

// insertamos contenido HTML en la variable newCard
$newCard.innerHTML=`
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption> Any </figcaption>`; 

// luego de insertar elementos HTML con InnerHTML debemos agagrer la clase card para que tengas los estilos de la tarjeta original

$newCard.classList.add("card")

// luego para hacer el reemplazo de la card usamos replaceChild especificando cual card deseamos sustituir

$cards.replaceChild($newCard, $cards.children[2]); // con .children[2] le inidcamos especificamente que hijo sustitur "2" representa el indice del elemento


// clonamos la card
let $newCardClone= document.importNode($newCard,true);
// ahora para insert un node antes de otro usamos "inserBefore"
$cards.insertBefore($newCardClone,$cards.firstElementChild);

// si deseamos clonar un nuevo nodo usamos cloneNode()
//creamos la variable con la especificacion del nodo a clonar
const $CardsClone= $cards.cloneNode(true);
// una vez creado se agrga al body del documento con AppenChild
document.body.appendChild($CardsClone);
 */// la clase se comenta para que no interfiera con la clase siguiente ya que hay que hacer referencia a la variable cards con la cual se hacen los ejemplos
 // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // ****************************** clase 71 DOM Modificando elementos (Cool style) ***********************************************

// Vamos a insertar una nueva tarjeta en uns posicion determinada en este caso como hermno anterior a section

const $cards = document.querySelector(".cards"), // hacemos referencia a la variable de clase cards
$newCard2 = document.createElement("figure"); // creamos una nueva variable para crear un elemento "figure"

// insertamos contenido HTML en la variable newCard
$newCard2.innerHTML=`
<img src="https://placeimg.com/200/200/nature" alt="Nature">
<figcaption>NatGeo</figcaption>`; 

// luego de insertar elementos HTML con InnerHTML debemos agagrer la clase card para que tengas los estilos de la tarjeta original

$newCard2.classList.add("card");

// con insertAdjacentElement insertamos un elemento de forma Adyacente

$cards.insertAdjacentElement("afterbegin", $newCard2);
 

// vamos a crear otra card para usar con insertAdjacentHTML y insertAdjacentText :
$newCard3 = document.createElement("figure"); 

// creamos una variable que tiene contenido HTML
let $contenCard=`
<img src="https://placeimg.com/200/200/animals" alt="Animlas">
<figcaption> </figcaption>`; 
//le eagregamos la clase para que tenga los estilos 
$newCard3.classList.add("card");
// insertamos la variable $contentCard usando insertaAdjacentHTML
$newCard3.insertAdjacentHTML("beforeend", $contenCard);
// insertamos texto a la etiqueta figcaption con "insertAdjacentText"
$newCard3.querySelector("figcaption").insertAdjacentText("afterbegin", "NatGeo Wild")
// insertamos el nuevo elemento y le indicamos la posicion de insercion 
//$cards.insertAdjacentElement("beforebegin",$newCard3)
$cards.append($newCard3);

 // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // ******************************** clase 72 DOM Manejadores de Eventos ***********************************************

 // dando estilos al texto de titulo
 const $jstitle1= document.querySelector(".js-title1");
$jstitle1.style.setProperty("text-align", "center");
console.log($jstitle1);

// capturando el boton por su id
const $button =document.getElementById("btn");

// añadiendo estilos al boton
$button.style.setProperty("padding","0.5rem");
$button.style.setProperty("background-color","#e6dee9");
$button.style.setProperty("font-weight","bold");
$button.style.setProperty("border-radius","0.4rem");

// definimos una arrow function con el codigo a ejecutar cuando se genere el evento asociado
const greet = () => {
  alert("Bienvenidos a Aprender Javascript un lenguaje muy potente");
console.log(event);
}
// a la variable que tiene el button se le agrega ele evento y se iguala a la funcion que contiene el codigo
//------ $button.onclick=greet;
// otra fotrma que tiene mejor presentacion es usando "setAttribute " primer parametro el evento y el segundo la funcion 
//$button.setAttribute("Onclick", "greet()")

/* la desventaja de este metodo es que al definir el evento solo podra ejecutar una sola funcion
para trabajar con varias funcionalidades cuando se genere un determinado evento lo ideal es usar
"addEventListener()" ya que esta permite con la generacion de un determinado evento ejecutar multiples
funciones */

// al método "addEventListener()" es conocido tambien como un manejador Multiple

/* su usor es muy sencillo se referencia al elemtnto . el metodo y el primer parametro el evento
en el segundo parametro ira la funcion a ejecuarte cuando se genere el evento*/

const change = () => $button.classList.toggle("btn-style")

$button.addEventListener("click", greet);
$button.addEventListener("click", change);

// Con removeEventListener() se elimina listener se le debe especificar el evento y la funciona asociada
// $button.removeEventListener("click", change);


 // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // ****************************** clase 73 DOM Eventos con Parametros y remover eventos *********************************************************

/*los eventos con parametros , las funciones manejadoras de eventos solo admiten como parametro el paramtro event*/
// si necesitas un funcion que maneje eventos pero requieres pasarle parametro lo debes hacer de la manera siguiente:

// ejemplo creamos una funcion

function saludar (nombre = "Desconocid@"){
  alert(`Saludos Bienvenido ${nombre}`);
  console.log(event)
};

// una vez definida la funcion accedemos al botton
const $button2 = document.getElementById("btn2");
// Añadimos estilos al botton 
$button2.style.setProperty("padding","10px");
$button2.style.setProperty("background-color","#5B2C6F ");
$button2.style.setProperty("color","#F4F6F7 ");
$button2.style.setProperty("border-radius","0.4rem");
$button2.style.border = "1px solid gray";

//ahora agregamos el evento al botton "$button2"

/*$button2.addEventListener("click", ()=>{
  saludar("Valentina");
  saludar("Herlinda")
})
/* De esta manera se le puese pasar parametros a una fncion manejadora de
eventos ya que la que esta recibiendo el evento es la arrow function y se esta llamado
a yna funcion declarada  */

/* para remover un evento se usa "removeEventListener" de la misma manera se debe indicar el evento en cuestion
y la funcion asociada a dicho evento Nota "Para eliminar solo es permitido funciones declaradas o Expresadas
no puede ser una arrow function o una funcion anonima ejemplo"*/

// supongamos la siguiente funcion 
function SaludoEspecial () {
  alert("Hola estas haciendo una funcion declarada")
};
// le asignamos dicha funcion al botton2
$button2.addEventListener("dblclick",SaludoEspecial);

// luego de probar correctament el funcionamiento se decide eliminar el evento

$button2.removeEventListener("dblclick", SaludoEspecial);
// de esta manera el evento queda eliminado 

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // ****************************** clase 74 DOM Flujo de Eventos (Burbuja y Captura )*********************************************************

/* Cuando se usa addEventLister se puede definir un tercer parametro opcional el cual es "OBJECT" el cual es opcional y se puede definir 
algunas de las siguientes opciones para modificar caracteristicas del Listener

W*:
  - Capture (Boolean) : El evento se dispara al incio (capture) en lugar de al final (bubble).
  - Once (Boolean) : Solo se ejecuta el evento una vez .Luego de ejecutarse se elimina el listener.
  - Pasive (Boolean) :La funcion nunca llama a .preventDefault() (Esto mejora el rendimiento)

 */
/*El flujo de evento hay dos maneras en las que se pueden trabajar de como se va propagar el evento
ya que una vez cuando el evento se origina tiene una propagacion a lo largo del arbol del DOM
Por defecto dicha propagacion se da desde el elemento mas interno al elemento mas externo hasta llegar
al elemento "WINDOW" esto se llama fase de brubuja del elemento mas interno se progpaga y se va 
expandiendo hasta el elemento padre superior que en este caso es WINDOW
*/

// Capturamos los divs de la sections
const $divsEventos = document.querySelectorAll(".Eventos-flujos div");
console.log($divsEventos);
// hacemos la declaracion de la funcion  
function flujoEventos(event){
  console.log(`Hola te saluda ${this.ClassName} el click lo origino ${event.target.ClassName}`);
}
// usamos el metodo foreach() para asignar los listener de manera dinamica
$divsEventos.forEach((div) => {
div.addEventListener("click", flujoEventos,false); // fase de burbuja es sin especificar el tercer parametro o especeficando como "false"
});

/*en el caso de fase de captura el tercer parametros debe tener el valor "True" de esta manera la propagacion funciona de manera 
contraria va desde el Elemento mas externo a el elemento mas internto 

$divsEventos.forEach((div) => {
div.addEventListener("click", flujoEventos,true);
});

tambien esta la posibilidad que al tercer parametro se le agregue un objeto y se le define alguna de las propiedades definidas anteriormente
en W*:

veamos un ejemplo:
$divsEventos.forEach((div) => {
div.addEventListener("click", flujoEventos,{
  once:true, 
});
});
/* con este ejemplo se inserta un objeto en el tercer parametro y se le difine la opcion "once:true" de manera que el evento se ejecute una
sola vez y luego de ser ejecutado se elemine el Listener*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // ****************************** clase 75 DOM StopPropagation y PreventDefault*********************************************************

/* En esta seseion se vera como detener las propagacion de los eventos, ya que puden existir momentos en los cuales no se requeria que los
eventos se propaguen hacia los elementos hijos o padres dependiendo de la fase que se este trabajando "burbuja" o "captura" y entonces
solo se ejecute una sola vez la propagacion de la funcion manejadora  */

// hacemos la captura del elemento que contiene el enlace 

/*$linkEventos = document.querySelector(".Eventos-flujos a");
console.log($linkEventos)

// luego se le asigna un evento a ese elemento
$linkEventos.addEventListener("click", e =>{
  alert(`Hola soy tu amigo y docente digital Jhonatan Mircha`);
  e.preventDefault(); // cancelar la accion que tenga por Default el elemento (en este caso como es hipervicnculo cance la accion de abrir el enlace)
  e.stopPropagation(); // con esto se detiene la propagacion de eventos
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // *************************************** clase 76 DOM Delegacion de Eventos *********************************************************

/* Cuando se requiere la declaracion de eventos a una cantidades grande de elemetos lo mas adecuado es asignar dicho evento al "document" 
ya que este es el maximo elemento padre superior , y despues de alli desencadenar las programacion deseada al momento que se genere el 
evento 
  */

// vemamos un ejemplo :
/* supongamos que  */

// capturamos el elemento del enlace por su id
$linkcurosJM = document.getElementById("linkcuros");
console.log($linkcurosJM)

// le asignamos el evento al elemento document:
document.addEventListener("click", (e)=>{
  console.log("click en", e.target); // Imprimimos en consola elemento que se le hizo click

// luego colocamos las condiciones para desencadenar la programacion del evento, matches comprueba si un determinado elemento es seleccionado
if (e.target.matches("#linkcuros")) {
  alert("Hola soy tu amigo Jhon Mircha Bienvenidos a mi seseion de Cursos")
  
}
})

/* con el ejemplo anterior cuando se genere el evento click sobre elemento cuyo id sea "#linkcursos" se ejecutara el bloque del codigo
del condicional if ya que que se esta comprobando la condicion con if, que para este ejemplo cuando se cumpla la condicion ejecuta el 
codigo que es imprimir un Alert en pantalla con el msj "alert("Hola soy tu amigo Jhon Mircha Bienvenidos a mi seseion de Cursos")" de no 
generarse el evento es decir no se cumpla la condicion el codigo no se ejecuta */

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // *************************************** clase 77 BOM Propiedades y Eventos *********************************************************

/*BOM : Browser Object Model :
es una convencion que se refiere a todos los objetos expuestos por el navegador web a diferencia del DOM no existe un estandar para implementarlo
por lo que los proveedores de navegadores son libres de implementar el BOM de la manera que lo deseen  */

// el BOM se basa en una serie de metodos u objetos que cuelgan directamente de window

/*
propiedades:
- window.innerWidth : hace referencia al ancho interior de la ventana esto incluyendo el ancho de la barra de espalzamiento
vertical en caso que este existente

- window.innerHight: Representa la altura en pixeles del Viewport, esta es una propiedad de solo lectura y no tiene valor
por defecto

*/