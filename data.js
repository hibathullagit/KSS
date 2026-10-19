// ==========================================================
//  KAROTHINGAL SUPER KINGS vs FIGHTERS KAROTHINGAL - match data
// ==========================================================
//  HOW TO USE
//  1. FIXTURES: change the date, time and ground of each match.
//  2. After a match is played: select its template block in
//     MATCHES, remove the // at the start of each line,
//     fill in the scores and players, and save.
//  3. Players who didn't play: leave them at 0, or delete their line.
//  4. Names must match the team pages exactly, in capitals.
// ==========================================================

var TEAM_A = "KAROTHINGAL SUPER KINGS";
var TEAM_B = "FIGHTERS KAROTHINGAL";

// ----- PLAYED MATCHES (scores) -----
// Add each played match inside the [ ] brackets, with a comma after its }.
var MATCHES = [
];

// ----- UPCOMING MATCHES (fixtures) -----
// Add one line per match. Date format: YYYY-MM-DD
// Example (remove the // to use it):
// { no: 1, date: "2026-10-12", time: "4:00 PM", ground: "HSS Mecherikkunnu" },
var FIXTURES = [
];

// ----- MATCH TEMPLATE (copy, then remove the // from each line) -----
// {
//     no: 1,
//     date: "12 Oct 2026",
//     ground: "HSS Mecherikkunnu",
//     a: {
//         runs: 0, wickets: 0, overs: "0",
//         players: [
//             { name: "AJMAL", runs: 0, wickets: 0 },
//             { name: "MIDLAJ", runs: 0, wickets: 0 },
//             { name: "HASBULLA", runs: 0, wickets: 0 },
//             { name: "SHALU", runs: 0, wickets: 0 },
//             { name: "SADIQ", runs: 0, wickets: 0 }
//         ]
//     },
//     b: {
//         runs: 0, wickets: 0, overs: "0",
//         players: [
//             { name: "SHUHAIB", runs: 0, wickets: 0 },
//             { name: "ASJAL", runs: 0, wickets: 0 },
//             { name: "HIBATHULLA", runs: 0, wickets: 0 },
//             { name: "JASIR", runs: 0, wickets: 0 },
//             { name: "SADAQATHULLA", runs: 0, wickets: 0 },
//             { name: "JASAL", runs: 0, wickets: 0 }
//         ]
//     },
//     result: ""
// },
// ----- PHOTOS (file names inside KSS/images) -----
// To change a picture: upload the new file with a NEW name,
// then change its name here.
var PHOTOS = {
    "background": "bg-1.jpg",
    "kss-logo": "kss-logo.png",
    "logo-ksk-players": "team1.png",
    "logo-fk-players": "fighters-logo.png",
    "logo-ksk-page": "ksk-logo.png",
    "logo-fk-page": "fk-logo.png",
    "icon-players": "Players.png",
    "icon-scoreboard": "Scoreboard.png",
    "icon-statistics": "Statistics.png",
    "icon-gallery": "Gallery.png",
    "icon-fixtures": "Fixtures.png",
    "icon-calculator": "Calculator.png",
    "AJMAL": "player1.png",
    "MIDLAJ": "player2.png",
    "HASBULLA": "player3.png",
    "SHALU": "player4.png",
    "SADIQ": "player5.png",
    "SHUHAIB": "fplayer1.png",
    "ASJAL": "fplayer2.png",
    "HIBATHULLA": "fplayer3.png",
    "JASIR": "fplayer4.png",
    "SADAQATHULLA": "fplayer5.png",
    "JASAL": "fplayer6.png"
};

// ----- GALLERY ALBUMS (photos inside KSS/images/gallery) -----
// One line per album. Remove the // to use an example.
var ALBUMS = [
     { title: "", photos: ["gallery/kss1.jpg", "gallery/kss1.jpg"] },
];
