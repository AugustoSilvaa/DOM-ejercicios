

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
let breakpoint = window.matchMedia(mq);

const resposive =(e)=>{
    if (e.matches) {
        document.getElementById(id).innerHTML=desktopContent;
    }else{
        document.getElementById(id).innerHTML=mobileContent;
    }
};

breakpoint.addListener(resposive);
resposive(breakpoint);
}