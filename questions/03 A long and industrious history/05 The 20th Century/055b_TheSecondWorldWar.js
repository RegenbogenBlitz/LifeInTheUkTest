(() => {
    let questions = [
        { // KEY QUESTION
            question: "In what year did the Second World War begin in Europe?",
            correctAnswers: ["1939"],
            mandatoryIncorrectAnswers: ["1914", "1918", "1945"],
            incorrectAnswers: getDates(1800, 1980, [1939, 1914, 1918, 1945], false)
        },
        { // KEY QUESTION
            question: "In what year did the Second World War end?",
            correctAnswers: ["1945"],
            mandatoryIncorrectAnswers: ["1914", "1918", "1939"],
            incorrectAnswers: getDates(1800, 1980, [1945, 1918, 1914, 1939], false)
        },
        { // KEY QUESTION
            questions: [
                {
                    question: "Who was Prime Minister of the United Kingdom for most of the Second World War?",
                    correctAnswers: ["Winston Churchill"],
                    mandatoryIncorrectAnswers: [
                        "Neville Chamberlain",
                        "Clement Attlee",
                        "David Lloyd George",
                    ],
                    incorrectAnswers: [
                        "Arthur Balfour",
                        "Henry Campbell-Bannerman",
                        "Herbert Asquith",
                        "Bonar Law",
                        "Stanley Baldwin",
                        "Ramsay MacDonald",
                        "Anthony Eden",
                        "Harold Macmillan",
                        "Alec Douglas-Home",
                        "Harold Wilson",
                        "Edward Heath",
                        "Margaret Thatcher",
                    ]
                },
                {
                    question: "During which major war was Winston Churchill Prime Minister of the United Kingdom?",
                    correctAnswers: ["The Second World War"],
                    mandatoryIncorrectAnswers: ["The First World War"],
                    incorrectAnswers: famousEnglishWars.filter(war =>
                        war !== "The Second World War" &&
                        war !== "The First World War")
                }
            ]
        },
        { // KEY QUESTION
            question: "Where was the Battle of Britain fought? Select all that apply.",
            isMultipleChoice: true,
            correctAnswers: ["In the air"],
            incorrectAnswers: [
                "On the ground",
                "At sea",
                "In space"
            ]
        }
    ];

    let category = {
        name: "The Second World War (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "The 20th Century (incomplete)"
    }
    quizDeck.categories.push(category);
})();
