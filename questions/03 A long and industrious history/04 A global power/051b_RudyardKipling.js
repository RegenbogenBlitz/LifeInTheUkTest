(() => {
    let questions = [
        {
            question: "In which country was Rudyard Kipling born?",
            correctAnswers: [
                "India"
            ],
            mandatoryIncorrectAnswers: ["England", "Scotland", "Wales", "Ireland"],
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
                "United States"
            ]
        },
        //{
        //    question: "Besides India, in which two other countries did Rudyard Kipling live?",
        //    correctAnswers: [
        //        "The UK",
        //        "The USA"
        //    ],
        //    incorrectAnswers: [
        //        "Australia",
        //        "Canada",
        //        "South Africa",
        //        "New Zealand",
        //        "France",
        //        "Germany",
        //        "Ireland"
        //    ]
        //},
        //{
        //    question: "Which of the following countries did Rudyard Kipling not live in?",
        //    correctAnswers: [
        //        "Australia",
        //        "Canada",
        //        "South Africa",
        //        "New Zealand",
        //        "France",
        //        "Germany",
        //        "Ireland"
        //    ],
        //    incorrectAnswers: [
        //        "The UK",
        //        "The USA",
        //        "India"
        //    ]
        //},
        //{
        //    question: "Which of the following countries did Rudyard Kipling not live in?",
        //    correctAnswers: [
        //        "Pakistan"
        //    ],
        //    incorrectAnswers: [
        //        "India",
        //        "The UK",
        //        "The USA",
        //        "Australia",
        //        "Canada",
        //        "South Africa",
        //        "New Zealand"
        //    ]
        //},
        //{
        //    question: "Which of the following countries was NOT a place of residence for Rudyard Kipling?",
        //    correctAnswers: [
        //        "New Zealand"
        //    ],
        //    incorrectAnswers: [
        //        "India",
        //        "The UK",
        //        "The USA",
        //        "Australia",
        //        "Canada",
        //        "South Africa",
        //        "Pakistan"
        //    ]
        //},
        //{
        //    question: "In which two countries are many of Rudyard Kipling's books and poems set?",
        //    correctAnswers: [
        //        "India and the UK"
        //    ],
        //    incorrectAnswers: [
        //        "The UK and the USA",
        //        "India and Africa",
        //        "Australia and New Zealand",
        //        "Europe and Asia",
        //        "Africa and the USA",
        //        "Canada and the UK",
        //        "South America and India"
        //    ]
        //},
        //{
        //    question: "What genres did Rudyard Kipling write in?",
        //    correctAnswers: [
        //        "Books and poems"
        //    ],
        //    incorrectAnswers: [
        //        "Novels and short stories",
        //        "Plays and screenplays",
        //        "Autobiographies and biographies",
        //        "Essays and articles",
        //        "Travel guides and history books",
        //        "Science fiction and fantasy novels",
        //        "Poems and sonnets"
        //    ]
        //},
        //{
        //    question: "What did the poems and novels of Rudyard Kipling reflect about the British Empire?",
        //    correctAnswers: [
        //        "A force for good"
        //    ],
        //    incorrectAnswers: [
        //        "A force for oppression",
        //        "A source of conflict",
        //        "A cultural movement",
        //        "A political ideology",
        //        "An economic system",
        //        "A technological innovation"
        //    ]
        //},
        //{
        //    question: "In which year was Rudyard Kipling awarded the Nobel Prize in Literature?",
        //    correctAnswers: [
        //        "1907"
        //    ],
        //    incorrectAnswers: [
        //        "1897",
        //        "1917",
        //        "1927",
        //        "1905",
        //        "1909",
        //        "1910",
        //        "1900"
        //    ]
        //},
        //{
        //    question: "What was Rudyard Kipling awarded in 1907?",
        //    correctAnswers: [
        //        "The Nobel Prize in Literature"
        //    ],
        //    incorrectAnswers: [
        //        "The Nobel Peace Prize",
        //        "The Pulitzer Prize",
        //        "The Booker Prize",
        //        "The Nobel Prize in Physics",
        //        "The Nobel Prize in Chemistry",
        //        "The Nobel Prize in Medicine"
        //    ]
        //},
        //{
        //    question: "Which of the following books was written by Rudyard Kipling and continues to be popular today?",
        //    correctAnswers: [
        //        "The Jungle Book",
        //        "Just So Stories"
        //    ],
        //    incorrectAnswers: [
        //        "Great Expectations",
        //        "The Canterbury Tales",
        //        "A Tale of Two Cities",
        //        "Pride and Prejudice",
        //        "1984",
        //        "To Kill a Mockingbird",
        //        "The Great Gatsby"
        //    ]
        //},
        //{
        //    question: "Which of Rudyard Kipling's works remain popular today according to the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "books"
        //    ],
        //    incorrectAnswers: [
        //        "poems",
        //        "plays",
        //        "essays",
        //        "speeches",
        //        "sonnets",
        //        "novellas"
        //    ]
        //},
        //{
        //    question: "Which of Rudyard Kipling's works has often been voted among the UK's favourite poems?",
        //    correctAnswers: [
        //        "'If'"
        //    ],
        //    incorrectAnswers: [
        //        "The Jungle Book",
        //        "Just So Stories",
        //        "Gunga Din",
        //        "Kim",
        //        "The Man Who Would Be King",
        //        "My Boy Jack"
        //    ]
        //},
        //{
        //    question: "What type of literary work is Rudyard Kipling's 'If'?",
        //    correctAnswers: [
        //        "Poem"
        //    ],
        //    incorrectAnswers: [
        //        "Novel",
        //        "Short story",
        //        "Play",
        //        "Essay",
        //        "Biography",
        //        "Autobiography"
        //    ]
        //},
        //{
        //    question: "In what way has Rudyard Kipling's poem 'If' been recognized by the public in the UK?",
        //    correctAnswers: [
        //        "It has often been voted among the UK's favourite poems"
        //    ],
        //    incorrectAnswers: [
        //        "It has won the Nobel Prize in Literature",
        //        "It was adapted into a successful stage play",
        //        "It is included in the national curriculum",
        //        "It has been banned at various times",
        //        "It was written while Kipling was Poet Laureate",
        //        "It is the longest poem in English literature"
        //    ]
        //},
        //{
        //    question: "Which poem by Rudyard Kipling begins with the words 'If you can keep your head when all about you Are losing theirs and blaming it on you; [...] And yet don't look too good, nor talk too wise'?",
        //    correctAnswers: [
        //        "If"
        //    ],
        //    incorrectAnswers: [
        //        "The White Man's Burden",
        //        "Gunga Din",
        //        "The Ballad of East and West",
        //        "Mandalay",
        //        "Kim",
        //        "The Man Who Would Be King",
        //        "Rikki-Tikki-Tavi"
        //    ]
        //},
        //{
        //    question: "Who is the author of the poem 'If' that is mentioned in the Life in the UK Test handbook?",
        //    correctAnswers: [
        //        "Rudyard Kipling"
        //    ],
        //    incorrectAnswers: [
        //        "Charles Dickens",
        //        "William Shakespeare",
        //        "Jane Austen",
        //        "George Orwell",
        //        "J.K. Rowling",
        //        "Virginia Woolf",
        //        "T.S. Eliot"
        //    ]
        //}
    ];

    let category = {
        name: "Rudyard Kipling (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
