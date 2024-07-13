(() => {
    const actsOfUnionExplanation = "The handbook fudges the explanation of this: " +
        "First there was the Treaty of Union (known at the time as the Articles of Union), agreed by England and Scotland. " +
        "Then there were two Acts of Union, the Union with Scotland Act (in England) and the Union with England Act (in Scotland): " +
        "these documents created the Kingdom of Great Britain and are known as the Acts of Union.";

    let questions = [
        {
            question: "Who was the successor to William and Mary?",
            correctAnswers: ["Anne"],
            incorrectAnswers: dualMonarchs.filter(monarch =>
                monarch !== "Anne" &&
                monarch !== "William III" &&
                monarch !== "Mary II").concat([
                    "James VIII and III",
                    "George I",
                    "William IV"]),
            explanation: "When Mary II died in 1694, William III continued to rule alone until his death in 1702. " +
                "Anne, the younger sister of Mary II, then became queen."
        },
        {
            questions: [
                {
                    question: "How many surviving children did Queen Anne have at the time of her death?",
                    correctAnswers: ["None"],
                    incorrectAnswers: [
                        "One",
                        "Two",
                        "Three",
                        "Four",
                        "Five",
                        "Six",
                        "Seven"
                    ]
                },
                {
                    question: "In which countries did Queen Anne's lack of surviving children create uncertainty over the succession? (Select all that apply)",
                    correctAnswers: [
                        "England & Wales",
                        "Ireland",
                        "Scotland"
                    ],
                    incorrectAnswers: [
                        "France",
                        "Spain",
                        "The Dutch Republic",
                        "Portugal",
                        "Poland & Lithuania",
                        "Denmark - Norway",
                        "Sweden"
                    ]
                }
            ]
        },
        { // KEY QUESTIONS
            questions: [
                {
                    question: "What was name of the document that created the Kingdom of Great Britain?",
                    correctAnswers: [
                        "Act of Union"
                    ],
                    incorrectAnswers: [
                        "Act of Scotland",
                        "Act of England",
                        "Statute of Berwick",
                        "Magna Britannia Carta",
                        "United Kingdom Bill"
                    ],
                    explanation: actsOfUnionExplanation
                },
                {
                    question: "What was name of the document that created the Kingdom of Great Britain, known as in Scotland?",
                    correctAnswers: [
                        "Treaty of Union"
                    ],
                    incorrectAnswers: [
                        "Treaty of Scotland",
                        "Treaty of England",
                        "Statute of Edinburgh",
                        "Great Britain Agreement",
                        "Act of Scotland",
                        "United Kingdom Treaty"
                    ],
                    explanation: actsOfUnionExplanation
                },
                {
                    question: "In what year was the Act of Union agreed upon, which created the Kingdom of Great Britain?",
                    correctAnswers: ["1707"],
                    incorrectAnswers: getDates(1485, 1820, [1707], false),
                    explanation: actsOfUnionExplanation
                },
                {
                    question: "In what year was England and Scotland united into one kingdom?",
                    correctAnswers: ["1707"],
                    incorrectAnswers: getDates(1485, 1820, [1707], false)
                },
                {
                    question: "What was created as a result of the Act of Union in 1707?",
                    correctAnswers: [
                        "Kingdom of Great Britain"
                    ],
                    incorrectAnswers: [
                        "United Kingdom of Great Britain",
                        "United Kingdom of Great Britain and Ireland",
                        "United Kingdom of Great Britain and Northern Ireland",
                        "British Empire",
                        "Commonwealth of Great Britain",
                        "Federation of England and Scotland",
                    ],
                    explanation: actsOfUnionExplanation
                }
            ]
        },
        {
            question: "What did Scotland retain after its union with England? (Select all that apply)",
            correctAnswers: [
                "Its own legal system",
                "Its own education system",
                "Presbyterian Church"
            ],
            incorrectAnswers: [
                "Its own currency",
                "Its own army",
                "Its independence as a country",
                "Its own parliament",
                "Full control over foreign policy",
                "The right to issue passports"
            ],
            explanation: "Scotland's parliament was dissolved in 1707, but the devolved Scottish Parliament was established in 1999."
        },
        {
            question: "What is the definition of 'successor' in the context of government?",
            correctAnswers: [
                "A person who comes after another and takes over an office or receives some kind of power"
            ],
            incorrectAnswers: [
                "A person who is elected to govern for a fixed term and then steps down",
                "A person who inherits property or titles",
                "A person appointed by a monarch to oversee a region or territory",
                "A person who leads a political party and is chosen to be prime minister",
                "A person who is chosen by the public in a referendum",
                "A person who is nominated by a council of peers or elders",
                "A person who is appointed to a judicial position or office",
            ],
            explanation: "This is the definition of 'successor' according to the Life in the UK Test handbook."
        },
        {
            question: "What is the definition of 'treaty'?",
            correctAnswers: [
                "An official written agreement between countries or governments"
            ],
            incorrectAnswers: [
                "A law passed by the parliament",
                "A verbal agreement between two leaders",
                "A declaration of war",
                "A peace offering between conflicting parties",
                "A financial contract between corporations",
                "A domestic policy initiative",
                "An informal pact between organizations"
            ],
            explanation: "This is the definition of 'treaty' according to the Life in the UK Test handbook."
        }
    ];

    let category = {
        name: "The Act or Treaty of Union in Scotland",
        questions: questions,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
