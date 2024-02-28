(() => {
    let questions = [
        {
            question: "What were Henry VII's main goals for England at the start of his reign? (Select all that apply)",
            correctAnswers: ["To ensure peace", "To secure his position as king"],
            incorrectAnswers: [
                "To expand the empire",
                "To reform the Church",
                "To reduce trade",
                "To start another war",
                "To colonize new lands",
                "To overthrow the Parliament"]
        },
        {
            question: "What did Henry VII do to the central administration of England?",
            correctAnswers: ["He strengthened it"],
            incorrectAnswers: [
                "He abolished it",
                "He decentralized it",
                "He sold it to a foreign power",
                "He left it unchanged",
                "He made it elective"]
        },
        {
            question: "What did Henry VII do to the power of the nobles?",
            correctAnswers: ["He reduced it"],
            incorrectAnswers: [
                "He increased it",
                "He ignored it",
                "He abolished it",
                "He delegated it to the church",
                "He sold it to the highest bidder",
                "He redistributed it among the common people"]
        },
        {
            questions: [
                {
                    question: "Which characteristic of Henry VII's reign made the primary contribution to the building of the monarchy's financial reserves?",
                    correctAnswers: ["His thriftiness"],
                    incorrectAnswers: [
                        "His generosity",
                        "His military conquests",
                        "His taxation policies",
                        "His trade agreements",
                        "His exploration ventures",
                        "His religious reforms"]
                },
                {
                    question: "How was Henry VII with money?",
                    correctAnswers: ["He was thrifty with it"],
                    incorrectAnswers: [
                        "He was generous with it",
                        "He was careless with it",
                        "He was wasteful with it",
                        "He was indifferent to it"]
                },
                {
                    question: "What did Henry VII do with the monarchy's financial reserves?",
                    correctAnswers: ["He built them up"],
                    incorrectAnswers: [
                        "He spent them all",
                        "He gave them away",
                        "He lost them",
                        "He invested them",
                        "He hid them",
                        "He destroyed them"
                    ]
                }
            ]
        },
        {
            question: "Which monarch continued Henry VII's policy of centralizing power?",
            correctAnswers: ["Henry VIII"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                !monarch.startsWith("Henry")).concat(dualMonarchs)
        },
        {
            question: "Who succeeded Henry VII as the monarch of England?",
            correctAnswers: ["Henry VIII"],
            mandatoryIncorrectAnswers: ["Lady Jane Grey", "Mary I", "Elizabeth I"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                !monarch.startsWith("Henry") &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I")
                .concat(dualMonarchs)
        },
        {
            question: "What was Henry VIII most famous for? (Select all that apply)",
            correctAnswers: ["Breaking away from the Church of Rome", "Marrying six times"],
            incorrectAnswers: [
                "Signing the Magna Carta",
                "Defeating the Spanish Armada",
                "Restoring the Catholic Church",
                "Unifying England and Scotland",
                "His thrifty financial policies",
            ]
        },
        {
            question: "In what year did Henry VIII begin his reign as king of England?",
            correctAnswers: ["1509"],
            incorrectAnswers: getDates(1400, 1800, [1509], false)
        },
        {
            question: "What did Henry VIII require in order to divorce his first wife?",
            correctAnswers: ["The approval of the pope"],
            incorrectAnswers: [
                "The backing of the Spanish monarchy",
                "The endorsement of the Holy Roman Emperor",
                "The agreement of the French king",
                "The support of the Scottish nobles",
            ]
        },
        {
            question: "Who is the Pope?",
            correctAnswers: ["The head of the Roman Catholic Church"],
            incorrectAnswers: [
                "The head of the Church of England",
                "The head of the Eastern Orthodox Church",
                "The head of the Lutheran Church",
                "The head of the Methodist Church",
                "The head of the Baptist Church",
                "The head of the Presbyterian Church",
                "The senior rabbi in Orthodox Judaism",
                "The lead figure in Sunni Islam",
                "The lead figure in Shia Islam"
            ]
        },
        {
            questions: [
                {
                    question: "The Pope refused to annul Henry VIII's marriage. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Pope accepted Henry VIII's request to annul his marriage. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "What did Henry VIII do when the Pope refused to annul his marriage?",
                    correctAnswers: ["He established the Church of England"],
                    incorrectAnswers: [
                        "He established the Church of Scotland",
                        "He declared war on the Papal States",
                        "He excommunicated the Pope",
                        "He invaded the Vatican",
                        "He signed the Treaty of Tordesillas",
                        "He convened the Council of Trent",
                        "He called the Diet of Worms"]
                },
                {
                    question: "What was the direct consequence of the Pope's refusal to annul Henry VIII's marriage?",
                    correctAnswers: ["Establishment of the Church of England"],
                    incorrectAnswers: [
                        "Outbreak of the English Civil War",
                        "The signing of the Magna Carta",
                        "The beginning of the Hundred Years' War",
                        "The Battle of Bosworth Field",
                        "The Glorious Revolution"]
                },
                {
                    question: "Which English monarch established the Church of England?",
                    correctAnswers: ["Henry VIII"],
                    incorrectAnswers: englishMonarchs.filter(monarch =>
                        monarch !== "Henry VIII").concat(dualMonarchs)
                },
                {
                    question: "During the reign of Henry VIII, what was the name of the new church that he established?",
                    correctAnswers: ["The Church of England"],
                    incorrectAnswers: [
                        "The Presbyterian Church",
                        "The Methodist Church",
                        "The British Church",
                        "The Church of Britain",
                        "The Tudor Church",
                        "The Protestant Church",
                        "The Church of Henry",
                        "The National Church of Britain"]
                }
            ]
        },
        {
            question: "Who had the power to appoint bishops in the Church of England after its establishment?",
            correctAnswers: ["The King"],
            mandatoryIncorrectAnswers: ["The Pope"],
            incorrectAnswers: [
                "The Archbishop of Canterbury",
                "The House of Commons",
                "The people",
                "The House of Lords",
                "The Prime Minister"]
        },
        {
            question: "Who had the power to determine how people should worship in England after the establishment of the Church of England?",
            correctAnswers: ["The King"],
            mandatoryIncorrectAnswers: ["The Pope"],
            incorrectAnswers: [
                "The Archbishop of Canterbury",
                "The House of Commons",
                "The people",
                "The House of Lords",
                "The Prime Minister"]
        },
        {
            question: "What was the wider religious movement happening in Europe during the time of Henry VIII's religious reforms?",
            correctAnswers: ["The Reformation"],
            incorrectAnswers: [
                "The Enlightenment",
                "The Crusades",
                "The Renaissance",
                "The Great Schism",
                "The Counter-Reformation",
                "The Methodist Revival"]
        },
        {
            question: "What was the Reformation a movement against? (Select all that apply)",
            correctAnswers: ["The authority of the Pope", "The Roman Catholic Church"],
            incorrectAnswers: [
                "The authority of the King",
                "The power of the nobility",
                "The Renaissance",
                "The Crusades",
                "The Holy Roman Empire",
            ]
        },
        {
            question: "What is a Protestant?",
            correctAnswers: ["A member of a Western Christian church not in communion with the Roman Catholic Church"],
            incorrectAnswers: [
                "A member of the Roman Catholic Church",
                "A member of the Eastern Orthodox Church",
                "A member of a Eastern Christian church not in communion with the Eastern Orthodox Church",
                "A member of the Coptic Church",
                "A member of the Ethiopian Orthodox Church",
                "A member of the Armenian Apostolic Church",
                "A member of the Assyrian Church of the East",
            ]
        },
        {
            question: "What did the Protestants do during the Reformation?",
            correctAnswers: ["Formed their own churches"],
            incorrectAnswers: [
                "Joined the Church of Rome",
                "Followed the Pope's authority",
                "Used Latin for their services",
                "Prayed to saints and at shrines",
                "Practiced the Catholic sacraments",
            ]
        },
        {
            questions: [
                {
                    question: "Protestants during the Reformation read the Bible in their own languages. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Protestants during the Reformation read the Bible in Latin. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Catholic Church read the Bible in Latin, but the Protestants translated it into their own languages."
                }
            ]
        },
        {
            questions: [
                {
                    question: "Protestants during the Reformation did NOT pray to saints and at shrines. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Protestants during the Reformation prayed to saints and at shrines. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "According to Protestant beliefs during the Reformation, what was more important than submitting to the authority of the Church?",
            correctAnswers: ["A person's own relationship with God"],
            incorrectAnswers: [
                "The divine rule of monarchs",
                "The teachings of the Pope",
                "The rituals and sacraments of the Catholic Church",
                "Praying to saints for salvation",
                "Using Latin in church services",
                "Nothing"
            ]
        },
        {
            questions: [
                {
                    question: "During the 16th century, where did Protestant ideas gain strength? (Select all that apply)",
                    correctAnswers: ["England", "Wales", "Scotland"],
                    incorrectAnswers: [
                        "Ireland",
                        "France",
                        "Spain",
                        "Italy",
                        "Russia",
                        "Portugal",
                        "Poland"]
                },
                {
                    question: "During which century did Protestant ideas gradually gain strength in England, Wales, and Scotland?",
                    correctAnswers: ["16th century"],
                    incorrectAnswers: [
                        "13th century",
                        "14th century",
                        "15th century",
                        "17th century",
                        "18th century"]
                }
            ]
        },
        {
            question: "What is a chieftain?",
            correctAnswers: ["The leader of a clan in Scotland or Ireland"],
            incorrectAnswers: [
                "The leader of a band of pirates in the North Sea",
                "The leader of a group of knights in England",
                "The leader of a group of peasants in Wales",
                "The leader of a group of merchants in England or Scotland",
                "The leader of a group of craftsmen in Ireland",
            ]
        },
        {
            questions: [

                {
                    question: "What were the significant consequences in Ireland of the English attempts to impose Protestantism? (Select all that apply)",
                    correctAnswers: ["Rebellion from the Irish chieftains", "Brutal fighting"],
                    incorrectAnswers: [
                        "Unification with England",
                        "Establishment of the Church of Ireland",
                        "Peaceful religious transition",
                        "Economic prosperity",
                        "Introduction of the English language",
                        "Creation of the Irish Parliament"]
                },
                {
                    question: "Which of the following led to the brutal fighting in Ireland during the 16th century? (Select all that apply)",
                    correctAnswers: [
                        "Attempts to introduce Protestantism",
                        "Attempts to introduce the English system of laws about the inheritance of land"],
                    incorrectAnswers: [
                        "The invasion of the Spanish Armada",
                        "The Irish Potato Famine",
                        "The formation of the Pale",
                        "The Statute of Kilkenny",
                        "The abolition of the Irish parliament",
                    ]
                }
            ]
        },
        {
            question: "By which act did Wales become formally united with England?",
            correctAnswers: ["The Act for the Government of Wales"],
            mandatoryIncorrectAnswers: ["The Act of Union", "The Act of Supremacy"],
            incorrectAnswers: significantDocuments.filter(doc =>
                doc !== "The Act for the Government of Wales" &&
                doc !== "The Act of Union" &&
                doc !== "The Act of Supremacy")
        },
        {
            questions: [
                {
                    question: "Under which English monarch did Wales become formally united with England?",
                    correctAnswers: ["Henry VIII"],
                    mandatoryIncorrectAnswers: ["Henry VII", "Edward VI", "Mary I", "Elizabeth I"],
                    incorrectAnswers:
                        englishMonarchs.filter(monarch =>
                            monarch !== "Henry VIII" &&
                            monarch !== "Henry VII" &&
                            monarch !== "Edward VI" &&
                            monarch !== "Mary I" &&
                            monarch !== "Elizabeth I")
                            .concat(dualMonarchs)
                },
                {
                    question: "During the reign of Henry VIII, which territory became formally united with England?",
                    correctAnswers: ["Wales"],
                    incorrectAnswers: ["Scotland", "Ireland", "Brittany", "Normandy", "Cornwall", "Isle of Man"]
                }
            ]
        },
        {
            question: "What did the Act for the Government of Wales result in? (Select all that apply)",
            correctAnswers: ["Wales sending representatives to the House of Commons", "A reformation of the Welsh legal system"],
            incorrectAnswers: [
                "Wales establishing its own parliament",
                "Wales becoming independent from England",
                "The creation of a Welsh church",
                "Wales adopting the English language as its only official language",
                "The dissolution of the Welsh Assembly",
                "The coronation of a Welsh king"]
        },
        {
            question: "Who succeeded Henry VIII as the monarch of England?",
            correctAnswers: ["Edward VI"],
            mandatoryIncorrectAnswers: ["Lady Jane Grey", "Mary I", "Elizabeth I", "Henry IX"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                !monarch.startsWith("Henry") &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I")
                .concat(dualMonarchs)
        },
        {
            question: "What was the religious stance of Edward VI?",
            correctAnswers: ["Protestant"],
            mandatoryIncorrectAnswers: ["Catholic"],
            incorrectAnswers: ["Orthodox", "Coptic", "Arian", "Armenian", "Ethiopian"]
        },
        {
            question: "In whose reign was the Book of Common Prayer introduced?",
            correctAnswers: ["Edward VI"],
            mandatoryIncorrectAnswers: ["Mary I", "Elizabeth I", "Henry VIII"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                monarch !== "Henry VIII" &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I")
                .concat(dualMonarchs)
        },
        {
            question: "What was the Book of Common Prayer created for use in?",
            correctAnswers: ["The Church of England"],
            incorrectAnswers: [
                "The Roman Catholic Church",
                "The Methodist Church",
                "The Baptist Church",
                "The Presbyterian Church",
                "The Calvinist Church",
                "The Lutheran Church"]
        },
        {
            questions: [
                {
                    question: "The Book of Common Prayer is still used in some churches today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Book of Common Prayer is no longer used in churches today. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "How old was Edward VI when he died?",
            correctAnswers: ["15"],
            incorrectAnswers: ["8", "9", "10", "11", "12", "13", "14", "16", "17", "18", "19", "20"]
        },
        {
            question: "How many years did Edward VI reign for?",
            correctAnswers: ["6"],
            incorrectAnswers: ["less than a year", "1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"]
        },
        {
            question: "What relation was Mary I of England to Edward VI?",
            correctAnswers: ["Half-sister"],
            incorrectAnswers: ["Sister", "Cousin", "Aunt", "Niece", "Granddaughter", "Step-sister"]
        },
        {
            question: "Who succeeded Edward VI as the monarch of England?",
            correctAnswers: ["Mary I"],
            mandatoryIncorrectAnswers: ["Lady Jane Grey", "Henry VIII", "Elizabeth I"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                monarch !== "Henry VIII" &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I")
                .concat(dualMonarchs),
            explanation: "Lady Jane Grey is not mentioned in the Life in the UK Test. " +
                "Lady Jane Grey was proclaimed queen after Edward VI's death, but Mary I was able to gain the support of the people and the nobility, and she was crowned queen."
        },
        {
            question: "What was the religious stance of Mary I?",
            correctAnswers: ["Catholic"],
            mandatoryIncorrectAnswers: ["Protestant"],
            incorrectAnswers: ["Orthodox", "Coptic", "Arian", "Armenian", "Ethiopian"]
        },
        {
            questions: [
                {
                    question: "Which religious group did Queen Mary persecute during her reign?",
                    correctAnswers: ["Protestants"],
                    incorrectAnswers: ["Catholics", "Anglicans", "Jews", "Muslims", "Hindus", "Buddhists", "Quakers"]
                },
                {
                    question: "What nickname was Mary I of England?",
                    correctAnswers: ["Bloody Mary"],
                    mandatoryIncorrectAnswers: ["The Virgin Queen"],
                    incorrectAnswers: [
                        "Mary the Merciful",
                        "Mary the Great",
                        "Mary the Pious",
                        "Mary the Peacemaker",
                        "Mary the Conqueror",
                        "Mary the Chaste",
                        "Mary the Fair"]
                },
                {
                    question: "Why was Mary I of England given the nickname 'Bloody Mary'?",
                    correctAnswers: ["The persecution of Protestants"],
                    incorrectAnswers: [
                        "The persecution of Catholics",
                        "Her involvement in many battles",
                        "She led a bloody rebellion",
                        "Her love of blood sports",
                        "Her love of blood pudding",
                        "Her love of blood oranges",
                        "Her menstrual health troubles",
                        "Her love of red clothing",
                        "Her love of red roses"]
                },
            ]
        },
        {
            questions: [
                {
                    question: "Mary I of England died after a short reign. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },

                {
                    question: "Mary I of England died after a long reign. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "Who succeeded Mary I as the monarch of England?",
            correctAnswers: ["Elizabeth I"],
            mandatoryIncorrectAnswers: ["Lady Jane Grey", "Henry VIII", "Edward VI"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                monarch !== "Henry VIII" &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I")
                .concat(dualMonarchs)
        },
        {
            question: "What relation was Mary I of England to Elizabeth I?",
            correctAnswers: ["Half-sister"],
            incorrectAnswers: ["Sister", "Cousin", "Aunt", "Niece", "Granddaughter", "Step-sister"]
        },
        {
            question: "Who was Elizabeth I's father?",
            correctAnswers: ["Henry VIII"],
            mandatoryIncorrectAnswers: ["Henry VII", "Edward VI"],
            incorrectAnswers: englishMonarchs.filter(monarch =>
                monarch !== "Henry VII" &&
                monarch !== "Henry VIII" &&
                monarch !== "Edward VI" &&
                monarch !== "Mary I" &&
                monarch !== "Elizabeth I" &&
                monarch !== "Mary II" &&
                monarch !== "Anne")
                .concat(dualMonarchs)
        },
        {
            question: "Who was Elizabeth I's mother?",
            correctAnswers: ["Anne Boleyn"],
            mandatoryIncorrectAnswers: [
                "Catherine of Aragon",
                "Jane Seymour",
                "Anne of Cleves",
                "Catherine Howard",
                "Catherine Parr",
                "Mary I of England",
                "Mary Queen of Scots"],
            incorrectAnswers: [
                "Elizabeth of York",
                "Margaret Beaufort",
                "Elizabeth Woodville",
                "Margaret Tudor",
                "Mary Boleyn",
                "Eleanor of Aquitaine",
                "Elizabeth Bowes-Lyon"]
        }

    ];

    let category = {
        name: "Religious Conflicts",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
