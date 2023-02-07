
export default function darkTheme(btn,ClassDark){
    const $darkBtn = document.querySelector(btn),
    $selectors =document.querySelectorAll("[data-dark]"),
    $stage = document.querySelector(".stage");


    console.log("stage =>",$stage);

    console.log($selectors);

    let moon="🌙",
    sun ="☀️";

    const lightMode = () => {
        $selectors.forEach(el=>el.classList.remove(ClassDark));
        $darkBtn.textContent=moon;
        $stage.classList.remove("stageDark");
        localStorage.setItem("theme","light");

    };

    const darkMode = () => {
        $selectors.forEach(el=>el.classList.add(ClassDark));
        $darkBtn.textContent=sun;
        $stage.classList.add("stageDark");
        localStorage.setItem("theme","dark")
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

