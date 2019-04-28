var wins = 0;
var loses = 0;
var guessesLeft = 10;
var computerChoices = ["a", "b", "c"];
var yourGuessesSoFar=[];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

document.onkeyup = function (event) {
    console.log(event.key);
    console.log("Hello", yourGuessesSoFar);
    var userguess=event.key;

    if(userguess=== computerGuess){
      wins++;
    }
    if(userguess !== computerGuess){
        guessesLeft--;
    }
    if(guessesLeft===0){
        loses++;
    }
    yourGuessesSoFar.push(userguess);

    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;

    
    };