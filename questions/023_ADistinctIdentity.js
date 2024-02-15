(() => {
    let questions = [
        {
            questions: [
                {
                    question: "The Middle Ages saw the development of a national culture and identity in England. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Middle Ages was NOT significant in the development of a national culture and identity in England. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "Which language did the king and his noblemen primarily speak after the Norman Conquest?",
            correctAnswers: ["Norman French"],
            mandatoryIncorrectAnswers: ["Anglo-Saxon"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "What language did the peasants in England primarily speak after the Norman Conquest?",
            correctAnswers: ["Anglo-Saxon"],
            mandatoryIncorrectAnswers: ["Norman French"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            questions: [
                {
                    question: "During which period did the English language begin to develop as a combination of Norman French and Anglo-Saxon?",
                    correctAnswers: ["The Middle Ages"],
                    incorrectAnswers: namesOfAges.filter(age => age !== "The Middle Ages"),
                },
                {
                    question: "What languages did the English language primarly develop from during the Middle Ages?",
                    correctAnswers: ["Norman French", "Anglo-Saxon"],
                    incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"],
                    explanation: "This is a simplified explanation, but it is sufficient for the purposes of the test."
                },
                {
                    question: "In modern English, there are often two words for the same thing, one from Anglo-Saxon and one from Norman French. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Despite English's origins from Anglo-Saxon and Norman French, there are few pairs of words for the same thing, one from each language. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "Which language contributed the word 'park' to English?",
            correctAnswers: ["Norman French"],
            mandatoryIncorrectAnswers: ["Anglo-Saxon"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'beauty' to English?",
            correctAnswers: ["Norman French"],
            mandatoryIncorrectAnswers: ["Anglo-Saxon"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'demand' to English?",
            correctAnswers: ["Norman French"],
            mandatoryIncorrectAnswers: ["Anglo-Saxon"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'apple' to English?",
            correctAnswers: ["Anglo-Saxon"],
            mandatoryIncorrectAnswers: ["Norman French"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'cow' to English?",
            correctAnswers: ["Anglo-Saxon"],
            mandatoryIncorrectAnswers: ["Norman French"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'summer' to English?",
            correctAnswers: ["Anglo-Saxon"],
            mandatoryIncorrectAnswers: ["Norman French"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "Which language contributed the word 'ask' to English?",
            correctAnswers: ["Anglo-Saxon"],
            mandatoryIncorrectAnswers: ["Norman French"],
            incorrectAnswers: ["Celtic", "Welsh", "Gaelic", "Latin", "Old Norse", "German"]
        },
        {
            question: "What was the status of the English language by the year 1400?",
            correctAnswers: ["It was being used for official documents"],
            incorrectAnswers: [
                "It was rarely used",
                "It was prohibited",
                "It was only spoken, not written",
                "It was not recognized",
                "It was used only in poetry",
                "It was solely for religious texts"]
        },
        {
            question: "What was the preferred language of the royal court and Parliament in England by 1400?",
            correctAnswers: ["English"],
            mandatoryIncorrectAnswers: ["French"],
            incorrectAnswers: ["Latin", "Gaelic", "Scots", "Welsh", "Dutch", "German"]
        },
        {
            questions: [
                {
                    question: "What famous series of English poems were written by Geoffrey Chaucer?",
                    correctAnswers: ["The Canterbury Tales"],
                    incorrectAnswers: englishPoems.filter(poem => poem !== "The Canterbury Tales")
                },
                {
                    question: "Who wrote 'The Canterbury Tales'?",
                    correctAnswers: ["Geoffrey Chaucer"],
                    incorrectAnswers: englishPoets.filter(poet => poet !== "Geoffrey Chaucer")
                }
            ]
        },
        {
            question: "What was the subject of Geoffrey Chaucer's series of English poems?",
            correctAnswers: ["A group of people going to Canterbury on a pilgrimage"],
            incorrectAnswers: [
                "The Trojan War",
                "A group of knights going on a quest for the Holy Grail",
                "A group of knights going on crusade",
                "The Battle of Hastings",
                "The life of King Henry VIII",
                "A group of knights in the Hundred Years' War",
                "The signing of the Magna Carta",
                "A fictional account of the Black Death",
                "A story about the War of the Roses",
                "The reign of Queen Elizabeth I"
            ]
        },
        {
            question: "What did the travellers decide to do during their journey in 'The Canterbury Tales'?",
            correctAnswers: ["Tell each other stories"],
            incorrectAnswers: [
                "Sing songs",
                "Write poems",
                "Study the Bible",
                "Draw maps",
                "Discuss politics",
                "Trade goods",
                "Practice archery"
            ]
        },
        {
            question: "In 'The Canterbury Tales', the poems describe the travellers and what else?",
            correctAnswers: ["Some of the stories they told"],
            incorrectAnswers: [
                "The history of Canterbury",
                "Instructions for pilgrimages",
                "Maps of their travels",
                "Diaries of their personal lives",
                "Recipes for food they cooked",
                "Descriptions of their homelands",
                "Guides to the places they visited"]
        },
        {
            question: "What was the significance of The Canterbury Tales in the context of the English language?",
            correctAnswers: ["It was one of the first books to be printed in English using the printing press"],
            incorrectAnswers: [
                "It was the first document signed by English royalty",
                "It was the last piece of literature written in Old English",
                "It was the first book written in the English vernacular",
                "It is the nickname for the first English translation of the Bible",
                "It marked the end of Latin as a legal language",
                "It was the first book to introduce French words into English",
                "It was used as the basis for the first English dictionary"]
        },
        {
            questions: [
                {
                    question: "Who was the first person in England to print books using a printing press?",
                    correctAnswers: ["William Caxton"],
                    incorrectAnswers: ["Johannes Gutenberg", "Richard Whittington", "Thomas Malory", "John Wycliffe", "Robert Cawdrey", "Henry VIII", "Roger Bacon"]
                },
                {
                    question: "What is William Caxton famous for?",
                    correctAnswers: ["He was the first person in England to print books using a printing press"],
                    incorrectAnswers: [
                        "He was a renowned architect during the Medieval period",
                        "He was the first person to translate the Bible into English",
                        "He was the first Englishman to circumnavigate the globe",
                        "He was an English composer and musician",
                        "He was a pioneer in the field of medicine, known for his work on the circulatory system."
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Many of the 'Canterbury Tales' are still popular today. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The 'Canterbury Tales' were popular in their time, but are now little known. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "Some of the 'Canterbury Tales' have been adapted into plays and television programmes. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                }
            ]
        },
        {
            question: "Which of the following languages were spoken in Scotland during the Middle Ages?",
            correctAnswers: ["Gaelic", "Scots"],
            incorrectAnswers: [
                "Welsh",
                "Cornish",
                "Breton",
                "Norman French",
                "Latin"]
        },
        {
            question: "When did poets begin to write in Scots?",
            correctAnswers: ["The Middle Ages"],
            incorrectAnswers: namesOfAges.filter(age => age !== "The Middle Ages")
        },
        {
            question: "Which of the following poets wrote in the Scots language during the Middle Ages?",
            correctAnswers: ["John Barbour"],
            incorrectAnswers: englishPoets
        },
        {
            question: "What is John Barbour known for writing?",
            correctAnswers: ["The Bruce"],
            incorrectAnswers: englishPoems.concat(scotsPoems.filter(poem => poem !== "The Bruce"))
        },
        {
            question: "What is the poem 'The Bruce' about?",
            correctAnswers: ["The Battle of Bannockburn"],
            incorrectAnswers: famousBattles.filter(battle => battle !== "The Battle of Bannockburn")
        },
        {
            questions: [
                {
                    question: "The Middle Ages saw a change in the type of buildings that were built in Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The buildings built in the Middle Ages in Britain were largely of the same type as in earlier ages. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Which types of buildings were commonly built in Britain and Ireland during the Middle Ages for defence?",
                    correctAnswers: ["Castles"],
                    incorrectAnswers: [
                        "Cathedrals",
                        "Monasteries",
                        "Palaces",
                        "Universities",
                        "Hospitals",
                        "Monuments",
                    ]
                },
                {
                    question: "What was a primary purpose of castles built during the Middle Ages in Britain and Ireland?",
                    correctAnswers: ["Defence"],
                    incorrectAnswers: [
                        "Residential",
                        "Education",
                        "Trade",
                        "Entertainment",
                        "Religious services",
                        "Healthcare",
                        "Agriculture"
                    ]
                }
            ]
        },
        {
            question: "Which of the following castles, built in the Middle Ages, are still in use today?",
            correctAnswers: ["Windsor Castle", "Edinburgh Castle"],
            incorrectAnswers: [
                "Bodiam Castle",
                "Dover Castle",
                "Kenilworth Castle",
                "Middleham Castle",
                "Portchester Castle",
                "Rochester Castle",
                "Caernarfon Castle",
                "Ballinskelligs Castle",
                "Blarney Castle",
                "Leap Castle",
            ]
        },
        {
            questions: [
                {
                    question: "Many castles built in Britain during the Middle Ages are now in ruins. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Few castles built in Britain during the Middle Ages are now in ruins. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "What is a cathedral?",
            correctAnswers: ["The most important church in an area"],
            incorrectAnswers: [
                "A well defended castle",
                "The palace where the monarch currently resides",
                "A type of university",
                "The main hospital in a city",
                "A monument to a famous person"
            ]
        },
        {
            questions: [
                {
                    question: "Many great cathedrals were built in Britain during the Middle Ages. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Few great cathedrals were built in Britain during the Middle Ages. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Many cathedrals built in Britain during the Middle Ages are still used for worship. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Few cathedrals built in Britain during the Middle Ages are still used for worship. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "Which of the following cathedrals, built in the Middle Ages, are still in use today?",
            correctAnswers: ["Lincoln Cathedral"],
            furtherCorrectAnswers: [
                "York Minster", "Westminster Abbey", "Canterbury Cathedral", "Salisbury Cathedral", "Durham Cathedral"
            ],
            incorrectAnswers: [
                "Birmingham Cathedral",
                "New Coventry Cathedral",
                "Derby Cathedral",
                "Guildford Cathedral",
                "Liverpool Cathedral",
                "New St Paul's Cathedral",
                "Truro Cathedral",
            ]
        },
        {
            question: "What is a common feature of many cathedrals built during the Middle Ages?",
            correctAnswers: ["Stained glass windows"],
            incorrectAnswers: ["Wooden fortifications", "Moats", "Drawbridges", "Stone keep", "Portcullises", "Arrow slits"]
        },
        {
            question: "What was the purpose of stained glass windows in several cathedrals during the Middle Ages?",
            correctAnswers: ["Telling stories about the Bible and Christian saints"],
            incorrectAnswers: [
                "Creating a sundial to track time during services",
                "Providing a coded map for secret pilgrimage routes",
                "Signifying the cathedral's alignment with certain constellations",
                "Acting as a calendar to track agricultural seasons",
                "Depicting the genealogy of local guilds",
                "Serving as a visual menu of the meals served at religious feasts",
                "Illustrating the different stages of alchemical processes"
            ]
        },
        {
            question: "What is York Minster known for?",
            correctAnswers: ["Its stained glass windows"],
            incorrectAnswers: [
                "Its size",
                "Its age",
                "Its location",
                "Its architecture",
                "Its history",
                "Its bells",
                "Its organ",
                "Its choir",
                "Its crypt",
            ]
        },
        {
            questions: [
                {
                    question: "During the Middle Ages, England was an important trading nation. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "During the Middle Ages, England was NOT involved heavily in international trade. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "What was England renowned for as an important export during the Middle Ages?",
                    correctAnswers: ["Wool"],
                    incorrectAnswers: ["Silk", "Tea", "Wine", "Cotton", "Coal", "Iron"]
                }
            ]
        },
        {
            question: "Why did people come to England from abroad during the Middle Ages?",
            correctAnswers: ["To trade", "To work"],
            incorrectAnswers: [
                "To establish colonies",
                "To escape the Black Death",
                "To explore the New World",
                "To join the Knights Templar",
                "To study at the House of Wisdom"
            ]
        },
        {
            question: "During the Middle Ages, which of the following groups came to England to work due to their special skills?",
            correctAnswers: [
                "Weavers from France",
                "Engineers from Germany",
                "Glass manufacturers from Italy",
                "Canal builders from Holland"],
            incorrectAnswers: [
                "Spice traders from India",
                "Silk weavers from China",
                "Shipbuilders from Spain",
                "Stone masons from Norway",
                "Carpenters from Sweden",
                "Metalworkers from Russia"]
        }
    ];

    let category = {
        name: "A Distinct Identity",
        questions: questions,
        group: "The Middle Ages"
    }
    quizDeck.categories.push(category);
})();
