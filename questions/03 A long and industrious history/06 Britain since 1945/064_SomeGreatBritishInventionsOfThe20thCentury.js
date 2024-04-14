let britishInventorsAndScientists = [
    "John Logie Baird", // Television
    "Robert Watson-Watt", // Radar
    "Sir Bernard Lovell", // Radio astronomy
    "Alan Turing", // Computer science
    "John Macleod", // Insulin
    "Francis Crick", // DNA
    "James Watson", // DNA
    "Rosalind Franklin", // DNA
    "Sir Frank Whittle", // Jet engine
    "Sir Christopher Cockerell", // Hovercraft
    "James Goodfellow", // ATM
    "Sir Robert Edwards", // IVF
    "Patrick Steptoe", // IVF
    "Sir Ian Wilmut", // Cloning
    "Keith Campbell", // Cloning
    "Sir Peter Mansfield", // MRI
    "Sir Tim Berners-Lee" // World Wide Web
];

let britishInventionsAndDiscoveries = [
    "Television",
    "Radar",
    "Radio astronomy",
    "Computer science",
    "Insulin",
    "The structure of DNA",
    "The jet engine",
    "The hovercraft",
    "The ATM",
    "In vitro fertilisation (IVF)",
    "Cloning a mammal",
    "The MRI scanner",
    "The World Wide Web"
];

(() => {
    let questions = [
        {
            questions: [
                {
                    question: "In which decade was the Turing machine first described?",
                    correctAnswers: ["1930s"],
                    incorrectAnswers: [
                        "1900s",
                        "1910s",
                        "1920s",
                        "1940s",
                        "1950s",
                        "1960s",
                    ]
                },
                { // KEY QUESTION
                    question: "In what century did mathematician Alan Turing do his most famous work?",
                    correctAnswers: ["20th"],
                    mandatoryIncorrectAnswers: ["19th", "21st"],
                    incorrectAnswers: ["17th", "18th"]
                },
            ]
        },
        {
            question: "What was the nationality of mathematician Alan Turing?",
            correctAnswers: ["British"],
            incorrectAnswers: [
                "French",
                "German",
                "Spanish",
                "Swiss",
                "Russian",
                "Chinese",
                "Indian",
                "Japanese",
                "American",
            ]
        },
        {
            questions: [
                {
                    question: "Which mathematician was influential in the development of computer science",
                    correctAnswers: ["Alan Turing"],
                    incorrectAnswers: britishInventorsAndScientists.filter(i => i !== "Alan Turing")
                },
                {
                    question: "What invention or scientific field was the mathematician Alan Turing best known for?",
                    correctAnswers: ["Computer science"],
                    incorrectAnswers: britishInventionsAndDiscoveries.filter(i => i !== "Computer science")
                }
            ]
        },
        {
            question: "When was information first successfully transferred via the web?",
            correctAnswers: ["1990"],
            incorrectAnswers: getDates(1960, 2020, [1990], false)
        },
        { // KEY QUESTION
            question: "In what century did scientist Sir Tim Berners-Lee do his most famous work?",
            correctAnswers: ["20th"],
            mandatoryIncorrectAnswers: ["19th", "21st"],
            incorrectAnswers: ["17th", "18th"]
        },
        {
            question: "What was the nationality of the scientist that first successfully transferred via the web?",
            correctAnswers: ["British"],
            incorrectAnswers: [
                "French",
                "German",
                "Spanish",
                "Swiss",
                "Russian",
                "Chinese",
                "Indian",
                "Japanese",
                "American",
            ]
        },
        {
            questions: [
                {
                    question: "Who invented the World Wide Web?",
                    correctAnswers: ["Sir Tim Berners-Lee"],
                    incorrectAnswers: britishInventorsAndScientists.filter(i => i !== "Sir Tim Berners-Lee")
                },
                {
                    question: "What invention or scientific field was the scientist Sir Tim Berners-Lee best known for?",
                    correctAnswers: ["The World Wide Web"],
                    incorrectAnswers: britishInventionsAndDiscoveries.filter(i => i !== "The World Wide Web")
                }
            ]
        },
        {
            question: "In what year was the first mammal successfully cloned?",
            correctAnswers: ["1996"],
            incorrectAnswers: getDates(1960, 2020, [1996], false)
        },
        {
            question: "In what century did scientists Sir Ian Wilmut and Keith Campbell do their most famous work?",
            correctAnswers: ["20th"],
            mandatoryIncorrectAnswers: ["19th", "21st"],
            incorrectAnswers: ["17th", "18th"]
        },
        {
            question: "What was the nationality of the scientists that first successfully cloned a mammal?",
            correctAnswers: ["British"],
            incorrectAnswers: [
                "French",
                "German",
                "Spanish",
                "Swiss",
                "Russian",
                "Chinese",
                "Indian",
                "Japanese",
                "American",
            ]
        },
        {
            questions: [// KEY QUESTION
                {
                    question: "Who led the team that first cloned a mammal? (Select all that apply)",
                    correctAnswers: ["Sir Ian Wilmut", "Keith Campbell"],
                    incorrectAnswers: britishInventorsAndScientists.filter(i =>
                        i !== "Sir Ian Wilmut" &&
                        i !== "Keith Campbell")
                },
                {
                    question: "What invention or scientific field were the scientists Sir Ian Wilmut and Keith Campbell best known for?",
                    correctAnswers: ["Cloning a mammal"],
                    incorrectAnswers: britishInventionsAndDiscoveries.filter(i => i !== "Cloning a mammal")
                }
            ]
        }

    ];

    let category = {
        name: "Some great British inventions of the 20th century (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "Britain since 1945 (incomplete)"
    }
    quizDeck.categories.push(category);
})();
