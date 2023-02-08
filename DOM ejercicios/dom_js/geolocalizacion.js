
export default function getGeolocation(id){
    const $container =document.getElementById(id),

    options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,
    };

    const success =(position)=>{
        let coords = position.coords;
        console.log(position);

        $container.innerHTML=`<p>Tu posición actual es: </p> <ul class="listGeo">
        <li>Latitud:<b>${coords.latitude}</b></li>
        <li>Longitud:<b>${coords.longitude}</b></li>
        <li>Precisión:<b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" class="g-mapslink" target="_blank" rel="noopener" > Ver en Google Maps</a>
        `
    };

const error =(err)=>{
    $container.innerHTML=`<p><mark> Error: ${err.code}:${err.message}</mark></p>`
    console.log(`Error: ${err.code}: ${err.message} `)
};

navigator.geolocation.getCurrentPosition(success,error,options)

}