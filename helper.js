const hitCounter = document.getElementById('hit-counter');
const walls = document.querySelectorAll('.wall');
const resetBtn = document.getElementById('btn-reset');
const finishBtn = document.getElementById('btn-finish');
const timeElapsedEl = document.getElementById('time-elapsed');
const startBtn = document.getElementById('btn-start');
const body = document.getElementById('body');

// All the above lines are getting references to the HTML elements inside index.html
// The only one that is slightly different is walls, I'm using a query selector to get all elements with the class 'wall'
// The selector to do this is actually the same as a CSS class selector would be, with a dot.
// 'walls', therefore, can be thought of as an array of element references
// 'getElementById' and 'querySelectorAll' are functions available on the document object
// The document object gives us access to the HTML document