(() => {
    let questions = [
        {
            question: "In which country was Alexander Fleming born?",
            correctAnswers: [
                "Scotland"
            ],
            mandatoryIncorrectAnswers: ["England", "Wales", "Ireland"],
            incorrectAnswers: [
                "France",
                "Germany",
                "Russia",
                "Turkey",
                "Spain",
                "Greece",
                "Italy",
                "Australia",
                "New Zealand",
                "Canada",
                "United States",
                "India"
            ]
        },
        {
            question: "What profession did Alexander Fleming have?",
            correctAnswers: ["Doctor"],
            incorrectAnswers: [
                "Engineer",
                "Teacher",
                "Politician",
                "Lawyer",
                "Actor",
                "Musician",
                "Artist",
                "Athlete"
            ]
        },
        {
            question: "What disease was Alexander Fleming studying when he made his most famous discovery?",
            correctAnswers: ["Influenza"],
            incorrectAnswers: [
                "Turberculosis",
                "Malaria",
                "Polio",
                "Smallpox",
                "Measles",
                "Plague",
                "Cholera"
            ]
        },
        {
            questions: [
                {
                    question: "What was the name of the substance that Alexander Fleming discovered?",
                    correctAnswers: ["Penicillin"],
                    incorrectAnswers: [
                        "Aspirin",
                        "Insulin",
                        "Paracetamol",
                        "Morphine",
                        "Amoxicillin",
                        "Sertraline",
                        "Amphetamine",
                        "Propranolol",
                        "Prednisone"
                    ]
                },
                {
                    question: "Who is the discoverer of penicillin?",
                    correctAnswers: ["Alexander Fleming"],
                    mandatoryIncorrectAnswers: [
                        "Howard Florey",
                        "Ernst Boris Chain"
                    ],
                    incorrectAnswers: [
                        "Joseph Lister",
                        "Louis Pasteur",
                        "Robert Koch",
                        "James Watson",
                        "Francis Crick",
                        "Edward Jenner",
                        "John Snow",
                        "James Young Simpson"
                    ],
                    explanation: "Fleming discovered penicillin, but it was Florey and Chain who developed it into a usable drug."
                },
                {
                    question: "In what year was penicillin discovered?",
                    correctAnswers: ["1928"],
                    incorrectAnswers: getDates(1800, 1970, [1928], false),
                },
                {
                    question: "Who developed penicillin into a usable drug? (Select all that apply)",
                    correctAnswers: ["Howard Florey", "Ernst Boris Chain"],
                    mandatoryIncorrectAnswers: ["Alexander Fleming"],
                    incorrectAnswers: [
                        "Joseph Lister",
                        "Louis Pasteur",
                        "Robert Koch",
                        "James Watson",
                        "Francis Crick",
                        "Edward Jenner",
                        "John Snow",
                        "James Young Simpson"
                    ],
                    explanation: "Fleming discovered penicillin, but it was Florey and Chain who developed it into a usable drug."
                }
            ]
        }
    ];

    let category = {
        name: "Alexander Fleming",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century"
    }
    quizDeck.categories.push(category);
})();
