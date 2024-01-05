let quizDeck = {
    categories: [],
};

let QuizModes = {
    HARD: "hard",
    TEST: "test",
};

let QuizHelpers = (() => {
    let getAllCorrectAnswers = (question) =>
        question.furtherCorrectAnswers
            ? question.correctAnswers.concat(question.furtherCorrectAnswers)
            : question.correctAnswers;
    return {
        getAllCorrectAnswers: getAllCorrectAnswers,
        getAllowsMultipleAnswers: (question) => question.correctAnswers.length > 1,
        getMinimumCorrectAnswers: (question) => question.minimumCorrectAnswers ? question.minimumCorrectAnswers : question.correctAnswers.length,
        getTestAnswerOptions: (question) => {
            if (question.correctAnswers.length === 0) {
                throw new Error("No correct answers");
            }
            if (question.incorrectAnswers.length === 0) {
                throw new Error("No incorrect answers");
            }
            if (question.minimumCorrectAnswers && question.correctAnswers.length < question.minimumCorrectAnswers) {
                throw new Error("Not enough correct answers");
            }

            let maxNumOfOptions =
                question.correctAnswers.length > 1
                    ? question.correctAnswers.length * 3
                    : 4;

            let maximumPossibleNumOptions = getAllCorrectAnswers(question).length + question.incorrectAnswers.length;
            if (maxNumOfOptions > maximumPossibleNumOptions) {
                maxNumOfOptions = maximumPossibleNumOptions;
            }

            let options = [];
            options.push(...question.correctAnswers);

            let possibleFurtherCorrectAnswers = question.furtherCorrectAnswers ? [...question.furtherCorrectAnswers] : [];
            let possibleIncorrectAnswers = [...question.incorrectAnswers];

            while (options.length < maxNumOfOptions) {
                let newOptionAdded = false;
                if (possibleIncorrectAnswers.length > 0) {
                    let randomIncorrectAnswer = possibleIncorrectAnswers[Math.floor(Math.random() * possibleIncorrectAnswers.length)];
                    options.push(randomIncorrectAnswer);
                    newOptionAdded = true;
                    possibleIncorrectAnswers = possibleIncorrectAnswers.filter(a => a !== randomIncorrectAnswer);
                }
                if (options.length < maxNumOfOptions && possibleFurtherCorrectAnswers.length > 0) {
                    let randomFurtherCorrectAnswer = possibleFurtherCorrectAnswers[Math.floor(Math.random() * possibleFurtherCorrectAnswers.length)];
                    options.push(randomFurtherCorrectAnswer);
                    newOptionAdded = true;
                    possibleFurtherCorrectAnswers = possibleFurtherCorrectAnswers.filter(a => a !== randomFurtherCorrectAnswer);
                }
                if (!newOptionAdded) {
                    throw new Error("Not enough options");
                }
            }
            // shuffle options
            return options.sort(() => Math.random() - 0.5);
        }
    };
})();

let Quiz = (categoryNames, mode) => {
    let deck = {
        categories: quizDeck.categories.filter(c => categoryNames.includes(c.name))
    };

    let numberOfQuestionsAnswered = 0;
    let numberOfQuestionsCorrect = 0;

    return {
        getMode: () => mode,
        getNumberOfQuestionsAnswered: () => numberOfQuestionsAnswered,
        getNumberOfQuestionsCorrect: () => numberOfQuestionsCorrect,
        getHasMoreQuestions: () => deck.categories.length > 0,
        getNextQuestion: () => {
            if (deck.categories.length === 0) {
                throw new Error("No more categories with questions left");
            }
            let category = deck.categories[Math.floor(Math.random() * deck.categories.length)];

            if (category.questions.length === 0) {
                throw new Error("No more questions in category");
            }
            let question = category.questions[Math.floor(Math.random() * category.questions.length)];

            if (category.questions.length === 1) {
                deck = {
                    ...deck,
                    categories: deck.categories.filter(c => c !== category)
                }
            } else {
                // remove question from deck
                deck = {
                    ...deck,
                    categories: deck.categories.map(c =>
                        c === category
                            ? {
                                ...c,
                                questions: c.questions.filter(q => q !== question)
                            }
                            : c)
                }
            }

            if (question.questions) {
                // if so, get a question from that category
                question = question.questions[Math.floor(Math.random() * question.questions.length)];
            }

            return question;
        },
        answerHardQuestion: (answerWasCorrect) => {
            numberOfQuestionsAnswered++;
            if (answerWasCorrect) {
                numberOfQuestionsCorrect++;
            }
        },
        answerTestQuestion: (question, answers) => {
            numberOfQuestionsAnswered++;
            if (question.minimumCorrectAnswers !== undefined) {
                if (answers.length < question.minimumCorrectAnswers) {
                    throw new Error("Not enough answers given");
                }
            }

            let possibleCorrectAnswers = QuizHelpers.getAllCorrectAnswers(question);
            let questionWasAnsweredCorrectly = answers.every(a => possibleCorrectAnswers.includes(a));
            if (questionWasAnsweredCorrectly) {
                numberOfQuestionsCorrect++;
            }
            return questionWasAnsweredCorrectly;
        }
    }
};

