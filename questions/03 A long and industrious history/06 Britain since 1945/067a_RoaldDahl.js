(() => {
    let questions = [
        {
            question: "What is Roald Dahl best known as?",
            correctAnswers: ["Author"],
            incorrectAnswers: [
                "Politician",
                "Scientist",
                "Musician",
                "Actor",
                "Athlete",
                "Artist",
                "Director"]
        },
        {
            question: "What is Roald Dahl's most famous for?",
            correctAnswers: ["Children's books"],
            incorrectAnswers: [
                "Autobiography",
                "Science fiction",
                "Romance",
                "Horror",
                "Fantasy",
                "Mystery",
                "Thriller",
                "Historical fiction",
                "Crime"]
        },
        {
            questions: [
                {
                    question: "Roald Dahl also wrote for adults. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Roald Dahl only wrote children's books. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Roald Dahl also wrote short stories for adults"
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who is the author of the book 'Charlie and the Chocolate Factory'?",
                    correctAnswers: ["Roald Dahl"],
                    incorrectAnswers: britishChildrensAuthors.filter(author => author !== "Roald Dahl"),
                },
                {
                    question: "Who is the author of the book 'George's Marvellous Medicine'?",
                    correctAnswers: ["Roald Dahl"],
                    incorrectAnswers: britishChildrensAuthors.filter(author => author !== "Roald Dahl"),
                },
                {
                    question: "Which of the following were written by Roald Dahl? (Select all that apply)",
                    correctAnswers: ["Charlie and the Chocolate Factory", "George's Marvellous Medicine"],
                    incorrectAnswers: britishChildrensBooks.filter(book =>
                        book !== "Charlie and the Chocolate Factory" &&
                        book !== "George's Marvellous Medicine"),
                }
            ]
        }
    ];

    let category = {
        name: "Roald Dahl",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
