(() => {
    let questions = [
        {
            questions: [
                {
                    question: "What was the name of James II's elder daughter?",
                    correctAnswers: ["Mary"],
                    mandatoryIncorrectAnswers: ["Anne"],
                    incorrectAnswers: ["Elizabeth", "Victoria", "Catherine", "Margaret", "Jane", "Eleanor"]
                },
                {
                    question: "Who was Mary, the daughter of James II, married to?",
                    correctAnswers: ["William of Orange"],
                    incorrectAnswers: ["James of Aragon", "Henry of Navarre", "Charles of Bourbon", "Edward of York", "George of Hanover", "Robert of Flanders"]
                },
                {
                    question: "What relation was William of Orange to his wife Mary?",
                    correctAnswers: ["Cousins"],
                    incorrectAnswers: ["Brother and sister", "Father and daughter", "Uncle and niece", "Husband and wife", "No relation"]
                }
            ]
        },
        {
            question: "What was William of Orange's religious affiliation?",
            correctAnswers: ["Protestant"],
            mandatoryIncorrectAnswers: ["Catholic"],
            incorrectAnswers: ["Orthodox", "Jewish", "Non-Religious"]
        },
        {
            question: "What title did William of Orange hold before he became King of England, Scotland and Ireland?",
            correctAnswers: ["Ruler of the Netherlands"],
            incorrectAnswers: ["Holy Roman Emperor", "Duke of Normandy", "Prince of Wales", "King of France", "Duke of York"]
        },
        {
            questions: [
                {
                    question: "Who was asked by important Protestants to invade England in 1688?",
                    correctAnswers: ["William of Orange"],
                    incorrectAnswers: ["James II", "Mary", "Oliver Cromwell", "Henry VIII", "Elizabeth I", "Charles II", "Anne"]
                },
                {
                    question: "In what year did important Protestants in England ask William to invade England and proclaim himself king?",
                    correctAnswers: ["1688"],
                    incorrectAnswers: getDates(1500, 1900, [1688], false)
                },
                {
                    question: "What did important Protestants in England ask William of Orange to do in 1688?",
                    correctAnswers: ["Invade England and proclaim himself king"],
                    incorrectAnswers: [
                        "Marry Mary",
                        "Sign a peace treaty",
                        "Convert to Catholicism",
                        "Join the English Parliament",
                        "Restore the monarchy"]
                },
                {
                    question: "What title were important Protestants in England seeking to bestow upon William of Orange in 1688?",
                    correctAnswers: ["King"],
                    incorrectAnswers: ["Prime Minister", "Archbishop", "Lord Protector", "Duke", "Earl", "Baron", "Chancellor"]
                },
            ]
        },
        {
            question: "What happened when William of Orange reached England during his invasion?",
            correctAnswers: ["There was no resistance"],
            incorrectAnswers: [
                "He was met with strong opposition",
                "He was defeated in a battle",
                "He was captured by James II's supporters",
                "He joined forces with James II",
                "He established a new parliament"]
        },
        {
            question: "What title did William of Orange hold in England, Wales, and Ireland after becoming king?",
            correctAnswers: ["William III"],
            incorrectAnswers: ["William I", "William II", "William IV", "William V", "William VI", "William VII"]
        },
        {
            question: "What title did William of Orange hold in Scotland after becoming king?",
            correctAnswers: ["William II"],
            incorrectAnswers: ["William I", "William III", "William IV", "William V", "William VI", "William VII"]
        },
        {
            questions: [
                {
                    question: "What did James II do when William of Orange reached England?",
                    correctAnswers: ["Fled to France"],
                    incorrectAnswers: [
                        "Surrendered to William",
                        "Joined forces with William",
                        "Sought refuge in Scotland",
                        "Sought refuge in Ireland",
                        "Abdicated the throne",
                        "Fought a battle with William"
                    ]
                },
                {
                    question: "Who took over the throne of England, Scotland, and Ireland after James II fled to France?",
                    correctAnswers: ["William and Mary together"],
                    incorrectAnswers: [
                        "William alone",
                        "Mary alone",
                        "James II's son",
                        "A parliamentary leader",
                        "No one",
                        "Anne"]
                },
            ]
        },
        {
            question: "What was the event called where William of Orange took over the thrones of England, Scotland, and Ireland?",
            correctAnswers: ["The 'Glorious Revolution'"],
            incorrectAnswers: [
                "The 'Bloodless Coup'",
                "The 'Silent Conquest'",
                "The 'Peaceful Transition'",
                "The 'Quiet Rebellion'",
                "The 'Unopposed Ascension'",
                "The 'Kingless Revolution'"]
        },
        {
            question: "Why was the 'Glorious Revolution' so named? (Select all that apply)",
            correctAnswers: [
                "There was no fighting in England",
                "It guaranteed the power of Parliament"],
            incorrectAnswers: [
                "It was a violent and decisive battle",
                "It marked the end of all monarchies",
                "It brought about immediate peace with France"]
        },
        {
            questions: [
                {
                    question: "The 'Glorious Revolution' ended the threat of a monarch ruling on his or her own as he or she wished. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question:
                        "The 'Glorious Revolution' despite hopes to the contrary, " +
                        "did NOT end the threat of a monarch ruling on his or her own as he or she wished. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "What was James II's attitude towards regaining the throne after the 'Glorious Revolution'?",
            correctAnswers: ["He was determined to regain the throne"],
            incorrectAnswers: [
                "He was indifferent to regaining the throne",
                "He was resigned to not regaining the throne",
                "He was happy to be free of the throne"
            ]
        },
        {
            questions: [
                {
                    question: "What did James II do to try to regain the throne after the 'Glorious Revolution'?",
                    correctAnswers: ["He invaded Ireland"],
                    incorrectAnswers: [
                        "He invaded Scotland",
                        "He invaded England",
                        "He invaded Wales",
                    ]
                },
                {
                    question: "Who did James II receive help from to invade Ireland in his attempt to regain the throne?",
                    correctAnswers: ["a French army"],
                    incorrectAnswers: [
                        "a Spanish fleet",
                        "Dutch forces",
                        "Scottish allies",
                        "German mercenaries",
                        "Italian volunteers"]
                },
                {
                    question: "What was James II's objective when he invaded Ireland with the help of a French army?",
                    correctAnswers: ["to regain the throne"],
                    incorrectAnswers: [
                        "to conquer new territories",
                        "to support the Glorious Revolution",
                        "to start a trade agreement",
                        "to explore new lands",
                        "to create a military alliance"]
                },
            ]
        },
        {
            questions: [
                {
                    question: "Who won at the Battle of the Boyne?",
                    correctAnswers: ["William III and II"],
                    mandatoryIncorrectAnswers: ["James VII and II"],
                    incorrectAnswers: [
                        "Charles II",
                        "William IV",
                        "James VI and I",
                        "Charles I",
                        "George I",
                    ]
                },
                {
                    question: "What did William III and II do after his victory at the Battle of the Boyne?",
                    correctAnswers: ["Reconquered Ireland"],
                    incorrectAnswers: [
                        "Abandoned Ireland",
                        "Chased James II to France",
                        "Set up residence in Ireland",
                        "Invited James II to return to Ireland",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who was defeated at the Battle of the Boyne?",
                    correctAnswers: ["James VII and II"],
                    mandatoryIncorrectAnswers: ["William III and II"],
                    incorrectAnswers: [
                        "Charles II",
                        "William IV",
                        "James VI and I",
                        "Charles I",
                        "George I",
                    ]
                },
                {
                    question: "What did James II do after his defeat at the Battle of the Boyne?",
                    correctAnswers: ["Fled to France in exile"],
                    incorrectAnswers: [
                        "Joined forces with William",
                        "Sought refuge in Scotland",
                        "Sought refuge in Ireland",
                        "Abdicated the throne",
                        "Fought a another battle with William"
                    ]
                }
            ]
        },
        {
            question: "In which year did the Battle of the Boyne take place?",
            correctAnswers: ["1690"],
            incorrectAnswers: getDates(1066, 1900, [1690], false)
        },
        {
            question: "Where did the Battle of the Boyne take place?",
            correctAnswers: ["Ireland"],
            incorrectAnswers: ["Scotland", "Wales", "England", "France", "Netherlands", "Spain"]
        },
        {
            question: "Which event is still celebrated by some in Northern Ireland today?",
            correctAnswers: ["The Battle of the Boyne"],
            incorrectAnswers: [
                "The Battle of Killycrankie",
                "The signing of the Magna Carta",
                "The Union of the Crowns",
                "The Restoration"]
        },
        {
            question: "What was the effect of William III's rule on the Roman Catholic Church in Ireland?",
            correctAnswers: ["Many restrictions were placed on the Roman Catholic Church"],
            incorrectAnswers: [
                "The Roman Catholic Church was made the state church",
                "There were no changes to the Roman Catholic Church",
                "The Roman Catholic Church received special privileges",
                "The Roman Catholic Church was disbanded",
                "Freedom of religion was established for all",
                "The Roman Catholic Church was supported by the government"]
        },
        {
            question: "Who were unable to take part in the government after William's rule was established in Ireland?",
            correctAnswers: ["Irish Catholics"],
            incorrectAnswers: ["Irish Protestants", "The French", "The Scottish", "The Dutch", "English Protestants", "The Jacobites"]
        },
        {
            questions: [
                {
                    question: "James VII had support in Scotland following the 'Glorious Revolution'. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question:
                        "Despite support elsewhere in the British Isles, " +
                        "James VII did NOT have support in Scotland following the 'Glorious Revolution'. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "After the 'Glorious Revolution', where was an armed rebellion in Scotland in support of James VII quickly defeated?",
                    correctAnswers: ["Killycrankie"],
                    incorrectAnswers: ["Culloden", "Bannockburn", "Flodden", "Boyne", "Hastings", "Agincourt", "Waterloo"]
                },
                {
                    question: "What was the aim of the armed rebellion that was defeated at Killycrankie after the 'Glorious Revolution'?",
                    correctAnswers: ["In support of James VII"],
                    incorrectAnswers: [
                        "To establish a republic",
                        "To resist the union with England",
                        "To support the Glorious Revolution",
                        "To expel the French army"]
                },
                {
                    question: "What was the result of the armed rebellion at Killycrankie after the 'Glorious Revolution'?",
                    correctAnswers: ["It was quickly defeated"],
                    incorrectAnswers: [
                        "It was successful",
                        "It led to a long war",
                        "It led to a peace treaty",
                        "It led to a new government"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Who were required to formally accept William III and II as King in Scotland by taking an oath?",
                    correctAnswers: ["All clans"],
                    incorrectAnswers: [
                        "All priests",
                        "All soldiers",
                        "All citizens"]
                },
                {
                    question: "What were all Scottish clans required to do to formally accept William III and II as King?",
                    correctAnswers: ["Take an oath"],
                    incorrectAnswers: [
                        "Pay a tax",
                        "Sign a document",
                        "Attend a coronation",
                        "Surrender their arms",
                        "Participate in a battle"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Why were the MacDonalds of Glencoe killed during the reign of William III and II?",
                    correctAnswers: ["They were late in taking the oath."],
                    incorrectAnswers: [
                        "They refused to take the oath.",
                        "They supported William of Orange.",
                        "They helped James II invade Ireland.",
                        "They led an armed rebellion.",
                        "They were supporters of the French army.",
                        "They were celebrating the Battle of the Boyne."]
                },
                {
                    question: "Which clan was killed for being late in taking the oath to formally accept William as King?",
                    correctAnswers: ["The MacDonalds of Glencoe"],
                    incorrectAnswers: [
                        "The MacDonalds of Skye",
                        "The Campbells of Argyll",
                        "The Stewarts of Appin",
                        "The MacLeans of Mull",
                        "The MacKenzies of Kintail",
                        "The MacGregors of Glenstrae"]
                },

                {
                    question: "What was the consequence for the MacDonalds of Glencoe for being late in taking the oath?",
                    correctAnswers: ["They were killed"],
                    incorrectAnswers: [
                        "They were exiled",
                        "They were imprisoned",
                        "They were fined",
                        "They were pardoned",
                        "They were forced to fight in France",
                        "They were given a second chance to take the oath"]
                },
            ]
        },
        {
            question: "What event led to some Scots distrusting the new government of William III and II?",
            correctAnswers: ["The memory of the massacre of the MacDonalds of Glencoe"],
            incorrectAnswers: [
                "The Battle of the Boyne",
                "The Jacobite uprising",
                "The Treaty of Union",
                "The Glorious Revolution",
                "The invasion of William of Orange",
                "The defeat at Killycrankie",
                "The exile of James II"]
        },
        {
            question: "Who did some people in Scotland continue to believe was the rightful monarch during the reign of William III and II?",
            correctAnswers: ["James VII"],
            incorrectAnswers: ["Mary II", "Elizabeth I", "Henry VIII", "Charles I", "Oliver Cromwell", "Anne", "Bonnie Prince Charlie"]
        },
        {
            questions: [
                {
                    question: "Some of James VII's supporters joined him in exile in France. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },

                {
                    question: "James VII's was completely abandonded with no supporters while in exile in France. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Some of James VII's supporters joined him in exile in France."
                }
            ]
        },
        {
            questions: [
                {
                    question: "Some of James VII's supporters remained in the British Isles as secret supporters. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },

                {
                    question: "All of James VII's supporters left the British Isles. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "Some of James VII's supporters remained in the British Isles as secret supporters"
                }
            ]
        },
        {
            questions: [
                {
                    question: "What name was given to the supporters of James VII?",
                    correctAnswers: ["Jacobites"],
                    incorrectAnswers: ["Jamesonians", "Jamesites", "Jamesists", "Stuarts", "Orangists", "Loyalists", "Royalists", "Bourbonites"]
                },
                {
                    question: "Who were the Jacobites?",
                    correctAnswers: ["Supporters of James VII"],
                    incorrectAnswers: [
                        "Supporters of Jacob of Monmouth",
                        "Supporters of William of Orange",
                        "Supporters of Parliament",
                        "Members of the French army",
                        "Irish Catholic rebels",
                        "Scottish rebels",
                        "Dutch mercenaries"]
                }
            ]
        }

    ];

    let category = {
        name: "The Glorious Revolution",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
