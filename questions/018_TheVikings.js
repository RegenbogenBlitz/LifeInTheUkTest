(() => {

    let kings = [
        "Alfred the Great",
        "Cnut or Canute",
        "Kenneth MacAlpin",
        "William the Conqueror",
        "Harold Godwinson",
        "Edward the Confessor",
        "Harold Harefoot",
        "Harthacnut",
        "Edward the Martyr",
        "Ethelred the Unready",
        "Edmund Ironside",
        "Sweyn Forkbeard",
        "Edgar the Peaceful",
        "Edmund the Magnificent",
        "Eadwig All-Fair"
    ];

    let questions = [
        {
            question: "From where did the Vikings come to Britain (in modern day terms)?  (Select all that apply)",
            correctAnswers: ["Denmark", "Norway", "Sweden"],
            incorrectAnswers: europeanCountries.filter(country => country !== "Denmark" && country !== "Norway" && country !== "Sweden")
        },
        {
            question: "When did the Vikings first visit Britain?",
            correctAnswers: ["789"],
            incorrectAnswers: getDates(1, 1066, [789], false)
        },
        {
            question: "What did the Vikings do when they first visited Britain?  (Select all that apply)",
            correctAnswers: ["raid coastal towns", "take away goods", "take away slaves"],
            incorrectAnswers: [
                "raid inland towns",
                "trade with coastal towns",
                "trade with inland towns",
                "settle in coastal towns",
                "settle in inland towns",
                "sell goods to coastal towns",
                "sell slaves to coastal towns"
            ]
        },
        {
            question: "Where did the Vikings first stay and form their own communities in Britain? (Select all that apply)",
            correctAnswers: ["the east of England", "Scotland"],
            incorrectAnswers: [
                "the west of England",
                "the south of England",
                "Wales"
            ]
        },
        {
            questions: [
                {
                    question: "Under which king, who defeated the Vikings, did the Anglo-Saxon kingdoms in England unite?",
                    correctAnswers: ["Alfred the Great"],
                    incorrectAnswers: kings.filter(king => king !== "Alfred the Great")
                },
                {
                    question: "What were the significant achievements of Alfred the Great's reign? (Select all that apply)",
                    correctAnswers: ["He defeated the Vikings", "He united the Anglo-Saxon kingdoms in England"],
                    incorrectAnswers: [
                        "He defeated the Celts",
                        "He defeated the Romans",
                        "He defeated the Anglo-Saxons",
                        "He defeated the Normans",
                        "He united the Anglo-Saxon kingdoms in Scotland",
                        "He united the Anglo-Saxon kingdoms in Wales",
                        "He united the Anglo-Saxon kingdoms in Ireland",
                        "He built Hadrian's Wall",
                        "He built Offa's Dyke",
                        "He built Stonehenge",
                        "He built Maiden Castle",
                        "He built Sutton Hoo"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "After their defeat by the Anglo-Saxons, many of the Viking invaders stayed in Britain. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "After their defeat by the Anglo-Saxons, the Viking invaders largely left Britain. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "After their defeat by the Anglo-Saxons, where did the Viking invaders stay in Britain? (Select all that apply)",
                    correctAnswers: ["the east of England", "the west of England"],
                    incorrectAnswers: [
                        "the south of England",
                        "the west of England",
                        "Wales"]
                },
                {
                    question: "What was the name of the region of Britain the Vikings stayed in after their defeat by the Anglo-Saxons?",
                    correctAnswers: ["the Danelaw"],
                    incorrectAnswers: [
                        "the Vikingslaw",
                        "the Northmenlaw",
                        "the Nordiclaw",
                        "Daneland",
                        "Vikingland",
                        "Northmenland",
                        "Nordicland",
                        "Dane country",
                        "Viking country",
                        "Northmen country",
                        "Nordic country",
                    ]
                }
            ]
        },
        {
            question: "Name some of the place names in Britain that come from the Viking languages. (Name at least 2)",
            minimumCorrectAnswers: 2,
            correctAnswers: ["Grimsby", "Scunthorpe"],
            furtherCorrectAnswers: [
                "Rugby",
                "Derby",
                "Whitby",
                "Selby"],
            incorrectAnswers: [
                "York",
                "London",
                "Winchester",
                "Bath",
                "Colchester",
                "Exeter",
            ]
        },
        {
            questions: [
                {
                    question: "The Viking settlers mixed with local communities. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Viking settlers stayed separate from local communities. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Some Viking settlers converted to Christianity. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The Viking settlers did NOT convert to Christianity. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "During the Viking period, there was a short period when there were Danish kings ruling in England, without Anglo Saxon Kings. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Anglo-Saxons continued to rule continuously in England, throughout the Viking period. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                },
                {
                    question: "What was the name of the first Danish king to rule in England in a period without Anglo-Saxon kings?",
                    correctAnswers: ["Cnut or Canute"],
                    incorrectAnswers: kings.filter(king => king !== "Cnut or Canute")
                }
            ]
        },
        {
            questions: [
                {
                    question: "What was the name of the king who united the people in Scotland against the Vikings?",
                    correctAnswers: ["Kenneth MacAlpin"],
                    incorrectAnswers: kings.filter(king => king !== "Kenneth MacAlpin")
                },
                {
                    question: "When was the first time the name Scotland was used to describe the country?",
                    correctAnswers: ["during the Viking period"],
                    incorrectAnswers: [
                        "during the Celtic period",
                        "during the Roman period",
                        "during the Anglo-Saxon period",
                        "during the Norman period"
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "The Vikings",
        questions: questions,
        group: "Early Britain"
    }
    quizDeck.categories.push(category);
})();