(() => {
    let questions = [
        {
            question: "What is an 'heir'? (Select all that apply)",
            correctAnswers: [
                "A person who will legally receive a person's money or possessions after their death",
                "The person who will be the next king or queen"],
            incorrectAnswers: [
                "The person who will be executed next",
                "The person who will be married next",
                "A person who oversees the distribution of a person's money or possessions after their death",
                "The person who will be the next Prime Minister",
                "A person who signs a legal document",
                "A substance that is inhaled"
            ]
        },
        {
            question: "Who was Henry VIII's first wife?",
            correctAnswers: ["Catherine of Aragon"],
            mandatoryIncorrectAnswers: [
                "Anne Boleyn",
                "Jane Seymour",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "What was Catherine of Aragon's nationality?",
            correctAnswers: ["Spanish"],
            mandatoryIncorrectAnswers: ["English", "German", "French", "Scottish", "Irish", "Welsh"],
            incorrectAnswers: ["French", "Portuguese", "Italian"]
        },
        {
            question: "What was Catherine of Aragon's title before marriage?",
            correctAnswers: ["Princess"],
            incorrectAnswers: ["Queen", "Duchess", "Countess", "Baroness", "Lady", "Marchioness"]
        },
        {
            questions: [
                {
                    question: "What was the name of the child of Catherine of Aragon and Henry VIII that survived?",
                    correctAnswers: ["Mary"],
                    mandatoryIncorrectAnswers: ["Elizabeth", "Edward", "Jane"],
                    incorrectAnswers: ["Anne", "Margaret", "Catherine", "Victoria", "Arthur", "Charles", "Henry", "James"]
                },
                {
                    question: "Who was the mother of Mary I of England?",
                    correctAnswers: ["Catherine of Aragon"],
                    mandatoryIncorrectAnswers: [
                        "Anne Boleyn",
                        "Jane Seymour",
                        "Anne of Cleves",
                        "Catherine Howard",
                        "Catherine Parr",
                        "Elizabeth I of England",
                        "Mary Queen of Scots"],
                    incorrectAnswers: [
                        "Elizabeth of York",
                        "Margaret Beaufort",
                        "Elizabeth Woodville",
                        "Margaret Tudor",
                        "Mary Boleyn",
                        "Eleanor of Aquitaine",
                        "Elizabeth Bowes-Lyon"]
                },
                {
                    question: "How many of Catherine of Aragon and Henry VIII's children survived past infancy?",
                    correctAnswers: ["One"],
                    incorrectAnswers: ["None", "Two", "Three", "Four", "Five", "Six"]
                },
                {
                    question: "What was the gender of the children Catherine of Aragon and Henry VIII had?",
                    correctAnswers: ["Female only"],
                    incorrectAnswers: [
                        "Male only",
                        "They had both a male and a female",
                        "They had no children",
                        "It is not known"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Why did Henry VIII decide to divorce Catherine of Aragon? (Select all that apply)",
                    correctAnswers: ["She was too old to give him another child", "He wanted a son to be his heir and they only had a daughter"],
                    mandatoryIncorrectAnswers: ["She had been his brother's wife"],
                    incorrectAnswers: [
                        "For political reasons",
                        "She was accused of taking lovers",
                        "She wanted the divorce",
                        "She was not of English nobility",
                        "She refused to live in England",
                        "She did not speak English",
                    ],
                    explanation: "Although she had been married to Henry's brother, this was not the reason Henry wanted to divorce her. " +
                        "He merely used this as an excuse to get the divorce he wanted."
                },
                {
                    question: "What was Henry VIII hoping for from his marriage after divorcing Catherine of Aragon?",
                    correctAnswers: ["A son to be his heir"],
                    incorrectAnswers: [
                        "A daughter to be his heir",
                        "Political alliance with Spain",
                        "To strengthen ties with the Church",
                        "Financial gain through dowry",
                        "To maintain peace with France",
                        "To secure his throne against rivals"]
                },
                {
                    question: "How did Henry VIII's marriage with Catherine of Aragon end?",
                    correctAnswers: ["She was divorced by Henry"],
                    mandatoryIncorrectAnswers: [
                        "She was executed",
                        "She died shortly after giving birth",
                        "She survived Henry"],
                    incorrectAnswers: []
                }
            ]
        },
        {
            question: "Who did Henry VIII marry after Catherine of Aragon?",
            correctAnswers: ["Anne Boleyn"],
            mandatoryIncorrectAnswers: [
                "Jane Seymour",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "Who was Henry VIII's second wife?",
            correctAnswers: ["Anne Boleyn"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Jane Seymour",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "What was Anne Boleyn's nationality?",
            correctAnswers: ["English"],
            mandatoryIncorrectAnswers: ["Spanish", "German", "French", "Scottish", "Irish", "Welsh"],
            incorrectAnswers: ["French", "Portuguese", "Italian"]
        },
        {
            questions: [
                {
                    question: "What was the name of the child of Anne Boleyn and Henry VIII that survived?",
                    correctAnswers: ["Elizabeth"],
                    mandatoryIncorrectAnswers: ["Mary", "Edward", "Jane"],
                    incorrectAnswers: ["Anne", "Margaret", "Catherine", "Victoria", "Arthur", "Charles", "Henry", "James"]
                },
                {
                    question: "How many of Anne Boleyn and Henry VIII's children survived past infancy?",
                    correctAnswers: ["One"],
                    incorrectAnswers: ["None", "Two", "Three", "Four", "Five", "Six"]
                },
                {
                    question: "What was the gender of the children Anne Boleyn and Henry VIII had?",
                    correctAnswers: ["Female only"],
                    incorrectAnswers: [
                        "Male only",
                        "They had both a male and a female",
                        "They had no children",
                        "It is not known"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Anne Boleyn was unpopular in England. True or false?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Anne Boleyn was popular in England. True or false?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Which of the following were Anne Boleyn accused of?",
                    correctAnswers: ["Taking lovers"],
                    incorrectAnswers: [
                        "Theft",
                        "Neglecting her duties",
                        "Refusing to marry",
                        "Leading a rebellion",
                        "Spying for France"],
                    explanation: "She was executed on charges of adultery, incest, and high treason. " +
                        "She was accused of taking lovers, including her brother, and plotting against the king. " +
                        "She was also accused of witchcraft, but this was not one of the charges that led to her execution."
                },
                {
                    question: "Where was Anne Boleyn executed?",
                    correctAnswers: ["The Tower of London"],
                    incorrectAnswers: [
                        "Tyburn",
                        "Smithfield",
                        "Newgate Prison",
                        "Windsor Castle",
                        "Hampton Court Palace",
                        "The Palace of Whitehall",
                        "The Palace of Westminster",
                        "Richmond Palace",
                        "Buckingham Palace",
                        "St. James's Palace"]
                },
                {
                    question: "How did Henry VIII's marriage with Anne Boleyn end?",
                    correctAnswers: ["She was executed"],
                    mandatoryIncorrectAnswers: [
                        "She was divorced by Henry",
                        "She died shortly after giving birth",
                        "She survived Henry"],
                    incorrectAnswers: []
                }
            ]
        },
        {
            question: "What does it mean for a person to be executed?",
            correctAnswers: ["To be killed as a punishment"],
            incorrectAnswers: [
                "To be imprisoned as a punishment",
                "To have a sentence carried out on them",
                "To have the property in their will distributed",
                "To ordered to perform a particular task"
            ]
        },
        {
            question: "Who did Henry VIII marry after Anne Boleyn?",
            correctAnswers: ["Jane Seymour"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "Who was Henry VIII's third wife?",
            correctAnswers: ["Jane Seymour"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            questions: [
                {
                    question: "What was the name of the child of Jane Seymour and Henry VIII that survived?",
                    correctAnswers: ["Edward"],
                    mandatoryIncorrectAnswers: ["Mary", "Elizabeth", "Jane"],
                    incorrectAnswers: ["Anne", "Margaret", "Catherine", "Victoria", "Arthur", "Charles", "Henry", "James"]
                },
                {
                    question: "Who was the mother of Edward VI?",
                    correctAnswers: ["Jane Seymour"],
                    mandatoryIncorrectAnswers: [
                        "Catherine of Aragon",
                        "Anne Boleyn",
                        "Anne of Cleves",
                        "Catherine Howard",
                        "Catherine Parr",
                        "Mary I of England",
                        "Elizabeth I of England",
                        "Mary Queen of Scots"],
                    incorrectAnswers: [
                        "Elizabeth of York",
                        "Margaret Beaufort",
                        "Elizabeth Woodville",
                        "Margaret Tudor",
                        "Mary Boleyn",
                        "Eleanor of Aquitaine",
                        "Elizabeth Bowes-Lyon"]
                },
                {
                    question: "How many of Jane Seymour and Henry VIII's children survived past infancy?",
                    correctAnswers: ["One"],
                    incorrectAnswers: ["None", "Two", "Three", "Four", "Five", "Six"]
                },
                {
                    question: "What was the gender of the children Jane Seymour and Henry VIII had?",
                    correctAnswers: ["Male only"],
                    incorrectAnswers: [
                        "Female only",
                        "They had both a male and a female",
                        "They had no children",
                        "It is not known"]
                }
            ]
        },
        {
            question: "How did Henry VIII's marriage with Jane Seymour end?",
            correctAnswers: ["She died shortly after giving birth"],
            mandatoryIncorrectAnswers: [
                "She was divorced by Henry",
                "She was executed",
                "She survived Henry"],
            incorrectAnswers: []
        },
        {
            question: "Who did Henry VIII marry after Jane Seymour?",
            correctAnswers: ["Anne of Cleves"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "Who was Henry VIII's fourth wife?",
            correctAnswers: ["Anne of Cleves"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Jane Seymour",
                "Catherine Howard",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "What was Anne of Cleves' nationality?",
            correctAnswers: ["German"],
            mandatoryIncorrectAnswers: ["English", "Spanish", "French", "Scottish", "Irish", "Welsh"],
            incorrectAnswers: ["French", "Portuguese", "Italian"]
        },
        {
            question: "What was Anne of Cleves' title before marriage?",
            correctAnswers: ["Princess"],
            incorrectAnswers: ["Queen", "Duchess", "Countess", "Baroness", "Lady", "Marchioness"],
            explanation: "This isn't technically true, but it's in the book. " +
                "She was the daughter of John III, Duke of Cleves, and Mary, Duchess of Julich-Berg."
        },
        {
            question: "Why did Henry VIII marry Anne of Cleves?",
            correctAnswers: ["For political reasons"],
            incorrectAnswers: [
                "For love",
                "To secure a male heir",
                "To form an alliance with Spain",
                "To end a war",
                "To gain favor with the Pope"]
        },
        {
            question: "How did Henry VIII's marriage with Anne of Cleves end?",
            correctAnswers: ["She was divorced by Henry"],
            mandatoryIncorrectAnswers: [
                "She was executed",
                "She died shortly after giving birth",
                "She survived Henry"],
            incorrectAnswers: []
        },
        {
            question: "Who did Henry VIII marry after Anne of Cleves?",
            correctAnswers: ["Catherine Howard"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Jane Seymour",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "Who was Henry VIII's fifth wife?",
            correctAnswers: ["Catherine Howard"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Jane Seymour",
                "Anne of Cleves",
                "Catherine Parr"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            question: "What was Catherine Howard's relationship to Anne Boleyn?",
            correctAnswers: ["Cousin"],
            incorrectAnswers: ["Sister", "Daughter", "Mother", "Aunt", "Niece"]
        },
        {
            questions: [
                {
                    question: "Which of the following were Catherine Howard accused of?",
                    correctAnswers: ["Taking lovers"],
                    incorrectAnswers: [
                        "Theft",
                        "Neglecting her duties",
                        "Refusing to marry",
                        "Leading a rebellion",
                        "Spying for France"],
                    explanation: "She was executed on charges of adultery, incest and treason."
                },
                {
                    question: "How did Henry VIII's marriage with Catherine Howard end?",
                    correctAnswers: ["She was executed"],
                    mandatoryIncorrectAnswers: [
                        "She was divorced by Henry",
                        "She died shortly after giving birth",
                        "She survived Henry"],
                    incorrectAnswers: []
                }
            ]
        },
        {
            question: "Who did Henry VIII marry after Catherine Howard?",
            correctAnswers: ["Catherine Parr"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Anne Boleyn",
                "Jane Seymour",
                "Anne of Cleves"],
            incorrectAnswers: [
                "Mary I",
                "Elizabeth I",
                "Mary Queen of Scots",
                "Mary Boleyn",
                "Elizabeth Woodville",
                "Elizabeth of York"]
        },
        {
            questions: [
                {
                    question: "Who was Henry VIII's sixth wife?",
                    correctAnswers: ["Catherine Parr"],
                    mandatoryIncorrectAnswers: [
                        "Catherine of Aragon",
                        "Anne Boleyn",
                        "Jane Seymour",
                        "Anne of Cleves",
                        "Catherine Howard"],
                    incorrectAnswers: [
                        "Mary I",
                        "Elizabeth I",
                        "Mary Queen of Scots",
                        "Mary Boleyn",
                        "Elizabeth Woodville",
                        "Elizabeth of York"]
                },
                {
                    question: "Who was Henry VIII's last wife?",
                    correctAnswers: ["Catherine Parr"],
                    mandatoryIncorrectAnswers: [
                        "Catherine of Aragon",
                        "Anne Boleyn",
                        "Jane Seymour",
                        "Anne of Cleves",
                        "Catherine Howard"],
                    incorrectAnswers: [
                        "Mary I",
                        "Elizabeth I",
                        "Mary Queen of Scots",
                        "Mary Boleyn",
                        "Elizabeth Woodville",
                        "Elizabeth of York"]
                },
                {
                    question: "How many wives did Henry VIII have?",
                    correctAnswers: ["Six"],
                    incorrectAnswers: ["One", "Two", "Three", "Four", "Five", "Seven", "Eight", "Nine", "Ten"]
                }
            ]
        },
        {
            question: "What was Catherine Parr's status before marrying Henry VIII?",
            correctAnswers: ["Widow"],
            incorrectAnswers: ["Maiden", "Divorced", "Married", "Engaged", "Annulled", "Separated", "Unmarried mother"]
        },
        {
            question: "When did Catherine Parr marry Henry VIII?",
            correctAnswers: ["Later in his life"],
            incorrectAnswers: [
                "At the height of his reign",
                "Soon after he became king",
                "Before he became king",
                "During his early reign",
                "Midway through his reign"
            ]
        },
        {
            questions: [
                {
                    question: "How did Henry VIII's marriage with Catherine Parr end?",
                    correctAnswers: ["She survived Henry"],
                    mandatoryIncorrectAnswers: [
                        "She was divorced by Henry",
                        "She died shortly after giving birth",
                        "She was executed"],
                    incorrectAnswers: []
                },
                {
                    question: "What happened to Catherine Parr after Henry VIII's death?",
                    correctAnswers: ["She married again"],
                    incorrectAnswers: [
                        "She never married again",
                        "She became a nun",
                        "She left England",
                        "She lived as a hermit",
                        "She was imprisoned",
                        "She became Queen Regent",
                    ]
                },
                {
                    question: "What was the fate of Catherine Parr after her subsequent marriage following Henry VIII's death?",
                    correctAnswers: ["She died soon after"],
                    incorrectAnswers: [
                        "She gave birth to a son",
                        "She lived a long widowhood",
                        "She remarried a further time",
                        "She became a political advisor",
                        "She moved to France",
                        "She was exiled"
                    ]
                }
            ]
        }

    ];

    let category = {
        name: "The Wives of Henry VIII",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();