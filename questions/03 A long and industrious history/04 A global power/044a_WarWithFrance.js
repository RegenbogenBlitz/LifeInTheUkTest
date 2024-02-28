(() => {
    let questions = [
        {
            question: "What was the relationship between France and Britain in the 18th century?",
            correctAnswers: [
                "They fought a number of wars"
            ],
            incorrectAnswers: [
                "They were allies throughout the period",
                "Britain was a colony of France",
                "France was a colony of Britain",
                "They had a shared monarchy",
                "They were part of the same empire",
                "They had merged into a single country",
                "They had no significant interactions"
            ]
        },
        //{
        //    question: "With which country did Britain fight a number of wars during the 18th century?",
        //    correctAnswers: [
        //        "France"
        //    ],
        //    incorrectAnswers: [
        //        "Spain",
        //        "Germany",
        //        "The Netherlands",
        //        "Italy",
        //        "Russia",
        //        "America"
        //    ]
        //},
        //{
        //    question: "What significant event occurred in France in 1789 that led to a declaration of war against Britain?",
        //    correctAnswers: [
        //        "A revolution"
        //    ],
        //    incorrectAnswers: [
        //        "The coronation of Napoleon",
        //        "The Battle of Trafalgar",
        //        "The appointment of the Iron Duke",
        //        "The signing of a peace treaty",
        //        "The invasion of Britain",
        //        "A declaration of independence"
        //    ]
        //},
        //{
        //    question: "Which country did the new French government declare war on after the French Revolution in 1789?",
        //    correctAnswers: [
        //        "Britain"
        //    ],
        //    incorrectAnswers: [
        //        "Spain",
        //        "Russia",
        //        "Germany",
        //        "Portugal",
        //        "The Netherlands",
        //        "Austria"
        //    ]
        //},
        //{
        //    question: "In what year did the new French government declare war on Britain after a revolution in France?",
        //    correctAnswers: [
        //        "1789"
        //    ],
        //    incorrectAnswers: [
        //        "1776",
        //        "1799",
        //        "1805",
        //        "1815",
        //        "1821",
        //        "1830"
        //    ]
        //},
        //{
        //    question: "Who became Emperor of France and continued the war against Britain?",
        //    correctAnswers: [
        //        "Napoleon"
        //    ],
        //    incorrectAnswers: [
        //        "Louis XIV",
        //        "Charles de Gaulle",
        //        "Joan of Arc",
        //        "Henry VIII",
        //        "Marie Antoinette",
        //        "King Louis XVI",
        //        "Julius Caesar"
        //    ]
        //},
        //{
        //    question: "What title did Napoleon hold in France during the war against Britain in the early 19th century?",
        //    correctAnswers: [
        //        "Emperor"
        //    ],
        //    incorrectAnswers: [
        //        "King",
        //        "Prime Minister",
        //        "President",
        //        "General",
        //        "Chancellor",
        //        "Duke",
        //        "Archduke"
        //    ]
        //},
        //{
        //    question: "Against which countries' fleets did Britain's Navy fight during the Battle of Trafalgar?",
        //    correctAnswers: [
        //        "French and Spanish fleets"
        //    ],
        //    incorrectAnswers: [
        //        "French and Portuguese fleets",
        //        "Spanish and Portuguese fleets",
        //        "German and Italian fleets",
        //        "Dutch and French fleets",
        //        "American and Spanish fleets",
        //        "Russian and Spanish fleets"
        //    ]
        //},
        //{
        //    question: "In which year did Britain's Navy win the Battle of Trafalgar?",
        //    correctAnswers: [
        //        "1805"
        //    ],
        //    incorrectAnswers: [
        //        "1789",
        //        "1815",
        //        "1705",
        //        "1799",
        //        "1809",
        //        "1820"
        //    ]
        //},
        //{
        //    question: "What was the outcome of the Battle of Trafalgar for Britain's Navy?",
        //    correctAnswers: [
        //        "Winning"
        //    ],
        //    incorrectAnswers: [
        //        "Losing",
        //        "Stalemate",
        //        "Withdrawal",
        //        "Signing a treaty",
        //        "Indecisive result",
        //        "Ceasefire"
        //    ]
        //},
        //{
        //    question: "Which battle did Britain's Navy win in 1805 against the combined French and Spanish fleets?",
        //    correctAnswers: [
        //        "The Battle of Trafalgar"
        //    ],
        //    incorrectAnswers: [
        //        "The Battle of Waterloo",
        //        "The Battle of Hastings",
        //        "The Battle of Britain",
        //        "The Battle of Agincourt",
        //        "The Battle of Blenheim",
        //        "The Battle of the Nile"
        //    ]
        //},
        //{
        //    question: "Who was in charge of the British fleet at the Battle of Trafalgar?",
        //    correctAnswers: [
        //        "Admiral Nelson"
        //    ],
        //    incorrectAnswers: [
        //        "The Duke of Wellington",
        //        "Admiral Hood",
        //        "Admiral Jellicoe",
        //        "Admiral Beatty",
        //        "Captain Cook",
        //        "General Wolfe"
        //    ]
        //},
        //{
        //    question: "What happened to Admiral Nelson during the Battle of Trafalgar?",
        //    correctAnswers: [
        //        "He was killed in the battle"
        //    ],
        //    incorrectAnswers: [
        //        "He was captured by the French",
        //        "He was promoted during the battle",
        //        "He successfully retreated",
        //        "He surrendered to the Spanish",
        //        "He was wounded but survived",
        //        "He was not present at the battle"
        //    ]
        //},
        //{
        //    question: "What does Nelson's column in Trafalgar Square, London, commemorate?",
        //    correctAnswers: [
        //        "Admiral Nelson"
        //    ],
        //    incorrectAnswers: [
        //        "The Duke of Wellington",
        //        "The Battle of Trafalgar",
        //        "The Battle of Waterloo",
        //        "Napoleon",
        //        "The British Navy",
        //        "The French Revolution"
        //    ]
        //},
        //{
        //    question: "Where can Nelson's ship, HMS Victory, be visited?",
        //    correctAnswers: [
        //        "Portsmouth"
        //    ],
        //    incorrectAnswers: [
        //        "London",
        //        "Trafalgar",
        //        "Wellington",
        //        "Birmingham",
        //        "Manchester",
        //        "Liverpool",
        //        "Bristol"
        //    ]
        //},
        //{
        //    question: "What is the name of Admiral Nelson's ship that can be visited in Portsmouth?",
        //    correctAnswers: [
        //        "HMS Victory"
        //    ],
        //    incorrectAnswers: [
        //        "HMS Trafalgar",
        //        "HMS Nelson",
        //        "HMS Waterloo",
        //        "HMS Wellington",
        //        "HMS Iron Duke",
        //        "HMS Elizabeth",
        //        "HMS Britannia"
        //    ]
        //},
        //{
        //    question: "Which military force of Britain engaged in combat with the French during the French Revolutionary and Napoleonic Wars?",
        //    correctAnswers: [
        //        "The British Army"
        //    ],
        //    incorrectAnswers: [
        //        "The British Navy",
        //        "The Royal Air Force",
        //        "The British Marines",
        //        "The French Army",
        //        "The Spanish Army",
        //        "The Portuguese Army"
        //    ]
        //},
        //{
        //    question: "Who did the British Army fight against during the Revolutionary and Napoleonic Wars as indicated in the historical account of the 18th and early 19th centuries?",
        //    correctAnswers: [
        //        "The French"
        //    ],
        //    incorrectAnswers: [
        //        "The Spanish",
        //        "The Americans",
        //        "The Germans",
        //        "The Dutch",
        //        "The Russians",
        //        "The Italians"
        //    ]
        //},
        //{
        //    question: "In which century did the British Army fight against the French as detailed in the Life in the UK Test handbook, specifically in relation to the period around the Battle of Trafalgar and the defeat of Napoleon?",
        //    correctAnswers: [
        //        "The 19th century"
        //    ],
        //    incorrectAnswers: [
        //        "The 16th century",
        //        "The 17th century",
        //        "The 18th century",
        //        "The 20th century",
        //        "The 15th century",
        //        "The 21st century"
        //    ]
        //},
        //{
        //    question: "Which army did the British Army fight against during the Napoleonic Wars?",
        //    correctAnswers: [
        //        "The French Army"
        //    ],
        //    incorrectAnswers: [
        //        "The Spanish Army",
        //        "The German Army",
        //        "The Russian Army",
        //        "The American Army",
        //        "The Dutch Army",
        //        "The Portuguese Army"
        //    ]
        //},
        //{
        //    question: "In what year did the Napoleonic Wars end with the defeat of Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo?",
        //    correctAnswers: [
        //        "1815"
        //    ],
        //    incorrectAnswers: [
        //        "1805",
        //        "1789",
        //        "1812",
        //        "1820",
        //        "1830",
        //        "1799"
        //    ]
        //},
        //{
        //    question: "Who was defeated at the Battle of Waterloo in 1815?",
        //    correctAnswers: [
        //        "Emperor Napoleon"
        //    ],
        //    incorrectAnswers: [
        //        "Admiral Nelson",
        //        "The Duke of Marlborough",
        //        "The Duke of Wellington",
        //        "King Louis XVI",
        //        "King George III",
        //        "Queen Victoria"
        //    ]
        //},
        //{
        //    question: "Who defeated Emperor Napoleon at the Battle of Waterloo in 1815?",
        //    correctAnswers: [
        //        "The Duke of Wellington"
        //    ],
        //    incorrectAnswers: [
        //        "Admiral Nelson",
        //        "The Duke of Marlborough",
        //        "King Louis XVI",
        //        "King George III",
        //        "Queen Victoria",
        //        "General Montgomery"
        //    ]
        //},
        //{
        //    question: "At which battle in 1815 was Emperor Napoleon defeated?",
        //    correctAnswers: [
        //        "The Battle of Waterloo"
        //    ],
        //    incorrectAnswers: [
        //        "The Battle of Trafalgar",
        //        "The Battle of Hastings",
        //        "The Battle of Agincourt",
        //        "The Battle of Britain",
        //        "The Battle of Blenheim",
        //        "The Battle of the Nile"
        //    ]
        //},
        //{
        //    question: "What was the nickname given to the Duke of Wellington for his military prowess?",
        //    correctAnswers: [
        //        "the Iron Duke"
        //    ],
        //    incorrectAnswers: [
        //        "the Steel Earl",
        //        "the Bronze Baron",
        //        "the Silver General",
        //        "the Golden Commander",
        //        "the Brass Admiral",
        //        "the Copper Captain"
        //    ]
        //},
        //{
        //    question: "What was the Duke of Wellington known as before he became prime minister?",
        //    correctAnswers: [
        //        "the Iron Duke"
        //    ],
        //    incorrectAnswers: [
        //        "the Marquess of Queensberry",
        //        "the Earl of Derby",
        //        "the Viscount of Vickers",
        //        "the Baron of Battle",
        //        "the Count of Command",
        //        "the Knight of the Realm"
        //    ]
        //},
        //{
        //    question: "What position did the Duke of Wellington hold after his military career?",
        //    correctAnswers: [
        //        "prime minister"
        //    ],
        //    incorrectAnswers: [
        //        "king",
        //        "president",
        //        "governor",
        //        "secretary of state",
        //        "ambassador",
        //        "lord mayor"
        //    ]
        //}
    ];

    let category = {
        name: "War with France (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
