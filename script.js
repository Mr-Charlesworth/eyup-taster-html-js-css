let hits = 0; // initial hits
let gameStarted = false; // initial game state

// We use this function to increment hits, it only increments if the game has started
function incrementHits() {
  if (gameStarted) {
    hits = hits + 1; // make hits bigger by 1 more than it was
    hitCounter.textContent = hits; // update the textContent of the hitCounter element
  }
}

// Function to run for each wall in the 'walls' collection of elements
function addWallEvent(wall) {
  wall.onmouseover = incrementHits; // assign the incrementHits function as the function to run when the mouse enters a wall
}

walls.forEach(addWallEvent); // execute the addWallEvent for each wall in walls

// Used to reset the game state when finished a game, reset, or has attempted to cheat
function reset() {
  hits = 0; // hits back to 0
  hitCounter.textContent = hits;
  gameStarted = false; // no longer playing a game
  finishBtn.disabled = true; // disable the finish button
  startBtn.disabled = false; // enable the start button
  stopTimer(); // execute the function to stop the timer
}

resetBtn.onclick = reset; // execute the reset function when the reset button is clicked

// Declare some variables needed for timing
let startTime = Date.now(); // Date.now() returns number of milliseconds since midnight Jan 1st 1970
let timeElapsed;
let timerInterval;

// Function to update the timer (will run every millisecond)
function updateTimer() {
  timeElapsed = Date.now() - startTime; // Time elapsed is now minus the start time
  timeElapsedEl.textContent = timeElapsed; // Update the time in the HTML document
}

// function to set everything up when the game starts
function startGame() {
  startBtn.disabled = true; // Disable the start button
  finishBtn.disabled = false; // Enable the finish button
  clearInterval(timerInterval); // If we were already updating the timer, stop it so that we can start afresh
  gameStarted = true; // update game state
  startTime = Date.now(); // reset the start time
  timerInterval = setInterval(updateTimer, 1); // setInterval is built in to JavaScript, it accepts a function to run and how often to run it in milliseconds
  // We can store a reference to the running interval in timeInterval so that we can later stop it running
}

startBtn.onclick = startGame; // Start the game when we click the start button

// function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  timeElapsedEl.textContent = 0;
}

// function to run if the mouse leaves the document (user trying to cheat!?)
function alertOutOfBounds() {
  if (gameStarted) {
    alert('No Cheating!'); // alert shows the dialog with the message in the browser
    reset();
  }
}

// function to set up the end of the game and tell the player how they have done
function finishGame() {
  stopTimer(); // stop the timer
  alert('You got ' + hits + ' hits in ' + timeElapsed/1000 + ' seconds'); // tell the player how they did with the alert dialog
  reset(); // reset the game for the next play
}

finishBtn.onclick = finishGame; // Finish the game when the finish button is clicked

body.onmouseleave = alertOutOfBounds; // assign the alertOutOfBounds function to the event when the mouse leaves the HTML body