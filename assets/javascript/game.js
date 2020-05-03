var compNum = Math.floor(Math.random()*(120-19)+1)+19;
$("#randomnum").text(compNum)

var grey = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;

var wins = 0;
var losses = 0;

var totalScore = 0;
$("#user").text(totalScore);

function win(){
  wins = wins + 1;
        $('#win').text("Wins: " + wins);
        reset();
}

function lose(){
  losses = losses + 1;
        $('#losses').text("Losses: " + losses);
        reset();
}

$('#grey').on("click", function(){
  totalScore = totalScore + grey
  $('#user').text(totalScore);
  if (totalScore === compNum) {
      win();
      reset();
  } 
  else if (totalScore > compNum) {
      lose();
      reset();
  }
})

$('#red').on("click", function(){
  totalScore = totalScore + red
  $('#user').text(totalScore);
  if (totalScore === compNum) {
      win();
      reset();
  } 
  else if (totalScore > compNum) {
      lose();
      reset();
  }
})

$('#green').on("click", function(){
  totalScore = totalScore + green
  $('#user').text(totalScore);
  if (totalScore === compNum) {
      win();
      reset();
  } 
  else if (totalScore > compNum) {
      lose();
      reset();
  }
})

$('#yellow').on("click", function(){
  totalScore = totalScore + yellow
  $('#user').text(totalScore);
  if (totalScore === compNum) {
      win();
      reset();
  } 
  else if (totalScore > compNum) {
      lose();
      reset();
  }
})

$("#reset").on("click", function(){
  totalScore = 0;
  wins = 0;
  losses = 0;
  $('#user').text(totalScore);
  $('#wins').text("Wins: " + wins);
  $('#losses').text("Losses: " + losses);
  var compNum = Math.floor(Math.random()*(120-19)+1)+19;
  $("#randomnum").text(compNum)
  var grey = Math.floor(Math.random() * 12) + 1;
  var red = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var yellow = Math.floor(Math.random() * 12) + 1;
})


function reset() {
  totalScore = 0;
  var compNum = Math.floor(Math.random()*(120-19)+1)+19;
  $("#randomnum").text(compNum)
  var grey = Math.floor(Math.random() * 12) + 1;
  var red = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var yellow = Math.floor(Math.random() * 12) + 1;
}