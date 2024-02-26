(() => {
    let questions = [
        {
            question: "Which of these is true regarding the influence of Protestant ideas in Scotland in the mid-16th century?",
            correctAnswers: ["Scotland had been strongly influenced by them"],
            incorrectAnswers: [
                "Scotland had been somewhat influenced by them",
                "Scotland had been completely uninfluenced by them",
                "Scotland had been strongly influenced by Catholic, counter-reformation ideas"]
        },
        {
            question: "What does 'illegal' mean?",
            correctAnswers: ["Something which the law does not allow"],
            incorrectAnswers: [
                "Something which the law requires",
                "Something which the law encourages",
                "Something which the law permits",
                "Something which the law suggests",
                "Something which the law discourages",
                "Something which the law advises against",
            ],
            explanation: "This is the definition of 'illegal' according to the Life in the UK Test handbook."
        },
        {
            questions: [
                {
                    question: "In what year did the Scottish Parliament abolish the authority of the pope in Scotland?",
                    correctAnswers: ["1560"],
                    incorrectAnswers: getDates(1400, 1700, [1560], false)
                },
                {
                    question: "What sort of religious services became illegal in Scotland after the Scottish Parliament abolished the authority of the pope?",
                    correctAnswers: ["Roman Catholic"],
                    mandatoryIncorrectAnswers: ["Protestant"],
                    incorrectAnswers: [
                        "Jewish",
                        "Buddhist",
                        "Hindu",
                        "Islamic"]
                },
                {
                    question: "Which religious authority's power was abolished by the Scottish Parliament in 1560?",
                    correctAnswers: ["the Pope"],
                    incorrectAnswers: [
                        "the Archbishop of Canterbury",
                        "the Patriarch of Constantinople",
                        "the Dalai Lama",
                        "the Chief Rabbi",
                        "the Imam of Masjid Al Haram"]
                },
                {
                    question: "What was the predominant religious orientation of the Scottish Parliament when it abolished the authority of the pope in Scotland?",
                    correctAnswers: ["Protestant"],
                    incorrectAnswers: ["Catholic", "Anglican", "Orthodox", "Baptist", "Methodist", "Lutheran"]
                }
            ]
        },
        {
            question: "What type of church was established in Scotland in 1560?",
            correctAnswers: ["A Protestant Church of Scotland"],
            mandatoryIncorrectAnswers: ["A Roman Catholic Church of Scotland"],
            incorrectAnswers: [
                "An Anglican Church of Scotland",
                "An Orthodox Church of Scotland",
                "A Baptist Church of Scotland",
                "A Methodist Church of Scotland",
                "A Lutheran Church of Scotland"]
        },
        {
            question: "What sort of leadership did the Protestant Church of Scotland have when it was established?",
            correctAnswers: ["An elected leadership"],
            incorrectAnswers: [
                "An appointed leadership",
                "A hereditary leadership",
                "A leadership chosen by the pope",
                "A leadership chosen by the monarch",
                "A leadership chosen by the public in a referendum"]
        },
        {
            question: "How did the Protestant Church of Scotland differ from the Church of England?",
            correctAnswers: ["It was not a state church"],
            incorrectAnswers: [
                "It had an appointed leadership",
                "It was not a branch of the Roman Catholic Church",
                "It was under the authority of the pope",
                "It was led by bishops appointed by the monarch",
                "It had a hereditary leadership structure"]
        },
        {
            question: "What was the religion of Mary, Queen of Scots?",
            correctAnswers: ["Catholic"],
            incorrectAnswers: ["Protestant", "Anglican", "Buddhist", "Hindu", "Muslim", "Jewish", "Sikh"]
        },
        {
            question: "Who is often referred to as 'Mary, Queen of Scots'?",
            correctAnswers: ["Mary Stuart"],
            mandatoryIncorrectAnswers: ["Mary Tudor"],
            incorrectAnswers: [
                "Mary Boleyn",
                "Mary of Teck",
                "Mary of Modena",
                "Mary of Guise",
                "Mary of Burgundy"]
        },
        {
            question: "How old was Mary, Queen of Scots, when she became the Queen of Scotland?",
            correctAnswers: ["A week old"],
            incorrectAnswers: [
                "At birth",
                "Two weeks old",
                "A month old",
                "Six months old",
                "A year old",
                "Five years old",
                "Ten years old"]
        },
        {
            question: "What event led to Mary, Queen of Scots, becoming the Queen of Scotland?",
            correctAnswers: ["Her father's death"],
            incorrectAnswers: [
                "Her mother's death",
                "The abdication of the previous king",
                "A royal decree",
                "A public election",
                "The death of a sibling",
                "The Act of Union",
                "Her marriage"]
        },
        {
            question: "Where did Mary, Queen of Scots, spend much of her childhood?",
            correctAnswers: ["France"],
            mandatoryIncorrectAnswers: ["England", "Scotland", "Wales", "Ireland"],
            incorrectAnswers: [
                "Italy",
                "Germany",
                "Spain",
                "Portugal",
                "The Netherlands"]
        },
        {
            question: "What was Mary, Queen of Scots, role upon her return to Scotland?",
            correctAnswers: ["She was the centre for power struggle between different groups"],
            incorrectAnswers: [
                "She was a military leader",
                "She established a new government",
                "She led a rebellion against England",
                "She became the head of the Church of Scotland",
                "She started a campaign to reinstate the pope's authority",
                "She was an advisor to the Scottish Parliament"]
        },
        {
            question: "What happened to Mary, Queen of Scots's husband that led to her fleeing to England?",
            correctAnswers: ["Her husband was murdered"],
            incorrectAnswers: [
                "Her husband was crowned king",
                "Her husband divorced her",
                "Her husband fell ill",
                "Her husband was exiled",
                "Her husband was appointed as an advisor to Elizabeth I"]
        },
        {
            question: "What was Mary, Queen of Scots, suspected of that resulted in her the country?",
            correctAnswers: ["Involvement in her husband's murder"],
            incorrectAnswers: [
                "Attempting to remove her sone from the succession",
                "Plotting to reinstate Catholicism as the official religion of Scotland",
                "Treason against Scotland",
                "Converting to Protestantism",
                "Colluding with France",
                "Planning an uprising"]
        },
        {
            question: "To whom did Mary, Queen of Scots, give her throne?",
            correctAnswers: ["James VI of Scotland"],
            incorrectAnswers: [
                "Henry, Lord Darnley",
                "Mary of Guise",
                "Elizabeth I of England",
                "John Knox",
                "Charles I of Scotland",
                "Robert the Bruce of Scotland",
                "Francis II of France"]
        },
        {
            question: "What was the religion of James VI of Scotland?",
            correctAnswers: ["Protestant"],
            mandatoryIncorrectAnswers: ["Catholic"],
            incorrectAnswers: ["Orthodox", "Jewish", "Non-Religious"]
        },
        {
            question: "Where did Mary, Queen of Scots, flee to after her husband's murder?",
            correctAnswers: ["England"],
            mandatoryIncorrectAnswers: ["Scotland", "Wales", "Ireland"],
            incorrectAnswers: [
                "Italy",
                "Germany",
                "Spain",
                "Portugal",
                "The Netherlands"]
        },
        {
            question: "What was the relationship between Mary, Queen of Scots, and Elizabeth I?",
            correctAnswers: ["They were cousins."],
            incorrectAnswers: ["They were sisters.", "They were mother and daughter.", "They were unrelated.", "They were aunt and niece."]
        },
        {
            question: "What did Mary, Queen of Scots, hope Elizabeth I would do, when Mary came to England?",
            correctAnswers: ["Help her"],
            incorrectAnswers: [
                "Negotiate a peace treaty",
                "Arrange her a marriage",
                "Investigate a murder",
                "Shelter her",
                "Ignore her",
                "Praise her"
            ]
        },
        {
            question: "What did Elizabeth I expect Mary, Queen of Scots, of wanting when Mary came to England?",
            correctAnswers: ["To take over the English throne"],
            incorrectAnswers: [
                "To convert to Protestantism",
                "To marry an English nobleman",
                "To establish her a Scottish court in London",
                "To give up her claim to the Scottish throne",
                "To leave Great Britain and travel to France"
            ]
        },
        {
            questions: [
                {
                    question: "What did Elizabeth I initially do to Mary, Queen of Scots, when Mary came to England?",
                    correctAnswers: ["She imprisoned her"],
                    incorrectAnswers: [
                        "She executed her",
                        "She exiled her",
                        "She made her an advisor",
                        "She married her to a nobleman",
                        "She made her a lady-in-waiting",
                        "She made her a governess",
                        "She made her a duchess"
                    ],
                    question: "How long was Mary, Queen of Scots, imprisoned in England?",
                    correctAnswers: ["20 years"],
                    incorrectAnswers: [
                        "8 weeks",
                        "6 months",
                        "1 year",
                        "5 years",
                        "10 years",
                        "15 years",
                        "30 years"
                    ]
                }
            ]
        },
        {
            question: "What was Mary, Queen of Scots, accused of that led to her execution?",
            correctAnswers: ["Plotting against Elizabeth I"],
            incorrectAnswers: [
                "Conspiring with the French monarchy",
                "Leading a rebellion in Scotland",
                "Practicing witchcraft",
                "Refusing to renounce Catholicism",
                "Stealing the English crown",
                "Assassinating a political figure",
                "Treason against the Scottish Parliament"]
        },
    ];

    let category = {
        name: "The Reformation in Scotland and Mary Queen of Scots",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
