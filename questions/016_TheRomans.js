(() => {
    let questions = [
        {
            questions: [
                {
                    question: "When did Julius Caesar lead a Roman invasion of Britain?",
                    correctAnswers: ["55 BC"],
                    incorrectAnswers: getDates(-100, 410, [-55], true),
                },
                {
                    question: "Who led a Roman invasion of Britain in 55 BC?",
                    correctAnswers: ["Julius Caesar"],
                    mandatoryIncorrectAnswers: [
                        "Claudius",
                        "Hadrian"
                    ],
                    incorrectAnswers: [
                        "Augustus",
                        "Tiberius",
                        "Caligula",
                        "Nero",
                        "Vitellius",
                        "Vespasian",
                        "Titus",
                        "Domitian",
                        "Trajan",
                        "Marcus Aurelius",
                    ],
                },
                {
                    question: "Who attempted an invasion of Britain in 55 BC?",
                    correctAnswers: ["The Romans"],
                    incorrectAnswers: [
                        "The Greeks",
                        "The Celts",
                        "The Gauls",
                        "The Anglo-Saxons",
                        "The Vikings",
                        "The Normans",
                        "The Spanish",
                    ],
                },
                {
                    question: "The Roman invasion in 55 BC, was unsuccessful. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Roman invasion in 55 BC, was successful. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "Britain was separate from the Roman Empire for nearly 100 years since 55 BC. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Britain was part of the Roman Empire since 55 BC. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                ,

            ]
        },
        {
            questions: [
                {
                    question: "When did the Emperor Claudius ordered the Roman invasion of Britain?",
                    correctAnswers: ["AD 43"],
                    incorrectAnswers: getDates(-100, 410, [43], true),
                },
                {
                    question: "What was the name of the Roman Emperor who ordered the invasion of Britain in AD 43?",
                    correctAnswers: ["Claudius"],
                    mandatoryIncorrectAnswers: [
                        "Julius Caesar",
                        "Hadrian"
                    ],
                    incorrectAnswers: [
                        "Augustus",
                        "Tiberius",
                        "Caligula",
                        "Nero",
                        "Vitellius",
                        "Vespasian",
                        "Titus",
                        "Domitian",
                        "Trajan",
                        "Marcus Aurelius",
                    ],
                },
                {
                    question: "Who invaded Britain in AD 43?",
                    correctAnswers: ["The Romans"],
                    incorrectAnswers: [
                        "The Greeks",
                        "The Celts",
                        "The Gauls",
                        "The Anglo-Saxons",
                        "The Vikings",
                        "The Normans",
                        "The Spanish",
                    ],
                },
                {
                    question: "The Roman invasion in AD 43, was successful. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Roman invasion in AD 43, was unsuccessful. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "During the Roman invasion in AD 43, there was resistance from some of the British tribes. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "During the Roman invasion in AD 43, there was NOT resistance from British tribes. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "After the invasion in AD 43, the Romans were successful in occupying almost all of Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "After the invasion in AD 43, the Romans were unsuccessful in occupying most of Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "After the invasion in AD 43, the Romans were successful in occupying almost all of Britain."
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who was the leader of the Iceni tribe when they fought against the Romans in AD 60?",
                    correctAnswers: ["Boudicca"],
                    incorrectAnswers: [
                        "Cleopatra",
                        "Hanibal",
                        "Vercingetorix",
                        "Asterix",
                        "Obelix",
                        "Attilla",
                        "Pyrrhus",
                        "Spartacus",
                    ]
                },
                {
                    question: "Whose statue stands on Westminster Bridge in London, near the Houses of Parliament?",
                    correctAnswers: ["Boudicca"],
                    incorrectAnswers: [
                        "Churchill",
                        "Margaret Thatcher",
                        "David Lloyd George",
                        "3rd Viscount Palmerston",
                        "The 14th Earl of Derby",
                        "Benjamin Disraeli",
                        "Robert Peel",
                        "George Canning",
                        "Jan Smuts",
                        "Nelson Mandela",
                        "Gandhi",
                        "Abraham Lincoln",
                        "Millicent Fawcett",
                        "Nelson",
                        "The Duke of Wellington",
                        "Sir Issac Newton",
                        "Charles Darwin",
                        "William Shakespeare",
                        "Alfred the Great",
                        "Henry VIII",
                        "Queen Elizabeth I",
                        "Queen Victoria",
                    ]
                },
                {
                    question: "Where is the most famous statue of Boudicca located?",
                    correctAnswers: ["Westminster Bridge"],
                    incorrectAnswers: [
                        "Tower Bridge",
                        "London Bridge",
                        "Trafalgar Square",
                        "Piccadilly Circus",
                        "Buckingham Palace",
                        "The Tower of London",
                        "Mayfair",
                        "Hyde Park"
                    ]
                },
                {
                    question: "Boudicca was the Queen of which British tribe that fought against the Romans?",
                    correctAnswers: ["Iceni"],
                    mandatoryIncorrectAnswers: ["Picts"],
                    incorrectAnswers: [
                        "Atrebates",
                        "Belgae",
                        "Brigantes",
                        "Caledonians",
                        "Cantii",
                        "Catuvellauni",
                        "Corieltauvi",
                        "Cornovii",
                        "Dobunni",
                        "Dumnonii",
                        "Durotriges",
                        "Ordovices",
                        "Parisii",
                        "Regnenses",
                        "Silures",
                        "Trinovantes",
                        "Votadini"
                    ]
                },
                {
                    question: "What part of Britain did the Iceni tribe live in?",
                    correctAnswers: ["Eastern England"],
                    incorrectAnswers: [
                        "Northern England",
                        "Southern England",
                        "Western England",
                        "Northern Scotland",
                        "Southern Scotland",
                        "Eastern Scotland",
                        "Western Scotland",
                        "Northern Wales",
                        "Southern Wales",
                        "Eastern Wales",
                        "Western Wales",
                    ]
                },
                {
                    question: "Who did the Iceni tribe fight against in AD 60?",
                    correctAnswers: ["The Romans"],
                    incorrectAnswers: [
                        "The Greeks",
                        "The Gauls",
                        "The Anglo-Saxons",
                        "The Vikings",
                        "The Normans",
                        "The Spanish",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Romans were NOT successful in occupying almost all of Scotland. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Romans were successful in occupying almost all of Scotland. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is the name of the wall that the Romans built in the north of England to keep out the Picts?",
                    correctAnswers: ["Hadrian's Wall"],
                    mandatoryIncorrectAnswers: ["Offa's Dyke", "The Antonine Wall"],
                    incorrectAnswers: [
                        "The Aurelian Wall",
                        "The Lugo Wall",
                        "The Theodosian Wall",
                        "Murus Romuli",
                        "The Servian Wall"
                    ]
                },
                {
                    question: "Which Roman Emperor built a wall in the north of England to keep out the Picts?",
                    correctAnswers: ["Hadrian"],
                    mandatoryIncorrectAnswers: ["Julius Caesar", "Claudius", "Antonius"],
                    incorrectAnswers: [
                        "Augustus",
                        "Tiberius",
                        "Caligula",
                        "Nero",
                        "Vitellius",
                        "Vespasian",
                        "Titus",
                        "Domitian",
                        "Trajan",
                        "Marcus Aurelius",
                    ]
                },
                {
                    question: "Which tribe did Emperor Hadrian build a wall in the north of England to keep out?",
                    correctAnswers: ["Picts"],
                    mandatoryIncorrectAnswers: ["Iceni"],
                    incorrectAnswers: [
                        "Atrebates",
                        "Belgae",
                        "Brigantes",
                        "Caledonians",
                        "Cantii",
                        "Catuvellauni",
                        "Corieltauvi",
                        "Cornovii",
                        "Dobunni",
                        "Dumnonii",
                        "Durotriges",
                        "Ordovices",
                        "Parisii",
                        "Regnenses",
                        "Silures",
                        "Trinovantes",
                        "Votadini"
                    ]
                },
                {
                    question: "What part of Britain did the Picts live in?",
                    correctAnswers: ["Scotland"],
                    incorrectAnswers: [
                        "South East England",
                        "South West England",
                        "East Midlands",
                        "West Midlands",
                        "Wales",
                    ]
                },
                {
                    question: "Hadrian's Wall included a number of forts. Which of the following forts can still be seen today? (Name at least 2)",
                    minimumCorrectAnswers: 2,
                    correctAnswers: ["Housesteads", "Vindolanda"],
                    furtherCorrectAnswers: ["Segedunum", "Arbeia", "Chesters", "Birdoswald"],
                    incorrectAnswers: [
                        "Aballava",
                        "Camboglanna",
                        "Luguvalium",
                        "Magnis",
                        "Maia",
                        "Pons Aelius",
                        "Vindobala"
                    ]
                },
                {
                    question: "Hadrian's Wall can still be seen today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Hadrian's Wall can no longer be seen today. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "Several forts on Hadrian's Wall can still be seen today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The forts of Hadrian's Wall can no longer be seen today. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "Hadrian's Wall is a popular area for walkers. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Hadrian's Wall is a UNESCO World Heritage Site. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Hadrian's Wall is NOT a UNESCO World Heritage Site. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "How long did the Romans remain in Britain?",
            correctAnswers: ["400 years"],
            incorrectAnswers: [
                "100 years",
                "200 years",
                "300 years",
                "500 years",
                "600 years",
                "700 years"
            ]
        },
        {
            question: "Which of the following did the Romans introduce to Britain? (Select all that apply)",
            correctAnswers: ["Roads", "Public Buildings", "A Structure of Law", "New Plants", "New Animals"],
            incorrectAnswers: [
                "Mechanical Clocks",
                "The Printing Press",
                "The Navigation Compass",
                "Paper Money",
                "Gunpowder",
                "Spectacles",
                "Universities"
            ]

        },
        {
            question: "When did the first Christian communities begin to appear in Britain?",
            correctAnswers: ["3rd and 4th centuries AD"],
            incorrectAnswers: [
                "2nd and 1st centuries BC",
                "1st and 2nd centuries AD",
                "5th and 6th centuries AD",
                "7th and 8th centuries AD"
            ]
        },
        {
            questions: [
                {
                    question: "When did the Romans leave Britain?",
                    correctAnswers: ["AD 410"],
                    incorrectAnswers: getDates(-100, 789, [410], true)
                },
                {
                    question: "When the Roman army left Britain in AD 410 to defend other parts of the Roman Empire, they never returned. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "When the Roman army left Britain in AD 410 to defend other parts of the Roman Empire, they returned later. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
            ]
        }
    ];

    let category = {
        name: "The Romans",
        questions: questions,
        group: "Early Britain"
    }
    quizDeck.categories.push(category);
})();