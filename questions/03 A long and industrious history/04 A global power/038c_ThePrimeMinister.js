(() => {
    let questions = [
        {
            questions: [
                {
                    question: "Who was chosen by Parliament to be the next monarch after the death of Queen Anne?",
                    correctAnswers: [
                        "George I"
                    ],
                    mandatoryIncorrectAnswers: ["James VIII and III", "Charles Edward Stuart"],
                    incorrectAnswers: dualMonarchs.filter(monarch =>
                        monarch !== "Anne").concat(unitedMonarchs.filter(monarch =>
                            monarch !== "George I")),
                    explanation: "Technically, the Act of Settlement 1701 made George I the next in line to the throne after William III, Anne and George's mother (Sophia)'s deaths. " +
                        "So Parliament didn't choose him when Queen Anne died, the rules of succession had been settled over a decade before."
                },
                {
                    question: "Why was George I chosen by Parliament to be the next monarch after the death of Queen Anne?",
                    correctAnswers: [
                        "He was Anne's nearest Protestant relative"
                    ],
                    incorrectAnswers: [
                        "He was Anne's only surviving son",
                        "He was the most popular candidate among the people",
                        "He had the strongest military support",
                        "He was the Speaker of the House of Commons",
                        "He was the wealthiest nobleman",
                        "He was married to Anne's daughter"
                    ]
                }
            ]
        },
        {
            question: "What was the nationality of George I before he became King of Great Britain?",
            correctAnswers: ["German"],
            mandatoryIncorrectAnswers: [
                "English",
                "Scottish",
                "Welsh",
                "Irish"],
            incorrectAnswers: [
                "French",
                "Spanish",
                "Dutch",
                "Danish",
                "Swedish",
                "Polish",
                "Russian"],
            explanation: "George I was born in what is now Germany, and was the Elector of Hanover before he became King of Great Britain."
        },
        {
            questions: [
                {
                    question: "Which group attempted to place James II's son on the throne after Queen Anne's death?",
                    correctAnswers: [
                        "Scottish Jacobites"
                    ],
                    incorrectAnswers: [
                        "English Republicans",
                        "Welsh Rebels",
                        "Irish Loyalists",
                        "French Monarchists",
                        "Spanish Invaders"
                    ],
                    explanation: "This was known as the Jacobite rising of 1715."
                },
                {
                    question: "Who did the Scottish Jacobites attempt to put on the throne soon after Queen Anne's death?",
                    correctAnswers: [
                        "James II's son"
                    ],
                    incorrectAnswers: [
                        "Charles II's son",
                        "William III's son",
                        "James II's daughter",
                        "Anne's son",
                        "Anne's daughter",
                        "George I's son"
                    ],
                    explanation: "James II's son was known as James Francis Edward Stuart, and was also known as the Old Pretender. To his supporters, he was James VIII of Scotland and James III of England."
                },
                {
                    question: "What was the outcome of the Scottish Jacobites' attempt to put James II's son on the throne soon after Queen Anne's death?",
                    correctAnswers: [
                        "It was quickly defeated"
                    ],
                    incorrectAnswers: [
                        "It was successful",
                        "It led to a long war",
                        "It resulted in a power-sharing agreement",
                        "It caused a change in succession laws",
                        "It led to a civil war",
                        "It was ignored by the government"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Why did King George I need to rely more on his ministers during his reign?",
                    correctAnswers: [
                        "Because he did not speak very good English"
                    ],
                    incorrectAnswers: [
                        "Because he was preoccupied with his passion for astronomy",
                        "Because he was more interested in literature and arts than governance",
                        "Because he was suffering from a long-term illness",
                        "Because he was focusing on the construction of palaces",
                        "Because he was busy with his military campaigns in the Americas",
                        "Because he was deeply involved in religious debates of the time",
                    ]
                },
                {
                    question: "Which monarch's lack of proficiency in English led to an increased reliance on their ministers?",
                    correctAnswers: [
                        "George I"
                    ],
                    incorrectAnswers: englishMonarchs
                        .concat(dualMonarchs.filter(monarch =>
                            monarch !== "George I"))
                        .concat(["George II", "George III"]),
                },
                {
                    question: "What was a consequence of King George I's limited English proficiency?",
                    correctAnswers: [
                        "Increased reliance on his ministers"
                    ],
                    incorrectAnswers: [
                        "German becoming the ruling language in Britain",
                        "Introduction of a new language requirement for future monarchs",
                        "Loss of British colonies",
                        "A regency being declared",
                        "George's abdication",
                    ]
                }
            ]
        },
        {
            question: "What was the title eventually given to the most influential minister in Parliament during George I's reign?",
            correctAnswers: [
                "Prime Minister"
            ],
            incorrectAnswers: [
                "Speaker of the House",
                "Secretary of State",
                "Chancellor of the Exchequer",
                "Home Secretary",
                "Foreign Secretary",
                "Lord Protector"
            ]
        },
        {
            questions: [
                {
                    question: "What is Robert Walpole's significance in British history?",
                    correctAnswers: ["Was the first Prime Minister"],
                    incorrectAnswers: [
                        "Executed King Charles I",
                        "Founded the Bank of England",
                        "Invented the steam engine",
                        "Lost the American colonies",
                        "Led the British forces in the Battle of Waterloo",
                        "Abolished the slave trade in Britain",
                        "Caused the Suez Crisis",
                    ]
                },
                {
                    question: "Who was the first man to be called the Prime Minister?",
                    correctAnswers: [
                        "Robert Walpole"
                    ],
                    incorrectAnswers: [
                        "John Churchill",
                        "Sidney Godolphin",
                        "Robert Harley",
                        "Charles Townshend",
                        "James Stanhope",
                        "William Cavendish",
                        "William Pitt the Elder",
                        "William Pitt the Younger",
                        "Arthur Wellesley",
                        "Robert Peel",
                        "Benjamin Disraeli",
                        "William Gladstone",
                        "Winston Churchill"
                    ]
                },
                {
                    question: "In which year did Sir Robert Walpole become the Prime Minister?",
                    correctAnswers: ["1721"],
                    incorrectAnswers: getDates(1600, 1800, [1721], false)
                },
                {
                    question: "Until what year did Sir Robert Walpole serve as Prime Minister?",
                    correctAnswers: ["1742"],
                    incorrectAnswers: getDates(1600, 1800, [1742], false)
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is the role of a Prime Minister in the UK government?",
                    correctAnswers: [
                        "A politician who leads the government"
                    ],
                    incorrectAnswers: [
                        "A judge who heads the judiciary",
                        "A politician who leads the opposition",
                        "A politician who is the head of state",
                        "A monarch who is the head of state",
                        "A civil servant who heads the civil service",
                        "A military officer who leads the armed forces",
                        "A religious leader who heads the church",
                    ]
                },
                {
                    question: "Who is the political leader of the government in the UK?",
                    correctAnswers: [
                        "Prime Minister"
                    ],
                    incorrectAnswers: [
                        "Monarch",
                        "President",
                        "Governor",
                        "Lord Protector",
                        "Chancellor of the Exchequer",
                        "Speaker of the House of Commons",
                        "Secretary of State",
                        "Lord Chancellor",
                        "Home Secretary"
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "The Prime Minister",
        questions: questions,
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
