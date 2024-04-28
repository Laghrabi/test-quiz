$(document).ready(function () {
  var questions = [
    {
      question: "What is the capital of France?",
      answers: ["London", "Berlin", "Madrid", "Paris"],
      correctAnswer: "Paris",
    },
    {
      question: "Who wrote the novel '1984'?",
      answers: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "F. Scott Fitzgerald",
      ],
      correctAnswer: "George Orwell",
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["Au", "Ag", "Hg", "Fe"],
      correctAnswer: "Au",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        "Atlantic Ocean",
        "Arctic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Who was the first person to step on the Moon?",
      answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
      correctAnswer: "Neil Armstrong",
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Emily Brontë",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      correctAnswer: "Nitrogen",
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Vatican City", "Liechtenstein", "Maldives"],
      correctAnswer: "Vatican City",
    },
    {
      question: "Who developed the theory of relativity?",
      answers: [
        "Isaac Newton",
        "Albert Einstein",
        "Stephen Hawking",
        "Galileo Galilei",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the currency of Japan?",
      answers: ["Yuan", "Dollar", "Euro", "Yen"],
      correctAnswer: "Yen",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["Wa", "H2O", "O2", "H2SO4"],
      correctAnswer: "H2O",
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      answers: [
        "Marie Curie",
        "Rosalind Franklin",
        "Ada Lovelace",
        "Jane Goodall",
      ],
      correctAnswer: "Marie Curie",
    },
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Tomato", "Onion", "Avocado", "Pepper"],
      correctAnswer: "Avocado",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: ["China", "India", "Japan", "Thailand"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the largest organ in the human body?",
      answers: ["Liver", "Heart", "Skin", "Brain"],
      correctAnswer: "Skin",
    },
    {
      question: "Who painted 'The Starry Night'?",
      answers: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      correctAnswer: "Vincent van Gogh",
    },
    {
      question: "What is the chemical symbol for sodium?",
      answers: ["S", "Sa", "So", "Na"],
      correctAnswer: "Na",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Gold", "Diamond", "Platinum", "Silver"],
      correctAnswer: "Diamond",
    },
    {
      question: "Who discovered penicillin?",
      answers: [
        "Marie Curie",
        "Alexander Fleming",
        "Louis Pasteur",
        "Jonas Salk",
      ],
      correctAnswer: "Alexander Fleming",
    },
    {
      question: "Which continent is the largest by land area?",
      answers: ["North America", "Africa", "Asia", "Europe"],
      correctAnswer: "Asia",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        "Harper Lee",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "John Steinbeck",
      ],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for iron?",
      answers: ["Ir", "Fe", "Fr", "In"],
      correctAnswer: "Fe",
    },
    {
      question: "What is the capital of Brazil?",
      answers: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      correctAnswer: "Brasília",
    },
    {
      question: "Who composed the 'Symphony No. 9'?",
      answers: [
        "Ludwig van Beethoven",
        "Wolfgang Amadeus Mozart",
        "Johann Sebastian Bach",
        "Franz Schubert",
      ],
      correctAnswer: "Ludwig van Beethoven",
    },
    {
      question: "What is the largest desert in the world?",
      answers: [
        "Sahara Desert",
        "Gobi Desert",
        "Arabian Desert",
        "Kalahari Desert",
      ],
      correctAnswer: "Sahara Desert",
    },
    {
      question: "Which is the smallest bone in the human body?",
      answers: ["Stapes", "Femur", "Radius", "Tibia"],
      correctAnswer: "Stapes",
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      answers: [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "John Steinbeck",
        "Harper Lee",
      ],
      correctAnswer: "F. Scott Fitzgerald",
    },
    {
      question: "What is the chemical symbol for silver?",
      answers: ["Si", "Ag", "Au", "Sr"],
      correctAnswer: "Ag",
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Who was the first emperor of Rome?",
      answers: ["Augustus", "Julius Caesar", "Nero", "Caligula"],
      correctAnswer: "Augustus",
    },
    {
      question: "What is the capital of South Africa?",
      answers: ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
      correctAnswer: "Pretoria",
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Emily Brontë",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for carbon?",
      answers: ["Co", "C", "Ca", "Cr"],
      correctAnswer: "C",
    },
    {
      question: "Which planet is known as the 'Morning Star'?",
      answers: ["Earth", "Mars", "Venus", "Mercury"],
      correctAnswer: "Venus",
    },
    {
      question: "What is the largest city in the world by population?",
      answers: ["Tokyo", "Beijing", "Delhi", "Shanghai"],
      correctAnswer: "Tokyo",
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      correctAnswer: "Michelangelo",
    },
    {
      question: "What is the chemical symbol for potassium?",
      answers: ["P", "K", "Po", "Ka"],
      correctAnswer: "K",
    },
    {
      question: "Which country is known as the Land of Fire and Ice?",
      answers: ["Greenland", "Iceland", "New Zealand", "Finland"],
      correctAnswer: "Iceland",
    },
    {
      question: "What is the primary ingredient in hummus?",
      answers: ["Chickpeas", "Lentils", "Black Beans", "Kidney Beans"],
      correctAnswer: "Chickpeas",
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      answers: [
        "Jane Austen",
        "Charlotte Brontë",
        "Emily Dickinson",
        "George Eliot",
      ],
      correctAnswer: "Jane Austen",
    },
    {
      question: "What is the chemical symbol for helium?",
      answers: ["He", "H", "Ha", "Hu"],
      correctAnswer: "He",
    },
    {
      question: "What is the largest bird in the world?",
      answers: ["Emu", "Ostrich", "Eagle", "Albatross"],
      correctAnswer: "Ostrich",
    },
    {
      question: "Who was the first president of the United States?",
      answers: [
        "Thomas Jefferson",
        "John Adams",
        "George Washington",
        "James Madison",
      ],
      correctAnswer: "George Washington",
    },
    {
      question: "What is the capital of China?",
      answers: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
      correctAnswer: "Beijing",
    },
    {
      question: "Who wrote 'The Catcher in the Rye'?",
      answers: [
        "J.D. Salinger",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Mark Twain",
      ],
      correctAnswer: "J.D. Salinger",
    },
    {
      question: "What is the chemical symbol for lead?",
      answers: ["Pb", "Ld", "Le", "L"],
      correctAnswer: "Pb",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the longest river in the world?",
      answers: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River",
      ],
      correctAnswer: "Nile River",
    },
    {
      question: "Who developed the theory of evolution by natural selection?",
      answers: [
        "Charles Darwin",
        "Gregor Mendel",
        "Jean-Baptiste Lamarck",
        "Alfred Russel Wallace",
      ],
      correctAnswer: "Charles Darwin",
    },
    {
      question: "What is the chemical symbol for mercury?",
      answers: ["Me", "Hg", "Mc", "Mr"],
      correctAnswer: "Hg",
    },
    {
      question: "Which country is famous for the tulip festival?",
      answers: ["Italy", "Netherlands", "France", "Turkey"],
      correctAnswer: "Netherlands",
    },
    {
      question: "Who wrote 'Moby-Dick'?",
      answers: [
        "Herman Melville",
        "Emily Dickinson",
        "Edgar Allan Poe",
        "Mark Twain",
      ],
      correctAnswer: "Herman Melville",
    },
    {
      question: "What is the chemical symbol for oxygen?",
      answers: ["Ox", "O", "On", "Oy"],
      correctAnswer: "O",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who painted 'The Persistence of Memory'?",
      answers: [
        "Salvador Dalí",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet",
      ],
      correctAnswer: "Salvador Dalí",
    },
    {
      question: "What is the chemical symbol for nitrogen?",
      answers: ["Ni", "Nt", "Ne", "N"],
      correctAnswer: "N",
    },
    {
      question: "Which ocean is the deepest?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who discovered electricity?",
      answers: [
        "Michael Faraday",
        "Benjamin Franklin",
        "Thomas Edison",
        "Nikola Tesla",
      ],
      correctAnswer: "Benjamin Franklin",
    },
    {
      question: "What is the chemical symbol for copper?",
      answers: ["Cu", "Cp", "Cn", "Co"],
      correctAnswer: "Cu",
    },
    {
      question: "Which country is famous for the Leaning Tower of Pisa?",
      answers: ["Italy", "France", "Spain", "Greece"],
      correctAnswer: "Italy",
    },
    {
      question: "Who wrote 'The Odyssey'?",
      answers: ["Homer", "Virgil", "Aristotle", "Plato"],
      correctAnswer: "Homer",
    },
    {
      question: "What is the chemical symbol for uranium?",
      answers: ["Ur", "Un", "U", "Um"],
      correctAnswer: "U",
    },
    {
      question: "Which city hosted the 2016 Summer Olympics?",
      answers: ["Rio de Janeiro", "Tokyo", "London", "Sydney"],
      correctAnswer: "Rio de Janeiro",
    },
    {
      question: "What is the chemical symbol for tin?",
      answers: ["Ti", "Tn", "T", "Sn"],
      correctAnswer: "Sn",
    },
    {
      question:
        "Who was the first female Prime Minister of the United Kingdom?",
      answers: [
        "Theresa May",
        "Margaret Thatcher",
        "Angela Merkel",
        "Jacinda Ardern",
      ],
      correctAnswer: "Margaret Thatcher",
    },
    {
      question: "Which is the largest bone in the human body?",
      answers: ["Femur", "Tibia", "Humerus", "Radius"],
      correctAnswer: "Femur",
    },
    {
      question: "What is the chemical symbol for silicon?",
      answers: ["S", "Si", "Se", "Sn"],
      correctAnswer: "Si",
    },
    {
      question: "Who painted 'The Last Supper'?",
      answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for calcium?",
      answers: ["Ca", "Cm", "Co", "Cl"],
      correctAnswer: "Ca",
    },
    {
      question: "Which is the largest moon of Jupiter?",
      answers: ["Callisto", "Ganymede", "Europa", "Io"],
      correctAnswer: "Ganymede",
    },
    {
      question: "Who discovered the law of gravity?",
      answers: [
        "Isaac Newton",
        "Galileo Galilei",
        "Johannes Kepler",
        "Albert Einstein",
      ],
      correctAnswer: "Isaac Newton",
    },
    // Add more questions here as needed
  ];

  var currentQuestion = 0;
  var score = 0;
  var questionsToPlay = [];

  // Shuffle the questions array when the page loads
  questions = shuffleArray(questions);

  // Select 2 random questions from the shuffled array
  questionsToPlay = questions.slice(0, 10); // Change 2 to the number of questions you want to play

  function displayQuestion() {
    if (currentQuestion < questionsToPlay.length) {
      var question = questionsToPlay[currentQuestion];
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
    } else {
      // No more questions to display
      $("#question-container").html(
        "<h2>Quiz Complete!</h2><p>Your Score: " +
          score +
          "/" +
          questionsToPlay.length +
          "</p>"
      );
      $("#result").text("");
      $("#next-btn").hide();
    }
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
            questionsToPlay[currentQuestion].correctAnswer
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
    displayQuestion(); // Display the next question
  });

  $(document).on("click", ".answers li", function () {
    $(".answers li").removeClass("selected"); // Deselect all other answers
    $(this).addClass("selected"); // Select the clicked answer
  });

  // Function to shuffle array using Fisher-Yates (Knuth) Shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Start the quiz
  displayQuestion();
});
// page joke
const jokeContainer = document.getElementById("joke");
const btnj = document.getElementById("btnj");
const urlj =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(urlj)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    });
};

btnj.addEventListener("click", getJoke);

getJoke();

//toggle
