(() => {
    let royalHouses = [
        "The House of Mercia",
        "The House of Wessex",
        "The House of Normandy",
        "The House of Tudor",
        "The House of Stuart",
        "The House of Hanover",
        "The House of Saxe-Coburg and Gotha",
        "The House of Windsor"];

    let symbols = [
        "A golden lion",
        "A white swan",
        "A white unicorn",
        "A purple thistle",
        "A red hand",
        "A golden harp",
        "A fleur-de-lis",
        "A red dragon",
        "A green dragon",
        "A blue boar",
        "A black bull",
        "A white horse",
        "Three lions"];

    let questions = [
        {
            questions: [
                {
                    question: "When did the Wars of the Roses begin?",
                    correctAnswers: ["1455"],
                    mandatoryIncorrectAnswers: ["1485", "1487"],
                    incorrectAnswers: getDates(1215, 1600, [1455, 1485, 1487], false)
                },
                {
                    question: "Where did the Wars of the Roses primarily take place?",
                    correctAnswers: ["England"],
                    incorrectAnswers: [
                        "France",
                        "Scotland",
                        "Ireland",
                        "Wales",
                        "Spain"]
                },
                {
                    question: "What was the war that began in 1455 in England known as?",
                    correctAnswers: ["The Wars of the Roses"],
                    mandatoryIncorrectAnswers: ["The Hundred Years War", "The English Civil War"],
                    incorrectAnswers: famousEnglishWars.filter(war =>
                        war !== "The Wars of the Roses" &&
                        war !== "The Hundred Years War" &&
                        war !== "The English Civil War")
                }
            ]
        },
        {
            question: "What sort of conflict was the Wars of the Roses?",
            correctAnswers: ["A civil war"],
            incorrectAnswers: [
                "A war of conquest",
                "A war of independence",
                "A foreign invasion",
                "A religious war",
                "A crusade"]
        },
        {
            question: "What was the main purpose of the Wars of the Roses?",
            correctAnswers: ["To decide who should be king of England"],
            incorrectAnswers: [
                "To conquer new lands",
                "To reform the church",
                "To resist foreign invasion",
                "To address peasant revolts",
                "To end the practice of feudalism"]
        },
        {
            question: "The supporters of which two houses fought in the Wars of the Roses?",
            correctAnswers: ["The House of Lancaster", "The House of York"],
            incorrectAnswers: royalHouses.filter(house =>
                house !== "The House of Lancaster" &&
                house !== "The House of York" &&
                house !== "The House of Tudor")
        },
        {
            questions: [
                {
                    question: "What was the symbol of the House of Lancaster during the Wars of the Roses?",
                    correctAnswers: ["A red rose"],
                    mandatoryIncorrectAnswers: ["A white rose", "A red rose with a white rose inside it"],
                    incorrectAnswers: symbols.filter(symbol =>
                        symbol !== "A red rose" &&
                        symbol !== "A white rose" &&
                        symbol !== "A red rose with a white rose inside it")
                },
                {
                    question: "Which house used the symbol of a red rose during the Wars of the Roses?",
                    correctAnswers: ["The House of Lancaster"],
                    mandatoryIncorrectAnswers: ["The House of York"],
                    incorrectAnswers: royalHouses.filter(house =>
                        house !== "The House of Lancaster" &&
                        house !== "The House of York")
                },
                {
                    question: "What was the symbol of the House of York during the Wars of the Roses?",
                    correctAnswers: ["A white rose"],
                    mandatoryIncorrectAnswers: ["A red rose", "A red rose with a white rose inside it"],
                    incorrectAnswers: symbols.filter(symbol =>
                        symbol !== "A red rose" &&
                        symbol !== "A white rose" &&
                        symbol !== "A red rose with a white rose inside it")
                },
                {
                    question: "Which house used the symbol of a white rose during the Wars of the Roses?",
                    correctAnswers: ["The House of York"],
                    mandatoryIncorrectAnswers: ["The House of Lancaster"],
                    incorrectAnswers: royalHouses.filter(house =>
                        house !== "The House of Lancaster" &&
                        house !== "The House of York")
                },
                {
                    question: "Why was the Wars of the Roses named so?",
                    correctAnswers: ["Because the symbols of the two houses of main combatants were roses"],
                    incorrectAnswers: [
                        "Because the wars were fought over the control of the rose trade in England",
                        "Because a number of the battles were fought in the rose fields of England",
                        "Because the wars coincided with the blooming season of roses in England, which lasted from May to July",
                        "Because the wars resulted in the death of many prominent nobles, whose blood stained the fields like roses",
                        "Because the wars were likened to the blooming of roses, which are beautiful but have thorns"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "When did the Wars of the Roses end?",
                    correctAnswers: ["1485"],
                    mandatoryIncorrectAnswers: ["1455", "1487"],
                    incorrectAnswers: getDates(1215, 1600, [1485, 1455, 1487], false),
                    explanation: "According to the test, the Battle of Bosworth Field (1485) was the last battle of the Wars of the Roses." +
                        "Though the Battle of Stoke Field (1487) is considered by some to be the last battle, " +
                        "the test does not consider it to be the correct answer."
                },
                {
                    question: "Which battle is considered to be the last battle of the Wars of the Roses?",
                    correctAnswers: ["The Battle of Bosworth Field"],
                    mandatoryIncorrectAnswers: ["The Battle of Tewkesbury"],
                    incorrectAnswers: famousBattles.filter(battle =>
                        battle !== "The Battle of Bosworth Field" &&
                        battle !== "The Battle of Tewkesbury"),
                    explanation: "According to the test, the Battle of Bosworth Field (1485) was the last battle of the Wars of the Roses." +
                        "Though the Battle of Stoke Field (1487) is considered by some to be the last battle, " +
                        "the test does not consider it to be the correct answer."
                },
                {
                    question: "When did the Battle of Bosworth Field take place?",
                    correctAnswers: ["1485"],
                    mandatoryIncorrectAnswers: ["1455", "1487"],
                    incorrectAnswers: getDates(1215, 1600, [1485, 1455, 1487], false)
                },
                {
                    question: "The Battle of Bosworth Field was significant because it...",
                    correctAnswers: ["ended the Wars of the Roses"],
                    incorrectAnswers: [
                        "started the Wars of the Roses",
                        "was a major conflict in the Hundred Years' War",
                        "led to the signing of the Magna Carta",
                        "saw the defeat of the Spanish Armada",
                        "marked the beginning of the English Civil War",
                        "resulted in the establishment of the Church of England",
                        "was a turning point in the War of the Spanish Succession"]
                }
            ]
        },
        {
            question: "To which house did King Richard III belong?",
            correctAnswers: ["The House of York"],
            mandatoryIncorrectAnswers: ["The House of Lancaster", "The House of Tudor"],
            incorrectAnswers: royalHouses.filter(house =>
                house !== "The House of Lancaster" &&
                house !== "The House of York" &&
                house !== "The House of Tudor")
        },
        {
            question: "Which house did Henry Tudor lead in the Wars of the Roses?",
            correctAnswers: ["The House of Lancaster"],
            mandatoryIncorrectAnswers: ["The House of York"],
            incorrectAnswers: royalHouses.filter(house =>
                house !== "The House of Lancaster" &&
                house !== "The House of York" &&
                house !== "The House of Tudor")
        },
        {
            questions: [
                {
                    question: "Who was killed at the Battle of Bosworth Field?",
                    correctAnswers: ["Richard III"],
                    mandatoryIncorrectAnswers: ["Henry Tudor"],
                    incorrectAnswers: [
                        "Harold Godwinson",
                        "Harold Hardrada",
                        "William Wallace",
                        "John Balliol",
                        "John of Gaunt",
                        "Bonnie Prince Charlie",
                        "Edward, the Black Prince",
                        "Edmund Ironside",
                        "Henry Bolingbroke",
                        ...englishMonarchs.filter(monarch =>
                            monarch !== "Richard III" &&
                            monarch !== "Henry VII")
                    ]
                },
                {
                    question: "Who won the Battle of Bosworth Field?",
                    correctAnswers: ["Henry Tudor"],
                    mandatoryIncorrectAnswers: ["Richard III"],
                    incorrectAnswers: [
                        "Harold Godwinson",
                        "Harold Hardrada",
                        "William Wallace",
                        "John Balliol",
                        "John of Gaunt",
                        "Bonnie Prince Charlie",
                        "Edward, the Black Prince",
                        "Edmund Ironside",
                        "Henry Bolingbroke",
                        ...englishMonarchs.filter(monarch =>
                            monarch !== "Richard III" &&
                            monarch !== "Henry VII")
                    ]
                },
                {
                    question: "What was the outcome of the Battle of Bosworth Field in terms of royal succession?",
                    correctAnswers: ["Henry Tudor became King Henry VII"],
                    incorrectAnswers: [
                        "William the Conqueror became King William I",
                        "Empress Matilda became Queen Matilda",
                        "Stephen of Blois became King Stephen",
                        "Henry Bolingbroke became King Henry IV",
                        "James VI of Scotland became King James I of England",
                        "William of Orange became King William III",
                        "George of Hanover became King George I"]
                },
                {
                    question: "Henry Tudor became King Henry VII after which battle?",
                    correctAnswers: ["The Battle of Bosworth Field"],
                    incorrectAnswers: famousBattles.filter(battle =>
                        battle !== "The Battle of Bosworth Field")
                }
            ]
        },
        {
            question: "Who was Elizabeth of York?",
            correctAnswers: ["The niece of Richard III"],
            incorrectAnswers: [
                "The daughter of Richard III",
                "The sister of Richard III",
                "The sister of Henry Tudor",
                "The daughter of Edward V",
                "The daughter of Henry V",
                "The daughter of Henry VI",
                "The sister of Edward IV"]
        },
        {
            questions: [
                {
                    question: "Who did Henry Tudor marry to unite the houses of Lancaster and York?",
                    correctAnswers: ["Elizabeth of York"],
                    incorrectAnswers: [
                        "Eleonore of Aquitaine",
                        "Elizabeth Woodville",
                        "Margaret of Anjou",
                        "Margaret of York",
                        "Catherine de' Medici",
                        "Mary of Guise",
                        "Catherine of Aragon",
                        "Anne Boleyn",
                        "Jane Seymour",
                        "Anne of Cleves",
                        "Catherine Howard",
                        "Catherine Parr",
                    ]
                },
                {
                    question: "Who did Elizabeth of York marry to unite the houses of Lancaster and York?",
                    correctAnswers: ["Henry Tudor"],
                    incorrectAnswers: [
                        "Harold Godwinson",
                        "Harold Hardrada",
                        "William Wallace",
                        "John Balliol",
                        "John of Gaunt",
                        "Bonnie Prince Charlie",
                        "Edward, the Black Prince",
                        "Edmund Ironside",
                        "Henry Bolingbroke",
                        ...englishMonarchs.filter(monarch =>
                            monarch !== "Henry VII" &&
                            monarch !== "Mary I" &&
                            monarch !== "Elizabeth I")
                    ]
                },
                {
                    question: "What was the significance of the marriage of Henry Tudor and Elizabeth of York?",
                    correctAnswers: ["It united the houses of Lancaster and York"],
                    incorrectAnswers: [
                        "It ended the Wars of the Roses",
                        "It led to the signing of the Magna Carta",
                        "It led to the establishment of the Church of England",
                        "It was a turning point in the War of the Spanish Succession",
                        "It led to an alliance with Spain",
                    ],
                    explanation: "Although the marriage of Henry Tudor and Elizabeth of York did not end the Wars of the Roses," +
                        "it did unite the houses of Lancaster and York."
                }
            ]
        },
        {
            question: "Who was the first Tudor monarch?",
            correctAnswers: ["Henry VII"],
            incorrectAnswers: englishMonarchs.filter(monarch => monarch !== "Henry VII")
        },
        {
            question: "What did the House of Tudor symbolize with their emblem?",
            correctAnswers: ["That the Houses of Lancaster and York were now allies"],
            incorrectAnswers: [
                "The victory of the House of Lancaster",
                "The defeat of the House of York",
                "The continuation of the House of Plantagenet",
                "The strength of the House of Windsor",
                "The dominance of the House of Stuart",
                "The legacy of the House of Normandy"]
        },
        {
            question: "What was the symbol of the House of Tudor?",
            correctAnswers: ["A red rose with a white rose inside it"],
            mandatoryIncorrectAnswers: ["A red rose", "A white rose"],
            incorrectAnswers: symbols.filter(symbol =>
                symbol !== "A red rose" &&
                symbol !== "A white rose" &&
                symbol !== "A red rose with a white rose inside it")
        }
    ];

    let category = {
        name: "The Wars of the Roses",
        questions: questions,
        group: "The Middle Ages"
    }

    quizDeck.categories.push(category);
})();
