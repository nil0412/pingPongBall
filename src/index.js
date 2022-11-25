
window.addEventListener("load", ()=>{
    initializeGame();
});

let stick = document.getElementsByClassName("stick");

var moveStick = 100;

var is_Stick_1_Turn = true;

var interval_ID;

var gameStarted;

var ball = document.getElementById("ball");

function initializeGame(){

    stick[0].style.left = 200 + "px";
    stick[1].style.left = 200 + "px";
    // ball.style.left = 237 + "px";
    if(is_Stick_1_Turn === true){
        ball.style.top = 0 + "px";
        ball.style.left = 237 + "px";
    }
    else{
        ball.style.top = 416 + "px";
        ball.style.left = 237 + "px";
    }

    gameStarted = false;

    window.addEventListener("keypress", (event)=>{
        if(event.key === "Enter"){
            if(gameStarted === false){
                gameStarted = true;
                start();
            }
        }
    });
}

function start(){
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

    gameStarts();
}

var topPos;
var leftPos;

function gameStarts(){
    topPos = parseInt(ball.style.top);
    leftPos = parseInt(ball.style.left);

    if(is_Stick_1_Turn === true){
        bottomRight();
    }
    else{
        topLeft();
    }
}

var stick1_Left;
var stick2_Left;

function bottomRight(){
    interval_ID = setInterval(
        function(){
            topPos = parseInt(ball.style.top);
            leftPos = parseInt(ball.style.left);
            stick2_Left = parseInt(stick[1].style.left);
            if(topPos === 416){
                if(stick2_Left - 13 > leftPos || stick2_Left + 100 + 13 < leftPos){
                    window.alert("Stick-1 Wins!!!");
                    is_Stick_1_Turn = false;
                    clearInterval(interval_ID);
                    gameEnds();
                }
                else if(leftPos === 474){
                    clearInterval(interval_ID);
                    topLeft();
                }
                else{
                    clearInterval(interval_ID);
                    topRight();
                }
            }
            else if(leftPos === 474){
                clearInterval(interval_ID);
                bottomLeft();
            }
            ball.style.left = leftPos + 1 + "px";
            ball.style.top = topPos + 1 + "px";
        },2);
}
function bottomLeft(){
    interval_ID = setInterval(
        function(){
            topPos = parseInt(ball.style.top);
            leftPos = parseInt(ball.style.left);
            stick2_Left = parseInt(stick[1].style.left);
            if(topPos === 416){
                if(stick2_Left - 13 > leftPos || stick2_Left + 100 + 13 < leftPos){
                    window.alert("Stick-1 Wins!!!");
                    is_Stick_1_Turn = false;
                    clearInterval(interval_ID);
                    gameEnds();
                }
                else if(leftPos === 0){
                    clearInterval(interval_ID);
                    topRight();
                }
                else{
                    clearInterval(interval_ID);
                    topLeft();
                }
            }
            else if(leftPos === 0){
                clearInterval(interval_ID);
                bottomRight();
            }
            ball.style.left = leftPos - 1 + "px";
            ball.style.top = topPos + 1 + "px";
        },2);
}
function topRight(){
    interval_ID = setInterval(
        function(){
            topPos = parseInt(ball.style.top);
            leftPos = parseInt(ball.style.left);
            stick1_Left = parseInt(stick[0].style.left);
            if(topPos === 0){
                if(stick1_Left - 13 > leftPos || stick1_Left + 100 + 13 < leftPos){
                    window.alert("Stick-2 Wins!!!");
                    is_Stick_1_Turn = true;
                    clearInterval(interval_ID);
                    gameEnds();
                }
                else if(leftPos === 474){
                    clearInterval(interval_ID);
                    bottomLeft();
                }
                else{
                    clearInterval(interval_ID);
                    bottomRight();
                }
            }
            else if(leftPos === 474){
                clearInterval(interval_ID);
                topLeft();
            }
            ball.style.left = leftPos + 1 + "px";
            ball.style.top = topPos - 1 + "px";
        },2);
}
function topLeft(){
    interval_ID = setInterval(
        function(){
            topPos = parseInt(ball.style.top);
            leftPos = parseInt(ball.style.left);
            stick1_Left = parseInt(stick[0].style.left);
            if(topPos === 0){
                if(stick1_Left - 13 > leftPos || stick1_Left + 100 + 13< leftPos){
                    window.alert("Stick-2 Wins!!!");
                    is_Stick_1_Turn = true;
                    clearInterval(interval_ID);
                    gameEnds();
                }
                else if(leftPos === 0){
                    clearInterval(interval_ID);
                    bottomRight();
                }
                else{
                    clearInterval(interval_ID);
                    bottomLeft();
                }
            }
            else if(leftPos === 0){
                clearInterval(interval_ID);
                topRight();
            }
            ball.style.left = leftPos - 1 + "px";
            ball.style.top = topPos - 1 + "px";
        },2);
}

function gameEnds(){
    initializeGame();
}







