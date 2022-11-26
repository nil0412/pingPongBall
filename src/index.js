var interval_ID;
var ball_topPos;
var ball_leftPos;
var stick_left;
var score = 0;

var ball_speed;

var is_game_running = false;
var is_stick_1_turn = true;

var stick = document.getElementsByClassName("stick");
var ball = document.getElementById("ball");

var ball_zone = document.getElementById("ball-zone");
var ball_zone_dim = ball_zone.getBoundingClientRect();

stick[0].style.left = Math.round(ball_zone_dim.width / 2 - 50) + "px";
stick[1].style.left = Math.round(ball_zone_dim.width / 2 - 50) + "px";

var stick_left_limit = Math.round(ball_zone_dim.width - 100);

ball.style.left = Math.round(ball_zone_dim.width / 2 - 10) + "px";
ball.style.top = 0 + "px";

var ball_bottom_limit = Math.round(ball_zone_dim.height - 24);
var ball_left_limit = Math.round(ball_zone_dim.width - 20);

var displace_stick_by = Math.round(ball_zone_dim.width / 10);

window.addEventListener("load", () => {});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    enter_pressed();
  }
});

function initialize_game() {
  score = 0;

  stick[0].style.left = Math.round(ball_zone_dim.width / 2 - 50) + "px";
  stick[1].style.left = Math.round(ball_zone_dim.width / 2 - 50) + "px";

  ball.style.left = Math.round(ball_zone_dim.width / 2 - 10) + "px";
  if (is_stick_1_turn) {
    ball.style.top = 0 + "px";
  } else {
    ball.style.top = ball_bottom_limit + "px";
  }

  is_game_running = false;
}

var left_btn = document.getElementById("left-btn");
var right_btn = document.getElementById("right-btn");
var play_btn = document.getElementById("play-btn");

left_btn.onclick = a_pressed;
right_btn.onclick = d_pressed;
play_btn.onclick = enter_pressed;

function a_pressed() {
  if (parseInt(stick[0].style.left, 10) > 0) {
    if (parseInt(stick[0].style.left, 10) - displace_stick_by > 0) {
      stick[0].style.left =
        parseInt(stick[0].style.left, 10) - displace_stick_by + "px";
      stick[1].style.left =
        parseInt(stick[1].style.left, 10) - displace_stick_by + "px";
    } else {
      stick[0].style.left = 0 + "px";
      stick[1].style.left = 0 + "px";
    }
  }
}

function d_pressed() {
  if (parseInt(stick[0].style.left, 10) < stick_left_limit) {
    if (
      parseInt(stick[0].style.left, 10) + displace_stick_by <
      stick_left_limit
    ) {
      stick[0].style.left =
        parseInt(stick[0].style.left, 10) + displace_stick_by + "px";
      stick[1].style.left =
        parseInt(stick[1].style.left, 10) + displace_stick_by + "px";
    } else {
      stick[0].style.left = stick_left_limit + "px";
      stick[1].style.left = stick_left_limit + "px";
    }
  }
}

function enter_pressed() {
  if (is_game_running === false) {
    is_game_running = true;
    start_game();
  } else {
    clearInterval(interval_ID);
    initialize_game();
  }
}

function start_game() {
  window.addEventListener("keypress", (event) => {
    switch (event.key) {
      case "a":
        a_pressed();
        break;
      case "d":
        d_pressed();
        break;
      default:
        break;
    }
  });
  ball_movement_starts();
}

function ball_movement_starts() {
  if (is_stick_1_turn) {
    bottom_right();
  } else {
    top_left();
  }
}

if (ball_zone_dim.width > 400) {
  ball_speed = 2;
} else {
  ball_speed = 5;
}

function bottom_right() {
  interval_ID = setInterval(function () {
    ball_topPos = parseInt(ball.style.top, 10);
    ball_leftPos = parseInt(ball.style.left, 10);
    stick_left = parseInt(stick[0].style.left, 10);
    if (ball_topPos === ball_bottom_limit) {
      if (
        stick_left - 10 > ball_leftPos ||
        stick_left + 100 + 10 < ball_leftPos
      ) {
        if (localStorage.getItem("maxScore") === undefined) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-1 Wins and made **New High Score** : " +
              score
          );
        } else if (localStorage.getItem("maxScore") < score) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-1 Wins and made **New High Score** : " +
              score
          );
        } else {
          window.alert(
            "Congratulations!!!  Stick-1 Wins | score : " +
              score +
              " | High Score : " +
              localStorage.getItem("maxScore")
          );
        }
        is_stick_1_turn = false;
        clearInterval(interval_ID);
        gameEnds();
      } else if (ball_leftPos === ball_left_limit) {
        clearInterval(interval_ID);
        score += 10;
        top_left();
      } else {
        clearInterval(interval_ID);
        score += 10;
        top_right();
      }
    } else if (ball_leftPos === ball_left_limit) {
      clearInterval(interval_ID);
      bottom_left();
    }

    ball.style.backgroundColor = "snow";
    ball.style.left = ball_leftPos + 1 + "px";
    ball.style.top = ball_topPos + 1 + "px";
  }, ball_speed);
}
function bottom_left() {
  interval_ID = setInterval(function () {
    ball_topPos = parseInt(ball.style.top, 10);
    ball_leftPos = parseInt(ball.style.left, 10);
    stick_left = parseInt(stick[0].style.left, 10);
    if (ball_topPos === ball_bottom_limit) {
      if (
        stick_left - 10 > ball_leftPos ||
        stick_left + 100 + 10 < ball_leftPos
      ) {
        if (localStorage.getItem("maxScore") === undefined) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-1 Wins and made **New High Score** : " +
              score
          );
        } else if (localStorage.getItem("maxScore") < score) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-1 Wins and made **New High Score** : " +
              score
          );
        } else {
          window.alert(
            "Congratulations!!!  Stick-1 Wins | score : " +
              score +
              " | High Score : " +
              localStorage.getItem("maxScore")
          );
        }
        is_stick_1_turn = false;
        clearInterval(interval_ID);
        gameEnds();
      } else if (ball_leftPos === 0) {
        clearInterval(interval_ID);
        score += 10;
        top_right();
      } else {
        clearInterval(interval_ID);
        score += 10;
        top_left();
      }
    } else if (ball_leftPos === 0) {
      clearInterval(interval_ID);
      bottom_right();
    }
    ball.style.backgroundColor = "yellow";
    ball.style.left = ball_leftPos - 1 + "px";
    ball.style.top = ball_topPos + 1 + "px";
  }, ball_speed);
}
function top_right() {
  interval_ID = setInterval(function () {
    ball_topPos = parseInt(ball.style.top, 10);
    ball_leftPos = parseInt(ball.style.left, 10);
    stick_left = parseInt(stick[0].style.left, 10);
    if (ball_topPos === 0) {
      if (
        stick_left - 10 > ball_leftPos ||
        stick_left + 100 + 10 < ball_leftPos
      ) {
        if (localStorage.getItem("maxScore") === undefined) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-2 Wins and made **New High Score** : " +
              score
          );
        } else if (localStorage.getItem("maxScore") < score) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-2 Wins and made **New High Score** : " +
              score
          );
        } else {
          window.alert(
            "Congratulations!!!  Stick-2 Wins | score : " +
              score +
              " | High Score : " +
              localStorage.getItem("maxScore")
          );
        }
        is_stick_1_turn = true;
        clearInterval(interval_ID);
        gameEnds();
      } else if (ball_leftPos === ball_left_limit) {
        clearInterval(interval_ID);
        score += 10;
        bottom_left();
      } else {
        clearInterval(interval_ID);
        score += 10;
        bottom_right();
      }
    } else if (ball_leftPos === ball_left_limit) {
      clearInterval(interval_ID);
      top_left();
    }
    ball.style.backgroundColor = "lawngreen";
    ball.style.left = ball_leftPos + 1 + "px";
    ball.style.top = ball_topPos - 1 + "px";
  }, ball_speed);
}
function top_left() {
  interval_ID = setInterval(function () {
    ball_topPos = parseInt(ball.style.top, 10);
    ball_leftPos = parseInt(ball.style.left, 10);
    stick_left = parseInt(stick[0].style.left, 10);
    if (ball_topPos === 0) {
      if (
        stick_left - 10 > ball_leftPos ||
        stick_left + 100 + 10 < ball_leftPos
      ) {
        if (localStorage.getItem("maxScore") === undefined) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-2 Wins and made **New High Score** : " +
              score
          );
        } else if (localStorage.getItem("maxScore") < score) {
          localStorage.setItem("maxScore", score);
          window.alert(
            "Congratulations!!!  Stick-2 Wins and made **New High Score** : " +
              score
          );
        } else {
          window.alert(
            "Congratulations!!!  Stick-2 Wins | score : " +
              score +
              " | High Score : " +
              localStorage.getItem("maxScore")
          );
        }
        is_stick_1_turn = true;
        clearInterval(interval_ID);
        gameEnds();
      } else if (ball_leftPos === 0) {
        clearInterval(interval_ID);
        score += 10;
        bottom_right();
      } else {
        clearInterval(interval_ID);
        score += 10;
        bottom_left();
      }
    } else if (ball_leftPos === 0) {
      clearInterval(interval_ID);
      top_right();
    }
    ball.style.backgroundColor = "pink";
    ball.style.left = ball_leftPos - 1 + "px";
    ball.style.top = ball_topPos - 1 + "px";
  }, ball_speed);
}

function gameEnds() {}
