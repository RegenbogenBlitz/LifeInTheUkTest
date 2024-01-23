(() => {
    let significantDates = [
        "1066", // Battle of Hastings
        "1086", // Domesday book
        "1139", // War of Stephen and Matilda
        "1215", // Signing of the Magna Carta
        "1258", // Signing of the provisions of Oxford
        "1284", // Statute of Rhuddlan
        "1314", // Battle of Bannockburn
        "1337", // Start of the Hundred Years War
        "1348", // Arrival of the Black Death in England
        "1415", // Battle of Agincourt
        "1455", // Start of the War of the Roses
        "1475", // End of the Hundred Years War
        "1485" // Battle of Bosworth
    ]
    let questions = [
        {
            question: "What type of land ownership system did the Normans use?",
            correctAnswers: [ "Feudalism"],
            mandatoryIncorrectAnswers: ["The Clan system"],
            incorrectAnswers : [
                "Communism",
                "Capitalism",
                "Enclosure",
                "Plantation",
                "Freehold",
                "Common land",
                "Collectivism",
                "Latifundia"
            ]
        },
        {
            questions:[
                {
                    question: "Feudalism was the system whereby the king gave land to his lords in return for help in war. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "Feudalism was the system whereby the king gave land to his lords without obligation as thanks for personal favours. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism was the system whereby the king gave land to his lords in return for help in war."
                },
                {
                    question: "Feudalism was the system whereby wealthy capitalists owned large plantations where slaves performed agricultural work. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism was the system whereby the king gave land to his lords in return for help in war."
                },
                {
                    question: "Feudalism was the system whereby the state owned all land and it was cultivated for the common good. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism was the system whereby the king gave land to his lords in return for help in war."
                },
                {
                    question: "Feudalism was the system whereby most farmers owned their own land and cultivated it for their own profit. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism was the system whereby the king gave land to his lords in return for help in war."
                }
            ]
        },
        {
            questions:[
                {
                    question: "Feudalism required landowners to send certain numbers of men to serve in the army. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "Feudalism required nothing of landowners. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism required landowners to send certain numbers of men to serve in the army."
                },
                {
                    question: "Feudalism required landowners to receive certain numbers of migrants. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism required landowners to send certain numbers of men to serve in the army."
                },
                {
                    question: "Feudalism required landowners to contribute crops to national food stores. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Feudalism required landowners to send certain numbers of men to serve in the army."
                }
            ]
        },
        {
            questions:[
                {
                    question: "In Feudalism, some peasants had their own land but most were serfs. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "In Feudalism, most peasants had their own land but some were serfs. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "In Feudalism, some peasants had their own land but most were serfs."
                },
                {
                    question: "In Feudalism, no peasants had their own land as all were serfs. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "In Feudalism, some peasants had their own land but most were serfs."
                }
            ]
        },
        {
            questions: [
                {
                    question: "In Feudalism, serfs had a small area of land where they could grow food. True or false?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "In Feudalism, serfs had a large area of land where they could grow food. True or false?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Serfs had a small area of land where they could grow food."
                },
                {
                    question: "In Feudalism, serfs had a small area of land where they could grow cash crops. True or false?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Serfs had a small area of land where they could grow food."
                },
                {
                    question: "In Feudalism, serfs shared their land with many other serfs to grow food. True or false?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Serfs had a small area of land where they could grow food."
                }
            ]
        },
        {
            questions: [
                {
                    question: "In Feudalism, serfs had to work for their lord and could not move away. True or false?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "In Feudalism, serfs had to work for their lord but could leave to work for another lord. True or false?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Serfs had to work for their lord and could not move away."
                },
                {
                    question: "In Feudalism, serfs had no obligation to a lord, but could not move away. True or false?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "Serfs had to work for their lord and could not move away."
                }
            ]
        },
        {
            questions: [
                {
                    question: "Where did Feudalism develop in Britain?",
                    correctAnswers: [ "South England", "North England", "South Scotland"],
                    incorrectAnswers : [ 
                        "North Scotland",
                        "North Ireland",
                        "South Ireland"]
                },
                {
                    question: "What type of land ownership system was used in north Scotland and in Ireland?",
                    correctAnswers: [ "The Clan system"],
                    mandatoryIncorrectAnswers: ["Feudalism"],
                    incorrectAnswers: [
                        "Communism",
                        "Capitalism",
                        "Enclosure",
                        "Plantation",
                        "Freehold",
                        "Common land",
                        "Collectivism",
                        "Latifundia",
                    ]
                }
            ]
        },
        {
            questions:[
                {
                    question: "The Clan system was the system whereby prominent families owned the land. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "The Clan system was the system whereby the king gave land to his lords in return for help in war. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "The Clan system was the system whereby prominent families owned the land. Feudalism was the system whereby the king gave land to his lords in return for help in war."
                },
                {
                    question: "The Clan system was the system whereby the king gave land to his lords without obligation as thanks for personal favours. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "The Clan system was the system whereby prominent families owned the land."
                },
                {
                    question: "The Clan system was the system whereby wealthy capitalists owned large plantations where slaves performed agricultural work. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "The Clan system was the system whereby prominent families owned the land."
                },
                {
                    question: "The Clan system was the system whereby the state owned all land and it was cultivated for the common good. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "The Clan system was the system whereby prominent families owned the land."
                },
                {
                    question: "The Clan system was the system whereby most farmers owned their own land and cultivated it for their own profit. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "The Clan system was the system whereby prominent families owned the land."
                }
            ]
        },
        {
            question: "When did the Black Death arrive in Britain?",
            correctAnswers: ["1348"],
            incorrectAnswers: significantDates.filter(d => d !=="1348")
        },
        {
            question: "Most probably, what sort of disease was the Black death?",
            correctAnswers: ["Plague"],
            incorrectAnswers: [
                "Influenza",
                "Syphilis",
                "Cholera",
                "Ebola",
                "Pox",
                "Malaria",
                "Measles",
                "Yellow Fever",
                "Typhoid",
                "Tuberculosis"
            ]
        },
        {
            question: "What portion of England died from the Black Death?",
            correctAnswers: ["1/3"],
            incorrectAnswers: [
                "3/4",
                "1/2",
                "1/4",
                "1/5",
                "1/6",
                "1/10"
            ]
        },
        {
            question: "What portion of Scotland died from the Black Death?",
            correctAnswers: ["1/3"],
            incorrectAnswers: [
                "3/4",
                "1/2",
                "1/4",
                "1/5",
                "1/6",
                "1/10"
            ]
        },
        {
            question: "What portion of Wales died from the Black Death?",
            correctAnswers: ["1/3"],
            incorrectAnswers: [
                "3/4",
                "1/2",
                "1/4",
                "1/5",
                "1/6",
                "1/10"
            ]
        },
        {
            question: ["To what extent was the Black Death a disaster in Britain?"],
            correctAnswers: ["It was one of the worsts disasters ever to strike Britain."],
            incorrectAnswers: [
                "It was a disaster in Britain, but was not significant historically speaking.",
                "It was did not have a significant effect on Britain at all."
            ]
        },
        {
            question: ["After the Black Death, what happened to the need for growing cereal crops in Britain?"],
            correctAnswers: ["There was less need"],
            incorrectAnswers: [
                "The need did not significantly change",
                "There was greater need"
            ]
        },
        {
            question: ["After the Black Death, what happened to the demand for labour in Britain?"],
            correctAnswers: ["There were labour shortages"],
            incorrectAnswers: [
                "Demand for labour balanced the reduced supply",
                "There was a surplus of labour"
            ]
        },
        {
            question: ["After the Black Death, what happened to peasants demand for wages in Britain?"],
            correctAnswers: ["They began to demand higher wages"],
            incorrectAnswers: [
                "Wages stablised",
                "Peasants accepted lesser wages due to desperation"
            ]
        },
        {
            questions:[
                {
                    question: "After the Black Death, new social classes appeared in Britan. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "After the Black Death, the social structures in Britain largely remained the same. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "After the Black Death, new social classes appeared in Britan."
                },
                {
                    question: "After the Black Death, what was the name of the new social class of large land owners?",
                    correctAnswers: [ "The gentry"],
                    incorrectAnswers : [ 
                        "The peasantry",
                        "The serfs",
                        "The villians",
                        "The commons",
                        "The merchant class",
                        "The nobility",
                        "The clergy",
                        "The bourgeoisie",
                        "The aristocracy",
                        "The proletariat",
                        "The kulaks"],
                },
                {
                    question: "After the Black Death, what distinguished the new social class of the gentry?",
                    correctAnswers: [ "Ownership of large areas of land"],
                    incorrectAnswers : [ 
                        "High wages for labour",
                        "Slavelike status, attached to the land they worked",
                        "Trading of imported goods",
                        "Belonging to ancient families",
                        "Working for the church",
                        "Consumers of manufactured goods",
                        "Producers of manufactured goods"],
                }
            ]
        },
        {
            question: "After the Black Death, what happened to the proportion of people in towns vs the countryside?",
            correctAnswers: ["People left the countryside to live in towns."],
            incorrectAnswers: [
                "The proportion didn't significantly change.",
                "People left the towns to live in the countryside."]
        },
        {
            questions:[
                {
                    question: "After the Black Death, growing wealth led to the development of a strong middle class. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "After the Black Death, falling wealth led to the decimation of the middle class. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "After the Black Death, growing wealth led to the development of a strong middle class."
                }
            ]
        },
        {
            questions:[
                {
                    question: "What was the name of the area of Ireland controlled by the English King where the Black Death killed many?",
                    correctAnswers: [ "The Pale"],
                    incorrectAnswers : [ 
                        "Ulster",
                        "Desmond",
                        "Kildare",
                        "Ormond",
                        "Wexford",
                        "Magennis",
                        "Mayo",
                        "Burkes",
                        "Mac Carthy Mor",
                        "Dempsey"
                    ]
                },
                {
                    question: "In Ireland, the Black Death killed many in the Pale. True or False?",
                    correctAnswers: [ "True"],
                    incorrectAnswers : [ "False"]
                },
                {
                    question: "In Ireland, the Black Death largely spared the Pale. True or False?",
                    correctAnswers: [ "False"],
                    incorrectAnswers : [ "True"],
                    explanation: "In Ireland, the Black Death killed many in the Pale."
                }
            ]
        },
        {
            question: "What happened to the area controlled by the English in Ireland after the Black Death?",
            correctAnswers: ["It became smaller"],
            incorrectAnswers:[
                "It became larger",
                "It roughly stayed the same"
            ]
        }
    ];

    let category = {
        name: "The Middle Ages - The Black Death",
        questions: questions
    }
    quizDeck.categories.push(category);
})();
