let x=0,
y = 0;


export function moveBall(e,ball,stage){
    const $ball=document.querySelector(ball),
    $stage=document.querySelector(stage);
    const limitsBall=$ball.getBoundingClientRect();
    const limitstage=$stage.getBoundingClientRect();
    console.log(limitsBall,limitstage)

    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if(limitsBall.left > limitstage.left)x--;
            break;
        case 38:
            e.preventDefault();
            if(limitsBall.top > limitstage.top)y--;
            break;
        case 39:
            e.preventDefault();
            if(limitsBall.right < limitstage.right)x++;
            break;
        case 40:
            e.preventDefault();
            if(limitsBall.bottom < limitstage.bottom)y++;
            break;
        default:
            break;   
    }
    $ball.style.transform =`translate(${x*8}px, ${y*7.5}px)`;
}

export function shortcuts (e){
    
    if (e.key ==="a" && e.altKey) {
        alert("estas utilizando un evento del teclado para generar esta alert");   
    }
    if (e.key ==="p" && e.altKey) {
        prompt("estas utilizando un evento del teclado para generar este pront");   
    }
    if (e.key ==="c" && e.altKey) {
        confirm("estas utilizando un evento del teclado para generar esta confirmacion");   
    }
}