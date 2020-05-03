 //Generating a random number between 19 and 120
 compNum = Math.floor(Math.random()*101+19);
$("#randomnum").text(compNum);

//Each crystral will generate random number between 1 and 12
 grey = Math.floor(Math.random()*11+1);
 red = Math.floor(Math.random()*11+1);
 green = Math.floor(Math.random()*11+1);
 yellow = Math.floor(Math.random()*11+1);

 //Setting initial value to the variables and putting on HTML to show user
 userTot = 0;
 win = 0;
 lose = 0;
$("#user").text(userTot);
$("#win").text("Wins: "+win);
$("#losses").text("Losses: "+lose);


//This function will trigger when the game is done for new game.
function restart() {
   compNum = Math.floor(Math.random()*101+19)
   grey = Math.floor(Math.random()*11+1)
   red = Math.floor(Math.random()*11+1)
   green = Math.floor(Math.random()*11+1)
   yellow = Math.floor(Math.random()*11+1)
   userTot = 0
  $("#randomnum").text(compNum)
  $("#user").text(userTot)
}

//These functions will increase the number of wins/losses depends on the result of if/else statement
function winner(){
  win++;
  $("#win").text("Wins: "+win);
  alert("You won!")
}

function losser(){
  lose++;
  $("#losses").text("Losses: "+lose);
  alert("You lost! Try again :(")
}

//Assigning each crystals with what to do when they are clicked. It will determine if the user wins or lose in comparison of user# and computer#
$("#grey").on("click", function(){
  userTot = userTot + grey
  $("#user").text(userTot)
  if (userTot == compNum){
    winner()
    restart()
  }
  else if (userTot > compNum){
    losser()
    restart()
  }})

$("#red").on("click", function(){
  userTot = userTot + red
  $("#user").text(userTot)
  if (userTot == compNum){
    winner()
    restart()
  }
  else if (userTot > compNum){
    losser()
    restart()
  }})

$("#green").on("click", function(){
  userTot = userTot + green
  $("#user").text(userTot)
  if (userTot == compNum){
    winner()
    restart()
  }
  else if (userTot > compNum){
    losser()
    restart()
  }})

  $("#yellow").on("click", function(){
  userTot = userTot + yellow
  $("#user").text(userTot)
  if (userTot == compNum){
    winner()
    restart()
  }
  else if (userTot > compNum){
    losser()
    restart()
  }})
  

//Once pressed, it will reset the whole game/score board
$("#reset").on("click", function(){
  restart()
  win = 0;
  lose = 0;
  $("#user").text(userTot);
  $("#win").text("Wins: "+win);
  $("#losses").text("Losses: "+lose);
})