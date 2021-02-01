const cities = [
    {
        name: "Aleksandrów Kujawski",
        township: "aleksandrowski",
        province: "kujawsko-pomorskie",
        area: 7.23,
        people: 12270,
        dentensity: 1697
    },
    {
        name: "Aleksandrów Łódzki",
        township: "zgierski",
        province: "łódzkie",
        area: 13.82,
        people: 21535,
        dentensity: 1558
    },
    {name: "Alwernia", township: "chrzanowski", province: "małopolskie", area: 8.88, people: 3380, dentensity: 381},
    {name: "Andrychów", township: "wadowicki", province: "małopolskie", area: 10.33, people: 20567, dentensity: 1991},
    {name: "Annopol", township: "kraśnicki", province: "lubelskie", area: 7.73, people: 2572, dentensity: 333},
    {name: "Augustów", township: "augustowski", province: "podlaskie", area: 80.90, people: 30270, dentensity: 374},
    {name: "Babimost", township: "zielonogórski", province: "lubuskie", area: 3.65, people: 3923, dentensity: 1075},
    {name: "Baborów", township: "głubczycki", province: "opolskie", area: 11.86, people: 2933, dentensity: 247},
    {
        name: "Baranów Sandomierski",
        township: "tarnobrzeski",
        province: "podkarpackie",
        area: 9.15,
        people: 1477,
        dentensity: 161
    },
    {name: "Barcin", township: "żniński", province: "kujawsko-pomorskie", area: 3.70, people: 7516, dentensity: 2031},
    {
        name: "Barczewo",
        township: "olsztyński",
        province: "warmińsko-mazurskie",
        area: 4.58,
        people: 7472,
        dentensity: 1631
    },
    {name: "Bardo", township: "ząbkowicki", province: "dolnośląskie", area: 4.71, people: 2603, dentensity: 553},
    {
        name: "Barlinek",
        township: "myśliborski",
        province: "zachodniopomorskie",
        area: 17.55,
        people: 13853,
        dentensity: 789
    },
    {
        name: "Bartoszyce",
        township: "bartoszycki",
        province: "warmińsko-mazurskie",
        area: 11.79,
        people: 23810,
        dentensity: 2020
    },
    {
        name: "Barwice",
        township: "szczecinecki",
        province: "zachodniopomorskie",
        area: 7.52,
        people: 3742,
        dentensity: 498
    },
    {name: "Bełchatów", township: "bełchatowski", province: "łódzkie", area: 34.64, people: 57964, dentensity: 1673},
    {name: "Bełżyce", township: "lubelski", province: "lubelskie", area: 23.46, people: 6608, dentensity: 282},
    {name: "Będzin", township: "będziński", province: "śląskie", area: 37.37, people: 57343, dentensity: 1534},
    {name: "Biała", township: "prudnicki", province: "opolskie", area: 14.72, people: 2454, dentensity: 167},
    {
        name: "Biała Piska",
        township: "piski",
        province: "warmińsko-mazurskie",
        area: 3.24,
        people: 4041,
        dentensity: 1247
    },
    {
        name: "Biała Podlaska",
        township: "Biała Podlaska",
        province: "lubelskie",
        area: 49.40,
        people: 57545,
        dentensity: 1165
    },
    {name: "Biała Rawska", township: "rawski", province: "łódzkie", area: 9.53, people: 3206, dentensity: 336},
    {name: "Białobrzegi", township: "białobrzeski", province: "mazowieckie", area: 7.51, people: 7015, dentensity: 934},
    {
        name: "Białogard",
        township: "białogardzki",
        province: "zachodniopomorskie",
        area: 25.73,
        people: 24368,
        dentensity: 947
    },
    {
        name: "Biały Bór",
        township: "szczecinecki",
        province: "zachodniopomorskie",
        area: 12.82,
        people: 2171,
        dentensity: 169
    },
    {name: "Białystok", township: "Białystok", province: "podlaskie", area: 102.13, people: 297288, dentensity: 2911},
    {name: "Biecz", township: "gorlicki", province: "małopolskie", area: 17.71, people: 4629, dentensity: 261},
    {
        name: "Bielawa",
        township: "dzierżoniowski",
        province: "dolnośląskie",
        area: 36.21,
        people: 30207,
        dentensity: 834
    },
    {name: "Bielsk Podlaski", township: "bielski", province: "podlaskie", area: 27.01, people: 25611, dentensity: 948},
    {
        name: "Bielsko-Biała",
        township: "Bielsko-Biała",
        province: "śląskie",
        area: 124.51,
        people: 171505,
        dentensity: 1377
    },
    {name: "Bieruń", township: "bieruńsko-lędziński", province: "śląskie", area: 40.49, people: 19639, dentensity: 485},
    {name: "Bierutów", township: "oleśnicki", province: "dolnośląskie", area: 8.36, people: 4935, dentensity: 590},
    {name: "Bieżuń", township: "żuromiński", province: "mazowieckie", area: 12.07, people: 1875, dentensity: 155},
    {name: "Biłgoraj", township: "biłgorajski", province: "lubelskie", area: 21.10, people: 26550, dentensity: 1258},
    {
        name: "Biskupiec",
        township: "olsztyński",
        province: "warmińsko-mazurskie",
        area: 5.00,
        people: 10539,
        dentensity: 2108
    },
    {
        name: "Bisztynek",
        township: "bartoszycki",
        province: "warmińsko-mazurskie",
        area: 2.16,
        people: 2417,
        dentensity: 1119
    },
    {name: "Blachownia", township: "częstochowski", province: "śląskie", area: 36.66, people: 9676, dentensity: 264},
    {name: "Błaszki", township: "sieradzki", province: "łódzkie", area: 1.62, people: 2158, dentensity: 1332},
    {name: "Błażowa", township: "rzeszowski", province: "podkarpackie", area: 4.23, people: 2148, dentensity: 508},
    {
        name: "Błonie",
        township: "warszawski zachodni",
        province: "mazowieckie",
        area: 9.09,
        people: 12354,
        dentensity: 1359
    },
    {
        name: "Bobolice",
        township: "koszaliński",
        province: "zachodniopomorskie",
        area: 4.77,
        people: 4061,
        dentensity: 851
    },
    {name: "Bobowa", township: "gorlicki", province: "małopolskie", area: 7.18, people: 3123, dentensity: 435},
    {name: "Bochnia", township: "bocheński", province: "małopolskie", area: 29.87, people: 29992, dentensity: 1004},
    {name: "Bodzentyn", township: "kielecki", province: "świętokrzyskie", area: 8.65, people: 2238, dentensity: 259},
    {name: "Bogatynia", township: "zgorzelecki", province: "dolnośląskie", area: 59.88, people: 17762, dentensity: 297},
    {name: "Boguchwała", township: "rzeszowski", province: "podkarpackie", area: 9.11, people: 6096, dentensity: 669},
    {
        name: "Boguszów-Gorce",
        township: "wałbrzyski",
        province: "dolnośląskie",
        area: 27.02,
        people: 15566,
        dentensity: 576
    },
    {name: "Bojanowo", township: "rawicki", province: "wielkopolskie", area: 2.34, people: 2940, dentensity: 1256},
    {
        name: "Bolesławiec",
        township: "bolesławiecki",
        province: "dolnośląskie",
        area: 23.57,
        people: 39084,
        dentensity: 1658
    },
    {name: "Bolków", township: "jaworski", province: "dolnośląskie", area: 7.68, people: 5047, dentensity: 657},
    {
        name: "Borek Wielkopolski",
        township: "gostyński",
        province: "wielkopolskie",
        area: 6.29,
        people: 2523,
        dentensity: 401
    },
    {
        name: "Borne Sulinowo",
        township: "szczecinecki",
        province: "zachodniopomorskie",
        area: 18.15,
        people: 4984,
        dentensity: 275
    },
    {
        name: "Braniewo",
        township: "braniewski",
        province: "warmińsko-mazurskie",
        area: 12.41,
        people: 17074,
        dentensity: 1376
    },
    {name: "Brańsk", township: "bielski", province: "podlaskie", area: 32.43, people: 3785, dentensity: 117},
    {
        name: "Brodnica",
        township: "brodnicki",
        province: "kujawsko-pomorskie",
        area: 23.15,
        people: 28717,
        dentensity: 1240
    },
    {name: "Brok", township: "ostrowski", province: "mazowieckie", area: 28.06, people: 1955, dentensity: 70},
    {name: "Brusy", township: "chojnicki", province: "pomorskie", area: 5.20, people: 5209, dentensity: 1002},
    {name: "Brwinów", township: "pruszkowski", province: "mazowieckie", area: 10.10, people: 13533, dentensity: 1340},
    {name: "Brzeg", township: "brzeski", province: "opolskie", area: 14.61, people: 36110, dentensity: 2472},
    {name: "Brzeg Dolny", township: "wołowski", province: "dolnośląskie", area: 17.20, people: 12486, dentensity: 726},
    {name: "Brzesko", township: "brzeski", province: "małopolskie", area: 11.92, people: 16884, dentensity: 1416},
    {name: "Brzeszcze", township: "oświęcimski", province: "małopolskie", area: 19.04, people: 11345, dentensity: 596},
    {
        name: "Brześć Kujawski",
        township: "włocławski",
        province: "kujawsko-pomorskie",
        area: 7.04,
        people: 4660,
        dentensity: 662
    },
    {name: "Brzeziny", township: "brzeziński", province: "łódzkie", area: 21.58, people: 12534, dentensity: 581},
    {name: "Brzostek", township: "dębicki", province: "podkarpackie", area: 8.76, people: 2714, dentensity: 310},
    {name: "Brzozów", township: "brzozowski", province: "podkarpackie", area: 11.46, people: 7471, dentensity: 652},
    {name: "Buk", township: "poznański", province: "wielkopolskie", area: 2.96, people: 6096, dentensity: 2059},
    {name: "Bukowno", township: "olkuski", province: "małopolskie", area: 64.59, people: 10297, dentensity: 159},
    {name: "Busko-Zdrój", township: "buski", province: "świętokrzyskie", area: 12.28, people: 16092, dentensity: 1310},
    {name: "Bychawa", township: "lubelski", province: "lubelskie", area: 6.69, people: 4976, dentensity: 744},
    {name: "Byczyna", township: "kluczborski", province: "opolskie", area: 5.79, people: 3651, dentensity: 631},
    {
        name: "Bydgoszcz",
        township: "Bydgoszcz",
        province: "kujawsko-pomorskie",
        area: 175.98,
        people: 352313,
        dentensity: 2002
    },
    {
        name: "Bystrzyca Kłodzka",
        township: "kłodzki",
        province: "dolnośląskie",
        area: 10.74,
        people: 10239,
        dentensity: 953
    },
    {name: "Bytom", township: "Bytom", province: "śląskie", area: 69.44, people: 168394, dentensity: 2425},
    {name: "Bytom Odrzański", township: "nowosolski", province: "lubuskie", area: 2.30, people: 4365, dentensity: 1898},
    {name: "Bytów", township: "bytowski", province: "pomorskie", area: 8.72, people: 16983, dentensity: 1948},
    {name: "Cedynia", township: "gryfiński", province: "zachodniopomorskie", area: 1.67, people: 1625, dentensity: 973},
    {name: "Chełm", township: "Chełm", province: "lubelskie", area: 35.28, people: 63333, dentensity: 1795},
    {name: "Chełmek", township: "oświęcimski", province: "małopolskie", area: 8.27, people: 9090, dentensity: 1099},
    {
        name: "Chełmno",
        township: "chełmiński",
        province: "kujawsko-pomorskie",
        area: 13.56,
        people: 19911,
        dentensity: 1468
    },
    {
        name: "Chełmża",
        township: "toruński",
        province: "kujawsko-pomorskie",
        area: 7.84,
        people: 14645,
        dentensity: 1868
    },
    {name: "Chęciny", township: "kielecki", province: "świętokrzyskie", area: 14.13, people: 4421, dentensity: 313},
    {name: "Chmielnik", township: "kielecki", province: "świętokrzyskie", area: 7.80, people: 3752, dentensity: 481},
    {name: "Chocianów", township: "polkowicki", province: "dolnośląskie", area: 9.00, people: 7996, dentensity: 888},
    {
        name: "Chociwel",
        township: "stargardzki",
        province: "zachodniopomorskie",
        area: 3.67,
        people: 3183,
        dentensity: 867
    },
    {name: "Chocz", township: "pleszewski", province: "wielkopolskie", area: 6.88, people: 1811, dentensity: 263},
    {
        name: "Chodecz",
        township: "włocławski",
        province: "kujawsko-pomorskie",
        area: 1.39,
        people: 1885,
        dentensity: 1356
    },
    {name: "Chodzież", township: "chodzieski", province: "wielkopolskie", area: 12.77, people: 18877, dentensity: 1478},
    {name: "Chojna", township: "gryfiński", province: "zachodniopomorskie", area: 12.58, people: 7440, dentensity: 591},
    {name: "Chojnice", township: "chojnicki", province: "pomorskie", area: 21.04, people: 39937, dentensity: 1898},
    {name: "Chojnów", township: "legnicki", province: "dolnośląskie", area: 5.32, people: 13573, dentensity: 2551},
    {name: "Choroszcz", township: "białostocki", province: "podlaskie", area: 16.79, people: 5834, dentensity: 347},
    {name: "Chorzele", township: "przasnyski", province: "mazowieckie", area: 17.51, people: 3069, dentensity: 175},
    {name: "Chorzów", township: "Chorzów", province: "śląskie", area: 33.24, people: 109021, dentensity: 3280},
    {
        name: "Choszczno",
        township: "choszczeński",
        province: "zachodniopomorskie",
        area: 9.58,
        people: 15352,
        dentensity: 1603
    },
    {name: "Chrzanów", township: "chrzanowski", province: "małopolskie", area: 38.32, people: 37123, dentensity: 969},
    {
        name: "Ciechanowiec",
        township: "wysokomazowiecki",
        province: "podlaskie",
        area: 19.53,
        people: 4655,
        dentensity: 238
    },
    {
        name: "Ciechanów",
        township: "ciechanowski",
        province: "mazowieckie",
        area: 32.78,
        people: 44303,
        dentensity: 1352
    },
    {
        name: "Ciechocinek",
        township: "aleksandrowski",
        province: "kujawsko-pomorskie",
        area: 15.26,
        people: 10586,
        dentensity: 694
    },
    {name: "Cieszanów", township: "lubaczowski", province: "podkarpackie", area: 15.06, people: 1940, dentensity: 129},
    {name: "Cieszyn", township: "cieszyński", province: "śląskie", area: 28.61, people: 34876, dentensity: 1219},
    {name: "Ciężkowice", township: "tarnowski", province: "małopolskie", area: 9.99, people: 2470, dentensity: 247},
    {name: "Cybinka", township: "słubicki", province: "lubuskie", area: 5.29, people: 2755, dentensity: 521},
    {
        name: "Czaplinek",
        township: "drawski",
        province: "zachodniopomorskie",
        area: 13.62,
        people: 7155,
        dentensity: 525
    },
    {
        name: "Czarna Białostocka",
        township: "białostocki",
        province: "podlaskie",
        area: 14.28,
        people: 9402,
        dentensity: 658
    },
    {name: "Czarna Woda", township: "starogardzki", province: "pomorskie", area: 9.94, people: 2841, dentensity: 286},
    {name: "Czarne", township: "człuchowski", province: "pomorskie", area: 46.43, people: 5983, dentensity: 129},
    {
        name: "Czarnków",
        township: "czarnkowsko-trzcianecki",
        province: "wielkopolskie",
        area: 10.17,
        people: 10784,
        dentensity: 1060
    },
    {name: "Czchów", township: "brzeski", province: "małopolskie", area: 14.09, people: 2380, dentensity: 169},
    {
        name: "Czechowice-Dziedzice",
        township: "bielski",
        province: "śląskie",
        area: 32.91,
        people: 35795,
        dentensity: 1088
    },
    {name: "Czeladź", township: "będziński", province: "śląskie", area: 16.38, people: 31901, dentensity: 1948},
    {name: "Czempiń", township: "kościański", province: "wielkopolskie", area: 3.32, people: 5296, dentensity: 1595},
    {
        name: "Czerniejewo",
        township: "gnieźnieński",
        province: "wielkopolskie",
        area: 10.19,
        people: 2620,
        dentensity: 257
    },
    {name: "Czersk", township: "chojnicki", province: "pomorskie", area: 9.73, people: 9909, dentensity: 1018},
    {name: "Czerwieńsk", township: "zielonogórski", province: "lubuskie", area: 9.36, people: 4094, dentensity: 437},
    {
        name: "Czerwionka-Leszczyny",
        township: "rybnicki",
        province: "śląskie",
        area: 37.63,
        people: 28329,
        dentensity: 753
    },
    {name: "Częstochowa", township: "Częstochowa", province: "śląskie", area: 159.71, people: 224376, dentensity: 1405},
    {name: "Człopa", township: "wałecki", province: "zachodniopomorskie", area: 6.27, people: 2326, dentensity: 371},
    {name: "Człuchów", township: "człuchowski", province: "pomorskie", area: 12.78, people: 13869, dentensity: 1085},
    {name: "Czyżew", township: "wysokomazowiecki", province: "podlaskie", area: 5.23, people: 2640, dentensity: 505},
    {name: "Ćmielów", township: "ostrowiecki", province: "świętokrzyskie", area: 13.34, people: 3014, dentensity: 226},
    {name: "Daleszyce", township: "kielecki", province: "świętokrzyskie", area: 15.50, people: 2914, dentensity: 188},
    {
        name: "Darłowo",
        township: "sławieński",
        province: "zachodniopomorskie",
        area: 20.21,
        people: 13924,
        dentensity: 689
    },
    {name: "Dąbie", township: "kolski", province: "wielkopolskie", area: 8.80, people: 2017, dentensity: 229},
    {
        name: "Dąbrowa Białostocka",
        township: "sokólski",
        province: "podlaskie",
        area: 22.64,
        people: 5632,
        dentensity: 249
    },
    {
        name: "Dąbrowa Górnicza",
        township: "Dąbrowa Górnicza",
        province: "śląskie",
        area: 188.73,
        people: 121121,
        dentensity: 642
    },
    {
        name: "Dąbrowa Tarnowska",
        township: "dąbrowski",
        province: "małopolskie",
        area: 23.07,
        people: 11924,
        dentensity: 517
    },
    {name: "Debrzno", township: "człuchowski", province: "pomorskie", area: 7.51, people: 5152, dentensity: 686},
    {name: "Dębica", township: "dębicki", province: "podkarpackie", area: 33.83, people: 46063, dentensity: 1362},
    {name: "Dęblin", township: "rycki", province: "lubelskie", area: 38.33, people: 16398, dentensity: 428},
    {
        name: "Dębno",
        township: "myśliborski",
        province: "zachodniopomorskie",
        area: 19.51,
        people: 13931,
        dentensity: 714
    },
    {name: "Dobczyce", township: "myślenicki", province: "małopolskie", area: 12.97, people: 6425, dentensity: 495},
    {
        name: "Dobiegniew",
        township: "strzelecko-drezdenecki",
        province: "lubuskie",
        area: 5.69,
        people: 3087,
        dentensity: 543
    },
    {name: "Dobra", township: "łobeski", province: "zachodniopomorskie", area: 2.37, people: 2353, dentensity: 993},
    {name: "Dobra", township: "turecki", province: "wielkopolskie", area: 1.84, people: 1396, dentensity: 759},
    {
        name: "Dobre Miasto",
        township: "olsztyński",
        province: "warmińsko-mazurskie",
        area: 4.86,
        people: 10293,
        dentensity: 2118
    },
    {name: "Dobrodzień", township: "oleski", province: "opolskie", area: 19.53, people: 3749, dentensity: 192},
    {
        name: "Dobrzany",
        township: "stargardzki",
        province: "zachodniopomorskie",
        area: 5.34,
        people: 2288,
        dentensity: 428
    },
    {name: "Dobrzyca", township: "pleszewski", province: "wielkopolskie", area: 19.70, people: 3153, dentensity: 160},
    {
        name: "Dobrzyń nad Wisłą",
        township: "lipnowski",
        province: "kujawsko-pomorskie",
        area: 5.41,
        people: 2161,
        dentensity: 399
    },
    {name: "Dolsk", township: "śremski", province: "wielkopolskie", area: 6.20, people: 1569, dentensity: 253},
    {
        name: "Drawno",
        township: "choszczeński",
        province: "zachodniopomorskie",
        area: 5.03,
        people: 2307,
        dentensity: 459
    },
    {
        name: "Drawsko Pomorskie",
        township: "drawski",
        province: "zachodniopomorskie",
        area: 22.33,
        people: 11672,
        dentensity: 523
    },
    {
        name: "Drezdenko",
        township: "strzelecko-drezdenecki",
        province: "lubuskie",
        area: 10.72,
        people: 10282,
        dentensity: 959
    },
    {name: "Drobin", township: "płocki", province: "mazowieckie", area: 9.65, people: 2925, dentensity: 303},
    {name: "Drohiczyn", township: "siemiatycki", province: "podlaskie", area: 15.69, people: 2011, dentensity: 128},
    {name: "Drzewica", township: "opoczyński", province: "łódzkie", area: 4.81, people: 3865, dentensity: 804},
    {name: "Dukla", township: "krośnieński", province: "podkarpackie", area: 5.48, people: 2098, dentensity: 383},
    {name: "Duszniki-Zdrój", township: "kłodzki", province: "dolnośląskie", area: 22.28, people: 4728, dentensity: 212},
    {name: "Dynów", township: "rzeszowski", province: "podkarpackie", area: 24.55, people: 6146, dentensity: 250},
    {
        name: "Działdowo",
        township: "działdowski",
        province: "warmińsko-mazurskie",
        area: 11.47,
        people: 21370,
        dentensity: 1863
    },
    {name: "Działoszyce", township: "pińczowski", province: "świętokrzyskie", area: 1.92, people: 913, dentensity: 476},
    {name: "Działoszyn", township: "pajęczański", province: "łódzkie", area: 4.94, people: 5950, dentensity: 1204},
    {name: "Dzierzgoń", township: "sztumski", province: "pomorskie", area: 3.90, people: 5413, dentensity: 1388},
    {
        name: "Dzierżoniów",
        township: "dzierżoniowski",
        province: "dolnośląskie",
        area: 20.07,
        people: 33653,
        dentensity: 1677
    },
    {name: "Dziwnów", township: "kamieński", province: "zachodniopomorskie", area: 6.14, people: 2707, dentensity: 441},
    {
        name: "Elbląg",
        township: "Elbląg",
        province: "warmińsko-mazurskie",
        area: 79.82,
        people: 120895,
        dentensity: 1515
    },
    {name: "Ełk", township: "ełcki", province: "warmińsko-mazurskie", area: 21.05, people: 61523, dentensity: 2923},
    {name: "Frampol", township: "biłgorajski", province: "lubelskie", area: 4.67, people: 1433, dentensity: 307},
    {
        name: "Frombork",
        township: "braniewski",
        province: "warmińsko-mazurskie",
        area: 7.59,
        people: 2389,
        dentensity: 315
    },
    {name: "Garwolin", township: "garwoliński", province: "mazowieckie", area: 22.08, people: 17381, dentensity: 787},
    {name: "Gąbin", township: "płocki", province: "mazowieckie", area: 27.95, people: 4127, dentensity: 148},
    {name: "Gdańsk", township: "Gdańsk", province: "pomorskie", area: 261.96, people: 464254, dentensity: 1772},
    {name: "Gdynia", township: "Gdynia", province: "pomorskie", area: 135.14, people: 246306, dentensity: 1823},
    {
        name: "Giżycko",
        township: "giżycki",
        province: "warmińsko-mazurskie",
        area: 13.72,
        people: 29480,
        dentensity: 2149
    },
    {name: "Glinojeck", township: "ciechanowski", province: "mazowieckie", area: 7.37, people: 3027, dentensity: 411},
    {name: "Gliwice", township: "Gliwice", province: "śląskie", area: 133.88, people: 181309, dentensity: 1354},
    {name: "Głogów", township: "głogowski", province: "dolnośląskie", area: 35.11, people: 68179, dentensity: 1942},
    {
        name: "Głogów Małopolski",
        township: "rzeszowski",
        province: "podkarpackie",
        area: 13.71,
        people: 6431,
        dentensity: 469
    },
    {name: "Głogówek", township: "prudnicki", province: "opolskie", area: 22.06, people: 5607, dentensity: 254},
    {name: "Głowno", township: "zgierski", province: "łódzkie", area: 19.84, people: 14422, dentensity: 727},
    {name: "Głubczyce", township: "głubczycki", province: "opolskie", area: 12.54, people: 12624, dentensity: 1007},
    {name: "Głuchołazy", township: "nyski", province: "opolskie", area: 6.83, people: 13735, dentensity: 2011},
    {name: "Głuszyca", township: "wałbrzyski", province: "dolnośląskie", area: 16.21, people: 6431, dentensity: 397},
    {name: "Gniew", township: "tczewski", province: "pomorskie", area: 6.04, people: 6791, dentensity: 1124},
    {
        name: "Gniewkowo",
        township: "inowrocławski",
        province: "kujawsko-pomorskie",
        area: 9.18,
        people: 7202,
        dentensity: 785
    },
    {
        name: "Gniezno",
        township: "gnieźnieński",
        province: "wielkopolskie",
        area: 40.60,
        people: 68943,
        dentensity: 1698
    },
    {name: "Gogolin", township: "krapkowicki", province: "opolskie", area: 20.35, people: 6640, dentensity: 326},
    {
        name: "Golczewo",
        township: "kamieński",
        province: "zachodniopomorskie",
        area: 7.42,
        people: 2686,
        dentensity: 362
    },
    {
        name: "Goleniów",
        township: "goleniowski",
        province: "zachodniopomorskie",
        area: 11.78,
        people: 22553,
        dentensity: 1915
    },
    {name: "Golina", township: "koniński", province: "wielkopolskie", area: 3.52, people: 4493, dentensity: 1276},
    {
        name: "Golub-Dobrzyń",
        township: "golubsko-dobrzyński",
        province: "kujawsko-pomorskie",
        area: 7.50,
        people: 12828,
        dentensity: 1710
    },
    {name: "Gołańcz", township: "wągrowiecki", province: "wielkopolskie", area: 12.64, people: 3294, dentensity: 261},
    {
        name: "Gołdap",
        township: "gołdapski",
        province: "warmińsko-mazurskie",
        area: 17.20,
        people: 13740,
        dentensity: 799
    },
    {name: "Goniądz", township: "moniecki", province: "podlaskie", area: 4.28, people: 1827, dentensity: 427},
    {name: "Gorlice", township: "gorlicki", province: "małopolskie", area: 23.53, people: 27781, dentensity: 1181},
    {name: "Gorzów Śląski", township: "oleski", province: "opolskie", area: 18.54, people: 2451, dentensity: 132},
    {
        name: "Gorzów Wielkopolski",
        township: "Gorzów Wielkopolski",
        province: "lubuskie",
        area: 85.72,
        people: 124295,
        dentensity: 1450
    },
    {name: "Gostynin", township: "gostyniński", province: "mazowieckie", area: 32.40, people: 18720, dentensity: 578},
    {name: "Gostyń", township: "gostyński", province: "wielkopolskie", area: 11.09, people: 20182, dentensity: 1820},
    {
        name: "Gościno",
        township: "kołobrzeski",
        province: "zachodniopomorskie",
        area: 5.70,
        people: 2436,
        dentensity: 427
    },
    {name: "Gozdnica", township: "żagański", province: "lubuskie", area: 23.92, people: 3100, dentensity: 130},
    {name: "Góra", township: "górowski", province: "dolnośląskie", area: 13.65, people: 11994, dentensity: 879},
    {
        name: "Góra Kalwaria",
        township: "piaseczyński",
        province: "mazowieckie",
        area: 13.67,
        people: 11942,
        dentensity: 874
    },
    {
        name: "Górowo Iławeckie",
        township: "bartoszycki",
        province: "warmińsko-mazurskie",
        area: 3.32,
        people: 4021,
        dentensity: 1211
    },
    {name: "Górzno", township: "brodnicki", province: "kujawsko-pomorskie", area: 3.43, people: 1403, dentensity: 409},
    {
        name: "Grabów nad Prosną",
        township: "ostrzeszowski",
        province: "wielkopolskie",
        area: 2.58,
        people: 1941,
        dentensity: 752
    },
    {name: "Grajewo", township: "grajewski", province: "podlaskie", area: 18.94, people: 22049, dentensity: 1164},
    {name: "Grodków", township: "brzeski", province: "opolskie", area: 9.88, people: 8700, dentensity: 881},
    {
        name: "Grodzisk Mazowiecki",
        township: "grodziski",
        province: "mazowieckie",
        area: 13.19,
        people: 30955,
        dentensity: 2347
    },
    {
        name: "Grodzisk Wielkopolski",
        township: "grodziski",
        province: "wielkopolskie",
        area: 18.21,
        people: 14595,
        dentensity: 801
    },
    {name: "Grójec", township: "grójecki", province: "mazowieckie", area: 8.57, people: 16674, dentensity: 1946},
    {
        name: "Grudziądz",
        township: "Grudziądz",
        province: "kujawsko-pomorskie",
        area: 57.76,
        people: 95629,
        dentensity: 1656
    },
    {name: "Grybów", township: "nowosądecki", province: "małopolskie", area: 16.95, people: 6089, dentensity: 359},
    {
        name: "Gryfice",
        township: "gryficki",
        province: "zachodniopomorskie",
        area: 12.40,
        people: 16600,
        dentensity: 1339
    },
    {
        name: "Gryfino",
        township: "gryfiński",
        province: "zachodniopomorskie",
        area: 9.58,
        people: 21393,
        dentensity: 2233
    },
    {name: "Gryfów Śląski", township: "lwówecki", province: "dolnośląskie", area: 6.63, people: 6684, dentensity: 1008},
    {name: "Gubin", township: "krośnieński", province: "lubuskie", area: 20.68, people: 16740, dentensity: 809},
    {name: "Hajnówka", township: "hajnowski", province: "podlaskie", area: 21.29, people: 20919, dentensity: 983},
    {name: "Halinów", township: "miński", province: "mazowieckie", area: 2.84, people: 3718, dentensity: 1309},
    {name: "Hel", township: "pucki", province: "pomorskie", area: 22.95, people: 3373, dentensity: 147},
    {name: "Hrubieszów", township: "hrubieszowski", province: "lubelskie", area: 33.03, people: 17903, dentensity: 542},
    {name: "Iława", township: "iławski", province: "warmińsko-mazurskie", area: 21.88, people: 33132, dentensity: 1514},
    {name: "Iłowa", township: "żagański", province: "lubuskie", area: 9.18, people: 3947, dentensity: 430},
    {name: "Iłża", township: "radomski", province: "mazowieckie", area: 15.83, people: 4832, dentensity: 305},
    {name: "Imielin", township: "bieruńsko-lędziński", province: "śląskie", area: 27.99, people: 9052, dentensity: 323},
    {
        name: "Inowrocław",
        township: "inowrocławski",
        province: "kujawsko-pomorskie",
        area: 30.42,
        people: 73577,
        dentensity: 2419
    },
    {name: "Ińsko", township: "stargardzki", province: "zachodniopomorskie", area: 7.48, people: 1965, dentensity: 263},
    {
        name: "Iwonicz-Zdrój",
        township: "krośnieński",
        province: "podkarpackie",
        area: 5.89,
        people: 1798,
        dentensity: 305
    },
    {
        name: "Izbica Kujawska",
        township: "włocławski",
        province: "kujawsko-pomorskie",
        area: 2.24,
        people: 2677,
        dentensity: 1195
    },
    {
        name: "Jabłonowo Pomorskie",
        township: "brodnicki",
        province: "kujawsko-pomorskie",
        area: 3.35,
        people: 3782,
        dentensity: 1129
    },
    {
        name: "Janikowo",
        township: "inowrocławski",
        province: "kujawsko-pomorskie",
        area: 9.51,
        people: 8844,
        dentensity: 930
    },
    {
        name: "Janowiec Wielkopolski",
        township: "żniński",
        province: "kujawsko-pomorskie",
        area: 3.04,
        people: 4016,
        dentensity: 1321
    },
    {name: "Janów Lubelski", township: "janowski", province: "lubelskie", area: 14.80, people: 11986, dentensity: 810},
    {name: "Jaraczewo", township: "jarociński", province: "wielkopolskie", area: 10.07, people: 1467, dentensity: 146},
    {name: "Jarocin", township: "jarociński", province: "wielkopolskie", area: 16.38, people: 26245, dentensity: 1602},
    {name: "Jarosław", township: "jarosławski", province: "podkarpackie", area: 34.61, people: 37892, dentensity: 1095},
    {name: "Jasień", township: "żarski", province: "lubuskie", area: 4.79, people: 4348, dentensity: 908},
    {name: "Jasło", township: "jasielski", province: "podkarpackie", area: 36.52, people: 35445, dentensity: 971},
    {name: "Jastarnia", township: "pucki", province: "pomorskie", area: 5.06, people: 2736, dentensity: 541},
    {name: "Jastrowie", township: "złotowski", province: "wielkopolskie", area: 72.30, people: 8662, dentensity: 120},
    {
        name: "Jastrzębie-Zdrój",
        township: "Jastrzębie-Zdrój",
        province: "śląskie",
        area: 85.33,
        people: 89590,
        dentensity: 1050
    },
    {name: "Jawor", township: "jaworski", province: "dolnośląskie", area: 18.80, people: 23266, dentensity: 1238},
    {name: "Jaworzno", township: "Jaworzno", province: "śląskie", area: 152.59, people: 92090, dentensity: 604},
    {
        name: "Jaworzyna Śląska",
        township: "świdnicki",
        province: "dolnośląskie",
        area: 4.34,
        people: 5164,
        dentensity: 1190
    },
    {name: "Jedlicze", township: "krośnieński", province: "podkarpackie", area: 10.60, people: 5761, dentensity: 543},
    {
        name: "Jedlina-Zdrój",
        township: "wałbrzyski",
        province: "dolnośląskie",
        area: 17.45,
        people: 4887,
        dentensity: 280
    },
    {name: "Jedwabne", township: "łomżyński", province: "podlaskie", area: 4.54, people: 1624, dentensity: 358},
    {
        name: "Jelcz-Laskowice",
        township: "oławski",
        province: "dolnośląskie",
        area: 17.06,
        people: 15867,
        dentensity: 930
    },
    {
        name: "Jelenia Góra",
        township: "Jelenia Góra",
        province: "dolnośląskie",
        area: 109.22,
        people: 80072,
        dentensity: 733
    },
    {
        name: "Jeziorany",
        township: "olsztyński",
        province: "warmińsko-mazurskie",
        area: 3.41,
        people: 3258,
        dentensity: 955
    },
    {
        name: "Jędrzejów",
        township: "jędrzejowski",
        province: "świętokrzyskie",
        area: 11.37,
        people: 15369,
        dentensity: 1352
    },
    {name: "Jordanów", township: "suski", province: "małopolskie", area: 21.03, people: 5362, dentensity: 255},
    {name: "Józefów", township: "biłgorajski", province: "lubelskie", area: 5.00, people: 2498, dentensity: 500},
    {name: "Józefów", township: "otwocki", province: "mazowieckie", area: 23.91, people: 20488, dentensity: 857},
    {name: "Józefów nad Wisłą", township: "opolski", province: "lubelskie", area: 3.65, people: 929, dentensity: 255},
    {name: "Jutrosin", township: "rawicki", province: "wielkopolskie", area: 1.62, people: 1966, dentensity: 1214},
    {name: "Kalety", township: "tarnogórski", province: "śląskie", area: 76.29, people: 8627, dentensity: 113},
    {name: "Kalisz", township: "Kalisz", province: "wielkopolskie", area: 69.42, people: 101625, dentensity: 1464},
    {
        name: "Kalisz Pomorski",
        township: "drawski",
        province: "zachodniopomorskie",
        area: 11.96,
        people: 4399,
        dentensity: 368
    },
    {
        name: "Kalwaria Zebrzydowska",
        township: "wadowicki",
        province: "małopolskie",
        area: 5.50,
        people: 4551,
        dentensity: 827
    },
    {name: "Kałuszyn", township: "miński", province: "mazowieckie", area: 12.30, people: 2927, dentensity: 238},
    {
        name: "Kamienna Góra",
        township: "kamiennogórski",
        province: "dolnośląskie",
        area: 18.04,
        people: 19348,
        dentensity: 1073
    },
    {
        name: "Kamień Krajeński",
        township: "sępoleński",
        province: "kujawsko-pomorskie",
        area: 3.65,
        people: 2394,
        dentensity: 656
    },
    {
        name: "Kamień Pomorski",
        township: "kamieński",
        province: "zachodniopomorskie",
        area: 10.74,
        people: 8868,
        dentensity: 826
    },
    {name: "Kamieńsk", township: "radomszczański", province: "łódzkie", area: 11.99, people: 2812, dentensity: 235},
    {name: "Kańczuga", township: "przeworski", province: "podkarpackie", area: 7.60, people: 3182, dentensity: 419},
    {name: "Karczew", township: "otwocki", province: "mazowieckie", area: 28.12, people: 9960, dentensity: 354},
    {name: "Kargowa", township: "zielonogórski", province: "lubuskie", area: 4.55, people: 3766, dentensity: 828},
    {
        name: "Karlino",
        township: "białogardzki",
        province: "zachodniopomorskie",
        area: 9.40,
        people: 5950,
        dentensity: 633
    },
    {name: "Karpacz", township: "jeleniogórski", province: "dolnośląskie", area: 37.99, people: 4711, dentensity: 124},
    {name: "Kartuzy", township: "kartuski", province: "pomorskie", area: 6.80, people: 14611, dentensity: 2149},
    {name: "Katowice", township: "Katowice", province: "śląskie", area: 164.64, people: 296262, dentensity: 1799},
    {name: "Kazimierz Dolny", township: "puławski", province: "lubelskie", area: 30.44, people: 2607, dentensity: 86},
    {
        name: "Kazimierza Wielka",
        township: "kazimierski",
        province: "świętokrzyskie",
        area: 5.33,
        people: 5619,
        dentensity: 1054
    },
    {
        name: "Kąty Wrocławskie",
        township: "wrocławski",
        province: "dolnośląskie",
        area: 8.61,
        people: 6846,
        dentensity: 795
    },
    {name: "Kcynia", township: "nakielski", province: "kujawsko-pomorskie", area: 6.84, people: 4678, dentensity: 684},
    {
        name: "Kędzierzyn-Koźle",
        township: "kędzierzyńsko-kozielski",
        province: "opolskie",
        area: 123.71,
        people: 61661,
        dentensity: 498
    },
    {name: "Kępice", township: "słupski", province: "pomorskie", area: 6.11, people: 3646, dentensity: 597},
    {name: "Kępno", township: "kępiński", province: "wielkopolskie", area: 7.79, people: 14190, dentensity: 1822},
    {
        name: "Kętrzyn",
        township: "kętrzyński",
        province: "warmińsko-mazurskie",
        area: 10.35,
        people: 27478,
        dentensity: 2655
    },
    {name: "Kęty", township: "oświęcimski", province: "małopolskie", area: 23.05, people: 18886, dentensity: 819},
    {name: "Kielce", township: "Kielce", province: "świętokrzyskie", area: 109.65, people: 196804, dentensity: 1795},
    {name: "Kietrz", township: "głubczycki", province: "opolskie", area: 18.74, people: 6061, dentensity: 323},
    {
        name: "Kisielice",
        township: "iławski",
        province: "warmińsko-mazurskie",
        area: 3.37,
        people: 2135,
        dentensity: 634
    },
    {name: "Kleczew", township: "koniński", province: "wielkopolskie", area: 7.80, people: 4212, dentensity: 540},
    {name: "Kleszczele", township: "hajnowski", province: "podlaskie", area: 46.71, people: 1297, dentensity: 28},
    {name: "Kluczbork", township: "kluczborski", province: "opolskie", area: 12.35, people: 23797, dentensity: 1927},
    {name: "Kłecko", township: "gnieźnieński", province: "wielkopolskie", area: 9.62, people: 2631, dentensity: 273},
    {name: "Kłobuck", township: "kłobucki", province: "śląskie", area: 47.46, people: 13014, dentensity: 274},
    {name: "Kłodawa", township: "kolski", province: "wielkopolskie", area: 4.31, people: 6530, dentensity: 1515},
    {name: "Kłodzko", township: "kłodzki", province: "dolnośląskie", area: 24.84, people: 27193, dentensity: 1095},
    {name: "Knurów", township: "gliwicki", province: "śląskie", area: 33.95, people: 38594, dentensity: 1137},
    {name: "Knyszyn", township: "moniecki", province: "podlaskie", area: 23.68, people: 2782, dentensity: 117},
    {name: "Kobylin", township: "krotoszyński", province: "wielkopolskie", area: 4.87, people: 3256, dentensity: 669},
    {name: "Kobyłka", township: "wołomiński", province: "mazowieckie", area: 19.64, people: 23120, dentensity: 1177},
    {name: "Kock", township: "lubartowski", province: "lubelskie", area: 16.78, people: 3342, dentensity: 199},
    {
        name: "Kolbuszowa",
        township: "kolbuszowski",
        province: "podkarpackie",
        area: 7.94,
        people: 9158,
        dentensity: 1153
    },
    {name: "Kolno", township: "kolneński", province: "podlaskie", area: 25.07, people: 10372, dentensity: 414},
    {name: "Kolonowskie", township: "strzelecki", province: "opolskie", area: 55.70, people: 3324, dentensity: 60},
    {name: "Koluszki", township: "łódzki wschodni", province: "łódzkie", area: 9.90, people: 13148, dentensity: 1328},
    {name: "Kołaczyce", township: "jasielski", province: "podkarpackie", area: 7.15, people: 1434, dentensity: 201},
    {name: "Koło", township: "kolski", province: "wielkopolskie", area: 13.85, people: 22227, dentensity: 1605},
    {
        name: "Kołobrzeg",
        township: "kołobrzeski",
        province: "zachodniopomorskie",
        area: 25.67,
        people: 46568,
        dentensity: 1814
    },
    {name: "Koniecpol", township: "częstochowski", province: "śląskie", area: 36.92, people: 6002, dentensity: 163},
    {name: "Konin", township: "Konin", province: "wielkopolskie", area: 82.16, people: 74834, dentensity: 911},
    {
        name: "Konstancin-Jeziorna",
        township: "piaseczyński",
        province: "mazowieckie",
        area: 17.74,
        people: 17191,
        dentensity: 969
    },
    {
        name: "Konstantynów Łódzki",
        township: "pabianicki",
        province: "łódzkie",
        area: 27.25,
        people: 18013,
        dentensity: 661
    },
    {name: "Końskie", township: "konecki", province: "świętokrzyskie", area: 17.70, people: 19534, dentensity: 1104},
    {
        name: "Koprzywnica",
        township: "sandomierski",
        province: "świętokrzyskie",
        area: 17.90,
        people: 2497,
        dentensity: 139
    },
    {name: "Korfantów", township: "nyski", province: "opolskie", area: 10.23, people: 1842, dentensity: 180},
    {
        name: "Koronowo",
        township: "bydgoski",
        province: "kujawsko-pomorskie",
        area: 28.15,
        people: 11230,
        dentensity: 399
    },
    {
        name: "Korsze",
        township: "kętrzyński",
        province: "warmińsko-mazurskie",
        area: 4.03,
        people: 4346,
        dentensity: 1078
    },
    {name: "Kosów Lacki", township: "sokołowski", province: "mazowieckie", area: 11.57, people: 2120, dentensity: 183},
    {name: "Kostrzyn", township: "poznański", province: "wielkopolskie", area: 7.98, people: 9711, dentensity: 1217},
    {
        name: "Kostrzyn nad Odrą",
        township: "gorzowski",
        province: "lubuskie",
        area: 46.14,
        people: 17918,
        dentensity: 388
    },
    {
        name: "Koszalin",
        township: "Koszalin",
        province: "zachodniopomorskie",
        area: 98.34,
        people: 107670,
        dentensity: 1095
    },
    {name: "Koszyce", township: "proszowicki", province: "małopolskie", area: 3.25, people: 786, dentensity: 242},
    {name: "Kościan", township: "kościański", province: "wielkopolskie", area: 8.79, people: 23907, dentensity: 2720},
    {name: "Kościerzyna", township: "kościerski", province: "pomorskie", area: 15.86, people: 23809, dentensity: 1501},
    {name: "Kowal", township: "włocławski", province: "kujawsko-pomorskie", area: 4.68, people: 3544, dentensity: 757},
    {
        name: "Kowalewo Pomorskie",
        township: "golubsko-dobrzyński",
        province: "kujawsko-pomorskie",
        area: 4.45,
        people: 4192,
        dentensity: 942
    },
    {name: "Kowary", township: "jeleniogórski", province: "dolnośląskie", area: 37.39, people: 11090, dentensity: 297},
    {name: "Koziegłowy", township: "myszkowski", province: "śląskie", area: 26.71, people: 2424, dentensity: 91},
    {name: "Kozienice", township: "kozienicki", province: "mazowieckie", area: 10.45, people: 17518, dentensity: 1676},
    {
        name: "Koźmin Wielkopolski",
        township: "krotoszyński",
        province: "wielkopolskie",
        area: 5.89,
        people: 6590,
        dentensity: 1119
    },
    {name: "Kożuchów", township: "nowosolski", province: "lubuskie", area: 5.94, people: 9520, dentensity: 1603},
    {name: "Kórnik", township: "poznański", province: "wielkopolskie", area: 5.99, people: 7793, dentensity: 1301},
    {name: "Krajenka", township: "złotowski", province: "wielkopolskie", area: 3.76, people: 3678, dentensity: 978},
    {name: "Kraków", township: "Kraków", province: "małopolskie", area: 326.85, people: 767348, dentensity: 2348},
    {name: "Krapkowice", township: "krapkowicki", province: "opolskie", area: 21.01, people: 16500, dentensity: 785},
    {name: "Krasnobród", township: "zamojski", province: "lubelskie", area: 6.99, people: 3138, dentensity: 449},
    {name: "Krasnystaw", township: "krasnostawski", province: "lubelskie", area: 42.13, people: 18912, dentensity: 449},
    {name: "Kraśnik", township: "kraśnicki", province: "lubelskie", area: 26.10, people: 34821, dentensity: 1334},
    {name: "Krobia", township: "gostyński", province: "wielkopolskie", area: 7.05, people: 4304, dentensity: 610},
    {name: "Krosno", township: "Krosno", province: "podkarpackie", area: 43.50, people: 46600, dentensity: 1071},
    {
        name: "Krosno Odrzańskie",
        township: "krośnieński",
        province: "lubuskie",
        area: 8.15,
        people: 11524,
        dentensity: 1414
    },
    {name: "Krośniewice", township: "kutnowski", province: "łódzkie", area: 4.18, people: 4426, dentensity: 1059},
    {
        name: "Krotoszyn",
        township: "krotoszyński",
        province: "wielkopolskie",
        area: 22.54,
        people: 29109,
        dentensity: 1291
    },
    {
        name: "Kruszwica",
        township: "inowrocławski",
        province: "kujawsko-pomorskie",
        area: 6.64,
        people: 8926,
        dentensity: 1344
    },
    {
        name: "Krynica Morska",
        township: "nowodworski",
        province: "pomorskie",
        area: 116.01,
        people: 1302,
        dentensity: 11
    },
    {
        name: "Krynica-Zdrój",
        township: "nowosądecki",
        province: "małopolskie",
        area: 39.68,
        people: 10757,
        dentensity: 271
    },
    {name: "Krynki", township: "sokólski", province: "podlaskie", area: 3.83, people: 2424, dentensity: 633},
    {name: "Krzanowice", township: "raciborski", province: "śląskie", area: 3.08, people: 2168, dentensity: 704},
    {name: "Krzepice", township: "kłobucki", province: "śląskie", area: 27.66, people: 4488, dentensity: 162},
    {name: "Krzeszowice", township: "krakowski", province: "małopolskie", area: 16.97, people: 10090, dentensity: 595},
    {name: "Krzywiń", township: "kościański", province: "wielkopolskie", area: 2.27, people: 1714, dentensity: 755},
    {
        name: "Krzyż Wielkopolski",
        township: "czarnkowsko-trzcianecki",
        province: "wielkopolskie",
        area: 5.81,
        people: 6222,
        dentensity: 1071
    },
    {
        name: "Książ Wielkopolski",
        township: "śremski",
        province: "wielkopolskie",
        area: 1.96,
        people: 2749,
        dentensity: 1403
    },
    {name: "Kudowa-Zdrój", township: "kłodzki", province: "dolnośląskie", area: 33.90, people: 10018, dentensity: 296},
    {name: "Kunów", township: "ostrowiecki", province: "świętokrzyskie", area: 7.26, people: 2970, dentensity: 409},
    {name: "Kutno", township: "kutnowski", province: "łódzkie", area: 33.59, people: 44513, dentensity: 1325},
    {
        name: "Kuźnia Raciborska",
        township: "raciborski",
        province: "śląskie",
        area: 31.49,
        people: 5402,
        dentensity: 172
    },
    {name: "Kwidzyn", township: "kwidzyński", province: "pomorskie", area: 21.54, people: 38553, dentensity: 1790},
    {name: "Lądek-Zdrój", township: "kłodzki", province: "dolnośląskie", area: 20.32, people: 5685, dentensity: 280},
    {name: "Legionowo", township: "legionowski", province: "mazowieckie", area: 13.54, people: 54041, dentensity: 3991},
    {name: "Legnica", township: "Legnica", province: "dolnośląskie", area: 56.29, people: 100324, dentensity: 1782},
    {name: "Lesko", township: "leski", province: "podkarpackie", area: 15.33, people: 5532, dentensity: 361},
    {name: "Leszno", township: "Leszno", province: "wielkopolskie", area: 31.86, people: 64197, dentensity: 2015},
    {name: "Leśna", township: "lubański", province: "dolnośląskie", area: 8.56, people: 4532, dentensity: 529},
    {name: "Leśnica", township: "strzelecki", province: "opolskie", area: 14.50, people: 2668, dentensity: 184},
    {name: "Lewin Brzeski", township: "brzeski", province: "opolskie", area: 11.64, people: 5774, dentensity: 496},
    {name: "Leżajsk", township: "leżajski", province: "podkarpackie", area: 20.58, people: 13990, dentensity: 680},
    {name: "Lębork", township: "lęborski", province: "pomorskie", area: 17.86, people: 35413, dentensity: 1983},
    {
        name: "Lędziny",
        township: "bieruńsko-lędziński",
        province: "śląskie",
        area: 31.65,
        people: 16819,
        dentensity: 531
    },
    {name: "Libiąż", township: "chrzanowski", province: "małopolskie", area: 35.85, people: 17135, dentensity: 478},
    {
        name: "Lidzbark",
        township: "działdowski",
        province: "warmińsko-mazurskie",
        area: 5.68,
        people: 7900,
        dentensity: 1391
    },
    {
        name: "Lidzbark Warmiński",
        township: "lidzbarski",
        province: "warmińsko-mazurskie",
        area: 14.35,
        people: 15877,
        dentensity: 1106
    },
    {name: "Limanowa", township: "limanowski", province: "małopolskie", area: 18.70, people: 15103, dentensity: 808},
    {name: "Lipiany", township: "pyrzycki", province: "zachodniopomorskie", area: 5.54, people: 3982, dentensity: 719},
    {
        name: "Lipno",
        township: "lipnowski",
        province: "kujawsko-pomorskie",
        area: 10.99,
        people: 14592,
        dentensity: 1328
    },
    {name: "Lipsk", township: "augustowski", province: "podlaskie", area: 4.98, people: 2376, dentensity: 477},
    {name: "Lipsko", township: "lipski", province: "mazowieckie", area: 15.70, people: 5592, dentensity: 356},
    {name: "Lubaczów", township: "lubaczowski", province: "podkarpackie", area: 25.73, people: 12101, dentensity: 470},
    {name: "Lubań", township: "lubański", province: "dolnośląskie", area: 16.12, people: 21318, dentensity: 1322},
    {name: "Lubartów", township: "lubartowski", province: "lubelskie", area: 13.91, people: 22138, dentensity: 1592},
    {name: "Lubawa", township: "iławski", province: "warmińsko-mazurskie", area: 16.84, people: 10269, dentensity: 610},
    {name: "Lubawka", township: "kamiennogórski", province: "dolnośląskie", area: 22.44, people: 6106, dentensity: 272},
    {
        name: "Lubień Kujawski",
        township: "włocławski",
        province: "kujawsko-pomorskie",
        area: 2.31,
        people: 1391,
        dentensity: 602
    },
    {name: "Lubin", township: "lubiński", province: "dolnośląskie", area: 40.77, people: 72892, dentensity: 1788},
    {name: "Lublin", township: "Lublin", province: "lubelskie", area: 147.47, people: 339850, dentensity: 2305},
    {name: "Lubliniec", township: "lubliniecki", province: "śląskie", area: 89.36, people: 23899, dentensity: 267},
    {name: "Lubniewice", township: "sulęciński", province: "lubuskie", area: 12.11, people: 2019, dentensity: 167},
    {name: "Lubomierz", township: "lwówecki", province: "dolnośląskie", area: 8.05, people: 2002, dentensity: 249},
    {name: "Luboń", township: "poznański", province: "wielkopolskie", area: 13.51, people: 31653, dentensity: 2343},
    {name: "Lubowidz", township: "żuromiński", province: "mazowieckie", area: 5.29, people: 1771, dentensity: 335},
    {
        name: "Lubraniec",
        township: "włocławski",
        province: "kujawsko-pomorskie",
        area: 1.97,
        people: 3052,
        dentensity: 1549
    },
    {name: "Lubsko", township: "żarski", province: "lubuskie", area: 12.51, people: 14182, dentensity: 1134},
    {
        name: "Lubycza Królewska",
        township: "tomaszowski",
        province: "lubelskie",
        area: 3.92,
        people: 2469,
        dentensity: 630
    },
    {name: "Lwówek", township: "nowotomyski", province: "wielkopolskie", area: 3.16, people: 2999, dentensity: 949},
    {name: "Lwówek Śląski", township: "lwówecki", province: "dolnośląskie", area: 16.65, people: 8895, dentensity: 534},
    {name: "Łabiszyn", township: "żniński", province: "kujawsko-pomorskie", area: 2.89, people: 4501, dentensity: 1557},
    {name: "Łagów", township: "kielecki", province: "świętokrzyskie", area: 8.22, people: 1573, dentensity: 191},
    {name: "Łańcut", township: "łańcucki", province: "podkarpackie", area: 19.42, people: 17777, dentensity: 915},
    {name: "Łapy", township: "białostocki", province: "podlaskie", area: 12.14, people: 15689, dentensity: 1292},
    {name: "Łasin", township: "grudziądzki", province: "kujawsko-pomorskie", area: 4.79, people: 3320, dentensity: 693},
    {name: "Łask", township: "łaski", province: "łódzkie", area: 15.67, people: 17484, dentensity: 1116},
    {name: "Łaskarzew", township: "garwoliński", province: "mazowieckie", area: 15.35, people: 4879, dentensity: 318},
    {name: "Łaszczów", township: "tomaszowski", province: "lubelskie", area: 5.01, people: 2190, dentensity: 437},
    {name: "Łaziska Górne", township: "mikołowski", province: "śląskie", area: 20.07, people: 22390, dentensity: 1116},
    {name: "Łazy", township: "zawierciański", province: "śląskie", area: 8.60, people: 6882, dentensity: 800},
    {name: "Łeba", township: "lęborski", province: "pomorskie", area: 14.81, people: 3694, dentensity: 249},
    {name: "Łęczna", township: "łęczyński", province: "lubelskie", area: 19.00, people: 19167, dentensity: 1009},
    {name: "Łęczyca", township: "łęczycki", province: "łódzkie", area: 8.95, people: 14252, dentensity: 1592},
    {name: "Łęknica", township: "żarski", province: "lubuskie", area: 16.43, people: 2500, dentensity: 152},
    {name: "Łobez", township: "łobeski", province: "zachodniopomorskie", area: 12.84, people: 10299, dentensity: 802},
    {name: "Łobżenica", township: "pilski", province: "wielkopolskie", area: 3.25, people: 2971, dentensity: 914},
    {name: "Łochów", township: "węgrowski", province: "mazowieckie", area: 13.39, people: 6848, dentensity: 511},
    {
        name: "Łomianki",
        township: "warszawski zachodni",
        province: "mazowieckie",
        area: 8.40,
        people: 16875,
        dentensity: 2009
    },
    {name: "Łomża", township: "Łomża", province: "podlaskie", area: 32.67, people: 63092, dentensity: 1931},
    {name: "Łosice", township: "łosicki", province: "mazowieckie", area: 23.74, people: 7096, dentensity: 299},
    {name: "Łowicz", township: "łowicki", province: "łódzkie", area: 23.42, people: 28704, dentensity: 1226},
    {name: "Łódź", township: "Łódź", province: "łódzkie", area: 293.25, people: 690422, dentensity: 2354},
    {name: "Łuków", township: "łukowski", province: "lubelskie", area: 35.75, people: 30310, dentensity: 848},
    {
        name: "Maków Mazowiecki",
        township: "makowski",
        province: "mazowieckie",
        area: 10.28,
        people: 9860,
        dentensity: 958
    },
    {name: "Maków Podhalański", township: "suski", province: "małopolskie", area: 20.12, people: 5919, dentensity: 294},
    {name: "Malbork", township: "malborski", province: "pomorskie", area: 17.16, people: 38723, dentensity: 2257},
    {
        name: "Małogoszcz",
        township: "jędrzejowski",
        province: "świętokrzyskie",
        area: 9.68,
        people: 3809,
        dentensity: 393
    },
    {name: "Małomice", township: "żagański", province: "lubuskie", area: 5.37, people: 3512, dentensity: 654},
    {name: "Margonin", township: "chodzieski", province: "wielkopolskie", area: 5.15, people: 3011, dentensity: 585},
    {name: "Marki", township: "wołomiński", province: "mazowieckie", area: 26.15, people: 32686, dentensity: 1250},
    {
        name: "Maszewo",
        township: "goleniowski",
        province: "zachodniopomorskie",
        area: 5.54,
        people: 3342,
        dentensity: 603
    },
    {
        name: "Miasteczko Śląskie",
        township: "tarnogórski",
        province: "śląskie",
        area: 67.83,
        people: 7419,
        dentensity: 109
    },
    {name: "Miastko", township: "bytowski", province: "pomorskie", area: 5.68, people: 10605, dentensity: 1867},
    {name: "Michałowo", township: "białostocki", province: "podlaskie", area: 2.15, people: 3073, dentensity: 1429},
    {name: "Miechów", township: "miechowski", province: "małopolskie", area: 15.49, people: 11696, dentensity: 755},
    {name: "Miejska Górka", township: "rawicki", province: "wielkopolskie", area: 3.14, people: 3261, dentensity: 1039},
    {name: "Mielec", township: "mielecki", province: "podkarpackie", area: 46.89, people: 60628, dentensity: 1293},
    {
        name: "Mielno",
        township: "koszaliński",
        province: "zachodniopomorskie",
        area: 33.45,
        people: 3000,
        dentensity: 90
    },
    {name: "Mieroszów", township: "wałbrzyski", province: "dolnośląskie", area: 10.31, people: 4147, dentensity: 402},
    {
        name: "Mieszkowice",
        township: "gryfiński",
        province: "zachodniopomorskie",
        area: 5.25,
        people: 3681,
        dentensity: 701
    },
    {name: "Międzybórz", township: "oleśnicki", province: "dolnośląskie", area: 6.41, people: 2362, dentensity: 368},
    {
        name: "Międzychód",
        township: "międzychodzki",
        province: "wielkopolskie",
        area: 6.98,
        people: 10660,
        dentensity: 1527
    },
    {name: "Międzylesie", township: "kłodzki", province: "dolnośląskie", area: 14.37, people: 2623, dentensity: 183},
    {
        name: "Międzyrzec Podlaski",
        township: "bialski",
        province: "lubelskie",
        area: 20.03,
        people: 16925,
        dentensity: 845
    },
    {name: "Międzyrzecz", township: "międzyrzecki", province: "lubuskie", area: 10.26, people: 18255, dentensity: 1779},
    {
        name: "Międzyzdroje",
        township: "kamieński",
        province: "zachodniopomorskie",
        area: 4.50,
        people: 5422,
        dentensity: 1205
    },
    {
        name: "Mikołajki",
        township: "mrągowski",
        province: "warmińsko-mazurskie",
        area: 9.32,
        people: 3852,
        dentensity: 413
    },
    {name: "Mikołów", township: "mikołowski", province: "śląskie", area: 79.21, people: 40423, dentensity: 510},
    {name: "Mikstat", township: "ostrzeszowski", province: "wielkopolskie", area: 2.52, people: 1866, dentensity: 740},
    {name: "Milanówek", township: "grodziski", province: "mazowieckie", area: 13.44, people: 16398, dentensity: 1220},
    {name: "Milicz", township: "milicki", province: "dolnośląskie", area: 13.50, people: 11482, dentensity: 851},
    {
        name: "Miłakowo",
        township: "ostródzki",
        province: "warmińsko-mazurskie",
        area: 8.76,
        people: 2609,
        dentensity: 298
    },
    {
        name: "Miłomłyn",
        township: "ostródzki",
        province: "warmińsko-mazurskie",
        area: 12.38,
        people: 2449,
        dentensity: 198
    },
    {name: "Miłosław", township: "wrzesiński", province: "wielkopolskie", area: 4.07, people: 3589, dentensity: 882},
    {
        name: "Mińsk Mazowiecki",
        township: "miński",
        province: "mazowieckie",
        area: 13.18,
        people: 40399,
        dentensity: 3065
    },
    {
        name: "Mirosławiec",
        township: "wałecki",
        province: "zachodniopomorskie",
        area: 2.41,
        people: 3065,
        dentensity: 1325
    },
    {name: "Mirsk", township: "lwówecki", province: "dolnośląskie", area: 14.66, people: 3938, dentensity: 269},
    {name: "Mława", township: "mławski", province: "mazowieckie", area: 34.80, people: 31243, dentensity: 898},
    {name: "Młynary", township: "elbląski", province: "warmińsko-mazurskie", area: 2.76, people: 1792, dentensity: 649},
    {name: "Modliborzyce", township: "janowski", province: "lubelskie", area: 7.89, people: 1469, dentensity: 186},
    {name: "Mogielnica", township: "grójecki", province: "mazowieckie", area: 12.98, people: 2294, dentensity: 177},
    {
        name: "Mogilno",
        township: "mogileński",
        province: "kujawsko-pomorskie",
        area: 8.32,
        people: 11995,
        dentensity: 1442
    },
    {name: "Mońki", township: "moniecki", province: "podlaskie", area: 7.66, people: 10042, dentensity: 1310},
    {name: "Morawica", township: "kielecki", province: "świętokrzyskie", area: 4.38, people: 1730, dentensity: 395},
    {
        name: "Morąg",
        township: "ostródzki",
        province: "warmińsko-mazurskie",
        area: 6.11,
        people: 13994,
        dentensity: 2290
    },
    {name: "Mordy", township: "siedlecki", province: "mazowieckie", area: 4.54, people: 1780, dentensity: 392},
    {name: "Moryń", township: "gryfiński", province: "zachodniopomorskie", area: 5.54, people: 1620, dentensity: 292},
    {name: "Mosina", township: "poznański", province: "wielkopolskie", area: 13.50, people: 13762, dentensity: 1019},
    {
        name: "Mrągowo",
        township: "mrągowski",
        province: "warmińsko-mazurskie",
        area: 14.81,
        people: 21889,
        dentensity: 1478
    },
    {name: "Mrocza", township: "nakielski", province: "kujawsko-pomorskie", area: 5.01, people: 4395, dentensity: 877},
    {name: "Mrozy", township: "miński", province: "mazowieckie", area: 7.73, people: 3576, dentensity: 463},
    {name: "Mszana Dolna", township: "limanowski", province: "małopolskie", area: 27.10, people: 7982, dentensity: 295},
    {name: "Mszczonów", township: "żyrardowski", province: "mazowieckie", area: 8.56, people: 6433, dentensity: 752},
    {
        name: "Murowana Goślina",
        township: "poznański",
        province: "wielkopolskie",
        area: 8.62,
        people: 10391,
        dentensity: 1205
    },
    {name: "Muszyna", township: "nowosądecki", province: "małopolskie", area: 24.43, people: 4909, dentensity: 201},
    {name: "Mysłowice", township: "Mysłowice", province: "śląskie", area: 65.62, people: 74647, dentensity: 1138},
    {name: "Myszków", township: "myszkowski", province: "śląskie", area: 73.59, people: 31974, dentensity: 434},
    {name: "Myszyniec", township: "ostrołęcki", province: "mazowieckie", area: 11.22, people: 3397, dentensity: 303},
    {name: "Myślenice", township: "myślenicki", province: "małopolskie", area: 30.22, people: 18415, dentensity: 609},
    {
        name: "Myślibórz",
        township: "myśliborski",
        province: "zachodniopomorskie",
        area: 15.04,
        people: 11328,
        dentensity: 753
    },
    {
        name: "Nakło nad Notecią",
        township: "nakielski",
        province: "kujawsko-pomorskie",
        area: 10.82,
        people: 18531,
        dentensity: 1713
    },
    {name: "Nałęczów", township: "puławski", province: "lubelskie", area: 13.82, people: 3750, dentensity: 271},
    {name: "Namysłów", township: "namysłowski", province: "opolskie", area: 22.61, people: 16360, dentensity: 724},
    {name: "Narol", township: "lubaczowski", province: "podkarpackie", area: 12.42, people: 2102, dentensity: 169},
    {name: "Nasielsk", township: "nowodworski", province: "mazowieckie", area: 12.57, people: 7701, dentensity: 613},
    {name: "Nekla", township: "wrzesiński", province: "wielkopolskie", area: 19.79, people: 3719, dentensity: 188},
    {
        name: "Nidzica",
        township: "nidzicki",
        province: "warmińsko-mazurskie",
        area: 6.86,
        people: 13872,
        dentensity: 2022
    },
    {name: "Niemcza", township: "dzierżoniowski", province: "dolnośląskie", area: 19.81, people: 2981, dentensity: 150},
    {name: "Niemodlin", township: "opolski", province: "opolskie", area: 13.11, people: 6431, dentensity: 491},
    {name: "Niepołomice", township: "wielicki", province: "małopolskie", area: 27.40, people: 12507, dentensity: 456},
    {
        name: "Nieszawa",
        township: "aleksandrowski",
        province: "kujawsko-pomorskie",
        area: 9.79,
        people: 1914,
        dentensity: 196
    },
    {name: "Nisko", township: "niżański", province: "podkarpackie", area: 60.96, people: 15355, dentensity: 252},
    {
        name: "Nowa Dęba",
        township: "tarnobrzeski",
        province: "podkarpackie",
        area: 16.70,
        people: 11215,
        dentensity: 672
    },
    {name: "Nowa Ruda", township: "kłodzki", province: "dolnośląskie", area: 37.05, people: 22455, dentensity: 606},
    {name: "Nowa Sarzyna", township: "leżajski", province: "podkarpackie", area: 9.15, people: 5970, dentensity: 652},
    {name: "Nowa Słupia", township: "kielecki", province: "świętokrzyskie", area: 13.97, people: 1375, dentensity: 98},
    {name: "Nowa Sól", township: "nowosolski", province: "lubuskie", area: 21.80, people: 39098, dentensity: 1793},
    {name: "Nowe", township: "świecki", province: "kujawsko-pomorskie", area: 3.57, people: 5913, dentensity: 1656},
    {name: "Nowe Brzesko", township: "proszowicki", province: "małopolskie", area: 7.26, people: 1674, dentensity: 231},
    {name: "Nowe Miasteczko", township: "nowosolski", province: "lubuskie", area: 3.29, people: 2816, dentensity: 856},
    {
        name: "Nowe Miasto Lubawskie",
        township: "nowomiejski",
        province: "warmińsko-mazurskie",
        area: 11.37,
        people: 10997,
        dentensity: 967
    },
    {
        name: "Nowe Miasto nad Pilicą",
        township: "grójecki",
        province: "mazowieckie",
        area: 11.25,
        people: 3830,
        dentensity: 340
    },
    {
        name: "Nowe Skalmierzyce",
        township: "ostrowski",
        province: "wielkopolskie",
        area: 1.58,
        people: 4798,
        dentensity: 3037
    },
    {
        name: "Nowe Warpno",
        township: "policki",
        province: "zachodniopomorskie",
        area: 24.51,
        people: 1196,
        dentensity: 49
    },
    {
        name: "Nowogard",
        township: "goleniowski",
        province: "zachodniopomorskie",
        area: 12.57,
        people: 16756,
        dentensity: 1333
    },
    {
        name: "Nowogrodziec",
        township: "bolesławiecki",
        province: "dolnośląskie",
        area: 16.10,
        people: 4244,
        dentensity: 264
    },
    {name: "Nowogród", township: "łomżyński", province: "podlaskie", area: 20.55, people: 2173, dentensity: 106},
    {
        name: "Nowogród Bobrzański",
        township: "zielonogórski",
        province: "lubuskie",
        area: 14.63,
        people: 5172,
        dentensity: 354
    },
    {
        name: "Nowy Dwór Gdański",
        township: "nowodworski",
        province: "pomorskie",
        area: 5.07,
        people: 9964,
        dentensity: 1965
    },
    {
        name: "Nowy Dwór Mazowiecki",
        township: "nowodworski",
        province: "mazowieckie",
        area: 28.21,
        people: 28637,
        dentensity: 1015
    },
    {name: "Nowy Korczyn", township: "buski", province: "świętokrzyskie", area: 7.52, people: 1031, dentensity: 137},
    {name: "Nowy Sącz", township: "Nowy Sącz", province: "małopolskie", area: 57.58, people: 84041, dentensity: 1460},
    {name: "Nowy Staw", township: "malborski", province: "pomorskie", area: 4.67, people: 4196, dentensity: 899},
    {name: "Nowy Targ", township: "nowotarski", province: "małopolskie", area: 51.07, people: 33361, dentensity: 653},
    {
        name: "Nowy Tomyśl",
        township: "nowotomyski",
        province: "wielkopolskie",
        area: 5.2,
        people: 14702,
        dentensity: 2827
    },
    {name: "Nowy Wiśnicz", township: "bocheński", province: "małopolskie", area: 4.97, people: 2728, dentensity: 549},
    {name: "Nysa", township: "nyski", province: "opolskie", area: 27.51, people: 44397, dentensity: 1614},
    {name: "Oborniki", township: "obornicki", province: "wielkopolskie", area: 14.08, people: 18341, dentensity: 1303},
    {
        name: "Oborniki Śląskie",
        township: "trzebnicki",
        province: "dolnośląskie",
        area: 14.46,
        people: 9118,
        dentensity: 631
    },
    {name: "Obrzycko", township: "szamotulski", province: "wielkopolskie", area: 3.74, people: 2378, dentensity: 636},
    {name: "Odolanów", township: "ostrowski", province: "wielkopolskie", area: 4.76, people: 5155, dentensity: 1083},
    {name: "Ogrodzieniec", township: "zawierciański", province: "śląskie", area: 28.56, people: 4313, dentensity: 151},
    {name: "Okonek", township: "złotowski", province: "wielkopolskie", area: 6.01, people: 3929, dentensity: 654},
    {name: "Olecko", township: "olecki", province: "warmińsko-mazurskie", area: 11.54, people: 16508, dentensity: 1431},
    {name: "Olesno", township: "oleski", province: "opolskie", area: 15.08, people: 9400, dentensity: 623},
    {name: "Oleszyce", township: "lubaczowski", province: "podkarpackie", area: 5.08, people: 3041, dentensity: 599},
    {name: "Oleśnica", township: "oleśnicki", province: "dolnośląskie", area: 20.96, people: 37300, dentensity: 1780},
    {name: "Oleśnica", township: "staszowski", province: "świętokrzyskie", area: 10.04, people: 1902, dentensity: 189},
    {name: "Olkusz", township: "olkuski", province: "małopolskie", area: 25.65, people: 35921, dentensity: 1400},
    {
        name: "Olsztyn",
        township: "Olsztyn",
        province: "warmińsko-mazurskie",
        area: 88.33,
        people: 173070,
        dentensity: 1959
    },
    {
        name: "Olsztynek",
        township: "olsztyński",
        province: "warmińsko-mazurskie",
        area: 7.69,
        people: 7677,
        dentensity: 998
    },
    {name: "Olszyna", township: "lubański", province: "dolnośląskie", area: 20.26, people: 4347, dentensity: 215},
    {name: "Oława", township: "oławski", province: "dolnośląskie", area: 27.36, people: 32883, dentensity: 1202},
    {name: "Opalenica", township: "nowotomyski", province: "wielkopolskie", area: 6.42, people: 9664, dentensity: 1505},
    {name: "Opatowiec", township: "kazimierski", province: "świętokrzyskie", area: 5.47, people: 338, dentensity: 62},
    {name: "Opatów", township: "opatowski", province: "świętokrzyskie", area: 9.36, people: 6516, dentensity: 696},
    {name: "Opatówek", township: "kaliski", province: "wielkopolskie", area: 8.68, people: 3723, dentensity: 429},
    {name: "Opoczno", township: "opoczyński", province: "łódzkie", area: 24.75, people: 21534, dentensity: 870},
    {name: "Opole", township: "Opole", province: "opolskie", area: 148.88, people: 128140, dentensity: 861},
    {name: "Opole Lubelskie", township: "opolski", province: "lubelskie", area: 15.12, people: 8605, dentensity: 569},
    {
        name: "Orneta",
        township: "lidzbarski",
        province: "warmińsko-mazurskie",
        area: 9.63,
        people: 8924,
        dentensity: 927
    },
    {name: "Orzesze", township: "mikołowski", province: "śląskie", area: 83.75, people: 20773, dentensity: 248},
    {name: "Orzysz", township: "piski", province: "warmińsko-mazurskie", area: 8.17, people: 5615, dentensity: 687},
    {name: "Osieczna", township: "leszczyński", province: "wielkopolskie", area: 4.76, people: 2322, dentensity: 488},
    {name: "Osiek", township: "staszowski", province: "świętokrzyskie", area: 17.43, people: 2004, dentensity: 115},
    {name: "Ostrołęka", township: "Ostrołęka", province: "mazowieckie", area: 33.46, people: 52451, dentensity: 1568},
    {name: "Ostroróg", township: "szamotulski", province: "wielkopolskie", area: 1.25, people: 1941, dentensity: 1553},
    {
        name: "Ostrowiec Świętokrzyski",
        township: "ostrowiecki",
        province: "świętokrzyskie",
        area: 46.43,
        people: 69852,
        dentensity: 1504
    },
    {
        name: "Ostróda",
        township: "ostródzki",
        province: "warmińsko-mazurskie",
        area: 14.15,
        people: 33243,
        dentensity: 2349
    },
    {
        name: "Ostrów Lubelski",
        township: "lubartowski",
        province: "lubelskie",
        area: 29.77,
        people: 2095,
        dentensity: 70
    },
    {
        name: "Ostrów Mazowiecka",
        township: "ostrowski",
        province: "mazowieckie",
        area: 22.27,
        people: 22656,
        dentensity: 1017
    },
    {
        name: "Ostrów Wielkopolski",
        township: "ostrowski",
        province: "wielkopolskie",
        area: 41.90,
        people: 72364,
        dentensity: 1727
    },
    {
        name: "Ostrzeszów",
        township: "ostrzeszowski",
        province: "wielkopolskie",
        area: 12.13,
        people: 14325,
        dentensity: 1181
    },
    {name: "Ośno Lubuskie", township: "słubicki", province: "lubuskie", area: 8.01, people: 3911, dentensity: 488},
    {name: "Oświęcim", township: "oświęcimski", province: "małopolskie", area: 30.00, people: 38678, dentensity: 1289},
    {name: "Otmuchów", township: "nyski", province: "opolskie", area: 49.54, people: 6647, dentensity: 134},
    {name: "Otwock", township: "otwocki", province: "mazowieckie", area: 47.31, people: 44873, dentensity: 948},
    {name: "Otyń", township: "nowosolski", province: "lubuskie", area: 7.86, people: 1589, dentensity: 202},
    {name: "Ozimek", township: "opolski", province: "opolskie", area: 3.25, people: 8807, dentensity: 2710},
    {name: "Ozorków", township: "zgierski", province: "łódzkie", area: 15.46, people: 19685, dentensity: 1273},
    {name: "Ożarów", township: "opatowski", province: "świętokrzyskie", area: 7.79, people: 4594, dentensity: 590},
    {
        name: "Ożarów Mazowiecki",
        township: "warszawski zachodni",
        province: "mazowieckie",
        area: 8.13,
        people: 11311,
        dentensity: 1391
    },
    {name: "Pabianice", township: "pabianicki", province: "łódzkie", area: 32.99, people: 65823, dentensity: 1995},
    {name: "Pacanów", township: "buski", province: "świętokrzyskie", area: 7.13, people: 1118, dentensity: 157},
    {name: "Paczków", township: "nyski", province: "opolskie", area: 6.60, people: 7600, dentensity: 1152},
    {name: "Pajęczno", township: "pajęczański", province: "łódzkie", area: 20.23, people: 6792, dentensity: 336},
    {
        name: "Pakość",
        township: "inowrocławski",
        province: "kujawsko-pomorskie",
        area: 3.46,
        people: 5744,
        dentensity: 1660
    },
    {name: "Parczew", township: "parczewski", province: "lubelskie", area: 8.05, people: 10748, dentensity: 1335},
    {
        name: "Pasłęk",
        township: "elbląski",
        province: "warmińsko-mazurskie",
        area: 10.63,
        people: 12298,
        dentensity: 1157
    },
    {
        name: "Pasym",
        township: "szczycieński",
        province: "warmińsko-mazurskie",
        area: 15.18,
        people: 2549,
        dentensity: 168
    },
    {name: "Pelplin", township: "tczewski", province: "pomorskie", area: 4.42, people: 7912, dentensity: 1790},
    {
        name: "Pełczyce",
        township: "choszczeński",
        province: "zachodniopomorskie",
        area: 13.07,
        people: 2597,
        dentensity: 199
    },
    {
        name: "Piaseczno",
        township: "piaseczyński",
        province: "mazowieckie",
        area: 16.22,
        people: 47660,
        dentensity: 2938
    },
    {name: "Piaski", township: "świdnicki", province: "lubelskie", area: 8.44, people: 2598, dentensity: 308},
    {name: "Piastów", township: "pruszkowski", province: "mazowieckie", area: 5.76, people: 22732, dentensity: 3947},
    {
        name: "Piechowice",
        township: "jeleniogórski",
        province: "dolnośląskie",
        area: 43.22,
        people: 6314,
        dentensity: 146
    },
    {
        name: "Piekary Śląskie",
        township: "Piekary Śląskie",
        province: "śląskie",
        area: 39.98,
        people: 55652,
        dentensity: 1392
    },
    {
        name: "Pieniężno",
        township: "braniewski",
        province: "warmińsko-mazurskie",
        area: 3.81,
        people: 2802,
        dentensity: 735
    },
    {name: "Pieńsk", township: "zgorzelecki", province: "dolnośląskie", area: 9.92, people: 5866, dentensity: 591},
    {name: "Pierzchnica", township: "kielecki", province: "świętokrzyskie", area: 6.92, people: 1059, dentensity: 153},
    {
        name: "Pieszyce",
        township: "dzierżoniowski",
        province: "dolnośląskie",
        area: 17.72,
        people: 7170,
        dentensity: 405
    },
    {name: "Pilawa", township: "garwoliński", province: "mazowieckie", area: 6.66, people: 4557, dentensity: 684},
    {name: "Pilica", township: "zawierciański", province: "śląskie", area: 8.22, people: 1967, dentensity: 239},
    {name: "Pilzno", township: "dębicki", province: "podkarpackie", area: 16.04, people: 4892, dentensity: 305},
    {name: "Piła", township: "pilski", province: "wielkopolskie", area: 102.68, people: 73791, dentensity: 719},
    {
        name: "Piława Górna",
        township: "dzierżoniowski",
        province: "dolnośląskie",
        area: 20.93,
        people: 6479,
        dentensity: 310
    },
    {name: "Pińczów", township: "pińczowski", province: "świętokrzyskie", area: 14.33, people: 10946, dentensity: 764},
    {name: "Pionki", township: "radomski", province: "mazowieckie", area: 18.40, people: 18618, dentensity: 1012},
    {
        name: "Piotrków Kujawski",
        township: "radziejowski",
        province: "kujawsko-pomorskie",
        area: 9.76,
        people: 4490,
        dentensity: 460
    },
    {
        name: "Piotrków Trybunalski",
        township: "Piotrków Trybunalski",
        province: "łódzkie",
        area: 67.24,
        people: 74312,
        dentensity: 1105
    },
    {name: "Pisz", township: "piski", province: "warmińsko-mazurskie", area: 10.08, people: 19386, dentensity: 1923},
    {
        name: "Piwniczna-Zdrój",
        township: "nowosądecki",
        province: "małopolskie",
        area: 38.30,
        people: 5925,
        dentensity: 155
    },
    {name: "Pleszew", township: "pleszewski", province: "wielkopolskie", area: 13.38, people: 17437, dentensity: 1303},
    {name: "Płock", township: "Płock", province: "mazowieckie", area: 88.04, people: 120787, dentensity: 1372},
    {name: "Płońsk", township: "płoński", province: "mazowieckie", area: 11.60, people: 22214, dentensity: 1915},
    {name: "Płoty", township: "gryficki", province: "zachodniopomorskie", area: 4.12, people: 3995, dentensity: 970},
    {name: "Pniewy", township: "szamotulski", province: "wielkopolskie", area: 9.32, people: 8037, dentensity: 862},
    {name: "Pobiedziska", township: "poznański", province: "wielkopolskie", area: 10.24, people: 9139, dentensity: 892},
    {name: "Poddębice", township: "poddębicki", province: "łódzkie", area: 5.87, people: 7530, dentensity: 1283},
    {name: "Podkowa Leśna", township: "grodziski", province: "mazowieckie", area: 10.13, people: 3875, dentensity: 383},
    {name: "Pogorzela", township: "gostyński", province: "wielkopolskie", area: 4.36, people: 2098, dentensity: 481},
    {name: "Polanica-Zdrój", township: "kłodzki", province: "dolnośląskie", area: 17.22, people: 6381, dentensity: 371},
    {
        name: "Polanów",
        township: "koszaliński",
        province: "zachodniopomorskie",
        area: 7.37,
        people: 2949,
        dentensity: 400
    },
    {name: "Police", township: "policki", province: "zachodniopomorskie", area: 37.31, people: 32970, dentensity: 884},
    {name: "Polkowice", township: "polkowicki", province: "dolnośląskie", area: 23.74, people: 22504, dentensity: 948},
    {name: "Połaniec", township: "staszowski", province: "świętokrzyskie", area: 17.41, people: 8181, dentensity: 470},
    {
        name: "Połczyn-Zdrój",
        township: "świdwiński",
        province: "zachodniopomorskie",
        area: 7.21,
        people: 8181,
        dentensity: 1135
    },
    {name: "Poniatowa", township: "opolski", province: "lubelskie", area: 15.26, people: 9320, dentensity: 611},
    {name: "Poniec", township: "gostyński", province: "wielkopolskie", area: 3.48, people: 2841, dentensity: 816},
    {name: "Poręba", township: "zawierciański", province: "śląskie", area: 39.99, people: 8581, dentensity: 215},
    {name: "Poznań", township: "Poznań", province: "wielkopolskie", area: 261.91, people: 538633, dentensity: 2057},
    {name: "Prabuty", township: "kwidzyński", province: "pomorskie", area: 7.29, people: 8710, dentensity: 1195},
    {name: "Praszka", township: "oleski", province: "opolskie", area: 9.35, people: 7724, dentensity: 826},
    {name: "Prochowice", township: "legnicki", province: "dolnośląskie", area: 9.85, people: 3646, dentensity: 370},
    {name: "Proszowice", township: "proszowicki", province: "małopolskie", area: 7.33, people: 6088, dentensity: 831},
    {name: "Prószków", township: "opolski", province: "opolskie", area: 16.22, people: 2603, dentensity: 160},
    {name: "Pruchnik", township: "jarosławski", province: "podkarpackie", area: 19.91, people: 3772, dentensity: 189},
    {name: "Prudnik", township: "prudnicki", province: "opolskie", area: 20.50, people: 21237, dentensity: 1036},
    {name: "Prusice", township: "trzebnicki", province: "dolnośląskie", area: 10.94, people: 2235, dentensity: 204},
    {name: "Pruszcz Gdański", township: "gdański", province: "pomorskie", area: 16.47, people: 30468, dentensity: 1850},
    {name: "Pruszków", township: "pruszkowski", province: "mazowieckie", area: 19.19, people: 61237, dentensity: 3191},
    {name: "Przasnysz", township: "przasnyski", province: "mazowieckie", area: 25.16, people: 17223, dentensity: 685},
    {name: "Przecław", township: "mielecki", province: "podkarpackie", area: 16.04, people: 1748, dentensity: 109},
    {name: "Przedbórz", township: "radomszczański", province: "łódzkie", area: 6.08, people: 3615, dentensity: 595},
    {name: "Przedecz", township: "kolski", province: "wielkopolskie", area: 2.98, people: 1690, dentensity: 567},
    {name: "Przemków", township: "polkowicki", province: "dolnośląskie", area: 6.17, people: 6217, dentensity: 1008},
    {name: "Przemyśl", township: "Przemyśl", province: "podkarpackie", area: 46.17, people: 61808, dentensity: 1339},
    {name: "Przeworsk", township: "przeworski", province: "podkarpackie", area: 22.13, people: 15452, dentensity: 698},
    {name: "Przysucha", township: "przysuski", province: "mazowieckie", area: 7.02, people: 5934, dentensity: 845},
    {name: "Pszczyna", township: "pszczyński", province: "śląskie", area: 22.49, people: 25906, dentensity: 1152},
    {name: "Pszów", township: "wodzisławski", province: "śląskie", area: 20.44, people: 14114, dentensity: 691},
    {name: "Puck", township: "pucki", province: "pomorskie", area: 4.79, people: 11265, dentensity: 2352},
    {name: "Puławy", township: "puławski", province: "lubelskie", area: 50.49, people: 48114, dentensity: 953},
    {name: "Pułtusk", township: "pułtuski", province: "mazowieckie", area: 23.07, people: 19448, dentensity: 843},
    {name: "Puszczykowo", township: "poznański", province: "wielkopolskie", area: 16.39, people: 9693, dentensity: 591},
    {
        name: "Pyrzyce",
        township: "pyrzycki",
        province: "zachodniopomorskie",
        area: 38.79,
        people: 12709,
        dentensity: 328
    },
    {name: "Pyskowice", township: "gliwicki", province: "śląskie", area: 30.89, people: 18417, dentensity: 596},
    {name: "Pyzdry", township: "wrzesiński", province: "wielkopolskie", area: 12.16, people: 3164, dentensity: 260},
    {name: "Rabka-Zdrój", township: "nowotarski", province: "małopolskie", area: 36.31, people: 12883, dentensity: 355},
    {name: "Raciąż", township: "płoński", province: "mazowieckie", area: 8.40, people: 4437, dentensity: 528},
    {name: "Racibórz", township: "raciborski", province: "śląskie", area: 75.01, people: 55189, dentensity: 736},
    {name: "Radków", township: "kłodzki", province: "dolnośląskie", area: 15.03, people: 2427, dentensity: 161},
    {name: "Radlin", township: "wodzisławski", province: "śląskie", area: 12.53, people: 17861, dentensity: 1425},
    {name: "Radłów", township: "tarnowski", province: "małopolskie", area: 16.83, people: 2780, dentensity: 165},
    {name: "Radom", township: "Radom", province: "mazowieckie", area: 111.80, people: 214566, dentensity: 1919},
    {name: "Radomsko", township: "radomszczański", province: "łódzkie", area: 51.43, people: 46409, dentensity: 902},
    {
        name: "Radomyśl Wielki",
        township: "mielecki",
        province: "podkarpackie",
        area: 8.79,
        people: 3167,
        dentensity: 360
    },
    {name: "Radoszyce", township: "konecki", province: "świętokrzyskie", area: 17.17, people: 3217, dentensity: 187},
    {name: "Radymno", township: "jarosławski", province: "podkarpackie", area: 13.62, people: 5335, dentensity: 392},
    {
        name: "Radziejów",
        township: "radziejowski",
        province: "kujawsko-pomorskie",
        area: 5.69,
        people: 5638,
        dentensity: 991
    },
    {name: "Radzionków", township: "tarnogórski", province: "śląskie", area: 13.20, people: 16798, dentensity: 1273},
    {name: "Radzymin", township: "wołomiński", province: "mazowieckie", area: 23.39, people: 12644, dentensity: 541},
    {
        name: "Radzyń Chełmiński",
        township: "grudziądzki",
        province: "kujawsko-pomorskie",
        area: 1.78,
        people: 1851,
        dentensity: 1040
    },
    {
        name: "Radzyń Podlaski",
        township: "radzyński",
        province: "lubelskie",
        area: 19.31,
        people: 15808,
        dentensity: 819
    },
    {name: "Rajgród", township: "grajewski", province: "podlaskie", area: 35.28, people: 1571, dentensity: 45},
    {name: "Rakoniewice", township: "grodziski", province: "wielkopolskie", area: 3.37, people: 3571, dentensity: 1060},
    {name: "Raszków", township: "ostrowski", province: "wielkopolskie", area: 2.05, people: 2101, dentensity: 1025},
    {name: "Rawa Mazowiecka", township: "rawski", province: "łódzkie", area: 14.28, people: 17480, dentensity: 1224},
    {name: "Rawicz", township: "rawicki", province: "wielkopolskie", area: 7.74, people: 20406, dentensity: 2636},
    {
        name: "Recz",
        township: "choszczeński",
        province: "zachodniopomorskie",
        area: 12.40,
        people: 2930,
        dentensity: 236
    },
    {name: "Reda", township: "wejherowski", province: "pomorskie", area: 33.46, people: 25102, dentensity: 750},
    {name: "Rejowiec", township: "chełmski", province: "lubelskie", area: 6.50, people: 2084, dentensity: 321},
    {
        name: "Rejowiec Fabryczny",
        township: "chełmski",
        province: "lubelskie",
        area: 14.28,
        people: 4396,
        dentensity: 308
    },
    {name: "Resko", township: "łobeski", province: "zachodniopomorskie", area: 4.49, people: 4255, dentensity: 948},
    {
        name: "Reszel",
        township: "kętrzyński",
        province: "warmińsko-mazurskie",
        area: 3.82,
        people: 4615,
        dentensity: 1208
    },
    {name: "Rogoźno", township: "obornicki", province: "wielkopolskie", area: 11.24, people: 11115, dentensity: 989},
    {
        name: "Ropczyce",
        township: "ropczycko-sędziszowski",
        province: "podkarpackie",
        area: 47.10,
        people: 15848,
        dentensity: 336
    },
    {name: "Różan", township: "makowski", province: "mazowieckie", area: 6.66, people: 2755, dentensity: 414},
    {
        name: "Ruciane-Nida",
        township: "piski",
        province: "warmińsko-mazurskie",
        area: 17.07,
        people: 4579,
        dentensity: 268
    },
    {name: "Ruda Śląska", township: "Ruda Śląska", province: "śląskie", area: 77.73, people: 138578, dentensity: 1783},
    {
        name: "Rudnik nad Sanem",
        township: "niżański",
        province: "podkarpackie",
        area: 36.60,
        people: 6728,
        dentensity: 184
    },
    {name: "Rumia", township: "wejherowski", province: "pomorskie", area: 30.10, people: 48632, dentensity: 1616},
    {name: "Rybnik", township: "Rybnik", province: "śląskie", area: 148.36, people: 139129, dentensity: 938},
    {name: "Rychwał", township: "koniński", province: "wielkopolskie", area: 9.70, people: 2379, dentensity: 245},
    {name: "Rydułtowy", township: "wodzisławski", province: "śląskie", area: 14.95, people: 21700, dentensity: 1452},
    {name: "Rydzyna", township: "leszczyński", province: "wielkopolskie", area: 2.20, people: 2811, dentensity: 1278},
    {name: "Ryglice", township: "tarnowski", province: "małopolskie", area: 25.15, people: 2831, dentensity: 113},
    {name: "Ryki", township: "rycki", province: "lubelskie", area: 27.22, people: 9768, dentensity: 351},
    {name: "Rymanów", township: "krośnieński", province: "podkarpackie", area: 12.39, people: 3792, dentensity: 306},
    {name: "Ryn", township: "giżycki", province: "warmińsko-mazurskie", area: 4.14, people: 2865, dentensity: 692},
    {name: "Rypin", township: "rypiński", province: "kujawsko-pomorskie", area: 10.96, people: 16482, dentensity: 1504},
    {name: "Rzepin", township: "słubicki", province: "lubuskie", area: 11.42, people: 6590, dentensity: 577},
    {name: "Rzeszów", township: "Rzeszów", province: "podkarpackie", area: 120.41, people: 189662, dentensity: 1575},
    {name: "Rzgów", township: "łódzki wschodni", province: "łódzkie", area: 16.77, people: 3385, dentensity: 202},
    {
        name: "Sandomierz",
        township: "sandomierski",
        province: "świętokrzyskie",
        area: 28.69,
        people: 23863,
        dentensity: 832
    },
    {name: "Sanniki", township: "gostyniński", province: "mazowieckie", area: 11.76, people: 1994, dentensity: 170},
    {name: "Sanok", township: "sanocki", province: "podkarpackie", area: 38.08, people: 37980, dentensity: 997},
    {name: "Sejny", township: "sejneński", province: "podlaskie", area: 4.49, people: 5472, dentensity: 1219},
    {name: "Serock", township: "legionowski", province: "mazowieckie", area: 13.43, people: 4353, dentensity: 324},
    {
        name: "Sędziszów",
        township: "jędrzejowski",
        province: "świętokrzyskie",
        area: 7.92,
        people: 6494,
        dentensity: 820
    },
    {
        name: "Sędziszów Małopolski",
        township: "ropczycko-sędziszowski",
        province: "podkarpackie",
        area: 9.96,
        people: 7524,
        dentensity: 755
    },
    {
        name: "Sępopol",
        township: "bartoszycki",
        province: "warmińsko-mazurskie",
        area: 4.63,
        people: 1970,
        dentensity: 425
    },
    {
        name: "Sępólno Krajeńskie",
        township: "sępoleński",
        province: "kujawsko-pomorskie",
        area: 6.55,
        people: 9243,
        dentensity: 1411
    },
    {
        name: "Sianów",
        township: "koszaliński",
        province: "zachodniopomorskie",
        area: 15.88,
        people: 6666,
        dentensity: 420
    },
    {name: "Siechnice", township: "wrocławski", province: "dolnośląskie", area: 15.63, people: 7410, dentensity: 474},
    {name: "Siedlce", township: "Siedlce", province: "mazowieckie", area: 31.86, people: 77653, dentensity: 2437},
    {name: "Siedliszcze", township: "chełmski", province: "lubelskie", area: 13.16, people: 1418, dentensity: 108},
    {
        name: "Siemianowice Śląskie",
        township: "Siemianowice Śląskie",
        province: "śląskie",
        area: 25.50,
        people: 67523,
        dentensity: 2648
    },
    {name: "Siemiatycze", township: "siemiatycki", province: "podlaskie", area: 36.25, people: 14590, dentensity: 402},
    {name: "Sieniawa", township: "przeworski", province: "podkarpackie", area: 6.74, people: 2146, dentensity: 318},
    {name: "Sieradz", township: "sieradzki", province: "łódzkie", area: 51.22, people: 42570, dentensity: 831},
    {
        name: "Sieraków",
        township: "międzychodzki",
        province: "wielkopolskie",
        area: 14.08,
        people: 6046,
        dentensity: 429
    },
    {name: "Sierpc", township: "sierpecki", province: "mazowieckie", area: 18.59, people: 18148, dentensity: 976},
    {name: "Siewierz", township: "będziński", province: "śląskie", area: 38.66, people: 5520, dentensity: 143},
    {
        name: "Skalbmierz",
        township: "kazimierski",
        province: "świętokrzyskie",
        area: 7.13,
        people: 1292,
        dentensity: 181
    },
    {name: "Skała", township: "krakowski", province: "małopolskie", area: 2.97, people: 3770, dentensity: 1269},
    {name: "Skarszewy", township: "starogardzki", province: "pomorskie", area: 10.79, people: 7103, dentensity: 658},
    {name: "Skaryszew", township: "radomski", province: "mazowieckie", area: 27.49, people: 4375, dentensity: 159},
    {
        name: "Skarżysko-Kamienna",
        township: "skarżyski",
        province: "świętokrzyskie",
        area: 64.39,
        people: 45953,
        dentensity: 714
    },
    {name: "Skawina", township: "krakowski", province: "małopolskie", area: 20.50, people: 24325, dentensity: 1187},
    {name: "Skępe", township: "lipnowski", province: "kujawsko-pomorskie", area: 7.48, people: 3607, dentensity: 482},
    {name: "Skierniewice", township: "Skierniewice", province: "łódzkie", area: 34.60, people: 48308, dentensity: 1396},
    {name: "Skoczów", township: "cieszyński", province: "śląskie", area: 9.85, people: 14504, dentensity: 1472},
    {name: "Skoki", township: "wągrowiecki", province: "wielkopolskie", area: 11.20, people: 4314, dentensity: 385},
    {name: "Skórcz", township: "starogardzki", province: "pomorskie", area: 3.63, people: 3609, dentensity: 994},
    {name: "Skwierzyna", township: "międzyrzecki", province: "lubuskie", area: 35.89, people: 9669, dentensity: 269},
    {name: "Sława", township: "wschowski", province: "lubuskie", area: 14.90, people: 4311, dentensity: 289},
    {name: "Sławków", township: "będziński", province: "śląskie", area: 36.67, people: 7040, dentensity: 192},
    {
        name: "Sławno",
        township: "sławieński",
        province: "zachodniopomorskie",
        area: 15.83,
        people: 12590,
        dentensity: 795
    },
    {name: "Słomniki", township: "krakowski", province: "małopolskie", area: 3.43, people: 4359, dentensity: 1271},
    {name: "Słubice", township: "słubicki", province: "lubuskie", area: 19.21, people: 16816, dentensity: 875},
    {name: "Słupca", township: "słupecki", province: "wielkopolskie", area: 10.30, people: 13851, dentensity: 1345},
    {name: "Słupsk", township: "Słupsk", province: "pomorskie", area: 43.15, people: 91465, dentensity: 2120},
    {name: "Sobótka", township: "wrocławski", province: "dolnośląskie", area: 32.20, people: 6951, dentensity: 216},
    {
        name: "Sochaczew",
        township: "sochaczewski",
        province: "mazowieckie",
        area: 26.19,
        people: 36790,
        dentensity: 1405
    },
    {
        name: "Sokołów Małopolski",
        township: "rzeszowski",
        province: "podkarpackie",
        area: 15.54,
        people: 4133,
        dentensity: 266
    },
    {
        name: "Sokołów Podlaski",
        township: "sokołowski",
        province: "mazowieckie",
        area: 17.51,
        people: 18924,
        dentensity: 1081
    },
    {name: "Sokółka", township: "sokólski", province: "podlaskie", area: 18.59, people: 18331, dentensity: 986},
    {
        name: "Solec Kujawski",
        township: "bydgoski",
        province: "kujawsko-pomorskie",
        area: 18.68,
        people: 15661,
        dentensity: 838
    },
    {name: "Sompolno", township: "koniński", province: "wielkopolskie", area: 6.21, people: 3587, dentensity: 578},
    {name: "Sopot", township: "Sopot", province: "pomorskie", area: 17.28, people: 36533, dentensity: 2114},
    {name: "Sosnowiec", township: "Sosnowiec", province: "śląskie", area: 91.06, people: 204013, dentensity: 2240},
    {name: "Sośnicowice", township: "gliwicki", province: "śląskie", area: 11.67, people: 1881, dentensity: 161},
    {
        name: "Stalowa Wola",
        township: "stalowowolski",
        province: "podkarpackie",
        area: 82.52,
        people: 61903,
        dentensity: 750
    },
    {
        name: "Starachowice",
        township: "starachowicki",
        province: "świętokrzyskie",
        area: 31.82,
        people: 49513,
        dentensity: 1556
    },
    {
        name: "Stargard",
        township: "stargardzki",
        province: "zachodniopomorskie",
        area: 48.08,
        people: 68195,
        dentensity: 1418
    },
    {
        name: "Starogard Gdański",
        township: "starogardzki",
        province: "pomorskie",
        area: 25.28,
        people: 48060,
        dentensity: 1901
    },
    {name: "Stary Sącz", township: "nowosądecki", province: "małopolskie", area: 15.00, people: 9020, dentensity: 601},
    {name: "Staszów", township: "staszowski", province: "świętokrzyskie", area: 26.88, people: 14942, dentensity: 556},
    {name: "Stawiski", township: "kolneński", province: "podlaskie", area: 13.24, people: 2229, dentensity: 168},
    {name: "Stawiszyn", township: "kaliski", province: "wielkopolskie", area: 0.99, people: 1530, dentensity: 1545},
    {name: "Stąporków", township: "konecki", province: "świętokrzyskie", area: 10.94, people: 5754, dentensity: 526},
    {
        name: "Stepnica",
        township: "goleniowski",
        province: "zachodniopomorskie",
        area: 3.40,
        people: 2478,
        dentensity: 729
    },
    {name: "Stęszew", township: "poznański", province: "wielkopolskie", area: 5.69, people: 5952, dentensity: 1046},
    {name: "Stoczek Łukowski", township: "łukowski", province: "lubelskie", area: 9.15, people: 2556, dentensity: 279},
    {name: "Stopnica", township: "buski", province: "świętokrzyskie", area: 4.55, people: 1434, dentensity: 315},
    {
        name: "Stronie Śląskie",
        township: "kłodzki",
        province: "dolnośląskie",
        area: 2.38,
        people: 5755,
        dentensity: 2418
    },
    {name: "Strumień", township: "cieszyński", province: "śląskie", area: 6.29, people: 3696, dentensity: 588},
    {name: "Stryków", township: "zgierski", province: "łódzkie", area: 8.15, people: 3493, dentensity: 429},
    {name: "Strzegom", township: "świdnicki", province: "dolnośląskie", area: 20.49, people: 16272, dentensity: 794},
    {
        name: "Strzelce Krajeńskie",
        township: "strzelecko-drezdenecki",
        province: "lubuskie",
        area: 5.54,
        people: 10012,
        dentensity: 1807
    },
    {
        name: "Strzelce Opolskie",
        township: "strzelecki",
        province: "opolskie",
        area: 29.97,
        people: 18057,
        dentensity: 603
    },
    {name: "Strzelin", township: "strzeliński", province: "dolnośląskie", area: 10.34, people: 12423, dentensity: 1201},
    {
        name: "Strzelno",
        township: "mogileński",
        province: "kujawsko-pomorskie",
        area: 4.46,
        people: 5701,
        dentensity: 1278
    },
    {name: "Strzyżów", township: "strzyżowski", province: "podkarpackie", area: 13.89, people: 8893, dentensity: 640},
    {name: "Sucha Beskidzka", township: "suski", province: "małopolskie", area: 27.65, people: 9295, dentensity: 336},
    {
        name: "Suchań",
        township: "stargardzki",
        province: "zachodniopomorskie",
        area: 3.57,
        people: 1490,
        dentensity: 417
    },
    {name: "Suchedniów", township: "skarżyski", province: "świętokrzyskie", area: 59.40, people: 8478, dentensity: 143},
    {name: "Suchowola", township: "sokólski", province: "podlaskie", area: 25.95, people: 2196, dentensity: 85},
    {name: "Sulechów", township: "zielonogórski", province: "lubuskie", area: 6.88, people: 17012, dentensity: 2473},
    {name: "Sulejów", township: "piotrkowski", province: "łódzkie", area: 26.26, people: 6226, dentensity: 237},
    {name: "Sulejówek", township: "miński", province: "mazowieckie", area: 19.31, people: 19663, dentensity: 1018},
    {name: "Sulęcin", township: "sulęciński", province: "lubuskie", area: 8.56, people: 10168, dentensity: 1188},
    {
        name: "Sulmierzyce",
        township: "krotoszyński",
        province: "wielkopolskie",
        area: 29.29,
        people: 2899,
        dentensity: 99
    },
    {name: "Sułkowice", township: "myślenicki", province: "małopolskie", area: 16.46, people: 6614, dentensity: 402},
    {name: "Supraśl", township: "białostocki", province: "podlaskie", area: 5.69, people: 4621, dentensity: 821},
    {name: "Suraż", township: "białostocki", province: "podlaskie", area: 33.86, people: 992, dentensity: 29},
    {name: "Susz", township: "iławski", province: "warmińsko-mazurskie", area: 6.67, people: 5586, dentensity: 837},
    {name: "Suwałki", township: "Suwałki", province: "podlaskie", area: 65.51, people: 69554, dentensity: 1062},
    {name: "Swarzędz", township: "poznański", province: "wielkopolskie", area: 8.23, people: 30739, dentensity: 3735},
    {name: "Syców", township: "oleśnicki", province: "dolnośląskie", area: 17.05, people: 10413, dentensity: 611},
    {name: "Szadek", township: "zduńskowolski", province: "łódzkie", area: 17.93, people: 1957, dentensity: 109},
    {name: "Szamocin", township: "chodzieski", province: "wielkopolskie", area: 4.67, people: 4302, dentensity: 921},
    {
        name: "Szamotuły",
        township: "szamotulski",
        province: "wielkopolskie",
        area: 11.08,
        people: 18835,
        dentensity: 1700
    },
    {name: "Szczawnica", township: "nowotarski", province: "małopolskie", area: 32.90, people: 5807, dentensity: 177},
    {
        name: "Szczawno-Zdrój",
        township: "wałbrzyski",
        province: "dolnośląskie",
        area: 14.74,
        people: 5650,
        dentensity: 383
    },
    {name: "Szczebrzeszyn", township: "zamojski", province: "lubelskie", area: 29.12, people: 5117, dentensity: 176},
    {
        name: "Szczecin",
        township: "Szczecin",
        province: "zachodniopomorskie",
        area: 300.60,
        people: 403883,
        dentensity: 1344
    },
    {
        name: "Szczecinek",
        township: "szczecinecki",
        province: "zachodniopomorskie",
        area: 48.48,
        people: 40292,
        dentensity: 831
    },
    {name: "Szczekociny", township: "zawierciański", province: "śląskie", area: 18.03, people: 3679, dentensity: 206},
    {name: "Szczucin", township: "dąbrowski", province: "małopolskie", area: 6.85, people: 4163, dentensity: 608},
    {name: "Szczuczyn", township: "grajewski", province: "podlaskie", area: 13.23, people: 3426, dentensity: 259},
    {name: "Szczyrk", township: "bielski", province: "śląskie", area: 39.07, people: 5699, dentensity: 146},
    {name: "Szczytna", township: "kłodzki", province: "dolnośląskie", area: 80.38, people: 5242, dentensity: 65},
    {
        name: "Szczytno",
        township: "szczycieński",
        province: "warmińsko-mazurskie",
        area: 10.62,
        people: 23500,
        dentensity: 2213
    },
    {
        name: "Szepietowo",
        township: "wysokomazowiecki",
        province: "podlaskie",
        area: 1.96,
        people: 2209,
        dentensity: 1127
    },
    {
        name: "Szklarska Poręba",
        township: "jeleniogórski",
        province: "dolnośląskie",
        area: 75.44,
        people: 6681,
        dentensity: 89
    },
    {name: "Szlichtyngowa", township: "wschowski", province: "lubuskie", area: 1.55, people: 1289, dentensity: 832},
    {name: "Szprotawa", township: "żagański", province: "lubuskie", area: 10.95, people: 11944, dentensity: 1091},
    {name: "Sztum", township: "sztumski", province: "pomorskie", area: 4.59, people: 10127, dentensity: 2206},
    {name: "Szubin", township: "nakielski", province: "kujawsko-pomorskie", area: 7.65, people: 9602, dentensity: 1255},
    {
        name: "Szydłowiec",
        township: "szydłowiecki",
        province: "mazowieckie",
        area: 21.89,
        people: 11854,
        dentensity: 542
    },
    {name: "Szydłów", township: "staszowski", province: "świętokrzyskie", area: 16.21, people: 1111, dentensity: 69},
    {name: "Ścinawa", township: "lubiński", province: "dolnośląskie", area: 13.54, people: 5677, dentensity: 419},
    {name: "Ślesin", township: "koniński", province: "wielkopolskie", area: 7.18, people: 3135, dentensity: 437},
    {name: "Śmigiel", township: "kościański", province: "wielkopolskie", area: 5.3, people: 5719, dentensity: 1079},
    {name: "Śrem", township: "śremski", province: "wielkopolskie", area: 12.37, people: 29845, dentensity: 2413},
    {name: "Środa Śląska", township: "średzki", province: "dolnośląskie", area: 14.94, people: 9428, dentensity: 631},
    {
        name: "Środa Wielkopolska",
        township: "średzki",
        province: "wielkopolskie",
        area: 21.92,
        people: 23162,
        dentensity: 1057
    },
    {
        name: "Świątniki Górne",
        township: "krakowski",
        province: "małopolskie",
        area: 4.44,
        people: 2422,
        dentensity: 545
    },
    {name: "Świdnica", township: "świdnicki", province: "dolnośląskie", area: 21.76, people: 57671, dentensity: 2650},
    {name: "Świdnik", township: "świdnicki", province: "lubelskie", area: 20.35, people: 39732, dentensity: 1952},
    {
        name: "Świdwin",
        township: "świdwiński",
        province: "zachodniopomorskie",
        area: 22.38,
        people: 15725,
        dentensity: 703
    },
    {name: "Świebodzice", township: "świdnicki", province: "dolnośląskie", area: 30.43, people: 22840, dentensity: 751},
    {name: "Świebodzin", township: "świebodziński", province: "lubuskie", area: 16.93, people: 21954, dentensity: 1297},
    {
        name: "Świecie",
        township: "świecki",
        province: "kujawsko-pomorskie",
        area: 11.87,
        people: 25924,
        dentensity: 2184
    },
    {
        name: "Świeradów-Zdrój",
        township: "lubański",
        province: "dolnośląskie",
        area: 20.72,
        people: 4209,
        dentensity: 203
    },
    {name: "Świerzawa", township: "złotoryjski", province: "dolnośląskie", area: 1.76, people: 2315, dentensity: 1315},
    {
        name: "Świętochłowice",
        township: "Świętochłowice",
        province: "śląskie",
        area: 13.31,
        people: 50385,
        dentensity: 3785
    },
    {
        name: "Świnoujście",
        township: "Świnoujście",
        province: "zachodniopomorskie",
        area: 202.07,
        people: 41032,
        dentensity: 203
    },
    {name: "Tarczyn", township: "piaseczyński", province: "mazowieckie", area: 5.23, people: 4105, dentensity: 785},
    {name: "Tarnobrzeg", township: "Tarnobrzeg", province: "podkarpackie", area: 85.40, people: 47387, dentensity: 555},
    {name: "Tarnogród", township: "biłgorajski", province: "lubelskie", area: 10.69, people: 3395, dentensity: 318},
    {
        name: "Tarnowskie Góry",
        township: "tarnogórski",
        province: "śląskie",
        area: 83.72,
        people: 61262,
        dentensity: 732
    },
    {name: "Tarnów", township: "Tarnów", province: "małopolskie", area: 72.38, people: 109650, dentensity: 1515},
    {name: "Tczew", township: "tczewski", province: "pomorskie", area: 22.38, people: 60257, dentensity: 2692},
    {name: "Terespol", township: "bialski", province: "lubelskie", area: 10.11, people: 5594, dentensity: 553},
    {name: "Tłuszcz", township: "wołomiński", province: "mazowieckie", area: 7.91, people: 8127, dentensity: 1027},
    {
        name: "Tolkmicko",
        township: "elbląski",
        province: "warmińsko-mazurskie",
        area: 2.29,
        people: 2719,
        dentensity: 1187
    },
    {
        name: "Tomaszów Lubelski",
        township: "tomaszowski",
        province: "lubelskie",
        area: 13.29,
        people: 19365,
        dentensity: 1467
    },
    {
        name: "Tomaszów Mazowiecki",
        township: "tomaszowski",
        province: "łódzkie",
        area: 41.30,
        people: 63238,
        dentensity: 1531
    },
    {name: "Toruń", township: "Toruń", province: "kujawsko-pomorskie", area: 115.72, people: 202562, dentensity: 1750},
    {name: "Torzym", township: "sulęciński", province: "lubuskie", area: 9.11, people: 2529, dentensity: 278},
    {name: "Toszek", township: "gliwicki", province: "śląskie", area: 9.71, people: 3596, dentensity: 370},
    {
        name: "Trzcianka",
        township: "czarnkowsko-trzcianecki",
        province: "wielkopolskie",
        area: 18.30,
        people: 17228,
        dentensity: 941
    },
    {name: "Trzciel", township: "międzyrzecki", province: "lubuskie", area: 3.04, people: 2445, dentensity: 804},
    {
        name: "Trzcińsko-Zdrój",
        township: "gryfiński",
        province: "zachodniopomorskie",
        area: 2.33,
        people: 2297,
        dentensity: 986
    },
    {
        name: "Trzebiatów",
        township: "gryficki",
        province: "zachodniopomorskie",
        area: 10.25,
        people: 10025,
        dentensity: 978
    },
    {name: "Trzebinia", township: "chrzanowski", province: "małopolskie", area: 31.94, people: 19954, dentensity: 625},
    {name: "Trzebnica", township: "trzebnicki", province: "dolnośląskie", area: 10.61, people: 13261, dentensity: 1250},
    {
        name: "Trzemeszno",
        township: "gnieźnieński",
        province: "wielkopolskie",
        area: 5.46,
        people: 7752,
        dentensity: 1420
    },
    {
        name: "Tuchola",
        township: "tucholski",
        province: "kujawsko-pomorskie",
        area: 17.69,
        people: 13793,
        dentensity: 780
    },
    {name: "Tuchów", township: "tarnowski", province: "małopolskie", area: 18.10, people: 6693, dentensity: 370},
    {name: "Tuczno", township: "wałecki", province: "zachodniopomorskie", area: 9.21, people: 1931, dentensity: 210},
    {name: "Tuliszków", township: "turecki", province: "wielkopolskie", area: 7.00, people: 3322, dentensity: 475},
    {name: "Tułowice", township: "opolski", province: "opolskie", area: 9.23, people: 4000, dentensity: 433},
    {name: "Turek", township: "turecki", province: "wielkopolskie", area: 16.17, people: 27311, dentensity: 1689},
    {name: "Tuszyn", township: "łódzki wschodni", province: "łódzkie", area: 23.25, people: 7293, dentensity: 314},
    {name: "Twardogóra", township: "oleśnicki", province: "dolnośląskie", area: 8.29, people: 6784, dentensity: 818},
    {
        name: "Tychowo",
        township: "białogardzki",
        province: "zachodniopomorskie",
        area: 3.96,
        people: 2495,
        dentensity: 630
    },
    {name: "Tychy", township: "Tychy", province: "śląskie", area: 81.81, people: 128211, dentensity: 1567},
    {name: "Tyczyn", township: "rzeszowski", province: "podkarpackie", area: 9.67, people: 3805, dentensity: 393},
    {name: "Tykocin", township: "białostocki", province: "podlaskie", area: 28.97, people: 1980, dentensity: 68},
    {name: "Tyszowce", township: "tomaszowski", province: "lubelskie", area: 18.52, people: 2120, dentensity: 114},
    {name: "Ujazd", township: "strzelecki", province: "opolskie", area: 14.76, people: 1770, dentensity: 120},
    {name: "Ujście", township: "pilski", province: "wielkopolskie", area: 5.78, people: 3738, dentensity: 647},
    {name: "Ulanów", township: "niżański", province: "podkarpackie", area: 8.20, people: 1405, dentensity: 171},
    {name: "Uniejów", township: "poddębicki", province: "łódzkie", area: 12.23, people: 3011, dentensity: 246},
    {name: "Urzędów", township: "kraśnicki", province: "lubelskie", area: 12.91, people: 1703, dentensity: 132},
    {name: "Ustka", township: "słupski", province: "pomorskie", area: 10.19, people: 15709, dentensity: 1542},
    {name: "Ustroń", township: "cieszyński", province: "śląskie", area: 59.03, people: 16108, dentensity: 273},
    {
        name: "Ustrzyki Dolne",
        township: "bieszczadzki",
        province: "podkarpackie",
        area: 16.79,
        people: 9176,
        dentensity: 547
    },
    {name: "Wadowice", township: "wadowicki", province: "małopolskie", area: 10.54, people: 18851, dentensity: 1789},
    {name: "Wałbrzych", township: "Wałbrzych", province: "dolnośląskie", area: 84.70, people: 113621, dentensity: 1341},
    {name: "Wałcz", township: "wałecki", province: "zachodniopomorskie", area: 38.17, people: 25533, dentensity: 669},
    {name: "Warka", township: "grójecki", province: "mazowieckie", area: 26.77, people: 11894, dentensity: 444},
    {name: "Warszawa", township: "Warszawa", province: "mazowieckie", area: 517.24, people: 1764615, dentensity: 3412},
    {name: "Warta", township: "sieradzki", province: "łódzkie", area: 10.85, people: 3258, dentensity: 300},
    {name: "Wasilków", township: "białostocki", province: "podlaskie", area: 28.26, people: 11074, dentensity: 392},
    {
        name: "Wąbrzeźno",
        township: "wąbrzeski",
        province: "kujawsko-pomorskie",
        area: 8.53,
        people: 13749,
        dentensity: 1612
    },
    {
        name: "Wąchock",
        township: "starachowicki",
        province: "świętokrzyskie",
        area: 16.02,
        people: 2795,
        dentensity: 174
    },
    {
        name: "Wągrowiec",
        township: "wągrowiecki",
        province: "wielkopolskie",
        area: 17.83,
        people: 25607,
        dentensity: 1436
    },
    {name: "Wąsosz", township: "górowski", province: "dolnośląskie", area: 3.24, people: 2688, dentensity: 830},
    {name: "Wejherowo", township: "wejherowski", province: "pomorskie", area: 26.99, people: 49927, dentensity: 1850},
    {name: "Węgliniec", township: "zgorzelecki", province: "dolnośląskie", area: 8.73, people: 2868, dentensity: 329},
    {
        name: "Węgorzewo",
        township: "węgorzewski",
        province: "warmińsko-mazurskie",
        area: 10.88,
        people: 11438,
        dentensity: 1051
    },
    {name: "Węgorzyno", township: "łobeski", province: "zachodniopomorskie", area: 6.85, people: 2865, dentensity: 418},
    {name: "Węgrów", township: "węgrowski", province: "mazowieckie", area: 35.51, people: 12765, dentensity: 359},
    {name: "Wiązów", township: "strzeliński", province: "dolnośląskie", area: 9.16, people: 2296, dentensity: 251},
    {
        name: "Wielbark",
        township: "szczycieński",
        province: "warmińsko-mazurskie",
        area: 18.42,
        people: 3065,
        dentensity: 166
    },
    {
        name: "Wieleń",
        township: "czarnkowsko-trzcianecki",
        province: "wielkopolskie",
        area: 4.46,
        people: 5988,
        dentensity: 1343
    },
    {name: "Wielichowo", township: "grodziski", province: "wielkopolskie", area: 1.24, people: 1767, dentensity: 1425},
    {name: "Wieliczka", township: "wielicki", province: "małopolskie", area: 13.41, people: 22946, dentensity: 1711},
    {name: "Wieluń", township: "wieluński", province: "łódzkie", area: 16.87, people: 22794, dentensity: 1351},
    {name: "Wieruszów", township: "wieruszowski", province: "łódzkie", area: 5.97, people: 8600, dentensity: 1441},
    {
        name: "Więcbork",
        township: "sępoleński",
        province: "kujawsko-pomorskie",
        area: 4.31,
        people: 5969,
        dentensity: 1385
    },
    {name: "Wilamowice", township: "bielski", province: "śląskie", area: 10.36, people: 3065, dentensity: 296},
    {name: "Wisła", township: "cieszyński", province: "śląskie", area: 110.17, people: 11106, dentensity: 101},
    {name: "Wiślica", township: "buski", province: "świętokrzyskie", area: 4.70, people: 500, dentensity: 106},
    {name: "Witkowo", township: "gnieźnieński", province: "wielkopolskie", area: 8.31, people: 7873, dentensity: 947},
    {name: "Witnica", township: "gorzowski", province: "lubuskie", area: 8.24, people: 6821, dentensity: 828},
    {name: "Wleń", township: "lwówecki", province: "dolnośląskie", area: 7.22, people: 1806, dentensity: 250},
    {name: "Władysławowo", township: "pucki", province: "pomorskie", area: 13.67, people: 10009, dentensity: 732},
    {
        name: "Włocławek",
        township: "Włocławek",
        province: "kujawsko-pomorskie",
        area: 84.32,
        people: 111752,
        dentensity: 1325
    },
    {name: "Włodawa", township: "włodawski", province: "lubelskie", area: 17.97, people: 13350, dentensity: 743},
    {
        name: "Włoszczowa",
        township: "włoszczowski",
        province: "świętokrzyskie",
        area: 30.30,
        people: 10096,
        dentensity: 333
    },
    {
        name: "Wodzisław Śląski",
        township: "wodzisławski",
        province: "śląskie",
        area: 49.51,
        people: 48345,
        dentensity: 976
    },
    {name: "Wojcieszów", township: "złotoryjski", province: "dolnośląskie", area: 32.17, people: 3696, dentensity: 115},
    {name: "Wojkowice", township: "będziński", province: "śląskie", area: 12.79, people: 8984, dentensity: 702},
    {name: "Wojnicz", township: "tarnowski", province: "małopolskie", area: 8.50, people: 3365, dentensity: 396},
    {name: "Wolbórz", township: "piotrkowski", province: "łódzkie", area: 15.18, people: 2336, dentensity: 154},
    {name: "Wolbrom", township: "olkuski", province: "małopolskie", area: 10.12, people: 8686, dentensity: 858},
    {name: "Wolin", township: "kamieński", province: "zachodniopomorskie", area: 14.47, people: 4842, dentensity: 335},
    {name: "Wolsztyn", township: "wolsztyński", province: "wielkopolskie", area: 4.78, people: 13328, dentensity: 2788},
    {name: "Wołczyn", township: "kluczborski", province: "opolskie", area: 7.47, people: 5958, dentensity: 798},
    {name: "Wołomin", township: "wołomiński", province: "mazowieckie", area: 17.24, people: 37164, dentensity: 2156},
    {name: "Wołów", township: "wołowski", province: "dolnośląskie", area: 18.54, people: 12439, dentensity: 671},
    {name: "Woźniki", township: "lubliniecki", province: "śląskie", area: 71.01, people: 4393, dentensity: 62},
    {name: "Wrocław", township: "Wrocław", province: "dolnośląskie", area: 292.82, people: 638586, dentensity: 2181},
    {name: "Wronki", township: "szamotulski", province: "wielkopolskie", area: 5.81, people: 11293, dentensity: 1944},
    {name: "Września", township: "wrzesiński", province: "wielkopolskie", area: 12.73, people: 30279, dentensity: 2379},
    {name: "Wschowa", township: "wschowski", province: "lubuskie", area: 9.25, people: 14084, dentensity: 1523},
    {name: "Wyrzysk", township: "pilski", province: "wielkopolskie", area: 4.12, people: 5163, dentensity: 1253},
    {name: "Wysoka", township: "pilski", province: "wielkopolskie", area: 4.82, people: 2688, dentensity: 558},
    {
        name: "Wysokie Mazowieckie",
        township: "wysokomazowiecki",
        province: "podlaskie",
        area: 15.24,
        people: 9390,
        dentensity: 616
    },
    {name: "Wyszków", township: "wyszkowski", province: "mazowieckie", area: 20.78, people: 26965, dentensity: 1298},
    {name: "Wyszogród", township: "płocki", province: "mazowieckie", area: 12.97, people: 2634, dentensity: 203},
    {name: "Wyśmierzyce", township: "białobrzeski", province: "mazowieckie", area: 16.84, people: 896, dentensity: 53},
    {name: "Zabłudów", township: "białostocki", province: "podlaskie", area: 14.30, people: 2476, dentensity: 173},
    {name: "Zabrze", township: "Zabrze", province: "śląskie", area: 80.40, people: 174349, dentensity: 2169},
    {name: "Zagórów", township: "słupecki", province: "wielkopolskie", area: 3.44, people: 3024, dentensity: 879},
    {name: "Zagórz", township: "sanocki", province: "podkarpackie", area: 22.29, people: 5105, dentensity: 229},
    {name: "Zakliczyn", township: "tarnowski", province: "małopolskie", area: 4.02, people: 1656, dentensity: 412},
    {name: "Zaklików", township: "stalowowolski", province: "podkarpackie", area: 11.42, people: 3017, dentensity: 264},
    {name: "Zakopane", township: "tatrzański", province: "małopolskie", area: 84.26, people: 27266, dentensity: 324},
    {name: "Zakroczym", township: "nowodworski", province: "mazowieckie", area: 19.97, people: 3211, dentensity: 161},
    {name: "Zalewo", township: "iławski", province: "warmińsko-mazurskie", area: 8.22, people: 2165, dentensity: 263},
    {name: "Zambrów", township: "zambrowski", province: "podlaskie", area: 19.02, people: 22173, dentensity: 1166},
    {name: "Zamość", township: "Zamość", province: "lubelskie", area: 30.34, people: 64354, dentensity: 2121},
    {name: "Zator", township: "oświęcimski", province: "małopolskie", area: 11.52, people: 3691, dentensity: 320},
    {name: "Zawadzkie", township: "strzelecki", province: "opolskie", area: 16.46, people: 7250, dentensity: 440},
    {
        name: "Zawichost",
        township: "sandomierski",
        province: "świętokrzyskie",
        area: 20.29,
        people: 1793,
        dentensity: 88
    },
    {name: "Zawidów", township: "zgorzelecki", province: "dolnośląskie", area: 6.07, people: 4232, dentensity: 697},
    {name: "Zawiercie", township: "zawierciański", province: "śląskie", area: 85.25, people: 49908, dentensity: 585},
    {name: "Ząbki", township: "wołomiński", province: "mazowieckie", area: 10.98, people: 35770, dentensity: 3258},
    {
        name: "Ząbkowice Śląskie",
        township: "ząbkowicki",
        province: "dolnośląskie",
        area: 13.67,
        people: 15219,
        dentensity: 1113
    },
    {name: "Zbąszynek", township: "świebodziński", province: "lubuskie", area: 3.58, people: 5042, dentensity: 1408},
    {name: "Zbąszyń", township: "nowotomyski", province: "wielkopolskie", area: 5.42, people: 7265, dentensity: 1340},
    {name: "Zduny", township: "krotoszyński", province: "wielkopolskie", area: 6.20, people: 4543, dentensity: 733},
    {
        name: "Zduńska Wola",
        township: "zduńskowolski",
        province: "łódzkie",
        area: 24.57,
        people: 42374,
        dentensity: 1725
    },
    {name: "Zdzieszowice", township: "krapkowicki", province: "opolskie", area: 12.35, people: 11633, dentensity: 942},
    {name: "Zelów", township: "bełchatowski", province: "łódzkie", area: 10.75, people: 7665, dentensity: 713},
    {name: "Zgierz", township: "zgierski", province: "łódzkie", area: 42.33, people: 56690, dentensity: 1339},
    {
        name: "Zgorzelec",
        township: "zgorzelecki",
        province: "dolnośląskie",
        area: 15.88,
        people: 30738,
        dentensity: 1936
    },
    {
        name: "Zielona Góra",
        township: "Zielona Góra",
        province: "lubuskie",
        area: 278.32,
        people: 139819,
        dentensity: 502
    },
    {name: "Zielonka", township: "wołomiński", province: "mazowieckie", area: 79.48, people: 17539, dentensity: 221},
    {name: "Ziębice", township: "ząbkowicki", province: "dolnośląskie", area: 15.07, people: 8796, dentensity: 584},
    {
        name: "Złocieniec",
        township: "drawski",
        province: "zachodniopomorskie",
        area: 32.28,
        people: 13068,
        dentensity: 405
    },
    {name: "Złoczew", township: "sieradzki", province: "łódzkie", area: 13.79, people: 3351, dentensity: 243},
    {
        name: "Złotoryja",
        township: "złotoryjski",
        province: "dolnośląskie",
        area: 11.51,
        people: 15783,
        dentensity: 1371
    },
    {name: "Złotów", township: "złotowski", province: "wielkopolskie", area: 11.58, people: 18441, dentensity: 1592},
    {name: "Złoty Stok", township: "ząbkowicki", province: "dolnośląskie", area: 7.73, people: 2821, dentensity: 365},
    {name: "Zwierzyniec", township: "zamojski", province: "lubelskie", area: 6.19, people: 3235, dentensity: 523},
    {name: "Zwoleń", township: "zwoleński", province: "mazowieckie", area: 15.91, people: 7855, dentensity: 494},
    {name: "Żabno", township: "tarnowski", province: "małopolskie", area: 11.13, people: 4248, dentensity: 382},
    {name: "Żagań", township: "żagański", province: "lubuskie", area: 40.38, people: 26148, dentensity: 648},
    {name: "Żarki", township: "myszkowski", province: "śląskie", area: 25.44, people: 4539, dentensity: 178},
    {name: "Żarów", township: "świdnicki", province: "dolnośląskie", area: 7.57, people: 6811, dentensity: 900},
    {name: "Żary", township: "żarski", province: "lubuskie", area: 33.49, people: 37907, dentensity: 1132},
    {name: "Żelechów", township: "garwoliński", province: "mazowieckie", area: 12.13, people: 3994, dentensity: 329},
    {name: "Żerków", township: "jarociński", province: "wielkopolskie", area: 2.16, people: 2120, dentensity: 981},
    {name: "Żmigród", township: "trzebnicki", province: "dolnośląskie", area: 9.49, people: 6472, dentensity: 682},
    {name: "Żnin", township: "żniński", province: "kujawsko-pomorskie", area: 8.35, people: 14041, dentensity: 1682},
    {name: "Żory", township: "Żory", province: "śląskie", area: 64.64, people: 62243, dentensity: 963},
    {name: "Żukowo", township: "kartuski", province: "pomorskie", area: 4.73, people: 6677, dentensity: 1412},
    {name: "Żuromin", township: "żuromiński", province: "mazowieckie", area: 11.18, people: 8941, dentensity: 800},
    {name: "Żychlin", township: "kutnowski", province: "łódzkie", area: 8.68, people: 8288, dentensity: 955},
    {name: "Żyrardów", township: "żyrardowski", province: "mazowieckie", area: 14.35, people: 40243, dentensity: 2804},
    {name: "Żywiec", township: "żywiecki", province: "śląskie", area: 50.54, people: 31560, dentensity: 624}
]


console.log("zad1")
console.log(cities.length)
console.log("zad2")
/*let population = 0;
for (let element of cities) {
    population = population + element.people
}
console.log(population)*/
console.log("zad3")
/*let find = cities.find(element => element.people > 10000)
console.log(find)*/
console.log("zad4")
/*
let population = 0;
for (let element of cities) {
    population = population + element.people
}
let middle = population / cities.length


console.log(middle)

for (let element of cities) {
    if (element.people > middle) {
        console.log(element.name)
    }
}
*/

console.log("zad5")
/*for (let element of cities) {
    if (element.people > 10000) {
        console.log(element.name)
    }
}*/
console.log("zad6")
/*
w = 0
m = 0
for (let element of cities) {
    if (element.people > 10000) {
        w++
    }else {
        m++
    }
}
if (w > m){
    console.log("jest wiecej wiekszych miast")
} else {
    console.log("jest wiecej mniejszych miast")

}


*/




