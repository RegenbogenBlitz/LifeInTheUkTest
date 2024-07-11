(() => {
    let questions = [
        {
            question: "In what year did Winston Churchill first become Prime Minister of the United Kingdom?",
            correctAnswers: ["1940"],
            mandatoryIncorrectAnswers: ["1939", "1951"],
            incorrectAnswers: getDates(1850, 1970, [1940, 1939, 1951], false),
        },
        {
            question: "Which political party did Winston Churchill represent when he first became Prime Minister?",
            correctAnswers: ["Conservative Party"],
            mandatoryIncorrectAnswers: [
                "Labour Party",
                "Liberal Party"],
            incorrectAnswers: [
                "Whig Party",
                "Unionist Party",
                "Communist Party",
                "National Liberal Party",
                "Common Wealth Party"
            ]
        },
        {
            question: "In what year did Winston Churchill become Prime Minister for the second time?",
            correctAnswers: ["1951"],
            mandatoryIncorrectAnswers: ["1940"],
            incorrectAnswers: getDates(1850, 1970, [1951, 1940], false),
        },
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
        {
            "question": "Which of the following is a quote by Winston Churchill?",
            "correctAnswers": ["I have nothing to offer but blood, toil, tears and sweat."],
            "incorrectAnswers": [
                "I offer neither pay, nor quarters, nor food; I offer only hunger, thirst, forced marches, battles, and death.", // Giuseppe Garibaldi
                "Ask not what your country can do for you, ask what you can do for your country.", // John F. Kennedy
                "I have the heart and stomach of a king, and of a king of England too.", // Elizabeth I
                "If any question why we died, Tell them, because our fathers lied.", // Rudyard Kipling
                "I am become death, the destroyer of worlds." // J. Robert Oppenheimer / Bhagavad Gita
            ]
        },
        { // KEY QUESTION
            "question": "Which of the following is a quote by Winston Churchill?",
            "correctAnswers": ["We shall fight on the beaches... we shall never surrender."],
            "incorrectAnswers": [
                "Into the valley of Death rode the six hundred.", // Alfred, Lord Tennyson
                "Once more unto the breach, dear friends, once more.", // William Shakespeare
                "Neither a wise nor a brave man lies down on the tracks of history to wait for the train of the future to run over him.", // Dwight D. Eisenhower
                "Let him who loves his country with his heart, and not merely his lips, follow me.", // Giuseppe Garibaldi
                "Live for something rather than die for nothing." // George Patton
            ]
        },
        {
            "question": "Which of the following is a quote by Winston Churchill?",
            "correctAnswers": ["Never in the field of human conflict was so much owed by so many to so few."],
            "incorrectAnswers": [
                "The only thing we have to fear is fear itself.", // Franklin D. Roosevelt
                "I am the master of my fate: I am the captain of my soul.", // William Ernest Henley
                "The only thing necessary for the triumph of evil is for good men to do nothing.", // Edmund Burke
                "I only regret that I have but one life to give for my country.", // Nathan Hale
                "It is fatal to enter a war without the will to win it." // Douglas MacArthur
            ]
        }
    ];

    let category = {
        name: "Winston Churchill",
        questions: questions,
        isIncomplete: true,
        group: "The 20th Century"
    }
    quizDeck.categories.push(category);
})();
