(() => {
    let questions = [
        {
            question: "Which sector was the largest employer in Britain before the 18th century?",
            correctAnswers: [
                "Agriculture"
            ],
            incorrectAnswers: [
                "Manufacturing",
                "Mining",
                "Shipbuilding",
                "Railway construction",
                "Textile production",
                "Steel production"
            ]
        },
        //{
        //    question: "During which century did agriculture serve as the biggest source of employment in Britain?",
        //    correctAnswers: [
        //        "Before the 18th century"
        //    ],
        //    incorrectAnswers: [
        //        "During the 18th century",
        //        "During the 19th century",
        //        "During the 17th century",
        //        "During the 20th century",
        //        "During the 16th century",
        //        "During the 15th century",
        //        "After the 18th century"
        //    ]
        //},
        //{
        //    question: "What was the main source of employment in Britain before the 18th century?",
        //    correctAnswers: [
        //        "The biggest source of employment"
        //    ],
        //    incorrectAnswers: [
        //        "A minor source of employment",
        //        "Not a source of employment",
        //        "The only source of employment",
        //        "One of many equal sources of employment",
        //        "Declining in importance",
        //        "Rapidly growing in importance",
        //        "Nonexistent"
        //    ]
        //},
        //{
        //    question: "What was the biggest source of employment in Britain before the 18th century?",
        //    correctAnswers: [
        //        "Agriculture"
        //    ],
        //    incorrectAnswers: [
        //        "Industry",
        //        "Textile manufacturing",
        //        "Shipbuilding",
        //        "Steel production"
        //    ]
        //},
        //{
        //    question: "What was the main source of employment in Britain before the 18th century?",
        //    correctAnswers: [
        //        "Agriculture"
        //    ],
        //    incorrectAnswers: [
        //        "Cottage industries",
        //        "Manufacturing",
        //        "Mining",
        //        "Shipbuilding",
        //        "Lace making",
        //        "Steel production"
        //    ]
        //},
        //{
        //    question: "Before the 18th century, what was the main industry providing jobs to people in Britain?",
        //    correctAnswers: [
        //        "Agriculture"
        //    ],
        //    incorrectAnswers: [
        //        "Mining",
        //        "Shipbuilding",
        //        "Cottage industries",
        //        "Textile manufacturing",
        //        "Railways",
        //        "Steel production",
        //        "Service industry"
        //    ]
        //},
        //{
        //    question: "What were 'cottage industries' as mentioned in the context of Britain's employment before the 18th century?",
        //    correctAnswers: [
        //        "Industries where people worked from home to produce goods"
        //    ],
        //    incorrectAnswers: [
        //        "Industries that produced building materials for cottages",
        //        "Large-scale factories in urban areas",
        //        "Industries that focused on agricultural production",
        //        "Corporations with international trade focus",
        //        "Industries that manufactured machinery and tools",
        //        "Industries that produced only luxury items",
        //        "Industries that were government-owned and operated"
        //    ]
        //},
        //{
        //    question: "Which types of goods were produced by cottage industries in Britain before the 18th century?",
        //    correctAnswers: [
        //        "Cloth and lace"
        //    ],
        //    incorrectAnswers: [
        //        "Steel and iron",
        //        "Machinery and equipment",
        //        "Agricultural tools and implements",
        //        "Ships and carriages",
        //        "Chemicals and pharmaceuticals",
        //        "Food products and beverages",
        //        "Electronics and household appliances"
        //    ]
        //},
        //{
        //    question: "Where did cottage industry workers typically produce their goods before the 18th century in Britain?",
        //    correctAnswers: [
        //        "From home"
        //    ],
        //    incorrectAnswers: [
        //        "In urban factories",
        //        "In rural farms",
        //        "At local markets",
        //        "In government facilities",
        //        "In overseas colonies",
        //        "In dedicated industrial zones",
        //        "At trade fairs and exhibitions"
        //    ]
        //},
        //{
        //    question: "During which centuries did the Industrial Revolution occur in Britain?",
        //    correctAnswers: [
        //        "18th and 19th centuries"
        //    ],
        //    incorrectAnswers: [
        //        "16th and 17th centuries",
        //        "17th and 18th centuries",
        //        "19th and 20th centuries",
        //        "20th and 21st centuries",
        //        "15th and 16th centuries",
        //        "14th and 15th centuries"
        //    ]
        //},
        //{
        //    question: "What was the Industrial Revolution in Britain characterized by?",
        //    correctAnswers: [
        //        "The rapid development of industry"
        //    ],
        //    incorrectAnswers: [
        //        "The decline of industry",
        //        "The stagnation of industry",
        //        "The slow development of agriculture",
        //        "The rapid development of agriculture",
        //        "The discovery of new continents",
        //        "The decline of the British Empire"
        //    ]
        //},
        //{
        //    question: "The Industrial Revolution marked what kind of development of industry in Britain?",
        //    correctAnswers: [
        //        "Rapid"
        //    ],
        //    incorrectAnswers: [
        //        "Slow",
        //        "Minimal",
        //        "Gradual",
        //        "Stagnant",
        //        "Nonexistent",
        //        "Declining"
        //    ]
        //},
        //{
        //    question: "Which country was the first to industrialise on a large scale?",
        //    correctAnswers: [
        //        "Britain"
        //    ],
        //    incorrectAnswers: [
        //        "China",
        //        "India",
        //        "France",
        //        "Germany",
        //        "Italy",
        //        "Spain",
        //        "United States"
        //    ]
        //},
        //{
        //    question: "What scale of industrialization did Britain achieve during the Industrial Revolution according to the provided sentence?",
        //    correctAnswers: [
        //        "on a large scale"
        //    ],
        //    incorrectAnswers: [
        //        "on a moderate scale",
        //        "on a small scale",
        //        "on a global scale",
        //        "on an unprecedented scale",
        //        "minimally",
        //        "partially"
        //    ]
        //},
        //{
        //    question: "During which revolution did Britain become the first country to industrialise on a large scale?",
        //    correctAnswers: [
        //        "The Industrial Revolution"
        //    ],
        //    incorrectAnswers: [
        //        "The Agricultural Revolution",
        //        "The Technological Revolution",
        //        "The French Revolution",
        //        "The Glorious Revolution",
        //        "The American Revolution",
        //        "The Digital Revolution"
        //    ]
        //},
        //{
        //    question: "What was one of the key factors that enabled the Industrial Revolution in Britain?",
        //    correctAnswers: [
        //        "The development of machinery"
        //    ],
        //    incorrectAnswers: [
        //        "The invention of the internet",
        //        "The discovery of electricity",
        //        "The creation of the printing press",
        //        "The expansion of the postal service",
        //        "The introduction of the telegraph",
        //        "The use of wind power"
        //    ]
        //},
        //{
        //    question: "Alongside the development of machinery, what else contributed to the Industrial Revolution in Britain?",
        //    correctAnswers: [
        //        "The use of steam power"
        //    ],
        //    incorrectAnswers: [
        //        "The use of solar power",
        //        "The use of manual labor",
        //        "The discovery of petroleum",
        //        "The invention of the telephone",
        //        "The use of water mills",
        //        "The introduction of digital technology"
        //    ]
        //},
        //{
        //    question: "What transformation occurred in agriculture and goods manufacturing during the Industrial Revolution?",
        //    correctAnswers: [
        //        "They became mechanised"
        //    ],
        //    incorrectAnswers: [
        //        "They became less efficient",
        //        "They were outsourced overseas",
        //        "They became entirely manual",
        //        "They decreased in production",
        //        "They relied solely on animal power",
        //        "They were dominated by cottage industries"
        //    ]
        //},
        //{
        //    question: "What was the impact of mechanization on the efficiency and production levels in agriculture and manufacturing during the Industrial Revolution?",
        //    correctAnswers: [
        //        "It made things more efficient and increased production"
        //    ],
        //    incorrectAnswers: [
        //        "It decreased efficiency and reduced production",
        //        "It had no significant impact on efficiency or production",
        //        "It only increased production in the agricultural sector",
        //        "It only made the manufacturing of goods more efficient",
        //        "It led to a decrease in the demand for manufactured goods",
        //        "It caused many factories to close down due to inefficiency"
        //    ]
        //},
        //{
        //    question: "What were needed to power the new factories during the Industrial Revolution?",
        //    correctAnswers: [
        //        "Raw materials"
        //    ],
        //    incorrectAnswers: [
        //        "Advanced technology",
        //        "Manual labor",
        //        "Wind power",
        //        "Hydropower",
        //        "Agricultural products",
        //        "Artisan goods"
        //    ]
        //},
        //{
        //    question: "What industries did many people start working in after moving from the countryside during the Industrial Revolution?",
        //    correctAnswers: [
        //        "mining and manufacturing industries"
        //    ],
        //    incorrectAnswers: [
        //        "agricultural and fishing industries",
        //        "textile and pottery industries",
        //        "construction and transportation industries",
        //        "education and healthcare industries",
        //        "technology and finance industries",
        //        "tourism and hospitality industries",
        //        "arts and entertainment industries"
        //    ]
        //},
        //{
        //    question: "From where did many people move to start working in the mining and manufacturing industries during the Industrial Revolution?",
        //    correctAnswers: [
        //        "the countryside"
        //    ],
        //    incorrectAnswers: [
        //        "overseas territories",
        //        "urban areas",
        //        "coastal towns",
        //        "neighboring countries",
        //        "colonial settlements",
        //        "industrial cities",
        //        "suburban districts"
        //    ]
        //},
        //{
        //    question: "What process, developed for the mass production of steel, led to the development of the shipbuilding industry and the railways in Britain?",
        //    correctAnswers: [
        //        "The Bessemer process"
        //    ],
        //    incorrectAnswers: [
        //        "The Spinning Jenny process",
        //        "The Watt steam engine",
        //        "The Cotton Gin process",
        //        "The Flying shuttle process",
        //        "The Seed drill process",
        //        "The Mule spinning process"
        //    ]
        //},
        //{
        //    question: "What became the main source of employment in Britain during the Industrial Revolution?",
        //    correctAnswers: [
        //        "Manufacturing jobs"
        //    ],
        //    incorrectAnswers: [
        //        "Agricultural jobs",
        //        "Cottage industries",
        //        "Mining industries",
        //        "Shipbuilding industries",
        //        "Lace production",
        //        "Cloth production"
        //    ]
        //}
    ];

    let category = {
        name: "The Industrial Revolution - Part 1 (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
