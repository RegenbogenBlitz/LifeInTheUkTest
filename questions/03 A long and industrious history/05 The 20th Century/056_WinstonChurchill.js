(() => {
    let questions = [
        { // KEY QUESTION
            question: "Who, in 2002, was voted the greatest Briton of all time by the public?",
            correctAnswers: ["Winston Churchill"],
            incorrectAnswers: [
                "Isambard Kingdom Brunel",
                "Diana, Princess of Wales",
                "Charles Darwin",
                "William Shakespeare",
                "Sir Isaac Newton",
                "Queen Elizabeth I",
                "John Lennon",
                "Horatio Nelson",
                "Oliver Cromwell",

                "Margaret Thatcher",
                "Beatrix Potter",
                "Elizabeth II",
                "Richard Dawkins",
                "Jane Austen",
                "Stephen Hawking",
                "King Henry VIII",
                "Paul McCartney",
                "Arthur Wellesley, 1st Duke of Wellington",
                "Guy Fawkes",

                "Mary Seacole",
                "Olaudah Equiano",
            ],
            explanation: "https://en.wikipedia.org/wiki/100_Greatest_Britons"
        },
    ];

    let category = {
        name: "Winston Churchill (incomplete)",
        questions: questions,
        isUnvetted: false,
        group: "The 20th Century (incomplete)"
    }
    quizDeck.categories.push(category);
})();
