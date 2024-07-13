(() => {
    let questions = [
        {
            question: "Which of the following contributed to the commercial expansion and prosperity of Britain in the 18th century?",
            correctAnswers: [
                "the continuation of the slave trade"
            ],
            incorrectAnswers: [
                "the discovery of gold mines in Scotland",
                "the establishment of a national university",
                "the use of electricity in manufacturing",
                "the development of a national railway system",
                "the invention of the cotton gin",
            ]
        },
        //{
        //    question: "What was the status of slavery within Britain during the 18th century?",
        //    correctAnswers: [
        //        "Illegal"
        //    ],
        //    incorrectAnswers: [
        //        "Legal",
        //        "Regulated by the government",
        //        "Allowed only in certain regions",
        //        "Practiced openly",
        //        "Encouraged by the state",
        //        "A declining industry"
        //    ]
        //},
        //{
        //    question: "By the 18th century, which entities dominated the established overseas slave industry?",
        //    correctAnswers: [
        //        "Britain and the American colonies"
        //    ],
        //    incorrectAnswers: [
        //        "France and Spain",
        //        "Portugal and the American colonies",
        //        "Britain and Spain",
        //        "The American colonies and France",
        //        "Britain and Portugal",
        //        "The Netherlands and Britain"
        //    ]
        //},
        //{
        //    question: "Which of the following best defines the term 'slavery' as used in historical context?",
        //    correctAnswers: [
        //        "A system in which people bought and sold other people (slaves) who were forced to work without pay"
        //    ],
        //    incorrectAnswers: [
        //        "A system in which people voluntarily worked for others without pay",
        //        "A system of paid employment where workers had limited rights",
        //        "A system where people were temporarily indentured to work for a period of time",
        //        "A system of contractual work with the option to leave at any time",
        //        "A system where people were paid minimal wages for excessive work",
        //        "A system where only prisoners were forced to work without pay",
        //        "A system of mutual work exchange without monetary transactions"
        //    ]
        //},
        //{
        //    question: "What were slaves forced to do without pay in the system of slavery?",
        //    correctAnswers: [
        //        "Work"
        //    ],
        //    incorrectAnswers: [
        //        "Work for minimal wages",
        //        "Choose their employers",
        //        "Negotiate their working conditions",
        //        "Work only for a limited period of time",
        //        "Work with the promise of eventual freedom",
        //        "Pay off their debts through labor",
        //        "Serve in the military"
        //    ]
        //},
        //{
        //    question: "In the 18th century British overseas industry, what did the ownership of slaves entail in terms of their labor and compensation?",
        //    correctAnswers: [
        //        "Slaves were bought and sold"
        //    ],
        //    incorrectAnswers: [
        //        "Slaves were hired and fired",
        //        "Slaves were elected and appointed",
        //        "Slaves were trained and educated",
        //        "Slaves were enlisted and discharged",
        //        "Slaves were invited and hosted",
        //        "Slaves were adopted and fostered",
        //        "Slaves volunteered and resigned"
        //    ]
        //},
        //{
        //    question: "Where did the majority of slaves come from during the British involvement in the slave trade?",
        //    correctAnswers: [
        //        "West Africa"
        //    ],
        //    incorrectAnswers: [
        //        "East Africa",
        //        "North Africa",
        //        "South Africa",
        //        "The Americas",
        //        "India",
        //        "China",
        //        "Europe"
        //    ]
        //},
        //{
        //    question: "Where were slaves taken to work on tobacco and sugar plantations after traveling on British ships?",
        //    correctAnswers: [
        //        "America and the Caribbean"
        //    ],
        //    incorrectAnswers: [
        //        "Britain and the Caribbean",
        //        "America and Africa",
        //        "Europe and America",
        //        "The Caribbean and Africa",
        //        "Asia and the Caribbean",
        //        "Australia and America"
        //    ]
        //},
        //{
        //    question: "On what types of plantations were slaves made to work after being taken to America and the Caribbean?",
        //    correctAnswers: [
        //        "Tobacco and sugar plantations"
        //    ],
        //    incorrectAnswers: [
        //        "Cotton and sugar plantations",
        //        "Tobacco and cotton plantations",
        //        "Coffee and sugar plantations",
        //        "Tea and tobacco plantations",
        //        "Rice and tobacco plantations",
        //        "Indigo and sugar plantations"
        //    ]
        //},
        //{
        //    question: "What were the conditions like for slaves on British ships during their journey to America and the Caribbean in the 18th century?",
        //    correctAnswers: [
        //        "Horrible conditions"
        //    ],
        //    incorrectAnswers: [
        //        "Comfortable conditions",
        //        "Safe conditions",
        //        "Pleasant conditions",
        //        "Luxurious conditions",
        //        "Adequate conditions",
        //        "Tolerable conditions"
        //    ]
        //},
        //{
        //    question: "What was the mode of transportation for slaves taken to America and the Caribbean to work on plantations?",
        //    correctAnswers: [
        //        "British ships"
        //    ],
        //    incorrectAnswers: [
        //        "French ships",
        //        "Spanish ships",
        //        "Dutch ships",
        //        "Portuguese ships",
        //        "American ships",
        //        "African ships"
        //    ]
        //},
        //{
        //    question: "What type of agricultural work were slaves forced to undertake in America and the Caribbean after being transported on British ships during the 18th century?",
        //    correctAnswers: [
        //        "Work on tobacco and sugar plantations"
        //    ],
        //    incorrectAnswers: [
        //        "Serve in the military",
        //        "Work in domestic service",
        //        "Work in textile factories",
        //        "Mine for gold and silver",
        //        "Teach and educate",
        //        "Engage in trade"
        //    ]
        //},
        //{
        //    question: "To which regions were slaves taken to work on tobacco and sugar plantations after traveling on British ships during the 18th century slave trade?",
        //    correctAnswers: [
        //        "America and the Caribbean"
        //    ],
        //    incorrectAnswers: [
        //        "Europe and Asia",
        //        "Africa and Europe",
        //        "The Middle East and Africa",
        //        "South America and Oceania",
        //        "North America and Europe",
        //        "Asia and Africa"
        //    ]
        //},
        //{
        //    question: "What were the living and working conditions like for slaves on the plantations in America and the Caribbean during the 18th century?",
        //    correctAnswers: [
        //        "Very bad"
        //    ],
        //    incorrectAnswers: [
        //        "Comfortable",
        //        "Adequate",
        //        "Good",
        //        "Excellent",
        //        "Fair",
        //        "Moderate",
        //        "Luxurious"
        //    ]
        //},
        //{
        //    question: "What did many slaves do in response to their terrible treatment as described in the context of British involvement in the slave trade during the 18th century?",
        //    correctAnswers: [
        //        "try to escape"
        //    ],
        //    incorrectAnswers: [
        //        "formed unions",
        //        "sought legal help",
        //        "petitioned the government",
        //        "accepted their fate",
        //        "remained passive",
        //        "started businesses",
        //        "sought education"
        //    ]
        //},
        //{
        //    question: "What action did some slaves take against their owners in protest at their terrible treatment in the British colonies during the 18th century?",
        //    correctAnswers: [
        //        "revolted"
        //    ],
        //    incorrectAnswers: [
        //        "negotiated for better conditions",
        //        "filed lawsuits",
        //        "organized peaceful demonstrations",
        //        "engaged in dialogue",
        //        "created petitions",
        //        "formed alliances",
        //        "sought asylum"
        //    ]
        //},
        //{
        //    question: "What was the reason for slaves trying to escape or revolting against their owners as described in the context of the British slave trade during the 18th century?",
        //    correctAnswers: [
        //        "terrible treatment"
        //    ],
        //    incorrectAnswers: [
        //        "pursuit of education",
        //        "demand for wages",
        //        "legal disputes",
        //        "cultural differences",
        //        "to start their own plantations",
        //        "for religious freedom",
        //        "to form a government"
        //    ]
        //},
        //{
        //    question: "What was the reason for slaves revolting against their owners during the 18th century British slave trade?",
        //    correctAnswers: [
        //        "in protest at their terrible treatment"
        //    ],
        //    incorrectAnswers: [
        //        "in celebration",
        //        "as a negotiation tactic",
        //        "to demand rights",
        //        "for economic reasons",
        //        "for political power",
        //        "as part of a legal strategy",
        //        "for land ownership"
        //    ]
        //},
        //{
        //    question: "Which group of people in Britain were known to oppose the slave trade?",
        //    correctAnswers: [
        //        "People in Britain"
        //    ],
        //    incorrectAnswers: [
        //        "The Royal Navy",
        //        "British traders",
        //        "The American colonies",
        //        "West African communities",
        //        "The British government",
        //        "European merchants"
        //    ]
        //},
        //{
        //    question: "Was the opposition to the slave trade in Britain unanimous?",
        //    correctAnswers: [
        //        "No"
        //    ],
        //    incorrectAnswers: [
        //        "Yes",
        //        "Not applicable",
        //        "It was only opposed by religious groups",
        //        "Only by the government",
        //        "Only by non-British residents",
        //        "Only by slaves themselves"
        //    ]
        //},
        //{
        //    question: "Who were the first formal groups in Britain to oppose the slave trade in the late 1700s?",
        //    correctAnswers: [
        //        "The Quakers"
        //    ],
        //    incorrectAnswers: [
        //        "The Anglicans",
        //        "The Methodists",
        //        "The Catholics",
        //        "The Parliamentarians",
        //        "The Abolitionists"
        //    ]
        //},
        { // KEY QUESTION
            questions: [
                {
                    question: "Which religious group set up the first formal anti-slavery groups in Britain?",
                    correctAnswers: ["Quakers"],
                    incorrectAnswers: [
                        "Anglicans",
                        "Catholics",
                        "Methodists",
                        "Presbyterians",
                        "Baptists",
                        "Unitarians",
                        "Lutherans"
                    ]
                },
                {
                    question: "Who set up the first formal anti-slavery groups in Britain?",
                    correctAnswers: ["Quakers"],
                    incorrectAnswers: [
                        "William Wilberforce",
                        "John Newton",
                        "The Royal Navy",
                        "King George III",
                        "Olaudah Equiano"
                    ]
                }
            ]
        }
        ,
        //{
        //    question: "In which century were the first formal anti-slavery groups established by the Quakers?",
        //    correctAnswers: [
        //        "late 1700s"
        //    ],
        //    incorrectAnswers: [
        //        "late 1600s",
        //        "early 1700s",
        //        "mid 1700s",
        //        "early 1800s",
        //        "mid 1800s",
        //        "late 1800s",
        //        "early 1900s"
        //    ]
        //},
        //{
        //    question: "What action did the first formal anti-slavery groups take to oppose slavery?",
        //    correctAnswers: [
        //        "They petitioned parliament to ban the practice"
        //    ],
        //    incorrectAnswers: [
        //        "They boycotted slave-produced goods",
        //        "They provided legal representation to slaves",
        //        "They organized public protests",
        //        "They funded slave escapes",
        //        "They used armed force to free slaves",
        //        "They offered education to slaves"
        //    ]
        //},
        { // KEY QUESTION
            questions: [
                {
                    question: "What role did William Wilberforce play in the movement against slavery?",
                    correctAnswers: [
                        "Played an important role in changing the law"
                    ],
                    incorrectAnswers: [
                        "Founded the first formal anti-slavery group",
                        "Was a leading slave trader",
                        "Opposed the Emancipation Act",
                        "Was a member of the Royal Navy",
                        "Was a Quaker leader",
                        "Led slave revolts",
                        "Was a slave ship captain"
                    ]
                },
                {
                    question: "Which of the following describes William Wilberforce's position with respect to the slave trade?",
                    correctAnswers: ["He was an abolitionist"],
                    incorrectAnswers: [
                        "He was a slave trader",
                        "He was a plantation owner",
                        "He was a former slave",
                        "He was a member of the Royal Navy",
                        "He was a Quaker"
                    ]
                }
            ]
        },
        {
            question: "What was William Wilberforce's profession?",
            correctAnswers: ["Member of Parliament"],
            incorrectAnswers: [
                "Evangelical preacher",
                "Quaker activist",
                "Ship captain",
                "Slave plantation owner",
                "Lawyer",
                "Historian",
                "Teacher"
            ]
        },
        {
            question: "What was William Wilberforce's religion?",
            correctAnswers: [
                "Evangelical Christian"
            ],
            incorrectAnswers: [
                "Quaker",
                "Catholic",
                "Atheist",
                "Buddhist",
                "Hindu",
                "Muslim",
                "Jewish",
                "Sikh"
            ]
        },
        //{
        //    question: "What was the result of the efforts by William Wilberforce and other abolitionists regarding the slave trade?",
        //    correctAnswers: [
        //        "Turning public opinion against the slave trade"
        //    ],
        //    incorrectAnswers: [
        //        "Legalizing the slave trade",
        //        "Ending the slave trade in 1807",
        //        "Abolishing slavery in 1833",
        //        "Starting the slave trade",
        //        "Promoting the slave trade",
        //        "Strengthening the slave trade"
        //    ]
        //},
        //{
        //    question: "Who were the abolitionists in the context of the slave trade?",
        //    correctAnswers: [
        //        "People who supported the abolition of slavery"
        //    ],
        //    incorrectAnswers: [
        //        "People who supported the expansion of slavery",
        //        "Members of the British Parliament exclusively",
        //        "Slave traders",
        //        "Plantation owners",
        //        "Quakers only",
        //        "The Royal Navy"
        //    ]
        //},
        //{
        //    question: "What did William Wilberforce and other abolitionists achieve together?",
        //    correctAnswers: [
        //        "Turning public opinion against the slave trade"
        //    ],
        //    incorrectAnswers: [
        //        "Abolishing the Emancipation Act",
        //        "Introducing slavery to Britain",
        //        "Starting the anti-slavery movement by the Quakers",
        //        "Establishing the slave trade",
        //        "Increasing the demand for slaves",
        //        "Reducing public awareness of slavery"
        //    ]
        //},
        {
            questions: [
                {
                    question: "What year did it become illegal to trade slaves in British ships or from British ports?",
                    correctAnswers: ["1807"],
                    mandatoryIncorrectAnswers: ["1833"],
                    incorrectAnswers: getDates(1600, 1900, [1807, 1833], false)
                },
                { // KEY QUESTION
                    question: "With regard to the slave trade, what did the 1807 Act of Parliament make illegal?",
                    correctAnswers: [
                        "Trading slaves in British ships",
                        "Trading slaves from British ports"
                    ],
                    incorrectAnswers: [
                        "Owning slaves in Britain",
                        "Owning slaves in British colonies"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "In what year was the Emancipation Act enacted, abolishing slavery throughout the British Empire?",
                    correctAnswers: ["1833"],
                    mandatoryIncorrectAnswers: ["1807"],
                    incorrectAnswers: getDates(1600, 1900, [1833, 1807], false),
                    explanation:
                        "Although in the Life in the UK test book it's called \"The Emancipation Act\", " +
                        "the correct name is the \"Slavery Abolition Act 1833\"."
                },
                { // KEY QUESTION
                    question: "With regard to the slave trade, what did the 1833 Act of Parliament make illegal?",
                    correctAnswers: ["Owning slaves throughout the British Empire"],
                    incorrectAnswers: [
                        "Trading slaves in British ships",
                        "Trading slaves from British ports"
                    ],
                    explanation: "The trading of slaves was made illegal in an earlier act."
                }
            ]
        },
        { // KEY QUESTION
            question:
                "What actions did the Royal Navy take against slave ships from other countries " +
                "following the passage of the Emancipation Act in 1833? (Select all that apply)",
            correctAnswers: [
                "Stopped slave ships",
                "Freed the slaves",
                "Punished the slave traders"
            ],
            incorrectAnswers: [
                "Allowed slave ships to continue",
                "Enforced the slave trade",
                "Transported slaves to the British Empire",
                "Ignored the activities of slave traders",
                "Supported slave traders",
                "Condemned slave ships but took no action",
                "Protected the rights of slave traders"
            ]
        },
        { // KEY QUESTION
            questions: [
                {
                    question: "Which of the following nationalities were workers employed to replace the freed slaves in the British Empire after 1833? (Select all that apply)",
                    correctAnswers: ["Indian", " Chinese"],
                    incorrectAnswers: [
                        "Canadian",
                        "Australian",
                        "South African",
                        "Malayan",
                        "Guianan",
                        "Caribbean",
                        "Burmese",
                        "Russian",
                        "Brazilian"
                    ]
                },
                {
                    question: "How many Indian and Chinese workers were employed in the British Empire to replace the freed slaves after the Emancipation Act of 1833?",
                    correctAnswers: [
                        "2 million"
                    ],
                    incorrectAnswers: [
                        "100,000",
                        "500,000",
                        "750,000",
                        "1 million",
                        "3 million",
                        "4 million",
                        "5 million"
                    ]
                },
            ]
        },
        {
            question: "After the abolition of slavery in the British Empire, workers were employed to replace slaves, where were these workers employed in the Caribbean?",
            correctAnswers: [
                "Sugar plantations"
            ],
            incorrectAnswers: [
                "Cotton farms",
                "Rice fields",
                "Indigo farms",
                "Spice plantations",
                "Coffee farms",
                "Tea plantations"
            ]
        },
        {
            question: "After the abolition of slavery in the British Empire, workers were employed to replace slaves, in which industry were these workers employed in South Africa?",
            correctAnswers: [
                "Mines"
            ],
            incorrectAnswers: [
                "Textile factories",
                "Oil refineries",
                "Coal plants",
                "Fishing industry",
                "Construction sites"
            ]
        },
        {
            question: "After the abolition of slavery in the British Empire, workers were employed to replace slaves, on what were these workers employed in East Africa?",
            correctAnswers: [
                "Railways"
            ],
            incorrectAnswers: [
                "Roads",
                "Bridges",
                "Ports",
                "Dams",
                "Canals"
            ]
        },
        {
            question: "Significant numbers of indians were employed in the army of which of the following regions during the time of British rule?",
            correctAnswers: ["Kenya"],
            incorrectAnswers: [
                "Canada",
                "Australia",
                "South Africa"
            ]
        }
    ];

    let category = {
        name: "The slave trade",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
