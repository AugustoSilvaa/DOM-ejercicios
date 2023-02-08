

export default function webCam(id){
    const $video = document.getElementById(id);

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video:true, audio:false}).then((stream)=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play();

        })

        .catch((err)=>{
            $video.insertAdjacentHTML("afterend",`<p><mark> se a producido el sguiente error: <br> ${err} </p></mark>
            `);
console.log(`Se a producido el siguiente error : ${err}`)

        })
        
    }
}