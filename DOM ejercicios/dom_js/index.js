
import hamburgerMenu from "./hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuentaRegresiva.js";
import scrollTopBotton from "./botton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";

document.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#detener-reloj");
    alarm("sonidos/alarma1.mp3","#activar-alarma","#detener-alarma");
    countdown("countdown","#btn-s");
    scrollTopBotton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" class="a-responsive">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/RE2F4Pn9VcugCbCL6" target="_blank" class="a-responsive">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565512!2d-99.16869369208443!3d19.427023126223627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2sve!4v1675784297589!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    
})

document.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");