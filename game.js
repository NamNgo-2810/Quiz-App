const WRONG_REACTION_GIFS = [
    // with sounds
    { src: "assets/reaction-gifs/aqua_crying_one.gif",          sound: "assets/reaction-sounds/cryingaqua_crying_one.wav",      label: "Nooo...!" },
    { src: "assets/reaction-gifs/aqua_crying_two.gif",          sound: "assets/reaction-sounds/cryingaqua_crying_two.wav",      label: "Why?!" },
    { src: "assets/reaction-gifs/aqua_crying_three.gif",        sound: "assets/reaction-sounds/cryingaqua_crying_three.wav",    label: "I can't believe this..." },
    { src: "assets/reaction-gifs/god_is_dead.gif",              sound: "assets/reaction-sounds/shockedgod_is_dead.wav",         label: "God is dead." },
    { src: "assets/reaction-gifs/aqua_mocking_laugh.gif",       sound: "assets/reaction-sounds/mockingaqua_mocking_laugh.wav",  label: "HAHAHA!" },
    { src: "assets/reaction-gifs/pekora_laugh.gif",             sound: "assets/reaction-sounds/mockingpekora_laugh.wav",        label: "Pekora laughs at you!" },
    { src: "assets/reaction-gifs/gura_fail.gif",                sound: "assets/reaction-sounds/mockinggura_fail.wav",           label: "Gura is disappointed." },
    { src: "assets/reaction-gifs/kaguya_o_kawaii.gif",          sound: "assets/reaction-sounds/mockingO_Kawaii_Koto.mp3",       label: "O kawaii koto~" },
    { src: "assets/reaction-gifs/korone_no.gif",                sound: "assets/reaction-sounds/nokorone_no_no_no.wav",          label: "No no no!" },
    { src: "assets/reaction-gifs/echidna_ehh.gif",              sound: "assets/reaction-sounds/suprisedechidna_ehh.wav",        label: "Ehh?!" },
    { src: "assets/reaction-gifs/sakura_spray.gif",             sound: "assets/reaction-sounds/suprisedsakura_spray.wav",       label: "WHAT?!" },
    { src: "assets/reaction-gifs/rin_shocked.gif",              sound: "assets/reaction-sounds/suprisedrin_eye_pop.wav",        label: "You're kidding me." },
    { src: "assets/reaction-gifs/gura_r_u_frustrated.gif",      sound: "assets/reaction-sounds/gura_r_u_frustrated.wav",        label: "Are you serious?" },
    { src: "assets/reaction-gifs/megumin_weak_explosion.gif",   sound: "assets/reaction-sounds/megumin_weak_explosion.wav",     label: "Fizzle..." },
    // silent — crying
    { src: "assets/reaction-gifs/crying_reaction_two.gif",      sound: null,  label: "..." },
    { src: "assets/reaction-gifs/crying_reaction_four.gif",     sound: null,  label: "Heartbroken." },
    { src: "assets/reaction-gifs/crying_reaction_five.gif",     sound: null,  label: "Please stop..." },
    { src: "assets/reaction-gifs/crying_reaction_six.gif",      sound: null,  label: "The tears..." },
    { src: "assets/reaction-gifs/naruto_crying.gif",            sound: null,  label: "Naruto cries for you." },
    { src: "assets/reaction-gifs/miki_crying.gif",              sound: null,  label: "Look what you did." },
    // silent — disappointed
    { src: "assets/reaction-gifs/megumi-katou.gif",             sound: null,  label: "Megumi is done with you." },
    { src: "assets/reaction-gifs/miku_disappointed_one.gif",    sound: null,  label: "Miku is disappointed." },
    { src: "assets/reaction-gifs/miyano_disappointed.gif",      sound: null,  label: "Really?" },
    { src: "assets/reaction-gifs/satsuki_disappointed.gif",     sound: null,  label: "Pathetic." },
    { src: "assets/reaction-gifs/itsuki_disappointment.gif",    sound: null,  label: "Itsuki sighs." },
    { src: "assets/reaction-gifs/spy-x-family-anya.gif",        sound: null,  label: "Anya is not pleased." },
    { src: "assets/reaction-gifs/hori-depressed.gif",           sound: null,  label: "Hori is depressed now." },
    { src: "assets/reaction-gifs/rin_no.gif",                   sound: null,  label: "No. Just no." },
    { src: "assets/reaction-gifs/karyl_oh_no.gif",              sound: null,  label: "Oh no..." },
    { src: "assets/reaction-gifs/emilia_oops.gif",              sound: null,  label: "Oops..." },
    { src: "assets/reaction-gifs/taiga_upset.gif",              sound: null,  label: "Taiga is upset." },
    { src: "assets/reaction-gifs/vignette_disappointed.gif",    sound: null,  label: "Even the demon is disappointed." },
    { src: "assets/reaction-gifs/jahy_disappointed.gif",        sound: null,  label: "Jahy-sama is not amused." },
    { src: "assets/reaction-gifs/kotonoha_tantrum.gif",         sound: null,  label: "Tantrum incoming." },
    { src: "assets/reaction-gifs/genos_post_punch.gif",         sound: null,  label: "Genos felt that." },
    { src: "assets/reaction-gifs/yotsuba_no.gif",               sound: null,  label: "Yotsuba says no!" },
    // silent — frustrated / frustration
    { src: "assets/reaction-gifs/jahy_frustrated.gif",          sound: null,  label: "Jahy is frustrated." },
    { src: "assets/reaction-gifs/naruto_frustrated_one.gif",    sound: null,  label: "Naruto facepalms." },
    { src: "assets/reaction-gifs/asuka_eye_twitch.gif",         sound: null,  label: "Eye twitch..." },
    { src: "assets/reaction-gifs/senryuu_angry.gif",            sound: null,  label: "She's had enough." },
    { src: "assets/reaction-gifs/head_desk_one.gif",            sound: null,  label: "*head desk*" },
    { src: "assets/reaction-gifs/eye_twitch_one.gif",           sound: null,  label: "Twitching..." },
    { src: "assets/reaction-gifs/frustration_reaction_san.gif", sound: null,  label: "UGHHH." },
    { src: "assets/reaction-gifs/izuki_head_bang.gif",          sound: null,  label: "*head bang*" },
    // silent — enraged / rage
    { src: "assets/reaction-gifs/miku_rage.gif",                sound: null,  label: "Miku rages!" },
    { src: "assets/reaction-gifs/enraged_gif_one.gif",          sound: null,  label: "ENRAGED." },
    { src: "assets/reaction-gifs/enraged_gif_two.gif",          sound: null,  label: "She snapped." },
    { src: "assets/reaction-gifs/yuno_snapped.gif",             sound: null,  label: "Yuno has snapped." },
    { src: "assets/reaction-gifs/demon_rem.gif",                sound: null,  label: "Demon Rem appears." },
    { src: "assets/reaction-gifs/hori_angry.gif",               sound: null,  label: "Hori is FURIOUS." },
    { src: "assets/reaction-gifs/enraged_one.gif",              sound: null,  label: "Pure rage." },
    // silent — shocked / shook
    { src: "assets/reaction-gifs/megumin_shocked.gif",          sound: null,  label: "Megumin is shocked." },
    { src: "assets/reaction-gifs/hifumi_surprised.gif",         sound: null,  label: "Hifumi can't believe it." },
    { src: "assets/reaction-gifs/ram_rem_shocked.gif",          sound: null,  label: "Ram & Rem are shocked." },
    { src: "assets/reaction-gifs/rikka_shocked.gif",            sound: null,  label: "Rikka is shook." },
    { src: "assets/reaction-gifs/misato_shocked_one.gif",       sound: null,  label: "Misato is shook." },
    { src: "assets/reaction-gifs/nadeshiko_shook.gif",          sound: null,  label: "Nadeshiko is shook." },
    { src: "assets/reaction-gifs/shake_head_kokkoro.gif",       sound: null,  label: "Kokkoro shakes her head." },
    // silent — sad
    { src: "assets/reaction-gifs/remi_sorry.gif",               sound: null,  label: "Remi is sorry for you." },
    // silent — no / table_slam
    { src: "assets/reaction-gifs/jahy_no.gif",                  sound: null,  label: "Jahy says NO." },
    { src: "assets/reaction-gifs/aqua_table_slam.gif",          sound: null,  label: "*table slam*" },
    // silent — mocking
    { src: "assets/reaction-gifs/rin_mocking.gif",              sound: null,  label: "Rin mocks you." },
    { src: "assets/reaction-gifs/blep_two.gif",                 sound: null,  label: "Blep." },
    { src: "assets/reaction-gifs/ruka_blep.gif",                sound: null,  label: "Ruka bleps at you." },
    { src: "assets/reaction-gifs/watakoi_mocking.gif",          sound: null,  label: "They're laughing at you." },
    // silent — angry / annoyed
    { src: "assets/reaction-gifs/aqua_angry.gif",               sound: null,  label: "Aqua is angry!" },
    { src: "assets/reaction-gifs/annoyed_nino.gif",             sound: null,  label: "Nino is annoyed." },
];

const CORRECT_REACTION_GIFS = [
    // with sounds
    { src: "assets/reaction-gifs/genos_incinerate.gif",       sound: "assets/reaction-sounds/successgenos_incinerate.wav",    label: "INCINERATE!" },
    { src: "assets/reaction-gifs/gura_come_at_me_bro.gif",    sound: "assets/reaction-sounds/smuggura_come_at_me_bro.wav",    label: "Come at me!" },
    { src: "assets/reaction-gifs/megumin_explosion.gif",      sound: "assets/reaction-sounds/megumin_explosion.wav",          label: "EXPLOSION!!!" },
    // silent
    { src: "assets/reaction-gifs/aqua_celebration.gif",       sound: null,  label: "Yes!!" },
    { src: "assets/reaction-gifs/fist_pump_one.gif",          sound: null,  label: "Nailed it!" },
    { src: "assets/reaction-gifs/korone_clapping.gif",        sound: null,  label: "Korone approves!" },
    { src: "assets/reaction-gifs/kujo_excited_one.gif",       sound: null,  label: "Yatta!!" },
    { src: "assets/reaction-gifs/nano_bloom.gif",             sound: null,  label: "Blooming!" },
    { src: "assets/reaction-gifs/emilia_happy.gif",           sound: null,  label: "Great job!" },
    { src: "assets/reaction-gifs/rem_happy.gif",              sound: null,  label: "Rem is pleased~" },
    { src: "assets/reaction-gifs/ryuko_happy.gif",            sound: null,  label: "That's right!" },
    { src: "assets/reaction-gifs/anya_happy.gif",             sound: null,  label: "Heh!" },
    { src: "assets/reaction-gifs/megumin_staff_happy.gif",    sound: null,  label: "Magnificent!" },
    { src: "assets/reaction-gifs/zero_two_happy_one.gif",     sound: null,  label: "Zero Two approves!" },
    { src: "assets/reaction-gifs/haruhi_party_hat.gif",       sound: null,  label: "Party time!" },
    { src: "assets/reaction-gifs/happy_reaction_one.gif",     sound: null,  label: "Woohoo!" },
    { src: "assets/reaction-gifs/megumin_excited_one.gif",    sound: null,  label: "Let's go!!" },
    { src: "assets/reaction-gifs/taiga_excited_one.gif",      sound: null,  label: "Taiga is hyped!" },
    { src: "assets/reaction-gifs/aoba_excited_one.gif",       sound: null,  label: "So exciting!" },
    { src: "assets/reaction-gifs/nino_happy.gif",             sound: null,  label: "Nino loves this!" },
    { src: "assets/reaction-gifs/ryuko_success.gif",          sound: null,  label: "Victory!!" },
    { src: "assets/reaction-gifs/naruto_dance.gif",           sound: null,  label: "Naruto dances for you!" },
    { src: "assets/reaction-gifs/smug_reaction_five.gif",     sound: null,  label: "Obviously correct." },
];

let reactionShown = false;
let reactionAudio = null;

const showReaction = (pool, isCorrect) => {
    if (window.innerWidth < 768) return;
    if (reactionShown) return;
    reactionShown = true;

    const overlay = document.getElementById("reactionOverlay");
    const gifEl = document.getElementById("reactionGif");
    const labelEl = document.getElementById("reactionLabel");

    const pick = pool[Math.floor(Math.random() * pool.length)];

    gifEl.src = "";
    gifEl.src = pick.src;
    labelEl.textContent = pick.label;

    overlay.classList.toggle("correct", isCorrect);
    overlay.classList.remove("hiding", "hidden");

    if (reactionAudio) { reactionAudio.pause(); reactionAudio = null; }
    if (pick.sound) {
        reactionAudio = new Audio(pick.sound);
        reactionAudio.play();
    }
};

const showWrongAnswerReaction  = () => showReaction(WRONG_REACTION_GIFS, false);
const showCorrectAnswerReaction = () => showReaction(CORRECT_REACTION_GIFS, true);

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
let answerChecked = false;
let reviewData = [];
let questionHistory = []; // Store previous questions and their states

// Dynamic topic configuration - will be loaded from manifest
let topicConfig = {};

// Function to load topic configuration from manifest
const loadTopicConfig = async () => {
    try {
        const response = await fetch('./questions-manifest.json');
        if (!response.ok) {
            throw new Error('Failed to load questions manifest');
        }
        const manifest = await response.json();

        // Convert manifest to topicConfig format
        manifest.topics.forEach(topic => {
            topicConfig[topic.filename] = {
                name: topic.displayName,
                maxQuestions: topic.questionCount,
                path: topic.path
            };
        });

        return topicConfig;
    } catch (error) {
        console.error('Error loading topic config:', error);
        // Fallback to empty config
        return {};
    }
};

const QUESTION_COUNT = parseInt(localStorage.getItem("questionCount")) || 71; // You can change this value to customize number of questions

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
        // Load topic configuration first
        await loadTopicConfig();

        // Update page title with selected topic
        const topicName = topicConfig[selectedTopic]?.name || "Quiz";
        document.title = `${topicName} - Quiz`;

        // Get the file path from topic config, fallback to questions subdirectory
        const filePath = topicConfig[selectedTopic]?.path || `questions/${selectedTopic}`;

        const questionData = await fetch(`./${filePath}`).then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to load questions from ${filePath}`);
            }
            return res.json();
        });

        const selectedGroups = JSON.parse(localStorage.getItem("selectedGroups") || "[]");
        localStorage.removeItem("selectedGroups");

        const filteredData = selectedGroups.length > 0
            ? questionData.filter(q => selectedGroups.includes(q.sheet_name))
            : questionData;

        questions = filteredData.map((loadedQuestion) => {
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

const startGame = () => {
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

const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        localStorage.setItem("review", JSON.stringify(reviewData));
        return window.location.assign("/end.html");
    }

    questionCounter++;
    scoreAdded = false;
    answerChecked = false;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = 0;
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    // Show multiple answers indicator if question has more than one correct answer
    const correctAnswersCount = currentQuestion.correct_answers.length;
    // if (correctAnswersCount > 1) {
        multipleAnswersIndicator.innerHTML = `Chọn ${correctAnswersCount} đáp án đúng`;
    //     multipleAnswersIndicator.classList.remove("hidden");
    // } else {
    //     multipleAnswersIndicator.classList.add("hidden");
    // }

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
    reactionShown = false;
    if (reactionAudio) { reactionAudio.pause(); reactionAudio = null; }
    const overlay = document.getElementById("reactionOverlay");
    overlay.classList.remove("hiding");
    overlay.classList.add("hidden");
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

const nextQuestion = () => {
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
};

const checkAnswer = () => {
    if (answerChecked) return;
    answerChecked = true;

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

    if (chooseAnswer.length === 0) {
        showWrongAnswerReaction();
        return;
    }

    const isCorrect = arraysEqual(
        chooseAnswer.sort(),
        currentQuestion.correct_answers.sort()
    );

    if (isCorrect && !scoreAdded) {
        scoreAdded = true;
        incrementScore(CORRECT_BONUS);
        showCorrectAnswerReaction();
    } else if (!isCorrect) {
        showWrongAnswerReaction();
    }
};

const incrementScore = (num) => {
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
