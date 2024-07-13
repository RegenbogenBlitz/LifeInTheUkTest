(() => {
    let questions = [
        {
            question: "How was Elizabeth I regarded in terms of managing parliament?",
            correctAnswers: ["Very skilled"],
            incorrectAnswers: ["Indifferent", "Hostile", "Inept", "Mediocre"]
        },
        {
            question: "What was Elizabeth I successful at during her reign in relation to parliament?",
            correctAnswers: [
                "Balancing her wishes and views against those of the House of Lords and the House of Commons"],
            incorrectAnswers: [
                "Establishing the Divine Right of Kings",
                "Introducing the Bill of Rights",
                "Creating the Commonwealth",
                "Granting the right to vote to all citizens",
                "Abolishing the feudal system"]
        },
        {
            question: "What was the religious inclination of the House of Commons during Elizabeth I's reign?",
            correctAnswers: ["Increasingly Protestant"],
            incorrectAnswers: ["Mainly Catholic", "Predominantly Jewish", "Largely non-religious", "Primarily Methodist", "Significantly Puritan"]
        },
        {
            question: "In relation to Elizabeth I, how were James I and Charles I regarded in terms of managing parliament?",
            correctAnswers: ["Less skilled"],
            incorrectAnswers: ["More skilled", "Equally skilled"]
        },
        {
            question: "How were James I and Charles I related?",
            correctAnswers: ["Charles I was the son of James I"],
            incorrectAnswers: [
                "Charles I was the brother of James I",
                "James I was the uncle of Charles I",
                "Charles I was the cousin of James I",
                "James I was the son of Charles I",
                "James I was the grandson of Charles I",
                "James I and Charles I were not related"]
        },
        {
            question: "What did both James I and Charles I believe in regarding the monarchy?",
            correctAnswers: ["The 'Divine Right of Kings'"],
            incorrectAnswers: [
                "The 'Mandate of Parliament'",
                "The 'People's Choice of Monarchy'",
                "The 'Elective Monarchy System'",
                "The 'Constitutional Monarchy Doctrine'",
                "The 'Royal Parliamentary Partnership'"]
        },
        {
            question: "According to the 'Divine Right of Kings', who appointed the king to rule?",
            correctAnswers: ["God"],
            incorrectAnswers: ["Parliament", "The House of Lords", "The House of Commons", "The people through a democratic process", "The Prime Minister", "The previous monarch"]
        },
        {
            question: "What did James I and Charles I believe about the king's authority to act?",
            correctAnswers: ["The king should be able to act without having to seek approval from Parliament"],
            incorrectAnswers: [
                "The king should always get approval from Parliament",
                "The king needed the consent of the public to act",
                "The king was merely a figurehead without real power",
                "The king should act under the guidance of the Prime Minister",
                "The king must consult with religious leaders before acting",
                "The king's actions required endorsement by the military"]
        },
        {
            question: "Which principle did Charles I attempt to rule in accordance with when he inherited the thrones?",
            correctAnswers: ["The 'Divine Right of Kings'"],
            incorrectAnswers: ["The 'Magna Carta'", "The 'Bill of Rights'", "The 'Royal Prerogative'", "Parliamentary Sovereignty", "People's Mandate", "Constitutional Monarchy"]
        },
        {
            question: "Which countries' thrones did Charles I inherit? (Select all that apply)",
            correctAnswers: ["England", "Wales", "Ireland", "Scotland"],
            incorrectAnswers: ["France", "Spain", "Germany", "Italy", "Belgium", "The Netherlands"]
        },
        {
            question: "What did Charles I attempt to do when Parliament did not agree with his policies?",
            correctAnswers: ["He tried to rule without Parliament"],
            incorrectAnswers: [
                "He sought approval from the House of Lords",
                "He dissolved Parliament permanently",
                "He appealed to the House of Commons",
                "He resigned as king",
                "He called for a public referendum",
                "He amended the constitution to bypass Parliament"]
        },
        {
            question: "What policies of Charles I were not agreed upon by Parliament? (Select all that apply)",
            correctAnswers: ["Religious", "Foreign"],
            incorrectAnswers: [
                "Defense",
                "Agricultural",
                "Educational",
                "Healthcare",
                "Environmental",
                "Trade",
                "Immigration",
                "Science",
                "Technology",
                "Cultural",
                "Sports",
                "Transportation",
                "Infrastructure"],
            explanation: "This is true according to the book; however Charles I's tax policies were also a major point of contention with Parliament too."
        },
        {
            question: "How long did Charles I govern without seeking parliament's approval for raising money?",
            correctAnswers: ["For 11 years"],
            incorrectAnswers: ["For 5 years", "For 7 years", "For 15 years", "For 10 years", "For 20 years", "For 3 years"]
        },
        {
            question: "What was the reason that Charles I had to recall parliament?",
            correctAnswers: ["Trouble in Scotland"],
            incorrectAnswers: ["War with France", "Conflict in Ireland", "Financial crisis", "Rebellion in Wales", "Civil unrest in England", "Religious disputes"]
        },
    ];

    let category = {
        name: "The Rise of Parliament",
        questions: questions,
        isUnvetted: true,
        group: "The Tudors and Stuarts",
        majorGroup: "A long and illustrious history"
    }
    quizDeck.categories.push(category);
})();
