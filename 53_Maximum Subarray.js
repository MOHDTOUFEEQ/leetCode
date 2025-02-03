var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let tempSum = nums[i] + currentSum
        if (tempSum > nums[i] ) {
            console.log("hi");
            
            currentSum = tempSum
        }
        else{
            currentSum = nums[i]
            console.log(nums[i]);
            
        }
        maxSum = Math.max(maxSum,currentSum)
        console.log(nums[i]);
    }

    return maxSum;
};

console.log(maxSubArray([-2,1]));
