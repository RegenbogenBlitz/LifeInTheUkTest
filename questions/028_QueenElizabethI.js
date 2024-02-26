(() => {
    let questions = [
        {
            question: "What was the religion of Queen Elizabeth I?",
            correctAnswers: ["Protestant"],
            mandatoryIncorrectAnswers: ["Catholic"],
            incorrectAnswers: ["Orthodox", "Muslim", "Hindu", "Buddhist", "Jewish", "Sikh", "Atheist"]
        },
        {
            questions: [
                {
                    question: "Who reestablished the Church of England as the official church in England?",
                    correctAnswers: ["Elizabeth I"],
                    mandatoryIncorrectAnswers: ["Henry VIII", "Edward VI", "Mary I"],
                    incorrectAnswers: englishMonarchs.filter(monarch =>
                        monarch.name !== "Henry VIII" &&
                        monarch.name !== "Edward VI" &&
                        monarch.name !== "Mary I" &&
                        monarch.name !== "Elizabeth I").concat(dualMonarchs),
                    explanation: "The Church of England was established before Elizabeth I, but it was she who reestablished it after her predecessor's reigns."
                },
                {
                    question: "What did Queen Elizabeth I reestablish as the official church in England?",
                    correctAnswers: ["The Church of England"],
                    incorrectAnswers: [
                        "The Roman Catholic Church",
                        "The Methodist Church",
                        "The Baptist Church",
                        "The Presbyterian Church",
                        "The Quakers",
                        "The Lutheran Church"]
                }
            ]
        },
        {
            question: "What did Queen Elizabeth I require of her subjects in terms of church attendance?",
            correctAnswers: ["Everyone had to attend their local church"],
            incorrectAnswers: [
                "Only the nobility had to attend church",
                "People were free to attend any church they chose",
                "Only Protestants had to attend church",
                "Only Catholics were required to attend church"]
        },
        {
            question: "What was regulated by law during Queen Elizabeth I's reign regarding religious practices? (Select all that apply)",
            correctAnswers: ["The type of religious services", "The prayers which could be said"],
            incorrectAnswers: [
                "The color of the church walls",
                "The type of food to be served at religious gatherings",
                "The specific days of the week for religious fasting",
                "The number of candles to be lit during services",
                "The type of flowers to be placed on the altar"]
        },
        {
            question: "What was Queen Elizabeth I's policy regarding people's the beliefs of her subjects?",
            correctAnswers: ["People were not asked about their real beliefs"],
            incorrectAnswers: [
                "Only the nobility were subject to laws regarding their beliefs",
                "Non-Protestant beliefs were prohibited by law",
                "Only Protestants were interrogated about their beliefs",
                "She mandated public declarations of belief"],
            explanation: "Elizabeth was not interested in people's real beliefs, only in their outward conformity to the law."
        },
        {
            question: "What did Queen Elizabeth I succeed in doing regarding religious views?",
            correctAnswers: ["She found a balance between the views of Catholics and the more extreme Protestants"],
            incorrectAnswers: [
                "She eliminated the influence of the Catholics",
                "She united all religious groups into one church",
                "She established Catholicism as the official religion",
                "She forced all Protestants to convert to Catholicism",
                "She created a new religion",
                "She ignored religious matters entirely"]
        },
        {
            question: "What did Queen Elizabeth I succeed in doing regarding religious matters in England?",
            correctAnswers: ["She avoided any serious religious conflict"],
            incorrectAnswers: [
                "She enforced strict adherence to Catholicism",
                "She allowed freedom of religion without any restrictions",
                "She expelled all non-Protestants from England",
                "She initiated a series of religious wars",
                "She converted to Catholicism",
                "She imposed heavy fines on those who did not attend the Church of England",
                "She banned all religious practices other than Protestantism"
            ]
        },
        {
            questions: [
                {
                    question: "What event in 1588 contributed to Elizabeth I becoming one of the most popular monarchs in English history?",
                    correctAnswers: ["The defeat of the Spanish Armada"],
                    incorrectAnswers: [
                        "The Battle of Hastings",
                        "The signing of the Magna Carta",
                        "The establishment of the Church of England",
                        "The Act of Union with Scotland",
                        "The English Civil War",
                        "The Battle of Waterloo",
                        "The Glorious Revolution"
                    ]
                },
                {
                    question: "Who sent the Armada that was defeated by the English in 1588?",
                    correctAnswers: ["Spain"],
                    incorrectAnswers: [
                        "France",
                        "The Netherlands",
                        "Germany",
                        "Portugal",
                        "Italy",
                        "Scotland",
                        "Ireland"
                    ]
                },
                {
                    question: "What was the Spanish Armada's objective in 1588?",
                    correctAnswers: ["To conquer England and restore Catholicism"],
                    incorrectAnswers: [
                        "To establish a trade agreement with England",
                        "To support the Protestant Reformation",
                        "To assist Elizabeth I stamp out rebellion in Ireland",
                        "To explore the New World",
                        "To start a colony in North America",
                        "To defend against an English invasion",
                        "To participate in the English Civil War"
                    ]
                },
                {
                    question: "What was the Spanish Armada of 1588?",
                    correctAnswers: ["A large fleet of ships"],
                    incorrectAnswers: [
                        "A powerful army",
                        "An alliance of European powers",
                        "A group of experienced diplomats",
                        "A congregation of Catholic priests",
                        "A coalition of Protestant reformers",
                        "A band of explorers"]
                },
                {
                    question: "In what year was the famous defeat of the Spanish Armada under Elizabeth I?",
                    correctAnswers: ["1588"],
                    incorrectAnswers: getDates(1400, 1700, [1588], false)
                }
            ]
        }
    ];

    let category = {
        name: "Queen Elizabeth I",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
