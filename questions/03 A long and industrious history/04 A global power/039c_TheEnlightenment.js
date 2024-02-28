(() => {
    let questions = [
        {
            question: "In which century did 'the Enlightenment' primarily occur?",
            correctAnswers: [
                "18th century"
            ],
            incorrectAnswers: [
                "15th century",
                "16th century",
                "17th century",
                "19th century",
                "20th century",
                "21st century"
            ]
        },
        //{
        //    question: "Which specific areas saw the development of new ideas during the 18th century, as described in the provided text from the Life in the UK Test handbook?",
        //    correctAnswers: [
        //        "Politics",
        //        "Philosophy",
        //        "Science"
        //    ],
        //    incorrectAnswers: [
        //        "Technological advancements",
        //        "Agricultural techniques",
        //        "Literary movements",
        //        "Artistic styles",
        //        "Exploration of new lands",
        //        "Military strategies"
        //    ]
        //},
        //{
        //    question: "What historical period, characterized by the development of new ideas about politics, philosophy, and science, is often referred to as 'the Enlightenment'?",
        //    correctAnswers: [
        //        "the 18th century"
        //    ],
        //    incorrectAnswers: [
        //        "the 17th century",
        //        "the 16th century",
        //        "the 19th century",
        //        "the 15th century",
        //        "the 14th century",
        //        "the Middle Ages",
        //        "the Victorian Era"
        //    ]
        //},
        //{
        //    question: "What term is commonly used to describe the era during the 18th century that saw new developments in politics, philosophy, and science?",
        //    correctAnswers: [
        //        "the Enlightenment"
        //    ],
        //    incorrectAnswers: [
        //        "the Renaissance",
        //        "the Age of Discovery",
        //        "the Industrial Revolution",
        //        "the Reformation",
        //        "the Romantic Period",
        //        "the Victorian Era",
        //        "the Age of Reason"
        //    ]
        //},
        //{
        //    question: "What was the nationality of many of the great thinkers during the Scottish Enlightenment?",
        //    correctAnswers: [
        //        "Scottish"
        //    ],
        //    incorrectAnswers: [
        //        "English",
        //        "Welsh",
        //        "Irish",
        //        "French",
        //        "German",
        //        "Italian"
        //    ]
        //},
        //{
        //    question: "Which century is known for having many of the great thinkers of the Enlightenment who were Scottish?",
        //    correctAnswers: [
        //        "the 18th century"
        //    ],
        //    incorrectAnswers: [
        //        "the 17th century",
        //        "the 19th century",
        //        "the 16th century",
        //        "the 15th century",
        //        "the 20th century",
        //        "the 14th century"
        //    ]
        //},
        //{
        //    question: "Which Enlightenment thinker developed ideas about economics that are still referred to today?",
        //    correctAnswers: [
        //        "Adam Smith"
        //    ],
        //    incorrectAnswers: [
        //        "David Hume",
        //        "James Watt",
        //        "John Locke",
        //        "Thomas Hobbes",
        //        "Isaac Newton",
        //        "Voltaire",
        //        "Jean-Jacques Rousseau"
        //    ]
        //},
        //{
        //    question: "What subject did Adam Smith develop ideas in during the Enlightenment period?",
        //    correctAnswers: [
        //        "economics"
        //    ],
        //    incorrectAnswers: [
        //        "philosophy",
        //        "science",
        //        "politics",
        //        "mechanics",
        //        "steam power",
        //        "human nature",
        //        "religion"
        //    ]
        //},
        //{
        //    question: "Which statement accurately reflects the status of Adam Smith's economic ideas according to the provided text?",
        //    correctAnswers: [
        //        "They are still referred to today"
        //    ],
        //    incorrectAnswers: [
        //        "They are considered outdated",
        //        "They are only studied historically",
        //        "They have been disproven",
        //        "They are irrelevant to modern economics",
        //        "They are not recognized in contemporary philosophy",
        //        "They are solely related to Scottish economy",
        //        "They have been replaced by modern theories"
        //    ]
        //},
        //{
        //    question: "Which Scottish Enlightenment thinker's ideas about human nature continue to influence philosophers today?",
        //    correctAnswers: [
        //        "David Hume"
        //    ],
        //    incorrectAnswers: [
        //        "Adam Smith",
        //        "James Watt",
        //        "John Locke",
        //        "Thomas Hobbes",
        //        "Isaac Newton",
        //        "Charles Darwin",
        //        "Albert Einstein"
        //    ]
        //},
        //{
        //    question: "Who was notable for their work on steam power during the 18th century, which contributed to the Industrial Revolution?",
        //    correctAnswers: [
        //        "James Watt"
        //    ],
        //    incorrectAnswers: [
        //        "Isaac Newton",
        //        "Alexander Fleming",
        //        "Michael Faraday",
        //        "Charles Darwin",
        //        "Stephen Hawking",
        //        "John Logie Baird",
        //        "Tim Berners-Lee"
        //    ]
        //},
        //{
        //    question: "What was the impact of James Watt's work on steam power during the 18th century?",
        //    correctAnswers: [
        //        "It helped the progress of the Industrial Revolution"
        //    ],
        //    incorrectAnswers: [
        //        "It initiated the discovery of electricity",
        //        "It led to the invention of the telephone",
        //        "It was crucial for the development of the internet",
        //        "It accelerated space exploration",
        //        "It contributed to the advancement of medical science",
        //        "It was a breakthrough in the study of genetics",
        //        "It started the digital revolution"
        //    ]
        //},
        //{
        //    question: "What type of discoveries did James Watt's work on steam power represent in the 18th century?",
        //    correctAnswers: [
        //        "Scientific discoveries"
        //    ],
        //    incorrectAnswers: [
        //        "Archaeological discoveries",
        //        "Astronomical discoveries",
        //        "Biological discoveries",
        //        "Geographical discoveries",
        //        "Historical discoveries",
        //        "Technological inventions",
        //        "Mathematical theorems"
        //    ]
        //},
        //{
        //    question: "What was one of the most important principles of the Enlightenment?",
        //    correctAnswers: [
        //        "Everyone should have the right to their own political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "The state should dictate political and religious beliefs",
        //        "Only the nobility should have specific political rights",
        //        "Science should be the only basis for political beliefs",
        //        "Religion should dictate state policies",
        //        "Monarchs should determine religious beliefs for their subjects",
        //        "Freedom of speech was discouraged"
        //    ]
        //},
        //{
        //    question: "According to the principles of the Enlightenment mentioned in the given text, who should not dictate people's political and religious beliefs?",
        //    correctAnswers: [
        //        "The state"
        //    ],
        //    incorrectAnswers: [
        //        "The church",
        //        "Philosophers",
        //        "Individuals themselves",
        //        "Foreign governments",
        //        "Scientists",
        //        "Educational institutions"
        //    ]
        //},
        //{
        //    question: "Which statement best reflects the current status of the Enlightenment principle in the UK, that the state should not dictate to people about their political and religious beliefs?",
        //    correctAnswers: [
        //        "It continues to be an important principle in the UK today"
        //    ],
        //    incorrectAnswers: [
        //        "It has been abandoned in the UK today",
        //        "It is only applied during elections",
        //        "It is considered outdated in the UK",
        //        "Only religious beliefs are protected in the UK",
        //        "It is a principle that applies exclusively to the economy",
        //        "The UK has a state religion that dictates beliefs"
        //    ]
        //},
        //{
        //    question: "What rights are highlighted as important principles of the Enlightenment, according to the section provided from the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "Political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "The right to bear arms",
        //        "Freedom of the press",
        //        "The right to healthcare",
        //        "The right to education",
        //        "The right to fair trial",
        //        "Property rights"
        //    ]
        //},
        //{
        //    question: "What should the state not do according to the principle of the Enlightenment that emphasizes individual rights to political and religious beliefs?",
        //    correctAnswers: [
        //        "Dictate to people about their political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "Protect the rights of the citizens",
        //        "Promote scientific discoveries",
        //        "Encourage economic development",
        //        "Provide public education",
        //        "Ensure national security",
        //        "Facilitate trade and commerce"
        //    ]
        //},
        //{
        //    question: "Which Enlightenment principle, mentioned in the context of the 18th century and still regarded as important in the UK today, is about individual rights to political and religious beliefs?",
        //    correctAnswers: [
        //        "The principle that everyone should have the right to their own political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "The principle that the state should have absolute authority over religious beliefs",
        //        "The principle that scientific discoveries should be controlled by the state",
        //        "The principle that economic theories should dictate politics",
        //        "The principle that philosophers should govern the state",
        //        "The principle that political beliefs should be standardized",
        //        "The principle that technological advancements should be restricted"
        //    ]
        //},
        //{
        //    question: "What important principle from the Enlightenment, that is still upheld in the UK today, relates to the rights of individuals?",
        //    correctAnswers: [
        //        "Political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "Economic policies",
        //        "Scientific methods",
        //        "Educational systems",
        //        "Healthcare rights",
        //        "Technological developments",
        //        "Cultural expressions"
        //    ]
        //},
        //{
        //    question: "According to the principles of the Enlightenment mentioned in the Life in The UK handbook, what should the state not impose on its citizens?",
        //    correctAnswers: [
        //        "The state should not dictate to people about their political and religious beliefs"
        //    ],
        //    incorrectAnswers: [
        //        "The state should dictate to people about their political and religious beliefs",
        //        "The state should enforce a single religion",
        //        "The state should control the economy",
        //        "The state should restrict freedom of expression",
        //        "The state should monitor personal communications",
        //        "The state should be the only source of political authority"
        //    ]
        //}
    ];

    let category = {
        name: "The Enlightenment (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
