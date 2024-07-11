(() => {
    let questions = [
        {
            question: "What did Richard Arkwright's originally train as, before he moved into the industry he is famous for?",
            correctAnswers: [
                "a barber"
            ],
            incorrectAnswers: [
                "a textile worker",
                "a dye specialist",
                "a factory manager",
                "a steam engineer",
                "a shipbuilder",
            ]
        },
        //{
        //    question: "What skills did Richard Arkwright possess related to personal grooming before he began his career in the textile industry?",
        //    correctAnswers: [
        //        "Dye hair and make wigs"
        //    ],
        //    incorrectAnswers: [
        //        "Invent the spinning jenny",
        //        "Develop the steam engine",
        //        "Improve the power loom",
        //        "Found the first textile factory",
        //        "Patent the water frame",
        //        "Create the first carding machine"
        //    ]
        //},
        //{
        //    question: "What industry did Richard Arkwright move into when wigs became less popular?",
        //    correctAnswers: [
        //        "textiles"
        //    ],
        //    incorrectAnswers: [
        //        "agriculture",
        //        "shipbuilding",
        //        "ironworks",
        //        "pharmaceuticals",
        //        "automotive manufacturing",
        //        "furniture making"
        //    ]
        //},
        //{
        //    question: "What event led Richard Arkwright to start working in textiles?",
        //    correctAnswers: [
        //        "Wigs became less popular"
        //    ],
        //    incorrectAnswers: [
        //        "He invented the spinning jenny",
        //        "Due to the industrial revolution",
        //        "Following a government initiative",
        //        "After inventing the steam engine",
        //        "As a result of new trade laws",
        //        "Owing to a family tradition"
        //    ]
        //},
        {
            question: "What did Richard Arkwright improve in the textile industry?",
            correctAnswers: [
                "the carding machine"
            ],
            incorrectAnswers: [
                "the steam engine",
                "the spinning jenny",
                "the power loom",
                "the cotton gin",
                "the flying shuttle"
            ]
        },
        //{
        //    question: "What is the process of preparing fibres for spinning into yarn and fabric known as?",
        //    correctAnswers: [
        //        "Carding"
        //    ],
        //    incorrectAnswers: [
        //        "Weaving",
        //        "Spinning",
        //        "Threshing",
        //        "Combing",
        //        "Fermenting",
        //        "Looming",
        //        "Dyeing"
        //    ]
        //},
        {
            question: "What initially powered the spinning mills that Richard Arkwright developed?",
            correctAnswers: [
                "Horses"
            ],
            incorrectAnswers: [
                "Steam",
                "Water",
                "Manual labour",
                "Electricity",
                "Wind"
            ]
        },
        //{
        //    question: "How many machines did the horse-driven spinning mills developed by Richard Arkwright use?",
        //    correctAnswers: [
        //        "One machine"
        //    ],
        //    incorrectAnswers: [
        //        "Multiple machines",
        //        "Two machines",
        //        "Three machines",
        //        "Four machines",
        //        "A series of machines",
        //        "No machines"
        //    ]
        //},
        //{
        //    question: "What was the result of Richard Arkwright's development of horse-driven spinning mills that used only one machine in terms of production efficiency?",
        //    correctAnswers: [
        //        "It increased the efficiency of production."
        //    ],
        //    incorrectAnswers: [
        //        "It decreased the efficiency of production.",
        //        "It had no impact on the efficiency of production.",
        //        "It reduced the cost of raw materials.",
        //        "It led to a decrease in the demand for textiles.",
        //        "It caused a significant increase in employment.",
        //        "It led to the decline of the textile industry.",
        //        "It resulted in the development of the steam engine."
        //    ]
        //},
        //{
        //    question: "Who developed horse-driven spinning mills that used only one machine, which increased the efficiency of production during the Industrial Revolution?",
        //    correctAnswers: [
        //        "Richard Arkwright"
        //    ],
        //    incorrectAnswers: [
        //        "James Watt",
        //        "George Stephenson",
        //        "Isambard Kingdom Brunel",
        //        "Sir Titus Salt",
        //        "Thomas Newcomen",
        //        "John Kay",
        //        "Samuel Crompton"
        //    ]
        //},
        //{
        //    question: "What was the primary improvement in textile manufacturing as a result of Richard Arkwright's development of horse-driven spinning mills that utilized a single machine system?",
        //    correctAnswers: [
        //        "Efficiency of production"
        //    ],
        //    incorrectAnswers: [
        //        "Diversity of textile designs",
        //        "Quality of hair dye products",
        //        "Number of wigs produced",
        //        "Speed of international trade",
        //        "Environmental sustainability",
        //        "Cost of textile products",
        //        "Durability of textiles"
        //    ]
        //},
        //{
        //    question: "The development of horse-driven spinning mills that used only one machine by Richard Arkwright primarily improved what in the textile industry?",
        //    correctAnswers: [
        //        "The efficiency of production"
        //    ],
        //    incorrectAnswers: [
        //        "The safety of working conditions",
        //        "The variety of textiles available",
        //        "The geographic reach of textile trade",
        //        "The speed of carding process",
        //        "The reliance on human labor",
        //        "The number of factories",
        //        "The profitability of raw materials"
        //    ]
        //},
        //{
        //    question: "What did Richard Arkwright use later to power machinery?",
        //    correctAnswers: [
        //        "the steam engine"
        //    ],
        //    incorrectAnswers: [
        //        "the water wheel",
        //        "the windmill",
        //        "animal power",
        //        "manual labor",
        //        "electricity",
        //        "the spinning jenny",
        //        "the flying shuttle"
        //    ]
        //},
        //{
        //    question: "In the context of Richard Arkwright's work, what technological advancement was used to power machinery?",
        //    correctAnswers: [
        //        "the steam engine"
        //    ],
        //    incorrectAnswers: [
        //        "the internal combustion engine",
        //        "the electric motor",
        //        "hydraulic power",
        //        "solar power",
        //        "geothermal power",
        //        "the cotton gin",
        //        "the power loom"
        //    ]
        //},
        {
            question: "Which of the following is Richard Arkwright particularly remembered for?",
            correctAnswers: [
                "The efficient and profitable way he ran his factories"
            ],
            incorrectAnswers: [
                "How he personally manufactured each item he made",
                "The invention of the steam engine",
                "The developement of the spinning jenny",
                "The invention of the power loom",
                "The invention of the cotton gin",
                "The invention of the flying shuttle",
            ]
        }
    ];

    let category = {
        name: "Richard Arkwright",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
