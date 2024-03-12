(() => {
    let questions = [
        { // KEY QUESTION
            question: "Dylan Thomas was from which country?",
            correctAnswers: ["Wales"],
            mandatoryIncorrectAnswers: ["England", "Scotland", "Northern Ireland"],
            incorrectAnswers: europeanCountries.filter(country => country !== "The United Kingdom").concat([
                "The United States of America",
                "Canada",
                "Australia",
                "New Zealand",
                "South Africa",
                "India"])
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
                    question: "Which of the following is a poem by Dylan Thomas?",
                    correctAnswers: ["Do Not Go Gentle Into That Good Night"],
                    incorrectAnswers: englishPoems.filter(poem => poem !== "Do Not Go Gentle Into That Good Night")
                },
                {
                    question: "Who wrote the poem 'Do Not Go Gentle Into That Good Night'?",
                    correctAnswers: ["Dylan Thomas"],
                    incorrectAnswers: englishPoets.filter(poet => poet !== "Dylan Thomas")
                }
            ]
        }

    ];

    let category = {
        name: "Dylan Thomas (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "Britain since 1945 (incomplete)"
    }
    quizDeck.categories.push(category);
})();
