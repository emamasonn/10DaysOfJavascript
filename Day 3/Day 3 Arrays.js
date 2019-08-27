//https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
    let max1 = 0;
    let max2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max1 < nums[i]) {
            max2 = max1;
            max1 = nums[i];
        } else {
            if ((max2 < nums[i])&&(max1 > nums[i])) { 
                max2 = nums[i];
            }
        }
    }
    return max2
}