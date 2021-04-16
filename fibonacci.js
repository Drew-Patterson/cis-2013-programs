
var $ = function (id) 
{
    return document.getElementById(id);
}
var generate = function () 
{
	var intCount = parseInt($("total_fib").value); // Gets user input from DOM
    
    if (isNaN(intCount) || intCount < 2 || intCount > 100) { // Validates the user input to ensure it is a number between 2 and 100
        
        $("output").value = "Invalid input. Please enter a number between 2 and 100." // Displays error message in the output box
        $("total_fib").value = ""; // Blanks out the input box
        
    } else {
        
        var i = 0; // Initializes the first number in the sequence
        var j = 1; // Initializes the second number in the sequence
        var k; // Declares the next variables after the first two
        var stringOutput = "0 1 "; // Sets the string output equal to the first two numbers in the Fibonacci sequence
    
        while (intCount > 2) {
            k = i + j; // Gets the next value in the sequence
            i = j; // Sets i equal to the current j value
            j = k; // Sets j equal to the current k value
            stringOutput = stringOutput + k + " "; // Adds the current k value to the output
            intCount--; // Decrements the intCount
        }
    
        $("output").value = stringOutput; // Sends the sequence output to the DOM
    
    }

}

window.onload = function () 
{
    $("total_fib").value = ""; // Makes the input box empty upon loading the window
    $("output").value = ""; // Makes the output box empty upon loading the window
    $("generate").onclick = generate; // Runs the function
}  