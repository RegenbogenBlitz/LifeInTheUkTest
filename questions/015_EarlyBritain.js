(() => {
    let prehistoricSites = [
        "Avebury",
        "Callanish",
        "Castlerigg",
        "Long Meg and Her Daughters",
        "Maeshowe",
        "Newgrange",
        "Ring of Brodgar",
        "Swinside",
        "Tregeseal",
        "West Kennet Long Barrow",
        "Westray Wife",
        "White Horse of Uffington"
    ];

    let questions = [
        {
            question: "What sort of people were the first to live in Britain?",
            correctAnswers: ["hunter-gatherers"],
            incorrectAnswers: [
                "farmers",
                "herders of domesticated animals",
                "warriors",
                "horticulturalists"],
        },
        {
            question: "When did the first people to live in Britain arrive?",
            correctAnswers: ["Stone Age"],
            incorrectAnswers: [
                "Bronze Age",
                "Iron Age",
                "Copper Age"
            ],
        },
        {
            questions: [
                {
                    question: "For much of the Stone Age, Britain was connected to the continent by a land bridge. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Britain has always been an island. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "For much of the Stone Age, Britain was connected to the continent by a land bridge."
                }
            ]
        },
        {
            question: "What sort of animals did the first people to live in Britain hunt?",
            correctAnswers: ["deer", "horses"],
            incorrectAnswers: [
                "llamas",
                "rabbits",
                "goats",
                "impalas",
                "zebras",
                "tapirs",
                "sloths"
            ]
        },
        {
            question: "When did Britain become permanently separated from the continent?",
            correctAnswers: ["10,000 years ago"],
            incorrectAnswers: [
                "1,000 years ago",
                "5,000 years ago",
                "20,000 years ago",
                "25,000 years ago",
                "30,000 years ago",
                "40,000 years ago",
                "50,000 years ago",
                "100,000 years ago"
            ]
        },
        {
            question: "When did the first farmers arrive in Britain?",
            correctAnswers: ["6,000 years ago"],
            incorrectAnswers: [
                "1,000 years ago",
                "2,000 years ago",
                "3,000 years ago",
                "4,000 years ago",
                "5,000 years ago",
                "7,000 years ago",
                "8,000 years ago",
                "9,000 years ago",
                "10,000 years ago"
            ]
        },
        {
            question: "Where did the first farmers to arrive in Britain come from?",
            correctAnswers: ["south-east Europe"],
            incorrectAnswers: [
                "south-west Europe",
                "north-east Europe",
                "north-west Europe",
                "south-east Asia",
                "south-west Asia",
                "north-east Asia",
                "north-west Asia",
                "south-east Africa",
                "south-west Africa",
                "north-east Africa",
                "north-west Africa"
            ]
        },
        {
            question: "What sort of structures did the first farmers to arrive in Britain build? (Select all that apply)",
            correctAnswers: ["houses", "tombs", "monuments"],
            incorrectAnswers: [
                "castles",
                "forts",
                "palaces",
                "churches",
                "mosques",
                "synagogues",
                "stadiums",
                "arenas",
                "courthouses",
                "town halls",
                "libraries",
                "schools",
                "hospitals",
                "baths",
                "amphitheatres",
                "aqueducts",
                "bridges",
                "roads",
            ]
        },
        {
            questions: [
                {
                    question: "In what part of the UK is Stonehenge?",
                    correctAnswers: ["Wiltshire"],
                    mandatoryIncorrectAnswers: [
                        "Orkney",
                        "Dorset"
                    ],
                    incorrectAnswers: [
                        ...englishCounties.filter(c => c !== "Wiltshire" && c !== "Dorset"),
                        "Anglesey",
                        "Shetland",
                        "Arran",
                        "Skye",
                        "Lewis",
                        "Harris",
                        "Northern Ireland"
                    ]
                },
                {
                    question: "What stone age monument still stands in Wiltshire?",
                    correctAnswers: ["Stonehenge"],
                    mandatoryIncorrectAnswers: [
                        "Skara Brae",
                        "Maiden Castle",
                        "Sutton Hoo",
                    ],
                    incorrectAnswers: prehistoricSites
                },
                {
                    question: "When was Stonehenge built?",
                    correctAnswers: ["Stone Age"],
                    incorrectAnswers: [
                        "Copper Age",
                        "Bronze Age",
                        "Iron Age",
                        "Dark Ages",
                        "Middle Ages"
                    ]
                },
                {
                    question: "What was Stonehenge probably used for?",
                    correctAnswers: ["seasonal ceremonies"],
                    incorrectAnswers: [
                        "sports",
                        "entertainment",
                        "transportation",
                        "communication",
                        "residence",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "In what part of the UK is Skara Brae?",
                    correctAnswers: ["Orkney"],
                    mandatoryIncorrectAnswers: [
                        "Wiltshire",
                        "Dorset"
                    ],
                    incorrectAnswers: [
                        ...englishCounties.filter(c => c !== "Wiltshire" && c !== "Dorset"),
                        "Anglesey",
                        "Shetland",
                        "Arran",
                        "Skye",
                        "Lewis",
                        "Harris",
                        "Northern Ireland"
                    ]
                },
                {
                    question: "In what part of the UK is Skara Brae?",
                    correctAnswers: ["Off the north coast of Scotland"],
                    incorrectAnswers: [
                        "Off the west coast of Scotland",
                        "Off the east coast of Scotland",
                        "South East Scotland",
                        "South West Scotland",
                        "Central Scotland",
                        "North East Scotland",
                        "North West Scotland",
                        "Off the west coast of England",
                        "Off the east coast of England",
                        "Off the south coast of England",
                        "South East England",
                        "South West England",
                        "East Anglia",
                        "East Midlands",
                        "West Midlands",
                        "North East England",
                        "North West England",
                        "Off the west coast of Wales",
                        "Off the north coast of Wales",
                        "Off the south coast of Wales",
                        "North Wales",
                        "South Wales",
                        "Northern Ireland"
                    ]
                },
                {
                    question: "What prehistoric village on Orkney is the best preserved prehistoric village in northern Europe?",
                    correctAnswers: ["Skara Brae"],
                    mandatoryIncorrectAnswers: [
                        "Stonehenge",
                        "Maiden Castle",
                        "Sutton Hoo",
                    ],
                    incorrectAnswers: prehistoricSites
                },
                {
                    question: "Skara Brae is the best preserved prehistoric village in northern Europe. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "When was Skara Brae built?",
                    correctAnswers: ["Stone Age"],
                    incorrectAnswers: [
                        "Copper Age",
                        "Bronze Age",
                        "Iron Age",
                        "Dark Ages",
                        "Middle Ages"
                    ]
                },
                {
                    question: "Skara Brae has helped archaeologists to understand more about how people lived near the end of the Stone Age. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Skara Brae has helped archaeologists to understand more about how people lived near the end of the Bronze Age. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Skara Brae has helped archaeologists to understand more about how people lived near the end of the Stone Age."
                },
                {
                    question: "Skara Brae has helped archaeologists to understand more about how people lived near the end of the Iron Age. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Skara Brae has helped archaeologists to understand more about how people lived near the end of the Stone Age."
                }
            ]
        },
        {
            question: "When did the Bronze Age begin?",
            correctAnswers: ["4,000 years ago"],
            incorrectAnswers: [
                "1,000 years ago",
                "2,000 years ago",
                "3,000 years ago",
                "5,000 years ago",
                "6,000 years ago",
                "7,000 years ago",
                "8,000 years ago",
                "9,000 years ago",
                "10,000 years ago"
            ]
        },
        {
            question: "What sort of structures did Bronze Age people in Britain build? (Select all that apply)",
            correctAnswers: ["roundhouses", "tombs"],
            incorrectAnswers: [
                "churches",
                "mosques",
                "synagogues",
                "stadiums",
                "arenas",
                "courthouses",
                "town halls",
                "libraries",
                "schools",
                "hospitals",
                "baths",
                "amphitheatres",
                "aqueducts"
            ]
        },
        {
            question: "What is the name of the tombs that Bronze Age people in Britain buried their dead in?",
            correctAnswers: ["round barrows"],
            mandatoryIncorrectAnswers: ["round houses"],
            incorrectAnswers: [
                "sarcophagi",
                "pyramids",
                "mausoleums",
                "crypts",
                "catacombs",
                "cemeteries",
                "churchyards",
                "burial grounds",
                "graveyards",
                "necropolises",
                "ossuaries"]
        },
        {
            questions: [
                {
                    question: "What sort of materials did Bronze Age people in Britain make their tools, ornaments and weapons out of?",
                    correctAnswers: ["bronze", "gold"],
                    incorrectAnswers: [
                        "iron",
                        "steel",
                        "brass"
                    ]
                },
                {
                    question: "What did Bronze Age people in Britain make out of bronze and gold?",
                    correctAnswers: ["tools", "ornaments", "weapons"],
                    incorrectAnswers: [
                        "stirrups",
                        "sun dials",
                        "clocks",
                        "siege engines",
                        "astrolabes",
                    ]
                }
            ]
        },
        {
            question: "What is the name of the age that followed the Bronze Age?",
            correctAnswers: ["Iron Age"],
            incorrectAnswers: [
                "Stone Age",
                "Copper Age",
                "Dark Ages",
                "Middle Ages"
            ]
        },
        {
            question: "What sort of new material did Iron Age people in Britain make their tools and weapons out of? (Select all that apply)",
            correctAnswers: ["iron"],
            isMultipleChoice: true,
            incorrectAnswers: [
                "bronze",
                "gold",
                "steel",
                "brass"
            ],
            explanation: "They were already making bronze and gold tools and weapons in the Bronze Age."
        },
        {
            question: "What is the name of the structures that Iron Age people in Britain lived in?",
            correctAnswers: ["roundhouses"],
            incorrectAnswers: [
                "round barrows",
                "motte and bailey",
                "necropolises",
                "mausoleums",
            ]
        },
        {
            questions: [
                {
                    question: "In the Iron Age, people in Britain grouped together into larger settlements. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "In the Iron Age, people in Britain were NOT yet grouped together into larger settlements. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "In the Iron Age, people in Britain built hill forts. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "What is the name of the defensive structures that Iron Age people in Britain built?",
                    correctAnswers: ["hill forts"],
                    incorrectAnswers: [
                        "castles",
                        "fortresses",
                        "motte and bailey",
                        "citadels",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "In what part of the UK is Maiden Castle?",
                    correctAnswers: ["Dorset"],
                    mandatoryIncorrectAnswers: [
                        "Orkney",
                        "Wiltshire"
                    ],
                    incorrectAnswers: [
                        ...englishCounties.filter(c => c !== "Wiltshire" && c !== "Dorset"),
                        "Anglesey",
                        "Shetland",
                        "Arran",
                        "Skye",
                        "Lewis",
                        "Harris",
                        "Northern Ireland"
                    ]
                },
                {
                    question: "What iron age hill fort still can still be seen today in Dorset?",
                    correctAnswers: ["Maiden Castle"],
                    mandatoryIncorrectAnswers: [
                        "Stonehenge",
                        "Skara Brae",
                        "Sutton Hoo",
                    ],
                    incorrectAnswers: prehistoricSites
                },
                {
                    question: "When was Maiden Castle built?",
                    correctAnswers: ["Iron Age"],
                    incorrectAnswers: [
                        "Stone Age",
                        "Copper Age",
                        "Bronze Age",
                        "Dark Ages",
                        "Middle Ages"
                    ]
                }
            ]
        },
        {
            question: "In the Iron age, people in Britain were mostly what sort of workers? (Select all that apply)",
            correctAnswers: ["farmers", "craft workers", "warriors"],
            incorrectAnswers: [
                "teachers",
                "doctors",
                "lawyers",
                "politicians",
                "scientists",
                "engineers",
                "builders",
                "sailors",
                "merchants",
            ]
        },
        {
            questions: [
                {
                    question: "What language family did Iron Age people in Britain speak?",
                    correctAnswers: ["Celtic"],
                    incorrectAnswers: [
                        "Germanic",
                        "Romance",
                        "Slavic",
                        "Semitic",
                        "Sino-Tibetan",
                        "Afro-Asiatic",
                        "Austronesian",
                        "Dravidian",
                        "Turkic",
                        "Japonic",
                        "Uralic",
                    ]
                },
                {
                    question: "What parts of the UK still speak a Celtic language today? (Select all that apply)",
                    correctAnswers: ["Wales", "Scotland", "Northern Ireland"],
                    incorrectAnswers: [
                        "England"
                    ],
                    explanation:
                        "The Celtic languages are Welsh, Scottish Gaelic and Irish Gaelic. " +
                        "There's also Manx and Breton, but they're not spoken in the UK. " +
                        "There's also Cornish from England, but it's not a living language."
                },
                {
                    question: "Celtic languages were spoken across Europe in the Iron Age. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "In the Iron Age, Celtic languages were only spoken in Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Celtic languages were spoken across Europe in the Iron Age."
                }
            ]
        },
        {
            questions: [
                {
                    question: "The first coins to be minted in Britain were made in the Iron Age. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The first coins to be minted in Britain were made in the Stone Age. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The first coins to be minted in Britain were made in the Iron Age."
                },
                {
                    question: "The first coins to be minted in Britain were made in the Bronze Age. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The first coins to be minted in Britain were made in the Iron Age."
                },
                {
                    question: "Coins in Iron Age Britain were inscribed with the names of Iron Age kings. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                }
            ]
        },
        {
            question: "The people of the Iron Age had a sophisticated culture and economy. True or False?",
            correctAnswers: ["True"],
            incorrectAnswers: ["False"]
        },
        {
            questions: [
                {
                    question: "The Iron Age marks the beginnings of British history. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Stone Age marks the beginnings of British history. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Iron Age marks the beginnings of British history."
                },
                {
                    question: "The Bronze Age marks the beginnings of British history. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Iron Age marks the beginnings of British history."
                }
            ]
        }
    ];

    let category = {
        name: "Early Britain",
        questions: questions
    }
    quizDeck.categories.push(category);
})();