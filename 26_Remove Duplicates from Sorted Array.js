
var removeDuplicates = function(nums) {
   let l  = 1 
    for (let i = 1; i < nums.length; i++) {
        // console.log("1");
        if (nums[i]  != nums[i-1]) {
            nums[l] = nums[i]
            l++
        }
    }
    return l
};

console.log(removeDuplicates([1,2,3,5]));

