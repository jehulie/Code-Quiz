var timerEl = document.querySelector(".timer-count");
var scoreEl = document.querySelector(".viewScores");
var startScreen = document.getElementById("start-screen");
var contentEl = document.querySelector(".card-content");
var footerEl = document.querySelector(".card-footer");
var startEl = document.getElementById("btn");
var questionsEL = document.getElementById("quiz-section");
var quizChoices = document.getElementById("questions");
var scoreScreen = document.getElementById("score-screen");
var submitButton = document.getElementById("submit-button");
var userInitials = document.getElementById("initials");
var playAgain = document.getElementById("btn-again");
var viewScores = document.getElementById("highScores-section");
var scoresTable = document.getElementById ('highScores-display');

var currentQindex = 0;
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
  startScreen.setAttribute("class", "hide");
  questionsEL.classList.remove("hide");
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startEl.disabled = true;
  startTimer()
  loadContent()
}

// The setTimer function starts and stops the timer and triggers setScore() at the end 
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    if (timerCount >= 1) {
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
        finalScreen();
        // setScore();
      }
    }, 1000);
    }

// Attach event listener to start button to call startGame function on click
startEl.addEventListener("click", startGame);

// Highlights the button when clicked
startEl.setAttribute("style", "background-image:highlightedButton.png");

// The function loadContent displays all the quiz content on screen
function loadContent() {
  var currentQuestion = quizContent[currentQindex];
  var questionTitle = document.getElementById("question-title");
  questionTitle.setAttribute("class", "question-font");
  questionTitle.textContent = currentQuestion.question;
  quizChoices.innerHTML = ""
  for (var i = 0; i < currentQuestion.choices.length; i++) {
  var quizAns = document.createElement('button');
  quizAns.setAttribute ("class", "choice-button")
  quizAns.setAttribute("value", i)
   quizAns.textContent = currentQuestion.choices[i];
   quizAns.onclick = questionClick;
   console.log (quizAns);
  quizChoices.appendChild(quizAns);
  }
}
// This function questionClick confirms the answer and then loads the next question on click of button
function questionClick(){
  console.log(this.value);
  if(parseInt(this.value) !== quizContent[currentQindex].correctAnswer){
    footerEl.textContent = "Wrong!";
     var penalty = 10;
     timerCount = timerCount - penalty;
     timerEl.textContent = timerCount;
  }
  else{
    footerEl.textContent = "Correct!";
  }
  currentQindex++;
  if(currentQindex === quizContent.length) {
    finalScreen();
  }
  else {
    loadContent();
  }
}

// This function finalScreen loads the final screen content
function finalScreen(){
  console.log(timerCount);
  clearInterval(timer);
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = timerCount + " is your Final Score."
//  remove hide for scoreScreen
  scoreScreen.classList.remove("hide");
  questionsEL.setAttribute("class", "hide");
  footerEl.textContent = "Click button to restart quiz";
}
// This function saves the timerCount as the score and the input - initials - to local storage
function saveHighscore(){
  var initial = userInitials.value.trim();
  var highScore = JSON.parse(localStorage.getItem("highScores")) || [];
  var newHighscore = {
    score: timerCount, 
    initials: initial,
  };
  highScore.push(newHighscore);
  localStorage.setItem("highScores",JSON.stringify(highScore));
  console.log(highScore);
  console.log(localStorage);
  viewScores.classList.remove("hide");
  loadScores();
  }

  // This function appends a display of the high scores after the user submits initials 
  // ** Need to fix format of displayed data **
function loadScores(){
  scoresTable.setAttribute("value",localStorage);
    var scoresResults = JSON.parse(localStorage.getItem('highScores'));
    console.log(scoresResults);
    scoresResults.sort (
      function(a, b){return b.score-a.score}
    );
    for (var i=0; i<scoresResults.length; i++){
      var listEl = document.createElement('li')
      listEl.textContent = scoresResults[i].initials + ": " + scoresResults[i].score
      scoresTable.appendChild(listEl);
    }   
}
 
submitButton.onclick = saveHighscore;

// Takes user back to homepage on click
playAgain.onclick = restartQuiz;

function restartQuiz(){
  scoreScreen.setAttribute("class", "hide");
  window.location.reload();
}

//Lets user view high scores on home page - on click - before starting the quiz
scoreEl.addEventListener("click", displayScores);

function displayScores(){
  startScreen.setAttribute("class", "hide");
  footerEl.setAttribute("class", "hide");
  viewScores.classList.remove("hide");
  loadScores();
  var returnHome = document.getElementById('back-button');
  returnHome.classList.remove("hide");
  returnHome.onclick = restartQuiz;
}

//Render highest score count when click on scoreEl - event listener
    // scoreEl.addEventListener("click", displayScore)
    // function to filter for highest score 
    // Put details in a pop-up window? Alert window?
      // The current highest score is + score + by + initials

