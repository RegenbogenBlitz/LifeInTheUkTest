(() => {
    let questions = [
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
        //{
        //    question: "Who was Britain's opponent in the Crimean War?",
        //    correctAnswers: [
        //        "Russia"
        //    ],
        //    incorrectAnswers: [
        //        "Germany",
        //        "France",
        //        "Austria",
        //        "Ottoman Empire",
        //        "Spain",
        //        "Italy"
        //    ]
        //},
        //{
        //    question: "In what years did the Crimean War take place?",
        //    correctAnswers: [
        //        "From 1853 to 1856"
        //    ],
        //    incorrectAnswers: [
        //        "From 1843 to 1846",
        //        "From 1863 to 1866",
        //        "From 1833 to 1836",
        //        "From 1873 to 1876",
        //        "From 1848 to 1852",
        //        "From 1858 to 1861"
        //    ]
        //},
        //{
        //    question: "What was the conflict in which Britain fought with Turkey and France against Russia?",
        //    correctAnswers: [
        //        "The Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "The Boer War",
        //        "The Napoleonic Wars",
        //        "World War I",
        //        "The Seven Years' War",
        //        "The Hundred Years' War",
        //        "The War of the Roses"
        //    ]
        //},
        //{
        //    question: "During which war did Britain ally with Turkey and France to fight against Russia?",
        //    correctAnswers: [
        //        "The Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "The First World War",
        //        "The Second World War",
        //        "The Russo-Japanese War",
        //        "The Great Northern War",
        //        "The Balkan Wars",
        //        "The Russo-Turkish War"
        //    ]
        //},
        //{
        //    question: "In which war that took place from 1853 to 1856 did Britain fight against Russia?",
        //    correctAnswers: [
        //        "The Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "The Franco-Prussian War",
        //        "The War of Austrian Succession",
        //        "The American Civil War",
        //        "The Opium Wars",
        //        "The Boxer Rebellion",
        //        "The Anglo-Zulu War"
        //    ]
        //},
        //{
        //    question: "Which war was the first to be extensively covered by the media, including news stories and photographs?",
        //    correctAnswers: [
        //        "The Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "The First World War",
        //        "The Second World War",
        //        "The Boer War",
        //        "The Napoleonic Wars",
        //        "The American Revolutionary War",
        //        "The War of the Roses",
        //        "The Hundred Years' War"
        //    ]
        //},
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
        //{
        //    question: "What was the primary cause of death for many soldiers during the Crimean War?",
        //    correctAnswers: [
        //        "Illnesses caught in the hospitals"
        //    ],
        //    incorrectAnswers: [
        //        "Battle injuries",
        //        "Exposure to the elements",
        //        "Starvation",
        //        "Disease from poor camp conditions",
        //        "Friendly fire",
        //        "Accidents during training",
        //        "Poisoning"
        //    ]
        //},
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
        //{
        //    question: "Who introduced the Victoria Cross medal?",
        //    correctAnswers: [
        //        "Queen Victoria"
        //    ],
        //    incorrectAnswers: [
        //        "King Edward VII",
        //        "Queen Elizabeth II",
        //        "Prime Minister Winston Churchill",
        //        "King George V",
        //        "Queen Elizabeth I",
        //        "King Henry VIII",
        //        "Queen Anne"
        //    ]
        //},
        //{
        //    question: "During which war was the Victoria Cross medal introduced?",
        //    correctAnswers: [
        //        "the Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "the First World War",
        //        "the Second World War",
        //        "the Boer War",
        //        "the Napoleonic Wars",
        //        "the Seven Years' War",
        //        "the American War of Independence",
        //        "the Falklands War"
        //    ]
        //},
        //{
        //    question: "What does the Victoria Cross medal honour?",
        //    correctAnswers: [
        //        "acts of valour by soldiers"
        //    ],
        //    incorrectAnswers: [
        //        "journalistic achievements",
        //        "scientific discoveries",
        //        "political service",
        //        "artistic contributions",
        //        "educational advancements",
        //        "economic development",
        //        "medical breakthroughs"
        //    ]
        //},
        //{
        //    question: "When was the Victoria Cross medal introduced?",
        //    correctAnswers: [
        //        "during the Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "during the First World War",
        //        "during the Second World War",
        //        "during the Boer War",
        //        "during the Napoleonic Wars",
        //        "during the Seven Years' War",
        //        "during the American War of Independence",
        //        "during the Falklands War"
        //    ]
        //},
        //{
        //    question: "What does the Victoria Cross medal honour?",
        //    correctAnswers: [
        //        "Acts of valour by soldiers"
        //    ],
        //    incorrectAnswers: [
        //        "Acts of bravery by civilians",
        //        "Long service in the military",
        //        "Innovations in military technology",
        //        "Outstanding leadership in politics",
        //        "Exceptional contributions to the arts",
        //        "Contributions to science and medicine",
        //        "Heroic actions by emergency services"
        //    ]
        //},
        //{
        //    question: "During which war was the Victoria Cross medal introduced?",
        //    correctAnswers: [
        //        "The Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "The First World War",
        //        "The Second World War",
        //        "The Boer War",
        //        "The Napoleonic Wars",
        //        "The Falklands War",
        //        "The Gulf War",
        //        "The War of the Roses"
        //    ]
        //},
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
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
