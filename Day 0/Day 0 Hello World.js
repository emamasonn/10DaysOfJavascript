//https://www.hackerrank.com/challenges/js10-hello-world/problem

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

// Problem solution
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
	// This line prints "Welcome to 10 Days of JavaScript!"
    console.log(parameterVariable);
    
}


function main() {
    const parameterVariable = readLine();
    greeting(parameterVariable);
}