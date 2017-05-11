'use strict';
function johnLennonFacts(facts){
  var excitingFacts = [];
  var i = 0;
  while (i < facts.length) {
    excitingFacts.push(facts[i] + "!!!");
    i = i + 1;
  }
  return excitingFacts
}

function theBeatlesPlay(musicians, instruments){
  var beatlesRoles = [];
  for(var i = 0; i < musicians.length; i = i +1){
    beatlesRoles.push(musicians[i] + "plays" + instruments[i])
  }
  return beatlesRoles
}

function iLovetheBeatles(number){
  var love = []
  if(number <= 10 && number > 0);
  var i = 0;
  do {
    love.push("I love the Beatles!");
    i = i + 1;
  } while (i < number){
  return love
}
}
