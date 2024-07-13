(() => {
    let questions = [
        {
            question: "In what year were people from the West Indies invited to come and work in the UK?",
            correctAnswers: ["1948"],
            incorrectAnswers: getDates(1850, 2000, [1948], false)
        },
        {
            question: "During the 1950s, for what jobs were centres set up in the West Indies to recruit workers?",
            correctAnswers: ["Bus drivers"],
            mandatoryIncorrectAnswers: ["Textile workers", "Engineers"],
            incorrectAnswers: [
                "Doctors",
                "Teachers",
                "Nurses",
                "Scientists",
                "Farmers",
                "Miners",
                "Factory workers",
                "Cleaners",
                "Waiters",
                "Cooks",
                "Firefighters",
            ]
        },
        {
            question: "During the 1950s, what sort of firms sent agents to India and Pakistan to find workers? (Select all that apply)",
            correctAnswers: ["Textile", "Engineering"],
            mandatoryIncorrectAnswers: ["Transport"],
            incorrectAnswers: [
                "Steel",
                "Mining",
                "Agriculture",
                "Construction",
                "Automotive",
                "Chemical",
                "Pharmaceutical",
            ]
        },
        {
            question: "Firms from which regions of England sent agents to India and Pakistan to find workers? (Select all that apply)",
            correctAnswers: ["Midlands", "North"],
            incorrectAnswers: ["South", "East"],
        }
    ];

    let category = {
        name: "Migration in post-war Britain",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
