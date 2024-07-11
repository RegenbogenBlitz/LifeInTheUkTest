(() => {
    let questions = [
        {
            question: "In the early 19th century, which social class began to demand more political power?",
            correctAnswers: [
                "Middle class"
            ],
            incorrectAnswers: [
                "Working class",
                "Upper class",
                "Nobility",
                "Clergy",
                "Peasant"
            ]
        },
        //{
        //    question: "In which locations did the middle classes in Britain grow in influence and begin to demand more political power during the 19th century industrial period?",
        //    correctAnswers: [
        //        "Wealthy industrial towns and cities"
        //    ],
        //    incorrectAnswers: [
        //        "Rural countryside",
        //        "Capital cities only",
        //        "Coastal regions",
        //        "Agricultural villages",
        //        "Suburban areas",
        //        "Colonial territories",
        //        "Market towns"
        //    ]
        //},
        //{
        //    question: "What did the middle classes in the wealthy industrial towns and cities demand as they grew in influence?",
        //    correctAnswers: [
        //        "More political power"
        //    ],
        //    incorrectAnswers: [
        //        "Higher wages",
        //        "Lower taxes",
        //        "Better housing",
        //        "Improved education",
        //        "Trade rights",
        //        "Religious freedoms",
        //        "Land ownership"
        //    ]
        //},
        {
            question: "What was the impact of the Reform Act in the early 1800s on the electorate?",
            correctAnswers: [
                "It greatly increased the number of people with the right to vote."
            ],
            incorrectAnswers: [
                "It decreased the number of people with the right to vote.",
                "It did not change the number of people with the right to vote.",
                "It only allowed property owners to vote.",
                "It allowed women to vote.",
                "It introduced universal suffrage."
            ]
        },
        {
            questions: [

                {
                    question: "What did the Reform Act in the early 1800s abolish in terms of electoral districts? (Select all that apply)",
                    correctAnswers: [
                        "Pocket boroughs",
                        "Rotten boroughs"
                    ],
                    incorrectAnswers: [
                        "Metropolitan boroughs",
                        "County boroughs",
                        "Island boroughs",
                        "University boroughs",
                        "Royal boroughs"
                    ]
                },
                {
                    question: "In what year was the Reform Act that abolished pocket and rotten boroughs passed?",
                    correctAnswers: ["1832"],
                    incorrectAnswers: getDates(1700, 1970, [1832], false)
                }
            ]
        },
        {
            question: "After the Reform Act in the early 1800s, which areas were allocated more parliamentary seats?",
            correctAnswers: [
                "Towns and cities"
            ],
            incorrectAnswers: [
                "Rural areas",
                "Scotland",
                "Ireland",
                "Universities",
                "Islands"
            ]
        },
        //{
        //    question: "What was the basis for voting in Britain after the Reform Act of 1832, which shifted political power from the countryside to the towns?",
        //    correctAnswers: [
        //        "Ownership of property"
        //    ],
        //    incorrectAnswers: [
        //        "Gender",
        //        "Age",
        //        "Ethnicity",
        //        "Educational attainment",
        //        "Income level",
        //        "Birthright",
        //        "Military service"
        //    ]
        //},
        //{
        //    question: "After which event did the permanent shift of political power from the countryside to the towns occur in Britain, while voting was still based on ownership of property?",
        //    correctAnswers: [
        //        "After the Reform Act of 1832"
        //    ],
        //    incorrectAnswers: [
        //        "Before the Reform Act of 1832",
        //        "During the Industrial Revolution",
        //        "After the Reform Act of 1867"
        //    ]
        //},
        //{
        //    question: "Was the shift of political power from the countryside to the towns after the Reform Act of 1832 temporary or permanent?",
        //    correctAnswers: [
        //        "Permanent"
        //    ],
        //    incorrectAnswers: [
        //        "Temporary",
        //        "Intermittent",
        //        "Seasonal",
        //        "Conditional",
        //        "Reversible",
        //        "Cyclical",
        //        "Unpredictable"
        //    ]
        //},
        //{
        //    question: "What was the status of the working class regarding voting rights after the Reform Act of 1832?",
        //    correctAnswers: [
        //        "Members of the working class were still unable to vote"
        //    ],
        //    incorrectAnswers: [
        //        "Members of the working class were granted the right to vote",
        //        "Only landowners in the working class could vote",
        //        "Only the working class in urban areas could vote",
        //        "All members of the working class could vote if they were over 21",
        //        "Working class women were granted the right to vote",
        //        "Working class individuals with a certain level of education could vote"
        //    ]
        //},
        //{
        //    question: "What was the primary demand of the movement that began among the working classes and people without property in the 19th century?",
        //    correctAnswers: [
        //        "The right to vote"
        //    ],
        //    incorrectAnswers: [
        //        "Higher wages",
        //        "Better working conditions",
        //        "Education for all",
        //        "Land ownership rights",
        //        "Abolition of slavery",
        //        "Reform of the House of Lords",
        //        "Lower taxes"
        //    ]
        //},
        //{
        //    question: "Who did the Chartists' movement aim to benefit according to the passage about 19th-century political reforms?",
        //    correctAnswers: [
        //        "The working classes and people without property"
        //    ],
        //    incorrectAnswers: [
        //        "The middle classes",
        //        "The aristocracy",
        //        "Factory owners",
        //        "Women exclusively",
        //        "Children",
        //        "Landowners",
        //        "The clergy"
        //    ]
        //},
        //{
        //    question: "Which social groups began a movement to demand the right to vote in 19th century Britain?",
        //    correctAnswers: [
        //        "The working classes and people without property"
        //    ],
        //    incorrectAnswers: [
        //        "The middle classes",
        //        "Farmers",
        //        "The gentry",
        //        "University graduates",
        //        "Merchants",
        //        "Artisans",
        //        "The military"
        //    ]
        //},
        //{
        //    question: "What was the name given to the campaigners who presented petitions to Parliament demanding the vote for the working classes and people without property?",
        //    correctAnswers: [
        //        "Chartists"
        //    ],
        //    incorrectAnswers: [
        //        "Reformists",
        //        "Suffragettes",
        //        "Abolitionists",
        //        "Puritans",
        //        "Loyalists",
        //        "Federalists",
        //        "Unionists"
        //    ]
        //},
        //{
        //    question: "What action did the Chartists take to demand the vote for the working classes and people without property?",
        //    correctAnswers: [
        //        "Presented petitions to Parliament"
        //    ],
        //    incorrectAnswers: [
        //        "Organized strikes",
        //        "Formed a political party",
        //        "Led armed rebellions",
        //        "Held public debates",
        //        "Established a newspaper",
        //        "Conducted hunger strikes",
        //        "Staged peaceful protests"
        //    ]
        //},
        //{
        //    question: "Which Act in 1867 marked a significant change in the political landscape, despite initial lack of success for the Chartists?",
        //    correctAnswers: [
        //        "Another Reform Act"
        //    ],
        //    incorrectAnswers: [
        //        "The establishment of universal suffrage",
        //        "The first Reform Act",
        //        "The abolition of pocket and rotten boroughs",
        //        "A change in property ownership laws",
        //        "The creation of urban seats in Parliament",
        //        "The beginning of the women's suffrage movement"
        //    ]
        //},
        //{
        //    question: "Which year saw the passage of the Reform Act that followed the initial unsuccessful efforts of the Chartists?",
        //    correctAnswers: [
        //        "1867"
        //    ],
        //    incorrectAnswers: [
        //        "1832",
        //        "1870",
        //        "1882",
        //        "1918",
        //        "1928",
        //        "1967"
        //    ]
        //},
        //{
        //    question: "Which movement faced initial failure but eventually saw progress with a Reform Act in 1867?",
        //    correctAnswers: [
        //        "The Chartists"
        //    ],
        //    incorrectAnswers: [
        //        "The Suffragettes",
        //        "The Labor Union",
        //        "The Conservative Party",
        //        "The Liberal Party",
        //        "The Whig Party",
        //        "The Tory Party"
        //    ]
        //},
        //{
        //    question: "What did the Reform Act of 1867 accomplish regarding parliamentary seats?",
        //    correctAnswers: [
        //        "It created many more urban seats in Parliament."
        //    ],
        //    incorrectAnswers: [
        //        "It abolished the old pocket and rotten boroughs.",
        //        "It increased the number of rural seats in Parliament.",
        //        "It gave women the right to vote.",
        //        "It provided universal suffrage.",
        //        "It removed the property qualification entirely for voting.",
        //        "It decreased the number of urban seats in Parliament."
        //    ]
        //},
        //{
        //    question: "What change did the Reform Act of 1867 make to the property qualification for voting?",
        //    correctAnswers: [
        //        "It reduced the amount of property that people needed to have before they could vote."
        //    ],
        //    incorrectAnswers: [
        //        "It eliminated the property qualification for voting.",
        //        "It increased the amount of property needed to vote.",
        //        "It made property ownership the only requirement for voting.",
        //        "It extended the property qualification to women.",
        //        "It made no changes to the property qualification for voting.",
        //        "It introduced a new property tax for voters."
        //    ]
        //},
        //{
        //    question: "Which group of people still did not have the majority with the right to vote after the Reform Act of 1867?",
        //    correctAnswers: [
        //        "Men"
        //    ],
        //    incorrectAnswers: [
        //        "Women",
        //        "Property owners",
        //        "Members of Parliament",
        //        "The working class",
        //        "Landowners",
        //        "The middle class"
        //    ]
        //},
        //{
        //    question: "Who was completely excluded from voting after the Reform Act of 1867?",
        //    correctAnswers: [
        //        "Women"
        //    ],
        //    incorrectAnswers: [
        //        "Men",
        //        "The working class",
        //        "Property owners",
        //        "Members of Parliament",
        //        "Landowners",
        //        "The middle class"
        //    ]
        //},
        //{
        //    question: "What did politicians realise they needed to do with the increased numbers of voters in 19th century Britain?",
        //    correctAnswers: [
        //        "Persuade people to vote for them"
        //    ],
        //    incorrectAnswers: [
        //        "Reduce the number of voters",
        //        "Increase property requirements",
        //        "Appeal to the monarchy for support",
        //        "Introduce mandatory voting",
        //        "Eliminate political parties",
        //        "Persuade people not to vote for them"
        //    ]
        //},
        //{
        //    question: "Why did politicians need to persuade people to vote for them after the number of voters increased due to the 1867 Reform Act?",
        //    correctAnswers: [
        //        "To be sure of being elected to Parliament"
        //    ],
        //    incorrectAnswers: [
        //        "To gain support for the women's suffrage movement",
        //        "To increase tax revenues",
        //        "To support the Chartists' movement",
        //        "To maintain the property-based voting system",
        //        "To revert to the system of pocket and rotten boroughs",
        //        "To be appointed to the House of Lords"
        //    ]
        //},
        //{
        //    question: "What action did political parties take in response to the increased numbers of voters following the Reform Acts in the 19th century?",
        //    correctAnswers: [
        //        "Create organisations to reach out to ordinary voters"
        //    ],
        //    incorrectAnswers: [
        //        "Form coalitions to govern more effectively",
        //        "Establish new voting systems",
        //        "Create laws to restrict voting rights",
        //        "Introduce compulsory voting",
        //        "Develop policies to reduce the number of voters",
        //        "Launch campaigns to educate voters on political issues"
        //    ]
        //},
        //{
        //    question: "What does 'universal suffrage' refer to in the context of British political history?",
        //    correctAnswers: [
        //        "The right of every adult male or female to vote"
        //    ],
        //    incorrectAnswers: [
        //        "The right to stand for election",
        //        "The right to own property",
        //        "The right to free speech",
        //        "The right to a fair trial",
        //        "The right to work",
        //        "The right to education"
        //    ]
        //},
        //{
        //    question: "In which century was universal suffrage for both men and women achieved in Britain?",
        //    correctAnswers: [
        //        "The 20th century"
        //    ],
        //    incorrectAnswers: [
        //        "The 18th century",
        //        "The 19th century",
        //        "The 17th century",
        //        "The 21st century",
        //        "The 16th century",
        //        "The 15th century"
        //    ]
        //},
        //{
        //    question: "In which century was universal suffrage for both men and women achieved in Britain?",
        //    correctAnswers: [
        //        "20th century"
        //    ],
        //    incorrectAnswers: [
        //        "18th century",
        //        "19th century",
        //        "21st century",
        //        "17th century",
        //        "16th century"
        //    ]
        //},
        //{
        //    question: "In which century did women in Britain, in common with the rest of Europe, have fewer rights than men, as described in the provided historical context?",
        //    correctAnswers: [
        //        "19th century"
        //    ],
        //    incorrectAnswers: [
        //        "18th century",
        //        "20th century",
        //        "17th century",
        //        "16th century",
        //        "15th century",
        //        "14th century"
        //    ]
        //},
        //{
        //    question: "In 19th century Britain, did women have the same, more, or fewer rights compared to men?",
        //    correctAnswers: [
        //        "Women had fewer rights than men"
        //    ],
        //    incorrectAnswers: [
        //        "Women had more rights than men",
        //        "Women had equal rights to men",
        //        "Women's rights were not recognized at all",
        //        "Women's rights were superior in Britain compared to Europe",
        //        "Women's rights were largely dependent on their marital status",
        //        "Women's rights were the same as children's rights"
        //    ]
        //},
        //{
        //    question: "Before which year did a woman's earnings, property, and money automatically become her husband's upon marriage in Britain, as per the legal provisions prior to the Married Women's Property Act 1870?",
        //    correctAnswers: [
        //        "1870"
        //    ],
        //    incorrectAnswers: [
        //        "1832",
        //        "1867",
        //        "1882",
        //        "1901",
        //        "1918",
        //        "1928",
        //        "1850"
        //    ]
        //},
        //{
        //    question: "What happened to a woman's earnings, property, and money upon marriage before the year 1870?",
        //    correctAnswers: [
        //        "They automatically belonged to her husband"
        //    ],
        //    incorrectAnswers: [
        //        "They remained her own",
        //        "They were shared equally between spouses",
        //        "They were held in trust",
        //        "They were given to the state",
        //        "They were distributed among her relatives",
        //        "They were donated to charity"
        //    ]
        //},
        //{
        //    question: "In which years were the Acts of Parliament passed that gave wives the right to keep their own earnings and property?",
        //    correctAnswers: [
        //        "1870 and 1882"
        //    ],
        //    incorrectAnswers: [
        //        "1867 and 1870",
        //        "1882 and 1894",
        //        "1875 and 1885",
        //        "1890 and 1900",
        //        "1832 and 1867",
        //        "1850 and 1870"
        //    ]
        //},
        //{
        //    question: "What rights were given to wives by Acts of Parliament in 1870 and 1882?",
        //    correctAnswers: [
        //        "The right to keep their own earnings and property"
        //    ],
        //    incorrectAnswers: [
        //        "The right to vote",
        //        "The right to work",
        //        "The right to education",
        //        "The right to divorce",
        //        "The right to own land independently",
        //        "The right to equal pay"
        //    ]
        //},
        //{
        //    question: "During which time period did an increasing number of women campaign and demonstrate for greater rights, including the right to vote?",
        //    correctAnswers: [
        //        "In the late 19th and early 20th centuries"
        //    ],
        //    incorrectAnswers: [
        //        "In the mid-18th century",
        //        "In the early 19th century",
        //        "During the 17th century",
        //        "In the mid-20th century",
        //        "In the late 18th century",
        //        "After World War II",
        //        "During the Tudor period"
        //    ]
        //},
        //{
        //    question: "What movement did women form in the late 19th and early 20th centuries for greater rights and the right to vote?",
        //    correctAnswers: [
        //        "The women's suffrage movement"
        //    ],
        //    incorrectAnswers: [
        //        "The women's liberation movement",
        //        "The feminist movement",
        //        "The equality movement",
        //        "The Chartists movement",
        //        "The labor rights movement",
        //        "The property rights movement"
        //    ]
        //},
        //{
        //    question: "What name were the members of the women's suffrage movement known by?",
        //    correctAnswers: [
        //        "Suffragettes"
        //    ],
        //    incorrectAnswers: [
        //        "Suffragists",
        //        "Feminists",
        //        "Chartists",
        //        "Liberationists",
        //        "Activists",
        //        "Reformists"
        //    ]
        //},
        //{
        //    question: "In the context of the UK Parliament, what is the term 'seat' synonymous with?",
        //    correctAnswers: [
        //        "a constituency"
        //    ],
        //    incorrectAnswers: [
        //        "a political party",
        //        "a legislative act",
        //        "a government department",
        //        "a parliamentary session",
        //        "a voting system",
        //        "an electoral campaign"
        //    ]
        //}
    ];

    let category = {
        name: "The right to vote",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power"
    }
    quizDeck.categories.push(category);
})();
