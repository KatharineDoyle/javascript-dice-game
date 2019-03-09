/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var score1 = 0;
// var score2 = 0;
//only want an array:

var scores, roundScore, activePlayer; // declaring the variables.

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// create the dice
// dice = Math.floor(Math.random() * 6) + 1; // number between 1 and 5

// random number Generator

// Math.random() * 6
// BUT we dnt want a decimal. so we use Math.floor

//= dice; // activePlayer will be either 0 or 1
// Element.textContent can only set plain text HTML. If we want HTML in selected element, we need innerHTML.

// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + "</em>" // italicising test. // now write HTML in string form.
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

// hide dice at beginning, change display property value.
document.querySelector('.dice').style.display = 'none';

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. random number

  var dice = Math.floor(Math.random() * 6) +1;

  //2. display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  // 3. update the round score IF the rolled number was NOT a 1.
  if (dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //Next player - activePlayer changes from 0 to 1.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-0").textContent = 0;

    // visibly see which player is active.
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    // toggle - add the class if its there, if not then remove.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

  }


}); // btn is 'callback function' ie. eventlistener calls it for us.






