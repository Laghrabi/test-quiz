$(document).ready(function () {
  var questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Berlin", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
      correctAnswer: "Mitochondrion",
    },
    // Add more questions here as needed
  ];

  var currentQuestion = 0;
  var score = 0;

  // Function to shuffle array using Fisher-Yates (Knuth) Shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the questions array when the page loads
  questions = shuffleArray(questions);

  function displayQuestion() {
    var question = questions[currentQuestion];
    $("#question-container").html("<h2>" + question.question + "</h2>");

    // Shuffle the answer options for the current question
    var shuffledAnswers = shuffleArray(question.answers);

    var answersHTML = '<ul class="answers">';
    shuffledAnswers.forEach(function (answer) {
      answersHTML +=
        '<li data-answer="' +
        (answer === question.correctAnswer) +
        '">' +
        answer +
        "</li>";
    });
    answersHTML += "</ul>";
    $("#question-container").append(answersHTML);

    // Reset styles for previously selected answer
    $(".answers li").removeClass("selected");
  }

  function checkAnswer(selectedAnswer) {
    var isCorrect = selectedAnswer.data("answer");
    if (isCorrect) {
      score++;
      $("#result").removeClass("wrong").addClass("right").text("Correct!");
    } else {
      $("#result")
        .removeClass("right")
        .addClass("wrong")
        .text(
          "Wrong answer. The correct answer is: " +
            questions[currentQuestion].correctAnswer
        );
    }
  }

  $("#next-btn").on("click", function () {
    var selectedAnswer = $(".answers li.selected");

    if (selectedAnswer.length === 0) {
      $("#result").text("Please select an answer.");
      return;
    }

    checkAnswer(selectedAnswer);

    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      $("#question-container").html(
        "<h2>Quiz Complete!</h2><p>Your Score: " +
          score +
          "/" +
          questions.length +
          "</p>"
      );
      $("#result").text("");
      $("#next-btn").hide();
    }
  });

  $(document).on("click", ".answers li", function () {
    $(".answers li").removeClass("selected"); // Deselect all other answers
    $(this).addClass("selected"); // Select the clicked answer
  });

  // Start the quiz
  displayQuestion();
});
