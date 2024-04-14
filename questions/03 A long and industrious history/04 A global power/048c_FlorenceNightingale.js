(() => {
    let questions = [
        { // KEY QUESTION
            questions: [
                {
                    question: "In what century did Florence Nightingale do her most famous work?",
                    correctAnswers: ["19th"],
                    mandatoryIncorrectAnswers: ["18th", "20th"],
                    incorrectAnswers: ["17th", "21st"]
                },
                {
                    question: "In what era did Florence Nightingale do her most famous work?",
                    correctAnswers: ["The Victorian Era"],
                    incorrectAnswers: namesOfModernAges.filter(age => age !== "The Victorian Era")
                }
            ]
        },
        {
            question: "Where was Florence Nightingale born?",
            correctAnswers: ["Italy"],
            mandatoryIncorrectAnswers: ["England", "Scotland", "Wales", "Ireland"],
            incorrectAnswers: [
                "France",
                "Germany",
                "Russia",
                "Turkey",
                "Spain",
                "Greece",
                "India",
                "Australia",
                "New Zealand",
                "Canada",
                "United States"
            ]
        },
        //{
        //    question: "What was the nationality of Florence Nightingale's parents?",
        //    correctAnswers: [
        //        "English"
        //    ],
        //    incorrectAnswers: [
        //        "Italian",
        //        "German",
        //        "French",
        //        "Turkish",
        //        "Spanish",
        //        "Greek",
        //        "American"
        //    ]
        //},
        //{
        //    question: "At what age did Florence Nightingale train as a nurse?",
        //    correctAnswers: [
        //        "31"
        //    ],
        //    incorrectAnswers: [
        //        "25",
        //        "29",
        //        "32",
        //        "35",
        //        "40",
        //        "45",
        //        "50"
        //    ]
        //},
        //{
        //    question: "Where did Florence Nightingale train as a nurse?",
        //    correctAnswers: [
        //        "Germany"
        //    ],
        //    incorrectAnswers: [
        //        "Italy",
        //        "France",
        //        "England",
        //        "Turkey",
        //        "Spain",
        //        "United States"
        //    ]
        //},
        //{
        //    question: "In which year did Florence Nightingale go to Turkey to work in military hospitals?",
        //    correctAnswers: [
        //        "1854"
        //    ],
        //    incorrectAnswers: [
        //        "1853",
        //        "1855",
        //        "1856",
        //        "1850",
        //        "1860",
        //        "1845"
        //    ]
        //},
        //{
        //    question: "Where did Florence Nightingale work in military hospitals during the Crimean War?",
        //    correctAnswers: [
        //        "Turkey"
        //    ],
        //    incorrectAnswers: [
        //        "Germany",
        //        "Italy",
        //        "France",
        //        "Russia",
        //        "Greece",
        //        "England"
        //    ]
        //},
        //{
        //    question: "Who was Florence Nightingale treating in the military hospitals in Turkey?",
        //    correctAnswers: [
        //        "soldiers"
        //    ],
        //    incorrectAnswers: [
        //        "civilians",
        //        "children",
        //        "royalty",
        //        "politicians",
        //        "prisoners",
        //        "refugees"
        //    ]
        //},
        //{
        //    question: "During which war was Florence Nightingale treating soldiers in military hospitals in Turkey?",
        //    correctAnswers: [
        //        "the Crimean War"
        //    ],
        //    incorrectAnswers: [
        //        "the First World War",
        //        "the Second World War",
        //        "the Napoleonic Wars",
        //        "the Boer War",
        //        "the War of the Roses",
        //        "the Hundred Years' War"
        //    ]
        //},
        //{
        //    question: "What did Florence Nightingale and her fellow nurses achieve in the military hospitals during the Crimean War?",
        //    correctAnswers: [
        //        "Improved the conditions in the hospitals and reduced the mortality rate"
        //    ],
        //    incorrectAnswers: [
        //        "Established the Nightingale Training School for nurses",
        //        "Invented new medical equipment",
        //        "Introduced modern surgical techniques",
        //        "Discovered a cure for a common disease of the time",
        //        "Formed the first nursing union",
        //        "Developed a new vaccine"
        //    ]
        //},
        //{
        //    question: "In which year did Florence Nightingale establish the Nightingale Training School for nurses?",
        //    correctAnswers: [
        //        "1860"
        //    ],
        //    incorrectAnswers: [
        //        "1854",
        //        "1856",
        //        "1870",
        //        "1875",
        //        "1880",
        //        "1890",
        //        "1900"
        //    ]
        //},
        //{
        //    question: "Where did Florence Nightingale establish the Nightingale Training School for nurses?",
        //    correctAnswers: [
        //        "St Thomas' Hospital in London"
        //    ],
        //    incorrectAnswers: [
        //        "Royal London Hospital",
        //        "King's College Hospital",
        //        "Queen Elizabeth Hospital",
        //        "Guy's Hospital",
        //        "Westminster Hospital",
        //        "Royal Free Hospital"
        //    ]
        //},
        //{
        //    question: "What did Florence Nightingale establish at St Thomas' Hospital in London in 1860?",
        //    correctAnswers: [
        //        "the Nightingale Training School for nurses"
        //    ],
        //    incorrectAnswers: [
        //        "the Royal College of Nursing",
        //        "the British Nursing Association",
        //        "the School of Tropical Medicine",
        //        "the Florence Nightingale Museum",
        //        "the London School of Hygiene and Tropical Medicine",
        //        "the Nightingale Institute for Health"
        //    ]
        //},
        //{
        //    question: "Florence Nightingale is associated with the establishment of which school at St Thomas' Hospital in London?",
        //    correctAnswers: [
        //        "the Nightingale Training School for nurses"
        //    ],
        //    incorrectAnswers: [
        //        "the School of Medicine",
        //        "the School of Healthcare Science",
        //        "the School of Midwifery",
        //        "the School of Pharmacy",
        //        "the School of Dentistry",
        //        "the School of Biomedical Sciences"
        //    ]
        //},
        //{
        //    question: "The Nightingale Training School for nurses, established by Florence Nightingale, was founded in which location?",
        //    correctAnswers: [
        //        "St Thomas' Hospital in London"
        //    ],
        //    incorrectAnswers: [
        //        "Royal London Hospital",
        //        "King's College Hospital",
        //        "Queen Elizabeth Hospital",
        //        "Guy's Hospital",
        //        "Westminster Hospital",
        //        "Royal Free Hospital"
        //    ]
        //},
        //{
        //    question: "What was significant about the Nightingale Training School for nurses when it was established?",
        //    correctAnswers: [
        //        "It was the first of its kind"
        //    ],
        //    incorrectAnswers: [
        //        "It was the second of its kind",
        //        "It was one of many at the time",
        //        "It was exclusively for military nurses",
        //        "It was located outside of London",
        //        "It was a temporary institution",
        //        "It was founded by a government initiative"
        //    ]
        //},
        //{
        //    question: "Does the Nightingale Training School for nurses, established by Florence Nightingale in 1860, still exist today?",
        //    correctAnswers: [
        //        "Yes"
        //    ],
        //    incorrectAnswers: [
        //        "No",
        //        "It was rebuilt recently",
        //        "It was closed shortly after opening",
        //        "It was relocated to another country",
        //        "It exists only as a museum now",
        //        "It was renamed and no longer exists under the original name"
        //    ]
        //},
        //{
        //    question: "Which of Nightingale's contributions to nursing still exist today?",
        //    correctAnswers: [
        //        "Many of the practises that Nightingale used"
        //    ],
        //    incorrectAnswers: [
        //        "None of the practises that Nightingale used",
        //        "Only the textbooks she wrote",
        //        "Her original uniforms",
        //        "The hospital where she first worked",
        //        "The medicines she developed",
        //        "All the hospitals she worked in"
        //    ]
        //},
        //{
        //    question: "Do many of the nursing practices introduced by Florence Nightingale still exist in modern nursing?",
        //    correctAnswers: [
        //        "Many still exist today"
        //    ],
        //    incorrectAnswers: [
        //        "They have all been discontinued",
        //        "They are considered outdated",
        //        "They are only used in the UK",
        //        "They are taught but not practiced",
        //        "They are preserved in a museum",
        //        "They are banned"
        //    ]
        //},
        //{
        //    question: "The Nightingale Training School for nurses is associated with which hospital in London?",
        //    correctAnswers: [
        //        "St Thomas' Hospital"
        //    ],
        //    incorrectAnswers: [
        //        "St Mary's Hospital",
        //        "Royal London Hospital",
        //        "Guy's Hospital",
        //        "King's College Hospital",
        //        "Chelsea and Westminster Hospital",
        //        "Queen Elizabeth Hospital"
        //    ]
        //},
        //{
        //    question: "What legacy did Florence Nightingale leave in the field of nursing education?",
        //    correctAnswers: [
        //        "The establishment of the first nursing school of its kind"
        //    ],
        //    incorrectAnswers: [
        //        "The establishment of the largest nursing school",
        //        "The introduction of the first nursing university degree",
        //        "The creation of the first online nursing courses",
        //        "The founding of the first male nursing school",
        //        "The establishment of the first international nursing school",
        //        "The initiation of the first government-funded nursing program"
        //    ]
        //},
        {
            questions: [ // KEY QUESTION
                {
                    question: "What is Florence Nightingale famous for?",
                    correctAnswers: [
                        "Her contributions to nursing practice"
                    ],
                    incorrectAnswers: [
                        "Her activism towards state provided universal primary education",
                        "Her role as a spy during the Crimean War",
                        "The invention of the hoop skirt",
                        "Her activism towards voting rights for women",
                        "Her works of fiction and poetry",
                        "Her scientific drawings of microscopic organisms",
                        "Her contributions to the field of mathematics",
                    ]
                },
                {
                    question: "Who is often regarded as the founder of modern nursing?",
                    correctAnswers: [
                        "Florence Nightingale"
                    ],
                    incorrectAnswers: [
                        "Clara Barton",
                        "Mary Seacole",
                        "Elizabeth Fry",
                        "Edith Cavell",
                        "Margaret Sanger",
                        "Dorothea Dix",
                        "Linda Richards"
                    ]
                }
            ]
        }
    ];

    let category = {
        name: "Florence Nightingale (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
