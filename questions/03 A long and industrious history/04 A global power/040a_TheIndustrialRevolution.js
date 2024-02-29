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
        {
            question: "What was the primary reason for the need for better transport links during the Industrial Revolution?",
            correctAnswers: [
                "To transport raw materials and manufactured goods"
            ],
            incorrectAnswers: [
                "To transport agricultural products",
                "For passenger travel",
                "To facilitate military movements",
                "For the export of minerals",
                "To enhance communication systems",
                "For leisure travel",
                "To connect educational institutions"
            ]
        },
        //{
        //    question: "During the Industrial Revolution, what were the better transport links primarily used for?",
        //    correctAnswers: [
        //        "Transporting raw materials and manufactured goods"
        //    ],
        //    incorrectAnswers: [
        //        "Transporting troops",
        //        "Transporting letters and parcels",
        //        "Transporting livestock",
        //        "Transporting passengers",
        //        "Transporting artwork",
        //        "Transporting construction materials",
        //        "Transporting food supplies"
        //    ]
        //},
        //{
        //    question: "What was the purpose of building canals during the Industrial Revolution?",
        //    correctAnswers: [
        //        "To link the factories to towns and cities and to the ports"
        //    ],
        //    incorrectAnswers: [
        //        "To provide drinking water to the population",
        //        "To facilitate military transportation",
        //        "For recreational boating activities",
        //        "To prevent flooding in industrial areas",
        //        "To supply water for agricultural irrigation",
        //        "To serve as boundaries between properties"
        //    ]
        //},
        //{
        //    question: "In which areas of England were canals particularly built during the Industrial Revolution?",
        //    correctAnswers: [
        //        "In the middle and north of England"
        //    ],
        //    incorrectAnswers: [
        //        "In the south and east of England",
        //        "In the south and west of England",
        //        "In the east and north of England",
        //        "Only in the city of London",
        //        "Throughout the entire country of England",
        //        "In the coastal regions of England"
        //    ]
        //},
        //{
        //    question: "How were working conditions described during the Industrial Revolution?",
        //    correctAnswers: [
        //        "Very poor"
        //    ],
        //    incorrectAnswers: [
        //        "Excellent",
        //        "Good",
        //        "Fair",
        //        "Satisfactory",
        //        "Safe",
        //        "Regulated",
        //        "Comfortable"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, what types of laws were not in place that would have protected employees from being forced to work long hours in dangerous situations?",
        //    correctAnswers: [
        //        "Laws to protect employees"
        //    ],
        //    incorrectAnswers: [
        //        "Laws to ensure minimum wage",
        //        "Laws for health insurance",
        //        "Laws for paid leave",
        //        "Laws for regulated working hours",
        //        "Laws for child labor restrictions",
        //        "Laws for safe working conditions"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, what were employees often forced to do due to the lack of protective laws?",
        //    correctAnswers: [
        //        "Work long hours in dangerous situations"
        //    ],
        //    incorrectAnswers: [
        //        "Pay for their own safety equipment",
        //        "Work without any breaks",
        //        "Work exclusively at night",
        //        "Work for below minimum wage",
        //        "Work without any days off",
        //        "Work without job security"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, how were children treated in the workplace?",
        //    correctAnswers: [
        //        "In the same way as adults"
        //    ],
        //    incorrectAnswers: [
        //        "Better than adults",
        //        "With special care due to their age",
        //        "Only in safe working conditions",
        //        "They were not allowed to work",
        //        "With reduced working hours",
        //        "They were given educational tasks instead of labor"
        //    ]
        //},
        //{
        //    question: "Who were treated in the same way as adults in the workplace during the Industrial Revolution?",
        //    correctAnswers: [
        //        "Children"
        //    ],
        //    incorrectAnswers: [
        //        "Women",
        //        "Apprentices",
        //        "The elderly",
        //        "Overseas workers",
        //        "Factory owners",
        //        "Unskilled laborers"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, in what way were children treated the same as adults in the workplace?",
        //    correctAnswers: [
        //        "Workplace treatment"
        //    ],
        //    incorrectAnswers: [
        //        "Salary",
        //        "Voting rights",
        //        "Legal responsibilities",
        //        "Educational opportunities",
        //        "Ability to own property",
        //        "Retirement benefits"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, how were children treated in the workplace in comparison to adults?",
        //    correctAnswers: [
        //        "Even more harshly"
        //    ],
        //    incorrectAnswers: [
        //        "More leniently",
        //        "The same as elderly",
        //        "With greater care",
        //        "With more respect",
        //        "Less frequently employed",
        //        "Given easier tasks"
        //    ]
        //},
        //{
        //    question: "What was a significant aspect of British activity overseas during the Industrial Revolution?",
        //    correctAnswers: [
        //        "A time of increased colonisation overseas"
        //    ],
        //    incorrectAnswers: [
        //        "A time of decreased overseas activity",
        //        "A time of industrial decline",
        //        "A time of decreased colonisation",
        //        "A period of isolationism",
        //        "A time when overseas territories gained independence",
        //        "A time of domestic conflict",
        //        "A period of decreased international trade"
        //    ]
        //},
        //{
        //    question: "Who mapped the coast of Australia during the period of increased British colonisation in the late 18th century?",
        //    correctAnswers: [
        //        "Captain James Cook"
        //    ],
        //    incorrectAnswers: [
        //        "Admiral Horatio Nelson",
        //        "Sir Walter Raleigh",
        //        "Captain John Smith",
        //        "Sir Francis Drake",
        //        "Henry Hudson",
        //        "David Livingstone"
        //    ]
        //},
        //{
        //    question: "What was established in Australia following the mapping of its coast by Captain James Cook?",
        //    correctAnswers: [
        //        "A few colonies"
        //    ],
        //    incorrectAnswers: [
        //        "Several trading posts",
        //        "A naval base",
        //        "A penal colony",
        //        "An agricultural settlement",
        //        "A permanent military garrison",
        //        "A royal palace"
        //    ]
        //},
        //{
        //    question: "Which territory did Britain gain control over during the period of increased colonisation that included the establishment of the East India Company's control over parts of India?",
        //    correctAnswers: [
        //        "Canada"
        //    ],
        //    incorrectAnswers: [
        //        "Australia",
        //        "India",
        //        "South Africa",
        //        "North America",
        //        "West Indies",
        //        "Indonesia"
        //    ]
        //},
        //{
        //    question: "What was the original purpose of the East India Company?",
        //    correctAnswers: [
        //        "To trade"
        //    ],
        //    incorrectAnswers: [
        //        "To map uncharted territories",
        //        "To establish colonies",
        //        "To gain control over Canada",
        //        "To import goods",
        //        "To export goods",
        //        "To explore the coast of Australia"
        //    ]
        //},
        //{
        //    question: "Which territory did the East India Company gain control over during the period of British colonisation?",
        //    correctAnswers: [
        //        "Large parts of India"
        //    ],
        //    incorrectAnswers: [
        //        "Canada",
        //        "Australia",
        //        "South Africa",
        //        "The coast of Australia",
        //        "North America",
        //        "The West Indies"
        //    ]
        //},
        //{
        //    question: "During which period did Britain begin to establish colonies in southern Africa as described in the context of the Industrial Revolution?",
        //    correctAnswers: [
        //        "Industrial Revolution"
        //    ],
        //    incorrectAnswers: [
        //        "Victorian Era",
        //        "Middle Ages",
        //        "Tudor Period",
        //        "Roman Britain",
        //        "Modern Era"
        //    ]
        //},
        //{
        //    question: "During which period, marked by significant economic and social changes including an increase in trade and importation of goods, did Britain begin trading all over the world?",
        //    correctAnswers: [
        //        "Industrial Revolution"
        //    ],
        //    incorrectAnswers: [
        //        "Victorian Era",
        //        "Middle Ages",
        //        "Roman Times",
        //        "Elizabethan Era"
        //    ]
        //},
        //{
        //    question: "What did Britain increase during the Industrial Revolution that led to interaction with various parts of the world?",
        //    correctAnswers: [
        //        "Importing more goods"
        //    ],
        //    incorrectAnswers: [
        //        "Exporting more goods",
        //        "Manufacturing textiles",
        //        "Producing sugar and tobacco",
        //        "Mining spices",
        //        "Colonizing new territories",
        //        "Expanding military presence"
        //    ]
        //},
        //{
        //    question: "What did Britain begin to do more of during the Industrial Revolution in terms of global trade?",
        //    correctAnswers: [
        //        "Import more goods"
        //    ],
        //    incorrectAnswers: [
        //        "Export more raw materials",
        //        "Establish more colonies",
        //        "Build more canals",
        //        "Develop more factories",
        //        "Create more trade laws",
        //        "Engage in more conflicts"
        //    ]
        //},
        //{
        //    question: "During the Industrial Revolution, where did Britain import sugar and tobacco from?",
        //    correctAnswers: [
        //        "North America and the West Indies"
        //    ],
        //    incorrectAnswers: [
        //        "South America and the West Indies",
        //        "North America and East Indies",
        //        "Africa and the West Indies",
        //        "Europe and the West Indies",
        //        "India and the West Indies",
        //        "Australia and the West Indies"
        //    ]
        //},
        //{
        //    question: "Which of the following sets of goods were imported to Britain from India during the period described as the Industrial Revolution in the provided section?",
        //    correctAnswers: [
        //        "Textiles, tea and spices"
        //    ],
        //    incorrectAnswers: [
        //        "Coffee, tea and sugar",
        //        "Silk, tea and rubber",
        //        "Textiles, coffee and sugar",
        //        "Cotton, tea and spices",
        //        "Textiles, tea and tobacco",
        //        "Textiles, cocoa and spices"
        //    ]
        //},
        //{
        //    question: "Which area, known today as Indonesia, was a source of textiles, tea, and spices imported by Britain during the Industrial Revolution?",
        //    correctAnswers: [
        //        "The area that is today called Indonesia"
        //    ],
        //    incorrectAnswers: [
        //        "The area that is today called Malaysia",
        //        "The area that is today called Thailand",
        //        "The area that is today called Vietnam",
        //        "The area that is today called Philippines",
        //        "The area that is today called Singapore",
        //        "The area that is today called Myanmar"
        //    ]
        //},
        //{
        //    question: "Which country frequently came into conflict with Britain over overseas trading and settlements during the 18th-century global expansion, as highlighted in the Life in The UK Test study material?",
        //    correctAnswers: [
        //        "France"
        //    ],
        //    incorrectAnswers: [
        //        "Spain",
        //        "Germany",
        //        "Portugal",
        //        "Italy",
        //        "The Netherlands",
        //        "Belgium",
        //        "Russia"
        //    ]
        //},
        //{
        //    question: "What was the primary reason for conflicts between Britain and France during the period of increased overseas colonisation and trade, as described in the provided historical context?",
        //    correctAnswers: [
        //        "Because France was expanding and trading in a similar way in many of the same areas of the world"
        //    ],
        //    incorrectAnswers: [
        //        "Because France was restricting Britain's trade routes",
        //        "Because France had exclusive trading agreements with other countries",
        //        "Because France had imposed high tariffs on British goods",
        //        "Because of religious differences",
        //        "Because France was allied with Britain's enemies",
        //        "Because of territorial disputes in Europe"
        //    ]
        //}
    ];

    let category = {
        name: "The Industrial Revolution",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
