


export default function countdown(id,btn1){

    document.addEventListener("click", (e)=> {
        if (e.target.matches(btn1)) {
    const $countdown = document.getElementById(id),
    EndDate=document.getElementById("birthday").value;
    const countdownDate= new Date(EndDate).getTime();
    console.log("evento =>",e.target)
    console.log("fecha input =>",EndDate)


let countdownTempo= setInterval(() => {
    let now =new Date().getTime(),
    limitTime = countdownDate - now,

    days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
    hours = Math.floor((limitTime % (1000*60*60*24))/(1000*60*60)),
    minutes= Math.floor((limitTime % (1000*60*60))/(1000*60)),
    seconds = Math.floor((limitTime % (1000*60))/(1000));

    $countdown.innerHTML=(`
    <h2 class="title1" id="t1"> Cuenta regresiva para fecha</h2>
    <div class="digit-container">
        <div class="digit">
            <p class="digitos-reloj" id="days">${days}</p>
            <span class="title2">Días</span>
        </div>
        <div class="digit" >
            <p class="digitos-reloj" id="hours">${hours} </p>
            <span class="title2">Horas</span>
        </div >
        <div class="digit">
            <p class="digitos-reloj" id="minutes">${minutes} </p>
            <span class="title2">Minutos</span>
        </div>
        <div class="digit">
            <p class="digitos-reloj" id="seconds">${seconds}</p>
            <span class="title2">Segundos</span>
        </div>
        </div> `)

if (limitTime < 0) {
    clearInterval(countdownTempo);
$countdown.innerHTML=`
<div class="DG-C1">
<h2 class="title1">Muchas felicidades🥳🎉</h2>
<h2 class="title1">Estas Aprendiendo JavaScript 💻🔥</h2>  
<h2 class="title1">sigue entrenando tu cerebro 📚🧠</h2>
<h2 class="title1">No te detengas🦾🚀</h2>
</div>
`   
}
}, 1000);       }         
})

}