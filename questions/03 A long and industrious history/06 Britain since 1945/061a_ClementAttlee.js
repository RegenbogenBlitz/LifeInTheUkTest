(() => {
    let questions = [
        {
            question: "Which political party did Clement Attlee represent in his time in Parliament?",
            correctAnswers: ["Labour Party"],
            mandatoryIncorrectAnswers: [
                "Coalition Party",
                "Conservative Party",
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
            question: "Under which Prime Minister was Clement Attlee Deputy Prime Minister?",
            correctAnswers: ["Winston Churchill"],
            incorrectAnswers: primeMinisters20thCentury.filter(pm =>
                pm !== "Winston Churchill" &&
                pm !== "Clement Attlee"),
        },
        {
            questions: [

                {
                    question: "In what year did Clement Atlee become Prime Minister of the United Kingdom?",
                    correctAnswers: ["1945"],
                    mandatoryIncorrectAnswers: ["1940", "1951"],
                    incorrectAnswers: getDates(1850, 1970, [1945, 1940, 1951], false),
                },
                {
                    question: "In what year did Clement Atlee cease being Prime Minister?",
                    correctAnswers: ["1951"],
                    mandatoryIncorrectAnswers: ["1945"],
                    incorrectAnswers: getDates(1850, 1970, [1951, 1945], false),
                },
                {
                    question: "Who was the Prime Minister of the United Kingdom from 1945-1951?",
                    correctAnswers: ["Clement Attlee"],
                    incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Clement Attlee"),
                }
            ]
        },
        {
            question: "Which of the following did Clement Attlee achieve during his time as Prime Minister? (Select all that apply)",
            correctAnswers: [
                "Nationalisation of the coal industry",
                "Nationalisation of the steel industry",
                "Creation of the National Health Service",
                "Implemented many of Beveridge's plans for a stronger welfare state",
                "Measures to improve conditions for workers",
            ],
            incorrectAnswers: [
                "Nationalisation of the oil industry",
                "Creation of the National Lottery",
                "Creation of the National Trust",
                "Legalisation of abortion",
                "Implemented the recommendations of the Wolfenden Report to decriminalise homosexuality",
                "Abolition of the death penalty",
                "Abolition of the slave trade",
                "Universal suffrage",
                "Measures to improve conditions for immigrants",
                "Measures to improve conditions for the elderly",
                "Measures to improve conditions for the disabled"
            ]
        }
    ];

    let category = {
        name: "Clement Attlee",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
