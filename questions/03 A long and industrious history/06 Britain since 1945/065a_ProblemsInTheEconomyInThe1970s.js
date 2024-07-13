(() => {
    let questions = [
        {
            question: "In what decade, did the post-war economic boom end in the UK?",
            correctAnswers: ["1970s"],
            incorrectAnswers: [
                "1950s",
                "1960s",
                "1980s",
                "1990s"]
        },
        {
            question: "What was the state of prices in the UK in the 1970s?",
            correctAnswers: ["Sharp rise"],
            mandatoryIncorrectAnswers: [
                "Mild rise",
                "No rise",
                "Mild fall",
                "Sharp fall",
            ]
        },
        {
            question: "In the 1970s, what did problems with the 'balance of payments' in the UK mean?",
            correctAnswers: ["The UK was importing more than it was exporting"],
            incorrectAnswers: [
                "The UK was exporting more than it was importing",
                "The UK could not afford to pay its debts",
                "The UK tax was insufficient to pay for public services",
                "The UK financial authorities discovered evidence of systematic fraud, corruption and tax evasion",
            ]
        },
        {
            question: "What was the state of civil society Northern Ireland in the 1970s?",
            correctAnswers: ["Serious unrest"],
            incorrectAnswers: [
                "Some social problems, but largely stable",
                "Largely peaceful",
                "Marked by improved community cohesion",
            ]
        },
        {
            question: "In what year was the Northern Ireland Parliament suspended?",
            correctAnswers: ["1972"],
            incorrectAnswers: getDates(1921, 1997, [1972], false),
        },
        {
            question: "Roughly how many people died in the violence in Northern Ireland after 1969?",
            correctAnswers: ["3,000"],
            incorrectAnswers: [
                "100",
                "300",
                "700",
                "1,000",
                "7,000",
                "10,000",
                "30,000",
            ]
        }
    ];

    let category = {
        name: "Problems in the economy in the 1970s",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
