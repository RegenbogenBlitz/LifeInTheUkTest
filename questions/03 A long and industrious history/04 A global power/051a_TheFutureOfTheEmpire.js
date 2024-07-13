(() => {
    let questions = [
        {
            question: "In which decade did the British Empire peak in size?",
            correctAnswers: [
                "1920s"
            ],
            incorrectAnswers: [
                "1850s",
                "1860s",
                "1870s",
                "1880s",
                "1890s",
                "1900s",
                "1910s",
                "1930s",
                "1940s",
                "1950s",
                "1960s"
            ]
        },
        //{
        //    question: "In what time period did discussions about the future direction of the British Empire begin?",
        //    correctAnswers: [
        //        "late 19th century"
        //    ],
        //    incorrectAnswers: [
        //        "early 19th century",
        //        "mid-19th century",
        //        "early 20th century",
        //        "late 18th century",
        //        "mid-20th century",
        //        "late 20th century"
        //    ]
        //},
        //{
        //    question: "What did the supporters of expansion believe was a benefit of the British Empire to Britain?",
        //    correctAnswers: [
        //        "Increased trade and commerce"
        //    ],
        //    incorrectAnswers: [
        //        "Military strength",
        //        "Cultural exchange",
        //        "Technological advancements",
        //        "Colonial settlements",
        //        "Diplomatic influence",
        //        "Educational improvements"
        //    ]
        //},
        //{
        //    question: "Who believed that the Empire benefited Britain through increased trade and commerce in the late 19th century according to the handbook?",
        //    correctAnswers: [
        //        "Supporters of expansion"
        //    ],
        //    incorrectAnswers: [
        //        "Opponents of expansion",
        //        "The Boers",
        //        "Settlers from the Netherlands",
        //        "British military leaders",
        //        "Indian leaders",
        //        "African tribal chiefs"
        //    ]
        //},
        //{
        //    question: "What was one reason some people opposed further expansion of the British Empire in the late 19th century?",
        //    correctAnswers: [
        //        "They thought the Empire had become overexpanded and that the frequent conflicts were a drain on resources."
        //    ],
        //    incorrectAnswers: [
        //        "They believed the Empire was not beneficial to Britain's trade and commerce.",
        //        "They felt the Empire was not a force for good in the world.",
        //        "They were concerned about the increasing autonomy of the Empire's parts.",
        //        "They thought the Empire was too focused on peaceful negotiations.",
        //        "They were worried that the Empire was not investing enough in military advancements.",
        //        "They argued that the Empire should focus solely on European affairs."
        //    ]
        //},
        //{
        //    question: "What did the great majority of British people believe about the role of the British Empire in the world during the late 19th to early 20th century?",
        //    correctAnswers: [
        //        "A force for good in the world"
        //    ],
        //    incorrectAnswers: [
        //        "A burden on the economy",
        //        "A source of constant conflict",
        //        "Unnecessary for Britain's prosperity",
        //        "In need of immediate dissolution",
        //        "A system of oppression",
        //        "Merely a political strategy"
        //    ]
        //},
        //{
        //    question: "What effect did the Boer War of 1899 to 1902 have on the discussions about the British Empire's future?",
        //    correctAnswers: [
        //        "Made the discussions more urgent"
        //    ],
        //    incorrectAnswers: [
        //        "Ended the discussions about the Empire's future",
        //        "Led to immediate independence for all colonies",
        //        "Decreased the importance of the Empire's future discussions",
        //        "Caused the British Empire to expand further",
        //        "Strengthened the support for the Empire's expansion",
        //        "Prompted an immediate transition to the Commonwealth"
        //    ]
        //},
        //{
        //    question: "Who did the British go to war with in South Africa during the Boer War of 1899 to 1902?",
        //    correctAnswers: [
        //        "settlers from the Netherlands called the Boers"
        //    ],
        //    incorrectAnswers: [
        //        "settlers from France called the Boers",
        //        "settlers from Spain called the Boers",
        //        "settlers from Germany called the Boers",
        //        "settlers from Portugal called the Boers",
        //        "settlers from Denmark called the Boers",
        //        "settlers from Italy called the Boers"
        //    ]
        //},
        //{
        //    question: "What was the original nationality of the settlers known as the Boers that the British fought in South Africa during the Boer War?",
        //    correctAnswers: [
        //        "Dutch"
        //    ],
        //    incorrectAnswers: [
        //        "French",
        //        "Spanish",
        //        "German",
        //        "Portuguese",
        //        "Danish",
        //        "Italian"
        //    ]
        //},
        //{
        //    question: "What name were the settlers from the Netherlands known by in South Africa?",
        //    correctAnswers: [
        //        "Boers"
        //    ],
        //    incorrectAnswers: [
        //        "Afrikaners",
        //        "Zulu",
        //        "Xhosa",
        //        "Dutchmen",
        //        "Flemish",
        //        "Hollanders"
        //    ]
        //},
        //{
        //    question: "During which conflict did the British fight the settlers from the Netherlands known as the Boers in South Africa?",
        //    correctAnswers: [
        //        "The Boer War"
        //    ],
        //    incorrectAnswers: [
        //        "The Zulu War",
        //        "The Battle of Waterloo",
        //        "The Crimean War",
        //        "The First World War",
        //        "The Second World War"
        //    ]
        //},
        //{
        //    question: "How long did the Boer War mentioned in the context of the British Empire's challenges at the end of the 19th century last?",
        //    correctAnswers: [
        //        "over three years"
        //    ],
        //    incorrectAnswers: [
        //        "less than a year",
        //        "two years",
        //        "exactly three years",
        //        "four years",
        //        "five years",
        //        "one year",
        //        "six months"
        //    ]
        //},
        //{
        //    question: "How did the Boers fight in the war against the British?",
        //    correctAnswers: [
        //        "fiercely"
        //    ],
        //    incorrectAnswers: [
        //        "passively",
        //        "with little resistance",
        //        "using guerrilla tactics only",
        //        "surrendering quickly",
        //        "with limited engagement",
        //        "indifferently"
        //    ]
        //},
        //{
        //    question: "Who were the British fighting against in the Boer War of 1899 to 1902?",
        //    correctAnswers: [
        //        "the Boers"
        //    ],
        //    incorrectAnswers: [
        //        "the French",
        //        "the Germans",
        //        "the Spanish",
        //        "the Zulus",
        //        "the Indians",
        //        "the Dutch settlers"
        //    ]
        //},
        //{
        //    question: "What was the duration of the conflict between the British and the Boers?",
        //    correctAnswers: [
        //        "over three years"
        //    ],
        //    incorrectAnswers: [
        //        "under two years",
        //        "exactly one year",
        //        "six months",
        //        "two and a half years",
        //        "four years",
        //        "more than five years"
        //    ]
        //},
        //{
        //    question: "What characteristic describes the Boers' combat approach in the Boer War of 1899 to 1902?",
        //    correctAnswers: [
        //        "fiercely"
        //    ],
        //    incorrectAnswers: [
        //        "cautiously",
        //        "defensively",
        //        "with superior technology",
        //        "with outside assistance",
        //        "by avoiding conflict",
        //        "strategically"
        //    ]
        //},
        //{
        //    question: "Who did the British fight against in the war that lasted over three years, as described in the context of the Boer War from 1899 to 1902?",
        //    correctAnswers: [
        //        "the Boers"
        //    ],
        //    incorrectAnswers: [
        //        "the Americans",
        //        "the Russians",
        //        "the Ottomans",
        //        "native African tribes",
        //        "the Chinese",
        //        "colonial militias"
        //    ]
        //},
        //{
        //    question: "During the Boer War, what caused the deaths of many people in addition to the fighting?",
        //    correctAnswers: [
        //        "Disease"
        //    ],
        //    incorrectAnswers: [
        //        "Starvation",
        //        "Extreme weather",
        //        "Accidents",
        //        "Malnutrition",
        //        "Old age",
        //        "Economic hardships"
        //    ]
        //},
        //{
        //    question: "During the Boer War, which group received some public sympathy from the British people?",
        //    correctAnswers: [
        //        "the Boers"
        //    ],
        //    incorrectAnswers: [
        //        "the British soldiers",
        //        "the settlers from France",
        //        "the Indian fighters",
        //        "the settlers from Spain",
        //        "the South African natives",
        //        "the Dutch government"
        //    ]
        //},
        //{
        //    question: "What effect did the Boer War have on the British public's perception of the Empire?",
        //    correctAnswers: [
        //        "People began to question whether the Empire could continue"
        //    ],
        //    incorrectAnswers: [
        //        "People were united in their support for the Empire",
        //        "People demanded immediate expansion of the Empire",
        //        "People were indifferent to the Empire's future",
        //        "People insisted on immediate independence for all colonies",
        //        "People believed in the Empire more strongly",
        //        "People called for increased military action"
        //    ]
        //},
        //{
        //    question: "What sentiment emerged among the British public as a result of the Boer War?",
        //    correctAnswers: [
        //        "Some public sympathy for the Boers"
        //    ],
        //    incorrectAnswers: [
        //        "Widespread disdain for the Boers",
        //        "Complete support for British military actions",
        //        "A call to colonize more territories",
        //        "A push for immediate peace without conditions",
        //        "A desire to relinquish all colonies immediately",
        //        "General apathy towards the war"
        //    ]
        //},
        //{
        //    question: "What did the Boer War lead the British public to begin questioning?",
        //    correctAnswers: [
        //        "Whether the Empire could continue"
        //    ],
        //    incorrectAnswers: [
        //        "Whether the Empire should start a war in India",
        //        "Whether the Empire should colonize more in Africa",
        //        "Whether the British should ally with the Boers",
        //        "Whether the Empire should invest more in trade",
        //        "Whether the Empire had sufficient military strength",
        //        "Whether the Empire should enforce stricter laws on colonies"
        //    ]
        //},
        //{
        //    question: "What did different parts of the British Empire achieve in terms of governance as they developed?",
        //    correctAnswers: [
        //        "They won greater freedom and autonomy from Britain"
        //    ],
        //    incorrectAnswers: [
        //        "They were integrated more closely into the British political system",
        //        "They lost their cultural identities",
        //        "They became independent republics",
        //        "They were sold to other colonial powers",
        //        "They formed a single nation with Britain",
        //        "They were abandoned by Britain due to high costs",
        //        "They became part of the United States",
        //        "They were granted full statehood within Britain"
        //    ]
        //},
        //{
        //    question: "What type of transition from Empire to Commonwealth occurred in the second half of the 20th century?",
        //    correctAnswers: [
        //        "an orderly transition"
        //    ],
        //    incorrectAnswers: [
        //        "a chaotic transition",
        //        "a violent transition",
        //        "an abrupt transition",
        //        "a gradual transition",
        //        "a forced transition",
        //        "a negotiated transition"
        //    ]
        //},
        //{
        //    question: "When did the orderly transition from the British Empire to the Commonwealth mostly occur?",
        //    correctAnswers: [
        //        "the second half of the 20th century"
        //    ],
        //    incorrectAnswers: [
        //        "the first half of the 20th century",
        //        "the late 19th century",
        //        "the early 20th century",
        //        "the mid-19th century",
        //        "the beginning of the 21st century",
        //        "the end of the 18th century"
        //    ]
        //},
        //{
        //    question: "What was the outcome for countries within the British Empire during the transition to the Commonwealth in the second half of the 20th century?",
        //    correctAnswers: [
        //        "countries being granted their independence"
        //    ],
        //    incorrectAnswers: [
        //        "countries losing their independence",
        //        "countries forming a new empire",
        //        "countries entering a federation",
        //        "countries becoming protectorates",
        //        "countries merging with Britain",
        //        "countries establishing colonies"
        //    ]
        //}
    ];

    let category = {
        name: "The future of the Empire",
        questions: questions,
        isIncomplete: true,
        group: "A Global Power",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
