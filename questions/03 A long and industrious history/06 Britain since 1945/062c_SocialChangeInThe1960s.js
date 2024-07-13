(() => {
    let questions = [
        { // KEY QUESTION
            question: "Which decade was known as the 'Swinging Sixties'?",
            correctAnswers: ["1960s"],
            incorrectAnswers: [
                "1860s",
                "1760s",
                "1660s",
                "1560s"
            ]
        },
        { // KEY QUESTION
            question: "Which of the following developments are associated with the 1960s in the UK? (Select all that apply)",
            correctAnswers: [
                "Reform of abortion law",
                "Reform of divorce law"
            ],
            incorrectAnswers: [
                "Abolition of slavery",
                "Creation of the NHS",
                "Introduction of the minimum wage",
                "Introduction of Universal Human Rights",
                "Introduction of sick leave",
                "Introduction of paid holidays",
                "Introduction of maternity leave",
            ]
        },
        {
            question: "Which countries developed Concorde, the supersonic airliner? (Select all that apply)",
            correctAnswers: ["Britain", "France"],
            incorrectAnswers: [
                "Germany",
                "Italy",
                "Spain",
                "United States",
                "Russia",
                "China",
                "Japan"
            ]
        },
        {
            question: "During which decade was Concorde, the supersonic airliner, developed?",
            correctAnswers: ["1960s"],
            incorrectAnswers: [
                "1940s",
                "1950s",
                "1970s",
                "1980s",
                "1990s",
                "2000s"
            ]
        }
    ];

    let category = {
        name: "Social Change In The 1960s",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
