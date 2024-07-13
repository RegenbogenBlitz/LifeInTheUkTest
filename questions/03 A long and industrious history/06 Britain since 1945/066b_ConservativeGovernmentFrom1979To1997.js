(() => {
    let questions = [
        {
            question: "Who was Britain's first woman Prime Minister?",
            correctAnswers: ["Margaret Thatcher"],
            mandatoryIncorrectAnswers: [
                "Theresa May",
                "Liz Truss"
            ],
            incorrectAnswers: [
                "Barbara Castle",
                "Harriet Harman",
                "Nancy Astor",
                "Betty Boothroyd",
                "Mo Mowlam",
            ]
        },
        {
            questions: [

                {
                    question: "In what year did Margaret Thatcher become Prime Minister of the United Kingdom?",
                    correctAnswers: ["1979"],
                    mandatoryIncorrectAnswers: ["1990"],
                    incorrectAnswers: getDates(1900, 2000, [1979, 1990], false),
                },
                {
                    question: "In what year did Margaret Thatcher resign as Prime Minister?",
                    correctAnswers: ["1990"],
                    mandatoryIncorrectAnswers: ["1979"],
                    incorrectAnswers: getDates(1900, 2000, [1990, 1979], false),
                },
                {
                    question: "Who was the Prime Minister of the United Kingdom from 1979-1990?",
                    correctAnswers: ["Margaret Thatcher"],
                    incorrectAnswers: primeMinisters20thCentury.filter(pm => pm !== "Margaret Thatcher"),
                }
            ]
        },
        {
            question: "Which of the following did Margaret Thatcher achieve during her time as Prime Minister? (Select all that apply)",
            correctAnswers: [
                "Privatisation of nationalised industries",
                "Imposed legal controls on trade union powers",
                "Financial deregulation",
            ],
            incorrectAnswers: [
                "Nationalisation of the coal industry",
                "Nationalisation of the steel industry",
                "Creation of the National Health Service",
                "Creation of the National Lottery",
                "Creation of the National Trust",
                "Legalisation of abortion",
                "Decriminalisation of homosexuality",
                "Abolition of the death penalty",
                "Abolition of the slave trade",
                "Universal suffrage"
            ]
        },
        {
            question: "In what year did Argentina invade the Falkland Islands?",
            correctAnswers: ["1982"],
            incorrectAnswers: getDates(1900, 2000, [1982], false),
        },
        {
            question: "Who was the Prime Minister that followed Margaret Thatcher?",
            correctAnswers: ["John Major"],
            incorrectAnswers: primeMinisters20thCentury.filter(pm =>
                pm !== "Margaret Thatcher" &&
                pm !== "John Major").concat(primeMinisters21stCentury)
        },
        {
            question: "Which of the following did John Major achieve during his time as Prime Minister?",
            correctAnswers: [
                "Help establish the Northern Ireland peace process",
            ],
            incorrectAnswers: [
                "Nationalisation of the coal industry",
                "Nationalisation of the steel industry",
                "Creation of the National Health Service",
                "Creation of the National Lottery",
                "Creation of the National Trust",
                "Legalisation of abortion",
                "Decriminalisation of homosexuality",
                "Abolition of the death penalty",
                "Abolition of the slave trade",
                "Universal suffrage"
            ]
        }

    ];

    let category = {
        name: "Conservative government from 1979 to 1997",
        questions: questions,
        isIncomplete: true,
        group: "Britain since 1945",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
