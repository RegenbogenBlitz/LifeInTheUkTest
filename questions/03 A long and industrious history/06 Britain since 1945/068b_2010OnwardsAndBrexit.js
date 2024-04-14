(() => {
    let questions = [
        {
            question: "Who was the Prime Minister of the UK from 2010 to 2016?",
            correctAnswers: ["David Cameron"],
            mandatoryIncorrectAnswers: ["Nick Clegg"],
            incorrectAnswers: primeMinisters21stCentury.filter(pm => pm !== "David Cameron")
        },
        {
            questions: [
                {
                    question: "What was the result of the 2010 general election?",
                    correctAnswers: ["Hung Parliament"],
                    incorrectAnswers: ["Conservative Majority", "Labour Majority", "Lib Dem Majority"]
                },
                {
                    question: "Prior to 2010, when was the last hung parliament in the UK?",
                    correctAnswers: ["1974"],
                    incorrectAnswers: getDates(1800, 2009, [1974], false)
                }
            ]
        },
        {
            question: "Which party(s) formed a government in 2010? (Select all that apply)",
            correctAnswers: ["Conservative", "Lib Dem"],
            mandatoryIncorrectAnswers: ["Labour"],
            incorrectAnswers: [
                "BNP", "UKIP", "Green", "SNP", "Plaid Cymru", "DUP", "Sinn Fein", "SDLP", "UUP", "Alliance"]
        },
        { // KEY QUESTION
            question: "What type of government was formed in 2010?",
            correctAnswers: ["Coalition"],
            incorrectAnswers: ["Majority", "Minority", "Confidence and Supply", "Grand Coalition", "National Unity", "All Party"]
        }
    ];

    let category = {
        name: "2010 Onwards And Brexit (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "Britain since 1945 (incomplete)"
    }
    quizDeck.categories.push(category);
})();
