var maxOperations = function(nums, k) {
    nums = nums.sort((a,b)=>a-b)
    let left = 0
    let right = nums.length-1
    let res = 0
    while(left<right){
        if(sum == k){
            res++
            left++
            right--
            if (left < right) sum = nums[left] + nums[right]
        }else if (sum>k){
            right--
        }else{
            left++
        }
    }
    return res
};


console.log(maxOperations( [3,1,3,4,3], k = 6))