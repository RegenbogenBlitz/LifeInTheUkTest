(() => {
    let questions = [
        {
            question: "In which year did Queen Victoria become Queen of the UK?",
            correctAnswers: ["1837"],
            incorrectAnswers: getDates(1700, 2000, [1837], false)
        },
        //{
        //    question: "At what age did Queen Victoria ascend to the throne of the UK?",
        //    correctAnswers: [
        //        "18"
        //    ],
        //    incorrectAnswers: [
        //        "21",
        //        "25",
        //        "16",
        //        "30",
        //        "20",
        //        "17"
        //    ]
        //},
        //{
        //    question: "How long did Queen Victoria reign as Queen of the UK?",
        //    correctAnswers: [
        //        "almost 64 years"
        //    ],
        //    incorrectAnswers: [
        //        "over 70 years",
        //        "less than 50 years",
        //        "exactly 60 years",
        //        "55 years",
        //        "72 years",
        //        "58 years",
        //        "65 years"
        //    ]
        //},
        //{
        //    question: "Until what year did Queen Victoria reign as Queen of the UK?",
        //    correctAnswers: [
        //        "1901"
        //    ],
        //    incorrectAnswers: [
        //        "1910",
        //        "1897",
        //        "1920",
        //        "1876",
        //        "1905",
        //        "1888",
        //        "1899"
        //    ]
        //},
        //{
        //    question: "What is the name given to the era of Queen Victoria's reign?",
        //    correctAnswers: [
        //        "The Victorian age"
        //    ],
        //    incorrectAnswers: [
        //        "The Georgian era",
        //        "The Elizabethan era",
        //        "The Edwardian era",
        //        "The Stuart period",
        //        "The Tudor period",
        //        "The Regency era"
        //    ]
        //},
        //{
        //    question: "Which British queen's reign is known as the Victorian age?",
        //    correctAnswers: [
        //        "Queen Victoria"
        //    ],
        //    incorrectAnswers: [
        //        "Queen Elizabeth I",
        //        "Queen Elizabeth II",
        //        "Queen Anne",
        //        "Queen Mary",
        //        "Queen Jane",
        //        "Queen Matilda"
        //    ]
        //},
        //{
        //    question: "Which age is associated with Queen Victoria's reign?",
        //    correctAnswers: [
        //        "The Victorian age"
        //    ],
        //    incorrectAnswers: [
        //        "The Industrial age",
        //        "The Middle ages",
        //        "The Bronze age",
        //        "The Iron age",
        //        "The Space age",
        //        "The Digital age"
        //    ]
        //},
        //{
        //    question: "During which age, known for Queen Victoria's reign, did Britain increase in power and influence abroad?",
        //    correctAnswers: [
        //        "Victorian age"
        //    ],
        //    incorrectAnswers: [
        //        "Elizabethan age",
        //        "Georgian era",
        //        "Tudor period",
        //        "Stuart era",
        //        "Edwardian era",
        //        "Modern era"
        //    ]
        //},
        //{
        //    question: "During Queen Victoria's reign, how did Britain's international status change?",
        //    correctAnswers: [
        //        "Increased in power and influence"
        //    ],
        //    incorrectAnswers: [
        //        "Decreased in power and influence",
        //        "Remained neutral",
        //        "Became isolated",
        //        "Lost all colonial territories",
        //        "Established the first colonies",
        //        "Became a republic"
        //    ]
        //},
        //{
        //    question: "What best describes Britain's global role during the Victorian age?",
        //    correctAnswers: [
        //        "Increased in power and influence abroad"
        //    ],
        //    incorrectAnswers: [
        //        "Focused solely on domestic affairs",
        //        "Withdrew from international politics",
        //        "Became a lesser power",
        //        "Was colonized by another power",
        //        "Remained a small island nation without influence",
        //        "Lost significant international influence"
        //    ]
        //},
        //{
        //    question: "During which monarch's reign, known as the Victorian age, did Britain increase in power and influence abroad?",
        //    correctAnswers: [
        //        "Queen Victoria"
        //    ],
        //    incorrectAnswers: [
        //        "Queen Elizabeth I",
        //        "King Henry VIII",
        //        "King George III",
        //        "Queen Elizabeth II",
        //        "King Edward VII",
        //        "King James I"
        //    ]
        //},
        //{
        //    question: "In what way did Britain's status change on the international stage during the Victorian age?",
        //    correctAnswers: [
        //        "Increased in power and influence"
        //    ],
        //    incorrectAnswers: [
        //        "Became a secondary power",
        //        "Focused on internal development only",
        //        "Declined as a global power",
        //        "Was occupied by foreign powers",
        //        "Entered a period of neutrality",
        //        "Surrendered its overseas territories"
        //    ]
        //},
        //{
        //    question: "During which queen's reign, known as the Victorian age, did Britain see an increase in its power and influence outside its own borders?",
        //    correctAnswers: [
        //        "Victorian age"
        //    ],
        //    incorrectAnswers: [
        //        "Middle Ages",
        //        "Renaissance",
        //        "Industrial Revolution",
        //        "Age of Discovery",
        //        "Age of Enlightenment",
        //        "Post-World War II era"
        //    ]
        //},
        //{
        //    question: "During whose reign, known as the Victorian age, did the middle classes in the UK become increasingly significant?",
        //    correctAnswers: [
        //        "Queen Victoria"
        //    ],
        //    incorrectAnswers: [
        //        "King Henry VIII",
        //        "Queen Elizabeth I",
        //        "King George III",
        //        "Queen Elizabeth II",
        //        "King Edward VII",
        //        "Queen Anne"
        //    ]
        //},
        //{
        //    question: "During the Victorian age, which social class in the UK became increasingly significant?",
        //    correctAnswers: [
        //        "The middle classes"
        //    ],
        //    incorrectAnswers: [
        //        "The nobility lost all their power",
        //        "Universal suffrage was granted",
        //        "Child labor was completely abolished",
        //        "The feudal system was reintroduced",
        //        "The monarchy was abolished",
        //        "Agriculture became the main industry"
        //    ]
        //},
        //{
        //    question: "Who led moves to improve conditions of life for the poor in the UK during the Victorian age?",
        //    correctAnswers: [
        //        "Reformers"
        //    ],
        //    incorrectAnswers: [
        //        "The monarchy",
        //        "Industrialists",
        //        "The Church",
        //        "Trade union leaders",
        //        "Members of Parliament",
        //        "Foreign diplomats"
        //    ]
        //}
    ];

    let category = {
        name: "The Victorian Age (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
