(() => {
    let questions = [
        {
            question: "Which countries were the founding members of the European Economic Community (EEC)? (Select all that apply)",
            correctAnswers: [
                "Belgium",
                "France",
                "Germany",
                "Italy",
                "Luxembourg",
                "Netherlands"
            ],
            incorrectAnswers: [
                "Austria",
                "Denmark",
                "Ireland",
                "Greece",
                "Poland",
                "Portugal",
                "Spain",
                "Sweden",
                "Switzerland",
                "United Kingdom"
            ]
        },
        {
            question: "In which year was the EEC founded?",
            correctAnswers: ["1957"],
            mandatoryIncorrectAnswers: ["1993"],
            incorrectAnswers: getDates(1900, 2000, [1957, 1993], false),
        },
        {
            questions: [
                {
                    question: "In which year did the EEC become part of the European Union?",
                    correctAnswers: ["1993"],
                    mandatoryIncorrectAnswers: ["1957"],
                    incorrectAnswers: getDates(1900, 2000, [1993, 1957], false),
                },
                {
                    question: "In which year was the European Union formed?",
                    correctAnswers: ["1993"],
                    mandatoryIncorrectAnswers: ["1957"],
                    incorrectAnswers: getDates(1900, 2000, [1993, 1957], false),
                }
            ]
        },
        {
            questions: [
                {
                    question: "The UK was once a full member of the European Union. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The UK was never a member of the European Union. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The UK never used the Euro. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The UK used the Euro for a time while it was in the European Union. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "In which year did the UK formally leave the European Union?",
            correctAnswers: ["2020"],
            mandatoryIncorrectAnswers: ["2016"],
            incorrectAnswers: getDates(2000, 2024, [2020, 2016], false),
        },
        {
            question: "On what date did the UK formally leave the European Union?",
            correctAnswers: ["31 January"],
            mandatoryIncorrectAnswers: ["1 January", "23 June"],
            incorrectAnswers: [
                "28 February",
                "1 March",
                "4 July",
                "1 August",
                "31 October",
                "5 November",
                "25 December",
                "31 December"
            ],
        }
    ];

    let category = {
        name: "Europe and the Common Market",
        questions: questions,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
