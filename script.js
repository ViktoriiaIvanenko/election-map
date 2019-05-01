var createPolitician = function (name,partyColor){
   var politician = {};
        politician.name = name;
        politician.electionResults = null;
        politician.totalVotes = 0;
        politician.partyColor = partyColor;
        politician.tallyUp = function (){
  this.totalVotes = 0;
  
  for (i = 0; i < this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};
   return politician;

};


var scrooge = createPolitician ("Scrooge McDuck", [132, 17, 11]);
var gadget = createPolitician ("Gadget Hackwrench", [245, 141, 136]);

scrooge.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,
                          11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,
                          2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
gadget.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,
                         7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,
                         3,17,3,1,2,11,2,3,1];
scrooge.electionResults [9] = 1;
gadget.electionResults [9] = 28;
scrooge.electionResults [4] = 17;
gadget.electionResults [4] = 38;
scrooge.electionResults [43] = 11;
gadget.electionResults [43] = 27;

var setStateResults = function (state){
  theStates[state].winner = null;
  if(scrooge.electionResults [state]>gadget.electionResults[state]){
    theStates[state].winner = scrooge;
  }else if (scrooge.electionResults[state]<gadget.electionResults[state]){
    theStates[state].winner = gadget;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }else{
    theStates[state].rgbColor = [11, 32, 57];
  }
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
  candidate1Name.innerText = scrooge.name;
  candidate2Name.innerText = gadget.name;
 
  candidate1Results.innerText = scrooge.electionResults[state];
  candidate2Results.innerText = gadget.electionResults[state];
 
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};



scrooge.tallyUp();
gadget.tallyUp();
console.log(scrooge.totalVotes);
console.log(gadget.totalVotes);

var winner;
if (scrooge.totalVotes > gadget.totalVotes){
  winner = "Scrooge McDuck";
}else if (scrooge.totalVotes < gadget.totalVotes){
  winner = "Gadget Hackwrench";
}else if (scrooge.totalVotes = gadget.totalVotes){
  winner = "It's a draw";
}
console.log(winner);

var table = document.getElementById("countryResults");
table.children[0].children[0].children[0].innerText = scrooge.name;
table.children[0].children[0].children[1].innerText = scrooge.totalVotes;
table.children[0].children[0].children[2].innerText = gadget.name;
table.children[0].children[0].children[3].innerText = gadget.totalVotes;
table.children[0].children[0].children[5].innerText = winner;








 






  



















