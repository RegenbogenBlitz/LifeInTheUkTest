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
        {
            questions: [
                {
                    question: "In what year were thousands of British and French soldiers evacuated from Dunkirk?",
                    correctAnswers: ["1940"],
                    incorrectAnswers: getDates(1800, 1980, [1940], false)
                },
                {
                    question: "Where were thousands of British and French soldiers evacuated from in 1940?",
                    correctAnswers: ["Dunkirk"],
                    mandatoryIncorrectAnswers: ["Calais", "Normandy"],
                    incorrectAnswers: [
                        "Dieppe",
                        "Bayeux",
                        "Brest",
                        "La Rochelle",
                        "Bordeaux",
                        "Marseille",
                        "Nice"
                    ]
                },
                { // KEY QUESTION
                    question: "Which of the following events is most associated with Dunkirk?",
                    correctAnswers: ["The evacuation of British and French soldiers"],
                    incorrectAnswers: [
                        "The construction of the Channel Tunnel",
                        "The D-Day landings",
                        "The defeat of Napoleon",
                        "The death of Richard III",
                        "The victory of Henry V",
                        "The signing of the Magna Carta",
                        "The victory of William the Conqueror",
                    ]
                },
                { // KEY QUESTION
                    question: "Roughly how many men were evacuated from Dunkirk?",
                    correctAnswers: ["300,000"],
                    incorrectAnswers: [
                        "50,000",
                        "75,000",
                        "150,000",
                        "500,000",
                        "750,000",
                        "1,000,000",
                    ]
                }
            ]
        },
        { // KEY QUESTION
            question: "Where was the Battle of Britain fought? (Select all that apply)",
            isMultipleChoice: true,
            correctAnswers: ["In the air"],
            incorrectAnswers: [
                "On the ground",
                "At sea",
                "In space"
            ]
        },
        {
            questions: [
                {
                    question: "Who invaded, captured and occupied Singapore during the Second World War?",
                    correctAnswers: ["Japan"],
                    mandatoryIncorrectAnswers: ["Germany", "Italy"],
                    incorrectAnswers: [
                        "The Soviet Union",
                        "China",
                        "Britain",
                        "The United States"
                    ]
                },
                {
                    question: "Who lost control of Singapore during the Second World War?",
                    correctAnswers: ["Britain"],
                    mandatoryIncorrectAnswers: ["France", "The United States"],
                    incorrectAnswers: [
                        "Germany",
                        "Japan",
                        "Italy",
                        "The Soviet Union",
                        "China",
                    ]
                }
            ]
        },
        {
            question: "Which of the following was successfully invaded and captured first during the Second World War?",
            correctAnswers: ["Singapore"],
            incorrectAnswers: ["Burma"]
        },
        {
            questions: [
                {
                    question: "Who invaded, captured and occupied Burma during the Second World War?",
                    correctAnswers: ["Japan"],
                    mandatoryIncorrectAnswers: ["Germany", "Italy"],
                    incorrectAnswers: [
                        "The Soviet Union",
                        "China",
                        "Britain",
                        "The United States"
                    ]
                },
                {
                    question: "Who lost control of Burma during the Second World War?",
                    correctAnswers: ["Britain"],
                    mandatoryIncorrectAnswers: ["France", "The United States"],
                    incorrectAnswers: [
                        "Germany",
                        "Japan",
                        "Italy",
                        "The Soviet Union",
                        "China",
                    ]
                },
                {
                    question: "The occupation of Burma during WWII threatened which other country?",
                    correctAnswers: ["India"],
                    incorrectAnswers: [
                        "China",
                        "Japan",
                        "Thailand",
                        "Vietnam",
                        "Malaysia",
                        "Indonesia",
                        "Australia",
                        "New Zealand",
                        "The Philippines",
                        "South Korea",
                        "North Korea",
                        "The Soviet Union",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "On what date did the D-Day landings take place?",
                    correctAnswers: ["6 June"],
                    incorrectAnswers: [
                        "8 May", // VE Day
                        "6 August", // Hiroshima
                        "9 August", // Nagasaki
                        "15 August", // VP Day (Japan ends WWII)
                        "1 September", // WWII begins
                        "2 September", // VP Day (US ends WWII)
                        "11 November", // Armistice Day (WWI ends)
                        "7 December" // Pearl Harbor
                    ]
                },
                {
                    question: "In what year were the D-Day landings?",
                    correctAnswers: ["1944"],
                    incorrectAnswers: getDates(1800, 1980, [1944], false)
                },
                {
                    question: "Where did the D-Day landings take place?",
                    correctAnswers: ["Normandy"],
                    mandatoryIncorrectAnswers: ["Calais", "Dunkirk"],
                    incorrectAnswers: [
                        "Hauts-de-France",
                        "Brittany",
                        "Pays de la Loire",
                        "Nouvelle-Aquitaine",
                        "Occitania",
                        "Provence-Alpes-Côte d'Azur",
                    ]
                },
                {
                    question: "Who landed in Normandy on D-Day?",
                    correctAnswers: ["The Allies"],
                    mandatoryIncorrectAnswers: ["The Axis"],
                    incorrectAnswers: [
                        "The Central Powers",
                        "The Entente",
                        "The Triple Entente",
                        "The Warsaw Pact",
                    ]
                }
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
