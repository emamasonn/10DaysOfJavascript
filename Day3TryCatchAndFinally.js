//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

function reverseString(s) {
        try {
            var arrSplit = s.split('');
            var arrReverse = arrSplit.reverse();
            var arrJoin = arrReverse.join('');
            console.log(arrJoin);
        }
        catch (e) {
            console.log(e.message);
            console.log(s);
        }    
}