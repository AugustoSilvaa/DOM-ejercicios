
export  function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;

    document.addEventListener("click",(e)=>{

        if(e.target.matches(btnPlay)) {
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML=`<h2 class="clockHour"> ${clockHour}</h2>`
            },500)
            e.target.disabled=true;
            
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            document.querySelector(clock).innerHTML=`<h1 >00:00:00</h1>`
            document.querySelector(btnPlay).disabled=false;
        }
    })
}

export function alarm(sound,btnPlay,btnStop){
    let alarmTempo;
    const $alarm =document.createElement("audio");
    $alarm.src=sound;

    document.addEventListener("click", (e)=>{
        if (e.target.matches(btnPlay)) {
            alarmTempo=setTimeout(()=>{
                $alarm.play();

            },1000)

            e.target.disabled=true; 
        }

        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime;
            document.querySelector(btnPlay).disabled=false;
        }
    })
}