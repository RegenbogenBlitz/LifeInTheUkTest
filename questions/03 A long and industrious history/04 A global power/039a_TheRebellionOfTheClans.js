(() => {
    let questions = [
        {
            question: "Who succeeded George I as the reigning monarch of Great Britain?",
            correctAnswers: ["George II"],
            incorrectAnswers: dualMonarchs.concat(
                unitedMonarchs.filter(monarch =>
                    monarch !== "George I" &&
                    monarch !== "George II" &&
                    monarch !== "George III" &&
                    monarch !== "George IV" &&
                    monarch !== "George V" &&
                    monarch !== "George VI")),
        },
        {
            question: "What was the relationship between George I and George II?",
            correctAnswers: ["Father and son"],
            incorrectAnswers: [
                "Brothers",
                "Cousins",
                "Uncle and nephew",
                "Grandfather and grandson",
                "Half-brothers",
            ]
        },
        {
            questions: [
                {
                    question: "In which year did another attempt take place to restore a Stuart King to the British throne, during the reign of George II?",
                    correctAnswers: ["1745"],
                    incorrectAnswers: getDates(1600, 1837, [1745], false),
                    explanation: "This was the Jacobite rising of 1745"
                },
                {
                    question: "What was the name of the reigning monarch during the 1745 attempt to restore a Stuart King to the throne?",
                    correctAnswers: ["George II"],
                    incorrectAnswers: dualMonarchs.concat(
                        unitedMonarchs.filter(monarch =>
                            monarch !== "George II")),
                },
                {
                    question: "Which royal house was challenging George II's rule in the attempt of 1745?",
                    correctAnswers: [
                        "Stuart"
                    ],
                    incorrectAnswers: [
                        "Norman",
                        "Plantagenet",
                        "York",
                        "Lancaster",
                        "Tudor",
                        "Hanover",
                        "Saxe-Coburg and Gotha",
                        "Windsor"
                    ]
                }
            ]
        },
        {
            question: "Who was Charles Edward Stuart?",
            correctAnswers: ["The grandson of James II"],
            incorrectAnswers: [
                "The nephew of James I",
                "The brother of William III",
                "The half-brother of Georges I",
                "The son of George II",
                "A scottish clan leader",
                "A diplomatic envoy",
                "Lord Chancellor of Scotland",
                "A scottish poet",
            ]
        },
        //{
        //    questions: [
        //        {
        //            question: "What was the nickname of Charles Edward Stuart?",
        //            correctAnswers: ["Bonnie Prince Charlie"],
        //            incorrectAnswers: [
        //            ]
        //        },
        //        {
        //            question: "Whose nickname was 'Bonnie Prince Charlie'?",
        //            correctAnswers: ["Charles Edward Stuart"],
        //            incorrectAnswers: [
        //            ]
        //        }
        //    ]
        //},
        //{
        //    question: "Where did Charles Edward Stuart, also known as 'Bonnie Prince Charlie', land in his attempt to claim the throne?",
        //    correctAnswers: [
        //        "Scotland"
        //    ],
        //    incorrectAnswers: [
        //        "England",
        //        "Wales",
        //        "Ireland",
        //        "France",
        //        "Spain",
        //        "North America"
        //    ]
        //},
        //{
        //    question: "Who supported Charles Edward Stuart during his attempt to claim the British throne in 1745?",
        //    correctAnswers: [
        //        "clansmen from the Scottish Highlands"
        //    ],
        //    incorrectAnswers: [
        //        "clansmen from the Lowlands",
        //        "the English nobility",
        //        "the French military",
        //        "the Irish revolutionaries",
        //        "the Welsh lords",
        //        "the Spanish Armada"
        //    ]
        //},
        //{
        //    question: "What did Charles Edward Stuart do with the support he received from the Scottish Highlands in 1745?",
        //    correctAnswers: [
        //        "raised an army"
        //    ],
        //    incorrectAnswers: [
        //        "formed a political party",
        //        "started a trade embargo",
        //        "established a new religion",
        //        "negotiated a peace treaty",
        //        "built a fortress",
        //        "created a council of elders"
        //    ]
        //},
        //{
        //    question: "In what region did Charles Edward Stuart receive support and raise an army in 1745?",
        //    correctAnswers: [
        //        "the Scottish Highlands"
        //    ],
        //    incorrectAnswers: [
        //        "the Scottish Lowlands",
        //        "Northern Ireland",
        //        "Wales",
        //        "Cornwall",
        //        "Yorkshire",
        //        "Northumberland"
        //    ]
        //},
        //{
        //    question: "Who was initially successful but ultimately defeated by George II's Army at the Battle of Culloden in 1746?",
        //    correctAnswers: [
        //        "Charles Edward Stuart"
        //    ],
        //    incorrectAnswers: [
        //        "James II",
        //        "George I",
        //        "Bonnie Prince Charlie",
        //        "George II",
        //        "William Wallace",
        //        "Robert the Bruce",
        //        "Edward I"
        //    ]
        //},
        //{
        //    question: "In what year was Charles Edward Stuart defeated at the Battle of Culloden?",
        //    correctAnswers: [
        //        "1746"
        //    ],
        //    incorrectAnswers: [
        //        "1745",
        //        "1603",
        //        "1707",
        //        "1715",
        //        "1756",
        //        "1801",
        //        "1832"
        //    ]
        //},
        //{
        //    question: "Which battle marked the defeat of Charles Edward Stuart by George II's Army?",
        //    correctAnswers: [
        //        "The Battle of Culloden"
        //    ],
        //    incorrectAnswers: [
        //        "The Battle of Bannockburn",
        //        "The Battle of Flodden",
        //        "The Battle of Hastings",
        //        "The Battle of Waterloo",
        //        "The Battle of Agincourt",
        //        "The Battle of Bosworth Field",
        //        "The Battle of Falkirk"
        //    ]
        //},
        //{
        //    question: "Who led the army that defeated Charles Edward Stuart in 1746?",
        //    correctAnswers: [
        //        "George II"
        //    ],
        //    incorrectAnswers: [
        //        "George I",
        //        "William III",
        //        "Oliver Cromwell",
        //        "Henry VIII",
        //        "Elizabeth I",
        //        "James I",
        //        "Edward III"
        //    ]
        //},
        //{
        //    question: "Where did Charles Edward Stuart escape to after being defeated at the Battle of Cullodon in 1746?",
        //    correctAnswers: [
        //        "Europe"
        //    ],
        //    incorrectAnswers: [
        //        "North America",
        //        "Australia",
        //        "Asia",
        //        "Africa",
        //        "South America",
        //        "Antarctica"
        //    ]
        //},
        //{
        //    question: "Who escaped back to Europe after being defeated at the Battle of Cullodon in 1746?",
        //    correctAnswers: [
        //        "Charles Edward Stuart"
        //    ],
        //    incorrectAnswers: [
        //        "George II",
        //        "James II",
        //        "A Scottish clan chief",
        //        "A Scottish landlord",
        //        "A member of George II's Army",
        //        "Bonnie Prince Charlie"
        //    ]
        //},
        //{
        //    question: "Which event prompted Charles Edward Stuart to escape back to Europe?",
        //    correctAnswers: [
        //        "His defeat at the Battle of Cullodon in 1746"
        //    ],
        //    incorrectAnswers: [
        //        "The Highland Clearances",
        //        "The accession of George II",
        //        "The Battle of Bannockburn",
        //        "The union with England",
        //        "The signing of the Treaty of Union",
        //        "The Jacobite Rebellion"
        //    ]
        //},
        //{
        //    question: "What action did Charles Edward Stuart take after the Battle of Cullodon in 1746?",
        //    correctAnswers: [
        //        "He escaped back to Europe"
        //    ],
        //    incorrectAnswers: [
        //        "He became a landlord",
        //        "He led the Highland Clearances",
        //        "He was crowned King",
        //        "He settled in North America",
        //        "He joined George II's Army",
        //        "He started a new rebellion"
        //    ]
        //},
        //{
        //    question: "What was the impact on the power and influence of the clans after the Battle of Cullodon?",
        //    correctAnswers: [
        //        "The clans lost a lot of their power and influence"
        //    ],
        //    incorrectAnswers: [
        //        "The clans gained more power and influence",
        //        "The clans' power and influence remained unchanged",
        //        "The clans were officially recognized by the English Crown",
        //        "The clans were granted additional lands",
        //        "The clans formed a formal alliance with the English Crown",
        //        "The clans' power and influence spread to other regions",
        //        "The clans became the ruling authority in Scotland"
        //    ]
        //},
        //{
        //    question: "What role did Scottish chieftains assume if they had the favour of the British King after the Battle of Culloden in 1746?",
        //    correctAnswers: [
        //        "landlords"
        //    ],
        //    incorrectAnswers: [
        //        "tenants",
        //        "soldiers",
        //        "merchants",
        //        "farmers",
        //        "advisors",
        //        "judges"
        //    ]
        //},
        //{
        //    question: "What was the condition for Scottish chieftains to become landlords after the Battle of Culloden in 1746?",
        //    correctAnswers: [
        //        "if they had the favour of the English King"
        //    ],
        //    incorrectAnswers: [
        //        "if they won a battle",
        //        "if they paid a fee",
        //        "if they swore an oath of loyalty to the Scottish King",
        //        "if they converted to Protestantism",
        //        "if they had a large number of followers",
        //        "if they owned a significant amount of land previously"
        //    ]
        //},
        //{
        //    question: "What new role did Scottish clansmen take on regarding land usage after the Battle of Culloden, as favored by the English King?",
        //    correctAnswers: [
        //        "tenants"
        //    ],
        //    incorrectAnswers: [
        //        "landlords",
        //        "soldiers",
        //        "nobles",
        //        "servants",
        //        "craftsmen",
        //        "merchants"
        //    ]
        //},
        //{
        //    question: "What change occurred to the status of Scottish clansmen in relation to the land they used after the Battle of Culloden?",
        //    correctAnswers: [
        //        "pay for the land"
        //    ],
        //    incorrectAnswers: [
        //        "fight for the land",
        //        "maintain the land",
        //        "serve the landlords",
        //        "offer goods as payment",
        //        "provide military service",
        //        "vote for the English King"
        //    ]
        //},
        //{
        //    question: "Who became tenants required to pay for the land they occupied following the Battle of Culloden in 1746?",
        //    correctAnswers: [
        //        "clansmen"
        //    ],
        //    incorrectAnswers: [
        //        "chieftains",
        //        "English soldiers",
        //        "Scottish nobles",
        //        "Irish immigrants",
        //        "European settlers",
        //        "Highland farmers"
        //    ]
        //},
        //{
        //    question: "After the Battle of Culloden, whom did the chieftains need to have favour with to become landlords?",
        //    correctAnswers: [
        //        "the English King"
        //    ],
        //    incorrectAnswers: [
        //        "the Scottish King",
        //        "Parliament",
        //        "local magistrates",
        //        "clan members",
        //        "the Church",
        //        "wealthy merchants"
        //    ]
        //},
        //{
        //    question: "Which process began in the Scottish Highlands as a result of the Jacobites' defeat at the Battle of Culloden?",
        //    correctAnswers: [
        //        "Highland Clearances"
        //    ],
        //    incorrectAnswers: [
        //        "Highland Renaissance",
        //        "Scottish Enlightenment",
        //        "Highland Restoration",
        //        "Highland Reformation",
        //        "Scottish Uprising",
        //        "Celtic Revival"
        //    ]
        //},
        //{
        //    question: "What were the small farms owned by individuals in Scotland known as during the time of the Highland Clearances?",
        //    correctAnswers: [
        //        "crofts"
        //    ],
        //    incorrectAnswers: [
        //        "cottages",
        //        "estates",
        //        "holdings",
        //        "plots",
        //        "granges",
        //        "manors",
        //        "steadings"
        //    ]
        //},
        //{
        //    question: "For what purpose did many Scottish landlords destroy individual small farms known as 'crofts' during the Highland Clearances?",
        //    correctAnswers: [
        //        "to make space for large flocks of sheep and cattle"
        //    ],
        //    incorrectAnswers: [
        //        "to build new settlements",
        //        "to create hunting grounds",
        //        "to establish military bases",
        //        "to expand urban areas",
        //        "to construct commercial complexes",
        //        "to develop agricultural plantations"
        //    ]
        //},
        //{
        //    question: "What action did many Scottish landlords take against small farms known as 'crofts'?",
        //    correctAnswers: [
        //        "destroyed"
        //    ],
        //    incorrectAnswers: [
        //        "renovated",
        //        "expanded",
        //        "sold",
        //        "leased",
        //        "preserved",
        //        "converted into residential areas"
        //    ]
        //},
        //{
        //    question: "During which century did the 'Highland Clearances' lead to common evictions in Scotland, as described in the context of early 19th-century events?",
        //    correctAnswers: [
        //        "early 19th century"
        //    ],
        //    incorrectAnswers: [
        //        "late 18th century",
        //        "mid-17th century",
        //        "early 20th century",
        //        "late 19th century",
        //        "mid-18th century",
        //        "16th century"
        //    ]
        //},
        //{
        //    question: "What became very common in Scotland in the early 19th century, particularly related to tenancy and land use?",
        //    correctAnswers: [
        //        "Evictions"
        //    ],
        //    incorrectAnswers: [
        //        "Rebellions",
        //        "Industrial revolutions",
        //        "Parliamentary reforms",
        //        "Agricultural improvements",
        //        "Construction booms",
        //        "Mining discoveries"
        //    ]
        //},
        //{
        //    question: "Which event led to many Scottish people emigrating to North America in the early 19th century, as described in the provided text?",
        //    correctAnswers: [
        //        "after the Highland Clearances"
        //    ],
        //    incorrectAnswers: [
        //        "after the Battle of Culloden",
        //        "after the Jacobite rising of 1745",
        //        "after the Act of Union 1707"
        //    ]
        //},
        //{
        //    question: "Why did many Scottish people emigrate to North America in the early 19th century?",
        //    correctAnswers: [
        //        "Evictions became very common"
        //    ],
        //    incorrectAnswers: [
        //        "To seek religious freedom",
        //        "Due to a famine",
        //        "For gold mining opportunities",
        //        "To escape political persecution",
        //        "Because of industrialization in Scotland",
        //        "To join the British colonies"
        //    ]
        //},
        //{
        //    question: "What was one of the contributing factors that led to the emigration of many Scottish people to North America in the early 19th century?",
        //    correctAnswers: [
        //        "Highland Clearances"
        //    ],
        //    incorrectAnswers: [
        //        "Industrial Revolution",
        //        "Jacobite Rebellions",
        //        "Glorious Revolution",
        //        "Act of Union",
        //        "Discovery of the New World",
        //        "Great Plague of London"
        //    ]
        //}
    ];

    let category = {
        name: "The rebellion of the clans (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
