function onloadFunc(){
    var winY = window.pageYOffset;
    const arrow = document.getElementById("arrow");
    if     (winY>300){arrow.style.display="block";}
    else if(winY<300){arrow.style.display="none";}
}

window.addEventListener('scroll',e=>{

    var winY = window.pageYOffset;
    const arrow = document.getElementById("arrow");
    if      (winY>300){arrow.style.display="block";}
    else if (winY<300){arrow.style.display="none";}
});