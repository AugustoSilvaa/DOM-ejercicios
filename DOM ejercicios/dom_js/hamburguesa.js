export default function hamburgerMenu(panelBtn,panel,menuLink){

    document.addEventListener("click", e =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(panelBtn).classList.remove("is-active");
        }
    })

}