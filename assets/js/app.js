var questions = [
    { q: "True or False ?:The New York Yankees organization began as the Baltimore Orioles in 1901. In 1903 the team moved to New York and was renamed the  New York Highlanders",a: "New York Highlanders" },
    { q: "q2", a: "t" },
    { q: "q3", a: "f" },
    { q: "q4", a: "f" },
    { q: "q5", a: "f" }
  ];
  function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
    // If there aren't, render the end game screen.
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
      restartGame()
    }
  }

  // Function that updates the score...
  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

  function restartGame(){
    score = 0;
    questionIndex = 0;
    renderQuestions();
  }


  // MAIN PROCESS
  // ==============================================================================

  // Calling functions to start the game.


  // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {

    // If there are no more questions, stop the function.
    if (questionIndex === questions.length) {
      return;
    }

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = event.key.toLowerCase();

    // Only run this code if "t" or "f" were pressed.
    if (userInput === "t" || userInput === "f") {

      // If they guess the correct answer, increase and update score, alert them they got it right.
      if (userInput === questions[questionIndex].a) {
        alert("Correct!");
        score++;
        updateScore();
      }
      // If wrong, alert them they are wrong.
      else {
        alert("Wrong!");
      }

      // Increment the questionIndex variable and call the renderQuestion function.
      questionIndex++;
      renderQuestion();

    }

  };


      renderQuestion();
      updateScore();




}