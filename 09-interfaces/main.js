"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GolfCoach_1 = require("./GolfCoach");
const CricketCoach_1 = require("./CricketCoach");
let cricketCoach1 = new CricketCoach_1.cricketCoach();
let GolfCoach1 = new GolfCoach_1.GolfCoach();
// declare array for coaches ..
let coaches = [];
//add
coaches.push(cricketCoach1);
coaches.push(GolfCoach1);
for (let tempcoach of coaches) {
    console.log(tempcoach.getDailyWorkout());
}
