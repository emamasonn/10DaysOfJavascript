//https://www.hackerrank.com/challenges/js10-arrows/problem

function modifyArray(nums) {
    let arr = nums.map(function (num) {
        if (num % 2 == 0) {
            return 2 * num;
        }
        else {
            return 3 * num;
        }
    });
    return arr;
}