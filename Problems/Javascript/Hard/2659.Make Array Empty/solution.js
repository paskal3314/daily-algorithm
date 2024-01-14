/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    const map = {};
    const n = nums.length;
    var result = n;
    for(let i=0; i<n; i++) {
        map[nums[i]] = i;
    }

    nums.sort((a,b) => a-b);
    let prev = 0;
    for(let i=0; i<n; prev = map[nums[i++]]) {        
        if(map[nums[i]] < prev) {
            result += n-i;
        }
    }
    return result;
};