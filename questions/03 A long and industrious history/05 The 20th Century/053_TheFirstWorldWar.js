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
        },
        { // KEY QUESTION
            questions: [
                {
                    question: "Which of the following was a Battle of the First World War?",
                    correctAnswers: ["The Battle of the Somme"],
                    incorrectAnswers: famousBattles.filter(battle => !ww1Battles.includes(battle))
                },
                {
                    question: "The Battle of the Somme was a battle of which war?",
                    correctAnswers: ["The First World War"],
                    mandatoryIncorrectAnswers: ["The Second World War"],
                    incorrectAnswers: famousEnglishWars.filter(war =>
                        war !== "The First World War" &&
                        war !== "The Second World War")
                },
                {
                    question: "When was the Battle of the Somme",
                    correctAnswers: ["1916"],
                    incorrectAnswers: getDates(1800, 1980, [1916], false)
                },
                {
                    question: "When was the Battle of the Somme",
                    correctAnswers: ["1916"],
                    incorrectAnswers: ["1914", "1915", "1917", "1918"]
                }
            ]
        },
        {
            question: "In what month did the Battle of the Somme begin?",
            correctAnswers: ["July"],
            incorrectAnswers: months.filter(month => month !== "July")
        },
        { // KEY QUESTION
            question: "Roughly how many British casualties were there on the first day of the Battle of the Somme?",
            correctAnswers: ["60,000"],
            incorrectAnswers: [
                "6,000",
                "8,000",
                "10,000",
                "35,000",
                "80,000",
                "100,000"]
        }
    ];

    let category = {
        name: "The First World War",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century"
    }
    quizDeck.categories.push(category);
})();
