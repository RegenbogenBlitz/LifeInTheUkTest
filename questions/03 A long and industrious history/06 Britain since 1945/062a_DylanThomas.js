(() => {
    let questions = [
        { // KEY QUESTION
            questions: [
                {
                    question: "In what century did Dylan Thomas do his most famous work?",
                    correctAnswers: ["20th"],
                    mandatoryIncorrectAnswers: ["19th", "21st"],
                    incorrectAnswers: ["17th", "18th"]
                },
                {
                    question: "In what era did Dylan Thomas do his most famous work?",
                    correctAnswers: ["The Postwar period"],
                    incorrectAnswers: namesOfModernAges.filter(age => age !== "The Postwar period")
                }
            ]
        },
        { // KEY QUESTION
            question: "Dylan Thomas was from which country?",
            correctAnswers: ["Wales"],
            mandatoryIncorrectAnswers: ["England", "Scotland", "Northern Ireland", "The Republic of Ireland"],
            incorrectAnswers: europeanCountries
                .filter(country => country !== "The United Kingdom" && country !== "The Republic of Ireland")
                .concat([
                    "The United States of America",
                    "Canada",
                    "Australia",
                    "New Zealand",
                    "South Africa",
                    "India"])
        },
        {
            question: "In what city was Dylan Thomas born?",
            correctAnswers: ["Swansea"],
            mandatoryIncorrectAnswers: ["New York", "Cardiff", "London", "Edinburgh", "Belfast", "Dublin"],
            incorrectAnswers: [
                "Aberystwyth",
                "Bangor",
                "Liverpool",
                "Manchester",
                "Birmingham",
                "Bristol",
                "Leeds",
                "Sheffield",
                "Glasgow",
                "Aberdeen",
                "Dundee",
                "Inverness"
            ]
        },
        {
            questions: [
                {
                    question: "Dylan Thomas would often read and perform his work in public. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Dylan Thomas would NEVER read and perform his work in public. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
            ]
        },
        {
            questions: [
                {
                    question: "Dylan Thomas performed his work for the BBC. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Despite performing his work regularly, Dylan Thomas refused to perform it on the BBC. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "Under Milk Wood was what type of play?",
            correctAnswers: ["Radio play"],
            incorrectAnswers: [
                "Stage play",
                "Screenplay",
                "Musical",
                "Drawing room play"
            ]
        },
        {
            questions: [
                {
                    question: "Which of the following is a play by Dylan Thomas?",
                    correctAnswers: ["Under Milk Wood"],
                    incorrectAnswers: [
                        "The Winter's Tale", // Shakespeare
                        "Doctor Faustus", // Marlowe
                        "The Importance of Being Earnest", // Wilde
                        "Waiting for Godot", // Beckett
                        "The Birthday Party", // Pinter
                        "The Entertainer", // Osborne
                        "Equus", // Shaffer
                        "The Winslow Boy", // Rattigan
                        "Blythe Spirit" // Coward

                    ]
                },
                {
                    question: "Who wrote the play 'Under Milk Wood'?",
                    correctAnswers: ["Dylan Thomas"],
                    incorrectAnswers: [
                        "William Shakespeare",
                        "Christopher Marlowe",
                        "Oscar Wilde",
                        "Samuel Beckett",
                        "Harold Pinter",
                        "John Osborne",
                        "Peter Shaffer",
                        "Terence Rattigan",
                        "Noel Coward"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Under Milk Wood was first performed after its author's death. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Despite being gravely ill, Under Milk Wood's first performance was attended by the author. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "In what year was Under Milk Wood first performed?",
            correctAnswers: ["1954"],
            incorrectAnswers: getDates(1550, 1990, [1954], false),
        },
        {
            questions: [
                {
                    question: "Which of the following is a poem by Dylan Thomas?",
                    correctAnswers: ["Do Not Go Gentle Into That Good Night"],
                    incorrectAnswers: englishPoems.filter(poem => poem !== "Do Not Go Gentle Into That Good Night")
                },
                {
                    question: "Who wrote the poem 'Do Not Go Gentle Into That Good Night'?",
                    correctAnswers: ["Dylan Thomas"],
                    incorrectAnswers: englishPoets.filter(poet => poet !== "Dylan Thomas")
                },

            ]
        },
        {
            question: "In what year was the poem 'Do Not Go Gentle Into That Good Night' written?",
            correctAnswers: ["1952"],
            incorrectAnswers: getDates(1550, 1990, [1952], false),
            explanation: "The Life In the UK Test study guide says that the poem was written in 1952, but this is incorrect. " +
                "The poem was written in 1947 and published in 1951. It has been thought to be about poet's dying father, who died in 1952."
        },
        {
            question: "How old was Dylan Thomas when he died?",
            correctAnswers: ["39"],
            incorrectAnswers: [
                "18",
                "27",
                "43",
                "57",
                "64",
                "71"
            ]
        },
        {
            question: "In what city did Dylan Thomas die?",
            correctAnswers: ["New York"],
            mandatoryIncorrectAnswers: ["London", "Swansea", "Cardiff", "Edinburgh", "Dublin", "Belfast"],
            incorrectAnswers: [
                "Paris",
                "Berlin",
                "Rome",
                "Los Angeles",
                "Chicago",
                "San Francisco",
                "Toronto",
                "Sydney"
            ]
        },
        {
            questions: [
                {
                    question: "Several memorials to Dylan Thomas can be found in his birthplace. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Despite being commemorated elsewhere, Dylan Thomas is NOT commemorated in his birthplace. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "In which of the following cities is there a statue of Dylan Thomas?",
            correctAnswers: ["Swansea"],
            mandatoryIncorrectAnswers: ["London", "Cardiff", "Edinburgh", "Dublin", "Belfast"],
            incorrectAnswers: [
                "Aberystwyth",
                "Bangor",
                "Liverpool",
                "Manchester",
                "Birmingham",
                "Bristol",
                "Leeds",
                "Sheffield",
                "Glasgow",
                "Aberdeen",
                "Dundee",
                "Inverness"
            ]
        },
        {
            question: "In what city is the Dylan Thomas Centre?",
            correctAnswers: ["Swansea"],
            mandatoryIncorrectAnswers: ["London", "Cardiff", "Edinburgh", "Dublin", "Belfast"],
            incorrectAnswers: [
                "Aberystwyth",
                "Bangor",
                "Liverpool",
                "Manchester",
                "Birmingham",
                "Bristol",
                "Leeds",
                "Sheffield",
                "Glasgow",
                "Aberdeen",
                "Dundee",
                "Inverness"
            ]
        }
    ];

    let category = {
        name: "Dylan Thomas",
        questions: questions,
        isUnvetted: false,
        group: "Britain since 1945 (incomplete)"
    }
    quizDeck.categories.push(category);
})();
