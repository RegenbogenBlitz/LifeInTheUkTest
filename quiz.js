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
        getAllowsMultipleAnswers: (question) => question.correctAnswers.length > 1 || question.isMultipleChoice,
        getMinimumCorrectAnswers: (question) => question.minimumCorrectAnswers ? question.minimumCorrectAnswers : question.correctAnswers.length,
        getTestAnswerOptions: (question) => {
            let questionText = question.question;
            if (!question.correctAnswers || question.correctAnswers.length === 0) {
                throw new Error(`No correct answers for question: ${questionText}`);
            }

            let incorrectAnswers;

            if (question.incorrectAnswers) {
                incorrectAnswers =
                    typeof question.incorrectAnswers === "function"
                        ? question.incorrectAnswers()
                        : question.incorrectAnswers;
            } else {
                incorrectAnswers = [];
            }

            let numberOfMandatoryIncorrectAnswers = question.mandatoryIncorrectAnswers ? question.mandatoryIncorrectAnswers.length : 0;

            if (incorrectAnswers.length === 0 &&
                numberOfMandatoryIncorrectAnswers === 0) {
                throw new Error(`No incorrect answers for question: ${questionText}`);
            }
            if (question.minimumCorrectAnswers && question.correctAnswers.length < question.minimumCorrectAnswers) {
                throw new Error(`Not enough correct answers for question: ${questionText}`);
            }

            let maxNumOfOptions =
                question.correctAnswers.length > 1
                    ? question.correctAnswers.length * 3 + numberOfMandatoryIncorrectAnswers
                    : 4 + numberOfMandatoryIncorrectAnswers;

            let maximumPossibleNumOptions =
                getAllCorrectAnswers(question).length +
                incorrectAnswers.length +
                numberOfMandatoryIncorrectAnswers;
            if (maxNumOfOptions > maximumPossibleNumOptions) {
                maxNumOfOptions = maximumPossibleNumOptions;
            }

            let options = [];
            options.push(...question.correctAnswers);
            if (question.mandatoryIncorrectAnswers) {
                options.push(...question.mandatoryIncorrectAnswers);
            }

            let possibleFurtherCorrectAnswers = question.furtherCorrectAnswers ? [...question.furtherCorrectAnswers] : [];
            let possibleIncorrectAnswers = [...incorrectAnswers];

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
                    throw new Error(`Not enough options for question: ${questionText}`);
                }
            }

            // if the options are True and False, then always put True first
            if (options.length === 2 && options.includes("True") && options.includes("False")) {
                return ["True", "False"];
            }

            // shuffle options
            let finalOptions = [];
            while (options.length > 0) {
                let randomOption = options[Math.floor(Math.random() * options.length)];
                finalOptions.push(randomOption);
                options = options.filter(a => a !== randomOption);
            }

            return finalOptions;
        }
    };
})();

let Quiz = (categoryNames, mode, maxQuestions) => {
    let deck = {
        categories: quizDeck.categories.filter(c => categoryNames.includes(c.name))
    };

    let numberOfQuestionsAnswered = 0;
    let numberOfQuestionsCorrect = 0;
    const numberOfPossibleQuestions = deck.categories.reduce((acc, c) => acc + c.questions.length, 0);
    const totalNumberOfQuestions =
        maxQuestions > 0
            ? Math.min(maxQuestions, numberOfPossibleQuestions)
            : numberOfPossibleQuestions;

    const getNextCategoryIndex = () => {
        // a dictionary of category indexes and the proportion of questions remaining in each category
        const categoryProportionsRemaining = {};
        deck.categories.forEach((c, i) => {
            const categoryName = c.name;
            const uneditedCategory = quizDeck.categories.find(c => c.name === categoryName);
            const totalNumberOfQuestionsInCategory = uneditedCategory.questions.length;
            categoryProportionsRemaining[i] = c.questions.length / totalNumberOfQuestionsInCategory;
        });

        // the category with the highest proportion of questions remaining
        const categoryIndex = Object.keys(categoryProportionsRemaining).reduce((a, b) => categoryProportionsRemaining[a] > categoryProportionsRemaining[b] ? a : b);

        // pick a random category if there are multiple categories with the same proportion of questions remaining
        const categoryIndexesWithMaxProportion = Object.keys(categoryProportionsRemaining).filter(i => categoryProportionsRemaining[i] === categoryProportionsRemaining[categoryIndex]);
        return categoryIndexesWithMaxProportion[Math.floor(Math.random() * categoryIndexesWithMaxProportion.length)];
    }

    return {
        getMode: () => mode,
        getNumberOfQuestionsAnswered: () => numberOfQuestionsAnswered,
        getNumberOfQuestionsCorrect: () => numberOfQuestionsCorrect,
        getTotalNumberOfQuestions: () => totalNumberOfQuestions,
        getHasMoreQuestions: () =>
            deck.categories.length > 0 &&
            deck.categories.some(c => c.questions.length > 0) &&
            (!maxQuestions || numberOfQuestionsAnswered < maxQuestions),
        getNextQuestion: () => {
            if (maxQuestions && numberOfQuestionsAnswered >= maxQuestions) {
                throw new Error("Maximum number of questions reached");
            }

            if (deck.categories.length === 0) {
                throw new Error("No more categories with questions left");
            }
            let category = deck.categories[getNextCategoryIndex()];

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

            if (category.isUnvetted) {
                question = {
                    ...question,
                    isUnvetted: true
                }
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

