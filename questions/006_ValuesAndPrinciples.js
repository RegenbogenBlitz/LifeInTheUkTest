(() => {
    let questions = [
        {
            questions: [
                {
                    question: "What are the fundamental principles of British life?",
                    correctAnswers: [
                        "Democracy",
                        "The rule of law",
                        "Individual liberty",
                        "Tolerance of those with different faiths and beliefs",
                        "Participation in community life"
                    ],
                    incorrectAnswers: [
                        "Progress",
                        "Religious uniformity",
                        "Valuing the rights of the many over the rights of the few",
                        "Lack of private property",
                        "Loyalty",
                        "Individual self advancement",
                        "Innovation",
                        "Tradition",
                        "Social hierarchy",
                        "Honour",
                        "Meritocracy",
                        "Patriotism",
                        "Nationalism",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What are the responsibilities of those living in the UK?",
                    correctAnswers: [
                        "Respect and obey the law",
                        "Respect the rights of others, including their right to their own opinions",
                        "Treat others with fairness",
                        "Look after yourself and your family",
                        "Look after the area in which you live and the environment"
                    ],
                    incorrectAnswers: [
                        "Military Service",
                        "Church attendance",
                        "Worship God",
                        "Respect your elders",
                        "Report your neighbours for transgressions",
                        "Celebrate national holidays",
                        "Avoid causing offence",
                        "Avoid showing off",
                        "Drink tea",
                        "Pledge allegiance to the flag",
                        "Pledge allegiance to the monarch",
                        "Support the state religion",
                        "Support the government",
                        "Support the armed forces",
                        "Support the police",
                        "Support the NHS",
                        "Support the BBC",
                        "Vote in every election",
                        "Join a political party",
                        "Speak English",
                        "Promote the interests of the UK",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What does life in the UK offer?",
                    correctAnswers: [
                        "freedom of belief and religion",
                        "freedom of speech",
                        "freedom from unfair discrimination",
                        "a right to a fair trial",
                        "a right to join in the election of a government"
                    ],
                    incorrectAnswers: [
                        "free healthcare for all",
                        "free housing for all",
                        "freedom from want",
                        "freedom from disease",
                        "a right to bear arms",
                        "a right to a job",
                        "a right to a pension",
                        "a right to a free university education",
                        "freedom of movement within the EU",
                        "freedom of movement within the Commonwealth",
                        "a right to universal basic income",
                    ]
                }
        ]},{
            questions: [
                {
                    question: "Apart from visa status, residency period and cost; what do you need to apply for permanent residency?",
                    correctAnswers: [
                        "speak and read English",
                        "have a good understanding of life in the UK"
                    ],
                    incorrectAnswers: [
                        "a reference from your home government",
                        "a job of sufficient salary",
                        "a reference from your employer",
                        "recent negative test for certain diseases",
                        "savings over £20,000",
                        "a valid UK driving licence",
                        "a university Batchelors's degree or equivalent"
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "The values and principles of the UK",
        questions: questions
    }
    quizDeck.categories.push(category);
})();
