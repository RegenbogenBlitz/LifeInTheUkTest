(() => {
    let questions = [
        {
            question: "In what year did the Great Depression begin?",
            correctAnswers: ["1929"],
            incorrectAnswers: getDates(1800, 2020, [1929], false)
        },
        {
            question: "In what year did the BBC begin broadcasting radio?",
            correctAnswers: ["1922"],
            mandatoryIncorrectAnswers: ["1936"],
            incorrectAnswers: getDates(1850, 1950, [1922, 1936], false)
        },
        {
            question: "In what year did the BBC begin broadcasting television?",
            correctAnswers: ["1936"],
            mandatoryIncorrectAnswers: ["1922"],
            incorrectAnswers: getDates(1900, 1960, [1936, 1922], false)
        }
    ];

    let category = {
        name: "The inter-war Period",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century"
    }
    quizDeck.categories.push(category);
})();
