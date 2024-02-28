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
        //{
        //    question: "Who set up the first formal anti-slavery groups in Britain?",
        //    correctAnswers: [
        //        "Quakers"
        //    ],
        //    incorrectAnswers: [
        //        "Anglicans",
        //        "Catholics",
        //        "Methodists",
        //        "Presbyterians",
        //        "Baptists",
        //        "Unitarians",
        //        "Lutherans"
        //    ]
        //},
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
        //{
        //    question: "What role did William Wilberforce play in the movement against slavery?",
        //    correctAnswers: [
        //        "Played an important role in changing the law"
        //    ],
        //    incorrectAnswers: [
        //        "Founded the first formal anti-slavery group",
        //        "Was a leading slave trader",
        //        "Opposed the Emancipation Act",
        //        "Was a member of the Royal Navy",
        //        "Was a Quaker leader",
        //        "Led slave revolts",
        //        "Was a slave ship captain"
        //    ]
        //},
        //{
        //    question: "What was William Wilberforce's profession?",
        //    correctAnswers: [
        //        "Member of Parliament"
        //    ],
        //    incorrectAnswers: [
        //        "Evangelical preacher",
        //        "Quaker activist",
        //        "Ship captain",
        //        "Slave plantation owner",
        //        "Lawyer",
        //        "Historian",
        //        "Teacher"
        //    ]
        //},
        //{
        //    question: "What was William Wilberforce's religion?",
        //    correctAnswers: [
        //        "Evangelical Christian"
        //    ],
        //    incorrectAnswers: [
        //        "Quaker",
        //        "Catholic",
        //        "Atheist",
        //        "Buddhist",
        //        "Hindu",
        //        "Muslim",
        //        "Jewish"
        //    ]
        //},
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
        //{
        //    question: "What year did it become illegal to trade slaves in British ships or from British ports?",
        //    correctAnswers: [
        //        "1807"
        //    ],
        //    incorrectAnswers: [
        //        "1833",
        //        "1700",
        //        "1780",
        //        "1750",
        //        "1850",
        //        "1820",
        //        "1870"
        //    ]
        //},
        //{
        //    question: "What Act abolished slavery throughout the British Empire?",
        //    correctAnswers: [
        //        "the Emancipation Act"
        //    ],
        //    incorrectAnswers: [
        //        "the Abolition Act",
        //        "the Freedom Act",
        //        "the Liberation Act",
        //        "the Slavery Act",
        //        "the Manumission Act",
        //        "the Slave Trade Act"
        //    ]
        //},
        //{
        //    question: "In what year was the Emancipation Act enacted, abolishing slavery throughout the British Empire?",
        //    correctAnswers: [
        //        "1833"
        //    ],
        //    incorrectAnswers: [
        //        "1807",
        //        "1700",
        //        "1780",
        //        "1750",
        //        "1850",
        //        "1820",
        //        "1870"
        //    ]
        //},
        //{
        //    question: "What actions did the Royal Navy take against slave ships from other countries following the passage of the Emancipation Act in 1833?",
        //    correctAnswers: [
        //        "Stopped slave ships",
        //        "Freed the slaves",
        //        "Punished the slave traders"
        //    ],
        //    incorrectAnswers: [
        //        "Allowed slave ships to continue",
        //        "Enforced the slave trade",
        //        "Transported slaves to the British Empire",
        //        "Ignored the activities of slave traders",
        //        "Supported slave traders",
        //        "Condemned slave ships but took no action",
        //        "Protected the rights of slave traders"
        //    ]
        //},
        //{
        //    question: "Who did the Royal Navy free after stopping slave ships from other countries during the period of enforcing the 1807 abolition of the slave trade?",
        //    correctAnswers: [
        //        "The slaves"
        //    ],
        //    incorrectAnswers: [
        //        "The slave traders",
        //        "The plantation owners",
        //        "The sailors",
        //        "The British citizens",
        //        "Animals",
        //        "Goods and commodities"
        //    ]
        //},
        //{
        //    question: "What action did the Royal Navy take against slave traders after intercepting their ships post-1807?",
        //    correctAnswers: [
        //        "Punished the slave traders"
        //    ],
        //    incorrectAnswers: [
        //        "Recruited the slave traders",
        //        "Paid compensation to the slave traders",
        //        "Granted freedom to the slave traders",
        //        "Offered amnesty to the slave traders",
        //        "Gave awards to the slave traders",
        //        "Hired the slave traders as consultants"
        //    ]
        //},
        //{
        //    question: "What was the nationality of the workers who were employed to replace the freed slaves after 1833?",
        //    correctAnswers: [
        //        "Indian and Chinese"
        //    ],
        //    incorrectAnswers: [
        //        "African and Caribbean",
        //        "American and European",
        //        "British and French",
        //        "African and Asian",
        //        "South American and Russian",
        //        "European and African",
        //        "Middle Eastern and South American"
        //    ]
        //},
        //{
        //    question: "How many Indian and Chinese workers were employed in the British Empire to replace the freed slaves after the Slavery Abolition Act of 1833?",
        //    correctAnswers: [
        //        "2 million"
        //    ],
        //    incorrectAnswers: [
        //        "1 million",
        //        "3 million",
        //        "500,000",
        //        "4 million",
        //        "750,000",
        //        "5 million",
        //        "100,000"
        //    ]
        //},
        //{
        //    question: "In which year did the British Empire begin employing Indian and Chinese workers to replace the freed slaves following the passage of the Emancipation Act?",
        //    correctAnswers: [
        //        "After 1833"
        //    ],
        //    incorrectAnswers: [
        //        "After 1807",
        //        "Before 1807",
        //        "After 1750",
        //        "Before 1833",
        //        "After 1900",
        //        "Before 1700"
        //    ]
        //},
        //{
        //    question: "After the abolition of slavery in the British Empire, where were Indian and Chinese workers employed in the Caribbean?",
        //    correctAnswers: [
        //        "Sugar plantations"
        //    ],
        //    incorrectAnswers: [
        //        "Cotton farms",
        //        "Rice fields",
        //        "Indigo farms",
        //        "Spice plantations",
        //        "Coffee farms",
        //        "Tea plantations"
        //    ]
        //},
        //{
        //    question: "In which industry were Indian and Chinese workers employed in South Africa after the abolition of slavery in the British Empire?",
        //    correctAnswers: [
        //        "Mines"
        //    ],
        //    incorrectAnswers: [
        //        "Textile factories",
        //        "Oil refineries",
        //        "Coal plants",
        //        "Fishing industry",
        //        "Construction sites",
        //        "Agricultural farms"
        //    ]
        //},
        //{
        //    question: "Following the abolition of slavery in the British Empire, Indian and Chinese workers were employed on what type of infrastructure in East Africa?",
        //    correctAnswers: [
        //        "Railways"
        //    ],
        //    incorrectAnswers: [
        //        "Highways",
        //        "Bridges",
        //        "Airports",
        //        "Dams",
        //        "Canals",
        //        "Telecommunication networks"
        //    ]
        //},
        //{
        //    question: "After the Emancipation Act of 1833 abolished slavery throughout the British Empire, in which sector were Indian and Chinese workers employed in Kenya?",
        //    correctAnswers: [
        //        "The army"
        //    ],
        //    incorrectAnswers: [
        //        "Education",
        //        "Healthcare",
        //        "Law enforcement",
        //        "Banking",
        //        "Tourism",
        //        "Agriculture"
        //    ]
        //},
        //{
        //    question: "Which groups of workers were employed in the army in Kenya after the abolition of slavery in the British Empire?",
        //    correctAnswers: [
        //        "Indian and Chinese workers"
        //    ],
        //    incorrectAnswers: [
        //        "Former British slaves",
        //        "European immigrants",
        //        "American soldiers",
        //        "African natives",
        //        "Middle Eastern laborers",
        //        "Caribbean migrants"
        //    ]
        //},
        //{
        //    question: "What is the religious affiliation of the Quakers?",
        //    correctAnswers: [
        //        "Protestant"
        //    ],
        //    incorrectAnswers: [
        //        "Catholic",
        //        "Orthodox",
        //        "Buddhist",
        //        "Hindu",
        //        "Muslim",
        //        "Jewish"
        //    ]
        //}
    ];

    let category = {
        name: "The slave trade (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
