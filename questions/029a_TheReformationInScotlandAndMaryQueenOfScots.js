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
            question: "In what year did the Scottish Parliament abolish the authority of the pope in Scotland?",
            correctAnswers: ["1560"],
            incorrectAnswers: ["1540", "1550", "1570", "1580", "1590", "1600", "1610"]
        },
        {
            question: "What was the religious orientation of the Scottish Parliament when it abolished the authority of the pope in Scotland?",
            correctAnswers: ["Protestant"],
            incorrectAnswers: ["Catholic", "Anglican", "Orthodox", "Baptist", "Methodist", "Lutheran"]
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
            ]
        },
        {
            question: "What became illegal in Scotland after the Scottish Parliament abolished the authority of the pope in 1560?",
            correctAnswers: ["Roman Catholic religious services"],
            incorrectAnswers: ["Protestant religious services", "Jewish religious services", "Buddhist religious practices", "Hindu religious rituals", "Islamic religious services", "Non-religious gatherings"]
        },
        {
            question: "Which religious authority's power was abolished by the Scottish Parliament in 1560?",
            correctAnswers: ["the pope"],
            incorrectAnswers: ["the Archbishop of Canterbury", "the Patriarch of Constantinople", "the Dalai Lama", "the Archbishop of Glasgow", "the Chief Rabbi", "the Imam of Edinburgh"]
        },
        {
            question: "What was the status of the Scottish Parliament when it abolished the authority of the pope?",
            correctAnswers: ["Predominantly Protestant"],
            incorrectAnswers: ["Predominantly Catholic", "Fully Anglican", "Majority Orthodox", "Completely secular", "Bipartisan", "Non-denominational"]
        },
        {
            question: "What type of church was established in Scotland in 1560?",
            correctAnswers: ["A Protestant Church of Scotland"],
            incorrectAnswers: ["A Roman Catholic Church of Scotland", "A Church of England", "An Orthodox Church of Scotland", "A Baptist Church of Scotland", "A Methodist Church of Scotland", "A Lutheran Church of Scotland"]
        },
        {
            question: "What sort of leadership did the Protestant Church of Scotland have when it was established?",
            correctAnswers: ["An elected leadership"],
            incorrectAnswers: ["An appointed leadership", "A hereditary leadership", "A nominated leadership", "A leadership chosen by the pope", "A leadership chosen by the queen", "A leadership chosen by the public in a referendum"]
        },
        {
            question: "How did the Protestant Church of Scotland differ from the Church of England?",
            correctAnswers: ["It was not a state church"],
            incorrectAnswers: ["It had an appointed leadership", "It was a branch of the Roman Catholic Church", "It was under the authority of the pope", "It was a state church", "It was led by bishops appointed by the monarch", "It had a hereditary leadership structure"]
        },
        {
            question: "What was the religion of Mary Stuart, the Queen of Scotland?",
            correctAnswers: ["Catholic"],
            incorrectAnswers: ["Protestant", "Anglican", "Buddhist", "Hindu", "Muslim", "Jewish", "Sikh"]
        },
        {
            question: "Who is often referred to as 'Mary, Queen of Scots'?",
            correctAnswers: ["Mary Stuart"],
            incorrectAnswers: [
                "Mary I of England",
                "Mary Tudor",
                "Mary of Teck",
                "Mary of Modena",
                "Mary of Guise",
                "Mary of Burgundy"]
        },
        {
            question: "How old was Mary Stuart when she became the Queen of Scotland?",
            correctAnswers: ["A week old"],
            incorrectAnswers: ["A month old", "A year old", "Ten years old", "Six months old", "At birth", "Two weeks old", "Five years old"]
        },
        {
            question: "What event led to Mary Stuart becoming the Queen of Scotland?",
            correctAnswers: ["Her father's death"],
            incorrectAnswers: ["Her mother's death", "The abdication of the previous king", "A royal decree", "A public election", "The death of a sibling", "The Act of Union", "Her marriage"]
        },
        {
            question: "Where did Mary, Queen of Scots, spend much of her childhood?",
            correctAnswers: ["France"],
            incorrectAnswers: ["England", "Scotland", "Ireland", "Wales", "Spain", "Italy", "Germany"]
        },
        {
            question: "What was Mary Stuart's role upon her return to Scotland?",
            correctAnswers: ["She was the centre for power struggle between different groups"],
            incorrectAnswers: ["She was a military leader", "She established a new government", "She led a rebellion against England", "She became the head of the Church of Scotland", "She started a campaign to reinstate the pope's authority", "She was an advisor to the Scottish Parliament"]
        },
        {
            question: "What happened to Mary's husband that led to her fleeing to England?",
            correctAnswers: ["Her husband was murdered"],
            incorrectAnswers: ["Her husband was crowned king", "Her husband divorced her", "Her husband fell ill", "Her husband was exiled", "Her husband became the leader of Scotland", "Her husband was appointed as an advisor to Elizabeth I"]
        },
        {
            question: "What was Mary suspected of that resulted in her fleeing to England?",
            correctAnswers: ["Involvement in her husband's murder"],
            incorrectAnswers: ["Theft", "Treason against Scotland", "Witchcraft", "Converting to Protestantism", "Colluding with France", "Planning an uprising"]
        },
        {
            question: "Where did Mary flee to after her husband's murder?",
            correctAnswers: ["England"],
            incorrectAnswers: ["France", "Ireland", "Wales", "Norway", "Spain", "The Netherlands"]
        },
        {
            question: "To whom did Mary Stuart give her throne?",
            correctAnswers: ["James VI of Scotland"],
            incorrectAnswers: ["Mary I of England", "Elizabeth I of England", "Edward VI of England", "Henry VIII of England", "Charles I of Scotland", "Robert the Bruce of Scotland"]
        },
        {
            question: "What was the religion of James VI of Scotland?",
            correctAnswers: ["Protestant"],
            mandatoryIncorrectAnswers: ["Catholic"],
            incorrectAnswers: ["Orthodox", "Jewish", "Non-Religious"]
        },
        {
            question: "What was the relationship between Mary Stuart and Elizabeth I?",
            correctAnswers: ["They were cousins."],
            incorrectAnswers: ["They were sisters.", "They were mother and daughter.", "They were unrelated.", "They were aunt and niece."]
        },
        {
            question: "What did Elizabeth I initially do to Mary Stuart when Mary fled to England?",
            correctAnswers: ["She imprisoned her for 20 years."],
            incorrectAnswers: [
                "She executed her.",
                "She exiled her.",
                "She made her an advisor.",
                "She married her to a nobleman.",
                "She made her a lady-in-waiting.",
                "She made her a governess.",
                "She made her a duchess."
            ]
        },
        {
            question: "What was Mary, Queen of Scots, accused of that led to her execution?",
            correctAnswers: ["Plotting against Elizabeth I"],
            incorrectAnswers: ["Conspiring with the French monarchy", "Leading a rebellion in Scotland", "Practicing witchcraft", "Refusing to renounce Catholicism", "Stealing the English crown", "Assassinating a political figure", "Treason against the Scottish Parliament"]
        },
    ];

    let category = {
        name: "The Reformation in Scotland and Mary Queen of Scots",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
