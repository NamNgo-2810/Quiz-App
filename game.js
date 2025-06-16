const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let hasChooseAnswer = false;
let chooseAnswer = [];
let questions = [];
let scoreAdded = false;

const loadQuestion = async () => {
    const questionData = await fetch("./saa_questions.json").then((res) =>
        res.json()
    );

    questions = questionData.map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.question,
            choices: shuffleArray(
                loadedQuestion.choices.map((text, index) => ({ text, index }))
            ),
            correct_answers: loadedQuestion.correct_answers.map((idx) =>
                idx.toString()
            ),
        };

        return formattedQuestion;
    });

    startGame();
};

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

loadQuestion();

const CORRECT_BONUS = 1;
let MAX_QUESTIONS = 0;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = shuffleArray(questions).slice(0, 71);
    MAX_QUESTIONS = availableQuestions.length;
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }

    questionCounter++;
    scoreAdded = false;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = 0;
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice, index) => {
        if (currentQuestion.choices[index]) {
            choice.innerHTML = currentQuestion.choices[index].text;
            choice.dataset["number"] =
                currentQuestion.choices[index].index.toString();
            choice.parentElement.style.display = "block";
        } else {
            choice.innerHTML = "";
            choice.dataset["number"] = "-1";
            choice.parentElement.style.display = "none";
        }
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    hasChooseAnswer = false;
    chooseAnswer = [];
    choices.forEach((choice) => {
        choice.parentElement.classList.remove(
            "choosing",
            "correct",
            "incorrect"
        );
    });
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer === "-1") return;

        if (chooseAnswer.includes(selectedAnswer)) {
            chooseAnswer = chooseAnswer.filter((a) => a !== selectedAnswer);
            selectedChoice.parentElement.classList.remove("choosing");
        } else {
            chooseAnswer.push(selectedAnswer);
            selectedChoice.parentElement.classList.add("choosing");
        }
    });
});

nextQuestion = () => {
    if (chooseAnswer.length > 0) {
        checkAnswer();
        setTimeout(() => {
            choices.forEach(
                (choice) =>
                    (choice.parentElement.className = "choice-container")
            );
            getNewQuestion();
        }, 500);
    }
};

checkAnswer = () => {
    if (chooseAnswer.length > 0) {
        choices.forEach((choice) => {
            const choiceAnswer = choice.dataset["number"];
            if (choiceAnswer === "-1") return;

            const classToApply = currentQuestion.correct_answers.includes(
                choiceAnswer
            )
                ? "correct"
                : chooseAnswer.includes(choiceAnswer)
                ? "incorrect"
                : "";

            if (classToApply) {
                choice.parentElement.classList.add(classToApply);
            }
        });

        const isCorrect = arraysEqual(
            chooseAnswer.sort(),
            currentQuestion.correct_answers.sort()
        );

        if (isCorrect && !scoreAdded) {
            scoreAdded = true;
            incrementScore(CORRECT_BONUS);
        }
    }
};

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}
