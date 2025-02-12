interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number = 0;
    private score: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer: string): boolean {
        const correct = this.getCurrentQuestion().correctAnswer === answer;
        if (correct) this.score++;
        return correct;
    }

    nextQuestion(): boolean {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    }

    getScore(): number {
        return this.score;
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    const questions: Question[] = [
        { question: "What is 2 + 2?", choices: ["3", "4", "5"], correctAnswer: "4" },
        { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris"], correctAnswer: "Paris" }
    ];

    const quiz = new Quiz(questions);
    const questionElement = document.getElementById("question") as HTMLElement;
    const choicesElement = document.getElementById("choices") as HTMLElement;
    const nextButton = document.getElementById("next") as HTMLButtonElement;
    const scoreElement = document.getElementById("score") as HTMLElement;

    const loadQuestion = () => {
        const currentQuestion = quiz.getCurrentQuestion();
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";
        currentQuestion.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => {
                quiz.checkAnswer(choice);
                nextButton.disabled = false;
            };
            choicesElement.appendChild(button);
        });
    }

    nextButton.addEventListener("click", () => {
        if (quiz.nextQuestion()) {
            loadQuestion();
            nextButton.disabled = true;
        } else {
            questionElement.textContent = "Quiz Completed!";
            choicesElement.innerHTML = "";
            scoreElement.textContent = `Final Score: ${quiz.getScore()}`;
            nextButton.style.display = "none";
        }
    });

    loadQuestion();
});

export {}