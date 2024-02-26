(() => {
    let questions = [
        {
            question: "What town was William Shakespeare born in?",
            correctAnswers: ["Stratford upon Avon"],
            incorrectAnswers: ["London", "Birmingham", "Oxford", "Cambridge", "Canterbury", "Liverpool", "Manchester"]
        },
        {
            question: "In what country was William Shakespeare born in?",
            correctAnswers: ["England"],
            incorrectAnswers: ["Scotland", "Ireland", "Wales", "France", "Spain", "Italy", "Germany"]
        },
        {
            question: "What professions did Shakespeare have? (Select all that apply)",
            correctAnswers: ["Playwright", "Actor"],
            incorrectAnswers: ["Painter", "Musician", "Architect", "Dancer", "Sculptor", "Lawyer"]
        },
        {
            question: "What types of literary works did Shakespeare write? (Select all that apply)",
            correctAnswers: ["Poems", "Plays"],
            incorrectAnswers: ["Novels", "Short stories", "Essays", "Diaries", "Operas", "Travelogues", "Memoirs"]
        },
        {
            question: "Which of the following plays are by Shakespeare? (Select all that apply)",
            correctAnswers: ["A Midsummer Night's Dream", "Hamlet", "Macbeth", "Romeo and Juliet", "Henry V", "As You Like It"],
            incorrectAnswers: ["Doctor Faustus", "The Alchemist", "The Duchess of Malfi", "The White Devil", "The Revenger's Tragedy", "The Changeling", "The Spanish"]
        },
        {
            questions: [
                {
                    question: "What type of events did Shakespeare dramatise in his works? (Select all that apply)",
                    correctAnswers: ["Significant events from the past", "Events involving kings and queens", "Events involving ordinary English men and women"],
                    incorrectAnswers: [
                        "Speculative events from the future",
                        "Significant events from the bible",
                        "Events involving time travel",
                        "Events involving angels and demons"
                    ]
                },
                {
                    question: "What was significant about the characters portrayed by Shakespeare in his plays?",
                    correctAnswers: ["He was one of the first to portray ordinary English men and women"],
                    incorrectAnswers: [
                        "He focused solely on kings and queens",
                        "He only portrayed mythical characters",
                        "He avoided depicting English characters",
                        "He primarily portrayed foreign characters",
                        "He exclusively wrote about historical figures",
                        "He never included women in his plays"
                    ],
                    explanation: "There were many female characters in Shakespeare's plays, even though they were played by men."
                }
            ]
        },
        {
            question: "What type of influence did Shakespeare have on the English language?",
            correctAnswers: ["A great influence"],
            incorrectAnswers: [
                "No influence",
                "A minor influence",
                "A negative influence",
                "A temporary influence",
                "An influence only on poetry",
                "An influence only on theater"]
        },
        {
            question: "What did Shakespeare invent that is still common in the English language today?",
            correctAnswers: ["Many words"],
            incorrectAnswers: [
                "A new alphabet",
                "Grammatical rules",
                "A dictionary",
                "New punctuation marks",
                "Several languages",
                "A style of handwriting"
            ]
        },
        {
            question: "The line 'Once more unto the breach' is from which of Shakespeare's works?",
            correctAnswers: ["Henry V"],
            mandatoryIncorrectAnswers: ["Hamlet", "Romeo and Juliet", "As You Like It", "Sonnet 18 - Shall I Compare Thee To A Summer's Day"],
            incorrectAnswers: ["Macbeth", "A Midsummer Night's Dream", "Othello", "The Tempest"]
        },
        {
            question: "The line 'To be or not to be' is from which of Shakespeare's works?",
            correctAnswers: ["Hamlet"],
            mandatoryIncorrectAnswers: ["Henry V", "Romeo and Juliet", "As You Like It", "Sonnet 18 - Shall I Compare Thee To A Summer's Day"],
            incorrectAnswers: ["Macbeth", "A Midsummer Night's Dream", "Othello", "The Tempest"]
        },
        {
            question: "The line 'A rose by any other name' is from which of Shakespeare's works?",
            correctAnswers: ["Romeo and Juliet"],
            mandatoryIncorrectAnswers: ["Henry V", "Hamlet", "As You Like It", "Sonnet 18 - Shall I Compare Thee To A Summer's Day"],
            incorrectAnswers: ["Macbeth", "A Midsummer Night's Dream", "Othello", "The Tempest"]
        },
        {
            question: "The line 'All the world's a stage' is from which of Shakespeare's works?",
            correctAnswers: ["As You Like It"],
            mandatoryIncorrectAnswers: ["Henry V", "Hamlet", "Romeo and Juliet", "Sonnet 18 - Shall I Compare Thee To A Summer's Day"],
            incorrectAnswers: ["Macbeth", "A Midsummer Night's Dream", "Othello", "The Tempest"]
        },
        {
            question: "The line 'The darling buds of May' is from which of Shakespeare's works?",
            correctAnswers: ["Sonnet 18 - Shall I Compare Thee To A Summer's Day"],
            mandatoryIncorrectAnswers: ["Henry V", "Hamlet", "Romeo and Juliet", "As You Like It"],
            incorrectAnswers: [
                "Macbeth", "A Midsummer Night's Dream", "Othello", "The Tempest",
                "Sonnet 130 - My Mistress' Eyes Are Nothing Like The Sun",
                "Sonnet 116 - Let Me Not To The Marriage Of True Minds",
                "Sonnet 73 - That Time Of Year Thou Mayst In Me Behold",
                "Sonnet 29 - When In Disgrace With Fortune And"]
        },
        {
            question: "Who do many people regard as the greatest playwright of all time?",
            correctAnswers: ["William Shakespeare"],
            incorrectAnswers: ["Thomas Hardy", "Jane Austen", "Charles Dickens", "Geoffrey Chaucer", "Virginia Woolf"]
        },
        {
            question: "In what way are Shakespeare's works still performed and studied in modern times?",
            correctAnswers: ["Shakespeare's plays and poems are performed and studied in Britain and other countries."],
            incorrectAnswers: [
                "Shakespeare's works are no longer performed or studied.",
                "Only Shakespeare's plays are performed and studied, not his poems.",
                "Shakespeare's works are only studied in Britain.",
                "Shakespeare's works are only read in history classes.",
                "Shakespeare's works are only performed and not studied.",
                "Shakespeare's works are considered outdated and are no longer relevant.",
                "Shakespeare's works are only performed and studied in English-speaking countries."
            ]
        },
        {
            questions: [
                {
                    question: "What is the name of the theatre in London that is a modern copy of the theatres in which Shakespeare's plays were first performed?",
                    correctAnswers: ["The Globe"],
                    incorrectAnswers: [
                        "The Swan",
                        "The Rose",
                        "The Royal Shakespeare Theatre",
                        "The National Theatre",
                        "The Old Vic",
                        "The Barbican"
                    ]
                },
                {
                    question: "What is the significance of The Globe Theatre in London today?",
                    correctAnswers: ["It is a modern copy of the theatres in which Shakespeare's plays were first performed"],
                    incorrectAnswers: [
                        "It is the original theatre where Shakespeare performed his plays",
                        "It is the oldest theatre in London",
                        "It was built during Shakespeare's lifetime",
                        "It is the largest theatre in the United Kingdom",
                        "It was designed by Shakespeare himself",
                        "It is a library housing Shakespeare's original manuscripts"
                    ]
                }
            ]
        },

    ];

    let category = {
        name: "William Shakespeare",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
