(() => {
    let questions = [
        {
            question: "Which of the following is a nickname for Robert Burns?",
            correctAnswers: [
                "The Bard"
            ],
            incorrectAnswers: [
                "The Poet",
                "The Scotsman",
                "The Writer",
                "The Lyricist",
                "The Scribe",
                "The Minstrel"
            ]
        },
        { // KEY QUESTION
            question: "What was Robert Burns' nationality?",
            correctAnswers: ["Scottish"],
            mandatoryIncorrectAnswers: ["English", "Irish", "Welsh"],
            incorrectAnswers: [
                "French",
                "German",
            ]
        },
        {
            question: "What was Robert Burns' profession?",
            correctAnswers: [
                "poet"
            ],
            incorrectAnswers: [
                "playwright",
                "novelist",
                "singer",
                "historian",
                "painter"
            ]
        },
        //{
        //    question: "In which languages did Robert Burns write his poetry?",
        //    correctAnswers: [
        //        "Scots language",
        //        "English with some Scottish words",
        //        "Standard English"
        //    ],
        //    incorrectAnswers: [
        //        "Gaelic",
        //        "Welsh",
        //        "Irish",
        //        "Latin",
        //        "French",
        //        "German",
        //        "Spanish"
        //    ]
        //},
        //{
        //    question: "Which language incorporating Scottish words did Robert Burns use in his writing?",
        //    correctAnswers: [
        //        "English with some Scottish words"
        //    ],
        //    incorrectAnswers: [
        //        "Scots language",
        //        "Standard English",
        //        "Gaelic",
        //        "French",
        //        "Latin",
        //        "German",
        //        "Spanish",
        //        "Italian"
        //    ]
        //},
        //{
        //    question: "Robert Burns wrote in Standard English as well as which other language forms?",
        //    correctAnswers: [
        //        "Scots language",
        //        "English with some Scottish words"
        //    ],
        //    incorrectAnswers: [
        //        "Gaelic",
        //        "Welsh",
        //        "Old English",
        //        "Latin",
        //        "French",
        //        "Dutch",
        //        "Spanish"
        //    ]
        //},
        //{
        //    question: "Which of the following languages did Robert Burns NOT use in his writing according to the provided information?",
        //    correctAnswers: [
        //        "Gaelic"
        //    ],
        //    incorrectAnswers: [
        //        "Scots language",
        //        "English with some Scottish words",
        //        "Standard English",
        //        "Latin",
        //        "French",
        //        "German",
        //        "Spanish",
        //        "Italian"
        //    ]
        //},
        //{
        //    question: "In what ways did Robert Burns revise traditional folk songs?",
        //    correctAnswers: [
        //        "Revised them by changing or adding lyrics"
        //    ],
        //    incorrectAnswers: [
        //        "Wrote the music for them",
        //        "Translated them into Scots language",
        //        "Published them as his own original works",
        //        "Composed new melodies for them",
        //        "Collected them without making changes",
        //        "Recorded them for radio broadcast",
        //        "Performed them in live concerts"
        //    ]
        //},
        //{
        //    question: "How did Robert Burns contribute to traditional folk songs?",
        //    correctAnswers: [
        //        "By changing or adding lyrics"
        //    ],
        //    incorrectAnswers: [
        //        "By writing new songs",
        //        "By creating new dances",
        //        "By illustrating them",
        //        "By narrating them",
        //        "By designing costumes for their performances",
        //        "By inventing new musical instruments",
        //        "By conducting orchestras to play them"
        //    ]
        //},
        //{
        //    question: "What is considered Robert Burns' best known work?",
        //    correctAnswers: [
        //        "Auld Lang Syne"
        //    ],
        //    incorrectAnswers: [
        //        "To a Mouse",
        //        "Scots Wha Hae",
        //        "Tam o' Shanter",
        //        "The Battle of Bannockburn",
        //        "The Declaration of Arbroath",
        //        "The Scottish Enlightenment"
        //    ]
        //},
        //{
        //    question: "When is the song 'Auld Lang Syne' traditionally sung?",
        //    correctAnswers: [
        //        "When celebrating the New Year"
        //    ],
        //    incorrectAnswers: [
        //        "During Christmas",
        //        "At Burns' Night",
        //        "On Saint Andrew's Day",
        //        "At a Ceilidh",
        //        "During the Edinburgh Festival",
        //        "At a Scottish wedding"
        //    ]
        //},
        //{
        //    question: "What is the Scottish term for the New Year celebration when 'Auld Lang Syne' is sung?",
        //    correctAnswers: [
        //        "Hogmanay"
        //    ],
        //    incorrectAnswers: [
        //        "Burns' Night",
        //        "Beltane",
        //        "Samhain",
        //        "Up Helly Aa",
        //        "The Fringe",
        //        "Boxing Day"
        //    ]
        //}
    ];

    let category = {
        name: "Robert Burns",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
