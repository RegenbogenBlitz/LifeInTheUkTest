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

let getMaxQuestions = () => {
    var radios = document.getElementsByClassName('max-questions');
    var checkedRadios = Array.prototype.slice.call(radios).filter(r => r.checked);
    if (checkedRadios.length === 0) {
        throw new Error("No max questions setting selected");
    }
    if (checkedRadios.length > 1) {
        throw new Error("More than one max questions setting selected");
    }

    if (checkedRadios[0].value === "limited") {
        let input = document.getElementById("max-questions-input").value;

        if (input === "") {
            throw new Error("No max questions value entered");
        }
        else if (isNaN(input)) {
            throw new Error("Max questions value is not a number");
        }
        else if (!Number.isInteger(parseFloat(input))) {
            throw new Error("Max questions value is not an integer");
        }
        else if (parseInt(input) <= 0) {
            throw new Error("Max questions value is not positive");
        }

        return parseInt(input);
    }
    else {
        return null;
    }
}

let loadCategoryControls = () => {
    let createCategoryItem = (category) => {
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList = "category-checkbox";
        input.name = "category";
        input.value = category.name;

        let label = document.createElement("label");
        if (category.isUnvetted) {
            label.classList = "category-unvetted";
        }
        label.appendChild(input);
        label.appendChild(document.createTextNode(category.name));

        let item = document.createElement("li");
        item.appendChild(label);

        return item;
    }

    let categorySelectionUl = document.getElementById("category-selection");

    let categoryGroups = {};
    quizDeck.categories.forEach(c => {
        let categoryItem = createCategoryItem(c);

        if (c.group) {
            let groupUl = categoryGroups[c.group];
            if (!groupUl) {
                let groupInput = document.createElement("input");
                groupInput.type = "checkbox";
                groupInput.classList = "category-group-checkbox";

                let groupLabel = document.createElement("label");
                groupLabel.appendChild(groupInput);
                groupLabel.appendChild(document.createTextNode(c.group));

                let groupButton = document.createElement("button");
                groupButton.classList = "show-hide-category-group-button";
                groupButton.textContent = "Show";
                groupButton.addEventListener("click", () => {
                    if (groupUl.style.display === "none") {
                        groupUl.style.display = "block";
                        groupButton.textContent = "Hide";
                    }
                    else {
                        groupUl.style.display = "none";
                        groupButton.textContent = "Show";
                    }
                });
                groupUl = document.createElement("ul");
                groupUl.style.display = "none";

                groupItem = document.createElement("li");
                groupItem.appendChild(groupLabel);
                groupItem.appendChild(groupButton);
                groupItem.appendChild(groupUl);

                categorySelectionUl.appendChild(groupItem);

                let group_onChange = () => {
                    let groupCheckboxes = groupUl.querySelectorAll("input");
                    groupCheckboxes.forEach(cb => {
                        cb.checked = groupInput.checked;
                    });
                };
                groupInput.addEventListener("change", group_onChange);

                categoryGroups[c.group] = groupUl;
            }
            groupUl.appendChild(categoryItem);
        }
        else {
            categorySelectionUl.appendChild(categoryItem);
        }


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
    answerList.classList = "answer-list";
    answerOptions.forEach(a => {
        let answerItem = document.createElement("li");
        answerItem.classList = "answer-item";

        let answerInput = document.createElement("input");
        answerInput.type = allowsMultipleAnswers ? "checkbox" : "radio";
        answerInput.classList = "answer-selector";
        answerInput.name = "answer";
        answerInput.value = a;
        answerInput.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        answerItem.appendChild(answerInput);
        answerItem.addEventListener('click', function () {
            answerInput.click();
        });
        answerItem.appendChild(document.createTextNode(a));
        answerList.appendChild(answerItem);
    });

    let answerArea = document.createElement("div");
    answerArea.classList = "answer-area";

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
            let correctText = document.createElement("p");
            correctText.innerText = "Correct!";
            answerArea.appendChild(correctText);
        } else {
            let correctAnswers = QuizHelpers.getAllCorrectAnswers(question);
            let answerText = document.createElement("p");
            answerText.innerText = "Correct answer(s): " + correctAnswers.join(", ");
            questionContainer.appendChild(answerText);

            let incorrectText = document.createElement("p");
            incorrectText.innerText = "Incorrect";
            answerArea.appendChild(incorrectText);
        }

        let nextButton = document.createElement("button");
        nextButton.classList = "quiz-button";
        nextButton.innerText = "Next";
        nextButton.onclick = () => {
            loadNextQuestion();
        }
        answerArea.replaceChild(nextButton, submitButton);


        showExplanation(question, questionContainer);
    };
    answerArea.appendChild(submitButton);

    questionContainer.appendChild(answerList);
    questionContainer.appendChild(answerArea);
}


let showQuizSettings = () => {
    let quizSettings = document.getElementById("quiz-settings");
    quizSettings.style.display = "block";
}

let hideQuizSettings = () => {
    let quizSettings = document.getElementById("quiz-settings");
    quizSettings.style.display = "none";
}

let showScoreContainer = () => {
    let scoreContainer = document.getElementById("score-container");
    scoreContainer.style.display = "block";
}

let hideScoreContainer = () => {
    let scoreContainer = document.getElementById("score-container");
    scoreContainer.style.display = "none";
}

let endQuiz = () => {
    showQuizSettings();

    let questionContainer = document.getElementById("question-container");
    while (questionContainer.firstChild) {
        questionContainer.removeChild(questionContainer.firstChild);
    }

    let numberOfQuestionsCorrect = quiz.getNumberOfQuestionsCorrect();
    let numberOfQuestionsAnswered = quiz.getNumberOfQuestionsAnswered();
    let score = numberOfQuestionsAnswered === 0 ? "0%" : (numberOfQuestionsCorrect / numberOfQuestionsAnswered * 100).toFixed(0) + "%"

    let scoreText = document.getElementById("score");
    scoreText.innerText = "Score: " + score;

    let numberOfQuestionsCorrectText = document.getElementById("score-correct");
    numberOfQuestionsCorrectText.innerText = "Number of questions correct: " + numberOfQuestionsCorrect;

    let numberOfQuestionsAnsweredText = document.getElementById("score-answered");
    numberOfQuestionsAnsweredText.innerText = "Number of questions answered: " + numberOfQuestionsAnswered;

    showScoreContainer();
    window.scrollTo(0, 0);
};

let loadNextQuestion = () => {
    if (!quiz) {
        throw new Error("Quiz not started");
    }
    if (!quiz.getHasMoreQuestions()) {
        endQuiz();
        return;
    }
    let question = quiz.getNextQuestion();

    let newQuestionContainer = document.createElement("div");
    newQuestionContainer.id = "question-container";

    if (question.isUnvetted) {
        let unvettedText = document.createElement("p");
        unvettedText.classList = "question-unvetted";
        unvettedText.innerText = "This question is unvetted. Please report any issues.";
        newQuestionContainer.appendChild(unvettedText);
    }

    let questionText = document.createElement("p");
    questionText.innerText = `${quiz.getNumberOfQuestionsAnswered() + 1}/${quiz.getTotalNumberOfQuestions()} ${question.question}`;
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

let selectAllCategories_onClick = () => {
    let categoryCheckboxes = document.querySelectorAll("#category-selection input");
    categoryCheckboxes.forEach(c => {
        c.checked = true;
    });
}

let clearAllCategories_onClick = () => {
    let categoryCheckboxes = document.querySelectorAll("#category-selection input");
    categoryCheckboxes.forEach(c => {
        c.checked = false;
    });
}

let startQuiz_onClick = () => {
    let selectedCategories = getSelectedCategories();
    if (selectedCategories.length === 0) {
        alert("Please select at least one category");
        return;
    }

    hideScoreContainer();
    hideQuizSettings();

    let mode = getMode();
    let maxQuestions = getMaxQuestions();
    quiz = Quiz(selectedCategories, mode, maxQuestions);

    loadNextQuestion();
};

let endQuiz_onClick = () => {
    endQuiz();
};

window.onload = () => {
    loadCategoryControls();
    document.getElementById("start-quiz").onclick = startQuiz_onClick;
    document.getElementById("end-quiz").onclick = endQuiz_onClick;
    document.getElementById("select-all-categories").onclick = selectAllCategories_onClick;
    document.getElementById("clear-all-categories").onclick = clearAllCategories_onClick;
};
