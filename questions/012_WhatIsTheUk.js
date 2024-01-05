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
        "Jersey",
        "Guernsey"
    ];

    let ukIndividualIslands = [
        "The Isle of Wight",
        "Skye",
        "Lewis",
        "Harris",
        "Orkney",
        "Shetland",
        "Anglesey",
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
            question: "What is the name of the 2nd largest island in the UK?",
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
                "France",
                "Spain",
                "Portugal",
                "Italy",
                "Germany",
                "Belgium",
                "The Netherlands",
                "Denmark",
                "Iceland",
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
            question: "The country of Ireland is part of the UK. True or false?",
            correctAnswers: ["False"],
            incorrectAnswers: ["True"],
            explanation: "The country of Ireland is not part of the UK. Northern Ireland is part of the UK.",
        },
        {
            question: "What is the name of the island group that the UK and Ireland are a part of?",
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
                    question: "What sort of entities are the Isle of Man and the Channel Islands (Jersey and Guernsey)?",
                    correctAnswers: ["Crown Dependencies"],
                    incorrectAnswers: [
                        "British Overseas Territories",
                        "British Provinces",
                        "British Possessions",
                        "British Colonies",
                        "Crown Territories",
                        "Counties"
                    ]
                },
                {
                    question: "The Crown Dependencies are part of the UK. True or false?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Crown Dependencies are not part of the UK. They are self-governing possessions of the Crown.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "What are the names of the British Overseas Territories? Name at least 2",
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
                        "Crown Territories",
                        "Counties"
                    ]
                },
                {
                    question: "The British Overseas Territories are part of the UK. True or false?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The British Overseas Territories are self-governing territories with a constitutional and historical link with the UK, but do not form part of the UK itself.",
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