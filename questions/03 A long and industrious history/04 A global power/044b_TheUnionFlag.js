(() => {
    let questions = [
        {
            question: "Since which monarch's reign has Ireland had the same monarch as England and Wales?",
            correctAnswers: ["Henry VIII"],
            incorrectAnswers: englishMonarchs.filter(monarch => monarch !== "Henry VIII").concat(dualMonarchs)
        },
        {
            question: "When did Ireland become part of the United Kingdom?",
            correctAnswers: ["1801"],
            incorrectAnswers: getDates(1300, 1950, [1801], false)
        },
        //{
        //    question: "What event led to the unification of Ireland with England, Scotland, and Wales?",
        //    correctAnswers: [
        //        "Act of Union of 1800"
        //    ],
        //    incorrectAnswers: [
        //        "Act of Settlement of 1701",
        //        "Treaty of Union of 1706",
        //        "Great Reform Act of 1832",
        //        "Royal Proclamation of 1603",
        //        "Glorious Revolution of 1688",
        //        "Anglo-Irish Treaty of 1921"
        //    ]
        //},
        //{
        //    question: "What was created by the Act of Union of 1800?",
        //    correctAnswers: [
        //        "The United Kingdom of Great Britain and Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "The United Kingdom of Great Britain",
        //        "The Republic of Ireland",
        //        "The Commonwealth of Nations",
        //        "The British Empire",
        //        "The Federation of Great Britain",
        //        "The Confederation of British Isles"
        //    ]
        //},
        //{
        //    question: "When was the United Kingdom of Great Britain and Ireland formed?",
        //    correctAnswers: [
        //        "1801"
        //    ],
        //    incorrectAnswers: [
        //        "1606",
        //        "1707",
        //        "1603",
        //        "1800",
        //        "1820",
        //        "1901"
        //    ]
        //},
        //{
        //    question: "Which flag served as a symbol of the union between England, Scotland, Wales, and Ireland?",
        //    correctAnswers: [
        //        "The Union Flag"
        //    ],
        //    incorrectAnswers: [
        //        "The Saint George's Cross",
        //        "The Saint Andrew's Cross",
        //        "The Saint Patrick's Cross",
        //        "The Red Dragon Flag",
        //        "The Royal Standard",
        //        "The Commonwealth Flag"
        //    ]
        //},
        //{
        //    question: "What did the new version of the Union Flag symbolize following the Act of Union of 1800?",
        //    correctAnswers: [
        //        "It symbolized the union between England, Scotland, Wales, and Ireland."
        //    ],
        //    incorrectAnswers: [
        //        "It represented the independence of Ireland.",
        //        "It symbolized the division of the United Kingdom.",
        //        "It commemorated a historic battle.",
        //        "It marked the accession of a new monarch.",
        //        "It celebrated a national holiday."
        //    ]
        //},
        //{
        //    question: "What is another name for the Union Flag?",
        //    correctAnswers: [
        //        "Union Jack"
        //    ],
        //    incorrectAnswers: [
        //        "Saint George's Cross",
        //        "Saint Andrew's Cross",
        //        "Saint Patrick's Cross",
        //        "British Jack",
        //        "Kingdom Flag",
        //        "Royal Banner"
        //    ]
        //},
        //{
        //    question: "Which term is frequently used to refer to the official flag of the UK?",
        //    correctAnswers: [
        //        "Union Jack"
        //    ],
        //    incorrectAnswers: [
        //        "Royal Standard",
        //        "National Banner",
        //        "Britannia Flag",
        //        "Celtic Cross",
        //        "Imperial Ensign",
        //        "Sovereign Flag"
        //    ]
        //},
        { // KEY QUESTION
            question: "Which crosses are combined in the Union Flag?",
            correctAnswers: [
                "Cross of St George",
                "Cross of St Andrew",
                "Cross of St Patrick"
            ],
            incorrectAnswers: [
                "Cross of St David",
                "Cross of St Luke",
                "Cross of St Mark",
                "Cross of St Thomas",
                "Cross of St John",
                "Cross of St Peter",
                "Cross of St James",
                "Cross of St Michael"
            ]
        },
        //{
        //    question: "The Union Flag combines crosses associated with which countries?",
        //    correctAnswers: [
        //        "England",
        //        "Scotland",
        //        "Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "Wales",
        //        "France",
        //        "Germany",
        //        "Spain",
        //        "Italy",
        //        "Belgium",
        //        "Netherlands"
        //    ]
        //},
        //{
        //    question: "What is the current official flag of the UK known as?",
        //    correctAnswers: [
        //        "Union Flag"
        //    ],
        //    incorrectAnswers: [
        //        "St George's Flag",
        //        "St Andrew's Flag",
        //        "St Patrick's Flag",
        //        "Welsh Dragon Flag",
        //        "Royal Standard",
        //        "Commonwealth Flag"
        //    ]
        //},
        //{
        //    question: "How many crosses does the Union Flag consist of?",
        //    correctAnswers: [
        //        "Three"
        //    ],
        //    incorrectAnswers: [
        //        "Two",
        //        "Four",
        //        "Five",
        //        "Six",
        //        "One",
        //        "Seven"
        //    ]
        //},
        //{
        //    question: "What does the Union Flag consist of?",
        //    correctAnswers: [
        //        "Crosses"
        //    ],
        //    incorrectAnswers: [
        //        "Stars",
        //        "Stripes",
        //        "Circles",
        //        "Triangles",
        //        "Squares",
        //        "Diamonds"
        //    ]
        //},
        //{
        //    question: "What is the composition of the Union Flag?",
        //    correctAnswers: [
        //        "Crosses"
        //    ],
        //    incorrectAnswers: [
        //        "Animals",
        //        "Plants",
        //        "Mythological creatures",
        //        "Symbols",
        //        "Abstract designs",
        //        "Letters"
        //    ]
        //},
        {
            question: "What is the color of the Cross of St George?",
            correctAnswers: ["Red"],
            mandatoryIncorrectAnswers: ["White", "Blue"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        {
            question: "What is the background color of the Cross of St George?",
            correctAnswers: ["White"],
            mandatoryIncorrectAnswers: ["Red", "Blue"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        { // KEY QUESTION
            question: "Which cross on the Union Flag represents England?",
            correctAnswers: ["The red, vertical and horizontal cross"],
            incorrectAnswers: [
                "The white, diagonal cross",
                "The red, diagonal cross",
                "None of the crosses on the Union Flag represent England",
            ]
        },
        {
            question: "What is the color of the Cross of St Andrew?",
            correctAnswers: ["White"],
            mandatoryIncorrectAnswers: ["Red", "Blue"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        {
            question: "What is the background color of the Cross of St Andrew?",
            correctAnswers: ["Blue"],
            mandatoryIncorrectAnswers: ["Red", "White"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        { // KEY QUESTION
            question: "Which cross on the Union Flag represents Scotland?",
            correctAnswers: ["The white, diagonal cross"],
            incorrectAnswers: [
                "The red, vertical and horizontal cross",
                "The red, diagonal cross",
                "None of the crosses on the Union Flag represent Scotland",
            ]
        },
        {
            question: "What is the color of the Cross of St Patrick?",
            correctAnswers: ["Red"],
            mandatoryIncorrectAnswers: ["White", "Blue"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        {
            question: "What is the background color of the Cross of St Patrick?",
            correctAnswers: ["White"],
            mandatoryIncorrectAnswers: ["Red", "Blue"],
            incorrectAnswers: [
                "Green",
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        { // KEY QUESTION
            question: "Which cross on the Union Flag represents Ireland?",
            correctAnswers: ["The red, diagonal cross"],
            incorrectAnswers: [
                "The red, vertical and horizontal cross",
                "The white, diagonal cross",
                "None of the crosses on the Union Flag represent Ireland",
            ]
        },
        {
            question: "What welsh creature or object is featured on the official Welsh flag?",
            correctAnswers: ["Dragon"],
            mandatoryIncorrectAnswers: ["Daffodil", "Lion", "Harp", "Leopard", "Unicorn"],
            incorrectAnswers: [
                "Stag",
                "Bear",
                "Eagle",
                "Horse",
                "Boar",
                "Swan",
                "Sword",
                "Shield",
                "Crown",
                "Fleur-de-lis",
                "Rose",
                "Thistle",
            ]
        },
        {
            question: "What colour is the creature or object on the official Welsh flag?",
            correctAnswers: ["Red"],
            mandatoryIncorrectAnswers: ["White", "Blue", "Green"],
            incorrectAnswers: [
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        {
            question: "What are the background color(s) of the official Welsh flag? Select all that apply.",
            correctAnswers: ["White", "Green"],
            mandatoryIncorrectAnswers: ["Red", "Blue"],
            incorrectAnswers: [
                "Yellow",
                "Black",
                "Orange"
            ]
        },
        { // KEY QUESTION
            question: "Which cross on the Union Flag represents Wales?",
            correctAnswers: ["None of the crosses on the Union Flag represent Wales"],
            incorrectAnswers: [
                "The red, diagonal cross",
                "The red, vertical and horizontal cross",
                "The white, diagonal cross"
            ]
        },
        {
            question: "Why does the Welsh Dragon not appear on the union flag?",
            correctAnswers: [
                "Because the principality of Wales was already united with England when the first union flag was created."
            ],
            incorrectAnswers: [
                "Because the Welsh Dragon was not a recognized symbol at the time.",
                "Because Wales is represented by the Cross of St George.",
                "Because Wales is represented by the Cross of St Andrew.",
                "Because Wales is represented by the Cross of St Patrick.",
                "Because the union flag was created before Wales became part of the United Kingdom.",
                "Because the Welsh Dragon was deem to be a pagan symbol."
            ]
        }
    ];

    let category = {
        name: "The Union Flag (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
