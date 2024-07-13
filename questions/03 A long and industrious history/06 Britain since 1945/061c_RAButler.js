(() => {
    let questions = [
        {
            question: "Which political party did R A Butler represent in his time in Parliament?",
            correctAnswers: ["Conservative Party"],
            mandatoryIncorrectAnswers: [
                "Labour Party",
                "Liberal Party"],
            incorrectAnswers: [
                "Whig Party",
                "Unionist Party",
                "Communist Party",
                "National Liberal Party",
                "Commonwealth Party",
                "Social Democratic Party",
                "The Liberal Democrats",
                "Reform Party"
            ]
        },
        {
            question: "In what year did R A Butler become responsible for education in the government?",
            correctAnswers: ["1941"],
            mandatoryIncorrectAnswers: ["1923", "1944"],
            incorrectAnswers: getDates(1850, 1970, [1941, 1923, 1944], false),
            explanation: "The position was called President of the Board of Education"
        },
        {
            questions: [
                {
                    question: "In what year was the Education Act, known as the Butler Act, introduced?",
                    correctAnswers: ["1944"],
                    mandatoryIncorrectAnswers: ["1923", "1941"],
                    incorrectAnswers: getDates(1850, 1970, [1944, 1923, 1941], false),
                },
                {
                    question: "The Butler Act was about what topic?",
                    correctAnswers: ["Education"],
                    incorrectAnswers: [
                        "Health",
                        "Transport",
                        "Defence",
                        "Agriculture",
                        "Industry",
                        "Foreign Affairs",
                        "Trade",
                        "Culture",
                        "Science",
                        "Justice",
                        "Environment",
                        "Housing",
                        "Welfare",
                        "Finance",
                        "Energy",
                    ]
                },
                {
                    question: "What did the Education Act of 1944 do?",
                    correctAnswers: ["Introduced free secondary education in England and Wales"],
                    incorrectAnswers: [
                        "Introduced free primary education in Scotland",
                        "Introduced free school meals in Northern Ireland",
                        "Introduced free university education in England",
                        "Introduced free adult education in Wales",
                        "Introduced free vocational training in Scotland",
                        "Introduced free apprenticeships in Northern Ireland",
                        "Introduced free teacher training in England and Wales"
                    ]
                },
            ]
        }
    ];

    let category = {
        name: "R A Butler",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
