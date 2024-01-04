alert("Welcome to the quiz!");

let questions = {
    "categories": [
        {
            "category": "British History",
            "questions": [
                {
                    "question": "Who is the current monarch of the United Kingdom?",
                    "options": ["Queen Elizabeth II", "King George VI", "Queen Victoria", "King Henry VIII"],
                    "correct_answers": ["Queen Elizabeth II"],
                    "type": "single"
                },
                {
                    "question": "Which of the following were major events during the reign of Queen Elizabeth II?",
                    "options": ["Industrial Revolution", "Invention of the World Wide Web", "Falklands War", "World War II"],
                    "correct_answers": ["Invention of the World Wide Web", "Falklands War"],
                    "type": "multiple"
                }
            ]
        },
        {
            "category": "British Society",
            "questions": [
                {
                    "question": "Is the UK part of the United Nations?",
                    "options": ["True", "False"],
                    "correct_answers": ["True"],
                    "type": "true_false"
                }
            ]
        }
    ]
};

let selectedCategories = [];
let currentQuestion = null;
let score = 0;

// Populate category checkboxes
let categoriesDiv = document.getElementById('categories');
for (let category in questions) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = category;
    checkbox.checked = true;
    let label = document.createElement('label');
    label.htmlFor = category;
    label.appendChild(document.createTextNode(category));
    categoriesDiv.appendChild(checkbox);
    categoriesDiv.appendChild(label);
    categoriesDiv.appendChild(document.createElement('br'));
}

document.getElementById('start-quiz').addEventListener('click', function () {
    selectedCategories = Array.from(document.querySelectorAll('#categories input:checked')).map(input => input.id);
    nextQuestion();
    this.disabled = true;
    document.getElementById('end-quiz').disabled = false;
});

document.getElementById('end-quiz').addEventListener('click', function () {
    alert("Final score: " + score);
    this.disabled = true;
    document.getElementById('start-quiz').disabled = false;
});

function nextQuestion() {
    if (selectedCategories.length === 0) {
        document.getElementById('end-quiz').click();
        return;
    }
    let category = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
    currentQuestion = questions[category].splice(Math.floor(Math.random() * questions[category].length), 1)[0];
    if (questions[category].length === 0) {
        selectedCategories.splice(selectedCategories.indexOf(category), 1);
    }
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    quizContainer.appendChild(document.createTextNode(currentQuestion.question));
    currentQuestion.options.forEach(function (option, index) {
        let button = document.createElement('button');
        button.appendChild(document.createTextNode(option));
        button.addEventListener('click', function () {
            checkAnswer(index);
        });
        quizContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (currentQuestion.options[answer] === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}
