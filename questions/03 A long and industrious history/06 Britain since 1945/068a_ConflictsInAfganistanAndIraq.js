(() => {
    let questions = [
        {
            questions: [
                {
                    question: "Since what year have British armed forces been engaged in the global fight against international terrorism and the proliferation of weapons of mass destruction?",
                    correctAnswers: ["2000"],
                    incorrectAnswers: getDates(1950, 2024, [2000], false),
                },
                {
                    question: "Since the year 2000, British armed forces been engaged in what? (Select all that apply)",
                    correctAnswers: [
                        "The global fight against international terrorism",
                        "The global fight against the proliferation of weapons of mass destruction"],
                    incorrectAnswers: [
                        "The fight against global communism",
                        "The fight to defend Europe from german aggression",
                        "The fight to defend Europe from french aggression",
                        "The conquest of terriories in Asia",
                        "The conquest of terriories in Africa",
                        "Conflicts to defend Britain's overseas territories"
                    ]
                },
                {
                    question: "In what countries have British armed forces had operation in as part of the global fight against international terrorism and the proliferation of weapons of mass destruction",
                    correctAnswers: ["Afganistan", "Iraq"],
                    incorrectAnswers: [
                        "Russia",
                        "Iran",
                        "Saudi Arabis",
                        "India",
                        "Argentina",
                        "Cuba",
                        "Belarus",
                    ]
                }
            ]
        },
        {
            question: "In what year did British forces leave Iraq?",
            correctAnswers: ["2009"],
            incorrectAnswers: getDates(1950, 2024, [2009], false),
        }
    ];

    let category = {
        name: "Conflicts in Afganistan and Iraq",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
