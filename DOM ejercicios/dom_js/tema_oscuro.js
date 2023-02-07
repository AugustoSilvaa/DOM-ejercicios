
export default function darkTheme(btn,ClassDark){
    const $darkBtn = document.querySelector(btn),
    $selectors =document.querySelectorAll("[data-dark]"),
    $stage = document.querySelector(".stage");

    console.log("stage =>",$stage);

    console.log($selectors);

    let moon="🌙",
    sun ="☀️";

    document.addEventListener("click", (e)=>{
        if (e.target.matches(btn)) {

            if ($darkBtn.textContent=== moon) {
                
                $selectors.forEach(el=>el.classList.add(ClassDark));
                $darkBtn.textContent=sun;
                $stage.classList.add("stageDark");
            } else {
                $selectors.forEach(el=>el.classList.remove(ClassDark));
                $darkBtn.textContent=moon;
                $stage.classList.remove("stageDark");
            }
            
        }
    })
};