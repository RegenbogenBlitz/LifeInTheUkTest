(() => {
    let questions = [
        {
            question: "What was the status of Charles II's legitimate children?",
            correctAnswers: ["He had none"],
            incorrectAnswers: [
                "They all died before him",
                "He had only daughters",
                "His son was born after his death, and so did not become king"]
        },
        {
            question: "Who became monarch after the death of Charles II?",
            correctAnswers: ["James"],
            incorrectAnswers: [
                "Charles",
                "William",
                "Henry",
                "Edward",
                "George",
                "Mary",
                "Anne"],
        },
        {
            question: "What relation was Charles II to his successor?",
            correctAnswers: ["Brothers"],
            incorrectAnswers: [
                "Father and son",
                "Uncle and nephew",
                "Cousins",
                "Unrelated"]
        },
        {
            question: "What title did James hold in England, Wales, and Ireland after becoming king?",
            correctAnswers: ["James II"],
            incorrectAnswers: ["James I", "James III", "James IV", "James V", "James VI", "James VII"]
        },
        {
            question: "What title did James hold in Scotland after becoming king?",
            correctAnswers: ["James VII"],
            incorrectAnswers: ["James I", "James II", "James III", "James IV", "James V", "James VI"]
        },
        {
            question: "What was the religion of Charles II's brother James who became king?",
            correctAnswers: ["Roman Catholic"],
            incorrectAnswers: ["Anglican", "Presbyterian", "Methodist", "Baptist", "Lutheran"]
        },
        {
            question: "Which religious group did King James II favour during his reign?",
            correctAnswers: ["Roman Catholics"],
            incorrectAnswers: ["Anglicans", "Puritans", "Quakers", "Methodists", "Baptists"]
        },
        {
            questions: [
                {
                    question: "What did King James II allow Roman Catholics to become despite an act of Parliament?",
                    correctAnswers: ["Army officers"],
                    incorrectAnswers: ["Members of Parliament", "Judges", "Bishops"]
                },
                {
                    question: "Why was King James II's action of allowing Roman Catholics to become army officers controversial?",
                    correctAnswers: ["An act of Parliament had forbidden it"],
                    incorrectAnswers:
                        ["It was against the Church of England's rules",
                            "It led to a war with France",
                            "It caused a peasant uprising",
                            "It violated the Magna Carta",
                            "It was against the Pope's decree",
                            "It contradicted the Bill of Rights"]
                },
            ]
        },
        {
            question: "What was King James II's approach towards Parliament?",
            correctAnswers: ["He did not seek to reach agreements with Parliament"],
            incorrectAnswers: [
                "He frequently consulted Parliament",
                "He sought advice from Parliament on religious matters",
                "He created new parliamentary acts to strengthen the monarchy",
                "He called for frequent parliamentary sessions",
                "He sought to reach agreements with Parliament on all matters"]
        },
        {
            question: "What did King James II do to the Church of England?",
            correctAnswers: ["He arrested some bishops "],
            incorrectAnswers: [
                "He abolished it",
                "He made it the official religion of England",
                "He made it the official religion of Scotland",
                "He made it the official religion of Ireland",
                "He excommunicated its leaders",
                "He appointed a new Archbishop of Canterbury",
                "He stripped it of its wealth"]
        },
        {
            question: "What did people in England worry about during the reign of King James II?",
            correctAnswers: ["That James wanted to make England a Catholic country again"],
            incorrectAnswers: [
                "That James wanted to establish a new Parliament",
                "That James wanted to abolish the Church of England",
                "That James sought to form an alliance with France",
                "That James intended to disband the army",
                "That James aimed to introduce a new legal system",
                "That James planned to revert England to a republic"]
        },
        {
            question: "What religion were all the heirs of King James II during most his reign?",
            correctAnswers: ["Protestant"],
            incorrectAnswers: ["Roman Catholic", "Methodist", "Baptist", "Presbyterian", "Lutheran", "Quaker"]
        },
        {
            questions: [
                {
                    question: "How many daughters did King James II have as heirs?",
                    correctAnswers: ["Two"],
                    incorrectAnswers: ["One", "Three", "Four", "Five", "None", "Six"]
                },
                {
                    question: "Who were the heirs of King James II for most of his reign?",
                    correctAnswers: ["His daughters"],
                    incorrectAnswers: ["His sons", "His brothers", "His nephews", "His cousins"]
                }
            ]
        },
        {
            question: "What did people expect regarding the religion of the future monarch during most of King James II's reign?",
            correctAnswers: ["There would soon be a Protestant monarch again"],
            incorrectAnswers: [
                "There would be a Roman Catholic monarch again",
                "The monarchy would abolish religion",
                "The monarchy would become secular",
                "The monarchy would adopt Presbyterianism"]
        },
        {
            questions: [
                {
                    question: "What significant event occurred that changed expectations about the religious affiliation of the future monarch during the reign of James II?",
                    correctAnswers: ["James's wife has a son"],
                    incorrectAnswers: [
                        "His daughters converted to Catholicism",
                        "His daughters died",
                        "He abolished the Church of England",
                        "James converted to Protestantism",
                    ]
                },
                {
                    question: "What seemed the most likely religious affiliation of the next monarch after James's wife had a son?",
                    correctAnswers: [
                        "Roman Catholicism"],
                    incorrectAnswers: [
                        "Protestantism",
                        "Non-religious",
                        "Puritanism",
                        "Quakerism",
                        "Presbyterianism"]
                },
            ]
        }
    ];

    let category = {
        name: "A Catholic King",
        questions: questions,
        group: "The Tudors and Stuarts",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
