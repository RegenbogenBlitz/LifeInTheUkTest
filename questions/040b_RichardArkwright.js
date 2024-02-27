(() => {
    let questions = [
        {
            question: "What did Richard Arkwright's originally train as, before he moved into the industry he is famous for?",
            correctAnswers: [
                "a barber"
            ],
            incorrectAnswers: [
                "a textile worker",
                "a wig maker",
                "a dye specialist",
                "a factory manager",
                "a steam engineer"
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
        //{
        //    question: "What did Richard Arkwright improve in the textile industry?",
        //    correctAnswers: [
        //        "the original carding machine"
        //    ],
        //    incorrectAnswers: [
        //        "the steam engine",
        //        "the spinning jenny",
        //        "the power loom",
        //        "the cotton gin",
        //        "the flying shuttle",
        //        "the water frame"
        //    ]
        //},
        //{
        //    question: "What was the nature of Richard Arkwright's improvement in the textile industry?",
        //    correctAnswers: [
        //        "He improved a machine"
        //    ],
        //    incorrectAnswers: [
        //        "He invented a new dye",
        //        "He created a new type of fabric",
        //        "He found a new source of fibers",
        //        "He developed a new spinning technique",
        //        "He introduced a new hairstyle",
        //        "He patented a new type of wig"
        //    ]
        //},
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
        //{
        //    question: "What type of spinning mills did Richard Arkwright develop?",
        //    correctAnswers: [
        //        "Horse-driven spinning mills"
        //    ],
        //    incorrectAnswers: [
        //        "Steam-powered spinning mills",
        //        "Water-powered spinning mills",
        //        "Hand-operated spinning mills",
        //        "Electrically-driven spinning mills",
        //        "Animal-powered spinning mills",
        //        "Wind-powered spinning mills"
        //    ]
        //},
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
        //{
        //    question: "What is Richard Arkwright particularly remembered for in regards to his factories?",
        //    correctAnswers: [
        //        "The efficient and profitable way he ran his factories"
        //    ],
        //    incorrectAnswers: [
        //        "The way he personally manufactured each item",
        //        "The invention of the steam engine",
        //        "The creation of the original carding machine",
        //        "The design of horse-driven spinning mills",
        //        "His role as a barber within his factories",
        //        "His ability to dye hair and make wigs at his factories"
        //    ]
        //}
    ];

    let category = {
        name: "Richard Arkwright (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
