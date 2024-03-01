(() => {
    let questions = [
        {
            question: "Which of the following most accurately reflects the status of Britain as a trading nation in the 19th century?",
            correctAnswers: ["Britain continued to be a great trading nation"],
            incorrectAnswers: [
                "Britain was no longer a great trading nation",
                "Britain was a minor trading nation",
                "Britain was a new trading nation",
                "Britain was a developing trading nation",
                "Britain was a declining trading nation",
                "Britain was a rising trading nation"
            ]
        },
        //{
        //    question: "During the 19th century, what type of policies did the British government promote that led to the abolishing of taxes on imported goods?",
        //    correctAnswers: [
        //        "Policies of free trade"
        //    ],
        //    incorrectAnswers: [
        //        "Policies of protectionism",
        //        "Policies of mercantilism",
        //        "Policies of isolationism",
        //        "Policies of colonialism",
        //        "Policies of regulated trade",
        //        "Policies of trade tariffs"
        //    ]
        //},
        //{
        //    question: "What action did the British government take to support the promotion of free trade policies in the 19th century?",
        //    correctAnswers: [
        //        "Abolishing a number of taxes on imported goods"
        //    ],
        //    incorrectAnswers: [
        //        "Increasing taxes on imported goods",
        //        "Introducing new taxes on imported goods",
        //        "Abolishing all taxes on exported goods",
        //        "Reducing regulations on domestic goods",
        //        "Implementing quotas on imported goods",
        //        "Establishing subsidies for domestic producers"
        //    ]
        //},
        //{
        //    question: "What was the primary objective of the British government's policy to abolish certain taxes on imported goods as described in the mid-19th century?",
        //    correctAnswers: [
        //        "To promote policies of free trade"
        //    ],
        //    incorrectAnswers: [
        //        "To increase government revenue",
        //        "To promote policies of self-sufficiency",
        //        "To decrease the national debt",
        //        "To protect domestic industries",
        //        "To encourage exportation",
        //        "To retaliate against trade partners"
        //    ]
        //},
        //{
        //    question: "What year were the Corn Laws repealed in Britain?",
        //    correctAnswers: [
        //        "1846"
        //    ],
        //    incorrectAnswers: [
        //        "1836",
        //        "1856",
        //        "1866",
        //        "1876",
        //        "1826",
        //        "1848",
        //        "1851"
        //    ]
        //},
        //{
        //    question: "What was a significant policy implemented by the British government to promote free trade in 1846?",
        //    correctAnswers: [
        //        "The repealing of the Corn Laws"
        //    ],
        //    incorrectAnswers: [
        //        "The introduction of the Corn Laws",
        //        "The enforcement of the Corn Laws",
        //        "The modification of the Corn Laws",
        //        "The establishment of the Corn Laws",
        //        "The expansion of the Corn Laws",
        //        "The confirmation of the Corn Laws",
        //        "The regulation of the Corn Laws"
        //    ]
        //},
        //{
        //    question: "What was the purpose of the Corn Laws that were repealed in 1846?",
        //    correctAnswers: [
        //        "They had prevented the import of cheap grain."
        //    ],
        //    incorrectAnswers: [
        //        "They had promoted the export of cheap grain.",
        //        "They had prevented the export of cheap grain.",
        //        "They had established a tax on all grain.",
        //        "They had regulated the quality of grain.",
        //        "They had subsidized the production of grain.",
        //        "They had mandated the storage of grain.",
        //        "They had controlled the price of domestic grain."
        //    ]
        //},
        //{
        //    question: "What did the Corn Laws prevent before being repealed in 1846?",
        //    correctAnswers: [
        //        "The import of cheap grain"
        //    ],
        //    incorrectAnswers: [
        //        "The export of cheap grain",
        //        "The import of expensive grain",
        //        "The export of expensive grain",
        //        "The import of cheap cotton",
        //        "The export of cheap cotton",
        //        "The production of grain",
        //        "The production of cotton"
        //    ]
        //},
        //{
        //    question: "What was the effect of the Corn Laws on grain imports prior to 1846?",
        //    correctAnswers: [
        //        "Prevented"
        //    ],
        //    incorrectAnswers: [
        //        "Encouraged",
        //        "Taxed",
        //        "Subsidized",
        //        "Monitored",
        //        "Regulated",
        //        "Had no effect",
        //        "Promoted"
        //    ]
        //},
        //{
        //    question: "Which type of grain import was restricted by the Corn Laws before their repeal in 1846?",
        //    correctAnswers: [
        //        "Cheap grain"
        //    ],
        //    incorrectAnswers: [
        //        "Expensive grain",
        //        "All grain irrespective of price",
        //        "Only locally produced grain",
        //        "Only grain from the Empire",
        //        "Only organic grain",
        //        "Grain used for animal feed",
        //        "Grain used for alcohol production"
        //    ]
        //},
        //{
        //    question: "The repeal of which laws in 1846 allowed for the import of cheap grain?",
        //    correctAnswers: [
        //        "The Corn Laws"
        //    ],
        //    incorrectAnswers: [
        //        "The Grain Importation Laws",
        //        "The Agriculture Laws",
        //        "The Trade Laws",
        //        "The Wheat Laws",
        //        "The Food Importation Laws",
        //        "The Economic Reform Laws",
        //        "The Free Trade Laws"
        //    ]
        //},
        //{
        //    question: "What was the effect of the 19th-century policy changes regarding taxes on the cost of importing raw materials for British industry?",
        //    correctAnswers: [
        //        "Raw materials could be imported more cheaply"
        //    ],
        //    incorrectAnswers: [
        //        "Raw materials could be exported more cheaply",
        //        "Taxes on raw materials were increased",
        //        "The price of raw materials increased",
        //        "Raw materials were only available domestically",
        //        "The reforms restricted the import of raw materials",
        //        "The development of British industry was hindered by the reforms"
        //    ]
        //},
        //{
        //    question: "Why were raw materials able to be imported more cheaply in Britain after the government abolished certain taxes on imported goods in the mid-19th century?",
        //    correctAnswers: [
        //        "Because the government abolished a number of taxes on imported goods"
        //    ],
        //    incorrectAnswers: [
        //        "Because of advancements in transportation",
        //        "Due to the invention of new machinery",
        //        "As a result of the Corn Laws",
        //        "Due to increased domestic production",
        //        "Because of a trade embargo on imported goods",
        //        "Due to currency devaluation"
        //    ]
        //},
        //{
        //    question: "Which aspect of factory life in Britain saw improvement during the Victorian era?",
        //    correctAnswers: [
        //        "Working conditions in factories"
        //    ],
        //    incorrectAnswers: [
        //        "Working hours in agriculture",
        //        "Living conditions in factories",
        //        "Safety standards in mines",
        //        "Quality of manufactured goods",
        //        "Healthcare in urban areas",
        //        "Transportation infrastructure",
        //        "Educational opportunities for workers"
        //    ]
        //},
        //{
        //    question: "In what way did working conditions in factories change during the Victorian period?",
        //    correctAnswers: [
        //        "They gradually became better"
        //    ],
        //    incorrectAnswers: [
        //        "They rapidly deteriorated",
        //        "They remained the same",
        //        "They were regulated by international laws",
        //        "They became more hazardous",
        //        "They were influenced by overseas factories",
        //        "They were standardized across Europe",
        //        "They were controlled by workers' unions"
        //    ]
        //},
        //{
        //    question: "In what year were the working hours for women and children legally limited to 10 hours per day?",
        //    correctAnswers: [
        //        "1847"
        //    ],
        //    incorrectAnswers: [
        //        "1837",
        //        "1851",
        //        "1846",
        //        "1901",
        //        "1920",
        //        "1870",
        //        "1912"
        //    ]
        //},
        //{
        //    question: "By law, what was the maximum number of hours per day that women and children could work starting from 1847?",
        //    correctAnswers: [
        //        "10 hours"
        //    ],
        //    incorrectAnswers: [
        //        "8 hours",
        //        "12 hours",
        //        "9 hours",
        //        "11 hours",
        //        "6 hours",
        //        "14 hours",
        //        "16 hours"
        //    ]
        //},
        //{
        //    question: "Who were affected by the 1847 law that limited working hours to 10 hours per day?",
        //    correctAnswers: [
        //        "Women and children"
        //    ],
        //    incorrectAnswers: [
        //        "Men and women",
        //        "All workers",
        //        "Only men",
        //        "Only women",
        //        "Only children",
        //        "Adult workers",
        //        "Senior citizens"
        //    ]
        //},
        //{
        //    question: "What type of housing improvements began during the Victorian era?",
        //    correctAnswers: [
        //        "Better housing for workers"
        //    ],
        //    incorrectAnswers: [
        //        "Larger estates for the wealthy",
        //        "Modern apartment complexes",
        //        "Public housing projects",
        //        "Luxury condominiums",
        //        "Rural cottages",
        //        "Suburban developments"
        //    ]
        //},
        //{
        //    question: "For whom was better housing being built during the Victorian era?",
        //    correctAnswers: [
        //        "Workers"
        //    ],
        //    incorrectAnswers: [
        //        "The aristocracy",
        //        "Factory owners",
        //        "Soldiers",
        //        "Farmers",
        //        "Immigrants",
        //        "Merchants"
        //    ]
        //},
        //{
        //    question: "What was the impact of improved transport links in Britain during the Victorian period?",
        //    correctAnswers: [
        //        "Enabled goods and people to move more easily around the country"
        //    ],
        //    incorrectAnswers: [
        //        "Decreased the cost of goods transportation",
        //        "Created barriers to trade within the country",
        //        "Reduced the number of people moving to urban areas",
        //        "Led to a decline in the use of railways",
        //        "Increased the time taken to travel around the country",
        //        "Made it more difficult for people to access jobs"
        //    ]
        //},
        //{
        //    question: "Which aspect of British society was most directly improved by the enhancement of transport links during the Victorian period?",
        //    correctAnswers: [
        //        "Transportation of goods and people"
        //    ],
        //    incorrectAnswers: [
        //        "Agricultural productivity",
        //        "Education systems",
        //        "Social welfare programs",
        //        "Communication technologies",
        //        "Healthcare services",
        //        "Cultural exchange programs"
        //    ]
        //},
        //{
        //    question: "During which period did transport links in Britain notably improve, facilitating easier movement of goods and people, as highlighted by the expansion of the railways?",
        //    correctAnswers: [
        //        "The Victorian period"
        //    ],
        //    incorrectAnswers: [
        //        "The Elizabethan period",
        //        "The Stuart period",
        //        "The Georgian period",
        //        "The Edwardian period",
        //        "The Tudor period",
        //        "The Regency period"
        //    ]
        //},
        { // Key Question
            question: "In what century did British engineers George and Robert Stephenson do their most famous work?",
            correctAnswers: ["19th"],
            mandatoryIncorrectAnswers: ["18th", "20th"],
            incorrectAnswers: ["17th", "21st"]
        },
        //{
        //    question: "Who pioneered the railway engine just before Victoria came to the throne?",
        //    correctAnswers: [
        //        "George and Robert Stephenson"
        //    ],
        //    incorrectAnswers: [
        //        "Isambard Kingdom Brunel",
        //        "James Watt",
        //        "Richard Trevithick",
        //        "Matthew Boulton",
        //        "George and James Stephenson",
        //        "Robert and Isambard Stephenson",
        //        "George and Richard Stephenson"
        //    ]
        //},
        //{
        //    question: "Who were the pioneers of the railway engine that led to a major expansion of the railways in the Victorian period?",
        //    correctAnswers: [
        //        "George and Robert Stephenson"
        //    ],
        //    incorrectAnswers: [
        //        "The invention of the steam engine",
        //        "The construction of the national road network",
        //        "The introduction of the first underground railway",
        //        "The building of major ports",
        //        "Expansion of canal networks",
        //        "The development of the automobile industry",
        //        "The first transatlantic steamship service"
        //    ]
        //},
        //{
        //    question: "Who were the pioneers of the railway engine that marked a significant advancement in the railway sector just before Victoria came to the throne?",
        //    correctAnswers: [
        //        "George and Robert Stephenson"
        //    ],
        //    incorrectAnswers: [
        //        "The invention of the steam locomotive",
        //        "The introduction of the first public bus service",
        //        "The establishment of the first national railway company",
        //        "The building of the first suspension bridge",
        //        "The construction of the London Underground",
        //        "The creation of the first transcontinental railway",
        //        "The launch of the first electric tram service"
        //    ]
        //},
        //{
        //    question: "During which period were railways built throughout the British Empire as highlighted in the advancements of the Victorian era?",
        //    correctAnswers: [
        //        "Victorian period"
        //    ],
        //    incorrectAnswers: [
        //        "Edwardian period",
        //        "Georgian period",
        //        "Elizabethan period",
        //        "Stuart period",
        //        "Tudor period",
        //        "Modern period"
        //    ]
        //},
        //{
        //    question: "What was one of the major developments in transportation during the Victorian period in the British Empire?",
        //    correctAnswers: [
        //        "Building of railways"
        //    ],
        //    incorrectAnswers: [
        //        "Construction of highways",
        //        "Introduction of steamships",
        //        "Expansion of canal systems",
        //        "Invention of the automobile",
        //        "Development of air travel",
        //        "Proliferation of bicycles"
        //    ]
        //},
        //{
        //    question: "During the Victorian period, where were railways built according to the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "Throughout the Empire"
        //    ],
        //    incorrectAnswers: [
        //        "Only in Great Britain",
        //        "Only in India",
        //        "Exclusively in the colonies",
        //        "Solely in Africa",
        //        "Just in Australia",
        //        "Only within Europe"
        //    ]
        //},
        //{
        //    question: "Which engineer is known for making great advances in bridge building during the Victorian period?",
        //    correctAnswers: [
        //        "Isambard Kingdom Brunel"
        //    ],
        //    incorrectAnswers: [
        //        "George Stephenson",
        //        "Robert Stephenson",
        //        "Thomas Telford",
        //        "John McAdam",
        //        "James Watt",
        //        "Matthew Boulton",
        //        "Richard Arkwright"
        //    ]
        //},
        //{
        //    question: "In which area did Isambard Kingdom Brunel make great advances during the Victorian period?",
        //    correctAnswers: [
        //        "Building of bridges"
        //    ],
        //    incorrectAnswers: [
        //        "Railway engine development",
        //        "Expansion of the railways",
        //        "Coal production",
        //        "Cotton cloth manufacturing",
        //        "Iron production",
        //        "Financial services"
        //    ]
        //},
        //{
        //    question: "During which period did Isambard Kingdom Brunel make significant contributions to bridge building?",
        //    correctAnswers: [
        //        "Victorian period"
        //    ],
        //    incorrectAnswers: [
        //        "Georgian period",
        //        "Edwardian period",
        //        "Stuart period",
        //        "Elizabethan period",
        //        "Regency period",
        //        "Jacobean period"
        //    ]
        //},
        //{
        //    question: "What type of structures did Isambard Kingdom Brunel notably advance in his engineering work?",
        //    correctAnswers: [
        //        "Bridges"
        //    ],
        //    incorrectAnswers: [
        //        "Railways",
        //        "Ships",
        //        "Factories",
        //        "Housing",
        //        "Roads",
        //        "Canals"
        //    ]
        //},
        //{
        //    question: "In which century did British industry lead the world, as stated in the provided section from the Life in the UK Test handbook?",
        //    correctAnswers: [
        //        "19th century"
        //    ],
        //    incorrectAnswers: [
        //        "18th century",
        //        "20th century",
        //        "17th century",
        //        "16th century",
        //        "15th century",
        //        "21st century"
        //    ]
        //},
        //{
        //    question: "Which country's industry was leading globally in production and innovation during the 19th century, as per the section provided?",
        //    correctAnswers: [
        //        "British"
        //    ],
        //    incorrectAnswers: [
        //        "French",
        //        "German",
        //        "American",
        //        "Russian",
        //        "Chinese",
        //        "Indian"
        //    ]
        //},
        //{
        //    question: "During the 19th century, what proportion of the world's iron was produced by the UK?",
        //    correctAnswers: [
        //        "More than half"
        //    ],
        //    incorrectAnswers: [
        //        "Less than half",
        //        "Exactly half",
        //        "Three quarters",
        //        "A quarter",
        //        "One third",
        //        "Two thirds",
        //        "None at all"
        //    ]
        //},
        //{
        //    question: "During the 19th century, what proportion of the world's coal was produced by the UK?",
        //    correctAnswers: [
        //        "More than half"
        //    ],
        //    incorrectAnswers: [
        //        "Less than half",
        //        "Exactly half",
        //        "Three quarters",
        //        "A quarter",
        //        "One third",
        //        "Two thirds",
        //        "None at all"
        //    ]
        //},
        //{
        //    question: "During the 19th century, what proportion of the world's cotton cloth was produced by the UK?",
        //    correctAnswers: [
        //        "More than half"
        //    ],
        //    incorrectAnswers: [
        //        "Less than half",
        //        "Exactly half",
        //        "Three quarters",
        //        "A quarter",
        //        "One third",
        //        "Two thirds",
        //        "None at all"
        //    ]
        //},
        //{
        //    question: "Which of the following did the UK produce more than half of the world's supply during the 19th century?",
        //    correctAnswers: [
        //        "Iron",
        //        "Coal",
        //        "Cotton cloth"
        //    ],
        //    incorrectAnswers: [
        //        "Wool",
        //        "Silk",
        //        "Tea",
        //        "Spices",
        //        "Gold",
        //        "Silver",
        //        "Tobacco"
        //    ]
        //},
        //{
        //    question: "In the 19th century, the UK was a leading producer of which commodities?",
        //    correctAnswers: [
        //        "Iron",
        //        "Coal",
        //        "Cotton cloth"
        //    ],
        //    incorrectAnswers: [
        //        "Wool",
        //        "Silk",
        //        "Tea",
        //        "Spices",
        //        "Gold",
        //        "Silver",
        //        "Tobacco"
        //    ]
        //},
        //{
        //    question: "Which three industries did the UK lead the world in during the 19th century based on producing more than half of the world's supply?",
        //    correctAnswers: [
        //        "Iron",
        //        "Coal",
        //        "Cotton cloth"
        //    ],
        //    incorrectAnswers: [
        //        "Automobile",
        //        "Electronics",
        //        "Pharmaceutical",
        //        "Agriculture",
        //        "Textile (excluding cotton cloth)",
        //        "Mining (excluding coal and iron)"
        //    ]
        //},
        //{
        //    question: "What was the status of the UK's iron, coal, and cotton cloth production in the global market during the 19th century?",
        //    correctAnswers: [
        //        "The UK produced more than half the world's supply"
        //    ],
        //    incorrectAnswers: [
        //        "The UK produced less than half the world's supply",
        //        "The UK produced exactly half the world's supply",
        //        "The UK was not a significant producer",
        //        "The UK imported more than it produced",
        //        "The UK's production was predominantly for domestic use",
        //        "The UK's production was insignificant in the global market"
        //    ]
        //},
        //{
        //    question: "In terms of global production, where did the UK stand in the production of iron, coal, and cotton cloth in the 19th century?",
        //    correctAnswers: [
        //        "Produced more than half"
        //    ],
        //    incorrectAnswers: [
        //        "Produced less than half",
        //        "Produced exactly half",
        //        "Was not involved in production",
        //        "Was a minor producer",
        //        "Imported more than produced",
        //        "Produced only for domestic use"
        //    ]
        //},
        //{
        //    question: "Which materials were predominantly produced by the UK in the 19th century, contributing to its status as a world leader in industry?",
        //    correctAnswers: [
        //        "Iron",
        //        "Coal",
        //        "Cotton cloth"
        //    ],
        //    incorrectAnswers: [
        //        "Wool",
        //        "Silk",
        //        "Tea",
        //        "Spices",
        //        "Gold",
        //        "Silver",
        //        "Tobacco"
        //    ]
        //},
        //{
        //    question: "Which two sectors became central to the UK's economy in the 19th century, according to the information about the UK's industrial leadership?",
        //    correctAnswers: [
        //        "Insurance",
        //        "Banking"
        //    ],
        //    incorrectAnswers: [
        //        "Agriculture and fishing",
        //        "Textile and ceramics",
        //        "Automotive and aerospace",
        //        "Telecommunications and information technology",
        //        "Pharmaceuticals and biotechnology",
        //        "Tourism and hospitality",
        //        "Education and research"
        //    ]
        //},
        //{
        //    question: "In which century did the UK become a prominent center for financial services including insurance and banking, according to the Life in The UK Test handbook?",
        //    correctAnswers: [
        //        "19th century"
        //    ],
        //    incorrectAnswers: [
        //        "17th century",
        //        "18th century",
        //        "20th century",
        //        "16th century",
        //        "15th century",
        //        "21st century"
        //    ]
        //},
        //{
        //    question: "In which year did the Great Exhibition open?",
        //    correctAnswers: [
        //        "1851"
        //    ],
        //    incorrectAnswers: [
        //        "1837",
        //        "1846",
        //        "1850",
        //        "1860",
        //        "1871",
        //        "1901",
        //        "1910"
        //    ]
        //},
        //{
        //    question: "Where did the Great Exhibition open in 1851?",
        //    correctAnswers: [
        //        "Hyde Park"
        //    ],
        //    incorrectAnswers: [
        //        "Regent's Park",
        //        "Kensington Gardens",
        //        "St. James's Park",
        //        "Greenwich Park",
        //        "Victoria Park",
        //        "Battersea Park"
        //    ]
        //},
        //{
        //    question: "What was the name of the building where the Great Exhibition was housed?",
        //    correctAnswers: [
        //        "the Crystal Palace"
        //    ],
        //    incorrectAnswers: [
        //        "the Glass House",
        //        "the Iron Tower",
        //        "the Exhibition Hall",
        //        "the Victoria Building",
        //        "the Grand Pavilion",
        //        "the Transparent Palace"
        //    ]
        //},
        //{
        //    question: "What materials were used to construct the Crystal Palace for the Great Exhibition of 1851?",
        //    correctAnswers: [
        //        "iron and glass"
        //    ],
        //    incorrectAnswers: [
        //        "wood and glass",
        //        "stone and iron",
        //        "brick and stone",
        //        "steel and concrete",
        //        "wood and steel",
        //        "glass and concrete"
        //    ]
        //},
        //{
        //    question: "Which famous event opened in the Crystal Palace in 1851?",
        //    correctAnswers: [
        //        "the Great Exhibition"
        //    ],
        //    incorrectAnswers: [
        //        "the Industrial Revolution Exhibition",
        //        "the World's Fair",
        //        "the British Empire Exhibition",
        //        "the International Trade Fair",
        //        "the Modern Art Exhibition",
        //        "the Scientific Discovery Exhibition"
        //    ]
        //},
        //{
        //    question: "The Great Exhibition in 1851 was housed in a building made predominantly of what materials?",
        //    correctAnswers: [
        //        "iron and glass"
        //    ],
        //    incorrectAnswers: [
        //        "bronze and stone",
        //        "copper and wood",
        //        "steel and plastic",
        //        "marble and brick",
        //        "aluminum and fiberglass",
        //        "timber and slate"
        //    ]
        //},
        //{
        //    question: "What was the range of exhibits at the Great Exhibition in 1851?",
        //    correctAnswers: [
        //        "From huge machines to handmade goods"
        //    ],
        //    incorrectAnswers: [
        //        "From agricultural products to military equipment",
        //        "From electronic devices to textiles",
        //        "From pharmaceuticals to vehicles",
        //        "From paintings to sculptures",
        //        "From historical artifacts to modern gadgets",
        //        "From space technology to traditional crafts"
        //    ]
        //},
        //{
        //    question: "Which country produced most of the objects displayed at the Great Exhibition in 1851?",
        //    correctAnswers: [
        //        "Britain"
        //    ],
        //    incorrectAnswers: [
        //        "France",
        //        "Germany",
        //        "India",
        //        "China",
        //        "United States",
        //        "Italy",
        //        "Spain"
        //    ]
        //}
    ];

    let category = {
        name: "Trade and industry (incomplete)",
        questions: questions,
        group: "A Global Power (incomplete)"
    }
    quizDeck.categories.push(category);
})();
