document.addEventListener("keypress",function_list);

var buttons = document.querySelectorAll("button");

var n=buttons.length;

for(let i=0;i<n;i++){
    buttons[i].addEventListener("click",playOnClick);
}
function playOnClick(event){
    let tmp= event.target.innerHTML;
        switch(tmp){
            case "w":
                var aud=new Audio("sounds/tom-1.mp3");
                aud.play();
                document.querySelector(".w").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".w").classList.remove("pressed");
                },100);
                break;
            case "a":
                var aud=new Audio("sounds/tom-2.mp3");
                aud.play();
                document.querySelector(".a").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".a").classList.remove("pressed");
                },100);
                break;
            case "s":
                var aud=new Audio("sounds/tom-3.mp3");
                aud.play();
                document.querySelector(".s").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".s").classList.remove("pressed");
                },100);
                break;
            case "d":
                var aud=new Audio("sounds/tom-4.mp3");
                aud.play();
                document.querySelector(".d").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".d").classList.remove("pressed");
                },100);
                break;
            case "j":
                var aud=new Audio("sounds/snare.mp3");
                aud.play();
                document.querySelector(".j").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".j").classList.remove("pressed");
                },100);
                break;
            case "k":
                var aud=new Audio("sounds/crash.mp3");
                aud.play();
                document.querySelector(".k").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".k").classList.remove("pressed");
                },100);
                break;
            case "l":
                var aud=new Audio("sounds/kick-bass.mp3");
                aud.play();
                document.querySelector(".l").classList.add("pressed");
                setTimeout(function(){
                    document.querySelector(".l").classList.remove("pressed");
                },100);
                break;
        }
}


function function_list(event){
    soundPlayer(event);
    animator(event);
}

function soundPlayer(event){
    switch(event.key){
        case "w":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;    
    }
}
function animator(event){
    
    switch(event.key){
        case "w":
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed");
            },100);
            break;
        case "a":
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed");
            },100);
            break;
        case "s":
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed");
            },100);
            break;
        case "d":
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed");
            },100);
            break;
        case "j":
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed");
            },100);
            break;
        case "k":
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed");
            },100);
            break;
        case "l":
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed");
            },100);
            break;
        }
    }
