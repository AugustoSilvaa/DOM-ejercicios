 const w =window;

export default function scrollTopBotton(btn){
const $scrollBtn =document.querySelector(btn);


// para deternminar la distancia de la barra del scroll para agregar el evnto
window.addEventListener("scroll", e =>{
/* para determinar lo que se ha separado la barra del scroll podemos usar 
podemos usar "Window.pageYOffset" que lo que hace es devolvernos el numero de pixel
que el documento se ha movido a lo largo del eje vertical con un valor de 
0,0 indica que esta en el borde superior esta alineado con el borde superior con 
el contenido de la ventan 
tambien se pude usar "document.elemet.scrollTop" ya que hace la misma funcion
*/

//console.log(window.pageYOffset,document.documentElement.scrollTop)

let scrolTop = window.pageYOffset || document.documentElement.scrollTop;
  
if (scrolTop > 700) {
    $scrollBtn.classList.remove("hidden");
    
} else{
    $scrollBtn.classList.add("hidden");
}

});
window.addEventListener("click", e =>{
    if (e.target.matches(btn)) {
        window.scrollTo({
            behavior:"smooth",
        top:0}
        );
    }
});
}