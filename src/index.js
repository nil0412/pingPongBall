
window.addEventListener("load", ()=>{
    initializeGame();
});

let stick = document.getElementsByClassName("stick");

var moveStick = 10;

var is_Stick_1_Turn = true;

var ball = document.getElementById("ball");

function initializeGame(){
    stick[0].style.left = 200 + "px";
    stick[1].style.left = 200 + "px";
    if(is_Stick_1_Turn === true){
        ball.style.top = 0 + "px";
    }
    else{
        ball.style.top = 416 + "px";
    }
}

window.addEventListener("keypress", (event)=>{
    switch(event.key){
        case "a":
            if(parseInt(stick[0].style.left)>0){
                stick[0].style.left = parseInt(stick[0].style.left) - moveStick + "px";
                stick[1].style.left = parseInt(stick[1].style.left) - moveStick + "px";
            }
            break;
        case "d":
            if(parseInt(stick[1].style.left)<400){
                stick[0].style.left = parseInt(stick[0].style.left) + moveStick + "px";
                stick[1].style.left = parseInt(stick[1].style.left) + moveStick + "px";
            }
            break;
    }
});




