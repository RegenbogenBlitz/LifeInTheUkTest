(() => {
    let questions = [
        {
            question: "What was the state of the British presence in North America by the 1760s?",
            correctAnswers: [
                "there were substantial colonies"
            ],
            incorrectAnswers: [
                "there was no British presence",
                "there were only a few trading posts",
                "there were only a few military outposts",
                "the colonies were still being established",
                "the British had been driven out of North America",
                "the British had only recently arrived",
                "the British had fully integrated with the local population"
            ]
        },
        //{
        //    question: "What was the economic status of the British colonies in North America during the 1760s?",
        //    correctAnswers: [
        //        "Wealthy"
        //    ],
        //    incorrectAnswers: [
        //        "Impoverished",
        //        "Developing",
        //        "Struggling",
        //        "Moderate",
        //        "Dependent on Britain",
        //        "Self-sufficient"
        //    ]
        //},
        //{
        //    question: "To what extent did the British colonies in North America control their own affairs in the 1760s?",
        //    correctAnswers: [
        //        "Largely"
        //    ],
        //    incorrectAnswers: [
        //        "Completely",
        //        "Minimally",
        //        "Not at all",
        //        "Under direct British rule",
        //        "With limited autonomy",
        //        "Only in matters of trade"
        //    ]
        //},
        //{
        //    question: "What was the main reason many colonist families originally went to North America in the 17th and 18th centuries?",
        //    correctAnswers: [
        //        "To have religious freedom"
        //    ],
        //    incorrectAnswers: [
        //        "To escape political persecution",
        //        "For economic opportunities",
        //        "To establish new trade routes",
        //        "To explore new territories",
        //        "As a result of being exiled",
        //        "For educational purposes"
        //    ]
        //},
        //{
        //    question: "To which region did many British colonist families originally go in the 17th century to seek religious freedom?",
        //    correctAnswers: [
        //        "North America"
        //    ],
        //    incorrectAnswers: [
        //        "South America",
        //        "Australia",
        //        "Asia",
        //        "Africa",
        //        "Europe",
        //        "Antarctica"
        //    ]
        //},
        //{
        //    question: "What level of education did many of the British colonist families in North America have in the 1760s?",
        //    correctAnswers: [
        //        "They were well educated"
        //    ],
        //    incorrectAnswers: [
        //        "They were mostly uneducated",
        //        "They received education exclusively from Britain",
        //        "They had limited access to education",
        //        "Education was reserved for the elite",
        //        "They were self-taught without formal education",
        //        "Education was not valued among the colonists"
        //    ]
        //},
        //{
        //    question: "What were the colonists in North America particularly interested in during the 1760s?",
        //    correctAnswers: [
        //        "Ideas of liberty"
        //    ],
        //    incorrectAnswers: [
        //        "Ideas of monarchy",
        //        "Ideas of colonial expansion",
        //        "Ideas of technological advancement",
        //        "Ideas of economic isolation",
        //        "Ideas of absolute power",
        //        "Ideas of artistic expression"
        //    ]
        //},
        //{
        //    question: "What did the British government want to do in the 1760s regarding the American colonies?",
        //    correctAnswers: [
        //        "Tax the colonies"
        //    ],
        //    incorrectAnswers: [
        //        "Grant independence to the colonies",
        //        "Offer representation to the colonies in the British Parliament",
        //        "Establish new colonies in North America",
        //        "Repeal existing taxes on the colonies",
        //        "Impose stricter laws on the colonies",
        //        "Cede control of the colonies to local governments"
        //    ]
        //},
        //{
        //    question: "What was the colonists' response to the British government's attempt to tax the colonies in North America?",
        //    correctAnswers: [
        //        "They said there should be 'no taxation without representation' in the British Parliament"
        //    ],
        //    incorrectAnswers: [
        //        "They requested full independence immediately",
        //        "They accepted the taxes without protest",
        //        "They sought representation in the French Parliament",
        //        "They asked for the taxes to be increased",
        //        "They offered to pay taxes in exchange for military protection",
        //        "They proposed to negotiate the amount of tax to be paid"
        //    ]
        //},
        //{
        //    question: "What action did the British Parliament take in an attempt to compromise with the American colonies as tensions escalated?",
        //    correctAnswers: [
        //        "Repealing some of the taxes"
        //    ],
        //    incorrectAnswers: [
        //        "Increasing the number of taxes",
        //        "Offering representation in Parliament",
        //        "Granting full independence to the colonies",
        //        "Establishing new trade agreements",
        //        "Sending additional military forces",
        //        "Implementing stricter laws",
        //        "Negotiating a peace treaty"
        //    ]
        //},
        //{
        //    question: "What was the effect on the relationships between the British government and the American colonies after Parliament repealed some of the taxes in an attempt to compromise?",
        //    correctAnswers: [
        //        "Relationships continue to worsen"
        //    ],
        //    incorrectAnswers: [
        //        "Relationships significantly improved",
        //        "The colonies agreed to the taxation",
        //        "The conflict immediately ended",
        //        "A new government was formed",
        //        "The colonies were granted full representation",
        //        "Tensions were completely resolved",
        //        "Trade relations became stronger"
        //    ]
        //},
        //{
        //    question: "Between which two groups did fighting break out as described in the historical context of the American War of Independence?",
        //    correctAnswers: [
        //        "Between the colonists and the British forces"
        //    ],
        //    incorrectAnswers: [
        //        "Between the French and the British forces",
        //        "Between the Spanish and the British forces",
        //        "Between the Native Americans and the British forces",
        //        "Within the British forces only",
        //        "Within the colonist forces only",
        //        "Between the colonists and the French forces",
        //        "Between the colonists and the Spanish forces"
        //    ]
        //},
        { // KEY QUESTION
            question: "In which year did the American colonies declare their independence?",
            correctAnswers: ["1776"],
            mandatoryIncorrectAnswers: ["1783"],
            incorrectAnswers: getDates(1500, 1900, [1776, 1783], false)
        },
        {
            question: "How many American colonies declared their independence ahead of the American War of Independence?",
            correctAnswers: [
                "13"
            ],
            incorrectAnswers: [
                "9",
                "10",
                "11",
                "12",
                "14",
                "15",
                "16",
                "17",
            ]
        },
        //{
        //    question: "What did the 13 American colonies state when they declared their independence in 1776?",
        //    correctAnswers: [
        //        "That people had a right to establish their own governments"
        //    ],
        //    incorrectAnswers: [
        //        "That they would remain under British rule",
        //        "That they wanted representation in the British Parliament",
        //        "That they would continue to pay taxes to Britain",
        //        "That they accepted the British taxes",
        //        "That they were starting a war with Britain",
        //        "That they demanded the repeal of all British taxes"
        //    ]
        //},
        //{
        //    question: "Who did the colonists defeat in the American War of Independence?",
        //    correctAnswers: [
        //        "the British Army"
        //    ],
        //    incorrectAnswers: [
        //        "the French Army",
        //        "the Spanish Army",
        //        "the German Army",
        //        "the Russian Army",
        //        "the Italian Army",
        //        "Native American tribes"
        //    ]
        //},
        {
            question: "In what year did Britain recognise the independence of the American colonies?",
            correctAnswers: ["1783"],
            mandatoryIncorrectAnswers: ["1776"],
            incorrectAnswers: getDates(1500, 1900, [1783, 1776], false)
        },
        {
            questions: [
                {
                    question: "What event led to Britain recognizing the independence of the American colonies?",
                    correctAnswers: ["The American War of Independence"],
                    incorrectAnswers: famousEnglishWars.filter(war => war !== "The American War of Independence")
                },
                {
                    question: "What event led to Britain recognizing the independence of the American colonies?",
                    correctAnswers: ["The American War of Independence"],
                    incorrectAnswers: [
                        "The Jamestown Massacre",
                        "The French Revolution",
                        "The Haitian Revolution",
                        "The Louisiana Purchase",
                        "The American Civil War",
                        "The War of 1812"
                    ]
                },
                { // KEY QUESTION
                    question: "What was the outcome of the American War of Independence for the colonies?",
                    correctAnswers: [
                        "Britain recognised their independence"
                    ],
                    incorrectAnswers: [
                        "Britain maintained control of the colonies",
                        "The colonies were divided among European powers",
                        "The colonies entered into a commonwealth with Britain",
                        "The colonies became part of another empire",
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "The American War of Independence",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
