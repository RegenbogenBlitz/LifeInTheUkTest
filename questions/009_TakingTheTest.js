(() => {

    let questions = [
        {
            question: "How many questions are on the Life in the UK test?",
            correctAnswers: [
                "24"
            ],
            incorrectAnswers: [
                "12",
                "16",
                "18",
                "20",
                "22",
                "28",
                "30",
                "36",
                "40",
                "48",
            ]
        },
        {
            questions: [
                {
                    question: "Questions for the Life in the UK test will be based on all parts of the handbook, including the introduction. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ]
                },
                {
                    question: "Questions for the Life in the UK test will only be based on some parts of the handbook. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ],
                    explanation: "Questions for the Life in the UK test will be based on all parts of the handbook, including the introduction."
                }
            ]
        },
        {
            questions: [
                {
                    question: "You will NOT need to remember dates of birth and/or death for the Life in the UK test. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ]
                },
                {
                    question: "You will need to remember dates of birth and/or death for the Life in the UK test. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "Questions for the Life in the UK test will be different for each person taking the test at that test session. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ]
                },
                {
                    question: "Questions for the Life in the UK test will be the same for each person taking the test at that test session. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Life in the UK test is usually taken in English. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ],
                    explanation: "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic."
                },
                {
                    question: "The Life in the UK test can be taken in any language. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ],
                    explanation: "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic."
                },
                {
                    question: "The Life in the UK test can be taken, by special arrangement, in Welsh or Scottish Gaelic. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ]
                },
                {
                    question: "The Life in the UK test may only be taken in English. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ],
                    explanation: "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic."
                },
                {
                    question: "What languages can the Life in the UK test be taken in? (Select all that apply)",
                    correctAnswers: [
                        "English",
                        "Welsh",
                        "Scottish Gaelic",
                    ],
                    mandatoryIncorrectAnswers: [
                        "Irish Gaelic",
                        "Scots",
                    ],
                    incorrectAnswers: [
                        "Cornish",
                        "Manx",
                        "Breton",
                        "French",
                        "German",
                        "Russian",
                        "Polish",
                        "Italian",
                        "Portuguese",
                        "Romanian",
                        "Dutch",
                        "Swedish",
                        "Danish",
                        "Norwegian",
                        "Finnish",
                        "Estonian",
                        "Latvian",
                        "Lithuanian",
                        "Hungarian",
                        "Greek",
                        "Turkish",
                        "Bulgarian",
                        "Czech",
                        "Slovak",
                        "Spanish",
                        "Hindi",
                        "Urdu",
                        "Punjabi",
                        "Bengali",
                        "Mandarin",
                        "Cantonese",
                        "Arabic",
                        "Japanese",
                        "Korean",
                        "Thai",
                        "Vietnamese",
                        "Indonesian",
                        "Malay",
                        "Tagalog",
                        "Swahili",
                    ],
                    explanation: "The Life in the UK test is usually taken in English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic."
                }
            ]
        },
        {
            questions: [
                {
                    question: "The Life in the UK test can only be taken at a registered and approved Life in the UK test centre. True or False?",
                    correctAnswers: [
                        "True"
                    ],
                    incorrectAnswers: [
                        "False",
                    ]
                },
                {
                    question: "The Life in the UK test may be taken in any UK government or local government building. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ],
                    explanation: "The Life in the UK test can only be taken at a registered and approved Life in the UK test centre."
                },
                {
                    question: "The Life in the UK test can be taken at home. True or False?",
                    correctAnswers: [
                        "False"
                    ],
                    incorrectAnswers: [
                        "True",
                    ],
                    explanation: "The Life in the UK test can only be taken at a registered and approved Life in the UK test centre."
                },
                {
                    question: "Where can the Life in the UK test be taken? (Select all that apply)",
                    isMultipleChoice: true,
                    correctAnswers: [
                        "At a registered and approved Life in the UK test centre",
                    ],
                    incorrectAnswers: [
                        "At home",
                        "At any UK government or local government building",
                        "In a library",
                        "In a school",
                        "In a college",
                        "In a university",
                        "Online",
                        "At a job centre",
                        "At a police station",
                        "In a driving test centre",
                    ],
                }
            ]
        },
        {
            question: "How many registered and approved Life in the UK test centres are there in the UK?",
            correctAnswers: [
                "Over 30"
            ],
            incorrectAnswers: [
                "Over 100",
                "Around 10",
                "Around 20",
                "1",
                "4",
                "5"
            ]
        },
        {
            questions: [
                {
                    question: "The Home Office will only accept Life in the UK test certificates from registered test centres. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Anywhere can issue UK test certificates that the Home Office will accept. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The Home Office will only accept Life in the UK test certificates from registered test centres."
                }
            ]
        },
        {
            questions: [
                {
                    question: "There are different arrangements for taking the Life in the UK test, if you live on the Isle of Man or in the Channel Islands. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "The arrangements for taking the Life in the UK test are the same as for UK, if you live on the Isle of Man or in the Channel Islands. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "There are different arrangements for taking the Life in the UK test, if you live on the Isle of Man or in the Channel Islands"
                }
            ]
        },
        {
            questions: [
                {
                    question: "You will need to take some identification and proof of your address with you to the test. If you don't take these, you will not be able to take the test. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "You do NOT need to take some identification and proof of your address with you to the test. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                },
                {
                    question: "What do you need to take with you to the test? (Select all that apply)",
                    correctAnswers: [
                        "Identification",
                        "Proof of your address"
                    ],
                    incorrectAnswers: [
                        "Your passport",
                        "Your driving licence",
                        "Your birth certificate",
                        "Your marriage certificate",
                        "A bank statement",
                        "A utility bill",
                        "A letter from your employer",
                        "Your visa details",
                        "Your National Insurance number",
                        "Your National Health Service (NHS) number",
                    ],
                }
            ],
        },
        {
            questions: [
                {
                    question: "All questions for the Life in the UK test will be based on material within the handbook. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Some questions for the Life in the UK test will be based on material outside of the handbook. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "The handbook has been written to ensure that anyone who can read English at ESOL Entry Level 3 or above should have no difficulty with the language. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "It is necessary to be able to read English above ESOL Entry Level 3 to understand some parts of the handbook. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"],
                    explanation: "The handbook has been written to ensure that anyone who can read English at ESOL Entry Level 3 or above should have no difficulty with the language."
                }
            ]
        },
        {
            question: "There is a glossary at the back of the handbook containing words and phrases. True or False?",
            correctAnswers: ["True"],
            incorrectAnswers: ["False"]
        },
        {
            questions: [
                {
                    question: "There are 'Check that you understand' boxes throughout the handbook for guidance. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"],
                    explanation: "Just knowing the things highlighted in these boxes will NOT be enough to pass the test."
                },
                {
                    question: "Just knowing the things highlighted in the 'Check that you understand' boxes will NOT be enough to pass the test. True or False?",
                    correctAnswers: ["True"],
                    incorrectAnswers: ["False"]
                },
                {
                    question: "Just knowing the things highlighted in the 'Check that you understand' boxes will be enough to pass the test. True or False?",
                    correctAnswers: ["False"],
                    incorrectAnswers: ["True"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "What is the website address for booking your Life in the UK test?",
                    correctAnswers: [
                        "www.gov.uk/life-in-the-uk-test"
                    ],
                    incorrectAnswers: [
                        "www.gov.uk/life-in-the-uk-test-centre",
                        "www.gov.uk/life-in-the-uk-test-centres",
                        "www.gov.uk/life-in-the-uk-test-booking",
                        "www.gov.uk/life-in-the-uk-test-book",
                        "www.gov.uk/life-in-the-uk-test-centre-booking",
                        "www.gov.uk/life-in-the-uk-test-centres-booking",
                        "www.gov.uk/life-in-the-uk-test-book-online",
                    ]
                },
                {
                    question: "How can you book your Life in the UK test? (Select all that apply)",
                    isMultipleChoice: true,
                    correctAnswers: [
                        "Online"
                    ],
                    incorrectAnswers: [
                        "By phone",
                        "By post",
                        "By email",
                        "In person",
                        "By fax"
                    ],
                },
                {
                    question: "Where can you find out more information about the Life in the UK test? (Select all that apply)",
                    correctAnswers: [
                        "The Home Office website",
                        "The Life in the UK test website",
                        "Gov.uk"
                    ],
                    incorrectAnswers: [
                        "The Foreign and Commonwealth Office website",
                        "The Department for Work and Pensions website",
                        "The Department for Education website",
                        "The Department for Transport website",
                        "The Department for Health website",
                        "The Department for Business, Innovation and Skills website",
                        "The Department for Culture, Media and Sport website",
                        "The Department for Energy and Climate Change website",
                        "The Department for Environment, Food and Rural Affairs website",
                        "The Department for International Development website",
                        "The Department for Communities and Local Government website",
                        "The Department for Justice website",
                        "The Department for Northern Ireland website",
                        "The Department for Scotland website",
                        "The Department for Wales website",
                        "The Department for International Trade website",
                    ]
                },
                {
                    question: "Where can you find information about the application process and the forms you will need to complete",
                    correctAnswers: [
                        "The Home Office website"
                    ],
                    incorrectAnswers: [
                        "The Foreign and Commonwealth Office website",
                        "The Department for Work and Pensions website",
                        "The Department for Education website",
                        "The Department for Transport website",
                        "The Department for Health website",
                        "The Department for Business, Innovation and Skills website",
                        "The Department for Culture, Media and Sport website",
                        "The Department for Energy and Climate Change website",
                        "The Department for Environment, Food and Rural Affairs website",
                        "The Department for International Development website",
                        "The Department for Communities and Local Government website",
                        "The Department for Justice website",
                        "The Department for Northern Ireland website",
                        "The Department for Scotland website",
                        "The Department for Wales website",
                        "The Department for International Trade website",
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "Taking the Life in the UK Test",
        questions: questions
    }
    quizDeck.categories.push(category);
})();
