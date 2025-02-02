var twoSum = function(nums, target) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                res.push(i,j)
                return res
            }
        }
        
    }
    return res
};

console.log(twoSum([3,2,4],6))