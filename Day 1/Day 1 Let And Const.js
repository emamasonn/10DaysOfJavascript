//https://www.hackerrank.com/challenges/js10-let-and-const/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
	
	// Begin Problem Solved
    const r = parseFloat(readLine());
    let area = Math.PI * (Math.pow(r, 2));
    console.log(area);
    let perimeter = Math.PI * r * 2;
    console.log(perimeter);
	//End Problem Solved
	
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}