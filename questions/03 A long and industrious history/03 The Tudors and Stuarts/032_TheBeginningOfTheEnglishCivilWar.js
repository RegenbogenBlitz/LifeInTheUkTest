(() => {
    let questions = [
        {
            question: "What did Charles I want to include more of in the Church of England's worship?",
            correctAnswers: ["Ceremony"],
            incorrectAnswers: [
                "Simplicity",
                "Tithing",
                "Confessions",
                "Pilgrimages",
                "Fasting"]
        },
        {
            question: "What does 'Presbyterian' mean?",
            correctAnswers: ["The main Protestant church in Scotland"],
            incorrectAnswers: [
                "The main Protestant church in England",
                "The Catholic church in Ireland",
                "The branch of Protestantism that retains bishops",
                "The branch of Protestantism that retains monasticism",
                "The branch of Protestantism which accepts monarchs as head of the church",
            ],
            explanation: "Presbyterian refers to the form of church government in which the church is governed by elders."
        },
        {
            questions: [
                {
                    question: "What did Charles I attempt to impose on the Presbyterian Church in Scotland?",
                    correctAnswers: ["A revised Prayer Book"],
                    incorrectAnswers: [
                        "The Anglican Book of Worship",
                        "The Catholic Missal",
                        "The Protestant Reformation Guide",
                        "The Scottish Book of Worship",
                        "The Puritan Code of Conduct",
                        "The Common Book of Prayer",
                        "The English Standard Liturgy"]
                },
                {
                    question: "What was the result of Charles I's attempts to impose a revised Prayer Book on the Presbyterian Church in Scotland?",
                    correctAnswers: ["Serious unrest"],
                    incorrectAnswers: [
                        "Peaceful acceptance",
                        "Enthusiastic embrace",
                        "Mild opposition"]
                },
                {
                    question: "What did the opposition in Scotland to the attempts of Charles I to impose a revised Prayer Book ultimately lead the people of Scotland to later do?",
                    correctAnswers: ["They raised a Scottish army"],
                    incorrectAnswers: [
                        "They appealed to the Pope for help",
                        "They asked for the intervention of the French monarchy",
                        "They requested the support of the Spanish monarchy",
                        "They appealed to the Archbishop of Canterbury"
                    ]
                },
                {
                    question: "How successful was Charles I in finding the money he needed to fund his own army," +
                        "when a Scottish army was raised in response to his attempts to impose a revised Prayer Book on the Presbyterian Church in Scotland?",
                    correctAnswers: ["He was unable to find the money on his own"],
                    incorrectAnswers: [
                        "He already had the money he needed in the royal treasury",
                        "He was able to find the money with the help of the Archbishop of Canterbury",
                        "He was able to find the money with the help of the French monarchy",
                        "He was able to find the money with the help of the Spanish monarchy",
                        "He was able to find the money with the help of the Pope",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Why did Charles I recall parliament in 1640?",
                    correctAnswers: ["To ask for funds"],
                    incorrectAnswers: [
                        "To ask for advice",
                        "To ask for religious guidance",
                        "To ask for political advice",
                        "To ask for a new constitution",
                        "To ask for a new monarch"]
                },
                {
                    question: "In what year did Charles I recall parliament, after 11 years without parliament, to ask for funds?",
                    correctAnswers: ["1640"],
                    incorrectAnswers: getDates(1500, 1900, [1640], false)
                },
            ]
        },
        {
            questions: [
                {
                    question: "Who in Parliament, during the reign of Charles I, advocated for strict and simple religious doctrine and worship?",
                    correctAnswers: ["Puritans"],
                    incorrectAnswers: ["Roman Catholics", "Quakers", "Methodists", "Presbyterians", "Baptists", "Orthodox Christians"]
                },
                {
                    question: "What were the Puritans' views on religious doctrine and worship?",
                    correctAnswers: ["They advocated strict and simple religious doctrine and worship"],
                    incorrectAnswers: [
                        "They supported the inclusion of more ceremony in worship",
                        "They were in favor of Charles I's religious reforms",
                        "They advocated for elaborate religious ceremonies",
                        "They were indifferent to religious doctrine and practices",
                        "They supported the imposition of the new Prayer Book in Scotland",
                        "They favored the growing power of the Roman Catholics in Ireland"]
                },
                {
                    question: "What was the attitude of the Puritans in Parliament towards King Charles I's religious views?",
                    correctAnswers: ["They did not agree with the king's religious views"],
                    incorrectAnswers: [
                        "They fully supported the king's religious views",
                        "They were indifferent to the king's religious views",
                        "They agreed with the king's religious views but disliked his personality",
                        "They were unsure about the king's religious views",
                        "They agreed with the king's religious views and liked his reforms",
                        "They had no opinion on the king's religious views",
                        "They agreed with the king's religious views but wanted more reforms"]
                },
                {
                    question: "What was the attitude of the Puritans in Parliament towards King Charles I's reforms of the Church of England?",
                    correctAnswers: ["They disliked his reforms of the Church of England"],
                    incorrectAnswers: [
                        "They liked his reforms of the Church of England",
                        "They were indifferent to his reforms of the Church of England",
                        "They supported his reforms of the Church of England and wanted more",
                        "They had no opinion on his reforms of the Church of England",
                        "They were divided in opinion on his reforms of the Church of England",
                        "They approved of his reforms of the Church of England but wanted fewer ceremonies", "They were unaware of his reforms of the Church of England"]
                }
            ]
        },
        {
            question: "What was Parliament's response to King Charles I's request for funds after the Scottish Army invaded England?",
            correctAnswers: ["Parliament refused to give the king the money he asked for"],
            incorrectAnswers: [
                "Parliament agreed to give the king the money he asked for",
                "Parliament remained neutral and did not respond to the king's request",
                "Parliament offered to negotiate with the Scottish Army instead",
                "Parliament only agreed to fund the king's army if he stepped down",
                "Parliament proposed a tax to fund the army without the king's involvement",
                "Parliament decided to support the Scottish Army instead"]
        },
        {
            questions: [
                {
                    question: "What was the reason for the rebellion that began in Ireland, during the reign of Charles I?" +
                        " The Roman Catholics in Ireland ...",
                    correctAnswers: ["were afraid of the growing power of the Puritans"],
                    incorrectAnswers: [
                        "wanted to support Charles I",
                        "were opposed to the Scottish Army",
                        "wanted to impose the Prayer Book",
                        "were trying to gain independence from England",
                        "were in favor of the king's religious reforms",
                        "were supporting the Cavaliers"]
                },
                {
                    question: "In which country did a rebellion begin due to fears of the Puritans' growing power?",
                    correctAnswers: ["Ireland"],
                    incorrectAnswers: ["Scotland", "England", "Wales", "France", "Germany", "Spain"]
                }
            ]
        },
        {
            question: "What did Parliament demand during the unrest in England, during the reign of Charles I?",
            correctAnswers: ["Control of the English army"],
            incorrectAnswers: [
                "Control of the Scottish army",
                "Abolishment of the monarchy",
                "The king's abdication",
                "Complete religious reform",
                "Total control of government spending",
                "An alliance with the Scottish Army"]
        },


        {
            question: "What was the significance of Parliament asking for control of the English army during the reign of Charles I",
            correctAnswers: ["A substantial transfer of power from the king to Parliament"],
            incorrectAnswers: [
                "A minor transfer of power from the king to Parliament",
                "A unremarkable, routine request",
                "Unusual, but with many precedents",
            ]
        },
        {
            question: "What was King Charles I's response to Parliament's demand for control of the English army?",
            correctAnswers: [
                "He entered the House of Commons and tried to arrest five parliamentary leaders"],
            incorrectAnswers: [
                "He agreed to Parliament's demands",
                "He dissolved Parliament",
                "He declared war on Parliament",
                "He fled the country",
                "He negotiated a compromise with Parliament",
                "He imposed martial law"]
        },
        {
            question: "Why did King Charles I fail to arrest the five parliamentary leaders?",
            correctAnswers: ["They had been warned and were not there"],
            incorrectAnswers: [
                "The leaders surrendered voluntarily",
                "The leaders were protected by the public",
                "The leaders were in the House of Lords",
                "The leaders were hiding within the Commons",
                "The leaders had the support of the army"]
        },
        {
            questions: [
                {
                    question: "Since what occasion has no monarch set foot in the House of Commons?",
                    correctAnswers: ["Since Charles I tried to arrest five parliamentary leaders"],
                    incorrectAnswers: [
                        "Since John signed the Magna Carta",
                        "Since Henry VIII sought approval for his divorce from Catherine of Aragon",
                        "Since Elizabeth I gave her 'Golden Speech'",
                        "Since James the I's last speech prior to the failed Gunpowder Plot",
                        "Since Anne dissolved the Parliament of Scotland",
                        "Since George III asked for support during the American Revolution"]
                },
                {
                    question: "Who was the last monarch to enter the House of Commons?",
                    correctAnswers: ["Charles I"],
                    incorrectAnswers: ["Elizabeth I", "James I", "Henry VIII", "Oliver Cromwell", "Queen Victoria", "King George III", "Edward VII", "Queen Elizabeth II"]
                },
            ]
        },
        {
            question: "In what year did the civil war between the king and Parliament begin?",
            correctAnswers: ["1642"],
            incorrectAnswers: getDates(1500, 1900, [1642], false)
        },
        { // KEY QUESTION
            question: "What name was given to the supporters of the king during the civil war?",
            correctAnswers: ["the Cavaliers"],
            mandatoryIncorrectAnswers: ["the Roundheads", "the Parliamentarians"],
            incorrectAnswers: ["the Loyalists", "the Commons", "the Puritans", "the Luddites", "the Levellers"]
        },
        { // KEY QUESTION
            question: "What name was given to the supporters of parliament during the civil war?",
            correctAnswers: ["the Roundheads"],
            mandatoryIncorrectAnswers: ["the Cavaliers", "the Royalists"],
            incorrectAnswers: ["the Commonwealthmen", "the Nationalists", "the Rebels", "the Confederates", "the Unionists", "the Luddites"]
        },
    ];

    let category = {
        name: "The Beginning of the English Civil War",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
