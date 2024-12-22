
var removeDuplicates = function(nums) {
    const length = nums.length
    let L = 1
    for (let i = 1; i < length; i++) {
        if (nums[i] != nums[i-1]) {
            nums[L] = nums[i] 
            L = L+1
        }
    }
    return L
};
 
 console.log(removeDuplicates([1,2,2,3,5]));
 
 