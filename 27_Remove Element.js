var removeElement = function(nums, val) {
    let count = 0
    let j = nums.length - 1
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == val){
            if(j <= i){
                break
            }
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
            j--
            i--
        }else{
            count++
        }
    }
    return count
};


