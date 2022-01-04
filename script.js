var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".viewScores");
var challengeEl = document.querySelector(".challenge");
var questionEl = document.querySelector(".question");
var contentEl = document.querySelector(".content");

var scoreCounter = 0;
var initials = "";
// var isWin = false;
var timer;
var timerCount;

// Arrays used for quiz content on the screen
// var questions = [{
//   question: "Commonly used data types DO NOT include:",
//   choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//   correctAnswer: 2
// }, {
//   question: "The condition in an if / else statement is enclosed within _____.",
//   choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
//   correctAnswer: 2
// }, {
//   question: "Arrays in JavaScript can be used to store ____.",
//   choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
//   correctAnswer: 3
// }, {
//   question: "String values must be enclosed within _____ when being assigned to variables.",
//   choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
//   correctAnswer: 2
// }, {
//   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//   choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
//   correctAnswer: 3
// }];

// Need a var or function with initial content?
  // Centered <h1> Coding Quiz Challenge
  // Centered <p> Try to answer the following code-related questions within the time limit. 
  // Keep in mind that incorrect answers will penalize your score time by ten seconds!
  // Centered button “Start Quiz” 
    // when clicked, start timer & replace above text with quiz content

// The init function is called when the page loads 
function init() {
  getScore();
  // getTimerZero(); need to set Time to Zero
}

// The startGame function is called when the start button is clicked
function startGame() {
  // isWin = false;
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  loadContents()
  startTimer()
}

// The setScore function is called when the scoreCounter condition is met
function keepScore() {
  // wordBlank.textContent = "YOU WON!!!🏆 ";
  scoreCounter++
  setScore()
}

// Function for recording initials along with score

// The setTimer function starts and stops the timer and triggers setScore() 
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      // if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        keepScore();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      setScore();
      startButton.disabled = false;
    // }
  }, 1000);
}

// Loads content on screen
function loadContents() {
  // Consists of functions - loadQuestion + loadChoices
  // Randomly picks from array??
  }
  // Converts array into a string and renders it on the screen
  // wordBlank.textContent = blanksLetters.join(" ")
// }

// Updates keepScore counter on screen and saves count to client storage
function keepScore() {
  score.textContent = keepCounter;
  // right.textContent = "Correct!"
  localStorage.setItem("keepCount", keepCounter);
}

// Conditional statement that takes time away from timer if answer is wrong
function wrongAnswer() {
  // if eventlistener - click - !answer - subtract 5 seconds from timer
  // wrong.textContent = "Wrong!"
  // maybe update timer text on screen? 
}

// These functions are used by init
function getScore() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("keepCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    keepCounter = 0;
  } else {
    // If a value is retrieved from client storage set the keepCounter to that value
    keepCounter = storedWins;
  }
}
// Do the same as above for initials of user

//Render score count when click on scoreEl - event listener
  // Put details in a pop-up window? Alert window?
    // The current highest score is + score + by + initials

// Attach event listener to document to listen for key event - selecting multiple choice answers
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
// });

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Add reset button
var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
  // Clears high scores
  keepCounter = 0;
  initialsCounter = "";
  // Renders score and initials counts and sets them into client storage
  setScore()
  setInitials()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetQuiz);

//  Add play again button?
