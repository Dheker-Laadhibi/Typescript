import { GolfCoach } from './GolfCoach';
import { cricketCoach } from './CricketCoach';
import { coach } from './coach';
let cricketCoach1 = new cricketCoach();
let GolfCoach1 = new GolfCoach();
// declare array for coaches ..
let coaches:coach[] =[];


//add
coaches.push(cricketCoach1);
coaches.push(GolfCoach1);

for(let tempcoach of coaches){

console.log(tempcoach.getDailyWorkout());



}