(() => {
    let questions = [
        {
            question: "In the 19th century, how did conditions in Ireland compare to those in the rest of the United Kingdom?",
            correctAnswers: ["Conditions in Ireland were not as good as in the rest of the UK."],
            incorrectAnswers: [
                "Conditions in Ireland were better than in the rest of the UK.",
                "Conditions in Ireland were similar to the rest of the UK.",
                "Conditions in Ireland were similar to those in Scotland.",
                "Conditions in Ireland were similar to those in England.",
                "Conditions in Ireland were similar to those in Wales."
            ]
        },
        //{
        //    question: "What proportion of the Irish population depended on farming for their livelihood in the mid-19th century?",
        //    correctAnswers: [
        //        "Two-thirds"
        //    ],
        //    incorrectAnswers: [
        //        "One-third",
        //        "One-half",
        //        "Three-quarters",
        //        "A quarter",
        //        "Four-fifths",
        //        "90%"
        //    ]
        //},
        //{
        //    question: "What size of land did Irish farmers often use for farming?",
        //    correctAnswers: [
        //        "Very small plots of land"
        //    ],
        //    incorrectAnswers: [
        //        "Large estates",
        //        "Medium-sized fields",
        //        "Expansive farms",
        //        "Moderate-sized plots",
        //        "Industrial-sized plots",
        //        "Substantial holdings"
        //    ]
        //},
        {
            question: "What food did many people in Ireland depend on as a large part of their diet in the middle of the 19th century?",
            correctAnswers: [
                "Potatoes"
            ],
            incorrectAnswers: [
                "Wheat",
                "Rice",
                "Barley",
                "Corn",
                "Oats",
                "Rye",
                "Fish"
            ]
        },
        {
            questions: [
                {
                    question: "When did the potato crop failure and subsequent famine occur in Ireland?",
                    correctAnswers: [
                        "In the middle of the 19th century"
                    ],
                    incorrectAnswers: [
                        "In the early 19th century",
                        "In the late 18th century",
                        "At the beginning of the 20th century",
                        "In the early 17th century",
                        "During the mid-16th century",
                        "In the late 19th century"
                    ]
                },
                {
                    question: "What natural disaster led to a famine in Ireland in the 19th century?",
                    correctAnswers: [
                        "The potato crop failed"
                    ],
                    incorrectAnswers: [
                        "A severe drought",
                        "Widespread flooding",
                        "A devastating earthquake",
                        "An outbreak of disease in wheat crops",
                        "A plague of locusts",
                        "An extreme cold snap that lasted several years"
                    ]
                },
            ]
        },
        {
            question: "How many people died from disease and starvation in Ireland during the famine in the mid-19th century?",
            correctAnswers: [
                "A million"
            ],
            incorrectAnswers: [
                "A hundred thousand",
                "Half a million",
                "Two million",
                "Three million",
                "Four hundred thousand",
                "Seven hundred fifty thousand",
                "Eight hundred thousand"
            ]
        },
        {
            question: "How many people left Ireland during the famine in the middle of the 19th century?",
            correctAnswers: [
                "A million and a half"
            ],
            incorrectAnswers: [
                "Half a million",
                "Two million",
                "Three million",
                "750,000",
                "A million",
                "500,000",
                "250,000"
            ]
        },
        //{
        //    question: "What caused a significant number of people to leave Ireland in the 19th century?",
        //    correctAnswers: [
        //        "The famine"
        //    ],
        //    incorrectAnswers: [
        //        "The Industrial Revolution",
        //        "Political unrest",
        //        "Religious conflict",
        //        "The potato crop was very successful",
        //        "Economic prosperity",
        //        "A war"
        //    ]
        //},
        //{
        //    question: "In which century did a million and a half people emigrate from Ireland due to the potato famine?",
        //    correctAnswers: [
        //        "The 19th century"
        //    ],
        //    incorrectAnswers: [
        //        "The 18th century",
        //        "The 20th century",
        //        "The 17th century",
        //        "The 16th century",
        //        "The 15th century",
        //        "The 21st century"
        //    ]
        //},
        //{
        //    question: "What was the primary reason for a million and a half people leaving Ireland in the middle of the 19th century?",
        //    correctAnswers: [
        //        "Famine"
        //    ],
        //    incorrectAnswers: [
        //        "Overpopulation",
        //        "Disease outbreak",
        //        "Employment opportunities abroad",
        //        "Political exile",
        //        "Natural disaster",
        //        "Industrialization"
        //    ]
        //},
        //{
        //    question: "Where did some of the Irish emigrants move to during the famine?",
        //    correctAnswers: [
        //        "the United States"
        //    ],
        //    incorrectAnswers: [
        //        "Australia",
        //        "Canada",
        //        "New Zealand",
        //        "France",
        //        "Germany",
        //        "South Africa"
        //    ]
        //},
        //{
        //    question: "To which country did many Irish emigrants move during the famine, in addition to those who emigrated to the United States?",
        //    correctAnswers: [
        //        "England"
        //    ],
        //    incorrectAnswers: [
        //        "Scotland",
        //        "Wales",
        //        "Northern Ireland",
        //        "Spain",
        //        "Italy",
        //        "Belgium"
        //    ]
        //},
        //{
        //    question: "By 1861, which of the following cities had large populations of Irish people?",
        //    correctAnswers: [
        //        "Liverpool",
        //        "London",
        //        "Manchester",
        //        "Glasgow"
        //    ],
        //    incorrectAnswers: [
        //        "Birmingham",
        //        "Edinburgh",
        //        "Bristol",
        //        "Cardiff",
        //        "Leeds",
        //        "Sheffield"
        //    ]
        //},
        //{
        //    question: "By what year did Liverpool, London, Manchester, and Glasgow have large populations of Irish people?",
        //    correctAnswers: [
        //        "1861"
        //    ],
        //    incorrectAnswers: [
        //        "1851",
        //        "1871",
        //        "1841",
        //        "1881",
        //        "1891",
        //        "1901"
        //    ]
        //},
        //{
        //    question: "Which of the following cities is mentioned in the Life in the UK Test handbook as having a large Irish population by 1861?",
        //    correctAnswers: [
        //        "Liverpool",
        //        "London",
        //        "Manchester",
        //        "Glasgow"
        //    ],
        //    incorrectAnswers: [
        //        "Newcastle",
        //        "Belfast",
        //        "Nottingham",
        //        "Coventry",
        //        "Oxford",
        //        "Cambridge"
        //    ]
        //},
        //{
        //    question: "How did the Irish Nationalist movement progress during the 19th century?",
        //    correctAnswers: [
        //        "It had grown strongly"
        //    ],
        //    incorrectAnswers: [
        //        "It remained stagnant",
        //        "It weakened considerably",
        //        "It was suppressed entirely",
        //        "It was mostly influential in the early 19th century",
        //        "It became part of the British political system",
        //        "It merged with another movement",
        //        "It focused solely on economic development"
        //    ]
        //},
        //{
        //    question: "What did the Fenians advocate for in the Irish Nationalist movement during the 19th century?",
        //    correctAnswers: [
        //        "Complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "Home Rule",
        //        "A shared parliament with England",
        //        "A revolution",
        //        "Devolved government",
        //        "Economic autonomy",
        //        "Military alliance with England",
        //        "Cultural independence",
        //        "Partial autonomy"
        //    ]
        //},
        {
            question: "Which group within the Irish Nationalist movement of the 19th century favoured complete independence?",
            correctAnswers: [
                "The Fenians"
            ],
            incorrectAnswers: [
                "The Unionists",
                "The Home Rulers",
                "The Loyalists",
                "The Confederates",
                "The Parliamentarians",
                "The Activists"
            ]
        },
        //{
        //    question: "During which century did the Fenians advocate for complete independence within the Irish Nationalist movement?",
        //    correctAnswers: [
        //        "19th century"
        //    ],
        //    incorrectAnswers: [
        //        "18th century",
        //        "17th century",
        //        "16th century",
        //        "20th century",
        //        "15th century",
        //        "14th century",
        //        "21st century",
        //        "13th century"
        //    ]
        //},
        //{
        //    question: "What political stance did the Fenians hold within the Irish Nationalist movement?",
        //    correctAnswers: [
        //        "Complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "Constitutional monarchy",
        //        "Parliamentary representation",
        //        "Direct democracy",
        //        "Federalism",
        //        "Autocracy",
        //        "Technocracy",
        //        "Monetary union",
        //        "Legislative union"
        //    ]
        //},
        //{
        //    question: "In the context of the Irish Nationalist movement, what was the position of the Fenians?",
        //    correctAnswers: [
        //        "They favoured complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "They supported the British Crown",
        //        "They were neutral",
        //        "They promoted Irish union with Scotland",
        //        "They sought a federal system within the UK",
        //        "They aimed for political reform, not independence",
        //        "They advocated for peace with England without political change",
        //        "They wanted to maintain the status quo",
        //        "They pushed for a commonwealth with England"
        //    ]
        //},
        //{
        //    question: "In the Irish Nationalist movement, the Fenians were known for advocating which of the following?",
        //    correctAnswers: [
        //        "Complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "A bicameral legislature",
        //        "A constitutional amendment",
        //        "Home Rule",
        //        "A dual monarchy",
        //        "A common market",
        //        "Joint sovereignty",
        //        "A confederation",
        //        "Economic integration"
        //    ]
        //},
        //{
        //    question: "Who were the Fenians in the context of the Irish Nationalist movement?",
        //    correctAnswers: [
        //        "A group that favoured complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "A political party seeking Home Rule",
        //        "A coalition advocating for a shared parliament",
        //        "A sect pushing for religious freedom",
        //        "A union desiring economic reform",
        //        "A faction aiming for defense pacts",
        //        "An organization promoting cultural exchanges",
        //        "A society that desired educational autonomy",
        //        "A movement that supported agricultural development"
        //    ]
        //},
        //{
        //    question: "Which objective did the Fenians pursue within the Irish Nationalist movement?",
        //    correctAnswers: [
        //        "Complete independence"
        //    ],
        //    incorrectAnswers: [
        //        "Political partnership",
        //        "A common currency",
        //        "A shared military",
        //        "A unified education system",
        //        "A single market",
        //        "A joint cultural policy",
        //        "A collective security agreement",
        //        "A mutual non-aggression pact"
        //    ]
        //},
        {
            question: "What did Charles Stewart Parnell advocate for Ireland?",
            correctAnswers: [
                "Home Rule"
            ],
            incorrectAnswers: [
                "Complete independence",
                "Unionism",
                "Devolution"
            ]
        },
        {
            question: "What would 'Home Rule' have entailed for Ireland?",
            correctAnswers: [
                "Ireland would remain in the UK but have its own parliament"
            ],
            incorrectAnswers: [
                "Ireland would become fully independent from the UK",
                "Ireland would be governed directly by the UK Parliament",
                "Ireland would join another state",
                "Ireland would share its parliament with another country"
            ]
        },
        //{
        //    question: "Who was a notable advocate for 'Home Rule' in Ireland?",
        //    correctAnswers: [
        //        "Charles Stewart Parnell"
        //    ],
        //    incorrectAnswers: [
        //        "The Fenians",
        //        "Queen Victoria",
        //        "Daniel O'Connell",
        //        "Eamon de Valera",
        //        "Michael Collins",
        //        "Oliver Cromwell"
        //    ]
        //},
        //{
        //    question: "What political situation did 'Home Rule' propose for Ireland?",
        //    correctAnswers: [
        //        "Ireland would have its own parliament within the UK"
        //    ],
        //    incorrectAnswers: [
        //        "Ireland would be completely independent with its own parliament",
        //        "Ireland would form a union with another country",
        //        "Ireland would have a shared parliament with Great Britain",
        //        "Ireland would become a dominion of the UK",
        //        "Ireland would be annexed by another nation",
        //        "Ireland would have no national legislative body"
        //    ]
        //}
    ];

    let category = {
        name: "Ireland in the 19th century",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
