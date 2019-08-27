//https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < s.length; i++) { 
        if (vowels.includes(s[i])) {
            arr1.push(s[i]);
        } else { 
            arr2.push(s[i]);
        }
    }
    for (let j = 0; j < arr1.length; j++) { 
        console.log(arr1[j]);
    }
    for (let m = 0; m < arr2.length; m++) {
        console.log(arr2[m]);
    }
}