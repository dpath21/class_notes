// let netflix = {
//     id: 1,
//     name: "The Office",
//     season1: {
//         seasonInfo: {
//             episodeInfo: [{
//                     episode: 1,
//                     episodeName: "Pilot"
//                 },
//                 {
//                     episode: 2,
//                     episodeName: "Diversity Day"
//                 },
//                 {
//                     episode: 3,
//                     episodeName: "Health Care"
//                 },
//                 {
//                     episode: 4,
//                     episodeName: "The Alliance"
//                 },
//                 {
//                     episode: 5,
//                     episodeName: "Basketball"
//                 },
//                 {
//                     episode: 6,
//                     episodeName: "Hot Girl"
//                 },
//             ]
//         }
//     },
//     season2: {},
//     season3: {}
// };

// console.log(netflix.season1.seasonInfo.episodeInfo[1].episode, netflix.season1.seasonInfo.episodeInfo[1].episodeName);


// Create an object using an object constructor. Call it teacher and assign it properties of FN, LN, class name, and isTenured with property as a boolean

let teacher = new Object //constructs an empty object without having to hard-code one in

teacher.firstName = "Paul";
teacher.lastName = "Niemczyk";
teacher.className = "Web Development";
teacher.isTenured = true;


teacher.whatKind = function() {
    if (this.isTenured) {
        this.kind = "Teacher is tenured"
    } else {
        this.kind = "Teacher is not tenured"
    }
}