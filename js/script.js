var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".viewScores");
var contentEl = document.querySelector(".card-content");
var footerEl = document.querySelector(".card-footer");
var startEl = document.getElementById("btn");

var scoreCounter = 0;
var initials = "";
var timer;
var timerCount;

// Arrays of questions used for quiz content on the screen
var quizContent = [{
  question: "Commonly used data types DO NOT include:",
  choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  correctAnswer: 2
}, {
  question: "The condition in an if / else statement is enclosed within _____.",
  choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  correctAnswer: 2
}, {
  question: "Arrays in JavaScript can be used to store ____.",
  choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  correctAnswer: 3
}, {
  question: "String values must be enclosed within _____ when being assigned to variables.",
  choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  correctAnswer: 2
}, {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
  correctAnswer: 3
}];

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startEl.disabled = true;
  startTimer()
  loadContent()
}

// The setTimer function starts and stops the timer and triggers setScore() 
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    if (timerCount > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timerCount;
      // Decrement `timeLeft` by 1
      timerCount--;
      // Do I need to add another conditional - else if - when all questions answered before time runs out? 
     } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '0';
        // Use `clearInterval()` to stop the timer
        clearInterval(timer);
        // setScore();
      }
    }, 1000);
    }

// Attach event listener to start button to call startGame function on click
startEl.addEventListener("click", startGame);

// Highlights the button when clicked
startEl.setAttribute("style", "background-image:highlightedButton.png");

// Loads content on screen
// function loadContent() {
  // Do following function to each array element
    //quizContent.forEach( **name of function**)

  // Replace existing html content with quizContent array starting with item [0]
  // contentEl.textContent =
    // <h2>quizContent.question<h2>
      // <ul>
        // <li>quizContent.choices[0]]</li>...or buttons?
        // <li>quizContent.choices[1]]</li>
        // <li>quizContent.choices[2]]</li>
        // <li>quizContent[choices[3]]</li>
        // <li>quizContent[choices[4]]</li>
      // </ul>
// }

// Attach event listener -on click- to quizContent.choices[i] to confirm quizContent[correctAnswer]
  // quizContent.choices[i].addEventListener("click", rightWrong);
  //   if (timerCount === 0) {
  //     return;

// function for confirming if the click is right or wrong
// function rightWrong() {
    // conditional - if quizContent.choice = index that matches quizContent.answer
    // footerEl.textContent = "Correct!";
    // call the function - keepScore()
    // else if quizContent.choice != quizContent.answer
    // call the function - wrongAnswer()
// }

// The keepScore function is called when the rightWrong condition is met
// function keepScore() {
//   scoreCounter++
//   setScore()
// }

// Function for recording initials along with score

// Updates scoreCounter and saves count to client storage
// function setScore() {
//   score.textContent = scoreCounter;
//   localStorage.setItem("keepScore", scoreCounter);
// }

// Conditional statement that takes time away from timer if answer is wrong
// function wrongAnswer() {
//   // if eventlistener - click - !answer - subtract 5 seconds from timer
//   // footerEl.textContent = "Wrong!"
//   // maybe update timer text on screen? 
// }

// These functions are used by init
// function getScore() {
  // Get stored value from client storage, if it exists
  // var storedWins = localStorage.getItem("keepScore");
  // If stored value doesn't exist, set counter to 0
  // if (storedWins === null) {
    // scoreCounter = 0;
  // } else {
    // If a value is retrieved from client storage set the keepCounter to that value
    // keepCounter = storedWins;
  // }
// }

// Do the same as above for initials of user

//Render score count when click on scoreEl - event listener
    // scoreEl.addEventListener("click", displayScore)
    // Put details in a pop-up window? Alert window?
      // The current highest score is + score + by + initials


// Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetQuiz() {
//   // Clears high scores
//   keepScore = 0;
//   initialsCounter = "";
//   // Renders score and initials counts and sets them into client storage
//   setScore()
//   setInitials()
// }

// // Attaches event listener to button
// resetButton.addEventListener("click", resetQuiz);

//  Add play again button?
