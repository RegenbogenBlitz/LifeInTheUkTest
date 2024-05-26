(() => {
    let questions = [
        {
            question: "In what year was the Beveridge Report commissioned?",
            correctAnswers: ["1941"],
            mandatoryIncorrectAnswers: ["1942"],
            incorrectAnswers: getDates(1800, 2000, [1941, 1942], false)
        }, {
            question: "In what year was the Beveridge Report published?",
            correctAnswers: ["1942"],
            mandatoryIncorrectAnswers: ["1941"],
            incorrectAnswers: getDates(1800, 2000, [1942, 1941], false)
        },
        {
            question: "What was the Beveridge Report's full title?",
            correctAnswers: ["Social Insurance and Allied Services"],
            incorrectAnswers: [
                "The Five Giant Evils of Society",
                "The Provision of Social Security",
                "The Report of the Departmental Committee on Homosexual Offences and Prostitution",
                "Peace and Prosperity in Europe",
                "Free Trade and the dangers of Protectionism",
                "Socialism and the British Economy",
            ]
        },
        { // KEY QUESTION
            questions: [
                {
                    question: "What was the name of the report that laid the foundations for the welfare state?",
                    correctAnswers: ["The Beveridge Report"],
                    incorrectAnswers: [
                        "The Attlee Report",
                        "The Bevan Report",
                        "The Butler Report",
                        "The Churchill Report",
                        "The Keynes Report",
                        "The Wolfenden Report"
                    ]
                },
                {
                    question: "What did the Beveridge Report lead to the establishment of?",
                    correctAnswers: ["The welfare state"],
                    incorrectAnswers: [
                        "The BBC",
                        "The National Trust",
                        "The National Theatre",
                        "National Parks",
                        "The British Library",
                        "MI5",
                        "The European Economic Community",
                    ]

                }
            ]
        }

    ];

    let category = {
        name: "William Beveridge (incomplete)",
        questions: questions,
        group: "Britain since 1945 (incomplete)"
    }
    quizDeck.categories.push(category);
})();
