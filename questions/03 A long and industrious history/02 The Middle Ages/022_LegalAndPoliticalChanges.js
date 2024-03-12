(() => {
    let questions = [
        {
            question: "In which period did Parliament start to evolve into the institution it is today?",
            correctAnswers: ["The Middle Ages"],
            incorrectAnswers: namesOfAges.filter(x => x !== "The Middle Ages")
        },
        {
            question: "What are the origins of Parliament?",
            correctAnswers: ["The king's council of advisers"],
            incorrectAnswers: [
                "The church's congress of bishops",
                "The noblemen's assembly of knights",
                "The guilds' assembly of merchants",
                "The peasants' assembly of freemen"
            ]
        },
        {
            question: "Which group of people were included in the king's council of advisers?  (Select all that apply)",
            correctAnswers: [
                "Important noblemen",
                "Leaders of the Church"],
            incorrectAnswers: [
                "Elected members of the House of Commons",
                "All freemen of the realm",
                "Foreign dignitaries",
                "Representatives of guilds",
                "Local town mayors",
                "Military generals",
                "The general public"]
        },
        { // KEY QUESTION
            question: "Until what year were there few formal limits to the king's power?",
            correctAnswers: ["1215"],
            incorrectAnswers: getDates(1066, 1485, [1215], false)
        },
        {
            questions: [
                {
                    question: "In what year was King John forced by his noblemen to agree to a number of demands?",
                    correctAnswers: ["1215"],
                    incorrectAnswers: getDates(1066, 1485, [1215], false)
                },
                {
                    question: "Which King was forced by his noblemen to agree to a number of demands in 1215?",
                    correctAnswers: ["John"],
                    incorrectAnswers: englishMonarchs.filter(x => x !== "John")
                },
                {
                    question: "What happened to King John in 1215?",
                    correctAnswers: ["He was forced by his noblemen to agree to a number of demands"],
                    incorrectAnswers: [
                        "He was forced to abdicate",
                        "He was assassinated",
                        "He was excommunicated",
                        "He was defeated in battle",
                        "He was captured by the French",
                        "He was captured by the Scots",
                        "He was captured by the Welsh"
                    ]
                },
                {
                    question: "What was the outcome when King John was forced by his noblemen to agree to their demands?",
                    correctAnswers: ["The Magna Carta"],
                    incorrectAnswers: significantDocuments.filter(x => x !== "The Magna Carta")
                },
            ]
        },
        { // KEY QUESTION
            question: "When was the Magna Carta signed?",
            correctAnswers: ["1215"],
            incorrectAnswers: getDates(1066, 1485, [1215], false)
        },
        {
            questions: [
                {
                    question: "Which of the following did the Magna Carta establish?",
                    correctAnswers: ["That even the king was subject to the law"],
                    incorrectAnswers: [
                        "The king's divine right to rule",
                        "The foundation of the Church of England",
                        "The king's absolute power over the Church",
                        "The first English Parliament",
                        "The establishment of common law",
                        "The unification of Scotland and England",
                        "The principles of the feudal system"
                    ]
                },
                {
                    question: "Which document is known for establishing that even the king was subject to the law?",
                    correctAnswers: ["The Magna Carta"],
                    incorrectAnswers: significantDocuments.filter(x => x !== "The Magna Carta")
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is the Magna Carta?",
                    correctAnswers: ["A charter of rights"],
                    incorrectAnswers: [
                        "A battle",
                        "A religious document",
                        "A king's title",
                        "A tax system"
                    ]
                },
                {
                    question: "What does the term 'Magna Carta' translate to in English?",
                    correctAnswers: ["The Great Charter"],
                    incorrectAnswers: [
                        "The Grand Document",
                        "The Major Law",
                        "The Long Agreement",
                        "The Big Treaty",
                        "The Large Settlement",
                        "The Supreme Rule"
                    ]
                },
                {
                    question: "What is a charter?",
                    correctAnswers: ["An official written statement which describes the rights and responsibilities of a state and its citizens"],
                    incorrectAnswers: [
                        "A type of traditional British pastry.",
                        "A ceremonial sword used in British knighthood ceremonies.",
                        "A popular British board game originating in the Medieval period.",
                        "A specific style of architecture common in 13th century Britain.",
                        "A unique breed of sheep native to the British Isles.",
                        "A traditional British folk dance performed at cultural festivals."
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who were the main beneficiaries of the rights protected by the Magna Carta?",
                    correctAnswers: ["The nobility"],
                    incorrectAnswers: [
                        "The peasants",
                        "The merchants",
                        "The clergy",
                        "The knights",
                        "The common people",
                        "Women",
                        "Serfs"]
                },
                {
                    question: "Who are the nobility?",
                    correctAnswers: ["The people in a country who belong to the highest social class"],
                    incorrectAnswers: [
                        "The people in a country who belong to the lowest social class",
                        "The people in a country who belong to the middle social class",
                        "The people in a country who are not native to that country",
                        "The people in a country who members of the military",
                        "The people in a country who are members of the church"]
                },
                {
                    question: "What section of society are most likely to have titles such as 'Lord', 'Duke' or 'Baron'?",
                    correctAnswers: ["The nobility"],
                    incorrectAnswers: [
                        "The peasants",
                        "The merchants",
                        "The clergy",
                        "Women",
                        "Serfs"
                    ]
                }
            ]
        },
        {
            question: "What powers of the king were restricted by the Magna Carta?  (Select all that apply)",
            correctAnswers: [
                "The power to collect taxes",
                "The power to make or change laws"
            ],
            incorrectAnswers: [
                "The power to declare war",
                "The power to pardon criminals",
                "The power to appoint bishops",
                "The power to hold court",
                "The power to issue currency",
                "The power to marry without consent",
                "The power to dissolve Parliament"
            ]
        },
        {
            question: "According to the Magna Carta, who needed to be involved in the decision-making process?",
            correctAnswers: ["The king's noblemen"],
            incorrectAnswers: [
                "The common people",
                "The military leaders",
                "The bishops alone",
                "Foreign advisors",
                "Trade union representatives",
                "Elected members of the Parliament"
            ]
        },
        {
            question: "What were the primary reasons for the King to call parliaments in England in the Middle Ages?  (Select all that apply)",
            correctAnswers: [
                "To consult his nobles",
                "To raise money"],
            incorrectAnswers: [
                "To discuss military strategies",
                "To elect the king",
                "To enact new common laws",
                "To address public health concerns",
                "To negotiate trade agreements",
                "To amend the Magna Carta"
            ]
        },
        {
            question: "Which of the following is most accurate about the attendance of parliaments in England in the Middle Ages?",
            correctAnswers: ["Numbers attending increased over time"],
            incorrectAnswers: [
                "Numbers attending decreased over time",
                "Numbers attending remained constant over time"
            ]
        },
        {
            questions: [
                {
                    question: "What was the structure of the English Parliament during the Middle Ages?",
                    correctAnswers: ["It had two Houses"],
                    incorrectAnswers: [
                        "It was a single house system",
                        "It had three Houses, called Estates",
                        "It was an absolute monarchy with no parliamentary system"
                    ]
                },
                {
                    question: "When were the two separate Houses of Parliament established?",
                    correctAnswers: ["The Middle Ages"],
                    incorrectAnswers: namesOfAges.filter(x => x !== "The Middle Ages")
                },
                {
                    question: "What are the two parts of Parliament known as?",
                    correctAnswers: ["Houses"],
                    incorrectAnswers: [
                        "Estates",
                        "Chambers",
                        "Divisions",
                        "Sections",
                        "Bodies",
                        "Assemblies",
                        "Congregations"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who were the members that traditionally sat in the House of Lords during the Middle Ages?  (Select all that apply)",
                    correctAnswers: [
                        "The nobility",
                        "Great landowners",
                        "Bishops"],
                    mandatoryIncorrectAnswers: [
                        "Elected knights",
                        "Wealthy people from the towns and cities",
                    ],
                    incorrectAnswers: [
                        "Representatives of the common people",
                        "Local town mayors",
                        "The king's male children",
                    ]
                },
                {
                    question: "In which House of Parliament did the Bishops sit in during the Middle Ages?",
                    correctAnswers: ["The House of Lords"],
                    mandatoryIncorrectAnswers: ["The House of Commons"],
                    incorrectAnswers: [
                        "The Estates-General",
                        "The House of Representatives",
                        "The House of Delegates",
                        "The House of the People",
                        "The Episcopal House"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is a bishop?",
                    correctAnswers: ["A senior member of the clergy in the Christian religion"],
                    incorrectAnswers: [
                        "A senior member of the clergy in the Jewish religion",
                        "A senior member of the clergy in the Muslim religion",
                        "A senior member of the clergy in the Hindu religion",
                        "A senior member of the clergy in the Buddhist religion",
                        "A senior member of the clergy in the Sikh religion",
                    ]
                },
                {
                    question: "What is often the role of a bishop?",
                    correctAnswers: ["To be in charge of the churches in a particular area"],
                    incorrectAnswers: [
                        "To be in charge of the military in a particular area",
                        "To be in charge of the schools in a particular area",
                        "To be in charge of the hospitals in a particular area",
                        "To be in charge of the police in a particular area",
                        "To be in charge of the government in a particular area",
                        "To be in charge of the businesses in a particular area",
                        "To be in charge of the farms in a particular area"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who were the members that traditionally sat in the House of Commons during the Middle Ages?  (Select all that apply)",
                    correctAnswers: [
                        "Elected knights",
                        "Wealthy people from the towns and cities",
                    ],
                    mandatoryIncorrectAnswers: [
                        "The nobility",
                        "Great landowners",
                        "Bishops"],
                    incorrectAnswers: [
                        "Lawyers",
                        "Doctors",
                        "The king's male children",
                    ]
                },
                {
                    question: "In which House of Parliament did the elected knights sit in during the Middle Ages?",
                    correctAnswers: ["The House of Commons"],
                    mandatoryIncorrectAnswers: ["The House of Lords"],
                    incorrectAnswers: [
                        "The Estates-General",
                        "The House of Representatives",
                        "The House of Delegates",
                        "The House of the People",
                        "The House of the Garter"
                    ]
                },
                {
                    question: "Who were the knights that sat in the House of Commons usually identified as in the Middle Ages?",
                    correctAnswers: ["Smaller landowners"],
                    incorrectAnswers: [
                        "Religious leaders",
                        "Wealthy merchants",
                        "Military leaders",
                        "Members of the royal family",
                        "Elected officials from the clergy",
                        "Large landowners"]
                },
            ]
        },
        {
            question: "Who was eligible to elect the members of the House of Commons in the Middle Ages?",
            correctAnswers: ["Only a small part of the population"],
            incorrectAnswers: [
                "All men over the age of 21",
                "All landowners",
                "All citizens of a town",
                "All members of the clergy",
                "Every adult male",
                "All members of the nobility"
            ]
        },
        {
            questions: [
                {
                    question: "What was the structure of the Scottish Parliament during the Middle Ages? ",
                    correctAnswers: ["It had three Houses, called Estates"],
                    incorrectAnswers: [
                        "It was a single house system",
                        "It had two Houses",
                        "It was an absolute monarchy with no parliamentary system"
                    ]
                },
                {
                    question: "What were the three Estates of the Scottish Parliament? (Select all that apply)",
                    correctAnswers: [
                        "The lords",
                        "The commons",
                        "The clergy"
                    ],
                    incorrectAnswers: [
                        "The monarch",
                        "The knights",
                        "The princes",
                        "The peasants"]
                },
            ]
        },
        {
            question: "What is the 'clergy'?",
            correctAnswers: ["Relgiious leaders of the Christian church"],
            incorrectAnswers: [
                "Military leaders in the country",
                "Wealthy merchants in the towns",
                "Elected officials in the government",
                "Large landowners in the country",
                "Members of the royal family",
                "Elected officials from the towns"
            ]
        },
        {
            question: "What is a 'judge'?",
            correctAnswers: ["The most important official in court. The judge makes sure what happens is court is fair and legal."],
            incorrectAnswers: [
                "The most important official in the army. The judge makes sure the soldiers are following orders.",
                "The most important official in the government. The judge makes sure the laws are being followed.",
                "The most important official in the church. The judge makes sure the religious laws are being followed.",
                "The most important official in the town. The judge makes sure the town laws are being followed.",
                "The most important official in the school. The judge makes sure the students are following the rules.",
                "The most important official in the hospital. The judge makes sure the patients are being treated fairly."
            ]
        },
        {
            questions: [
                {
                    question: "Which historical period saw the development of the principle that judges are independent of the government?",
                    correctAnswers: ["The Middle Ages"],
                    incorrectAnswers: namesOfAges.filter(x => x !== "The Middle Ages")
                },
                {
                    question: "What principle concerning the judiciary began to be established in the Middle Ages?",
                    correctAnswers: ["Judges are independent of the government"],
                    incorrectAnswers: [
                        "Judges are elected by the people",
                        "Judges must follow the king's orders",
                        "Judges are appointed by the clergy",
                        "Judges can make decisions based on public opinion",
                        "Judges must consult the government before ruling",
                        "Judges are accountable to the House of Lords"
                    ]
                }
            ]
        },
        {
            question: "In which country during the Middle Ages did judges develop 'common law'?",
            correctAnswers: ["England"],
            mandatoryIncorrectAnswers: ["Scotland", "Wales", "Ireland"],
            incorrectAnswers: [
                ...europeanCountries.filter(country =>
                    country !== "England" &&
                    country !== "Scotland" &&
                    country !== "Wales" &&
                    country !== "Ireland" &&
                    country !== "The United Kingdom" &&
                    country !== "The Republic of Ireland")
            ]
        },
        {
            questions: [
                {
                    question: "What term describes the process where laws are based on previous court decisions?",
                    correctAnswers: ["Common law"],
                    mandatoryIncorrectAnswers: ["Codified law"],
                    incorrectAnswers: ["Civil law", "Standardized law", "Documented law", "Inscribed law", "Notarized law", "Registered law", "Transcribed law", "Incorporated law"]
                },
                {
                    question: "By what processes did English judges develop common law? (Select all that apply)",
                    correctAnswers: ["Precedence", "Tradition"],
                    incorrectAnswers: ["Legislative statutes", "Royal decrees", "Public voting", "Church doctrine", "Feudal rights", "Military orders"]
                }
            ]
        },
        {
            question: "What does the principle of 'precedence' in legal terms refer to?",
            correctAnswers: ["Following previous decisions"],
            incorrectAnswers: [
                "Setting new legal standards",
                "Prioritizing royal commands",
                "Adhering to religious texts",
                "Obeying international treaties",
                "Complying with local customs",
                "Enforcing administrative regulations"]
        },
        {
            question: "What term describes the process where laws are written down?",
            correctAnswers: ["Codified"],
            incorrectAnswers: ["Standardized", "Documented", "Inscribed", "Notarized", "Registered", "Transcribed", "Incorporated"]
        },
        {
            question: "How did the legal system in Scotland develop differently from that in England?",
            correctAnswers: ["Laws were codified"],
            incorrectAnswers: [
                "Laws were based on religious texts",
                "Judges were appointed by the king",
                "Laws were made by local councils",
                "Only the king could create laws",
                "Laws were based solely on tradition",
                "Judges could not overrule the king",
                "Laws were established by public vote"
            ]
        }
    ];

    let category = {
        name: "Legal and Political Changes",
        questions: questions,
        group: "The Middle Ages"
    }
    quizDeck.categories.push(category);
})();
