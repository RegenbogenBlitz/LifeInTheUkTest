let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let significantDates = [
    -55, // Julius Caesar's first invasion
    43, // Roman invasion
    60, // Boudicca's revolt
    122, // Hadrian's Wall
    306, // Constantine becomes emperor
    410, // End of Roman rule
    476, // Fall of the Western Roman Empire
    597, // St Augustine arrives in England
    789, // First Viking raid
    871, // Alfred the Great becomes king

    1066, // Battle of Hastings
    1086, // Domesday book

    1139, // War of Stephen and Matilda

    1215, // Signing of the Magna Carta
    1258, // Signing of the provisions of Oxford
    1284, // Statute of Rhuddlan

    1314, // Battle of Bannockburn
    1337, // Start of the Hundred Years War
    1346, // Battle of Crecy
    1348, // Arrival of the Black Death in England

    1415, // Battle of Agincourt
    1453, // End of the Hundred Years War
    1455, // Start of the War of the Roses
    1475, // End of the Hundred Years War
    1485, // Battle of Bosworth

    1509, // Henry VIII becomes king
    1536, // Dissolution of the monasteries
    1547, // Edward VI becomes king
    1553, // Mary I becomes queen
    1558, // Elizabeth I becomes queen
    1560, // The abolition of the authority of the Pope in Scotland
    1588, // Defeat of the Spanish Armada

    1603, // James VI/I becomes king
    1605, // Gunpowder Plot
    1611, // King James Bible
    1625, // Charles I becomes king
    1640, // The Short Parliament
    1642, // Start of the English Civil War
    1646, // End of the First Civil War
    1649, // Execution of Charles I
    1656, // Jews settle in London
    1660, // Restoration of Charles II
    1665, // Great Plague of London
    1666, // Great Fire of London
    1679, // Habeas Corpus Act
    1685, // James II becomes king
    1688, // Glorious Revolution
    1689, // Bill of Rights
    1690, // Battle of the Boyne

    1702, // Anne becomes queen
    1707, // Act of Union
    1714, // Hanoverian succession
    1721, // Robert Walpole becomes first Prime Minister
    1742, // End of Robert Walpole's term as Prime Minister
    1745, // Jacobite rebellion of 1745
    1746, // Battle of Culloden
    1756, // Start of the Seven Years War
    1776, // American Declaration of Independence
    1783, // End of the American War of Independence
    1789, // French Revolution

    1801, // Act of Union
    1805, // Battle of Trafalgar
    1807, // Slave Trade Act
    1815, // Battle of Waterloo
    1829, // Catholic Emancipation
    1832, // First Reform Act
    1833, // Slavery Abolition Act
    1837, // Victoria becomes queen
    1848, // Chartist movement
    1854, // Crimean War
    1867, // Second Reform Act
    1870, // Married Women's Property Act
    1882, // Married Women's Property Act
    1889, // Emmeline Pankhurst established the Women's Franchise League
    1899, // Start of the Boer War

    1902, // End of the Boer War
    1903, // Founding of the Women's Social and Political Union (WSPU)
    1913, // British promise of Home Rule for Ireland
    1914, // Start of the First World War
    1916, // Easter Rising, Battle of the Somme
    1918, // End of the First World War, Representation of the People Act
    1921, // Anglo-Irish Treaty
    1922, // Irish Free State, BBC founded
    1929, // Start of the Great Depression
    1936, // BBC starts television broadcasts
    1939, // Start of the Second World War
    1940, // Dunkirk evacuation, Battle of Britain
    1941, // Beveridge Report Commissioned
    1942, // Beveridge Report Published
    1945, // End of the Second World War
    1947, // Independence of India and Pakistan
    1948, // National Health Service founded
    1949, // Ireland becomes a republic
    1952, // Elizabeth II becomes queen
    1956, // Suez Crisis
    1957, // Treaty of Rome, start of the EEC
    1972, // Northern Ireland Parliament suspended
    1973, // UK joins the EEC
    1974, // Hung Parliament
    1979, // Margaret Thatcher becomes Prime Minister
    1982, // Falklands War
    1989, // Fall of the Berlin Wall
    1990, // World Wide Web first used successfully, Margaret Thatcher resigns
    1996, // First mammal cloned
    1997, // Tony Blair becomes Prime Minister
    1998, // Good Friday Agreement

    2007, // Gordon Brown becomes Prime 
    2009, // British forces leave Iraq
    2010, // Coalition government
    2016, // Brexit referendum
    2020, // UK leaves the EU
];

let getDates = (from, to, avoidDates, includeBcAd) => () => {
    let includeDate = (d) =>
        !avoidDates.includes(d) &&
        from <= d && d <= to &&
        (!includeBcAd || 1 <= d);

    let filteredSignificantDates = significantDates.filter(includeDate);

    let proximateDates = [];
    let correctDate = avoidDates[0]; // assume that the first avoid date is the correct date
    for (let d = correctDate - 20; d <= correctDate + 20; d++) {
        if (includeDate(d)) {
            proximateDates.push(d);
        }
    }

    let toDateString = (d) => includeBcAd
        ? d < 0 ? `${Math.abs(d)} BC` : `AD ${d}`
        : d.toString();

    return Math.random() > 0.66
        ? filteredSignificantDates.map(toDateString)
        : proximateDates.map(toDateString);
}

let namesOfEarlyAges = [
    "The Stone Age",
    "The Copper Age",
    "The Bronze Age",
    "The Iron Age",
    "The Middle Ages",
    "The Dark Ages",
];

let namesOfModernAges = [
    "The Elizabethan Era",
    "The Age of Discovery",
    "The Enlightenment",
    "The Victorian Era",
    "The Edwardian Era",
    "The Interwar period",
    "The Postwar period",
];

let namesOfAges = [
    ...namesOfEarlyAges,
    "The Danelaw",
    "The Anglo-Saxon period",
    "The Norman period",
    "The Renaissance",
    ...namesOfModernAges
];

let ww1Battles = [
    "The Battle of the Somme", // 1916
];

let famousBattles = [
    "The Battle of Stamford Bridge", // 1066, Harold Godwinson vs Harald Hardrada
    "The Battle of Hastings", // 1066, Harold Godwinson vs William the Conqueror

    "The Battle of Bannockburn", // 1314, Robert the Bruce vs Edward II
    "The Battle of Crecy", // 1346, Hundred Years War
    "The Battle of Poitiers", // 1356, Hundred Years War
    "The Battle of Agincourt", // 1415, Hundred Years War

    "The Battle of Towton", // 1461, War of the Roses
    "The Battle of Bosworth Field", // 1485, War of the Roses
    "The Battle of Stoke Field", // 1487, War of the Roses
    "The Battle of Flodden Field", // 1513, War of the Roses

    "The Battle of Marston Moor", // 1644, English Civil War
    "The Battle of Naseby", // 1645, English Civil War
    "The Battle of Dunbar", // 1650, English Civil War
    "The Battle of Worcester", // 1651, English Civil War

    "The Battle of the Boyne", // 1690, Jacobite Rebellions
    "The Battle of Culloden", // 1746, Jacobite Rebellions

    "The Battle of Trafalgar", // 1805, Napoleonic Wars
    "The Battle of Waterloo", // 1815, Napoleonic Wars

    ...ww1Battles,

    "The Battle of Britain", // 1940, WWII
    "The Battle of El Alamein", // 1942, WWII
];

let famousEnglishWars = [
    "The Crusades", // 1095 - 1291
    "The Anarchy", // 1135 - 1154
    "The First Barons' War", // 1215 - 1217
    "The Second Barons' War", // 1264 - 1267
    "The Hundred Years War", // 1337 - 1453
    "The War of the Roses", // 1455 - 1485
    "The English Civil War", // 1642 - 1651
    "The Nine Years War", // 1688 - 1697
    "The Great Northern War", // 1700 - 1721
    "The War of the Spanish Succession", // 1701 - 1714
    "The War of the Austrian Succession", // 1740 - 1748
    "The Jacobite Rebellion", // 1745 - 1746
    "The Seven Years War", // 1756 - 1763
    "The American War of Independence", // 1775 - 1783
    "The Napoleonic Wars", // 1803 - 1815
    "The Crimean War", // 1853 - 1856
    "The Boer War", // 1899 - 1902
    "The First World War", // 1914 - 1918
    "The Irish War of Independence", // 1919 - 1921
    "The Second World War", // 1939 - 1945
    "The Falklands War", // 1982
    "The Gulf War", // 1990 - 1991
    "The Cold War", // 1947 - 1991
];

let preNormanMonarchs = [
    "Alfred the Great",
    "Edward the Elder",
    "Athelstan",
    "Edmund I",
    "Eadred",
    "Eadwig",
    "Edgar the Peaceful",
    "Edward the Martyr",
    "Ethelred the Unready",
    "Edmund Ironside",
    "Sweyn Forkbeard",
    "Cnut the Great",
    "Harold Harefoot",
    "Harthacanute",
    "Edward the Confessor",
    "Harold Godwinson"
];

let englishMonarchs = [
    "William I",
    "William II",
    "Henry I",
    "Stephen",
    "Henry II",
    "Richard I",
    "John",
    "Henry III",
    "Edward II",
    "Edward III",
    "Richard II",
    "Henry IV",
    "Henry V",
    "Henry VI",
    "Edward IV",
    "Edward V",
    "Richard III",
    "Henry VII",
    "Henry VIII",
    "Edward VI",
    "Mary I",
    "Elizabeth I",
];

let scottishMonarchs = [
    "Malcolm III",
    "Donald III",
    "Duncan II",
    "Donald III",
    "Edgar",
    "Alexander I",
    "David I",
    "Malcolm IV",
    "William I",
    "Alexander II",
    "Alexander III",
    "Margaret",
    "John Balliol",
    "Robert the Bruce",
    "David II",
    "Robert II",
    "Robert III",
    "James I",
    "James II",
    "James III",
    "James IV",
    "James V",
    "Mary I"
];

let dualMonarchs = [
    "James VI and I",
    "Charles I",
    "Charles II",
    "James VII and II",
    "William III",
    "Mary II",
    "Anne",
];

let unitedMonarchs = [
    "George I",
    "George II",
    "George III",
    "George IV",
    "William IV",
    "Victoria",
    "Edward VII",
    "George V",
    "Edward VIII",
    "George VI",
    "Elizabeth II",
    "Charles III",
];

let significantDocuments = [
    "The Domesday Book", // 1086
    "The Charter of Liberties", // 1100
    "The Magna Carta", // 1215
    "The Charter of the Forest", // 1217
    "The Provisions of Oxford", // 1258
    "The Provisions of Westminster", // 1259
    "The Statute of Marlborough", // 1267
    "The Statute of Rhuddlan", // 1284
    "The Statute of Westminster", // 1297
    "The Statute of Labourers", // 1351
    "The Statute of Kilkenny", // 1366
    "The Act of Supremacy", // 1534
    "The Act for the Government of Wales", // 1535
    "The Petition of Right", // 1628
    "The Habeas Corpus Act", // 1679
    "The Act of Toleration", // 1689
    "The Bill of Rights", // 1689
    "The Act of Settlement", // 1701
    "The Act of Union", // 1707, 1800
    "The Great Reform Act", // 1832
    "The Slavery Abolition Act", // 1833
    "The Parliament Act", // 1911, 1949
    "The Representation of the People Act", // 1918, 1928
    "The Education Act", // 1944
    "The National Health Service Act", // 1946
    "The European Communities Act", // 1972
    "The Human Rights Act", // 1998
    "The Equality Act", // 2010
];

let englishPoets = [
    "Geoffrey Chaucer", // 1343-1400
    "Edmund Spenser", // 1552-1599
    "William Shakespeare", // 1564-1616
    "John Donne", // 1572-1631
    "John Milton", // 1608-1674
    "Alexander Pope", // 1688-1744
    "William Blake", // 1757-1827
    "Samuel Taylor Coleridge", // 1772-1834
    "William Wordsworth", // 1770-1850
    "Lord Byron", // 1788-1824
    "Percy Shelley", // 1792-1822
    "John Keats", // 1795-1821
    "Alfred, Lord Tennyson", // 1809-1892
    "Robert Browning", // 1812-1889
    "Elizabeth Barrett Browning", // 1806-1861
    "Christina Rossetti", // 1830-1894
    "Thomas Hardy", // 1840-1928
    "Rudyard Kipling", // 1865-1936
    "W.B. Yeats", // 1865-1939
    "Siegfried Sassoon", // 1886-1967
    "T.S. Eliot", // 1888-1965
    "Wilfred Owen", // 1893-1918
    "W.H. Auden", // 1907-1973
    "Dylan Thomas", // 1914-1953
    "Philip Larkin", // 1922-1985
];

let englishPoems = [
    "Beowulf", // Anonymous
    "Sir Gawain and the Green Knight", // Anonymous
    "The Faerie Queene", // Spenser, 1590
    "Shall I Compare Thee To A Summer's Day?", // Shakespeare, 1609
    "Paradise Lost", // Milton, 1667
    "The Rime of the Ancient Mariner", // Coleridge, 1798
    "I Wandered Lonely as a Cloud", // Wordsworth, 1804
    "Ode to a Nightingale", // Keats, 1819
    "The Lady of Shalott", // Tennyson, 1832
    "Goblin Market", // Rossetti, 1862
    "The Jabberwocky", // Carroll, 1871
    "If", // Kipling, 1895
    "The Darkling Thrush", // Hardy, 1900
    "Dulce et Decorum Est", // Owen, 1917
    "The Second Coming", // Yeats, 1919
    "The Waste Land", // Eliot, 1922
    "Funeral Blues", // Auden, 1936
    "Do Not Go Gentle Into That Good Night" // Thomas, 1951
];

let scotsPoems = [
    "The Bruce",
    "Address to the Haggis",
    "Auld Lang Syne",
    "To a Mouse",
    "Tam o' Shanter",
]

let britishAuthors = [
    "Geoffrey Chaucer", // 1343-1400
    "Daniel Defoe", // 1660-1731
    "Johnathan Swift", // 1667-1745
    "Jane Austen", // 1775-1817
    "Charles Dickens", // 1812-1870
    "Charlotte Bronte", // 1816-1855
    "Emily Bronte", // 1818-1848
    "George Eliot", // 1819-1880
    "Thomas Hardy", // 1840-1928
    "Robert Louis Stevenson", // 1850-1894
    "Oscar Wilde", // 1854-1900
    "Rudyard Kipling", // 1865-1936
    "EM Forster", // 1879-1970
    "Virginia Woolf", // 1882-1941
    "Agatha Christie", // 1890-1976
    "J.R.R. Tolkien", // 1892-1973
    "George Orwell", // 1903-1950
    "Evlyn Waugh", // 1903-1966
];

let britishChildrensAuthors = [
    "Lewis Carroll", // 1832-1898
    "Frances Hodgson Burnett", // 1849-1924
    "E. Nesbit", // 1858-1924
    "Kenneth Grahame", // 1859-1932
    "Rudyard Kipling", // 1865-1936
    "Beatrix Potter", // 1866-1943
    "J.M. Barrie", // 1860-1937
    "A.A. Milne", // 1882-1956
    "Richmal Crompton", // 1890-1969
    "C.S. Lewis", // 1898-1963
    "Enid Blyton", // 1897-1968
    "Mary Norton", // 1903-1992
    "Rev W. Awdry", // 1911-1997
    "Roald Dahl", // 1916-1990
    "Michael Bond", // 1926-2017
    "Philip Pullman", // 1946-
    "J.K. Rowling", // 1965-
];

let britishChildrensBooks = [
    "Alice's Adventures in Wonderland", // Lewis Carroll, 1865
    "The Jungle Book", // Rudyard Kipling, 1894
    "Just So Stories", // Rudyard Kipling, 1902
    "The Tale of Peter Rabbit", // Beatrix Potter, 1902
    "Five Children and It", // E. Nesbit, 1902
    "Peter Pan", // J.M. Barrie, 1904
    "A Little Princess", // Frances Hodgson Burnett, 1905
    "The Railway Children", // E. Nesbit, 1906
    "The Wind in the Willows", // Kenneth Grahame, 1908
    "The Secret Garden", // Frances Hodgson Burnett, 1911
    "Just William", // Richmal Crompton, 1922
    "Winnie-the-Pooh", // A.A. Milne, 1926
    "The Hobbit", // J.R.R. Tolkien, 1937
    "Thomas the Tank Engine", // Rev W. Awdry, 1946
    "The Secret Seven", // Enid Blyton, 1949
    "The Lion, the Witch and the Wardrobe", // C.S. Lewis, 1950
    "Paddington Bear", // Michael Bond, 1958
    "The Borrowers", // Mary Norton, 1952
    "Charlie and the Chocolate Factory", // Roald Dahl, 1964
    "George's Marvellous Medicine", // Roald Dahl, 1981,
    "Northern Lights", // Philip Pullman, 1995,
    "Harry Potter and the Philosopher's Stone", // J.K. Rowling, 1997
]

let englishCounties = [
    "Bedfordshire",
    "Berkshire",
    "Bristol",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East Sussex",
    "Essex",
    "Gloucestershire",
    "Greater London",
    "Greater Manchester",
    "Hampshire",
    "Herefordshire",
    "Hertfordshire",
    "Isle of Wight",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "Merseyside",
    "Norfolk",
    "North Yorkshire",
    "Northamptonshire",
    "Northumberland",
    "Nottinghamshire",
    "Oxfordshire",
    "Rutland",
    "Shropshire",
    "Somerset",
    "South Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Surrey",
    "Tyne and Wear",
    "Warwickshire",
    "West Midlands",
    "Westmorland",
    "West Sussex",
    "West Yorkshire",
    "Wiltshire",
    "Worcestershire"
];

let ukIndividualIslands = [
    "The Isle of Wight",
    "Skye",
    "Lewis",
    "Harris",
    "Orkney",
    "Arran",
    "Mull",
    "Jura",
    "Iona",
    "Shetland",
    "Anglesey",
];

let europeanCountries = [
    "The United Kingdom",
    "The Republic of Ireland",
    "France",
    "Spain",
    "Portugal",
    "Italy",
    "Germany",
    "Belgium",
    "The Netherlands",
    "Denmark",
    "Iceland",
    "Sweden",
    "Denmark",
    "Norway",
    "Finland",
];

let primeMinisters20thCentury = [
    "Lord Salisbury", // 1885-1886, 1886-1892, 1895-1902
    "Arthur Balfour", // 1902-1905
    "Henry Campbell-Bannerman", // 1905-1908
    "H.H. Asquith", // 1908-1916
    "David Lloyd George", // 1916-1922
    "Bonar Law", // 1922-1923
    "Stanley Baldwin", // 1923-1924, 1924-1929, 1935-1937
    "Ramsay MacDonald", // 1924, 1929-1935
    "Neville Chamberlain", // 1937-1940
    "Winston Churchill", // 1940-1945, 1951-1955
    "Clement Attlee", // 1945-1951
    "Anthony Eden", // 1955-1957
    "Harold Macmillan", // 1957-1963
    "Alec Douglas-Home", // 1963-1964
    "Harold Wilson", // 1964-1970, 1974-1976
    "Edward Heath", // 1970-1974
    "James Callaghan", // 1976-1979
    "Margaret Thatcher", // 1979-1990
    "John Major", // 1990-1997
    "Tony Blair" // 1997-2007
];

let primeMinisters21stCentury = [
    "Tony Blair", // 1997-2007
    "Gordon Brown", // 2007-2010
    "David Cameron", // 2010-2016
    "Theresa May", // 2016-2019
    "Boris Johnson", // 2019-2022,
    "Liz Truss", // 2022-2022,
    "Rishi Sunak", // 2022-2024,
    "Keir Starmer", // 2024-
];