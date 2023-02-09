
export default function darkTheme(btn,ClassDark){
    const $darkBtn = document.querySelector(btn),
    $selectors =document.querySelectorAll("[data-dark]"),
    $stage = document.querySelector(".stage"),
    $sorteoContainer=document.querySelector(".sorteo"),
    $card =document.querySelectorAll(".card"),
    $figcaption =document.querySelector("figcaption");

  console.log("constainer sorteo =>",$sorteoContainer);
    console.log("card =>",$card);

    console.log($selectors);

    let moon="🌙",
    sun ="☀️";

    const lightMode = () => {
        $selectors.forEach(el=>el.classList.remove(ClassDark));
        $darkBtn.textContent=moon;
        $stage.classList.remove("stageDark");
        $sorteoContainer.classList.add("sorteo1");
        $figcaption.classList.remove("fDark");
        localStorage.setItem("theme","light");

    };

    const darkMode = () => {
        $selectors.forEach(el=>el.classList.add(ClassDark));
        $darkBtn.textContent=sun;
        $stage.classList.add("stageDark");
        $sorteoContainer.classList.remove("sorteo1");
        $figcaption.classList.add("fDark");
        localStorage.setItem("theme","dark");
    };

    document.addEventListener("click", (e)=>{
        if (e.target.matches(btn)) {

            if ($darkBtn.textContent=== moon) {
                darkMode();
             
            } else {
                lightMode();
            }
            
        }
    })
document.addEventListener("DOMContentLoaded",(e)=>{
    if (localStorage.getItem("theme")===null) localStorage.setItem("theme","light");
    if (localStorage.getItem("theme")==="light") lightMode();
    if(localStorage.getItem("theme")==="dark") darkMode();
});

};

