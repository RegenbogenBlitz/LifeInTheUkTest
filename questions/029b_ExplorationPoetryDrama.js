(() => {
    let questions = [
        {
            question: "What was the Elizabethan period known for regarding national identity?",
            correctAnswers: ["Growing patriotism"],
            incorrectAnswers: ["Declining patriotism", "Stagnant patriotism", "Rising conflicts", "Economic depression", "Cultural stagnation", "Religious turmoil"]
        },
        {
            question: "What did the growing patriotism during the Elizabethan period emphasize?",
            correctAnswers: ["Pride in being English"],
            incorrectAnswers: ["Pride in being European", "Pride in being Scottish", "Pride in military conquest", "Pride in economic wealth", "Pride in technological advancements", "Pride in artistic achievements"]
        },
        {
            question: "What was the goal of English explorers during the Elizabethan period?",
            correctAnswers: ["To seek new trade routes", "Expand British trade into the Spanish colonies in the Americas"],
            incorrectAnswers: [
                "To conquer new lands",
                "Establish English colonies in Africa",
                "To discover and claim territories in Asia for the British Crown",
                "To establish trade routes with the Ottoman Empire",
                "To explore and map the uncharted territories of Australia",
                "To search for the Northwest Passage to Asia",
                "To develop commercial alliances with the Russian Empire"]
        },
        {
            question: "Which colonies did English explorers attempt to expand British trade into during the Elizabethan period?",
            correctAnswers: ["The Spanish colonies in the Americas"],
            incorrectAnswers: [
                "The Portuguese colonies in South America",
                "The French colonies in North America",
                "The Dutch colonies in the Caribbean",
                "The Spanish colonies in Africa",
                "The British colonies in India",
                "The Russian colonies in North America"]
        },
        {
            question: "Who was one of the founders of England's naval tradition?",
            correctAnswers: ["Sir Francis Drake"],
            incorrectAnswers: [
                "Captain James Cook",
                "Admiral Lord Nelson",
                "Captain William Bligh"
            ]
        },
        {
            question: "What were the significant achievements of Sir Francis Drake?",
            correctAnswers: ["Circumnavigating the world", "Defeating the Spanish Armada"],
            incorrectAnswers: [
                "Discovering the Americas",
                "Establishing the first English colony in America",
                "Discovering the Northwest Passage",
                "Discovering the source of the Nile River",
                "Discovering the continent of Australia",
                "Discovering the continent of Antarctica",
                "Discovering the continent of Asia"]
        },
        {
            questions: [
                {
                    question: "What was the name of Sir Francis Drake's ship that circumnavigated the world?",
                    correctAnswers: ["the Golden Hind"],
                    incorrectAnswers: ["the Mayflower", "the Victory", "the Endeavour", "the Beagle", "the Santa Maria", "the Speedwell", "the Titanic", "the Queen Anne's Revenge"]
                },
                {
                    question: "What notable achievement is the Golden Hind known for?",
                    correctAnswers: ["Being one of the first ships to circumnavigate the world"],
                    incorrectAnswers: ["Discovering the Americas", "Defeating the Spanish Armada", "Being the largest ship of its time", "The first ship to reach the North Pole", "Transporting the Pilgrim Fathers to the New World", "Sailing the longest voyage without resupply"]
                },
                {
                    question: "During which period did the Golden Hind circumnavigate the world?",
                    correctAnswers: ["The Elizabethan period"],
                    incorrectAnswers: ["The Victorian period", "The Stuart period", "The Georgian period", "The Anglo-Saxon period", "The Norman period"]
                }
            ]
        },
        {
            questions: [
                {
                    question: "During whose reign did English settlers first begin to colonise the east coast of America?",
                    correctAnswers: ["Elizabeth I's"],
                    incorrectAnswers: ["Henry VIII's", "James I's", "Victoria's", "George III's", "Edward VII's", "Elizabeth II's", "Charles II's"]
                },
                {
                    question: "Which area did English settlers first begin to colonise in Elizabeth I's time?",
                    correctAnswers: ["The east coast of America"],
                    incorrectAnswers: ["The west coast of America", "Australia", "India", "The Caribbean", "South Africa", "New Zealand", "Canada"]
                },
                {
                    question: "What activity did English settlers first undertake on the east coast of America during Elizabeth I's time?",
                    correctAnswers: ["Colonisation"],
                    incorrectAnswers: ["Trading", "Piracy", "Exploration", "Missionary work", "Establishing a monarchy", "Setting up trade routes", "Fishing"]
                }
            ]
        },
        {
            question: "What was a key reason for the increase in colonisation of the east coast of America in the next century after Elizabeth I?",
            correctAnswers: ["People who disagreed with the religious views of the next two kings."],
            incorrectAnswers: ["People who were seeking to escape economic hardships.", "People who were interested in exploring new cultures.", "People who wanted to establish new educational institutions.", "People attracted by the promise of gold and riches.", "People who were sent by the English government to establish a military base.", "People who were in search of new scientific discoveries.", "People who were fleeing from political persecution in England."]
        },
        {
            question: "What is the Elizabethan period particularly remembered for?",
            correctAnswers: ["The richness of its poetry and drama"],
            incorrectAnswers: [
                "The beginning of the Industrial Revolution",
                "The signing of the Magna Carta",
                "The Battle of Hastings",
                "The signing of the Treaty of Versailles",
                "The Glorious Revolution"]
        },
        {
            question: "Which playwright and poet is especially associated with the Elizabethan period?",
            correctAnswers: ["William Shakespeare"],
            incorrectAnswers: [
                "Geoffrey Chaucer", "Jane Austen", "Charles Dickens", "John Milton", "John Keats", "William Wordsworth", "Samuel Taylor Coleridge", "Percy Shelley"]
        }
    ];

    let category = {
        name: "The Tudors and Stuarts - Exploration, Poetry and Drama",
        questions: questions,
        isUnvetted: true
    }
    quizDeck.categories.push(category);
})();
