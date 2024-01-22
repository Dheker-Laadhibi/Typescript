var sportsone = ["golf", "tennis", "foot"];
for (var i = 0; i < sportsone.length; i++) {
    console.log(sportsone[i]);
}
///lets use simplified loopt 
for (var _i = 0, sportsone_1 = sportsone; _i < sportsone_1.length; _i++) {
    var sport = sportsone_1[_i];
    if (sport == "foot") {
        console.log(sport + "" + "its my favourite ");
    }
    else {
        console.log(sport);
    }
}
