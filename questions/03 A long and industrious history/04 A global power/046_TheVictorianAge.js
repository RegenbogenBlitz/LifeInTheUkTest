(() => {
    let questions = [
        {
            question: "In which year did Queen Victoria become Queen of the UK?",
            correctAnswers: ["1837"],
            incorrectAnswers: getDates(1700, 2000, [1837], false)
        },
        {
            question: "At what age did Queen Victoria ascend to the throne of the UK?",
            correctAnswers: ["18"],
            incorrectAnswers: [
                "2 weeks",
                "9",
                "16",
                "21",
                "25",
                "37",
                "52",
                "73",
            ]
        },
        {
            question: "How long did Queen Victoria reign as Queen of the UK?",
            correctAnswers: [
                "almost 64 years"
            ],
            incorrectAnswers: [
                "over 73 years",
                "around 59 years",
                "less than 47 years",
                "about 33 years",
                "more than 69 years",
            ]
        },
        {
            question: "What is the name given to the era of Queen Victoria's reign?",
            correctAnswers: [
                "The Victorian age"
            ],
            incorrectAnswers: [
                "The Hanoverian period",
                "The Queen's era",
                "The Pax Victoriana",
                "The Victoria years"
            ]
        },
        {
            question: "During Queen Victoria's reign, how did Britain's international status change?",
            correctAnswers: [
                "Increased in power and influence"
            ],
            incorrectAnswers: [
                "Decreased in power and influence",
                "Remained neutral",
                "Became isolated",
                "Lost all colonial territories",
                "Established the first colonies"
            ]
        },
        {
            question: "During the reign of Queen Victoria, which social class in the UK became increasingly significant?",
            correctAnswers: [
                "The middle classes"
            ],
            incorrectAnswers: [
                "The nobility",
                "The working classes",
                "The clergy",
                "The knights",
            ]
        },
        {
            question: "Who led moves to improve conditions of life for the poor in the UK during the Victorian age?",
            correctAnswers: [
                "Reformers"
            ],
            incorrectAnswers: [
                "Industrialists",
                "Royalty",
                "Scientists",
                "Artists",
                "Philosophers",
                "Explorers"
            ]
        }
    ];

    let category = {
        name: "The Victorian Age",
        questions: questions,
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
