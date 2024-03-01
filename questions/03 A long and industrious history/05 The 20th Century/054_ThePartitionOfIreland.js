(() => {
    let questions = [
        { // KEY QUESTION
            question: "In what year was a peace treaty signed between the Irish and the British, leading to the creation of a separate state for Ireland?",
            correctAnswers: ["1921"],
            incorrectAnswers: getDates(1800, 2020, [1921], false)
        }
    ];

    let category = {
        name: "The Partition Of Ireland (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "The 20th Century (incomplete)"
    }
    quizDeck.categories.push(category);
})();
