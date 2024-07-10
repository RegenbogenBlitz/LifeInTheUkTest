
const testQuiz = () => {
    const testQuestion = (category, questionObj) => {
        if (questionObj.questions) {
            throw new Error(`A question in category ${category.name} has a questions property`);
        }

        if (questionObj.question === undefined) {
            throw new Error(`A question in category ${category.name} has no question text`);
        }

        if (questionObj.question instanceof Array) {
            throw new Error(`A question in category ${category.name} has an array as question text`);
        }
        if (typeof questionObj.question !== "string") {
            throw new Error(`A question in category ${category.name} has an invalid question text`);
        }

        if (!questionObj.correctAnswers || questionObj.correctAnswers.length === 0) {
            throw new Error(`No correct answers for question: ${questionObj.question}`);
        }

        if (!(questionObj.correctAnswers instanceof Array)) {
            throw new Error(`Correct answers is not an array for question: ${questionObj.question}`);
        }

        for (let answer of questionObj.correctAnswers) {
            if (!answer || typeof answer !== "string" || answer.length === 0) {
                throw new Error(`Invalid correctAnswer for question: ${questionObj.question}`);
            }
        }

        if (questionObj.furtherCorrectAnswers) {
            if (!(questionObj.furtherCorrectAnswers instanceof Array)) {
                throw new Error(`Further correct answers is not an array for question: ${questionObj.question}`);
            }

            for (let answer of questionObj.furtherCorrectAnswers) {
                if (!answer || typeof answer !== "string" || answer.length === 0) {
                    throw new Error(`Invalid furtherCorrectAnswer for question: ${questionObj.question}`);
                }
            }
        }

        if ((!questionObj.incorrectAnswers || (typeof questionObj.incorrectAnswers !== "function" && questionObj.incorrectAnswers.length === 0)) &&
            (!questionObj.mandatoryIncorrectAnswers || questionObj.mandatoryIncorrectAnswers.length === 0)) {
            throw new Error(`No incorrect answers for question: ${questionObj.question}`);
        }

        if (questionObj.incorrectAnswers && typeof questionObj.incorrectAnswers !== "function") {
            if (!(questionObj.incorrectAnswers instanceof Array)) {
                throw new Error(`Incorrect answers is not an array or function for question: ${questionObj.question}`);
            }

            for (let answer of questionObj.incorrectAnswers) {
                if (!answer || typeof answer !== "string" || answer.length === 0) {
                    throw new Error(`Invalid incorrectAnswer answer for question: ${questionObj.question}`);
                }
            }
        }

        if (questionObj.mandatoryIncorrectAnswers) {
            if (!(questionObj.mandatoryIncorrectAnswers instanceof Array)) {
                throw new Error(`Mandatory incorrect answers is not an array for question: ${questionObj.question}`);
            }

            for (let answer of questionObj.mandatoryIncorrectAnswers) {
                if (!answer || typeof answer !== "string" || answer.length === 0) {
                    throw new Error(`Invalid mandatoryIncorrectAnswer for question: ${questionObj.question}`);
                }
            }
        }
    }

    let categories = quizDeck.categories;

    for (let category of categories) {
        if (!category.name) {
            throw new Error("There is a category with no name");
        }
        if (category.questions.length === 0) {
            throw new Error(`Category ${category.name} has no questions`);
        }

        for (let question of category.questions) {
            if (!question) {
                throw new Error(`Category ${category.name} has a question that is undefined`);
            }

            if (!question.question && !question.questions) {
                throw new Error(`Category ${category.name} has a question with no question text or subquestions`);
            }

            if (question.questions) {
                if (typeof question.questions == "string") {
                    throw new Error(`A questions in category ${category.name} has an string instead of an array of questions`);
                }
                for (let subQuestion of question.questions) {
                    if (!subQuestion) {
                        throw new Error(`Category ${category.name} has a subquestion that is undefined`);
                    }
                    testQuestion(category, subQuestion);
                }
            }
            else {
                testQuestion(category, question);
            }
        }
    }

    console.log("All tests passed!");
}

const countIncomplete = () => {
    let result = "";
    const categories = quizDeck.categories;
    const incompleteCategories = [];

    for (let category of categories) {
        if (category.name.toLowerCase().includes("incomplete")) {
            const trimmedCategoryName = category.name.replace("(incomplete)", "").trim();
            incompleteCategories.push({ name: trimmedCategoryName, numberOfQuestions: category.questions.length });
        }
    }

    incompleteCategories.sort((a, b) => a.numberOfQuestions - b.numberOfQuestions);

    for (let incompleteCategory of incompleteCategories) {
        result += `${incompleteCategory.name} ${incompleteCategory.numberOfQuestions} \n`;
    }

    console.log(result);
}