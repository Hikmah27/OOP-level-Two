class Country {
    constructor(image, name, flag, cap, popu, conti, fact, learn) {
      this.image = image;
      this.name = name;
      this.flag = flag;
      this.capital = cap;
      this.population = popu;
      this.continent = conti;
      this.funFact = fact;
      this.learn = learn;
    }
    details() {
      show.innerHTML = `
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
               <img src="${this.image}" class="img-fluid"/>
               <a href="#!">
                 <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
               </a>
            </div>
            <div class="card-body">
             <h1  class="card-title fw-bolder">${this.name}<span><img src= "${this.flag}" class="img-fluid" width="45"></span></h1>
              <p class="card-text">The capital of ${this.name} is <span class = "fw-bolder"> ${this.capital}.</span></p>
              <p class="card-text">The population of ${this.name} is <span class = "fw-bolder"> ${this.population}</p>
              <p class="card-text">${this.name} is in Continent of <span class = "fw-bolder"> ${this.continent}.</p>
              <p class="card-text">${this.name}  ${this.funFact}.</p>
              <a href="${this.learn}" class="btn btn-primary">Learn More</a>
            </div>
          </div>
      `;
    }
  }

  let countryOne = new Country(
    './Images/Nigeriaimg.jpg',
    "Nigeria",
    './Images/Nigeria.jpg',
    "Abuja",
    "213.4 million",
    "Africa",
    "is a country in West Africa. It is situated between the Sahel to the north and the Gulf of Guinea to the south in the Atlantic Ocean. It covers an area of 923,769 square kilometres (356,669 sq mi), it is the most populous country in Africa, and the world's sixth-most populous country. Nigeria borders Niger in the north, Chad in the northeast, Cameroon in the east, and Benin in the west. Nigeria is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located. The largest city in Nigeria is Lagos, one of the largest metropolitan areas in the world and the largest in Africa. Over 500 indigenous languages are spoken in Nigeria",
    "https://en.wikipedia.org/wiki/Nigeria"
  );
  let countryTwo = new Country(
    './Images/Kenyaimg.jpg',
    "Kenya",
    './Images/Kenya.jpg',
    "Nairobi",
    "54,027,487",
    "Africa",
    "is a country in East Africa. With a population of more than 47.6 million in the 2019 census, Kenya is the 28th most populous country in the world and 7th most populous in Africa. Kenya's capital and largest city is Nairobi, while its oldest and second largest city, which until 1907 was also Kenya's first capital city, is the coastal city of Mombasa which includes Mombasa Island in the Indian Ocean and the surrounding mainland. Kenya has the best distance runners in the World. Kenya's earliest inhabitants were hunter-gatherers, like the present-day Hadza people. According to archaeological dating of associated artifacts and skeletal material, Cushitic speakers first settled in Kenya's lowlands between 3,200 and 1,300 BC, a phase known as the Lowland Savanna Pastoral Neolithic. Nilotic-speaking pastoralists (ancestral to Kenya's Nilotic speakers) began migrating from present-day South Sudan into Kenya around 500 BC",
    "https://en.wikipedia.org/wiki/Kenya"
  );
  let countryThree = new Country(
    './Images/Saudiimg.jpg',
    "Saudi Arabia",
    './Images/Saudi.jpg',
    "Riyadh",
    "36,455,007",
    "Asia",
    "formally the Kingdom of Saudi Arabia is a country in West Asia. It covers the bulk of the Arabian Peninsula, and has a land area of about 2,150,000 km2 (830,000 sq mi), making it the fifth-largest country in Asia, the second-largest in the Arab world, and the largest in West Asia and the Middle East. It is bordered by the Red Sea to the west; Jordan, Iraq, and Kuwait to the north; the Persian Gulf, Qatar and the United Arab Emirates to the east; Oman to the southeast; and Yemen to the south. Bahrain is an island country off its east coast. The Gulf of Aqaba in the northwest separates Saudi Arabia from Egypt and Israel. Saudi Arabia is the only country with a coastline along both the Red Sea and the Persian Gulf, and most of its terrain consists of arid desert, lowland, steppe, and mountains. the kingdom also is the location of Islam's two holiest cities of Mecca and Medina. It is the home of two biggest mosques in the world",
    "https://en.wikipedia.org/wiki/Saudi_Arabia"
  );
  let countryFour = new Country(
    './Images/Canadaimg.jpg',
    "Canada",
    './Images/Canada.jpg',
    "Ottawa",
    "39,858,480",
    "North America",
    "is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline. Its border with the United States is the world's longest international land border. The country is characterized by a wide range of both meteorologic and geological regions. It is sparsely inhabited, with the vast majority residing south of the 55th parallel in urban areas. Canada's capital is Ottawa and its three largest metropolitan areas are Toronto, Montreal, and Vancouver. It is the most educated country in the world",
    "https://en.wikipedia.org/wiki/Canada"
  );
  let countryFive = new Country(
    './Images/Indiaimg.jpg',
    "India",
    './Images/India.jpg',
    "New Delhi",
    "1,428,627,663",
    "South Asia",
    "officially the Republic of India is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia. Cows are sacred in India",
    "https://en.wikipedia.org/wiki/India"
  );
  let countrySix = new Country(
    './Images/Iraqimg.jpg',
    "Iraq",
    './Images/Iraq.jpg',
    "Baghdad",
    "22.07,000,000",
    "Asia",
    "officially the Republic of Iraq, is a country in West Asia. It is a federal parliamentary republic that consists of 19 governorates. The country is bordered by Turkey to the north, Iran to the east, the Persian Gulf and Kuwait to the southeast, Saudi Arabia to the south, Jordan to the southwest and Syria to the west. The capital and largest city is Baghdad. The Iraqi people are diverse; mostly Arabs, as well as Kurds, Turkmen, Assyrians, Armenians, Yazidis, Mandaeans, Persians and Shabakis with similarly diverse geography and wildlife. Most Iraqis are Muslims minority faiths include Christianity, Yazidism, Mandaeism, Yarsanism and Zoroastrianism. The official languages of Iraq are Arabic and Kurdish; others also recognised in specific regions are Turkish (Turkmen), Suret (Assyrian), and Armenian. It is home to the world's oldest civilization",
    "https://en.wikipedia.org/wiki/Iraq"

  );
  let countrySeven = new Country(
    './Images/USAimg.jpg',
    "USA",
    './Images/USA.jpg',
    "Washington",
    "339,996,563",
    "North America",
    "is a country primarily located in North America consisting of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations. It is the world's third-largest country by both land and total area. It shares land borders with Canada to its north and with Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia, and other nations.With a population of over 333 million,it is the most populous country in the Americas and the third-most populous in the world. The national capital of the United States is Washington, D.C., and its most populous city and principal financial center is New York City. It has the largest economy in the world",
    "https://en.wikipedia.org/wiki/United_States"
  );
  let countryEight = new Country(
    './Images/UKimg.jpg',
    "UK",
    './Images/UK.jpg',
    "London",
    "67,736,802",
    "Europe",
    "is a country in Northwestern Europe, off the north-western coast of the continental mainland. It comprises England, Scotland, Wales, and Northern Ireland. It includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea and the Irish Sea. The total area of the United Kingdom is 242,495 square kilometres (93,628 sq mi). The English might have invented champagne",
    "https://en.wikipedia.org/wiki/United_Kingdom"
  );
  let countryNine = new Country(
    './Images/Australiaimg.jpg',
    "Australia",
    './Images/Australia.jpg',
    "Canberra",
    "26,439,111",
    "Oceania",
    "officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country. Australia is the oldest, flattest, and driest inhabited continent, with the least fertile soils. It is a megadiverse country, and its size gives it a wide variety of landscapes and climates, with deserts in the centre, tropical rainforests in the north-east, tropical savannas in the north, and mountain ranges in the south-east. Australia is a continent and country",
    "https://en.wikipedia.org/wiki/Australia"

  );
  let countryTen = new Country(
    './Images/Austriaimg.jpg',
    "Austria",
    './Images/Austria.jpg',
    "Vienna",
    "8,958,960",
    "Europe",
    "is a landlocked country in Central Europe, lying in the Eastern Alps. It is a federation of nine provinces, one of which is the capital, Vienna, the most populous city and province. Austria is bordered by Germany to the northwest, Czechia to the north, Slovakia to the northeast, Hungary to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The country occupies an area of 83,871 km2. The highest water fall in Europe is located in Austria",
    "https://en.wikipedia.org/wiki/Austria"
  );
  let countryEleven = new Country(
    './Images/Chinaimg.jpg',
    "China",
    './Images/China.jpg',
    "Beijing",
    "1,425,671,352",
    "East Asia",
    "is a country in East Asia. It is the world's second-most populous country with a population exceeding 1.4 billion. China spans the equivalent of five time zones and borders fourteen countries by land, tied with Russia as having the most of any country in the world. With an area of nearly 9.6 million square kilometres (3,700,000 sq mi), it is the world's third largest country by total land area. The country consists of 22 provinces, five autonomous regions, four municipalities, and two special administrative regions (Hong Kong and Macau). The national capital is Beijing, and the most populous city and largest financial center is Shanghai. The Yangtze River is the biggest river in Asia",
    "https://en.wikipedia.org/wiki/China"
  );
  let countryTwelve = new Country(
    './Images/Egyptimg.jpg',
    "Egypt",
    './Images/Egypt.jpg',
    "Cairo",
    "112,716,598",
    "Northeast Africa and Asia",
    "is a transcontinental country spanning the northeast corner of Africa and the Sinai Peninsula in the southwest corner of Asia. It is bordered by the Mediterranean Sea to the north, the Gaza Strip of Palestine and Israel to the northeast, the Red Sea to the east, Sudan to the south, and Libya to the west. The Gulf of Aqaba in the northeast separates Egypt from Jordan and Saudi Arabia. Cairo is the capital and largest city of Egypt, while Alexandria, the second-largest city, is an important industrial and tourist hub at the Mediterranean coast. At approximately 100 million inhabitants, Egypt is the 14th-most populated country in the world, and the third-most populated in Africa, behind Nigeria and Ethiopia. Egyptian women had a wide range of rights and freedoms",
    "https://en.wikipedia.org/wiki/Egypt"
  );
  let countryThirteen = new Country(
    './Images/Ghanaimg.jpg',
    "Ghana",
    './Images/Ghana.jpg',
    "Accra",
    "34,121,985",
    "Africa",
    "abuts the Gulf of Guinea and the Atlantic Ocean to the south, sharing borders with Ivory Coast in the west, Burkina Faso in the north, and Togo in the east. Ghana covers an area of 238,535 km2 (92,099 sq mi), spanning diverse biomes that range from coastal savannas to tropical rainforests. With over 32 million inhabitants, Ghana is the second-most populous country in West Africa, after Nigeria. The capital and largest city is Accra; other major cities are Kumasi, Tamale, and Sekondi-Takoradi. The earliest known kingdoms to emerge in modern Ghana were the Mole-Dagbani states. The Bono state existed in the area that is modern day Ghana during the 11th century. Kingdoms and empires such as Kingdom of Dagbon in the north and the Ashanti Empire in the south emerged over the centuries. It is the second largest producer of gold in Africa",
    "https://en.wikipedia.org/wiki/Ghana"
  );
  let countryFourteen = new Country(
    './Images/Qatarimg.jpg',
    "Qatar",
    './Images/Qatar.jpg',
    "Doha",
    "2,716,391",
    "Asia",
    "officially the State of Qatar, is a country in Western Asia. It occupies the Qatar Peninsula on the northeastern coast of the Arabian Peninsula in the Middle East; it shares its sole land border with Saudi Arabia to the south, with the rest of its territory surrounded by the Persian Gulf. The Gulf of Bahrain, an inlet of the Persian Gulf, separates Qatar from nearby Bahrain. The capital is Doha, home to over 80% of the country's inhabitants, and the land area is mostly made up of flat, low-lying desert. Qatar has been ruled as a hereditary monarchy by the House of Thani since Mohammed bin Thani signed a treaty with the British in 1868 that recognised its separate status. Following Ottoman rule, Qatar became a British protectorate in 1916, and gained independence in 1971. The current emir is Tamim bin Hamad Al Thani, who holds nearly all executive and legislative authority under the Constitution of Qatar, as well as controlling the judiciary. He appoints the prime minister and cabinet. The partially-elected Consultative Assembly can block legislation and has a limited ability to dismiss ministers. It is the safest country in the world",
    "https://en.wikipedia.org/wiki/Qatar"
  );
  let countryFifteen = new Country(
    './Images/Kuwaitimg.jpg',
    "Kuwait",
    './Images/Kuwait.jpg',
    "Kuwait City",
    "4.29,000,000",
    "Asia",
    "is a country in West Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south. Kuwait also shares maritime borders with Iran. Kuwait has a coastal length of approximately 500 km (311 mi). Most of the country's population reside in the urban agglomeration of the capital and largest city Kuwait City. As of 2022, Kuwait has a population of 4.45 million people of which 1.45 million are Kuwaiti citizens while the remaining 3.00 million are foreign nationals from over 100 countries. Historically, most of present-day Kuwait was part of ancient Mesopotamia. Before the discovery of oil, Kuwait was a strategic trade port between Mesopotamia, Persia and India. Oil reserves were discovered in commercial quantities in 1938. In 1946, crude oil was exported for the first time. From 1946 to 1982, the country underwent large-scale modernization, largely based on income from oil production. In the 1980s, Kuwait experienced a period of geopolitical instability and an economic crisis following the stock market crash. In 1990, after oil production disputes with neighbouring Iraq, Kuwait was invaded, and later annexed into one of Iraq's governorates by Iraq under Saddam Hussein. The Iraqi occupation of Kuwait came to an end on February 26, 1991, after military intervention by a military coalition led by the United States and various other countries. It is the first gulf nation to have a constitution and parliament",
    "https://en.wikipedia.org/wiki/Kuwait"
  );
  let countrySixteen = new Country(
    './Images/Dubaiimg.jpg',
    "Dubai",
    './Images/Dubai.jpg',
    "Dubai City",
    "3.60,000,000",
    "Asia",
    "is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the 7 emirates of the United Arab Emirates. Established in the 19th century as a small fishing village, Dubai grew into a regional trading hub from the early 20th century and grew rapidly in the late 20th and early 21st century with a focus on tourism and luxury, having the second most five-star hotels in the world, and the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall. Twenty years ago, Dubai was a desert. It is also a major global transport hub for passengers and cargo. Oil revenue helped accelerate the development of the city, which was already a major mercantile hub.",
    "https://en.wikipedia.org/wiki/Dubai"
  );
  let countrySeventeen = new Country(
    './Images/Japanimg.jpg',
    "Japan",
    './Images/Japan.jpg',
    "Tokyo",
    "123,294,513",
    "Asia",
    "is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 14,125 islands, with the five main islands being Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is the nation's capital and largest city, followed by Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto. Japan is the eleventh most populous country in the world, as well as one of the most densely populated. About three-fourths of the country's terrain is mountainous, concentrating its highly urbanized population on narrow coastal plains. Japan is divided into 47 administrative prefectures and eight traditional regions. The Greater Tokyo Area is the most populous metropolitan area in the world. Japan has the world's highest life expectancy, though it is experiencing a population decline. It is extremely clean and it has many active volcanoes",
    "https://en.wikipedia.org/wiki/Japan"
  );
  let countryEighteen = new Country(
    './Images/Singaporeimg.jpg',
    "Singapore",
    './Images/Singapore.jpg',
    "Singapore",
    "6,177,793",
    "Asia",
    "is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east, and the Straits of Johor to the north. The country's territory comprises one main island, 63 satellite islands and islets, and one outlying islet; the combined area of these has increased by 25% since the country's independence as a result of extensive land reclamation projects. It has the third highest population density in the world, although there are numerous green and recreational spaces as a result of urban planning. With a multicultural population and in recognition of the cultural identities of the major ethnic groups within the nation, Singapore has four official languages English, Malay, Mandarin, and Tamil. English is the lingua franca, with its exclusive use in numerous public services. Multi-racialism is enshrined in the constitution and continues to shape national policies in education, housing, and politics. It is a city of not just one island,but sixty-four",
    "https://en.wikipedia.org/wiki/Singapore"
  );
  let countryNineteen = new Country(
    './Images/Russiaimg.jpg',
    "Russia",
    'Images/Russia.jpg',
    "Moscow",
    "144,444,359",
    "Europe",
    "is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world by area, its vast landmass stretching over the easternmost part of Europe and the northernmost part of Asia. Russia extends across eleven time zones and shares land boundaries with fourteen countries. It is the world's ninth-most populous country and Europe's most populous country. The country's capital and largest city is Moscow. Saint Petersburg is Russia's cultural centre and second-largest city. Other major urban areas in the country include Novosibirsk, Yekaterinburg, Nizhny Novgorod, Chelyabinsk, Krasnoyarsk, and Kazan. It has more billionaire per capita than anywhere else in the world. Internationally, Russia ranks amongst the lowest in measurements of democracy, human rights and freedom of the press; the country also has high levels of perceived corruption. The Russian economy ranks 11th by nominal GDP, relying heavily upon its abundant natural resources. Its mineral and energy sources are the world's largest, and its figures for oil production and natural gas production rank high globally. The Russian GDP ranks 65th by per capita, Russia possesses the largest stockpile of nuclear weapons, and has the third-highest military expenditure. The country is a permanent member of the United Nations Security Council. Russia is home to 30 UNESCO World Heritage Sites",
    "https://en.wikipedia.org/wiki/Russia"
  );
  let countryTwenty = new Country(
    './Images/Spainimg.jpg',
    "Spain",
    'Images/Spain.jpg',
    "Madrid",
    "47.54,000,000",
    "SouthWestern Europe",
    "is a country located in Southwestern Europe, with parts of its territory in the Atlantic Ocean and across the Mediterranean Sea. The largest part of Spain is situated on the Iberian Peninsula; its territory also includes the Canary Islands in the Atlantic Ocean, the Balearic Islands in the Mediterranean Sea, and the autonomous cities of Ceuta and Melilla in Africa. The country's mainland is bordered to the north by France, Andorra, and the Bay of Biscay; to the east and south by the Mediterranean Sea and Gibraltar; and to the west by Portugal and the Atlantic Ocean. It is the largest country in Southern Europe and the second-largest and fourth-most populous in the European Union. Spain's capital and largest city is Madrid; other major urban areas include Barcelona, Valencia, Zaragoza, Seville, Málaga, Murcia, Palma de Mallorca, Las Palmas de Gran Canaria, and Bilbao. It has a National anthem with no words",
    "https://en.wikipedia.org/wiki/Spain"
  );

  const nigeria = () => {
    countryOne.details();
  };
  const kenya = () => {
    countryTwo.details();
  };