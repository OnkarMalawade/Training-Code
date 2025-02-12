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
