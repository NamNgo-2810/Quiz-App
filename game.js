const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const multipleAnswersIndicator = document.getElementById("multipleAnswersIndicator");
const goBackBtn = document.getElementById("goBackBtn");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let hasChooseAnswer = false;
let chooseAnswer = [];
let questions = [];
let scoreAdded = false;
let reviewData = [];
let questionHistory = []; // Store previous questions and their states

// Topic configuration with display names
const topicConfig = {
    "saa_questions.json": { name: "SAA C03", maxQuestions: 710 },
    "Bộ đề chung 2025 - ôn tập.json": { name: "Bộ đề chung 2025 - ôn tập", maxQuestions: 50 },
    "ĐỀ 2 - TTBA.TTĐBCLPM_ Hệ thống LMS.json": { name: "ĐỀ 2 - TTBA.TTĐBCLPM", maxQuestions: 260 },
    "ĐỀ 3 - TTPT_ Hệ thống LMS.json": { name: "ĐỀ 2 - TTBA.TTĐBCLPM", maxQuestions: 264 },
    "ĐỀ CHUNG_ Hệ thống LMS.json": { name: "ĐỀ CHUNG - Hệ thống LMS", maxQuestions: 50 }
};

const QUESTION_COUNT = parseInt(localStorage.getItem("questionCount")) || 71; // You can change this value to customize number of questions

// Update page title with selected topic
const selectedTopic = localStorage.getItem("selectedTopic") || "saa_questions.json";
const topicName = topicConfig[selectedTopic]?.name || "Quiz";
document.title = `${topicName} - Quiz`;

const loadQuestion = async () => {
    // Get the selected topic from localStorage, default to saa_questions.json
    const selectedTopic = localStorage.getItem("selectedTopic") || "saa_questions.json";

    // Check if user came here without selecting a topic (no questionCount set)
    if (!localStorage.getItem("questionCount")) {
        alert("Please select a topic and number of questions first.");
        window.location.href = "/index.html";
        return;
    }

    try {
        const questionData = await fetch(`./${selectedTopic}`).then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to load questions from ${selectedTopic}`);
            }
            return res.json();
        });

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
    } catch (error) {
        console.error("Error loading questions:", error);
        alert("Failed to load questions. Please try again or select a different topic.");
        // Redirect back to home page
        window.location.href = "/index.html";
    }
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
    reviewData = [];
    questionHistory = [];
    availableQuestions = shuffleArray(questions).slice(0, QUESTION_COUNT);
    MAX_QUESTIONS = availableQuestions.length;
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        localStorage.setItem("review", JSON.stringify(reviewData));
        return window.location.assign("/end.html");
    }

    questionCounter++;
    scoreAdded = false;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = 0;
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    // Show multiple answers indicator if question has more than one correct answer
    const correctAnswersCount = currentQuestion.correct_answers.length;
    if (correctAnswersCount > 1) {
        multipleAnswersIndicator.innerHTML = `Chọn ${correctAnswersCount} đáp án đúng`;
        multipleAnswersIndicator.classList.remove("hidden");
    } else {
        multipleAnswersIndicator.classList.add("hidden");
    }

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

    // Update Go Back button state
    goBackBtn.disabled = questionHistory.length === 0;
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

        // Save current question state to history before moving to next
        questionHistory.push({
            question: currentQuestion,
            selectedAnswers: [...chooseAnswer],
            questionCounter: questionCounter,
            score: score
        });

        reviewData.push({
            question: currentQuestion.question,
            selected: [...chooseAnswer],
            correct: [...currentQuestion.correct_answers],
            choices: currentQuestion.choices,
        });

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

// Go back to previous question
function goBackToPreviousQuestion() {
    if (questionHistory.length === 0) return;

    // Get the previous question state
    const previousState = questionHistory.pop();

    // Restore the previous question
    currentQuestion = previousState.question;
    chooseAnswer = [...previousState.selectedAnswers];
    questionCounter = previousState.questionCounter;
    score = previousState.score;

    // Update UI
    question.innerHTML = currentQuestion.question;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    scoreText.innerText = score;

    // Show multiple answers indicator if needed
    const correctAnswersCount = currentQuestion.correct_answers.length;
    if (correctAnswersCount > 1) {
        multipleAnswersIndicator.innerHTML = `Chọn ${correctAnswersCount} đáp án đúng`;
        multipleAnswersIndicator.classList.remove("hidden");
    } else {
        multipleAnswersIndicator.classList.add("hidden");
    }

    // Restore choices and their states
    choices.forEach((choice, index) => {
        if (currentQuestion.choices[index]) {
            choice.innerHTML = currentQuestion.choices[index].text;
            choice.dataset["number"] = currentQuestion.choices[index].index.toString();
            choice.parentElement.style.display = "block";

            // Restore selection state
            const isSelected = chooseAnswer.includes(choice.dataset["number"]);
            if (isSelected) {
                choice.parentElement.classList.add("choosing");
            } else {
                choice.parentElement.classList.remove("choosing");
            }
        } else {
            choice.innerHTML = "";
            choice.dataset["number"] = "-1";
            choice.parentElement.style.display = "none";
        }

        // Remove answer feedback classes
        choice.parentElement.classList.remove("correct", "incorrect");
    });

    // Add the current question back to available questions at the beginning
    availableQuestions.unshift(currentQuestion);

    // Update Go Back button state
    goBackBtn.disabled = questionHistory.length === 0;

    // Remove the last entry from review data since we're going back
    if (reviewData.length > 0) {
        reviewData.pop();
    }
}
