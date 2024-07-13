(() => {
    let questions = [
        {
            question: "Which year did the Crimean War start?",
            correctAnswers: ["1853"],
            mandatoryIncorrectAnswers: ["1856"],
            incorrectAnswers: getDates(1800, 1900, [1853, 1856])
        },
        {
            question: "Which year did the Crimean War end?",
            correctAnswers: ["1856"],
            mandatoryIncorrectAnswers: ["1853"],
            incorrectAnswers: getDates(1800, 1900, [1856, 1853])
        },
        {
            question: "Which of the following countries did Britain fight alongside during the Crimean War? (Select all that apply)",
            correctAnswers: [
                "Turkey",
                "France"
            ],
            mandatoryIncorrectAnswers: ["Russia"],
            incorrectAnswers: [
                "Germany",
                "Spain",
                "Portugal",
                "Austria",
                "Italy",
                "United States",
                "Canada",
                "China",
                "Japan",
                "India",
                "Australia",
                "Netherlands",
                "Belgium"
            ]
        },
        {
            question: "Who was Britain's opponent in the Crimean War?",
            correctAnswers: ["Russia"],
            mandatoryIncorrectAnswers: ["Turkey", "France"],
            incorrectAnswers: [
                "Germany",
                "Spain",
                "Portugal",
                "Austria",
                "Italy",
                "United States",
                "Canada",
                "China",
                "Japan",
                "India",
                "Australia",
                "Netherlands",
                "Belgium"
            ]
        },
        {
            question: "Which war was the first to be extensively covered by the media, including news stories and photographs?",
            correctAnswers: [
                "The Crimean War"
            ],
            incorrectAnswers: famousEnglishWars.filter(war => war !== "The Crimean War")
        },
        //{
        //    question: "In what forms was the Crimean War extensively covered by the media?",
        //    correctAnswers: [
        //        "Through news stories and photographs"
        //    ],
        //    incorrectAnswers: [
        //        "Through letters and diaries",
        //        "Through official government reports",
        //        "Through paintings and drawings",
        //        "Through telegraph messages",
        //        "Through eyewitness accounts",
        //        "Through carrier pigeons",
        //        "Through radio broadcasts"
        //    ]
        //},
        //{
        //    question: "Which forms of media were used to extensively cover the Crimean War, marking it as the first of its kind?",
        //    correctAnswers: [
        //        "News stories and photographs"
        //    ],
        //    incorrectAnswers: [
        //        "It was the first war to be broadcast on television",
        //        "It was the last war to be covered by newspaper alone",
        //        "It was the first war to use radio for coverage",
        //        "It featured live reporting from the battlefield",
        //        "It was covered exclusively through official military channels",
        //        "It was documented primarily through oral histories",
        //        "It was the first war to have an official war photographer"
        //    ]
        //},
        //{
        //    question: "During which war did many soldiers die from illnesses they caught in the hospitals rather than from war wounds, as described in the provided text?",
        //    correctAnswers: [
        //        "Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "Boer War",
        //        "World War I",
        //        "World War II",
        //        "Hundred Years' War",
        //        "War of the Roses",
        //        "Napoleonic Wars",
        //        "Anglo-Zulu War"
        //    ]
        //},
        {
            question: "What was the primary cause of death for many soldiers during the Crimean War?",
            correctAnswers: ["Illnesses caught in the hospitals"],
            mandatoryIncorrectAnswers: ["Battle injuries"],
            incorrectAnswers: [
                "Exposure to the elements",
                "Starvation",
                "Disease from poor camp conditions",
                "Friendly fire",
                "Accidents during training"
            ]
        },
        //{
        //    question: "What does the statement 'The conditions were very poor' imply about the hospitals during the Crimean War?",
        //    correctAnswers: [
        //        "The hospital conditions were inadequate"
        //    ],
        //    incorrectAnswers: [
        //        "The hospitals were well-equipped",
        //        "The medical staff were highly trained",
        //        "The recovery rate for wounded soldiers was high",
        //        "The hospitals were spacious and comfortable",
        //        "The medical treatments were advanced for the time",
        //        "Sanitation standards were high",
        //        "Nutritional needs of patients were well-met"
        //    ]
        //},
        {
            question: "Who introduced the Victoria Cross medal?",
            correctAnswers: [
                "Queen Victoria"
            ],
            incorrectAnswers: [
                "King Edward VII",
                "Prime Minister Viscount Melbourne",
                "Prime Minister William Gladstone",
                "Prime Minister Benjamin Disraeli",
                "Major-General Charles Gordon",
            ]
        },
        {
            question: "What does the Victoria Cross medal honour?",
            correctAnswers: [
                "Acts of valour by soldiers"
            ],
            incorrectAnswers: [
                "Acts of bravery by civilians",
                "Acts of bravery by animals",
                "Long service in the military",
                "Innovations in military technology",
                "Outstanding military leadership",
                "Contributions to military science and medicine",
                "Heroic actions by emergency services"
            ]
        },
        {
            question: "During which war was the Victoria Cross medal introduced?",
            correctAnswers: [
                "The Crimean War"
            ],
            incorrectAnswers: famousEnglishWars.filter(war => war !== "The Crimean War")
        },
        //{
        //    question: "Which of the following are considered part of 'the media' according to the definition provided in the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "Newspapers",
        //        "Magazines",
        //        "Television",
        //        "Radio",
        //        "The Internet"
        //    ],
        //    incorrectAnswers: [
        //        "Libraries",
        //        "Schools",
        //        "Universities",
        //        "Theaters",
        //        "Museums",
        //        "Bookstores"
        //    ]
        //},
        //{
        //    question: "What is the primary function of 'the media' as defined in the Life in the UK Test handbook?",
        //    correctAnswers: [
        //        "To give information to the public"
        //    ],
        //    incorrectAnswers: [
        //        "To entertain the public",
        //        "To provide education to the public",
        //        "To regulate public services",
        //        "To create government policies",
        //        "To conduct scientific research",
        //        "To oversee public transportation"
        //    ]
        //}
    ];

    let category = {
        name: "The Crimean War",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
