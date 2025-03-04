var applyOperations = function(nums) {
    for(let i = 0;i<nums.length-1;i++){
        if(nums[i] == nums[i+1]){
            nums[i] = (nums[i]*2)
            nums[i+1] = 0
            i++
            continue
        }
    
    }
    let length = nums.length
    nums = nums.filter((val)=> val>0)
    let diff = length - nums.length 
    for(let j = 1;j <= diff ;j++){
        nums.push(0)
    }
    return nums
};