
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