//https://www.hackerrank.com/challenges/js10-bitwise/problem

function getMaxLessThanK(n, k) {
    let max = 0;
    let act = -1;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            act = i & j;
            if ((act < k) && (act > max)) {
                max = act;
            }
        }
    }
    return max;
}