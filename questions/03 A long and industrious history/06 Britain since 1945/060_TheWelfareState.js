(() => {
    let questions = [
        {
            questions: [
                {
                    question: "Who became Prime Minister in 1945?",
                    correctAnswers: ["Clement Attlee"],
                    incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Clement Attlee")
                },
                {
                    question: "In what year did Clement Attlee become Prime Minister?",
                    correctAnswers: ["1945"],
                    incorrectAnswers: getDates(1800, 2000, [1945], false)
                }
            ]
        },
        {
            question: "Which Prime Minister introduced the welfare state?",
            correctAnswers: ["Clement Attlee"],
            incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Clement Attlee")
        },
        { // KEY QUESTION
            question: "In what year was the National Health Service (NHS) created?",
            correctAnswers: ["1948"],
            incorrectAnswers: getDates(1837, 2000, [1948], false)
        },
        {
            question: "Who was the Minister of Health that introduced the NHS?",
            correctAnswers: ["Aneurin Bevan"],
            incorrectAnswers: [
                "Neville Chamberlain",
                "Malcolm MacDonald",
                "Ernest Brown",
                "Henry Willink",
                "Hillary Marquand",
                "Harry Crookshank",
                "Enoch Powell",
                "Barbara Castle",
                "Kenneth Clarke",
                "Jeremy Hunt"
            ]
        },
        { // KEY QUESTION
            "question": "Under which Prime Minister was a national system of benefits introduced, in response to the Beveridge Report?",
            correctAnswers: ["Clement Attlee"],
            incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Clement Attlee")
        }
    ];

    let category = {
        name: "The Welfare State",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
