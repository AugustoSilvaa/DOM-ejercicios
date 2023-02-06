
import hamburgerMenu from "./hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuentaRegresiva.js";
import scrollTopBotton from "./botton_scroll.js";

document.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#detener-reloj");
    alarm("sonidos/alarma1.mp3","#activar-alarma","#detener-alarma");
    countdown("countdown","#btn-s");
    scrollTopBotton(".scroll-top-btn")
})

document.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

