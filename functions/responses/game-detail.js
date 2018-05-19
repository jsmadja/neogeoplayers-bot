const _ = require('lodash');
const { Card } = require('dialogflow-fulfillment');

const pricesData =
    [{ "title": "ASO II : Last Guardian", "gamer": "80", "bonEtat": "110", "mint": "150" }, {
        "title": "Andro Dunos",
        "gamer": "600",
        "bonEtat": "800",
        "mint": "1000"
    }, { "title": "Ashita no joe", "gamer": "---", "bonEtat": "200", "mint": "300" }, {
        "title": "Baseball Stars",
        "gamer": "50",
        "bonEtat": "75",
        "mint": "100"
    }, {
        "title": "Baseball Stars BOITE CARTON",
        "gamer": "140",
        "bonEtat": "150",
        "mint": "180"
    }, {
        "title": "Baseball Stars 2",
        "gamer": "70",
        "bonEtat": "120",
        "mint": "140"
    }, { "title": "Big Tournament Golf", "gamer": "$$$", "bonEtat": "$$$", "mint": "$$$" }, {
        "title": "Blazing star",
        "gamer": "$$$",
        "bonEtat": "$$$",
        "mint": "$$$"
    }, { "title": "Breakers", "gamer": "$$$", "bonEtat": "$$$", "mint": "$$$" }, {
        "title": "Burning Fight",
        "gamer": "230",
        "bonEtat": "250",
        "mint": "260"
    }, { "title": "Crossed Swords", "gamer": "50", "bonEtat": "70", "mint": "90" }, {
        "title": "Cyber Lip",
        "gamer": "150",
        "bonEtat": "180",
        "mint": "220"
    }, {
        "title": "Cyber Lip",
        "gamer": "150",
        "bonEtat": "200",
        "mint": "250"
    }, { "title": "Double Dragon", "gamer": "250", "bonEtat": "270", "mint": "300" }, {
        "title": "Dunk Dream",
        "gamer": "220",
        "bonEtat": "250",
        "mint": "280"
    }, { "title": "Eightman", "gamer": "220", "bonEtat": "250", "mint": "280" }, {
        "title": "Fighters History Dynamite",
        "gamer": "50",
        "bonEtat": "60",
        "mint": "80"
    }, { "title": "Fire Suplex", "gamer": "50", "bonEtat": "60", "mint": "70" }, {
        "title": "Flying Power Disc",
        "gamer": "520",
        "bonEtat": "550",
        "mint": "600"
    }, { "title": "Football Frenzy", "gamer": "80", "bonEtat": "90", "mint": "110" }, {
        "title": "Fu'un Mokushiroku",
        "gamer": "210",
        "bonEtat": "230",
        "mint": "250"
    }, {
        "title": "Fu'un Mokushiroku Super Tag Battle",
        "gamer": "800",
        "bonEtat": "900",
        "mint": "1100"
    }, { "title": "Galaxy Fight", "gamer": "90", "bonEtat": "110", "mint": "130" }, {
        "title": "Gan Gan Kyoshinkyoku",
        "gamer": "140",
        "bonEtat": "160",
        "mint": "180"
    }, { "title": "Garou Densetsu", "gamer": "60", "bonEtat": "80", "mint": "100" }, {
        "title": "Garou Densetsu 2",
        "gamer": "30",
        "bonEtat": "40",
        "mint": "50"
    }, {
        "title": "Garou Densetsu Special",
        "gamer": "30",
        "bonEtat": "40",
        "mint": "50"
    }, {
        "title": "Garou Densetsu 3",
        "gamer": "80",
        "bonEtat": "90",
        "mint": "100"
    }, {
        "title": "Garou : Mark Of The Wolves",
        "gamer": "650",
        "bonEtat": "700",
        "mint": "750"
    }, {
        "title": "Gekka No Kenshi/Last Blade",
        "gamer": "210",
        "bonEtat": "230",
        "mint": "260"
    }, {
        "title": "Gekka No Kenshi 2/Last Blade 2",
        "gamer": "500",
        "bonEtat": "520",
        "mint": "550"
    }, { "title": "Ghostlop", "gamer": "---", "bonEtat": "---", "mint": "250" }, {
        "title": "Ghost Pilots",
        "gamer": "130",
        "bonEtat": "150",
        "mint": "180"
    }, {
        "title": "Joy Joy Kid",
        "gamer": "60",
        "bonEtat": "80",
        "mint": "100"
    }, {
        "title": "Joy Joy Kid boîte carton",
        "gamer": "70",
        "bonEtat": "100",
        "mint": "150"
    }, { "title": "Kabuki Klash", "gamer": "150", "bonEtat": "190", "mint": "230" }, {
        "title": "King Of Fighters '94",
        "gamer": "40",
        "bonEtat": "50",
        "mint": "65"
    }, {
        "title": "King Of Fighters '95",
        "gamer": "60",
        "bonEtat": "70",
        "mint": "80"
    }, {
        "title": "King Of Fighters '96",
        "gamer": "60",
        "bonEtat": "70",
        "mint": "90"
    }, {
        "title": "King Of Fighters '97",
        "gamer": "80",
        "bonEtat": "100",
        "mint": "120"
    }, {
        "title": "King Of Fighters '98",
        "gamer": "110",
        "bonEtat": "125",
        "mint": "150"
    }, {
        "title": "King Of Fighters '99",
        "gamer": "120",
        "bonEtat": "140",
        "mint": "160"
    }, {
        "title": "King Of Fighters '00",
        "gamer": "120",
        "bonEtat": "140",
        "mint": "160"
    }, {
        "title": "King Of Fighters '01",
        "gamer": "120",
        "bonEtat": "140",
        "mint": "170"
    }, {
        "title": "King Of Fighters '02",
        "gamer": "140",
        "bonEtat": "170",
        "mint": "200"
    }, {
        "title": "King Of Fighters '03",
        "gamer": "500",
        "bonEtat": "550",
        "mint": "600"
    }, {
        "title": "king of the monsters",
        "gamer": "75",
        "bonEtat": "130",
        "mint": "180"
    }, { "title": "king of the monsters 2", "gamer": "65", "bonEtat": "80", "mint": "100" }, {
        "title": "Last Resort",
        "gamer": "340",
        "bonEtat": "360",
        "mint": "400"
    }, {
        "title": "League Bowling",
        "gamer": "50",
        "bonEtat": "80",
        "mint": "100"
    }, {
        "title": "League Bowling boîte carton",
        "gamer": "80",
        "bonEtat": "120",
        "mint": "180"
    }, {
        "title": "Mahjong Bakatonosama",
        "gamer": "---",
        "bonEtat": "100",
        "mint": "120"
    }, {
        "title": "Mahjong Kyoretsuden",
        "gamer": "---",
        "bonEtat": "---",
        "mint": "---"
    }, {
        "title": "Mahjong Kyoretsuden boîte carton",
        "gamer": "---",
        "bonEtat": "---",
        "mint": "---"
    }, {
        "title": "Mahjong Minasan No",
        "gamer": "---",
        "bonEtat": "---",
        "mint": "---"
    }, {
        "title": "Mahjong Minasan No boîte carton",
        "gamer": "---",
        "bonEtat": "---",
        "mint": "---"
    }, { "title": "Magical Drop 2", "gamer": "---", "bonEtat": "900", "mint": "1000" }, {
        "title": "Magical Drop 3",
        "gamer": "---",
        "bonEtat": "900",
        "mint": "1000"
    }, {
        "title": "Magician Lord",
        "gamer": "120",
        "bonEtat": "140",
        "mint": "150"
    }, {
        "title": "Magician Lord boîte carton",
        "gamer": "170",
        "bonEtat": "200",
        "mint": "230"
    }, { "title": "Master Of Syougi", "gamer": "700", "bonEtat": "800", "mint": "900" }, {
        "title": "Matrimelee",
        "gamer": "460",
        "bonEtat": "500",
        "mint": "600"
    }, { "title": "Metal Slug", "gamer": "$$$$", "bonEtat": "$$$$", "mint": "$$$$" }, {
        "title": "Metal Slug 2",
        "gamer": "1600",
        "bonEtat": "1900",
        "mint": "2200"
    }, {
        "title": "Metal Slug X",
        "gamer": "1500",
        "bonEtat": "1800",
        "mint": "2100"
    }, {
        "title": "Metal Slug 3",
        "gamer": "600",
        "bonEtat": "750",
        "mint": "900"
    }, {
        "title": "Metal Slug 3 2nd run",
        "gamer": "550",
        "bonEtat": "650",
        "mint": "750"
    }, { "title": "Metal Slug 4", "gamer": "550", "bonEtat": "600", "mint": "650" }, {
        "title": "Metal Slug 5",
        "gamer": "800",
        "bonEtat": "950",
        "mint": "1250"
    }, { "title": "Miracle Adventure", "gamer": "200", "bonEtat": "220", "mint": "260" }, {
        "title": "Mutation Nation",
        "gamer": "270",
        "bonEtat": "300",
        "mint": "350"
    }, { "title": "Nam 1975", "gamer": "80", "bonEtat": "120", "mint": "160" }, {
        "title": "Nam 1975 boîte carton",
        "gamer": "120",
        "bonEtat": "150",
        "mint": "190"
    }, { "title": "Neo Geo Cup 98", "gamer": "550", "bonEtat": "650", "mint": "700" }, {
        "title": "Ninja Combat",
        "gamer": "70",
        "bonEtat": "80",
        "mint": "90"
    }, {
        "title": "Ninja Combat",
        "gamer": "120",
        "bonEtat": "150",
        "mint": "200"
    }, { "title": "Ninja Commando", "gamer": "350", "bonEtat": "400", "mint": "450" }, {
        "title": "Ninja Master's",
        "gamer": "800",
        "bonEtat": "900",
        "mint": "1000"
    }, { "title": "Over Top", "gamer": "$$$$", "bonEtat": "$$$$", "mint": "$$$$" }, {
        "title": "Pulstar",
        "gamer": "$$$$",
        "bonEtat": "$$$$",
        "mint": "$$$$"
    }, {
        "title": "Quiz Chibi Maruko-Chan",
        "gamer": "$$$$",
        "bonEtat": "$$$$",
        "mint": "$$$$"
    }, { "title": "Quiz Daisousa", "gamer": "---", "bonEtat": "40", "mint": "60" }, {
        "title": "Quiz King Of Fighters",
        "gamer": "---",
        "bonEtat": "40",
        "mint": "60"
    }, {
        "title": "Rage Of The Dragons",
        "gamer": "800",
        "bonEtat": "900",
        "mint": "1000"
    }, {
        "title": "Raguy",
        "gamer": "100",
        "bonEtat": "120",
        "mint": "150"
    }, {
        "title": "Real Bout Fatal Fury",
        "gamer": "75",
        "bonEtat": "90",
        "mint": "110"
    }, {
        "title": "Real Bout Fatal Fury Special",
        "gamer": "180",
        "bonEtat": "200",
        "mint": "220"
    }, { "title": "Real Bout Fatal Fury 2", "gamer": "220", "bonEtat": "260", "mint": "300" }, {
        "title": "Riding Hero",
        "gamer": "30",
        "bonEtat": "55",
        "mint": "80"
    }, {
        "title": "Riding Hero boîte carton",
        "gamer": "150",
        "bonEtat": "200",
        "mint": "250"
    }, { "title": "Robo Army", "gamer": "180", "bonEtat": "220", "mint": "260" }, {
        "title": "Ryuuko No Ken",
        "gamer": "50",
        "bonEtat": "60",
        "mint": "80"
    }, { "title": "Ryuuko No Ken 2", "gamer": "20", "bonEtat": "40", "mint": "60" }, {
        "title": "Ryuuko No Ken Gaïden",
        "gamer": "200",
        "bonEtat": "240",
        "mint": "300"
    }, { "title": "Samurai Spirits", "gamer": "20", "bonEtat": "35", "mint": "50" }, {
        "title": "Samurai Spirits 2",
        "gamer": "20",
        "bonEtat": "35",
        "mint": "50"
    }, { "title": "Samurai Spirits 3", "gamer": "60", "bonEtat": "80", "mint": "100" }, {
        "title": "Samurai Spirits 4",
        "gamer": "230",
        "bonEtat": "260",
        "mint": "320"
    }, {
        "title": "Samurai Spirits 0",
        "gamer": "500",
        "bonEtat": "550",
        "mint": "600"
    }, {
        "title": "Samurai Spirits 0 Special fixed",
        "gamer": "1400",
        "bonEtat": "1500",
        "mint": "1600"
    }, {
        "title": "Samurai Spirits 0 Special unfixed",
        "gamer": "$$$$",
        "bonEtat": "$$$$",
        "mint": "$$$$"
    }, {
        "title": "Sengoku Densho",
        "gamer": "140",
        "bonEtat": "160",
        "mint": "200"
    }, {
        "title": "Sengoku Densho 2",
        "gamer": "450",
        "bonEtat": "500",
        "mint": "550"
    }, { "title": "Sengoku Densho 2001", "gamer": "$$$", "bonEtat": "$$$", "mint": "$$$" }, {
        "title": "Shin'ouken",
        "gamer": "300",
        "bonEtat": "400",
        "mint": "500"
    }, {
        "title": "Shock Troopers 2nd Squad",
        "gamer": "$$$",
        "bonEtat": "$$$",
        "mint": "$$$"
    }, { "title": "Soccer Brawl", "gamer": "100", "bonEtat": "130", "mint": "160" }, {
        "title": "Sonic Wings 2",
        "gamer": "300",
        "bonEtat": "350",
        "mint": "400"
    }, { "title": "Sonic Wings 3", "gamer": "350", "bonEtat": "450", "mint": "520" }, {
        "title": "Stakes Winner",
        "gamer": "---",
        "bonEtat": "500",
        "mint": "580"
    }, {
        "title": "Stakes Winner 2",
        "gamer": "300",
        "bonEtat": "450",
        "mint": "550"
    }, { "title": "Super Baseball 2020", "gamer": "70", "bonEtat": "85", "mint": "100" }, {
        "title": "SVC Chaos",
        "gamer": "340",
        "bonEtat": "380",
        "mint": "420"
    }, {
        "title": "The Super Spy",
        "gamer": "40",
        "bonEtat": "65",
        "mint": "80"
    }, {
        "title": "The Super Spy boîte carton",
        "gamer": "120",
        "bonEtat": "170",
        "mint": "230"
    }, { "title": "Thrash Rally", "gamer": "60", "bonEtat": "80", "mint": "100" }, {
        "title": "Top Hunter",
        "gamer": "220",
        "bonEtat": "270",
        "mint": "320"
    }, {
        "title": "Top Player Golf",
        "gamer": "35",
        "bonEtat": "55",
        "mint": "80"
    }, {
        "title": "Top Players Golf boîte carton",
        "gamer": "85",
        "bonEtat": "125",
        "mint": "180"
    }, { "title": "Tokuten Oh", "gamer": "70", "bonEtat": "100", "mint": "120" }, {
        "title": "Tokuten Oh 2",
        "gamer": "40",
        "bonEtat": "70",
        "mint": "90"
    }, {
        "title": "Tokuten Oh 3",
        "gamer": "140",
        "bonEtat": "160",
        "mint": "200"
    }, {
        "title": "Tokuten Oh 4: Ultimate 11",
        "gamer": "$$$",
        "bonEtat": "$$$",
        "mint": "$$$"
    }, { "title": "Twinkle Star Sprites", "gamer": "$$$", "bonEtat": "$$$", "mint": "$$$" }, {
        "title": "Viewpoint",
        "gamer": "400",
        "bonEtat": "480",
        "mint": "600"
    }, {
        "title": "Voltage Fighter Gowcaiser",
        "gamer": "350",
        "bonEtat": "400",
        "mint": "450"
    }, { "title": "Waku Waku 7", "gamer": "550", "bonEtat": "600", "mint": "650" }, {
        "title": "World Heroes",
        "gamer": "25",
        "bonEtat": "40",
        "mint": "55"
    }, { "title": "World Heroes 2", "gamer": "25/td]", "bonEtat": "40", "mint": "55" }, {
        "title": "World Heroes 2 Jet",
        "gamer": "30",
        "bonEtat": "45",
        "mint": "60"
    }, { "title": "World Heroes Perfect", "gamer": "250", "bonEtat": "290", "mint": "350" }];

module.exports = agent => {
    const parameters = agent.parameters;
    const gameName = parameters['Game'];
    const gameState = parameters['GameState'];
    let game = _(pricesData).filter(p => p.title.toLowerCase() === gameName.toLowerCase()).value();

    agent.add(new Card({
            title: `Title: ${gameName}`,
            imageUrl: 'http://img.over-blog-kiwi.com/0/67/38/34/20160125/ob_8c4eb1_kof94-neogeo-jaquette.jpg',
            text: `The King of Fighters '94 est un jeu vidéo de combat développé et édité par SNK sur Neo-Geo MVS, Neo-Geo AES et Neo-Geo CD en 1994`,
            buttonText: 'Wikipedia',
            buttonUrl: 'https://fr.wikipedia.org/wiki/The_King_of_Fighters_\'94'
        })
    );
};