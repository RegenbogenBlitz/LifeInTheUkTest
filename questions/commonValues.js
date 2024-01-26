let significantEarlyMiddleAgesDates = [
    "476", // Fall of the Western Roman Empire
    "789", // First Viking raid
];

let significantPreNormanAdDates = [
    "43", // Roman invasion
    "410", // End of Roman rule
    ...significantEarlyMiddleAgesDates
];

let significantPreNormanDates = [
    "55 BC", // Julius Caesar's first invasion
    ...significantPreNormanAdDates.map(d => "AD " + d)
];
let significantMiddleAgesDates = [
    ...significantEarlyMiddleAgesDates,
    "1066", // Battle of Hastings
    "1086", // Domesday book
    "1139", // War of Stephen and Matilda
    "1215", // Signing of the Magna Carta
    "1258", // Signing of the provisions of Oxford
    "1284", // Statute of Rhuddlan
    "1314", // Battle of Bannockburn
    "1337", // Start of the Hundred Years War
    "1346", // Battle of Crecy
    "1348", // Arrival of the Black Death in England
    "1415", // Battle of Agincourt
    "1453", // End of the Hundred Years War
    "1455", // Start of the War of the Roses
    "1475", // End of the Hundred Years War
    "1485" // Battle of Bosworth
];

let significantPostMiddleAgesDates = [
    "1509", // Henry VIII becomes king
    "1558", // Elizabeth I becomes queen
    "1603", // James I becomes king
    "1649", // Execution of Charles I
    "1707", // Act of Union
];

let namesOfEarlyAges = [
    "The Stone Age",
    "The Copper Age",
    "The Bronze Age",
    "The Iron Age",
    "The Middle Ages",
    "The Dark Ages",
];

let namesOfAges = [
    ...namesOfEarlyAges,
    "The Danelaw",
    "The Anglo-Saxon period",
    "The Norman period",
    "The Renaissance",
    "The Elizabethan Era",
    "The Age of Discovery",
    "The Age of Enlightenment",
    "The Victorian Era"
];

let famousBattles = [
    "The Battle of Stamford Bridge", // 1066
    "The Battle of Hastings", // 1066
    "The Battle of Bannockburn", // 1314
    "The Battle of Crecy", // 1346
    "The Battle of Poitiers", // 1356
    "The Battle of Agincourt", // 1415
    "The Battle of Bosworth Field", // 1485
    "The Battle of Flodden Field", // 1513
    "The Battle of Naseby", // 1645
    "The Battle of Colloden", // 1746
    "The Battle of Trafalgar", // 1805
    "The Battle of Waterloo", // 1815
    "The Battle of the Somme", // 1916
    "The Battle of Britain", // 1940
];

let famousEnglishWars = [
    "The Crusades", // 1095 - 1291
    "The Anarchy", // 1135 - 1154
    "The First Barons' War", // 1215 - 1217
    "The Second Barons' War", // 1264 - 1267
    "The Hundred Years War", // 1337 - 1453
    "The War of the Roses", // 1455 - 1485
    "The English Civil War", // 1642 - 1651
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
    "The Second World War", // 1939 - 1945
    "The Cold War", // 1947 - 1991
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