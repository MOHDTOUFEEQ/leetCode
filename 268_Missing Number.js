var missingNumber = function(nums) {
    
    let sorted_nums = nums.sort((a,b)=>a-b)

    for (let i = 0; i <= sorted_nums.length; i++) {
        if (sorted_nums[i] != i) {
            return i
        }
    }
    
};

console.log(missingNumber([0]));
