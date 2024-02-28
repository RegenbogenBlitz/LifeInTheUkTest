(() => {
    let questions = [
        {
            question: "What of the following areas did the British Empire cover during the Victorian Period? (Select all that apply)",
            correctAnswers: [
                "India",
                "Australia",
                "large parts of Africa"
            ],
            incorrectAnswers: [
                "The Thirteen Colonies",
                "China",
                "Normandy",
                "Gascony",
                "Japan",
                "The Philippines",
                "Brazil",
                "Vietnam",
                "Palestine",
                "Madagascar",
            ],
            explanation: "The British Empire also included Canada, New Zealand, and large parts of the Caribbean, " +
                "as well as smaller territories in the Middle East, Southeast Asia, and the Pacific. " +
                "In Africa, the British Empire included Egypt, Sudan, Kenya, Uganda, South Africa, and Nigeria, among others."
        },
        {
            question: "Which empire became the largest the world has ever seen during the Victorian Period?",
            correctAnswers: ["The British Empire"],
            incorrectAnswers: [
                "The French Empire",
                "The Spanish Empire",
                "The Portuguese Empire",
                "The American Empire",
                "The Ottoman Empire",
                "The Russian Empire",
                "The Chinese Empire",
                "The Japanese Empire",
            ]
        },
        {
            question: "What was the estimated population of the British Empire at the height of its expansion during the Victorian Period? (Choose the closest estimate)",
            correctAnswers: [
                "more than 400 million people"
            ],
            incorrectAnswers: [
                "more than 100 million people",
                "more than 200 million people",
                "more than 300 million people",
                "more than 500 million people",
                "more than 600 million people",
                "more than 700 million people"
            ]
        },
        {
            question: "During which period did the British Empire become the largest empire the world has ever seen?",
            correctAnswers: [
                "the Victorian Period"
            ],
            incorrectAnswers: [
                "the Middle Ages",
                "the Tudor Period",
                "the Stuart Period",
                "the Georgian Period",
                "the 20th Century",
            ]
        },
        //{
        //    question: "During the Victorian Period, what were many people in the UK encouraged to do in terms of relocation?",
        //    correctAnswers: [
        //        "Settle overseas"
        //    ],
        //    incorrectAnswers: [
        //        "Join the military",
        //        "Travel for leisure",
        //        "Study abroad",
        //        "Engage in trade",
        //        "Stay within the UK",
        //        "Work in urban factories",
        //        "Migrate to the cities"
        //    ]
        //},
        //{
        //    question: "During which period were many people encouraged to leave the UK to settle overseas?",
        //    correctAnswers: [
        //        "Victorian Period"
        //    ],
        //    incorrectAnswers: [
        //        "Edwardian Period",
        //        "Georgian Period",
        //        "Tudor Period",
        //        "Stuart Period",
        //        "Elizabethan Period",
        //        "Modern Period"
        //    ]
        //},
        //{
        //    question: "During the Victorian Period, what were many people in the UK encouraged to do?",
        //    correctAnswers: [
        //        "To settle overseas"
        //    ],
        //    incorrectAnswers: [
        //        "To increase population",
        //        "To seek education",
        //        "To explore new territories",
        //        "To establish trade routes",
        //        "To join foreign armies",
        //        "To engage in diplomatic missions"
        //    ]
        //},
        //{
        //    question: "In relation to the UK, what direction were many people encouraged to move during the Victorian Period?",
        //    correctAnswers: [
        //        "Overseas"
        //    ],
        //    incorrectAnswers: [
        //        "Inland",
        //        "To the north",
        //        "To the south",
        //        "To the east",
        //        "To the west",
        //        "To neighboring countries",
        //        "To the colonies only"
        //    ]
        //},
        //{
        //    question: "How were people in the UK encouraged regarding settlement during the Victorian Period?",
        //    correctAnswers: [
        //        "Encouraged"
        //    ],
        //    incorrectAnswers: [
        //        "Forced",
        //        "Required",
        //        "Funded",
        //        "Voluntary",
        //        "Spontaneous",
        //        "Prohibited",
        //        "Discouraged"
        //    ]
        //},
        //{
        //    question: "During the Victorian Period, what did 'settle overseas' typically mean regarding the movement of British citizens?",
        //    correctAnswers: [
        //        "Permanent or long-term relocation"
        //    ],
        //    incorrectAnswers: [
        //        "Short-term travel",
        //        "Military deployment",
        //        "Educational exchange",
        //        "Temporary work assignments",
        //        "Vacation",
        //        "Visiting family",
        //        "Pilgrimage"
        //    ]
        //},
        //{
        //    question: "Between which years did as many as 13 million British citizens leave the UK to settle overseas during the Victorian period?",
        //    correctAnswers: [
        //        "1853 and 1913"
        //    ],
        //    incorrectAnswers: [
        //        "1753 and 1813",
        //        "1901 and 1910",
        //        "1800 and 1850",
        //        "1875 and 1925",
        //        "1914 and 1939",
        //        "1700 and 1750",
        //        "1600 and 1650"
        //    ]
        //},
        //{
        //    question: "How many British citizens left the UK to settle overseas between 1853 and 1913?",
        //    correctAnswers: [
        //        "13 million"
        //    ],
        //    incorrectAnswers: [
        //        "10 million",
        //        "15 million",
        //        "20 million",
        //        "5 million",
        //        "8 million",
        //        "25 million",
        //        "30 million"
        //    ]
        //},
        //{
        //    question: "During the Victorian Period, did people from other parts of the world continue to come to Britain?",
        //    correctAnswers: [
        //        "Yes"
        //    ],
        //    incorrectAnswers: [
        //        "No"
        //    ]
        //},
        //{
        //    question: "Between which years did approximately 120,000 Russian and Polish Jews immigrate to Britain to escape persecution?",
        //    correctAnswers: [
        //        "between 1870 and 1914"
        //    ],
        //    incorrectAnswers: [
        //        "between 1853 and 1913",
        //        "between 1800 and 1850",
        //        "between 1900 and 1950",
        //        "between 1750 and 1800",
        //        "between 1914 and 1939",
        //        "between 1600 and 1650"
        //    ]
        //},
        //{
        //    question: "Approximately how many Russian and Polish Jews came to Britain between 1870 and 1914?",
        //    correctAnswers: [
        //        "around 120,000"
        //    ],
        //    incorrectAnswers: [
        //        "around 13 million",
        //        "around 400 million",
        //        "around 100,000",
        //        "around 200,000",
        //        "around 50,000",
        //        "around 1 million"
        //    ]
        //},
        //{
        //    question: "Why did Russian and Polish Jews come to Britain between 1870 and 1914?",
        //    correctAnswers: [
        //        "to escape persecution"
        //    ],
        //    incorrectAnswers: [
        //        "to settle as part of the Empire",
        //        "for better employment opportunities",
        //        "to study",
        //        "to join family members",
        //        "as part of a government relocation program",
        //        "for religious missionary work"
        //    ]
        //},
        //{
        //    question: "Where did many of the Russian and Polish Jews who came to Britain between 1870 and 1914 settle?",
        //    correctAnswers: [
        //        "London's East End",
        //        "Manchester",
        //        "Leeds"
        //    ],
        //    incorrectAnswers: [
        //        "Birmingham",
        //        "Liverpool",
        //        "Glasgow",
        //        "Bristol",
        //        "Sheffield",
        //        "Cardiff",
        //        "Edinburgh"
        //    ]
        //},
        //{
        //    question: "Which areas of Britain did many Russian and Polish Jews settle in after coming to Britain to escape persecution between 1870 and 1914?",
        //    correctAnswers: [
        //        "London's East End",
        //        "Manchester",
        //        "Leeds"
        //    ],
        //    incorrectAnswers: [
        //        "Newcastle",
        //        "Nottingham",
        //        "Brighton",
        //        "Plymouth",
        //        "Oxford",
        //        "Cambridge",
        //        "Belfast"
        //    ]
        //},
        //{
        //    question: "Where did people come from to live, work, and study in Britain during the Victorian Period?",
        //    correctAnswers: [
        //        "the Empire including India and Africa"
        //    ],
        //    incorrectAnswers: [
        //        "the Americas",
        //        "Europe",
        //        "China",
        //        "Russia",
        //        "Australia",
        //        "New Zealand"
        //    ]
        //},
        //{
        //    question: "What reasons did people have for coming to Britain from the Empire, including India and Africa, during the Victorian Period?",
        //    correctAnswers: [
        //        "to live",
        //        "to work",
        //        "to study"
        //    ],
        //    incorrectAnswers: [
        //        "to escape persecution",
        //        "for political asylum",
        //        "for religious freedom",
        //        "to join the military",
        //        "for vacation",
        //        "as part of a cultural exchange"
        //    ]
        //},
        //{
        //    question: "Which specific regions are mentioned as places from which people came to Britain to live, work, and study during the Victorian Period?",
        //    correctAnswers: [
        //        "India",
        //        "Africa"
        //    ],
        //    incorrectAnswers: [
        //        "Canada",
        //        "Australia",
        //        "New Zealand",
        //        "the West Indies",
        //        "Hong Kong",
        //        "Singapore"
        //    ]
        //}
    ];

    let category = {
        name: "The British Empire (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
