// Declares variables 
var intMax, intMin, intRandom, intGuess, intCount;


// Gives a prompt to the user to enter in a minimum value and validates the user's value so that it's actually a number no lower than zero
intMin = parseInt(prompt("Choose the lowest number (but no lower than zero) in your guessing range: "));

while (isNaN(intMin) || intMin < 0) {
    intMin = parseInt(prompt("I'm sorry, but your lowest number choice was incorrect." + "\n" + "Please choose the lowest number (but no lower than zero) in your guessing range: "));
}


// Gives a prompt to the user to enter in a maximum value and validates the user's value so that it's actually a number at least two more than the minimum value
intMax = parseInt(prompt("Choose the highest number (must be at least two more than " + intMin + ") in your guessing range: "));

while (isNaN(intMax) || intMax < intMin + 2) {
    intMax = parseInt(prompt("I'm sorry, but your highest number choice was incorrect." + "\n" + "Please choose the highest number (must be at least two more than " + intMin + ") in your guessing range: "));
}


// Calculates a random number for the user to guess
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// Sets the counter to 1
intCount = 1;


// Gives a prompt to the user to enter in a guess and validates the user's guess so that it's actually a number between the user's minimum and maximum values
intGuess = parseInt(prompt("Now try to guess the number between " + intMin + " and " + intMax + ": "));

while (isNaN(intGuess) || (intGuess > intMax || intGuess < intMin)) {
    intGuess = parseInt(prompt("I'm sorry, but your guess was not valid." + "\n" + "Please guess a number between " + intMin + " and " + intMax + ": "));
}


// Gives messages to the user depending on whether the guess was too low or too high
 while (intGuess != intRandom) {
    intCount++;
    if (intGuess < intRandom) {
        intGuess = parseInt(prompt("Your guess was too low. Please guess another number between " + intMin + " and " + intMax + ": "));
    } else {
        intGuess = parseInt(prompt("Your guess was too high. Please guess another number between " + intMin + " and " + intMax + ": "));
    }
 }
 
 
// Gives congratulations message upon correct guess
if (intGuess == intRandom) {
alert("Congratulations! You guessed the correct number (" + intRandom + ")\n" +
		"and it only took you " + intCount + " attempts!");
} else {
}
