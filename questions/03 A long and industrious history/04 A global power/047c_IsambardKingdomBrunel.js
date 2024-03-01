(() => {
    let questions = [
        { // Key Question
            question: "In what century did British engineer Isambard Kingdom Brunel do his most famous work?",
            correctAnswers: ["19th"],
            mandatoryIncorrectAnswers: ["18th", "20th"],
            incorrectAnswers: ["17th", "21st"]
        },
        {
            question: "What was the birthplace of Isambard Kingdom Brunel?",
            correctAnswers: [
                "Portsmouth, England"
            ],
            incorrectAnswers: [
                "London, England",
                "Bristol, England",
                "Birmingham, England",
                "Manchester, England",
                "Leeds, England",
                "Liverpool, England",
                "Southampton, England",
                "Plymouth, England",
                "Newcastle, England",
                "Edinburgh, Scotland",
                "Glasgow, Scotland",
                "Cardiff, Wales",
                "Swansea, Wales",
                "Belfast, Ireland",
                "Dublin, Ireland",
            ]
        },
        //{
        //    question: "What profession did Isambard Kingdom Brunel have?",
        //    correctAnswers: [
        //        "Engineer"
        //    ],
        //    incorrectAnswers: [
        //        "Architect",
        //        "Doctor",
        //        "Lawyer",
        //        "Historian",
        //        "Scientist",
        //        "Teacher"
        //    ]
        //},
        { // KEY QUESTION
            question: "Which of the following did Isambard Kingdom Brunel build?",
            correctAnswers: [
                "Tunnels",
                "Bridges",
                "Railways",
                "Ships"
            ],
            incorrectAnswers: [
                "Schools",
                "Theatres",
                "Canals",
                "Cathedrals",
                "Castles",
            ]
        },
        //{
        //    question: "Who was responsible for constructing the Great Western Railway, the first major railway built in Britain?",
        //    correctAnswers: [
        //        "Isambard Kingdom Brunel"
        //    ],
        //    incorrectAnswers: [
        //        "George Stephenson",
        //        "James Watt",
        //        "Thomas Telford",
        //        "John McAdam",
        //        "Richard Trevithick",
        //        "Matthew Boulton",
        //        "Charles Babbage"
        //    ]
        //},
        //{
        //    question: "What was the significance of the Great Western Railway in the history of British railways?",
        //    correctAnswers: [
        //        "It was the first major railway built in Britain"
        //    ],
        //    incorrectAnswers: [
        //        "It was the largest railway in Britain",
        //        "It was the longest railway in Britain",
        //        "It was the first railway to use steam locomotives",
        //        "It was the first railway to connect England with Scotland",
        //        "It was the first railway to offer passenger services",
        //        "It was the first railway to be nationalized"
        //    ]
        //},
        //{
        //    question: "What is the Great Western Railway known for?",
        //    correctAnswers: [
        //        "Being the first major railway built in Britain"
        //    ],
        //    incorrectAnswers: [
        //        "Being the first underground railway system",
        //        "Connecting London with Paris",
        //        "Having the fastest trains in the world",
        //        "Being the most scenic railway route",
        //        "Introducing the first electric trains",
        //        "Being the longest railway line in the world"
        //    ]
        //},
        //{
        //    question: "Which individual's work led to the establishment of the Great Western Railway?",
        //    correctAnswers: [
        //        "Isambard Kingdom Brunel"
        //    ],
        //    incorrectAnswers: [
        //        "Henry Bessemer",
        //        "Robert Stephenson",
        //        "George Stephenson",
        //        "James Brindley",
        //        "Thomas Newcomen",
        //        "Michael Faraday",
        //        "John Smeaton"
        //    ]
        //},
        //{
        //    question: "What was Isambard Kingdom Brunel's role in the development of British railways?",
        //    correctAnswers: [
        //        "He constructed the Great Western Railway"
        //    ],
        //    incorrectAnswers: [
        //        "He invented the steam locomotive",
        //        "He designed the first railway signaling system",
        //        "He built the first public railway line",
        //        "He founded the first railway company",
        //        "He engineered the first suspension bridge for trains",
        //        "He developed the first railway timetable"
        //    ]
        //},
        //{
        //    question: "Which railway is recognized as the first major railway in Britain?",
        //    correctAnswers: [
        //        "Great Western Railway"
        //    ],
        //    incorrectAnswers: [
        //        "London and Birmingham Railway",
        //        "Liverpool and Manchester Railway",
        //        "Stockton and Darlington Railway",
        //        "Metropolitan Railway",
        //        "Midland Railway",
        //        "East Coast Main Line",
        //        "West Coast Main Line"
        //    ]
        //},
        //{
        //    question: "Where does the Great Western Railway, constructed by Isambard Kingdom Brunel, start?",
        //    correctAnswers: [
        //        "Paddington Station in London"
        //    ],
        //    incorrectAnswers: [
        //        "Euston Station in London",
        //        "King's Cross Station in London",
        //        "Liverpool Street Station in London",
        //        "St Pancras International in London",
        //        "Waterloo Station in London",
        //        "Birmingham New Street Station"
        //    ]
        //},
        //{
        //    question: "Which areas did the Great Western Railway originally connect to Paddington Station in London, as designed by Isambard Kingdom Brunel?",
        //    correctAnswers: [
        //        "the southwest of England",
        //        "the West Midlands",
        //        "Wales"
        //    ],
        //    incorrectAnswers: [
        //        "the southeast of England",
        //        "Scotland",
        //        "Northern Ireland",
        //        "the northeast of England",
        //        "East Anglia",
        //        "the North West of England"
        //    ]
        //},
        //{
        //    question: "What is the final destination of the Great Western Railway constructed by Isambard Kingdom Brunel?",
        //    correctAnswers: [
        //        "the southwest of England",
        //        "the West Midlands",
        //        "Wales"
        //    ],
        //    incorrectAnswers: [
        //        "Scotland",
        //        "Northern Ireland",
        //        "Northeast of England",
        //        "Southeast of England",
        //        "Greater London",
        //        "Cornwall"
        //    ]
        //},
        //{
        //    question: "The Great Western Railway, built by Isambard Kingdom Brunel, connects London to which regions?",
        //    correctAnswers: [
        //        "the southwest of England",
        //        "the West Midlands",
        //        "Wales"
        //    ],
        //    incorrectAnswers: [
        //        "the southeast of England",
        //        "the North West of England",
        //        "East Anglia",
        //        "Scotland",
        //        "Northern Ireland",
        //        "Yorkshire"
        //    ]
        //},
        //{
        //    question: "Which engineer's bridges, as mentioned in the Life in The UK Test handbook, are still in use today?",
        //    correctAnswers: [
        //        "Isambard Kingdom Brunel"
        //    ],
        //    incorrectAnswers: [
        //        "Sir Christopher Wren",
        //        "Thomas Telford",
        //        "George Stephenson",
        //        "John McAdam",
        //        "James Watt",
        //        "Robert Stephenson",
        //        "John Smeaton"
        //    ]
        //},
        //{
        //    question: "Which construction by Isambard Kingdom Brunel mentioned in the provided text is still in use today?",
        //    correctAnswers: [
        //        "Bridges"
        //    ],
        //    incorrectAnswers: [
        //        "Tunnels",
        //        "Railways",
        //        "Ships",
        //        "Great Western Railway",
        //        "Clifton Suspension Bridge",
        //        "Paddington Station"
        //    ]
        //},
        //{
        //    question: "Are any of Isambard Kingdom Brunel's engineering works still in use today?",
        //    correctAnswers: [
        //        "Yes"
        //    ],
        //    incorrectAnswers: [
        //        "No"
        //    ]
        //},
        //{
        //    question: "Who designed the Clifton Suspension Bridge?",
        //    correctAnswers: [
        //        "Isambard Kingdom Brunel"
        //    ],
        //    incorrectAnswers: [
        //        "Thomas Telford",
        //        "John Rennie",
        //        "Robert Stephenson",
        //        "George Stephenson",
        //        "James Watt",
        //        "Matthew Boulton"
        //    ]
        //},
        //{
        //    question: "What natural feature does the Clifton Suspension Bridge span?",
        //    correctAnswers: [
        //        "Avon Gorge"
        //    ],
        //    incorrectAnswers: [
        //        "River Thames",
        //        "Thames Estuary",
        //        "Severn Estuary",
        //        "Great Glen",
        //        "Hope Valley",
        //        "Wye Valley"
        //    ]
        //}
    ];

    let category = {
        name: "Isambard Kingdom Brunel (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
