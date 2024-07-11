(() => {
    let questions = [
        { // KEY QUESTION
            question: "In what year was a peace treaty signed between the Irish and the British, leading to the creation of a separate state for Ireland?",
            correctAnswers: ["1921"],
            incorrectAnswers: getDates(1800, 2020, [1921], false)
        }
    ];

    let category = {
        name: "The Partition Of Ireland",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century"
    }
    quizDeck.categories.push(category);
})();
