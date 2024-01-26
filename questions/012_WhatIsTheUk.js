(() => {
    let britishOverseasTerritories = [
        "Anguilla",
        "Bermuda",
        "British Antarctic Territory",
        "British Indian Ocean Territory",
        "British Virgin Islands",
        "Cayman Islands",
        "Falkland Islands",
        "Gibraltar",
        "Montserrat",
        "Pitcairn Islands",
        "Saint Helena",
        "Ascension Island",
        "Tristan da Cunha",
        "South Georgia and the South Sandwich Islands",
        "Akrotiri and Dhekelia",
        "Turks and Caicos Islands"];

    let britishCrownDependencies = [
        "Isle of Man",
        "Bailiwick of Jersey",
        "Bailiwick of Guernsey"
    ];

    let ukIslandGroups = [
        "The Isles of Scilly",
        "The Hebrides",
        "The Western Isles",
        "The Northern Isles",
    ];

    let questions = [
        {
            question: "What are the names of the countries that make up the UK?",
            correctAnswers: ["England", "Scotland", "Wales", "Northern Ireland"],
            incorrectAnswers: [
                "Great Britain",
                "Ireland",
                "London",
                "Cornwall",
                "Yorkshire",
                ...britishCrownDependencies,
                ...ukIndividualIslands],
        },
        {
            question: "Which parts of the UK make up Great Britain?",
            correctAnswers: ["England", "Scotland", "Wales"],
            incorrectAnswers: ["Northern Ireland"],
        },
        {
            question: "What is the name of the largest island in the UK?",
            correctAnswers: ["Great Britain"],
            incorrectAnswers: [
                "Ireland",
                ...britishCrownDependencies,
                ...ukIndividualIslands,
                "Iceland",
                "Greenland"],
        },
        {
            question: "What is the name of the 2nd largest island that contains part of the UK?",
            correctAnswers: ["Ireland"],
            incorrectAnswers: [
                "Great Britain",
                ...britishCrownDependencies,
                ...ukIndividualIslands],
        },
        {
            question: "What is the name of the island that Northern Ireland is on?",
            correctAnswers: ["Ireland"],
            incorrectAnswers: [
                "Great Britain",
                "England",
                "Scotland",
                "Wales",
                ...britishCrownDependencies,
                ...ukIndividualIslands],
        },
        {
            question: "Northern Ireland is on an island with another country. What is the name of that country?",
            correctAnswers: ["The Republic of Ireland"],
            incorrectAnswers: [
                "Great Britain",
                "England",
                "Scotland",
                "Wales",
                ...europeanCountries.filter(country =>
                    country !== "The Republic of Ireland" &&
                    country !== "The United Kingdom"),
            ],
        },
        {
            question: "What is the full name of the UK?",
            correctAnswers: ["The United Kingdom of Great Britain and Northern Ireland"],
            incorrectAnswers: [
                "The United Kingdom",
                "The United Kingdom of Great Britain",
                "The United Kingdom of Great Britain and Ireland",
                "The United Kingdom of Great Britain and the Republic of Ireland",
                "The United Kingdom of England, Scotland, Wales and Northern Ireland",
                "Great Britain",
                "Britain",
                "England"],
        },
        {
            questions: [
                {
                    question: "The Republic of Ireland is an independent country and is NOT part of the UK. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The country of The Republic of Ireland is not part of the UK. Northern Ireland is part of the UK.",
                },
                {
                    question: "The Republic of Ireland is part of the UK. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The country of The Republic of Ireland is not part of the UK. Northern Ireland is part of the UK.",
                },
            ],
        },
        {
            question: "What is the name of the island group that the UK and The Republic of Ireland are a part of?",
            correctAnswers: ["The British Isles"],
            incorrectAnswers: [
                ...ukIslandGroups,
                "The Faroe Islands",
                "The Channel Islands",
                "The British Islands",
                "The United Kingdom",
                "Great Britain",
                "Britain",
                "England"
            ]
        },
        {
            questions: [
                {
                    question: "What are the names of the Crown Dependencies?",
                    correctAnswers: britishCrownDependencies,
                    incorrectAnswers: [
                        ...ukIndividualIslands,
                        ...ukIslandGroups,
                        ...britishOverseasTerritories
                    ]
                },
                {
                    question: "What sort of entities are the Isle of Man and the Channel Islands (Bailiwick of Jersey and Bailiwick of Guernsey?",
                    correctAnswers: ["Crown Dependencies"],
                    incorrectAnswers: [
                        "British Overseas Territories",
                        "British Provinces",
                        "British Possessions",
                        "British Colonies",
                        "Crown Territories",
                        "Crown Colonies",
                        "Counties"
                    ]
                },
                {
                    question: "The Crown Dependencies have their own governments and are NOT part of the UK. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The Crown Dependencies are not part of the UK. They are self-governing possessions of the Crown.",
                },
                {
                    question: "The Crown Dependencies are part of the UK. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Crown Dependencies are not part of the UK. They are self-governing possessions of the Crown.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "What are the names of the British Overseas Territories? (Name at least 2)",
                    correctAnswers: ["The Falkland Islands", "St Helena"],
                    minimumCorrectAnswers: 2,
                    furtherCorrectAnswers: britishOverseasTerritories.filter(t => t !== "The Falkland Islands" && t !== "St Helena"),
                    incorrectAnswers: [
                        ...ukIndividualIslands,
                        ...ukIslandGroups,
                        ...britishCrownDependencies]
                },
                {
                    question: "What sort of entities are the Falkland Islands and St Helena?",
                    correctAnswers: ["British Overseas Territories"],
                    incorrectAnswers: [
                        "Crown Dependencies",
                        "British Provinces",
                        "British Possessions",
                        "British Colonies",
                        "Crown Colonies",
                        "Crown Territories",
                        "Counties"
                    ]
                },
                {
                    question: "The British Overseas Territories are territories of the UK, but are NOT part of the UK. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The British Overseas Territories have a constitutional and historical link with the UK, but do not form part of the UK itself.",
                },
                {
                    question: "The British Overseas Territories are part of the UK. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The British Overseas Territories have a constitutional and historical link with the UK, but do not form part of the UK itself.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "What sort of body governs the UK?",
                    correctAnswers: ["A parliament"],
                    incorrectAnswers: [
                        "A senate",
                        "A congress",
                        "A house of Representatives",
                        "An assembly",
                        "A council",
                        "A diet",
                        "A duma"
                    ]
                },
                {
                    question: "Where is the UK parliament located?",
                    correctAnswers: ["Westminster"],
                    incorrectAnswers: [
                        "Stormont",
                        "Holyrood",
                        "Cardiff Bay",
                        "Kensington",
                        "Chelsea",
                        "Richmond",
                        "Windsor",
                        "Knightsbridge",
                        "Mayfair",
                        "Belgravia",
                        "Sandringham",
                        "Balmoral",
                        "Stockbridge",
                        "Morningside",
                        "Bruntsfield",
                        "Marchmont",
                        "Malone",
                        "Stranmillis",
                        "Ormeau",
                        "Pontcanna",
                        "Cathays",
                        "Roath"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Scotland has its own parliament with devolved powers. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Scotland does NOT have its own parliament with devolved powers. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "Wales has its own parliament with devolved powers. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The Welsh parliament is called the Senedd.",
                },
                {
                    question: "Wales does NOT have its own parliament with devolved powers. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Welsh parliament is called the Senedd.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "Northern Ireland has its own assembly with devolved powers. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "Northern Ireland has its own assembly, often known as Stormont, but not its own parliament.",
                },
                {
                    question: "Northern Ireland has its own parliament. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Northern Ireland has its own assembly, often known as Stormont, but not its own parliament.",
                }
            ]
        }
    ];

    let category = {
        name: "What is the UK?",
        questions: questions
    }
    quizDeck.categories.push(category);
})();