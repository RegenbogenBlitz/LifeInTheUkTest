(() => {
    let questions = [
        {
            question: "Where did many people from Britain and Ireland settle during the late 17th and early 18th century?",
            correctAnswers: [
                "In new colonies in America"
            ],
            incorrectAnswers: [
                "In existing colonies in Asia",
                "In new colonies in Africa",
                "In the Middle East",
                "In Europe",
                "In Australia"
            ]
        },
        {
            question: "During the late 17th and early 18th century, which of the following best describes the population movement in Britain?",
            correctAnswers: [
                "Many people left to settle in new colonies and others came to live in Britain"
            ],
            incorrectAnswers: [
                "No significant population movement occurred",
                "People only left Britain and none came to live there",
                "Britain experienced only internal migration",
                "Britain closed its borders to all migrants"
            ]
        },
        {
            question: "In what year did the first Jews settle in Britain since the Middle Ages?",
            correctAnswers: ["1656"],
            incorrectAnswers: getDates(1485, 1800, [1656], false)
        },
        {
            question: "When Jews settled in Britain for the first time since the Middle Ages, where did they settle?",
            correctAnswers: [
                "London"
            ],
            incorrectAnswers: [
                "Birmingham",
                "Manchester",
                "Glasgow",
                "Edinburgh",
                "Liverpool",
                "Bristol",
                "Cambridge"
            ]
        },
        {
            questions: [
                { // KEY QUESTION
                    question: "What were the refugees who came to Britain between 1680 and 1720 known as?",
                    correctAnswers: [
                        "Huguenots"
                    ],
                    incorrectAnswers: [
                        "Presbyterians",
                        "Anglicans",
                        "Puritans",
                        "Quakers",
                        "Jacobites",
                        "Calvinists",
                        "Pilgrims",
                        "Baptists"
                    ]
                },
                {
                    question: "During which years did many refugees called Huguenots come to Britain?",
                    correctAnswers: [
                        "Between 1680 and 1720"
                    ],
                    incorrectAnswers: [
                        "Between 1590 and 1630",
                        "Between 1640 and 1670",
                        "Between 1730 and 1760",
                        "Between 1770 and 1810"
                    ],
                    explanation: "This is the only time Huguenots are mentioned in the book, but there were other times when significant numbers of Huguenots came to Britain."
                }
            ]
        },
        {
            question: "Where did Huguenots originate from?",
            correctAnswers: [
                "France"
            ],
            incorrectAnswers: [
                "Ireland",
                "America",
                "Germany",
                "Spain",
                "Portugal",
                "Italy",
                "The Netherlands",
                "Scotland",
                "Wales",
                "Sweden",
                "Denmark",
                "Norway"
            ]
        },
        {
            questions: [
                {
                    question: "What was the religion of the Huguenots?",
                    correctAnswers: [
                        "Protestants"
                    ],
                    mandatoryIncorrectAnswers: [
                        "Catholics",
                        "Anglicans",
                        "Jews"],
                    incorrectAnswers: [
                        "Muslims",
                        "Hindus",
                        "Buddhists",
                        "Sikhs"
                    ]
                },
                {
                    question: "Why were the Huguenots persecuted in France?",
                    correctAnswers: [
                        "For their religion"
                    ],
                    incorrectAnswers: [
                        "For their political beliefs",
                        "For their language",
                        "For their wealth",
                        "For their scientific knowledge",
                        "For their crafts",
                        "For their nationality"
                    ]
                }
            ]
        },
        {
            question: "What professions did many educated and skilled Huguenots work in when they came to Britain? (Select all that apply)",
            correctAnswers: [
                "science",
                "banking",
                "weaving"
            ],
            incorrectAnswers: [
                "farming",
                "military service",
                "law",
                "medicine",
                "teaching",
                "shipbuilding",
                "politics",
                "mining",
            ],
            explanation: "The book says they worked as scientists, bankers, and weavers, but they also worked in jewelry, wig, hat and paper making, and other crafts."
        },
        {
            question: "What is a 'refugee'?",
            correctAnswers: [
                "A person who must leave the country where they live, often because of a war or for political reasons"
            ],
            incorrectAnswers: [
                "A person who travels to a new country, mainly for economic opportunities",
                "A person who is sent to another country by their employer, mostly for business reasons",
                "A person who visits another country for tourism",
                "A person who migrates to another country, mainly for education",
                "A person who is forcibly displaced within their own country, often because of a war or for political reasons",
                "A person who goes to another country for medical treatment"
            ],
            explanation: "This is how the book defines a refugee. The UN definition is similar."
        }
    ];

    let category = {
        name: "A Growing Population",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
