let quiz = null;

let getMode = () => {
    var radios = document.getElementsByClassName('quiz-mode');
    var checkedRadios = Array.prototype.slice.call(radios).filter(r => r.checked);
    if (checkedRadios.length === 0) {
        throw new Error("No quiz mode selected");
    }
    if (checkedRadios.length > 1) {
        throw new Error("More than one quiz mode selected");
    }
    return checkedRadios[0].value;
}
let loadCategoryControls = () => {
    let categorySelectionDiv = document.getElementById("category-selection");
    quizDeck.categories.forEach(c => {
        let item = document.createElement("li");
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList = "category-checkbox";
        input.name = "category";
        input.value = c.name;
        label.appendChild(input);
        label.appendChild(document.createTextNode(c.name));
        item.appendChild(label);
        categorySelectionDiv.appendChild(item);
    });
}

let getSelectedCategories = () => {
    let selectedCategories = [];
    let categoryCheckboxes = document.querySelectorAll("#category-selection input");
    categoryCheckboxes.forEach(c => {
        if (c.checked) {
            selectedCategories.push(c.value);
        }
    });
    return selectedCategories;
}

let showExplanation = (question, questionContainer) => {
    if (question.explanation) {
        let explanationText = document.createElement("p");
        explanationText.innerText = question.explanation;
        questionContainer.appendChild(explanationText);
    }
};

let loadHardQuestion = (question, questionContainer) => {
    let revealButton = document.createElement("button");
    revealButton.classList = "quiz-button";
    revealButton.innerText = "Reveal";
    revealButton.onclick = () => {

        let correctAnswers = QuizHelpers.getAllCorrectAnswers(question);
        let answerText = document.createElement("p");
        answerText.innerText = "Correct answers: " + correctAnswers.join(", ");
        questionContainer.appendChild(answerText);

        showExplanation(question, questionContainer);

        // add buttons to confirm whether the answer was correct or not 
        let correctButton = document.createElement("button");
        correctButton.innerText = "Correct";
        correctButton.classList = "quiz-button"
        correctButton.onclick = () => {
            quiz.answerHardQuestion(true);
            loadNextQuestion();
        };
        questionContainer.appendChild(correctButton);

        let incorrectButton = document.createElement("button");
        incorrectButton.classList = "quiz-button"
        incorrectButton.innerText = "Incorrect";
        incorrectButton.onclick = () => {
            quiz.answerHardQuestion(false);
            loadNextQuestion();
        };
        questionContainer.appendChild(incorrectButton);
    };
    questionContainer.appendChild(revealButton);
}

let loadTestQuestion = (question, questionContainer) => {
    let answerOptions = QuizHelpers.getTestAnswerOptions(question);
    let allowsMultipleAnswers = QuizHelpers.getAllowsMultipleAnswers(question);
    let minimumCorrectAnswers = QuizHelpers.getMinimumCorrectAnswers(question);

    let answerList = document.createElement("ul");
    answerOptions.forEach(a => {
        let answerItem = document.createElement("li");
        answerItem.classList = "answer-item";
        let answerInput = document.createElement("input");
        answerInput.type = allowsMultipleAnswers ? "checkbox" : "radio";
        answerInput.classList = "answer-selector";
        answerInput.name = "answer";
        answerInput.value = a;
        answerItem.appendChild(answerInput);
        answerItem.appendChild(document.createTextNode(a));
        answerList.appendChild(answerItem);
    });

    let submitButton = document.createElement("button");
    submitButton.classList = "quiz-button";
    submitButton.innerText = "Submit";
    submitButton.onclick = () => {
        let selectedAnswers = [];
        let answerInputs = document.querySelectorAll("#question-container input[name=answer]");
        answerInputs.forEach(a => {
            if (a.checked) {
                selectedAnswers.push(a.value);
            }
        });
        if (selectedAnswers.length < minimumCorrectAnswers) {
            alert("Please select at least " + minimumCorrectAnswers + " answer(s)");
            return;
        }

        let isCorrect = quiz.answerTestQuestion(question, selectedAnswers);
        if (isCorrect) {
            alert("Correct!");
            loadNextQuestion();
        } else {
            let correctAnswers = QuizHelpers.getAllCorrectAnswers(question);
            let answerText = document.createElement("p");
            answerText.innerText = "Correct answers: " + correctAnswers.join(", ");
            questionContainer.appendChild(answerText);

            showExplanation(question, questionContainer);

            setTimeout(() => {
                alert("Incorrect!");
                loadNextQuestion();
            }, 100);
        }
    };

    questionContainer.appendChild(answerList);
    questionContainer.appendChild(submitButton);
}
let endQuiz = () => {
    let questionContainer = document.getElementById("question-container");
    while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
    }

    let numberOfQuestionsCorrect = quiz.getNumberOfQuestionsCorrect();
    let numberOfQuestionsAnswered = quiz.getNumberOfQuestionsAnswered();
    let score = numberOfQuestionsAnswered === 0 ? "0%" : (numberOfQuestionsCorrect / numberOfQuestionsAnswered * 100).toFixed(0) + "%"

    let scoreText = document.createElement("p");
    scoreText.innerText = "Score: " + score;
    document.body.appendChild(scoreText);

    let numberOfQuestionsCorrectText = document.createElement("p");
    numberOfQuestionsCorrectText.innerText = "Number of questions correct: " + numberOfQuestionsCorrect;
    document.body.appendChild(numberOfQuestionsCorrectText);

    let numberOfQuestionsAnsweredText = document.createElement("p");
    numberOfQuestionsAnsweredText.innerText = "Number of questions answered: " + numberOfQuestionsAnswered;
    document.body.appendChild(numberOfQuestionsAnsweredText);
};

let loadNextQuestion = () => {
    if (!quiz) {
        throw new Error("Quiz not started");
    }
    if (!quiz.getHasMoreQuestions()) {
        endQuiz();
    }
    let question = quiz.getNextQuestion();

    // create new question container div
    let newQuestionContainer = document.createElement("div");
    newQuestionContainer.id = "question-container";

    // add question text
    let questionText = document.createElement("p");
    questionText.innerText = question.question;
    newQuestionContainer.appendChild(questionText);

    if (quiz.getMode() === QuizModes.HARD) {
        loadHardQuestion(question, newQuestionContainer);
    } else if (quiz.getMode() === QuizModes.TEST) {
        loadTestQuestion(question, newQuestionContainer);
    }
    else {
        throw new Error("Unknown question mode");
    }

    //replace old question container div with new one
    let oldQuestionContainer = document.getElementById("question-container");
    oldQuestionContainer.parentNode.replaceChild(newQuestionContainer, oldQuestionContainer);

}
let onStartQuiz_Click = () => {
    let selectedCategories = getSelectedCategories();
    if (selectedCategories.length === 0) {
        alert("Please select at least one category");
        return;
    }
    let mode = getMode();
    quiz = Quiz(selectedCategories, mode);
    loadNextQuestion();
};
let onEndQuiz_Click = () => {
    endQuiz();
};

window.onload = () => {
    loadCategoryControls();
    document.getElementById("start-quiz").onclick = onStartQuiz_Click;
    document.getElementById("end-quiz").onclick = onEndQuiz_Click;
};
