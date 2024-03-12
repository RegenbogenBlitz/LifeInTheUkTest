(() => {
    let questions = [
        {
            question: "What is a monarch?",
            correctAnswers: ["The king or queen of a country"],
            incorrectAnswers: [
                "The leader of a political party",
                "A president or prime minister of a country",
                "The head of a church",
                "The head of the army",
                "The head of the police",
                "The head of the judiciary",
                "The head of the civil service",
            ]
        },
        {
            questions: [
                { // KEY QUESTION
                    question: "In what year did the Battle of Hastings take place?",
                    correctAnswers: ["1066"],
                    incorrectAnswers: getDates(476, 1485, [1066], false)
                },
                {
                    question: "What battle took place in 1066?",
                    correctAnswers: ["The Battle of Hastings"],
                    incorrectAnswers: famousBattles.filter(battle => battle !== "The Battle of Hastings")
                },
                {
                    question: "What significant event took place in 1066?",
                    correctAnswers: ["The Battle of Hastings"],
                    incorrectAnswers: [
                        "The Roman invasion of Britain",
                        "The Roman withdrawal from Britain",
                        "The Anglo-Saxon invasion of Britain",
                        "The Viking invasion of Britain"
                    ]
                },
                {
                    question: "What event was sealed by the Battle of Hastings?",
                    correctAnswers: ["The Norman conquest of England"],
                    incorrectAnswers: [
                        "The Roman conquest of Britain",
                        "The Roman withdrawal from Britain",
                        "The Anglo-Saxon conquest of Britain",
                        "The Viking conquest of Britain"
                    ]
                }
            ]
        },
        {
            question: "Where is Normandy?",
            correctAnswers: ["northern France"],
            incorrectAnswers: [
                "southern France",
                "eastern France",
                "western France",
                "southern England",
                "eastern England",
                "western England",
                "northern England",
                "southern Scotland",
                "eastern Scotland",
                "western Scotland",
                "northern Scotland",
                "southern Wales",
                "eastern Wales",
                "western Wales",
                "northern Wales",
                "southern Ireland",
                "eastern Ireland",
                "western Ireland",
                "northern Ireland",
                "southern Germany",
                "eastern Germany",
                "western Germany",
                "northern Germany"
            ]
        },
        {
            questions: [
                {
                    question: "An invasion of England at the Battle of Hastings was led by a man called William. What was his title?",
                    correctAnswers: ["Duke of Normandy"],
                    incorrectAnswers: [
                        "Prince of Normandy",
                        "Earl of Normandy",
                        "Prince of Wales",
                        "Earl of Wessex",
                        "Duke of Burgundy",
                        "Prince of Gascony",
                        "Earl of Aquitaine",
                        "Duke of Brittany",
                        "Prince of Brittany",
                        "Duke of Saxony",
                        "King of Hanover",
                        "King of Bavaria",
                        "King of Prussia",
                        "King of the Franks",
                        "King of France"
                    ]
                },
                {
                    question: "An invasion of England at the Battle of Hastings was led by the Duke of Normandy. What was his name?",
                    correctAnswers: ["William"],
                    mandatoryIncorrectAnswers: ["Harold"],
                    incorrectAnswers: [
                        "Edward",
                        "Henry",
                        "Richard",
                        "John",
                        "Stephen",
                        "Geoffrey",
                        "George"
                    ]
                },
                {
                    question: "Who led the invasion of England at the Battle of Hastings?",
                    correctAnswers: ["William, Duke of Normandy"],
                    mandatoryIncorrectAnswers: ["Harold, King of England"],
                    incorrectAnswers: [
                        "Henry Plantagenet",
                        "Alfred the Great",
                        "Richard the Lionheart",
                        "Richard, Duke of York",
                        "Edward, Duke of Lancaster",
                        "Charles the Bald",
                        "William Rufus",
                        "Henry Bolingbroke",
                        "Henry Tudor",
                        "William of Orange",
                        "Bonnie Prince Charlie",
                        "William Wallace",
                        "Robert the Bruce"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who defended England against an invasion at the Battle of Hastings?",
                    correctAnswers: ["Harold, King of England"],
                    mandatoryIncorrectAnswers: ["William, Duke of Normandy"],
                    incorrectAnswers: [
                        "Henry Plantagenet",
                        "Alfred the Great",
                        "Richard the Lionheart",
                        "Richard, Duke of York",
                        "Edward, Duke of Lancaster",
                        "Charles the Bald",
                        "William Rufus",
                        "Henry Bolingbroke",
                        "Henry Tudor",
                        "William of Orange",
                        "Bonnie Prince Charlie",
                        "William Wallace",
                        "Robert the Bruce"
                    ]
                },
                {
                    question: "What was his name of the king of England who defended England against an invasion at the Battle of Hastings?",
                    correctAnswers: ["Harold"],
                    mandatoryIncorrectAnswers: ["William"],
                    incorrectAnswers: [
                        "Edward",
                        "Henry",
                        "Richard",
                        "John",
                        "Stephen",
                        "Geoffrey",
                        "George"
                    ]
                },
                {
                    question: "An invasion of England at the Battle of Hastings was defended by a man called Harold. What was his title?",
                    correctAnswers: ["A Saxon king of England"],
                    incorrectAnswers: [
                        "A Norman duke",
                        "A Viking king of England",
                        "A Danish king",
                        "A Saxon earl",
                        "A Norman earl",
                        "A Roman emperor",
                        "A Celtic chief",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Harold was killed at the Battle of Hastings. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Harold survived the Battle of Hastings and then became King of England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "Harold lost the Battle of Hastings. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Harold won the Battle of Hastings and then became King of England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "William survived the Battle of Hastings and then became King of England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "William was killed at the Battle of Hastings. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "William won the Battle of Hastings and then became King of England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "William lost the Battle of Hastings. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            question: "What is William, who won the Battle of Hastings, known as?",
            correctAnswers: ["William the Conqueror"],
            incorrectAnswers: [
                "William Rufus",
                "William of Orange",
                "William Longshanks",
                "William the Great",
                "William the Confessor",
                "William the Unready",
                "St. William of Normandy"
            ]
        },
        { // KEY QUESTION
            question: "The Bayeux Tapestry was created during the reign of which monarch?",
            correctAnswers: ["William I"],
            incorrectAnswers: preNormanMonarchs.concat(englishMonarchs.filter(monarch => monarch !== "William I"))
        },
        {
            questions: [
                {
                    question: "How is the Battle of Hastings most famously commemorated?",
                    correctAnswers: ["The Bayeux Tapestry"],
                    incorrectAnswers: [
                        "The Cenotaph",
                        "The Angel of the North",
                        "Stonehenge",
                        "Fireworks on Bonfire Night",
                        "The Monument"
                    ]
                },
                {
                    question: "What does the Bayeux Tapestry show?",
                    correctAnswers: ["The Battle of Hastings"],
                    incorrectAnswers: famousBattles.filter(battle => battle !== "The Battle of Hastings"),
                },
            ]
        },
        {
            question: "What does 'commemorate' mean?",
            correctAnswers: ["Show that something or someone is remembered"],
            incorrectAnswers: [
                "Ensure that something or someone is protected",
                "Demonstrate that something or someone is understood",
                "Prove that something or someone is discovered",
                "Record that something or someone has died",
                "Recount that something or someone was seen"]
        },
        {
            questions: [
                {
                    question: "Where is the Bayeux Tapestry?",
                    correctAnswers: ["In France"],
                    incorrectAnswers: [
                        "In England",
                        "In Scotland",
                        "In Wales",
                        "In Northern Ireland",
                        "In the Republic of Ireland",
                        "In the USA",
                        "In Germany"
                    ]
                },
                {
                    question: "The Bayeux Tapestry can be seen in France today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Bayeux Tapestry was destroyed centuries ago. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Bayeux Tapestry can be seen in France today."
                },
            ]
        },
        {
            questions: [
                {
                    question: "What is the Bayeux Tapestry?",
                    correctAnswers: ["A piece of embroidery"],
                    incorrectAnswers: [
                        "A painting",
                        "A sculpture",
                        "A photograph",
                        "A poem",
                        "A mosaic",
                        "A stained glass window",
                        "A fresco",
                        "A carpet",
                        "A piece of knitting",
                        "A piece of crochet",
                        "A piece of lace"
                    ]
                },
                {
                    question: "How long is the Bayeux Tapestry?",
                    correctAnswers: ["Nearly 70 metres (230 feet)"],
                    incorrectAnswers: [
                        "Nearly 30 metres (98 feet)",
                        "Nearly 40 metres (131 feet)",
                        "Nearly 50 metres (164 feet)",
                        "Nearly 60 metres (197 feet)",
                        "Nearly 80 metres (262 feet)",
                        "Nearly 90 metres (295 feet)",
                        "Nearly 100 metres (328 feet)"
                    ]
                },
                {
                    question: "What is the Bayeux Tapestry made of?",
                    correctAnswers: ["Linen cloth"],
                    incorrectAnswers: [
                        "Wool cloth",
                        "Cotton cloth",
                        "Silk cloth",
                        "Hemp cloth"
                    ]
                },
                {
                    question: "What is the Bayeux Tapestry embroidered with?",
                    correctAnswers: ["Coloured Wool"],
                    incorrectAnswers: [
                        "Coloured Linen",
                        "Coloured Cotton",
                        "Coloured Silk",
                        "Coloured Hemp",
                        "Gold",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Norman Conquest was the last successful foreign invasion of England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "According to the test, this is true. However, the glourious revolution of 1688 was also a foreign invasion of England, and it was successful."
                },
                {
                    question: "The Norman Conquest was NOT the last successful foreign invasion of England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "According to the test, this is true. However, the glourious revolution of 1688 was also a foreign invasion of England, and it was successful."
                },
            ]
        },
        {
            question: "What did the Norman Conquest lead to in England? (Select all that apply)",
            correctAnswers: ["Changes in government", "Changes in social structures"],
            incorrectAnswers: [
                "Prosperty for all",
                "Protestantism",
                "Universal literacy",
                "Peace and harmony",
                "Little change",
                "The end of the feudal system",
                "The end of the monarchy",
            ]
        },
        {
            questions: [
                {
                    question: "What was the language of the new ruling class after the Norman Conquest?",
                    correctAnswers: ["Norman French"],
                    incorrectAnswers: [
                        "Saxon English",
                        "Old Welsh",
                        "Pictish Scottish",
                        "Southern Irish",
                        "Vulgar Latin",
                        "High German",
                        "Castillian Spanish",
                    ]
                },
                {
                    question: "Norman French, the language of the new ruling class, influenced the development of the English language as we know it today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "Norman French, the language of the new ruling class, had little effect on the English language. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                }
            ]
        },
        {
            questions: [
                {
                    question: "Initially the Normans also conquered Wales, but the Welsh gradually won territory back. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Normans also conquered and held Wales. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Initially the Normans also conquered Wales, but the Welsh gradually won territory back."
                },
                {
                    question: "The Normans never conquered Wales. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Initially the Normans also conquered Wales, but the Welsh gradually won territory back."
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Normans never conquered Scotland. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
                },
                {
                    question: "The Scots and the Normans fought on the border between England and Scotland. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
                },
                {
                    question: "The Normans took over some land on the border of England and Scotland, but did not invade Scotland. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
                },
                {
                    question: "Initially the Normans also conquered Scotland, but the Scots gradually won territory back. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
                },
                {
                    question: "The Normans also conquered and held Scotland. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Scots and the Normans fought on the border between England and Scotland; the Normans took over some land on the border but did not invade Scotland."
                },
            ]
        },
        {
            questions: [
                { // KEY QUESTION
                    question: "The Doomsday Book was created during the reign of which monarch?",
                    correctAnswers: ["William I"],
                    incorrectAnswers: preNormanMonarchs.concat(englishMonarchs.filter(monarch => monarch !== "William I"))
                },
                {
                    question: "William sent people all over England to draw up lists of all the towns and villages. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Domesday Book was a list of all the towns and villages in England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "William sent people all over England to draw up lists for the Domesday Book. What were they drawing up lists of? (Select all that apply)",
                    correctAnswers: ["towns", "villages", "people", "land ownership", "animal ownership"],
                    incorrectAnswers: [
                        "rivers",
                        "mountains",
                        "forests",
                        "roads",
                        "bridges",
                        "valleys",
                        "ancient monuments"
                    ]
                },
                {
                    question: "William sent people all over England to draw up lists of all the towns and villages. What document were these collected in?",
                    correctAnswers: ["the Domesday Book"],
                    incorrectAnswers: [
                        "the Great Census",
                        "William's Survey",
                        "the Judgement Day chronicle",
                        "the Final Reckoning",
                    ],
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Domesday Book still exists today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
                {
                    question: "The Domesday Book was destroyed centuries ago. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                },
            ]
        },
        {
            question: "The Domesday Book gives a picture of society in England just after what event?",
            correctAnswers: ["The Norman conquest of England"],
            incorrectAnswers: [
                "The Roman conquest of Britain",
                "The Roman withdrawal from Britain",
                "The Anglo-Saxon conquest of Britain",
                "The Viking conquest of Britain"
            ]
        }
    ];

    let category = {
        name: "The Norman Conquest",
        questions: questions,
        group: "Early Britain"
    }
    quizDeck.categories.push(category);
})();
