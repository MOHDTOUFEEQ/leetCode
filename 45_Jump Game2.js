var jump = function(nums) {
    let count = 0;
    let highest = 0;
    let curr = 0;
    for(let i = 0; i <nums.length-1; i++ ){
        highest = Math.max(highest,i+ nums[i])
        if(i+ nums[i] >= nums.length-1){
            count++
            return count
        }
        if(i == curr){
            count++
            curr = highest
        }
        
    }
    return count
};