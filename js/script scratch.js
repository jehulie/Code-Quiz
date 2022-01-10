var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".viewScores");
var contentEl = document.querySelector(".card-content");
var footerEl = document.querySelector(".card-footer");
var startEl = document.querySelector(".btn");

var scoreCounter = 0;
var initials = "";
var timer;
var timerCount;

// Arrays of questions used for quiz content on the screen
var questions = [{
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

// The init function is called when the page loads 
// function init() {
//   clearInterval(timer);
//   timerEl.textContent = 0;
//   // getScore();
// }
// init ();

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  // startEl.disabled = true;
  startTimer()
  // loadContent()
}

// The keepScore function is called when the scoreCounter condition is met
// function keepScore() {
//   // wordBlank.textContent = "YOU WON!!!🏆 ";
//   scoreCounter++
//   setScore()
// }

// Function for recording initials along with score

// The setTimer function starts and stops the timer and triggers setScore() 
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    if (timerCount > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timerCount;
      // Decrement `timeLeft` by 1
      timerCount--;
     } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '0';
        // Use `clearInterval()` to stop the timer
        clearInterval(timer);
        // Call the `displayMessage()` function
        // displayMessage();
      }
    }, 1000);
    }
//     if (timerCount >0) {
//       // Tests if win condition is met
//       // if (isWin && timerCount > 0) {
//       //   // Clears interval and stops timer
//       //   clearInterval(timer);
//       //   keepScore();
//       }
//     })
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       // setScore();
//       // startEl.disabled = false;
//     // }
//   } 1000;
// }

// Attach event listener to start button to call startGame function on click
$(startEl).on("click", startGame())
// startEl.addEventListener("click", startGame);


// Loads content on screen
// function loadContent() {
  // Consists of functions - loadQuestion + loadChoices
  // Randomly picks from array??
  // Converts array into a string and renders it on the screen
  // wordBlank.textContent = blanksLetters.join(" ")
// }

  // Replace existing html content with quizContent array starting with quizContent[1] - 
    // how to show quizContent for one array item at a time on the web page?
  // contentEl.textContent =

// as loop for answer list?
// for (var i = 0; i < quizContent.choices.length; i++) {function
  // var quizQ = document.createElement('h3');
  // var quizAns = document.createElement('btn');
  //  quizQ.textContent = quizContent[i].question;
  //  quizAns.textContent = quizContent[i].choices[i];
//       contentEl.text(quizQ);
//       contentEL.text(quizA);
  // }

  // Do following function to each array element - how to show quizContent for one array item at a time?
    //quizContent.forEach( **name of function**)...or just regular "for" loop?

    // <h2>quizContent.question<h2>
      // <ul>
        // <li><btn>quizContent.choices[0]]</btn></li>...or buttons?
        // <li>quizContent.choices[1]]</li>
        // <li>quizContent.choices[2]]</li>
        // <li>quizContent[choices[3]]</li>
        // <li>quizContent[choices[4]]</li>
      // </ul>
// }


// Updates keepScore counter on screen and saves count to client storage
// function keepScore() {
//   score.textContent = keepCounter;
//   // right.textContent = "Correct!"
//   localStorage.setItem("keepCount", keepCounter);
// }

// Conditional statement that takes time away from timer if answer is wrong
// function wrongAnswer() {
//   // if eventlistener - click - !answer - subtract 5 seconds from timer
//   // wrong.textContent = "Wrong!"
//   // maybe update timer text on screen? 
// }

// These functions are used by init
// function getScore() {
  // Get stored value from client storage, if it exists
  // var storedWins = localStorage.getItem("keepCount");
  // If stored value doesn't exist, set counter to 0
  // if (storedWins === null) {
    // keepCounter = 0;
  // } else {
    // If a value is retrieved from client storage set the keepCounter to that value
    // keepCounter = storedWins;
  // }
// }

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

// Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetQuiz() {
//   // Clears high scores
//   keepCounter = 0;
//   initialsCounter = "";
//   // Renders score and initials counts and sets them into client storage
//   setScore()
//   setInitials()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetQuiz);

//  Add play again button?
