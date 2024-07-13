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
                "Reform of divorce law",
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
