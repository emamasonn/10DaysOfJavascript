//https://www.hackerrank.com/challenges/js10-data-types/problem

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
	// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(parseInt(secondInteger)+firstInteger);
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
	// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Decimal type) on a new line.
    console.log(parseFloat(secondDecimal)+firstDecimal);
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
	// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    console.log(firstString + secondString);
    
}