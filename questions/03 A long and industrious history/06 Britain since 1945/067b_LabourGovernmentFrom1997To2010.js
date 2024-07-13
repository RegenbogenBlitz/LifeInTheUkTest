(() => {
    let questions = [
        {
            questions: [
                {
                    question: "In what year did Tony Blair become Prime Minister of the United Kingdom?",
                    correctAnswers: ["1997"],
                    mandatoryIncorrectAnswers: ["2007"],
                    incorrectAnswers: getDates(1950, 2024, [1997, 2007], false),
                },
                {
                    question: "In what year did Tony Blair resign as Prime Minister?",
                    correctAnswers: ["2007"],
                    mandatoryIncorrectAnswers: ["1997"],
                    incorrectAnswers: getDates(1950, 2024, [2007, 1997], false),
                },
                {
                    question: "Who was the Prime Minister of the United Kingdom from 1997-2007?",
                    correctAnswers: ["Tony Blair"],
                    incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Tony Blair")
                        .concat(primeMinisters21stCentury.filter(pm => pm !== "Tony Blair")),
                }
            ]
        },
        {
            question: "Which political party did Tony Blair represent in his time in Parliament?",
            correctAnswers: ["Labour Party"],
            mandatoryIncorrectAnswers: [
                "Conservative Party",
                "The Liberal Democrats"],
            incorrectAnswers: [
                "Whig Party",
                "Unionist Party",
                "Communist Party",
                "Social Democratic Party",
                "Liberal Party",
                "Scottish National Party",
                "Plaid Cymru",
                "Green Party",
                "Democratic Unionist Party",
                "Reform Party",
            ]
        },
        {
            question: "Which of the following did Tony Blair achieve during his time as Prime Minister? (Select all that apply)",
            correctAnswers: [
                "Introduction of the Scottish Parliament",
                "Introduction of the Welsh Assembly",
                "The Good Friday Agreement",
            ],
            incorrectAnswers: [
                "Independence for India & Pakistan",
                "Independence for Ireland",
                "Creation of the National Lottery",
                "Creation of the National Trust",
                "Legalisation of abortion",
                "Introduction of same-sex marriage",
                "Abolition of the death penalty",
                "Abolition of the slave trade",
                "Universal suffrage"
            ]
        },
        {
            question: "In what year was the Good Friday Agreement signed?",
            correctAnswers: ["1998"],
            incorrectAnswers: getDates(1950, 2024, [1998], false),
        },
        {
            question: "The Good Friday Agreement affected which nation of the British Isles most?",
            correctAnswers: ["Northern Ireland"],
            mandatoryIncorrectAnswers: [
                "England",
                "Scotland",
                "Wales",
                "The Republic of Ireland",
            ]
        },
        {
            question: "Who was the Prime Minister that followed Tony Blair?",
            correctAnswers: ["Gordon Brown"],
            incorrectAnswers: primeMinisters20thCentury.filter(pm =>
                pm !== "Tony Blair")
                .concat(primeMinisters21stCentury.filter(pm =>
                    pm !== "Tony Blair" &&
                    pm !== "Gordon Brown"))
        }
    ];

    let category = {
        name: "Labour Government from 1997 to 2010",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
