(() => {
    let questions = [
        {
            questions: [
                {
                    question: "What is another name for the Middle Ages?",
                    correctAnswers: ["The Medieval period"],
                    incorrectAnswers: namesOfAges.filter(age => age !== "The Middle Ages")
                },
                {
                    question: "What is another name for the Medieval period?",
                    correctAnswers: ["The Middle Ages"],
                    incorrectAnswers: namesOfAges.filter(age => age !== "The Middle Ages")
                }
            ]
        },
        {
            questions: [
                {
                    question: "When did the Middle Ages begin?",
                    correctAnswers: ["476"],
                    mandatoryIncorrectAnswers: ["410"],
                    incorrectAnswers: getDates(43, 1485, [476, 410], false)
                },
                {
                    question: "What event started the Middle Ages?",
                    correctAnswers: ["The fall of the Roman Empire"],
                    incorrectAnswers: [
                        "The invasion of the Anglo-Saxons",
                        "The invasion of the Vikings",
                        "The founding of the Holy Roman Empire",
                        "The invasion of the Normans",
                        "The fall of the Byzantine Empire",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "When did the Middle Ages end in England?",
                    correctAnswers: ["1485"],
                    incorrectAnswers: getDates(1066, 1750, [1485], false)
                },
                {
                    question: "What event ended the Middle Ages in England?",
                    correctAnswers: ["The Battle of Bosworth Field"],
                    incorrectAnswers: [
                        "The invasion of the Normans",
                        "The signing of the Magna Carta",
                        "The Battle of Agincourt",
                        "The fall of the Byzantine Empire",
                        "The establishment of the Church of England",
                        "The English Civil War",
                    ]
                }
            ]
        },
        {
            question: "Roughly how long did the Middle Ages last?",
            correctAnswers: ["1000 years"],
            incorrectAnswers: [
                "500 years",
                "600 years",
                "700 years",
                "800 years",
                "900 years",
                "1100 years",
                "1200 years",
                "1300 years",
                "1400 years",
                "1500 years"
            ]
        },
        {
            questions: [
                {
                    question: "The Middle Ages were a time of almost constant what?",
                    correctAnswers: ["War"],
                    incorrectAnswers: ["Peace"]
                },
                {
                    question: "The Middle Ages were a time of almost constant war? True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Middle Ages were a time of almost constant peace? True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "During the Middle Ages, which noblemen did the English kings fight against for control of their lands? (Select all that apply)",
            correctAnswers: ["Welsh", "Scottish", "Irish"],
            incorrectAnswers: [
                "Spanish",
                "German",
                "Italian",
                "Roman",
                "Greek",
                "Portuguese",
                "Polish",
            ],
            explanation: "They also fought against the French, the Normans, and the Vikings."
        },
        {
            questions: [
                {
                    question: "The entirety of which country's rule was established by the English in the Middle Ages?",
                    correctAnswers: ["Wales"],
                    mandatoryIncorrectAnswers: ["Scotland", "Ireland"],
                    incorrectAnswers: europeanCountries.filter(country =>
                        country !== "Wales" &&
                        country !== "England" &&
                        country !== "Scotland" &&
                        country !== "Ireland" &&
                        country !== "The United Kingdom" &&
                        country !== "The Republic of Ireland")
                },
                {
                    question: "By the end of the Middle Ages, the English were able to establish their rule in all of Wales. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "By the end of the Middle Ages, the English were able to establish their rule in only part of Wales. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "By the end of the Middle Ages, the English were able to establish their rule in all of Wales."
                },
                {
                    question: "By the end of the Middle Ages, the English were UNABLE to establish their rule in Wales. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "By the end of the Middle Ages, the English were able to establish their rule in all of Wales."
                }
            ]
        },
        {
            question: "In what year did the English king introduce the Statute of Rhuddlan?",
            correctAnswers: ["1284"],
            incorrectAnswers: getDates(1066, 1485, [1284], false)
        },
        {
            question: "Which English monarch introduced the Statute of Rhuddlan?",
            correctAnswers: ["Edward I"],
            incorrectAnswers: englishMonarchs.filter(monarch => monarch !== "Edward I")
        },
        {
            question: "Does annexed mean?",
            correctAnswers: ["Joined"],
            incorrectAnswers: ["Separated", "Divided", "Destroyed", "Rebuilt", "Repaired", "Replaced", "Reunited", "Reorganized", "Reformed"]
        },
        {
            questions: [
                {
                    question: "What was the main effect of the Statute of Rhuddlan?",
                    correctAnswers: ["It annexed Wales to the Crown of England"],
                    incorrectAnswers: [
                        "It granted independence to Scotland",
                        "It established English rule over the Pale in Ireland",
                        "It marked the end of the Hundred Years' War",
                        "It began the Crusades",
                        "It recognized the independence of the Welsh",
                        "It was a declaration of war against France"
                    ]
                },
                {
                    question: "What region was annexed to the Crown of England as a result of the Statute of Rhuddlan?",
                    correctAnswers: ["Wales"],
                    incorrectAnswers: ["Scotland", "Ireland", "The Pale", "Brittany", "Normandy", "Aquitaine"]
                },
                {
                    question: "What was the name of the law that annexed Wales to the Crown of England in 1284?",
                    correctAnswers: ["The Statute of Rhuddlan"],
                    mandatoryIncorrectAnswers: ["The Magna Carta"],
                    incorrectAnswers: [
                        "The Statute of Westminster",
                        "The Statute of Rutland",
                        "The Act of Wales",
                        "The Act of Union",
                        "The Annexation Proclamation",
                        "The Bill of Supremacy",
                    ]
                }
            ]
        },
        {
            question: "Name some castles built by the English in Wales during the Middle Ages. (Name at least 2)",
            minimumCorrectAnswers: 2,
            correctAnswers: ["Conwy", "Caernarvon"],
            furtherCorrectAnswers: [
                "Beaumaris",
                "Flint",
                "Harlech",
                "Rhuddlan",
                "Builth",
                "Aberystwyth",
                "Caerphilly",
                "Cardiff"
            ],
            incorrectAnswers: [
                "Dover",
                "Windor",
                "Warwick",
                "Leeds",
                "Chester",
                "Barnard",
                "Bodiam",
                "Alnwick",
                "Balmoral",
                "Stirling",
                "Urquhart",
                "Glamis",
                "Brodick",
                "Ashford",
                "Blarney",
                "Kilkenny",
                "Bunratty",
                "Cahir",
                "Dunluce",
            ]
        },
        {
            questions: [
                {
                    question: "What did the English build in Wales as a primary means to maintain their power after annexing it to the Crown of England?",
                    correctAnswers: ["Huge castles"],
                    incorrectAnswers: [
                        "Large cathedrals",
                        "Significant monasteries",
                        "Royal palaces",
                        "Market towns",
                        "Esteemed universities",
                        "Important hospitals",
                        "Great monuments",
                    ]
                },
                {
                    question: "During the Middle Ages, how did the English strengthen their control over Wales?",
                    correctAnswers: ["By building huge castles"],
                    incorrectAnswers: [
                        "By signing peace treaties",
                        "By granting independence",
                        "Through marriage alliances",
                        "By establishing religious missions",
                        "By organizing trade agreements",
                        "By leading crusades"
                    ]
                },
                {
                    question: "What was the purpose of building huge castles such as Conwy and Caernarvon?",
                    correctAnswers: ["To maintain English power in Wales"],
                    incorrectAnswers: [
                        "To defend against Viking invasions",
                        "To serve as royal residences",
                        "To establish universities",
                        "To promote trade with the Welsh",
                        "To host parliaments",
                        "To protect against Scottish invasions"
                    ]
                },
                {
                    question: "During which historical period were the castles of Conwy and Caernarvon built?",
                    correctAnswers: ["The Middle Ages"],
                    incorrectAnswers: namesOfAges.filter(age => age !== "The Middle Ages")
                }
            ]
        },
        {
            question: "What is a 'rebellion'?",
            correctAnswers: ["Organised fighting against a government"],
            incorrectAnswers: [
                "Diplomatic negotiations with a country",
                "Displays of public affection to a ruler",
                "Solemn praying in a monastery",
                "Enthusiastic singing at a festival",
                "Magnificent jousting at a tournament"
            ]
        },
        {
            questions: [
                {
                    question: "When were the last Welsh rebellions against the English defeated?",
                    correctAnswers: ["middle of the 15th century"],
                    incorrectAnswers: [
                        "beginning of the 12th century",
                        "middle of the 12th century",
                        "end of the 12th century",
                        "beginning of the 13th century",
                        "middle of the 13th century",
                        "end of the 13th century",
                        "beginning of the 14th century",
                        "middle of the 14th century",
                        "end of the 14th century",
                        "beginning of the 15th century"
                    ]
                },
                {
                    question: "By the mid-15th century, what had happened to Welsh rebellions against English rule?",
                    correctAnswers: ["They had been defeated"],
                    incorrectAnswers: [
                        "They had achieved independence for Wales",
                        "They had grown stronger",
                        "They had started the Hundred Years War",
                        "They had led to the Battle of Agincourt",
                        "They had taken control of the English crown",
                        "They had resulted in a permanent alliance with Scotland"
                    ]
                },
                {
                    question: "What was the status of Welsh rebellions by the middle of the 15th century?",
                    correctAnswers: ["Defeated"],
                    incorrectAnswers: [
                        "Ongoing",
                        "Just beginning",
                        "At their peak",
                        "Non-existent",
                        "Largely ignored",
                        "Being negotiated"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The English introduced English laws and the English language to Wales during the Middle Ages. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Wales during the Middle Ages maintained its own laws and remained entirely Welsh speaking. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The English introduced English laws and the English language to Wales during the Middle Ages."
                }
            ]
        },
        {
            question: "Which of the following is true regarding the relative success of the English in Wales and in Scotland during the Middle Ages?",
            correctAnswers: ["The English were less in Scotland than in Wales"],
            incorrectAnswers: [
                "The English were more successful in Scotland than in Wales",
                "The English were equally successful in Scotland and in Wales"
            ]
        },
        { // KEY QUESTION
            questions: [
                {
                    question: "When was the Battle of Bannockburn?",
                    correctAnswers: ["1314"],
                    incorrectAnswers: getDates(1066, 1485, [1314], false)
                },
                {
                    question: "What was the name of the battle in which the Scots fought the English in 1314?",
                    correctAnswers: ["The Battle of Bannockburn"],
                    mandatoryIncorrectAnswers: ["The Battle of Colloden"],
                    incorrectAnswers: famousBattles.filter(battle =>
                        battle !== "The Battle of Bannockburn" &&
                        battle !== "The Battle of Colloden")
                }
            ]
        },
        { // KEY QUESTION
            question: "Who led the victorious side at the Battle of Bannockburn?",
            correctAnswers: ["Robert the Bruce"],
            mandatoryIncorrectAnswers: ["William Wallace", "Edward II"],
            incorrectAnswers: [
                ...scottishMonarchs.filter(monarch => monarch !== "Robert the Bruce"),
                ...englishMonarchs.filter(monarch => monarch !== "Edward II")
            ]
        },
        {
            questions: [ // KEY QUESTION
                {
                    question: "Who won at the Battle of Bannockburn?",
                    correctAnswers: ["The Scots"],
                    mandatoryIncorrectAnswers: ["The English"],
                    incorrectAnswers: [
                        "The French",
                        "The Irish",
                        "The Welsh",
                        "The Vikings"
                    ]
                },
                {
                    question: "What was the outcome of the Battle of Bannockburn?",
                    correctAnswers: ["Scotland remained unconquered by the English"],
                    incorrectAnswers: [
                        "Scotland was annexed to the Crown of England",
                        "Scotland became a fully integrated part of England",
                        "Scotland was divided into English-controlled territories",
                        "Scotland became an independent country",
                        "Scotland was divided into English and Scottish territories",
                        "Scotland was under shared rule by England and France",
                        "Scotland was a fully integrated part of the English kingdom",
                        "Scotland became a republic"
                    ]
                }
            ]
        },
        {
            question: "What was the outcome of the English kings' attempts to control Scotland during the Middle Ages?",
            correctAnswers: ["Scotland remained unconquered by the English"],
            incorrectAnswers: [
                "Scotland was annexed to the Crown of England",
                "Scotland became a fully integrated part of England",
                "Scotland was divided into English-controlled territories",
                "Scotland became an independent country",
                "Scotland was divided into English and Scottish territories",
                "Scotland was under shared rule by England and France",
                "Scotland was a fully integrated part of the English kingdom",
                "Scotland became a republic"
            ]
        },
        {
            question: "What was the political status of Ireland at the beginning of the Middle Ages?",
            correctAnswers: ["Ireland was an independent country"],
            incorrectAnswers: [
                "Ireland was ruled by the English",
                "Ireland was a French territory",
                "Ireland was part of the Holy Roman Empire",
                "Ireland was under the control of the Welsh",
                "Ireland was a colony of the Norse",
                "Ireland was a federated state of Scotland"
            ]
        },
        {
            questions: [
                {
                    question: "Why did the English first go to Ireland in the Middle Ages?",
                    correctAnswers: ["As troops, to help the Irish king"],
                    incorrectAnswers: [
                        "To conquer the Irish lands",
                        "To establish trade routes",
                        "To join the Crusades",
                        "To escape a famine in England",
                        "To support the Scottish in battle",
                        "To explore uncharted territories",
                        "To attend a diplomatic summit"
                    ]
                },
                {
                    question: "After helping the Irish king in the Middle Ages, what did the English then do?",
                    correctAnswers: ["Remained to build their own settlements"],
                    incorrectAnswers: [
                        "Left immediately to return to England",
                        "Continued to fight against the French",
                        "Traveled to the Holy Land for a Crusade",
                        "Set sail to discover the New World",
                        "Assisted the Scottish against the English",
                        "Joined forces with the Welsh",
                        "Went to support the Flemish in their conflict"
                    ]
                }
            ],
        },
        {
            questions: [
                {
                    question: "What was the area around Dublin ruled by the English in 1200 known as?",
                    correctAnswers: ["the Pale"],
                    incorrectAnswers: [
                        "the Gael",
                        "the Crown",
                        "the Highlands",
                        "the Marches",
                        "the Territory",
                        "the Dominion"]
                },
                {
                    question: "By the start of which century did the English rule an area of Ireland known as the Pale, around Dublin?",
                    correctAnswers: ["the 1200s"],
                    incorrectAnswers: [
                        "the 800s",
                        "the 900s",
                        "the 1000s",
                        "the 1100s",
                        "the 1300s",
                        "the 1400s",
                        "the 1500s"
                    ]
                },
                {
                    question: "Around which city did the English rule an area of Ireland known as the Pale?",
                    correctAnswers: ["Dublin"],
                    incorrectAnswers: [
                        "Belfast",
                        "Cork",
                        "Limerick",
                        "Galway",
                        "Waterford",
                        "Kilkenny"
                    ]
                },
                {
                    question: "What was the significance of the area in Ireland called the Pale in 1200?",
                    correctAnswers: ["It was an area of Ireland ruled by the English"],
                    incorrectAnswers: [
                        "It was an independent Irish kingdom",
                        "It was the site of a major battle against the Vikings",
                        "It was a French-controlled territory",
                        "It was a neutral zone between English and Irish forces",
                        "It was the capital of the Norman Conquest",
                        "It was a religious sanctuary during the Crusades"]
                }
            ]
        },
        {
            question: "What was the status of Ireland around the year 1200?",
            correctAnswers: ["Partially under English rule"],
            incorrectAnswers: [
                "Fully independent",
                "Completely under French rule",
                "A vassal state of Scotland",
                "Occupied by Viking forces",
                "Under the control of the Holy Roman Empire",
                "A colony of Wales"]
        },
        {
            question: "During the Middle Ages, what was the relationship between some Irish lords and the English king?",
            correctAnswers: ["Some Irish lords accepted the authority of the English king"],
            incorrectAnswers: [
                "All Irish lords rejected the authority of the English king",
                "No Irish lords recognized the English king's authority",
                "Irish lords formed an alliance to overthrow the English king",
                "Irish lords never interacted with the English king",
                "The English king had no influence in Ireland",
                "Irish lords were at constant war with the English king"
            ]
        },
        {
            question: "Which of the following statements correctly describes the English kings' military engagements during the Middle Ages?",
            correctAnswers: ["The English kings fought a number of wars abroad"],
            incorrectAnswers: [
                "The English kings focused solely on domestic matters and did not fight abroad",
                "The English kings only fought the Crusades and no other wars abroad",
                "The English kings fought exclusively against the French during the Middle Ages",
                "The English kings maintained peace treaties with all foreign countries",
                "The English kings only provided military support to other countries, without engaging in wars"
            ]
        },
        {
            question: "Which of the following statements most correctly describes the number of knights who took part in the Crusades?",
            correctAnswers: ["Many knights took part in the Crusades"],
            incorrectAnswers: [
                "Only a few knights took part in the Crusades",
                "No knights took part in the Crusades"
            ]
        },
        {
            question: "What primary role did knights play in the Crusades?",
            correctAnswers: ["They took part in the military campaigns"],
            incorrectAnswers: [
                "They served as diplomats",
                "They were merchants",
                "They acted as scouts",
                "They provided medical support",
                "They were chroniclers and scribes",
                "They functioned as shipbuilders"
            ]
        },
        {
            question: "Who were the main participants in the Crusades?",
            correctAnswers: ["European Christians"],
            incorrectAnswers: [
                "Norse Vikings",
                "Roman Legions",
                "Islamic Caliphates",
                "Byzantine Empire",
                "Mongol Hordes",
                "Celtic Warriors"]
        },
        {
            question: "What was the primary objective of the Crusades?",
            correctAnswers: ["Control of the Holy Land"],
            incorrectAnswers: [
                "Conquest of the entire Middle East",
                "Expansion of the Roman Empire",
                "Colonization of North America",
                "Control of the trade routes to Asia",
                "Annexation of the Scottish Highlands",
                "Spread of Christianity to the Far East"]
        },
        {
            questions: [
                {
                    question: "What was the long conflict between England and France during the Middle Ages known as?",
                    correctAnswers: ["The Hundred Years War"],
                    mandatoryIncorrectAnswers: ["The War of the Roses", "The Crusades"],
                    incorrectAnswers: famousEnglishWars.filter(war =>
                        war !== "The Hundred Years War" &&
                        war !== "The War of the Roses" &&
                        war !== "The Crusades")
                },
                {
                    question: "The Hundred Years War was fought between which countries? (Select all that apply)",
                    correctAnswers: ["England", "France"],
                    incorrectAnswers: [
                        "Scotland",
                        "Wales",
                        "Ireland",
                        ...europeanCountries.filter(country =>
                            country !== "England" &&
                            country !== "Scotland" &&
                            country !== "Wales" &&
                            country !== "Ireland" &&
                            country !== "The United Kingdom" &&
                            country !== "The Republic of Ireland" &&
                            country !== "France")
                    ]
                }
            ]
        },
        {
            question: "Despite its name, how long did the Hundred Years War actually last?",
            correctAnswers: ["116 years"],
            mandatoryIncorrectAnswers: ["100 years"],
            incorrectAnswers: Array.from({ length: 31 }, (_, i) => i + 100).filter(year => year !== 116 && year !== 100).map(year => year + " years")
        },
        {
            question: "When was the Battle of Agincourt?",
            correctAnswers: ["1415"],
            incorrectAnswers: getDates(1066, 1485, [1415], false)
        },
        {
            question: "The Battle of Agincourt was a part of which larger conflict?",
            correctAnswers: ["The Hundred Years War"],
            mandatoryIncorrectAnswers: ["The War of the Roses", "The Crusades"],
            incorrectAnswers: famousEnglishWars.filter(war =>
                war !== "The Hundred Years War" &&
                war !== "The War of the Roses" &&
                war !== "The Crusades")
        },
        {
            question: "The Battle of Agincourt was fought between which countries? (Select all that apply)",
            correctAnswers: ["England", "France"],
            incorrectAnswers: [
                "Scotland",
                "Wales",
                "Ireland",
                ...europeanCountries.filter(country =>
                    country !== "England" &&
                    country !== "Scotland" &&
                    country !== "Wales" &&
                    country !== "Ireland" &&
                    country !== "The United Kingdom" &&
                    country !== "The Republic of Ireland" &&
                    country !== "France")
            ]
        },
        {
            questions: [
                {
                    question: "Who achieved a significant victory at the Battle of Agincourt?",
                    correctAnswers: ["England"],
                    mandatoryIncorrectAnswers: ["France"],
                    incorrectAnswers: [
                        "Scotland",
                        "Wales",
                        "Ireland",
                        ...europeanCountries.filter(country =>
                            country !== "England" &&
                            country !== "Scotland" &&
                            country !== "Wales" &&
                            country !== "Ireland" &&
                            country !== "The United Kingdom" &&
                            country !== "The Republic of Ireland" &&
                            country !== "France")
                    ]
                },
                {
                    question: "Which English monarch achieved a significant victory at the Battle of Agincourt?",
                    correctAnswers: ["Henry V"],
                    incorrectAnswers: englishMonarchs.filter(monarch => monarch !== "Henry V")
                },
                {
                    question: "Which famous battle during the Hundred Years War saw King Henry V's army decisively defeat the French?",
                    correctAnswers: ["The Battle of Agincourt"],
                    incorrectAnswers: famousBattles.filter(battle => battle !== "The Battle of Agincourt")
                },
            ]
        },
        {
            question: "Whose army was vastly outnumbered during the Battle of Agincourt?",
            correctAnswers: ["England"],
            mandatoryIncorrectAnswers: ["France"],
            incorrectAnswers: [
                "Scotland",
                "Wales",
                "Ireland",
                ...europeanCountries.filter(country =>
                    country !== "England" &&
                    country !== "Scotland" &&
                    country !== "Wales" &&
                    country !== "Ireland" &&
                    country !== "The United Kingdom" &&
                    country !== "The Republic of Ireland" &&
                    country !== "France")
            ]
        },
        {
            question: "When did the English finally leave France, marking the end of territorial claims after the Hundred Years War?",
            correctAnswers: ["the 1450s"],
            incorrectAnswers: [
                "the 1410s",
                "the 1420s",
                "the 1430s",
                "the 1440s",
                "the 1460s",
                "the 1470s",
                "the 1480s",
                "the 1490s"
            ]
        }
    ];



    let category = {
        name: "War at Home and Abroad",
        questions: questions,
        group: "The Middle Ages",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
