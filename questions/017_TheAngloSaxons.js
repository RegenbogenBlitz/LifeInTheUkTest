(() => {
    let plausibleSaints = [
        "St David",
        "St George",
        "St Andrew",
        "St Alban",
        "St Edward"
    ];

    let questions = [
        {
            questions: [
                {
                    question: "After the Romans left Britain, the country was invaded by tribes from northern Europe. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "After the Romans left Britain, the country was never invaded again. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "After the Romans left Britain, the country was invaded by various tribes. Where did these tribes come from?",
                    correctAnswers: ["Northern Europe"],
                    incorrectAnswers: [
                        "Southern Europe",
                        "Eastern Europe",
                        "Western Europe",
                        "Asia",
                        "Africa"
                    ],
                },
                {
                    question: "After the Romans left Britain, the country was invaded by tribes from northern Europe. What were these tribes called? (Select all that apply)",
                    correctAnswers: ["Jutes", "Angles", "Saxons"],
                    mandatoryIncorrectAnswers: ["Vikings", "Normans"],
                    incorrectAnswers: ["Gauls", "Franks", "Goths", "Huns", "Vandals"],
                },
                {
                    question: "The languages spoken by the Jutes, Angles and Saxons are the basis of modern-day English. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The languages spoken by the Jutes, Angles and Saxons are NOT the basis of modern-day English. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "The people of Britain fought battles against the Jutes, Angles and Saxons. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Jutes, Angles and Saxons settled in Britain without any fighting. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            question: "When were Anglo-Saxon kingdoms established in Britain?",
            correctAnswers: ["about AD 600"],
            incorrectAnswers: ["about AD 300", "about AD 400", "about AD 500", "about AD 700", "about AD 800", "about AD 900"],
        },
        {
            questions: [
                {
                    question: "The Anglo-Saxon kingdoms were mainly in what is now England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Anglo-Saxon kingdoms were mainly in what is now Scotland. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Anglo-Saxon kingdoms were mainly in what is now England. The Anglo-Saxons did not conquer Scotland.",
                },
                {
                    question: "The Anglo-Saxon kingdoms were mainly in what is now Wales. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Anglo-Saxon kingdoms were mainly in what is now England. The Anglo-Saxons did not conquer Wales.",
                },
                {
                    question: "The Anglo-Saxon kingdoms were mainly in what is now Ireland. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Anglo-Saxon kingdoms were mainly in what is now England. The Anglo-Saxons did not conquer Ireland.",
                },
                {
                    question: "Parts of the west of Britain, including much of what is now Wales, and Scotland, remained free of Anglo-Saxon rule. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "Name a burial place of one of the kings of Anglo-Saxon kingdoms.",
                    correctAnswers: ["Sutton Hoo"],
                    furtherCorrectAnswers: ["Winchester Cathedral", "Hyde Abbey"],
                    mandatoryIncorrectAnswers: [
                        "Stonehenge",
                        "Maiden Castle",
                        "Skara Brae"
                    ],
                    incorrectAnswers: [
                        "Hadrian's Wall",
                        "Tower of London",
                        "Westminster Abbey",
                        "St Paul's Cathedral",
                        "Avebury",
                        "Silbury Hill",
                    ]
                },
                {
                    question: "Where is Sutton Hoo?",
                    correctAnswers: ["Suffolk"],
                    incorrectAnswers: englishCounties.filter(county => county !== "Suffolk"),
                },
                {
                    question: "What is famous about Sutton Hoo in Suffolk?",
                    correctAnswers: ["It is the burial place of one an Anglo-Saxon king."],
                    incorrectAnswers: [
                        "It is the burial place of one of the Roman emperors.",
                        "It is the burial place of one of the Viking kings.",
                        "It is the burial place of one of the Norman kings.",
                        "It is the site of a famous battle between the Anglo-Saxons and the Vikings.",
                        "It is the site of a famous battle between the Anglo-Saxons and the Normans.",
                        "It is the site of a famous battle between the Anglo-Saxons and the Romans.",
                        "It is the site of a famous battle between the Anglo-Saxons and the Celts.",
                        "It is the site of a standing stone circle.",
                    ]
                },
                {
                    question: "What was buried with the Anglo-Saxon king at Sutton Hoo? (Name at least 3)",
                    minimumCorrectAnswers: 3,
                    correctAnswers: ["treasure", "armour", "a ship"],
                    furtherCorrectAnswers: ["a sword", "a shield", "a spear", "a drinking horn", "a lyre", "a silver plate"],
                    incorrectAnswers: [
                        "a chess set",
                        "a pocket watch",
                        "a sundial",
                        "a telescope",
                        "a compass",
                        "a bible",
                        "philosphical writings",
                        "a pet dog",
                        "a pet cat"
                    ]
                },
                {
                    question: "How was the burial at Sutton Hoo covered?",
                    correctAnswers: ["a mound of earth"],
                    incorrectAnswers: [
                        "a pyramid",
                        "a stone circle",
                        "a mausoleum",
                        "a palace",
                        "large stone slabs"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Anglo-Saxons were NOT Christians when they first came to Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Anglo-Saxons were Christians when they first came to Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "During the Anglo-Saxon period, missionaries came to Britain to preach about Christianity. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Christian missionaries did NOT come to Britain during the Anglo-Saxon period. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "Missionaries from Ireland spread Christianity in which part of Great Britain?",
                    correctAnswers: ["North Britain"],
                    incorrectAnswers: ["South Britain", "Wales"],
                },
                {
                    question: "Missionaries from Ireland spread Christianity in the north of Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Missionaries from Ireland spread Christianity in the south of Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Ireland spread Christianity in the north of Britain.",
                },
                {
                    question: "Missionaries from Ireland spread Christianity throughout Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Ireland spread Christianity in the north of Britain.",
                },
                {
                    question: "Missionaries from Ireland spread Christianity throughout England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Ireland spread Christianity in the north of Britain.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "Which part of the British Isles did St Patrick spend the most significant part of his career?",
                    correctAnswers: ["Ireland"],
                    incorrectAnswers: ["England", "Scotland", "Wales"],
                },
                {
                    question: "St Patrick, who lived in the 5th century, became the patron saint of which country?",
                    correctAnswers: ["Ireland"],
                    incorrectAnswers: ["England", "Scotland", "Wales"],
                },
                {
                    question: "Who famously brought Christianity to Ireland?",
                    correctAnswers: ["St Patrick"],
                    mandatoryIncorrectAnswers: ["St Columba", "St Augustine"],
                    incorrectAnswers: plausibleSaints
                }
            ]
        },
        {
            questions: [
                {
                    question: "Where did St Columba found a monastery?",
                    correctAnswers: ["Iona"],
                    incorrectAnswers: ukIndividualIslands.filter(island => island !== "Iona")
                },
                {
                    question: "Who founded a monastery on the island of Iona, off the coast of what is now Scotland?",
                    correctAnswers: ["St Columba"],
                    mandatoryIncorrectAnswers: ["St Patrick", "St Augustine",],
                    incorrectAnswers: plausibleSaints
                },
                {
                    question: "St Columba founded a monastery on the island of Iona. Where is Iona?",
                    correctAnswers: ["Off the coast of what is now Scotland"],
                    incorrectAnswers: [
                        "Off the coast of what is now England",
                        "Off the coast of what is now Wales",
                        "Off the coast of what is now Ireland"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Missionaries from Rome spread Christianity in which part of Great Britain?",
                    correctAnswers: ["South Britain"],
                    incorrectAnswers: ["North Britain", "Wales"],
                },
                {
                    question: "Missionaries from Rome spread Christianity in the south of Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Missionaries from Rome spread Christianity in the north of Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Rome spread Christianity in the south of Britain.",
                },
                {
                    question: "Missionaries from Rome spread Christianity throughout Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Rome spread Christianity in the south of Britain.",
                },
                {
                    question: "Missionaries from Rome spread Christianity throughout England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Missionaries from Rome spread Christianity in the south of Britain.",
                }
            ]
        },
        {
            questions: [
                {
                    question: "Where did the St Augustine, first Archbishop of Canterbury, come from?",
                    correctAnswers: ["Rome"],
                    mandatoryIncorrectAnswers: ["Hippo"],
                    incorrectAnswers: [
                        "England",
                        "Scotland",
                        "Wales",
                        "Ireland",
                        "Carthage",
                        "Alexandria",
                        "Jerusalem",
                        "Antioch",
                        "Constantinople"
                    ],
                },
                {
                    question: "Who was the first Archbishop of Canterbury?",
                    correctAnswers: ["St Augustine"],
                    mandatoryIncorrectAnswers: ["St Columba", "St Patrick"],
                    incorrectAnswers: plausibleSaints
                },
                {
                    question: "Who led missionaries from Rome, who spread Christianity in parts of Britain?",
                    correctAnswers: ["St Augustine"],
                    mandatoryIncorrectAnswers: ["St Columba", "St Patrick"],
                    incorrectAnswers: plausibleSaints
                }
            ]
        }
    ];

    let category = {
        name: "The Anglo-Saxons",
        questions: questions
    }
    quizDeck.categories.push(category);
})();
