const n=document.querySelectorAll("button").length;

for (var i=0;i<n;i++){
    var ele=document.querySelectorAll("button")[i];
    switch(i){
        case 0:
            ele.addEventListener('keydown',myclick0);
            //ele=this;
            //this.
            break;
        case 1:
            ele.addEventListener("click",myclick1);
            break;
        case 2:
            ele.addEventListener("click",myclick2);
            break;
        case 3:
            ele.addEventListener("click",myclick3);
            break;
        case 4:
            ele.addEventListener("click",myclick4);
            break;
        case 5:
            ele.addEventListener("click",myclick5);
            break;
        case 6:
            ele.addEventListener("click",myclick6);
            break;
    }
}


function myclick0(){
    //const keyname=myclick0.key;
    //if (keyname==='w'){
    var aud=new Audio("sounds/tom-1.mp3");
    aud.play();//}
}

function myclick1(){
    var aud=new Audio("sounds/tom-2.mp3");
    aud.play();
}
function myclick2(){
    var aud=new Audio("sounds/tom-3.mp3");
    aud.play();
}
function myclick3(){
    var aud=new Audio("sounds/tom-4.mp3");
    aud.play();
}
function myclick4(){
    var aud=new Audio("sounds/snare.mp3");
    aud.play();
}
function myclick5(){
    var aud=new Audio("sounds/crash.mp3");
    aud.play();
}
function myclick6(){
    var aud=new Audio("sounds/kick-bass.mp3");
    aud.play();
}