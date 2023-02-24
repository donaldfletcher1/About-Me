'use strict';



let userName = prompt("What is your name?")
while(!userName){
  alert('Please type username');
  userName = prompt('what is your name?' );
}
console.log(userName.toUpperCase());
alert("Hello " + userName);

let favFoodResponse = prompt("Do you like pizza?")
if (favFoodResponse.toLowerCase() === 'yes' || favFoodResponse.toLowerCase() === 'y') {
  alert("We love pizza");

}
else if (favFoodResponse.toLowerCase() === 'no') {
  alert('Everyone loves pizza');
}
else{
  alert('I didn\'t understand that')
}
console.log(favFoodResponse);

let coding = prompt("Do you like writing javascript?");
if (coding === 'yes'){
  alert("Everyday We Code");

}
else if (coding === 'no'){
  alert('Please Join Code Fellows');
}
else{
  alert('Please learn software devlopment!');
} 
console.log(coding.toUpperCase());

let favTeam = prompt("Do you like the Raiders Football Team?").toLowerCase();
if (favTeam === 'yes' || favTeam === 'y'){
  alert("Raider Nation is Everywhere");

}
else if (favTeam === 'no' || favTeam === 'n'){
  alert('Come visit Las Vegas');

}
console.log(favTeam);


let favFoodResponse2 = prompt("Do you like mexican food?").toLowerCase ();
if (favFoodResponse2 === 'yes' || favFoodResponse2 === 'y'){
  alert("I love mexican food as well");

}
else if (favFoodResponse2 === 'no' || favFoodResponse2 === 'n'){
  alert('Try it again you will love it');
}

console.log(favFoodResponse2);

let travel = prompt('Do you like to Travel?').toLowerCase();
if (travel === 'yes' || travel === 'y'){
  alert('Traveling is Great');
}
else if (travel === 'no' || travel === 'n'){
  alert('Traveling will be exciting!');
}
console.log(travel);










alert('Thanks for taking the time to visit my webpage ' + userName);