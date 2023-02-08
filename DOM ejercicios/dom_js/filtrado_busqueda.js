
export default function searchFilter(input,selector){
document.addEventListener("keyup",(e)=>{
    if (e.target.matches(input)) {
        console.log("evento codigo =>",e.target.value)
        document.querySelectorAll(selector).forEach((el)=>
            el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")
            : el.classList.add("filter") );
    }
})
 }