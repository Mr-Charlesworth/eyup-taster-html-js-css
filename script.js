const hitCounter = document.getElementById('hit-counter');

let hits = 0;
let gameStarted = false;

function incrementHits() {
  if (gameStarted) {
    hits = hits + 1;
    hitCounter.textContent = hits;
  }
}

const walls = document.querySelectorAll('.wall');

walls.forEach(function (wall) {
  wall.onmouseover = incrementHits;
});

const resetBtn = document.getElementById('btn-reset');
const finishBtn = document.getElementById('btn-finish');

function reset() {
  hits = 0;
  hitCounter.textContent = hits;
  gameStarted = false;
  finishBtn.disabled = true;
  startBtn.disabled = false;
  stopTimer();
}

resetBtn.onclick = reset;

let startTime = Date.now();
let timeElapsed;
let timerInterval;

const timeElapsedEl = document.getElementById('time-elapsed');
const startBtn = document.getElementById('btn-start');

function updateTimer() {
  timeElapsed = Date.now() - startTime;
  timeElapsedEl.textContent = timeElapsed;
}

function startGame() {
  startBtn.disabled = true;
  finishBtn.disabled = false;
  clearInterval(timerInterval);
  gameStarted = true;
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1);
}

startBtn.onclick = startGame;

function stopTimer() {
  clearInterval(timerInterval);
  timeElapsedEl.textContent = 0;
}

function alertOutOfBounds() {
  if (gameStarted) {
    alert('No Cheating!');
    reset();
  }
}

function finishGame() {
  stopTimer();
  alert('You got ' + hits + ' hits in ' + timeElapsed/1000 + ' seconds');
  reset();
}

finishBtn.onclick = finishGame;

const body = document.getElementById('body');

body.onmouseleave = alertOutOfBounds;