(() => {
    let questions = [
        {
            question: "In what year did the British government promise 'Home Rule' for Ireland?",
            correctAnswers: ["1913"],
            mandatoryIncorrectAnswers: ["1916", "1921", "1922", "1949"],
            incorrectAnswers: getDates(1800, 2020, [1913, 1916, 1921, 1922, 1949], false)
        },
        {
            question: "Which major group opposed Home Rule for Ireland?",
            correctAnswers: ["Protestants in the north of Ireland"],
            mandatoryIncorrectAnswers: [
                "Protestants in the south of Ireland",
                "Catholics in the south of Ireland",
                "Catholics in the north of Ireland"],
        },
        {
            question: "What event led the British government to suspend plans for Home Rule for Ireland?",
            correctAnswers: ["The outbreak of World War I"],
            incorrectAnswers: [
                "The Irish potato famine",
                "The Easter Rising",
                "The death of Edward VII",
                "The sinking of the Titanic",
                "The stock market crash of 1929",
                "The outbreak of World War II",
            ]
        },
        {
            question: "In what year was the Easter Rising?",
            correctAnswers: ["1916"],
            mandatoryIncorrectAnswers: ["1913", "1921", "1922", "1949"],
            incorrectAnswers: getDates(1800, 2020, [1916, 1913, 1921, 1922, 1949], false)
        },
        { // KEY QUESTION
            question: "In what year was a peace treaty signed between the Irish and the British, leading to the creation of a separate state for Ireland?",
            correctAnswers: ["1921"],
            mandatoryIncorrectAnswers: ["1913", "1916", "1922", "1949"],
            incorrectAnswers: getDates(1800, 2020, [1921, 1913, 1916, 1922, 1949], false)
        },
        {
            question: "In what year did Ireland become two countries?",
            correctAnswers: ["1922"],
            mandatoryIncorrectAnswers: ["1913", "1916", "1921", "1949"],
            incorrectAnswers: getDates(1800, 2020, [1922, 1913, 1916, 1921, 1949], false)
        },
        {
            question: "How many counties are in Northern Ireland?",
            correctAnswers: ["6"],
            incorrectAnswers: ["3", "4", "5", "7", "8", "9"],
        },
        {
            question: "The counties that in the north of Ireland that remained part of the UK are mostly populated by which religious group?",
            correctAnswers: ["Protestants"],
            mandatoryIncorrectAnswers: ["Catholics"]
        },
        {
            question: "In what year did most of Ireland become a republic?",
            correctAnswers: ["1949"],
            mandatoryIncorrectAnswers: ["1913", "1916", "1921", "1922"],
            incorrectAnswers: getDates(1800, 2020, [1949, 1913, 1916, 1921, 1922], false)
        },
        {
            question: "What is the name for the conflict in Ireland between those who wanted to remain part of the UK and those who wanted a united Ireland?",
            correctAnswers: ["The Troubles"],
            incorrectAnswers: [
                "The Easter Rising",
                "The Irish War of Independence",
                "The Irish Civil War",
                "The Battle of the Boyne",
                "The Siege of Derry",
            ],
        }
    ];

    let category = {
        name: "The Partition Of Ireland",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
