(() => {
    let questions = [
        {
            questions: [
                {
                    question: "After the Romans left Britain, the country was invaded by tribes from northern Europe. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "After the Romans left Britain, the country was invaded never invaded again. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "After the Romans left Britain, the country was invaded by various tribes. Where did these tribes come from?",
                    correctAnswers: ["Northern Europe"],
                    incorrectAnswers: [
                        "Southern Europe",
                        "Eastern Europe",
                        "Western Europe",
                        "Asia",
                        "Africa"
                    ],
                },
                {
                    question: "After the Romans left Britain, the country was invaded by tribes from northern Europe. What were these tribes called? (Select all that apply)",
                    correctAnswers: ["Jutes", "Angles", "Saxons"],
                    mandatoryIncorrectAnswers: ["Vikings", "Normans"],
                    incorrectAnswers: ["Gauls", "Franks", "Goths", "Huns", "Vandals"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "The languages spoken by the Jutes, Angles and Saxons are the basis of modern-day English. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The languages spoken by the Jutes, Angles and Saxons are NOT the basis of modern-day English. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "Battles were fought against the Jutes, Angles and Saxons. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Battles were NOT fought against the Jutes, Angles and Saxons. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            question: "When were Anglo-Saxon kingdoms established in Britain?",
            correctAnswers: ["about 600 AD"],
            incorrectAnswers: ["about 300 AD", "about 400 AD", "about 500 AD", "about 700 AD", "about 800 AD", "about 900 AD"],
        },
        {
            questions: [
                {
                    question: "The Anglo-Saxon kingdoms were mainly in what is now England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                }
                // TODO more questions
            ]
        },
        //The burial place of one of the kings was at Sutton Hoo in modern Suffolk. 
        // This king was buried with treasure and armour, all placed in a ship which was then covered by a mound of earth. 
        {
            questions: [
                {
                    question: "Parts of the west of Britain, including much of what is now Wales, and Scotland, remained free of Anglo-Saxon rule. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                }
                // TODO more questions
            ]
        },
        {
            questions: [
                {
                    question: "The Anglo-Saxons were NOT Christians when they first came to Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Anglo-Saxons were Christians when they first came to Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
                // TODO more questions
                //The Anglo-Saxons were not Christians when they first came to Britain but, during this period, missionaries came to Britain to preach about Christianity.
            ]
        },
        {
            questions: [
                {
                    question: "Missionaries from Ireland spread the religion in the north of Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                }
                // TODO more questions
            ]
        },
        {
            questions: [
                {
                    question: "Which part of the British Isles did St Patrick come from?",
                    correctAnswers: ["Ireland"],
                    incorrectAnswers: ["England", "Scotland", "Wales"],
                }
                // TODO more questions
                // The most famous of these were St Patrick, who would become the patron saint of Ireland, 
            ]
        },
        {
            questions: [
                {
                    question: "Which part of the British Isles did St Columba come from?",
                    correctAnswers: ["Ireland"],
                    incorrectAnswers: ["England", "Scotland", "Wales"],
                }
                // TODO more questions
                //  and St Columba, who founded a monastery on the island of Iona, off the coast of what is now Scotland.
            ]
        },
        {
            questions: [
                {
                    question: "Where did the St Augustine, first Archbishop of Canterbury, come from?",
                    correctAnswers: ["Rome"],
                    mandatoryIncorrectAnswers: ["Hippo"],
                    incorrectAnswers: [
                        "England",
                        "Scotland",
                        "Wales",
                        "Ireland",
                        "Carthage",
                        "Alexandria",
                        "Jerusalem",
                        "Antioch",
                        "Constantinople"
                    ],
                },
                // TODO more questions
                //   St Augustine led missionaries from Rome, who spread Christianity in the south.
                {
                    question: "St Augustine became the first Archbishop of Canterbury. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],

                },
                {
                    question: "St Augustine was NOT the first Archbishop of Canterbury. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
                // St Augustine became the first Archbishop of Canterbury.
            ]
        }
    ];

    let category = {
        name: "The Anglo-Saxons",
        questions: questions
    }
    quizDeck.categories.push(category);
})();