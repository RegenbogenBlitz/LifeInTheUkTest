(() => {
    let questions = [
        {
            question: "What was the marital status of Elizabeth I when she ruled England?",
            correctAnswers: ["Elizabeth I never married"],
            incorrectAnswers: [
                "Elizabeth I was married",
                "Elizabeth I was widowed",
                "Elizabeth I was divorced",
                "Elizabeth I was separated",
                "Elizabeth I was engaged",
                "Elizabeth I's marital status is unknown"]
        },
        {
            question: "Did Elizabeth I have any children to inherit her throne?",
            correctAnswers: ["Elizabeth I had no children"],
            incorrectAnswers: [
                "Elizabeth I had one child",
                "Elizabeth I had two children",
                "Elizabeth I had three children",
                "Elizabeth I had four children",
                "Elizabeth I had several children",
                "The number of Elizabeth I's children is unknown"]
        },
        {
            question: "At the time of the death of Elizabeth I, who was the heir to her throne?",
            correctAnswers: ["James VI of Scotland"],
            incorrectAnswers: [
                "Henry VIII of England",
                "Edward VI of England",
                "Mary I of England",
                "Mary Queen of Scots",
                "Anne of Denmark",
                "Charles I of England",
                "William III of England"]
        },
        {
            question: "What title did James VI of Scotland acquire when he became the ruler of England, Wales, and Ireland?",
            correctAnswers: ["King James I"],
            incorrectAnswers: [
                "King James II",
                "King James III",
                "King James IV",
                "King James V",
                "King James VI",
                "King James II"]
        },
        {
            question: "What became the legal state of Scotland when James VI of Scotland became King James I of England, Wales, and Ireland?",
            correctAnswers: ["Scotland remained a separate state"],
            incorrectAnswers: [
                "Scotland was united with England",
                "Scotland became part of England",
                "Scotland was united with Ireland",
                "Scotland was declared independent",
                "Scotland merged with Wales",
                "Scotland became a republic"]
        },
        {
            questions: [
                {
                    question: "Which Stuart monarch was responsible for a new translation of the Bible into English?",
                    correctAnswers: ["James VI and I"],
                    incorrectAnswers: ["Charles I", "Charles II", "James VII and II", "William III and II", "Mary II", "Anne"]
                },
                {
                    question: "What was one achievement during the reign of King James VI and I?",
                    correctAnswers: ["A new translation of the Bible into English"],
                    incorrectAnswers: [
                        "The unification of Scotland and England",
                        "The establishment of the Church of England",
                        "The defeat of the Spanish Armada",
                        "The signing of the Magna Carta",
                        "The beginning of the Industrial Revolution",
                        "The introduction of the English Bill of Rights"]
                },
                {
                    question: "What significant religious contribution was made during King James VI and I's reign?",
                    correctAnswers: ["A new translation of the Bible"],
                    incorrectAnswers: [
                        "The founding of a new church",
                        "The revision of the Book of Common Prayer",
                        "The abolition of the monasteries",
                        "The organization of the Synod of Dort",
                        "The enforcement of the Act of Supremacy",
                        "The declaration of the Thirty-Nine Articles"]
                }
            ]
        },
        {
            question: "What is the 'King James Version' known for?",
            correctAnswers: ["A new translation of the Bible into English"],
            incorrectAnswers: [
                "The first translation of the Bible into English",
                "A revision of the political system in England",
                "A collection of laws enacted by King James I",
                "An economic reform policy",
                "A military strategy guide",
                "A compilation of Shakespeare's works"]
        },
        {
            questions: [
                {
                    question: "By what names is the version of the Bible, translated during the reign of James VI and I, that continues to be used in many Protestant churches today? (Select all that apply)",
                    correctAnswers: ["King James Version", "Authorised Version"],
                    incorrectAnswers: [
                        "New International Version",
                        "New Revised Standard Version",
                        "Douay-Rheims Bible",
                        "New American Bible",
                        "English Standard Version",
                        "The Living Bible",
                        "New King James Version"]
                },
                {
                    question: "In what context is the King James Version still used?",
                    correctAnswers: ["In many Protestant churches"],
                    incorrectAnswers: [
                        "In all Christian churches",
                        "Exclusively in Catholic churches",
                        "Only in non-denominational churches",
                        "In all religious institutions",
                        "Solely in educational settings",
                        "In government ceremonies"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The King James Version was the first English Bible. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The King James Version was not the first English Bible. The first English Bible was translated by John Wycliffe in the 14th century."
                },
                {
                    question: "The King James Version was NOT the first English Bible. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "The King James Version was not the first English Bible. The first English Bible was translated by John Wycliffe in the 14th century."
                }
            ]
        },
    ];

    let category = {
        name: "King James VI and I, and The King James Bible",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
