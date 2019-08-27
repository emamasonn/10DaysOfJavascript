//https://www.hackerrank.com/challenges/js10-throw/problem

function isPositive(a) {
    if (a > 0) {
        return 'YES'
    }
    throw Error(a ? 'Negative Error' : 'Zero Error');

}