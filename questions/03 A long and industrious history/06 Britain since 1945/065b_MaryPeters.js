(() => {
    let questions = [
        {
            question: "Mary Peters is most associated with which UK nation?",
            correctAnswers: ["Northern Ireland"],
            incorrectAnswers: [
                "England",
                "Scotland",
                "Wales"
            ]
        },
        {
            questions: [
                {
                    question: "What is Mary Peters most famous for?",
                    correctAnswers: ["Athletics"],
                    incorrectAnswers: [
                        "Politics",
                        "Acting",
                        "Singing",
                        "Writing",
                        "Painting",
                        "Science",
                        "Engineering",
                        "Medicine",
                        "Law",
                    ]
                },
                {
                    question: "In what event did Mary Peters win an Olympic gold medal in 1972?",
                    correctAnswers: ["Pentathlon"],
                    incorrectAnswers: [
                        "Sprint",
                        "Hurdles",
                        "Long jump",
                        "High jump",
                        "Javelin",
                        "Discus",
                        "Shot put",
                        "Hammer",
                        "Marathon"]
                },
                {
                    question: "In what year did Mary Peters win her Olympic gold medal?",
                    correctAnswers: ["1972"],
                    incorrectAnswers: [
                        "1948",
                        "1952",
                        "1956",
                        "1960",
                        "1964",
                        "1968",
                        "1976",
                        "1980",
                        "1984",
                        "1988",
                        "1992",
                        "1996",
                        "2000",
                        "2004",
                        "2008",
                        "2012",
                        "2016",
                        "2020"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Mary Peters was made a Dame in recognition of her work. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Mary Peters wasn't recognised in her lifetime for her work. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Mary Peters was made a Dame in 2000 for her services to sport and to the community in Northern Ireland."
                },
            ]
        }
    ];

    let category = {
        name: "Mary Peters",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
