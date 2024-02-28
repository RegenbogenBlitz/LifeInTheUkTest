(() => {
    let questions = [
        {
            question: "Since which monarch's reign has Ireland had the same monarch as England and Wales?",
            correctAnswers: ["Henry VIII"],
            incorrectAnswers: englishMonarchs.filter(monarch => monarch !== "Henry VIII").concat(dualMonarchs)
        },
        //{
        //    question: "When did Ireland become unified with England, Scotland, and Wales?",
        //    correctAnswers: [
        //        "1801"
        //    ],
        //    incorrectAnswers: [
        //        "1606",
        //        "1707",
        //        "1922",
        //        "1800",
        //        "1536",
        //        "1542"
        //    ]
        //},
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
        //{
        //    question: "Which crosses are combined in the Union Flag?",
        //    correctAnswers: [
        //        "Cross of St George",
        //        "Cross of St Andrew",
        //        "Cross of St Patrick"
        //    ],
        //    incorrectAnswers: [
        //        "Cross of St David",
        //        "Cross of St Luke",
        //        "Cross of St Mark",
        //        "Cross of St Thomas",
        //        "Cross of St John",
        //        "Cross of St Peter",
        //        "Cross of St James"
        //    ]
        //},
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
        //{
        //    question: "What is the color of the Cross of St George, the symbol associated with England, on the Union Flag?",
        //    correctAnswers: [
        //        "Red"
        //    ],
        //    incorrectAnswers: [
        //        "Blue",
        //        "Green",
        //        "Yellow",
        //        "Black",
        //        "Purple",
        //        "Orange"
        //    ]
        //},
        //{
        //    question: "What is the background color of the Cross of St George as it appears by itself?",
        //    correctAnswers: [
        //        "White"
        //    ],
        //    incorrectAnswers: [
        //        "Blue",
        //        "Green",
        //        "Yellow",
        //        "Black",
        //        "Red",
        //        "Purple"
        //    ]
        //},
        //{
        //    question: "Who is the patron saint represented by the Cross of St George on the Union Flag?",
        //    correctAnswers: [
        //        "St George"
        //    ],
        //    incorrectAnswers: [
        //        "St Andrew",
        //        "St Patrick",
        //        "St David",
        //        "St Thomas",
        //        "St John",
        //        "St Michael"
        //    ]
        //},
        //{
        //    question: "What is the color of the Cross of St Andrew on the Union Flag?",
        //    correctAnswers: [
        //        "white"
        //    ],
        //    incorrectAnswers: [
        //        "red",
        //        "blue",
        //        "green",
        //        "yellow",
        //        "black",
        //        "orange"
        //    ]
        //},
        //{
        //    question: "What is the background color of the Cross of St Andrew on the Union Flag?",
        //    correctAnswers: [
        //        "blue"
        //    ],
        //    incorrectAnswers: [
        //        "white",
        //        "red",
        //        "green",
        //        "yellow",
        //        "black",
        //        "orange"
        //    ]
        //},
        //{
        //    question: "Who is the patron saint represented by the Cross of St Andrew on the Union Flag?",
        //    correctAnswers: [
        //        "Scotland"
        //    ],
        //    incorrectAnswers: [
        //        "England",
        //        "Wales",
        //        "Ireland",
        //        "Northern Ireland",
        //        "Isle of Man",
        //        "Cornwall"
        //    ]
        //},
        //{
        //    question: "What shape is the Cross of St Andrew on the Union Flag?",
        //    correctAnswers: [
        //        "diagonal"
        //    ],
        //    incorrectAnswers: [
        //        "vertical",
        //        "horizontal",
        //        "circular",
        //        "square",
        //        "triangular",
        //        "star-shaped"
        //    ]
        //},
        //{
        //    question: "The Cross of St Andrew is associated with which country on the Union Flag?",
        //    correctAnswers: [
        //        "Scotland"
        //    ],
        //    incorrectAnswers: [
        //        "England",
        //        "Wales",
        //        "Ireland",
        //        "Northern Ireland",
        //        "Isle of Man",
        //        "Cornwall"
        //    ]
        //},
        //{
        //    question: "What color is the Cross of St Patrick on the Union Flag?",
        //    correctAnswers: [
        //        "Red"
        //    ],
        //    incorrectAnswers: [
        //        "White",
        //        "Blue",
        //        "Green",
        //        "Yellow",
        //        "Black",
        //        "Purple"
        //    ]
        //},
        //{
        //    question: "What is the color of the ground on which the Cross of St Patrick is superimposed on the Union Flag, according to the description in the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "White"
        //    ],
        //    incorrectAnswers: [
        //        "Red",
        //        "Blue",
        //        "Green",
        //        "Yellow",
        //        "Black",
        //        "Purple"
        //    ]
        //},
        //{
        //    question: "What pattern does the Cross of St Patrick have on the Union Flag?",
        //    correctAnswers: [
        //        "Diagonal"
        //    ],
        //    incorrectAnswers: [
        //        "Horizontal",
        //        "Vertical",
        //        "Cross",
        //        "Circle",
        //        "Square",
        //        "Rectangular"
        //    ]
        //},
        //{
        //    question: "Who is the patron saint associated with the diagonal red cross on the Union Flag?",
        //    correctAnswers: [
        //        "St Patrick"
        //    ],
        //    incorrectAnswers: [
        //        "St George",
        //        "St Andrew",
        //        "St David",
        //        "St Michael",
        //        "St Benedict",
        //        "St Christopher"
        //    ]
        //},
        //{
        //    question: "Which country is represented by the Cross of St Patrick on the Union Flag?",
        //    correctAnswers: [
        //        "Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "England",
        //        "Scotland",
        //        "Wales",
        //        "France",
        //        "Germany",
        //        "Spain"
        //    ]
        //},
        //{
        //    question: "How is the Cross of St Patrick represented on the Union Flag?",
        //    correctAnswers: [
        //        "Diagonal red cross on a white ground"
        //    ],
        //    incorrectAnswers: [
        //        "Red cross on a blue ground",
        //        "White cross on a red ground",
        //        "Diagonal white cross on a blue ground",
        //        "Diagonal blue cross on a white ground",
        //        "Horizontal red cross on a white ground",
        //        "Vertical red cross on a white ground"
        //    ]
        //},
        //{
        //    question: "What is the significance of the diagonal red cross on the Union Flag?",
        //    correctAnswers: [
        //        "It represents Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "It represents England",
        //        "It represents Scotland",
        //        "It represents Wales",
        //        "It signifies the patron saint of the UK",
        //        "It signifies the Act of Union of 1800",
        //        "It signifies the unification of the UK and Ireland"
        //    ]
        //},
        //{
        //    question: "The Cross of St Patrick is associated with which country's patron saint on the Union Flag?",
        //    correctAnswers: [
        //        "Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "England",
        //        "Scotland",
        //        "Wales",
        //        "France",
        //        "Italy",
        //        "Netherlands"
        //    ]
        //},
        //{
        //    question: "What emblem is featured on the official Welsh flag?",
        //    correctAnswers: [
        //        "Welsh dragon"
        //    ],
        //    incorrectAnswers: [
        //        "Red cross",
        //        "White cross",
        //        "Diagonal white cross",
        //        "Diagonal red cross",
        //        "Lion",
        //        "Harp",
        //        "Thistle"
        //    ]
        //},
        //{
        //    question: "Why does the Welsh Dragon not appear on the union flag?",
        //    correctAnswers: [
        //        "Because the principality of Wales was already united with England when the first union flag was created."
        //    ],
        //    incorrectAnswers: [
        //        "Because the Welsh Dragon was not a recognized symbol at the time.",
        //        "Because the union flag only represents the countries of the United Kingdom.",
        //        "Because Wales is represented by the Cross of St George.",
        //        "Because the Cross of St Andrew represents Wales.",
        //        "Because the union flag was created before Wales became part of the United Kingdom.",
        //        "Because the flag designers chose not to include Wales in the design."
        //    ]
        //}
    ];

    let category = {
        name: "The Union Flag (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
