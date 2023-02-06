
const $days = document.getElementById("days"),
$hours = document.getElementById("hours"),
$minutes =document.getElementById("minutes"),
$seconds=document.getElementById("seconds"),
$fhater =document.getElementById("father-c"),
$msj = document.getElementById("t1");



export function counterDown(limitDate) {
    const newYear = new Date(limitDate);
    const currentDate = new Date().getTime();

let countdownnTempo = setInterval(() => {
  
    const totalTime = (newYear - currentDate);

    const calcDays = Math.floor((totalTime/1000) /3600 /20); 
    const calcHours = Math.floor((totalTime/1000)/3600) % 24;
    const calcMinutes = Math.floor((totalTime/1000) /60) % 60;
    const calcseconds = Math.floor((totalTime/1000) /60) % 60;
    
    $days.innerHTML=calcDays;
    $hours.innerHTML=calcHours;
    $minutes.innerHTML=calcMinutes;
    $seconds.innerHTML=calcseconds;

if (totalTime < 0) {
    clearInterval(countdownnTempo);
    $days.innerHTML="";
    $hours.innerHTML=null;
    $minutes.innerHTML=null;
    $seconds.innerHTML=null;
$msj.innerHTML=`<h2 class="title1">Muchas felicidades🥳</h2>
<h2 class="title1">Estas Aprendiendo JavaScript 💻🔥</h2>  
<h2 class="title1">sigue entrenando tu cerebro 🧠🦾</h2>`
    
}
 },1000);   


}