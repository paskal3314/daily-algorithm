/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    let result = 0;
    let stack = 0;
    while(nums.length > 1) {
        let firstVal = nums[0];
        let isSmallest = true;
        for(let i=1; i<nums.length - stack; i++) {
            if(firstVal > nums[i]) {
                isSmallest = false;
                break;
            }
        }

        if(isSmallest) {
            nums.shift();
            stack = 0;
        }
        else {
            nums.push(nums.shift());
            stack++;
        }
        result++;
    }

    return result + 1;
};