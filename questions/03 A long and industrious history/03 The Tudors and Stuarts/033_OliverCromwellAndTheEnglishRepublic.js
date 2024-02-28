(() => {
    let questions = [
        {
            questions: [
                {
                    question: "At which battles was the King's army defeated during the civil war? (Select all that apply)",
                    correctAnswers: [
                        "The Battle of Marston Moor",
                        "The Battle of Naesby"],
                    mandatoryIncorrectAnswers: ["The Battle of Dunbar", "The Battle of Worcester"],
                    incorrectAnswers: [
                        "The Battle of Cropredy Bridge",
                        "The Battle of Lostwithiel",
                        "The Battle of Edgehill",
                        "The Battle of Brentford",
                        "The Battle of Stratton"]
                },
                {
                    question: "When were the battles of Marston Moor and Naesby fought?",
                    correctAnswers: ["During the English Civil War"],
                    incorrectAnswers: [
                        "During the Hundred Years' War",
                        "During the War of the Roses",
                        "During the Anglo-Spanish War",
                        "During the Glorious Revolution",
                        "During the Jacobite Rebellion",
                        "During the Viking Invasions"]
                },
            ]
        },
        {
            questions: [
                {
                    question: "By what year was it clear that Parliament had won the first English Civil War?",
                    correctAnswers: ["1646"],
                    incorrectAnswers: ["1642", "1648", "1649", "1651", "1658", "1660", "1666"]
                },
                {
                    question: "Who had won the first English Civil War by 1646?",
                    correctAnswers: ["Parliament"],
                    incorrectAnswers: ["The King's army", "Oliver Cromwell", "The Royalists", "The Commonwealth", "The Scots", "The Spanish Armada"]
                }
            ]
        },
        {
            question: "Who was held prisoner by the parliamentary army?",
            correctAnswers: ["Charles I"],
            incorrectAnswers: ["Oliver Cromwell", "Richard Cromwell", "Charles II", "The King of Scotland", "The leader of the Commonwealth", "The Lord Protector"]
        },
        {
            question: "What was King Charles's stance towards reaching an agreement with Parliament after the English Civil War?",
            correctAnswers: ["He was still unwilling to reach any agreement with Parliament"],
            incorrectAnswers: [
                "He was open to reaching an agreement with Parliament",
                "He was indifferent to Parliament's proposals",
                "He had surrendered to Parliament's demands",
                "He was seeking asylum to avoid Parliament"]
        },
        {
            question: "When was Charles I executed?",
            correctAnswers: ["1649"],
            incorrectAnswers: ["1642", "1646", "1648", "1651", "1658", "1660", "1666"]
        },
        {
            questions: [
                {
                    question: "What was England declared as after the execution of Charles I?",
                    correctAnswers: ["A Republic"],
                    incorrectAnswers: ["A Monarchy", "A Federation", "A Confederacy", "An Empire", "A Protectorate", "A Democracy"]
                },
                {
                    question: "What was the name given to England when it declared itself a Republic?",
                    correctAnswers: ["The Commonwealth"],
                    incorrectAnswers: ["The Confederation", "The Union", "The Dominion", "The Empire", "The Republic of England", "The Kingdom of England"]
                },
                {
                    question: "What happened to the monarchy in the years immediately after the execution of Charles I?",
                    correctAnswers: ["It was abolished"],
                    incorrectAnswers: ["It was reformed", "It was expanded", "It was strengthened", "It was weakened"]
                }
            ]
        },
        {
            question: "What was uncertain in England following the declaration of the Commonwealth?",
            correctAnswers: ["How the country would be governed"],
            incorrectAnswers: [
                "Who the next monarch would be",
                "Which political party would take power",
                "The outcome of the ongoing war",
                "The location of Charles I",
                "The laws that would be implemented",
                "The economic policies that would be adopted"]
        },
        {
            question: "Who was in control of England immediately after it was declared a Republic?",
            correctAnswers: ["the army"],
            incorrectAnswers: ["the monarchy", "Oliver Cromwell", "the Parliament", "Richard Cromwell", "the Royalists", "the Scots", "Charles II", "the Church of England"]
        },
        {
            questions: [
                {
                    question: "Who was sent to Ireland, after the formation of the Commonwealth, to deal with the revolt that began in 1641?",
                    correctAnswers: ["Oliver Cromwell"],
                    incorrectAnswers: ["Charles I", "Thomas Fairfax", "Richard Cromwell", "Edward Montagu", "Arthur Haselrig"]
                },
                {
                    question: "Why was Oliver Cromwell sent to Ireland in the 1640s?",
                    correctAnswers: ["To deal with the revolt that began in 1641"],
                    incorrectAnswers: [
                        "To negotiate peace with the Irish leaders",
                        "To establish a new government in Ireland",
                        "To support the Royalist army",
                        "To investigate the conditions in Ireland"]
                },
            ]
        },
        {
            question: "What was still present in Ireland when Oliver Cromwell was sent there?",
            correctAnswers: ["A Royalist army"],
            incorrectAnswers: ["A parliamentary army", "A Scottish army", "A Puritan militia", "A French army", "A Spanish force", "An Irish Republican army"]
        },
        {
            question: "What was Cromwell successful in establishing in Ireland?",
            correctAnswers: ["The authority of the English Parliament"],
            incorrectAnswers: ["The Commonwealth", "Independence for Ireland", "Royalist rule", "The monarchy", "Scottish control", "A democratic government"]
        },
        {
            questions: [
                {
                    question: "Why is Oliver Cromwell a controversial figure in Ireland?",
                    correctAnswers: ["His violence while suppressing the Irish revolt after the English Civil War"],
                    incorrectAnswers: [
                        "His refusal to negotiate with the Irish leaders",
                        "His support for the Irish rebels",
                        "His failure to establish a new government in Ireland",
                        "His decision to leave Ireland after the revolt"]

                },
                {
                    question: "What sort of figure is Olivier Cromwell in Ireland today?",
                    correctAnswers: ["A controversial figure"],
                    incorrectAnswers: [
                        "A largely popular figure",
                        "A forgotten figure",
                        "A celebrated figure"]
                }
            ]
        },
        {
            question: "Who did the Scots declare to be king after the execution of Charles I?",
            correctAnswers: ["Charles II"],
            incorrectAnswers: ["Oliver Cromwell", "Richard Cromwell", "James I", "Edward I", "Henry VIII", "Elizabeth I", "William the Conqueror"]
        },
        {
            question: "What was the reaction of the Scots to the execution of Charles I?",
            correctAnswers: ["They did not agree to the execution"],
            incorrectAnswers: [
                "They supported the execution",
                "They were indifferent",
                "They negotiated for peace",
                "They declared independence",
                "They joined the Commonwealth",
                "They allied with Parliament"]
        },
        {
            question: "What happened to Charles II soon after he was declared king by the Scots? (Select all that apply)",
            correctAnswers: ["Led a Scottish army into England", "Crowned in Scotland"],
            incorrectAnswers: [
                "Signed a peace treaty with England",
                "Fled to Europe immediately",
                "Held a position in the English Parliament",
                "Established the Commonwealth",
                "Defeated Cromwell in battle",
                "Surrendered to the English forces"]
        },
        {
            question: "Which battles did Cromwell win to defeat Charles II's army? (Select all that apply)",
            correctAnswers: ["The Battle of Dunbar", "The Battle of Worcester"],
            mandatoryIncorrectAnswers: [
                "The Battle of Marston Moor",
                "The Battle of Naesby"],
            incorrectAnswers: [
                "The Battle of Stirling Bridge",
                "The Battle of Bannockburn",
                "The Battle of Flodden Field",
                "The Battle of Culloden",
                "The Battle of Hastings",
                "The Battle of Agincourt",
                "The Battle of Trafalgar"
            ]
        },
        {
            question: "Where did Charles II famously hide during his escape from Worcester?",
            correctAnswers: ["in an oak tree"],
            incorrectAnswers: ["in a castle", "under a bridge", "in a peasant's house", "in a monastery", "in a cave", "in the catacombs", "in a fortress"]
        },
        {
            question: "After escaping from Worcester, where did Charles II do?",
            correctAnswers: ["He fled to Europe"],
            incorrectAnswers: [
                "He joined the Commonwealth",
                "He returned to Scotland",
                "He went into hiding in England",
                "He joined the French army",
                "He joined the Spanish army",
                "He joined the Irish rebels",
            ]
        },
        {
            question: "Who controlled Scotland after the battles of Dunbar and Worcester?",
            correctAnswers: ["The English Parliament"],
            incorrectAnswers: ["The Royalists", "The French Monarchy", "The Spanish Armada", "The Commonwealth Army", "Oliver Cromwell", "The Scottish Parliament"]
        },
        {
            question: "After the battle of Worcester, what parts of the British Isles did Parliament control? (Select all that apply)",
            correctAnswers: ["Scotland", "England", "Wales"],
            incorrectAnswers: ["Ireland"],
            explanation: "The Parliament controlled Scotland, England, and Wales after the battle of Worcester. The Irish revolt was still ongoing and was not fully suppressed until 1653."
        },
        {
            question: "Who was recognised as the leader of the New Republic after the victory over Charles II at Worcester?",
            correctAnswers: ["Oliver Cromwell"],
            incorrectAnswers: ["Richard Cromwell", "Thomas Fairfax", "Henry Ireton", "John Lambert", "Edward Montagu"],
            explanation: "This is a simplification. The New Republic was not officially established until 1653, and Cromwell was not officially recognised as the leader until 1653. However, he was the de facto leader of the Commonwealth after the victory at Worcester."
        },
        {
            questions: [
                {
                    question: "What title was Oliver Cromwell given when he became the leader of the New Republic?",
                    correctAnswers: ["Lord Protector"],
                    incorrectAnswers: ["King of England", "Lord Chancellor", "Prime Minister", "Lord of the Isles", "Duke of Cromwell", "Protector of the Realm", "Supreme Governor"]
                },
                {
                    question: "When did Oliver Cromwell rule as Lord Protector?",
                    correctAnswers: ["Until his death"],
                    incorrectAnswers:
                        [
                            "Until his resignation",
                            "Until the monarchy was restored",
                            "Until he lost a war",
                            "Until he was overthrown",
                            "Until he lost an election"]
                },
            ]
        },
        {
            question: "What became of the title of Lord Protector after Oliver Cromwell?",
            correctAnswers: ["It was inherited by his son, Richard"],
            incorrectAnswers: [
                "It was abolished immediately",
                "It was passed to a military council",
                "It was succeeded by the title of King",
                "It was taken over by the Parliament",
                "It was assumed by Charles II",
                "It was left vacant",
                "It was contested by the Scots"]
        },
        {
            question: "What was Richard Cromwell unable to control after becoming Lord Protector? (Select all that apply)",
            correctAnswers: ["the army", "the government"],
            incorrectAnswers: ["the church", "the economy", "foreign policy", "trade relations", "the legal system", "parliamentary elections"]
        },
        {
            question: "How long had Britain been a republic by the time of Oliver Cromwell's death?",
            correctAnswers: ["11 years"],
            incorrectAnswers: ["10 years", "12 years", "15 years", "20 years", "5 years", "9 years"]
        },
        {
            question: "What was the state of leadership in Britain immediately after Oliver Cromwell's death?",
            correctAnswers: ["There was no clear leader or system of government"],
            incorrectAnswers: [
                "The monarchy was restored",
                "A democratic government was established",
                "The army ruled with a clear system",
                "Parliament had strong control",
                "A new republic was declared"]
        },
        {
            question: "What was a common desire among many people of Britain during the republic period?",
            correctAnswers: ["Stability"],
            incorrectAnswers: [
                "A permanent military rule",
                "A return to Commonwealth",
                "The abolition of monarchy",
                "Total independence from Scotland",
                "Stronger parliamentary control",
                "A new form of government"]
        },
        {
            question: "What did people in Britain begin to discuss after the period of the Commonwealth and Oliver Cromwell's rule?",
            correctAnswers: ["The need for a king"],
            incorrectAnswers: [
                "The need for a new army",
                "The abolition of the monarchy",
                "Establishing a permanent republic",
                "The need for a new Lord Protector",
                "Introducing a presidential system",
                "The need for democratic elections",
                "The need for a new parliament",
                "The continuation of military rule"]
        },
    ];

    let category = {
        name: "Oliver Cromwell and the English Republic",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
