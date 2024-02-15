(() => {
    let questions = [
        {
            question: "Where was Isaac Newton born?",
            correctAnswers: ["Lincolnshire, eastern England"],
            incorrectAnswers: [
                "Cambridge, eastern England",
                "Oxford, southern England",
                "Yorkshire, northern England",
                "Manchester, northwest England",
                "London, southeast England",
                "Bristol, southwest England",
                "Newcastle, northeast England"]
        },
        {
            questions: [
                {
                    question: "What sparked Isaac Newton's interest in science?",
                    correctAnswers: ["When he studied at Cambridge University"],
                    incorrectAnswers: [
                        "When he visited the Royal Observatory",
                        "During his early schooling",
                        "While he worked in a London laboratory",
                        "After attending a lecture by Galileo",
                        "During his travels through Europe",
                        "After reading 'Principia Mathematica'",
                        "While he was a professor at Oxford University"]
                },
                {
                    question: "Which university did Isaac Newton attend?",
                    correctAnswers: ["Cambridge University"],
                    mandatoryIncorrectAnswers: ["Oxford University"],
                    incorrectAnswers: [,
                        "University of Edinburgh",
                        "Gottigen University",
                        "University of Leiden",
                        "University of Paris",
                        "University of Bologna",
                        "University of Heidelberg"]
                },
            ]
        },
        {
            questions: [
                {
                    question: "What is the title of Isaac Newton's most famous published work?",
                    correctAnswers: ["Philosophiae Naturalis Principia Mathematica"],
                    incorrectAnswers: [
                        "In Principio Erat Verbum",
                        "The Philosophical Transactions",
                        "Dulce et Decorum Est",
                        "In Memento Mori",
                        "De Motu Corporum in Gyrum",
                        "On the Revolutions of the Heavenly Spheres",
                        "The Advancement of Learning",
                        "Leviathan",
                        "Principles of Geology",
                        "A Brief History of Time",
                        "The Origin of Species"]
                },
                {
                    question: "What was demonstrated in Isaac Newton's work 'Philosophiae Naturalis Principia Mathematica'?",
                    correctAnswers: ["How gravity applied to the whole universe"],
                    incorrectAnswers: [
                        "The heliocentric model of the universe",
                        "The principles of heredity",
                        "The concept of natural selection",
                        "The circulation of the blood",
                        "The laws of optics"]
                },
                {
                    question: "In which work did Isaac Newton show how gravity applied to the entire universe?",
                    correctAnswers: ["Philosophiae Naturalis Principia Mathematica"],
                    incorrectAnswers: [
                        "Opticks",
                        "On the Revolutions of the Heavenly Spheres",
                        "Dialogues Concerning Two New Chief World Systems",
                        "Relativity: The Special and the General Theory",
                        "Cosmos",
                        "A Brief History of Time",
                    ]
                }
            ]
        },
        {
            question: "What did Isaac Newton discover about white light?",
            correctAnswers: ["That white light is made up of the colours of the rainbow"],
            incorrectAnswers: [
                "That white light is the absence of all colours",
                "That white light cannot be split into different colours",
                "That white light is the only colour that can be seen in a vacuum",
                "That white light is a single colour that cannot be changed",
                "That white light is created by the reflection of the sun's rays",
                "That white light is less intense than coloured light"]
        },
        {
            question: "What is the significance of Isaac Newton's discoveries?",
            correctAnswers: ["They are still important for modern science"],
            incorrectAnswers: [
                "They are primarily important for philosophy",
                "They are only relevant to historical science",
                "They pertained primarily to the field of alchemy",
                "They were mainly theologically significant"]
        },
    ];

    let category = {
        name: "Issac Newton",
        questions: questions,
        group: "The Tudors and Stuarts"
    }
    quizDeck.categories.push(category);
})();
