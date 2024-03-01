(() => {
    let questions = [
        { // KEY QUESTION
            question: "When was unemployment benefit introduced in the UK?",
            correctAnswers: ["Before World War I"],
            incorrectAnswers: [
                "During World War I",
                "After World War I",
                "Before World War II",
                "During World War II",
                "After World War II"]
        },
        { // KEY QUESTION
            question: "When were old-age pensions introduced in the UK?",
            correctAnswers: ["Before World War I"],
            incorrectAnswers: [
                "During World War I",
                "After World War I",
                "Before World War II",
                "During World War II",
                "After World War II"]
        },
        { // KEY QUESTION
            question: "When were free school meals introduced in the UK?",
            correctAnswers: ["Before World War I"],
            incorrectAnswers: [
                "During World War I",
                "After World War I",
                "Before World War II",
                "During World War II",
                "After World War II"]
        },
        { // KEY QUESTION
            question: "In what year did the First World War begin?",
            correctAnswers: ["1914"],
            mandatoryIncorrectAnswers: ["1918", "1939", "1945"],
            incorrectAnswers: getDates(1800, 1980, [1914, 1918, 1939, 1945], false)
        },
        { // KEY QUESTION
            question: "In what year did the First World War end?",
            correctAnswers: ["1918"],
            mandatoryIncorrectAnswers: ["1914", "1939", "1945"],
            incorrectAnswers: getDates(1800, 1980, [1918, 1914, 1939, 1945], false)
        }
    ];

    let category = {
        name: "The First World War (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "The 20th Century (incomplete)"
    }
    quizDeck.categories.push(category);
})();
