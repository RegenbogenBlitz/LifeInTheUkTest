(() => {
    let questions = [
        { // KEY QUESTION
            question: "What is Emmeline Pankhurst famous for?",
            correctAnswers: [
                "Her activism towards voting rights for women"
            ],
            incorrectAnswers: [
                "Her activism towards state provided universal primary education",
                "Her role as a spy during the First World War",
                "The invention of the hoop skirt",
                "Her contributions to nursing practice",
                "Her works of fiction and poetry",
                "Her scientific drawings of microscopic organisms",
                "Her contributions to the field of mathematics",
            ]
        },
        {
            question: "In which city was Emmeline Pankhurst born?",
            correctAnswers: [
                "Manchester"
            ],
            incorrectAnswers: [
                "London",
                "Bristol",
                "Birmingham",
                "Leeds",
                "Liverpool",
                "Southampton",
                "Plymouth",
                "Newcastle",
                "Portsmouth",
                "Edinburgh",
                "Glasgow",
                "Cardiff",
                "Swansea",
                "Belfast",
                "Dublin",
            ]
        },
        {
            question: "In what year did Emeline Pankhurst establish the Women's Franchise League?",
            correctAnswers: [
                "1889"
            ],
            incorrectAnswers: getDates(1700, 1990, [1889], false)
        },
        {
            question: "What was the primary goal of the Women's Franchise League when it was founded by Emeline Pankhurst?",
            correctAnswers: [
                "To get the vote in local elections for married women"
            ],
            incorrectAnswers: [
                "To get voting rights for all women",
                "To allow women to stand for parliament",
                "To protest against political issues through civil disobedience",
                "To contribute to the war effort during the First World War",
                "To support the Women's Social and Political Union",
                "To end the practice of chaining themselves to railings"
            ]
        },
        {
            question: "Who founded the Women's Franchise League?",
            correctAnswers: [
                "Emeline Pankhurst"
            ],
            incorrectAnswers: [
                "Mary Wollstonecraft",
                "Florence Nightingale",
                "Queen Victoria",
                "Susan B. Anthony",
                "Millicent Fawcett",
                "Margaret Thatcher"
            ]
        },
        //{
        //    question: "What type of elections did the Women's Franchise League focus on when it was created?",
        //    correctAnswers: [
        //        "Local elections"
        //    ],
        //    incorrectAnswers: [
        //        "General elections",
        //        "Presidential elections",
        //        "European Parliament elections",
        //        "Parliamentary by-elections",
        //        "Mayoral elections",
        //        "Council elections"
        //    ]
        //},
        //{
        //    question: "For which group of women did the Women's Franchise League aim to secure voting rights?",
        //    correctAnswers: [
        //        "Married women"
        //    ],
        //    incorrectAnswers: [
        //        "Single women",
        //        "All women",
        //        "Women over the age of 30",
        //        "Working-class women",
        //        "Women property owners",
        //        "Women over the age of 21"
        //    ]
        //},
        {
            question: "In which year did Emeline Pankhurst help found the Women's Social and Political Union (WSPU)?",
            correctAnswers: ["1903"],
            incorrectAnswers: getDates(1700, 2020, [1903], false)
        },
        //{
        //    question: "What does WSPU stand for, as mentioned in the context of Emeline Pankhurst founding the organization?",
        //    correctAnswers: [
        //        "Women's Social and Political Union"
        //    ],
        //    incorrectAnswers: [
        //        "Women's Suffrage Political Union",
        //        "Women's Social and Public Union",
        //        "Women's Society and Political Unity",
        //        "Women's Social and Political Unity",
        //        "Worldwide Suffrage and Political Union",
        //        "Women's Support and Political Union",
        //        "Women's Solidarity and Political Union"
        //    ]
        //},
        {
            question: "Who helped found the Women's Social and Political Union (WSPU) in 1903?",
            correctAnswers: [
                "Emeline Pankhurst"
            ],
            incorrectAnswers: [
                "Mary Wollstonecraft",
                "Florence Nightingale",
                "Queen Alexandra",
                "Elizabeth Fry",
                "Millicent Fawcett",
                "Annie Besant",
                "Marie Curie",
                "Rosalind Franklin"
            ]
        },
        {
            question: "What was the primary focus of the Women's Social and Political Union (WSPU)?",
            correctAnswers: [
                "To gain the vote for women"
            ],
            incorrectAnswers: [
                "To improve women's healthcare",
                "To fight for women's employment rights",
                "To advocate for women's education",
                "To support women in the arts",
                "To promote women's sports",
                "To aid women in scientific research",
                "To advance women's property rights"
            ]
        },
        //{
        //    question: "What type of organization was the Women's Social and Political Union (WSPU) founded by Emeline Pankhurst?",
        //    correctAnswers: [
        //        "A union"
        //    ],
        //    incorrectAnswers: [
        //        "A charity",
        //        "A healthcare organization",
        //        "An educational institution",
        //        "A political party",
        //        "A sports club",
        //        "A research foundation",
        //        "A women's shelter"
        //    ]
        //},
        {
            question: "What was the first group to have its members called 'suffragettes'?",
            correctAnswers: [
                "Women's Social and Political Union (WSPU)"
            ],
            incorrectAnswers: [
                "Women's Franchise League",
                "Women's Liberation Movement",
                "Women's Rights Advocacy Group",
                "Female Emancipation Guild",
                "Ladies' Parliamentary Society",
                "National Union of Women's Suffrage Societies",
                "Women's Equality Federation"
            ]
        },
        //{
        //    question: "What term was used to refer to members of the Women's Social and Political Union (WSPU)?",
        //    correctAnswers: [
        //        "Suffragettes"
        //    ],
        //    incorrectAnswers: [
        //        "Suffragists",
        //        "Activistas",
        //        "Unionettes",
        //        "Feministas",
        //        "Emancipators",
        //        "Liberators",
        //        "Reformists"
        //    ]
        //},
        //{
        //    question: "What method did the Women's Social and Political Union (WSPU) use as part of their protest to gain voting rights for women?",
        //    correctAnswers: [
        //        "Civil disobedience"
        //    ],
        //    incorrectAnswers: [
        //        "Violent confrontations",
        //        "Peaceful negotiations",
        //        "Lobbying Parliament",
        //        "Running for political office",
        //        "Issuing public statements",
        //        "Organizing boycotts",
        //        "Holding educational workshops"
        //    ]
        //},
        //{
        //    question: "What was the purpose of the Women's Social and Political Union (WSPU) using civil disobedience?",
        //    correctAnswers: [
        //        "To gain the vote for women"
        //    ],
        //    incorrectAnswers: [
        //        "To gain independence for Britain",
        //        "To support the war effort",
        //        "To protest taxation",
        //        "To abolish slavery",
        //        "To promote gender equality in the workplace",
        //        "To oppose the monarchy",
        //        "To fight for educational reforms"
        //    ]
        //},
        //{
        //    question: "What forms of protest did the suffragettes use in their struggle for women's voting rights?",
        //    correctAnswers: [
        //        "Chaining themselves to railings",
        //        "Smashing windows",
        //        "Committing arson"
        //    ],
        //    incorrectAnswers: [
        //        "Peaceful sit-ins",
        //        "Marching on Parliament",
        //        "Sending petitions",
        //        "Blocking traffic",
        //        "Wearing white feathers",
        //        "Conducting hunger strikes",
        //        "Holding silent vigils"
        //    ]
        //},
        //{
        //    question: "Which specific crime did the suffragettes commit, as mentioned in the provided text, by deliberately setting fire to buildings as part of their protests?",
        //    correctAnswers: [
        //        "Arson"
        //    ],
        //    incorrectAnswers: [
        //        "Theft",
        //        "Vandalism",
        //        "Assault",
        //        "Bribery",
        //        "Kidnapping",
        //        "Trespassing"
        //    ]
        //},
        //{
        //    question: "What did the suffragettes do to show their protest against not having voting rights?",
        //    correctAnswers: [
        //        "Chained themselves to railings"
        //    ],
        //    incorrectAnswers: [
        //        "Started a political party",
        //        "Organized a national strike",
        //        "Wrote articles in newspapers",
        //        "Distributed leaflets",
        //        "Formed a peaceful blockade",
        //        "Gave public speeches"
        //    ]
        //},
        //{
        //    question: "In addition to chaining themselves to railings and committing arson, what else did the suffragettes do as a form of protest?",
        //    correctAnswers: [
        //        "Smashed windows"
        //    ],
        //    incorrectAnswers: [
        //        "Graffiti",
        //        "Public demonstrations",
        //        "Refusal to pay taxes",
        //        "Hacking government websites",
        //        "Boycotting elections",
        //        "Destruction of public property"
        //    ]
        //},
        //{
        //    question: "What did the suffragettes do to property as a part of their protest?",
        //    correctAnswers: [
        //        "Smashed windows",
        //        "Committed arson"
        //    ],
        //    incorrectAnswers: [
        //        "Defaced monuments",
        //        "Damaged roads",
        //        "Destroyed public gardens",
        //        "Sabotaged factory machinery",
        //        "Invaded government buildings",
        //        "Disrupted public services"
        //    ]
        //},
        //{
        //    question: "Which of the following was a method of civil disobedience employed by the suffragettes?",
        //    correctAnswers: [
        //        "Chaining themselves to railings"
        //    ],
        //    incorrectAnswers: [
        //        "Hunger strikes",
        //        "Occupying government offices",
        //        "Refusing military service",
        //        "Illegal broadcasting",
        //        "Unauthorized protest marches",
        //        "Leaking confidential information"
        //    ]
        //},
        //{
        //    question: "Which actions did the Women's Social and Political Union (WSPU), known as 'suffragettes', take against buildings as part of their protest for voting rights?",
        //    correctAnswers: [
        //        "Committed arson",
        //        "Smashed windows"
        //    ],
        //    incorrectAnswers: [
        //        "Occupation of buildings",
        //        "Barricading entrances",
        //        "Spray painting messages",
        //        "Cutting power supplies",
        //        "Locking doors to prevent entry",
        //        "Jamming communication networks"
        //    ]
        //},
        //{
        //    question: "What did the suffragettes physically attach themselves to during protests?",
        //    correctAnswers: [
        //        "Railings"
        //    ],
        //    incorrectAnswers: [
        //        "Public monuments",
        //        "Government vehicles",
        //        "Parliament gates",
        //        "Police stations",
        //        "Broadcasting towers",
        //        "Military facilities"
        //    ]
        //},
        //{
        //    question: "What form of protest did many of the women, including Emeline Pankhurst, undertake during their campaign for women's voting rights?",
        //    correctAnswers: [
        //        "Hunger strike"
        //    ],
        //    incorrectAnswers: [
        //        "Sit-ins",
        //        "Peaceful marches",
        //        "Letter-writing campaigns",
        //        "Boycotts",
        //        "Legal petitions",
        //        "Public debates"
        //    ]
        //},
        //{
        //    question: "In what year were women over the age of 30 given voting rights and the right to stand for parliament?",
        //    correctAnswers: [
        //        "1918"
        //    ],
        //    incorrectAnswers: [
        //        "1903",
        //        "1928",
        //        "1912",
        //        "1899",
        //        "1908",
        //        "1920",
        //        "1930"
        //    ]
        //},
        //{
        //    question: "What was one of the reasons women over the age of 30 were given voting rights and the right to stand for parliament in 1918?",
        //    correctAnswers: [
        //        "In recognition of the contribution women made to the war effort during the First World War"
        //    ],
        //    incorrectAnswers: [
        //        "In recognition of Emeline Pankhurst's efforts",
        //        "Due to the establishment of the Women's Social and Political Union",
        //        "As a result of the hunger strikes by suffragettes",
        //        "Because of the civil disobedience acts committed by suffragettes",
        //        "After the formation of the Women's Franchise League",
        //        "Owing to the public protests demanding equal rights"
        //    ]
        //},
        //{
        //    question: "In what year were women given the right to vote at the age of 21, the same as men?",
        //    correctAnswers: [
        //        "1928"
        //    ],
        //    incorrectAnswers: [
        //        "1918",
        //        "1930",
        //        "1920",
        //        "1914",
        //        "1945",
        //        "1903",
        //        "1858"
        //    ]
        //},
        //{
        //    question: "Who was a key figure in the women's suffrage movement that was still alive shortly before the UK law was changed to allow women the right to vote at the age of 21 in 1928?",
        //    correctAnswers: [
        //        "Emeline Pankhurst"
        //    ],
        //    incorrectAnswers: [
        //        "Queen Victoria",
        //        "Florence Nightingale",
        //        "Mary Wollstonecraft",
        //        "Queen Elizabeth I",
        //        "Queen Elizabeth II",
        //        "Winston Churchill"
        //    ]
        //},
        //{
        //    question: "At what age were women given the right to vote at the same time as men in 1928?",
        //    correctAnswers: [
        //        "21"
        //    ],
        //    incorrectAnswers: [
        //        "30",
        //        "18",
        //        "25",
        //        "20",
        //        "35",
        //        "40",
        //        "16"
        //    ]
        //},
        //{
        //    question: "Shortly before whose death in 1928 were women given the right to vote at the age of 21?",
        //    correctAnswers: [
        //        "Pankhurst's"
        //    ],
        //    incorrectAnswers: [
        //        "Florence Nightingale's",
        //        "Queen Victoria's",
        //        "Mary Wollstonecraft's",
        //        "Queen Elizabeth II's",
        //        "Winston Churchill's",
        //        "King George V's",
        //        "Queen Elizabeth I's"
        //    ]
        //},
        //{
        //    question: "Were women given the right to vote at the same age as men shortly before Pankhurst's death in 1928?",
        //    correctAnswers: [
        //        "Yes"
        //    ],
        //    incorrectAnswers: [
        //        "No"
        //    ]
        //},
        //{
        //    question: "What was the significant legal right granted to women shortly before Pankhurst's death in 1928?",
        //    correctAnswers: [
        //        "The right to vote"
        //    ],
        //    incorrectAnswers: [
        //        "The right to own property",
        //        "The right to higher education",
        //        "The right to divorce",
        //        "The right to work in any profession",
        //        "The right to stand for parliament",
        //        "The right to equal pay"
        //    ]
        //},
        //{
        //    question: "What was the voting age for women in 1928?",
        //    correctAnswers: [
        //        "21"
        //    ],
        //    incorrectAnswers: [
        //        "It was lower",
        //        "It was higher",
        //        "Women could not vote",
        //        "Men could not vote",
        //        "It varied by region",
        //        "It was decided by social status"
        //    ]
        //},
        //{
        //    question: "What change occurred in women's voting rights shortly before Pankhurst's death in 1928?",
        //    correctAnswers: [
        //        "Women were given the right to vote at the age of 21"
        //    ],
        //    incorrectAnswers: [
        //        "Women were allowed to vote at any age",
        //        "Women's voting age was raised to 30",
        //        "Women were given the right to vote at the age of 18",
        //        "Women's voting rights were revoked",
        //        "Men's voting age was lowered to 18",
        //        "Women were given the right to vote at the age of 16"
        //    ]
        //},
        //{
        //    question: "Which suffragette leader was nearing death when women were granted the right to vote at the age of 21 in 1928?",
        //    correctAnswers: [
        //        "Emmeline Pankhurst"
        //    ],
        //    incorrectAnswers: [
        //        "Queen Victoria",
        //        "Florence Nightingale",
        //        "Mary Wollstonecraft",
        //        "Queen Elizabeth II",
        //        "Winston Churchill",
        //        "King George V",
        //        "Queen Elizabeth I"
        //    ]
        //},
        //{
        //    question: "What does the term 'franchise' refer to in the context of the Life in the UK Test handbook?",
        //    correctAnswers: [
        //        "the right to vote"
        //    ],
        //    incorrectAnswers: [
        //        "the right to own property",
        //        "the right to stand for parliament",
        //        "the right to work",
        //        "the right to education",
        //        "the right to protest",
        //        "the right to freedom of speech"
        //    ]
        //},
        //{
        //    question: "What does 'civil disobedience' refer to in the context of political protests?",
        //    correctAnswers: [
        //        "The refusal of members of the public to obey laws"
        //    ],
        //    incorrectAnswers: [
        //        "The act of voting against a political party",
        //        "Organizing peaceful rallies",
        //        "The legal act of petitioning the government",
        //        "The process of electing new political leaders",
        //        "Engaging in violent confrontations",
        //        "The act of lobbying politicians for change"
        //    ]
        //},
        //{
        //    question: "For what reason might members of the public engage in civil disobedience according to the definition provided in the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "To protest against political issues"
        //    ],
        //    incorrectAnswers: [
        //        "To support government policies",
        //        "To show approval of existing laws",
        //        "As a form of entertainment",
        //        "To comply with law enforcement",
        //        "To celebrate national holidays",
        //        "As part of a community service"
        //    ]
        //},
        //{
        //    question: "Was civil disobedience considered a legal method of protest by the Women's Social and Political Union (WSPU) during the Women's Suffrage movement in the early 20th century according to the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "No"
        //    ],
        //    incorrectAnswers: [
        //        "Yes",
        //        "It depends on the country's laws",
        //        "Only if it is sanctioned by a court",
        //        "Only during election periods",
        //        "Only if it does not involve large groups of people",
        //        "Only if it is part of a labor strike"
        //    ]
        //},
        //{
        //    question: "What does 'civil disobedience' mean as defined in the context of the women's suffrage movement led by the Women's Social and Political Union (WSPU)?",
        //    correctAnswers: [
        //        "Refusal to obey laws"
        //    ],
        //    incorrectAnswers: [
        //        "Voting in an election",
        //        "Participating in jury duty",
        //        "Paying taxes",
        //        "Serving in public office",
        //        "Complying with court orders",
        //        "Attending civic education classes"
        //    ]
        //},
        //{
        //    question: "What is the definition of 'arson' as it is used in the context of the Women's Social and Political Union's activities described in the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "The criminal act of deliberately setting fire to a building"
        //    ],
        //    incorrectAnswers: [
        //        "The act of protesting against political issues",
        //        "The work done to support a country during wartime",
        //        "The refusal to obey certain laws for the purpose of protest",
        //        "The right to vote in elections",
        //        "The destruction of public property without the use of fire",
        //        "The act of chaining oneself to railings as a form of protest"
        //    ]
        //},
        //{
        //    question: "What does the term 'war effort' specifically refer to in the context of World War I as described in the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "The work people did in order to help the country in any way they could during wartime"
        //    ],
        //    incorrectAnswers: [
        //        "The military operations conducted during a war",
        //        "The financial support provided to the military",
        //        "The process of recruiting soldiers for wartime",
        //        "The diplomatic negotiations during wartime",
        //        "The act of protesting against war",
        //        "The strategy planning for war operations",
        //        "The medical assistance provided on the battlefield"
        //    ]
        //}
    ];

    let category = {
        name: "Emmeline Pankhurst (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
