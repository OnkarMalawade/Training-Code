var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.currentQuestionIndex];
    };
    Quiz.prototype.checkAnswer = function (answer) {
        var correct = this.getCurrentQuestion().correctAnswer === answer;
        if (correct)
            this.score++;
        return correct;
    };
    Quiz.prototype.nextQuestion = function () {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    return Quiz;
}());
// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    var questions = [
        { question: "What is 2 + 2?", choices: ["3", "4", "5"], correctAnswer: "4" },
        { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris"], correctAnswer: "Paris" }
    ];
    var quiz = new Quiz(questions);
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    var nextButton = document.getElementById("next");
    var scoreElement = document.getElementById("score");
    var loadQuestion = function () {
        var currentQuestion = quiz.getCurrentQuestion();
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";
        currentQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.textContent = choice;
            button.onclick = function () {
                quiz.checkAnswer(choice);
                nextButton.disabled = false;
            };
            choicesElement.appendChild(button);
        });
    };
    nextButton.addEventListener("click", function () {
        if (quiz.nextQuestion()) {
            loadQuestion();
            nextButton.disabled = true;
        }
        else {
            questionElement.textContent = "Quiz Completed!";
            choicesElement.innerHTML = "";
            scoreElement.textContent = "Final Score: ".concat(quiz.getScore());
            nextButton.style.display = "none";
        }
    });
    loadQuestion();
});
