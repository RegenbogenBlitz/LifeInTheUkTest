(() => {
    let questions = [
        {
            question: "At the coronation of which monarch(s) was the Declaration of Rights read?",
            correctAnswers: [
                "William III and Mary II"
            ],
            incorrectAnswers: [
                "Henry VIII",
                "Edward VI",
                "Mary I",
                "Elizabeth I",
                "James VI",
                "Charles I",
                "Charles II",
                "James II",
                "Anne",
                "George I",
                "George II",
                "George III",
            ]
        },
        {
            question: "Who must agree before the king can raise taxes or administer justice according to the Declaration of Rights?",
            correctAnswers: [
                "Parliament"
            ],
            incorrectAnswers: [
                "The Prime Minister",
                "The public through a referendum",
                "The monarch's advisory council",
                "Local governments",
                "The clergy",
                "The barons",
            ]
        },
        {
            question: "How did the balance of power between monarch and Parliament change after the coronation of William and Mary?",
            correctAnswers: [
                "It permanently changed"
            ],
            incorrectAnswers: [
                "It temporarily changed",
                "It remained the same",
                "It shifted completely to the monarch",
                "It shifted completely to Parliament"
            ]
        },
        {
            question: "Which event, during the reign of William and Mary, marked the permanent change in the balance of power between monarch and Parliament?",
            correctAnswers: [
                "The agreement to the Declaration of Rights"
            ],
            incorrectAnswers: [
                "The signing of the Magna Carta",
                "The agreement to the Provisions of Oxford",
                "The issuing of the Statute of Westminster",
                "The issuing of the Statute of Marlborough",
                "The signing of the Petition of Right",
                "The Act of Union with Scotland"
            ]
        },
        {
            questions: [
                {
                    question: "What did the Bill of Rights, 1689 confirm? (Select all that apply)",
                    correctAnswers: [
                        "the rights of Parliament",
                        "the limits of the king's power"
                    ],
                    incorrectAnswers: [
                        "the absolute power of the king",
                        "the right to vote for all adult males",
                        "the independence of the judiciary",
                        "the establishment of political parties",
                        "the authority of the prime minister",
                        "secret ballots for elections",
                    ]
                },
                {
                    question: "In which year did the Bill of Rights pass into law?",
                    correctAnswers: ["1689"],
                    incorrectAnswers: getDates(1485, 1800, [1689], false)
                },
            ]
        },
        {
            questions: [
                {
                    question: "What religious affiliation did Parliament declare was required for the monarch, according to the Bill of Rights?",
                    correctAnswers: ["Protestant"],
                    mandatoryIncorrectAnswers: ["Catholic"],
                    incorrectAnswers: [
                        "Jewish",
                        "Muslim",
                        "Hindu",
                        "Buddhist",
                        "Sikh"
                    ],
                    explanation: "Technically the Bill of Rights says they must not be a Papist, not that they must be a Protestant."
                },
                {
                    question: "Who did Parliament declare must be a Protestant, according to the Bill of Rights?",
                    correctAnswers: [
                        "The king or queen"
                    ],
                    incorrectAnswers: [
                        "The members of Parliament",
                        "The prime minister",
                        "The archbishop",
                        "All citizens",
                        "Members of the House of Lords",
                        "Members of the House of Commons"
                    ],
                    explanation:
                        "Technically the Bill of Rights says they must not be a Papist, not that they must be a Protestant. " +
                        "However the Bill requires them to make a declaration (from the Test Act) against various catholic practices and associate themselves with Protestants. " +
                        "Members of Parliament were barred from being Catholic by the Test Acts of 1673 & 1678, which was referred to and reaffirmed in the Bill of Rights."
                },
                {
                    question: "Under whose reign did parliament take control of who could be monarch?",
                    correctAnswers: [
                        "William III and Mary II"
                    ],
                    incorrectAnswers: [
                        "Henry VIII",
                        "Edward VI",
                        "Mary I",
                        "Elizabeth I",
                        "James VI",
                        "Charles I",
                        "Charles II",
                        "James II",
                        "Anne",
                        "George I",
                        "George II",
                        "George III",
                    ],
                    explanation:
                        "The Bill of Rights established that only Protestants could be monarch. " +
                        "The Act of Settlement 1701, which was passed during the reign of just William III, also established that only Protestants could be monarch."
                }
            ]
        },
        {
            question: "When must a new parliament be elected according to the current UK law?",
            correctAnswers: ["Every five years"],
            mandatoryIncorrectAnswers: ["Every three years", "Every seven years"],
            incorrectAnswers: [
                "Every four years",
                "Every six years",
                "Every ten years",
                "When the monarch decides"
            ]
        },
        {
            questions: [
                {
                    question: "During the reign of William and Mary, when did a new parliament have to be elected?",
                    correctAnswers: ["Every three years"],
                    mandatoryIncorrectAnswers: ["Every five years", "Every seven years"],
                    incorrectAnswers: [
                        "Every four years",
                        "Every six years",
                        "Every ten years",
                        "When the monarch decides"
                    ]
                },
                {
                    question: "During the reign of William and Mary, Parliament had to be elected every three years. What was this, not long after, extended to?",
                    correctAnswers: ["Every seven years"],
                    mandatoryIncorrectAnswers: ["Every five years"],
                    incorrectAnswers: [
                        "Every four years",
                        "Every six years",
                        "Every ten years",
                        "When the monarch decides"
                    ]
                },
            ]
        },
        {
            question: "During the reign of William and Mary, how often did the monarch have to ask Parliament to renew funding for the army and the navy?",
            correctAnswers: [
                "Every year"
            ],
            incorrectAnswers: [
                "Every two years",
                "Every five years",
                "Every three years",
                "Once during their reign",
                "Only once every decade",
                "Biannually",
                "When Parliament deemed it necessary"
            ]
        },
        {
            question: "After the Glorious Revolution, what did the monarch now need to govern effectively?",
            correctAnswers: [
                "Advisers or ministers who could ensure a majority of votes in both houses of Parliament"
            ],
            incorrectAnswers: [
                "A private army which could enforce their will",
                "Substantial funds to bribe members of Parliament and other influential people",
                "The support of foreign governments who could provide military aid if necessary",
                "A hereditary council which could overrule Parliament",
                "The support of the Church of England which could influence the population",
            ]
        },
        {
            question: "What were the two main groups in Parliament after the Glorious Revolution? (Select all that apply)",
            correctAnswers: [
                "Whigs",
                "Tories"
            ],
            incorrectAnswers: [
                "Liberals",
                "Conservatives",
                "Labour",
                "Social Democrats",
                "Unionists",
                "Nationalists",
                "Independents"
            ]
        },
        {
            questions: [
                {
                    question: "Which historical political groups in Parliament are the ancestors of the modern Conservative Party?",
                    correctAnswers: [
                        "Tories"
                    ],
                    incorrectAnswers: [
                        "Whigs",
                        "Liberals",
                        "Labour",
                        "Social Democrats",
                        "Unionists",
                        "Nationalists",
                        "Republicans",
                    ]
                },
                {
                    question: "Which modern political party is sometimes referred to as the Tories?",
                    correctAnswers: [
                        "The Conservative Party"
                    ],
                    incorrectAnswers: [
                        "The Labour Party",
                        "The Liberal Democrats",
                        "The Green Party",
                        "The UK Independence Party",
                        "The Scottish National Party",
                        "Plaid Cymru"
                    ]
                }
            ]
        },
        {
            question: "What marked the beginning of party politics in the UK?",
            correctAnswers: [
                "The emergence of the Whigs and Tories"
            ],
            incorrectAnswers: [
                "Universal suffrage",
                "The creation of the office of Prime Minister",
                "The first general election",
                "The founding of the Liberal Party",
            ]
        },
        {
            question: "What is the definition of 'party politics'?",
            correctAnswers: [
                "The shared ideas and beliefs of an organised group of politicians"
            ],
            incorrectAnswers: [
                "The process of electing political leaders",
                "A system where only one political idea exists",
                "The social events hosted by politicians",
                "The method by which politicians finance their campaigns",
                "The division of a country into political districts"
            ],
            explanation: "This is the definition of 'party politics' according to the Life in the UK Test handbook."
        },
        {
            question: "What does the term 'free press' mean?",
            correctAnswers: [
                "Newspapers and other publications which are not controlled by the government"
            ],
            incorrectAnswers: [
                "Publications sponsored by the government",
                "Press agencies that were free of charge",
                "News outlets controlled by the monarchy",
                "Media that was freely distributed to the public",
                "Journals that only published government-approved content",
                "Publications that were freely available without any cost",
                "Press that was restricted to publishing only certain types of news"
            ]
        },
        {
            question: "In which year were newspapers allowed to operate without needing a government licence?",
            correctAnswers: [
                "1695"
            ],
            incorrectAnswers: getDates(1600, 1850, [1695], false)
        },
        {
            question: "What change occurred in the publication of newspapers after the removal of the requirement to have a government license?",
            correctAnswers: [
                "Increasing numbers of newspapers began to be published"
            ],
            incorrectAnswers: [
                "Only a few newspapers remained operational",
                "Publication of newspapers decreased significantly",
                "Newspapers were required to publish government propaganda",
            ]
        },
        {
            question: "What term is used to describe the type of monarchy established by the laws passed after the Glorious Revolution?",
            correctAnswers: [
                "constitutional monarchy"
            ],
            incorrectAnswers: [
                "absolute monarchy",
                "federal monarchy",
                "elective monarchy",
                "hereditary monarchy",
                "ceremonial monarchy"
            ]
        },
        {
            question: "After the Glorious Revolution, what best describes the importance of the monarch?",
            correctAnswers: [
                "They remained very important, but their powers were limited by law"
            ],
            incorrectAnswers: [
                "Their importance decreased significantly, as they became a figurehead with no real power",
                "Their importance increased significantly, as they gained absolute power",
                "They remained very important, as little changed in the way the country was governed",
                "They ceased being important, as they were removed from power",
            ]
        },
        {
            question: "After the Glorious Revolution, what was the monarch's limitation regarding policies and actions?",
            correctAnswers: [
                "They could no longer insist on particular policies or actions if parliament did not agree"
            ],
            incorrectAnswers: [
                "They was required to seek approval from the Church before implementing any policies or actions",
                "They was not allowed to make any decisions regarding foreign policies without the consent of the neighboring countries",
                "They could only implement policies or actions that were in line with the economic interests of the merchant class",
                "They was prohibited from changing policies or actions once they were implemented, even if circumstances changed",
                "They was not allowed to implement any policies or actions without a public referendum",
                "They had to obtain unanimous agreement from all members of parliament before implementing any policies or actions"
            ]
        },
        {
            question: "After the reign of William III, how did the importance of ministers in the government compare to the monarch's power?",
            correctAnswers: [
                "The ministers gradually became more important than the monarch"
            ],
            incorrectAnswers: [
                "The monarch became more important than the ministers",
                "The ministers' importance remained the same as the monarch's",
                "The ministers were abolished",
                "The monarch's powers were completely transferred to the ministers",
                "The monarch and ministers became equal partners"
            ]
        },
        {
            questions: [
                {
                    question: "After William III's reign, England was NOT a democracy in the modern sense. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "After William III's reign, England was a democracy in the modern sense. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            question: "How many people had the right to vote for members of Parliament after the Glorious Revolution?",
            correctAnswers: [
                "a very small number of people"
            ],
            incorrectAnswers: [
                "a small but significant number of people",
                "a large number of people",
                "most people"
            ]
        },
        {
            question: "Who was eligible to vote for members of Parliament after the Glorious Revolution?",
            correctAnswers: [
                "Only men who owned property of a certain value"
            ],
            incorrectAnswers: [
                "All male property owners",
                "Every adult male",
                "Male and female property owners",
                "Only men who had a title of nobility",
                "Every adult citizen",
            ]
        },
        {
            question: "Which genders were allowed to vote (based on property ownership) after the Glorious Revolution?",
            correctAnswers: [
                "Men"
            ],
            incorrectAnswers: [
                "Men and women",
                "Only married men",
                "Men and unmarried women"
            ]
        },
        {
            questions: [
                {
                    question: "What term was used to describe constituencies that were controlled by a single wealthy family?",
                    correctAnswers: ["pocket boroughs"],
                    mandatoryIncorrectAnswers: ["rotten boroughs"],
                    incorrectAnswers: [
                        "family boroughs",
                        "wealthy boroughs",
                        "controlled boroughs",
                        "private boroughs",
                    ]
                },
                {
                    question: "Which type of constituencies were known as 'pocket boroughs'?",
                    correctAnswers: ["Those controlled by a single wealthy family"],
                    mandatoryIncorrectAnswers: ["Those with hardly any voters"],
                    incorrectAnswers: [
                        "Those where the monarch had full control",
                        "Those where the MP was under the control of the church",
                        "Those controlled by someone from the wool industry",
                        "Those which were especially wealthy",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What term was used to describe constituencies with hardly any voters?",
                    correctAnswers: ["rotten boroughs"],
                    mandatoryIncorrectAnswers: ["pocket boroughs"],
                    incorrectAnswers: [
                        "empty boroughs",
                        "lonely boroughs",
                        "corrupt boroughs",
                        "ghost boroughs",
                        "monopoly boroughs",
                        "devil's boroughs",
                        "decadent boroughs",
                    ]
                },
                {
                    question: "Which type of constituencies were known as 'rotten boroughs'?",
                    correctAnswers: ["Those with hardly any voters"],
                    mandatoryIncorrectAnswers: ["Those controlled by a single wealthy family"],
                    incorrectAnswers: [
                        "Those where the monarch had full control",
                        "Those where agriculture had declined significantly",
                        "Those which were especially poor",
                        "Those with an MP who had been convicted of a crime"
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "Constitutional Monarchy - the Bill of Rights",
        questions: questions,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
