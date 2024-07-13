(() => {
    let questions = [
        { // KEY QUESTION
            questions: [
                {
                    question: "In what century did Margaret Thatcher do her most famous work?",
                    correctAnswers: ["20th"],
                    mandatoryIncorrectAnswers: ["19th", "21st"],
                    incorrectAnswers: ["17th", "18th"]
                },
                {
                    question: "In what era did Margaret Thatcher do her most famous work?",
                    correctAnswers: ["The Postwar period"],
                    incorrectAnswers: namesOfModernAges.filter(age => age !== "The Postwar period")
                }
            ]
        }
    ];

    let category = {
        name: "Margaret Thatcher",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
