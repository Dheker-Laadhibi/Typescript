let sportsone:string[]=["golf","tennis","foot"];

for(let i=0;i<sportsone.length;i++){

    console.log(sportsone[i]);
}

///lets use simplified loopt 
for(let sport of sportsone){
if (sport == "foot"){

    console.log(sport +""+"its my favourite ");
}
else{
    console.log(sport);
}


}