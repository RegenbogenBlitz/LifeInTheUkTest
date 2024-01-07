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
                        "Militarism",
                        "Anglicanism",
                        "Valuing the rights of the many over the rights of the few",
                        "Lack of private property",
                        "Emancipation of the working class",
                        "Individual self advancement",
                        "Socialism",
                        "Communism",
                        "Fascism",
                        "Anarchism",
                        "Pacifism",
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
                        "Avoid causing offence",
                        "Avoid showing off",
                        "Drink tea",
                        "Support the monarchy",
                        "Support the government",
                        "Support the armed forces",
                        "Support the police",
                        "Support the NHS",
                        "Support the BBC",
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
